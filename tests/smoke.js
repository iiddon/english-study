// Uji asap: jalankan seluruh alur aplikasi di Chrome tanpa kepala dan laporkan error.
const { chromium } = require("playwright");
const path = require("path");
const url = "file://" + path.join(__dirname, "..", "index.html");
const shots = process.env.SHOTS || "/tmp/ep-shots";
require("fs").mkdirSync(shots, { recursive: true });

(async () => {
  const browser = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  const errors = [];
  page.on("pageerror", e => errors.push("pageerror: " + e.message));
  page.on("console", m => { if (m.type() === "error" && !/Failed to load resource|net::ERR/.test(m.text())) errors.push("console: " + m.text()); });
  const log = (...a) => console.log(...a);
  const click = async sel => {
    if (sel.includes(".lrow")) await page.evaluate(() => document.querySelectorAll("details.lvcard").forEach(d => { d.open = true; }));
    // Di halaman pelajaran menu bawah disembunyikan; kembali lewat tombol ← di kiri atas.
    if ((sel.startsWith("#nav") || sel === '.back[data-g="home"]') && await page.evaluate(() => document.body.classList.contains("sub"))) {
      await page.locator(".lv-top .iconbtn").click();
      if (sel.includes('"home"')) return;
    }
    await page.locator(sel).first().click();
  };
  const state = () => page.evaluate(() => JSON.parse(JSON.stringify(S)));

  // Menjawab satu soal yang sedang tampil; wrong=true sengaja menjawab salah.
  async function answer(wrong) {
    const info = await page.evaluate(() => {
      const all = Object.values(QMAP);
      const qt = (document.querySelector(".qtext") || {}).textContent || "";
      if (document.querySelector(".opts")) {
        const texts = [...document.querySelectorAll(".opts .opt span")].map(e => e.textContent);
        const q = all.find(q => q.t === "m" && q.q.replace(/___/g, "") === qt && q.o.slice().sort().join("|") === texts.slice().sort().join("|"));
        return { t: "m", right: texts.indexOf(q.o[0]) };
      }
      if (document.querySelector(".tf")) { const q = all.find(q => q.t === "f" && q.q === qt); return { t: "f", a: q.a }; }
      if (document.querySelector("#ans")) { const q = all.find(q => q.t === "t" && q.q.replace(/___/g, "") === qt); return { t: "t", a: q.a[0] }; }
      if (document.querySelector(".listen")) return { t: "l" };
      const q = all.find(q => q.t === "o" && q.tr === qt);
      return { t: "o", words: q.s.replace(/[.?!]+$/, "").split(" ") };
    });
    if (info.t === "m") { const n = wrong ? (info.right + 1) % 4 : info.right; await page.locator(".opts .opt").nth((n + 1) % 4).click(); await page.locator(".opts .opt").nth(n).click(); await click("#chk"); }
    else if (info.t === "f") { await click(`.tf .opt[data-v="${(wrong ? !info.a : info.a) ? 1 : 0}"]`); await click("#chk"); }
    else if (info.t === "t") { await page.fill("#ans", wrong ? "zzz" : info.a.toUpperCase() + " "); await page.keyboard.press("Enter"); }
    else if (info.t === "o") {
      const words = wrong ? info.words.slice().reverse() : info.words;
      for (const w of words) await page.locator(".bank .word:not(.used)", { hasText: new RegExp("^" + w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "$") }).first().click();
      await click("#chk");
    } else {
      // listening: susun dari data soal yang aktif lewat bank kata
      const words = await page.evaluate(() => [...document.querySelectorAll(".bank .word")].map(b => b.textContent));
      for (let k = 0; k < words.length; k++) await page.locator(".bank .word:not(.used)").first().click();
      await click("#chk");
    }
    return info.t;
  }
  async function playQuiz(wrongEvery, shot) {
    const kinds = {}; let n = 0;
    while (await page.locator(".qbar").count() && !(await page.locator(".res-top").count())) {
      n++;
      const wrong = wrongEvery && n % wrongEvery === 0;
      const t = await answer(wrong); kinds[t] = (kinds[t] || 0) + 1;
      if (shot && shot[t]) { await page.screenshot({ path: path.join(shots, shot[t]) }); delete shot[t]; }
      await page.waitForSelector("#nx");
      await click("#nx");
      if (n > 60) throw new Error("quiz did not end");
    }
    return { n, kinds };
  }

  await page.goto(url);
  // onboarding
  await page.waitForSelector(".welcome");
  await page.screenshot({ path: path.join(shots, "0-welcome.png") });
  await click('[data-a="s1"]'); await page.fill("#nm", "Dewi"); await page.screenshot({ path: path.join(shots, "0a-name.png") }); await page.keyboard.press("Enter");
  await click('[data-a="goal"][data-v="50"]');
  await page.screenshot({ path: path.join(shots, "0b-welcome2.png") });
  await click('[data-a="a1"]');
  log("onboarding ->", await page.locator("h1").first().textContent(), "| onb", (await state()).onb);
  await click('#nav [data-g="home"]');
  await page.waitForSelector(".lvcard");
  log("greeting:", await page.locator(".greet .say").innerText());
  log("accordion open by default:", JSON.stringify(await page.evaluate(() => [...document.querySelectorAll("details.lvcard")].map(d => d.open ? 1 : 0))));
  await page.screenshot({ path: path.join(shots, "15-accordion.png"), fullPage: true });
  await page.locator('details.lvcard[data-li="2"] summary').click();
  await click('[data-a="allopen"]'); log("after buka semua:", await page.evaluate(() => document.querySelectorAll("details.lvcard[open]").length));
  await click('[data-a="allopen"]'); log("after tutup semua:", await page.evaluate(() => document.querySelectorAll("details.lvcard[open]").length));
  log("unit checks:", JSON.stringify(await page.evaluate(() => ({
    contr1: accepts(["had not met"], "hadn't met"), contr2: accepts(["will pass/'ll pass".split("/")[1]], "will pass"),
    contr3: accepts(["can't"], "cannot"), wrongNo: accepts(["has visited"], "visited"),
    say100: sayScore("I'm a student.", "I am a student"), say50: sayScore("Hello my name is Rina", "hello my"),
    srs: (() => { const m = {}; srsHit(m, "x", false); const a = m.x.b; srsHit(m, "x", true); const b = m.x.b + "@" + m.x.d; return a + "→" + b; })()
  }))));
  await page.screenshot({ path: path.join(shots, "1-home-mobile.png"), fullPage: false });
  log("stations:", await page.locator(".lrow").count(), "| levels:", await page.locator(".lvcard").count());

  // back button (hash history)
  await click('.lrow[data-a="open"][data-l="0"][data-j="1"]');
  log("hash on lesson:", await page.evaluate(() => location.hash));
  await page.goBack(); await page.waitForTimeout(150);
  log("back -> view:", await page.evaluate(() => ROUTE.v + " " + location.hash));
  await page.goForward(); await page.waitForTimeout(150);
  await click('.seg [data-t="q"]'); await click('[data-a="quiz"]');
  log("quiz hash:", await page.evaluate(() => location.hash));
  await page.goBack(); await page.waitForTimeout(150);
  log("back in quiz -> confirm shown:", await page.locator("#confirm .confirm").count(), "still quiz:", await page.locator(".qbar").count());
  await click('[data-a="stay"]'); await page.waitForTimeout(100);
  log("stay -> hash:", await page.evaluate(() => location.hash));
  await click('[data-a="quit"]'); await click('[data-a="leave"]'); await page.waitForTimeout(200);
  log("leave -> view:", await page.evaluate(() => ROUTE.v + " " + location.hash));
  await page.goBack(); await page.waitForTimeout(150);
  log("back again -> view:", await page.evaluate(() => ROUTE.v + " " + location.hash));
  // deep link
  await page.evaluate(() => { location.hash = "#bicara-2"; }); await page.waitForTimeout(150);
  log("deep link -> view:", await page.evaluate(() => ROUTE.v + " " + JSON.stringify(ROUTE.a)));
  await click('#nav [data-g="home"]');
  // tapping an answer must only select it
  await page.evaluate(() => runQuiz([LESSONS[0].qs[0], LESSONS[0].qs.find(q => q.t === "f")], { title: "t", back: () => nav("home"), again: () => {} }));
  const xpA = (await state()).xp;
  await page.locator(".opts .opt").nth(0).click(); await page.locator(".opts .opt").nth(2).click();
  log("tap-select: graded?", await page.locator("#fb .fb").count(), "selected", await page.locator(".opt.sel").count(), "xp unchanged", (await state()).xp === xpA);
  await page.screenshot({ path: path.join(shots, "14-selected.png") });
  await page.keyboard.press("Enter"); log("enter confirms:", await page.locator("#fb .fb").count());
  await click("#nx"); await click('.tf .opt[data-v="1"]'); log("tf graded before confirm?", await page.locator("#fb .fb").count());
  await click("#chk"); await click("#nx"); await click('[data-a="back"]');
  // lesson tabs
  await click('.lrow[data-a="open"]');
  for (const t of ["c", "k", "q"]) { await click(`.seg [data-t="${t}"]`); }
  await click('.seg [data-t="m"]');
  await page.screenshot({ path: path.join(shots, "2-lesson-mobile.png") });
  await click('.seg [data-t="q"]');

  // full lesson quiz with some wrong answers
  await click('[data-a="quiz"]');
  let r = await playQuiz(6, { o: "3-order-mobile.png" });
  log("lesson quiz:", JSON.stringify(r));
  await page.waitForSelector(".res-top");
  await page.waitForTimeout(2200);
  await page.screenshot({ path: path.join(shots, "4-result-mobile.png"), fullPage: true });
  let s = await state();
  log("after quiz: xp", s.xp, "done", Object.keys(s.done), "score", s.scores.b1, "wrong", Object.keys(s.wrong).length, "streak", s.streak);

  // redo missed (all correct) -> wrong list should empty
  await click('[data-a="redo"]');
  r = await playQuiz(0); log("redo:", JSON.stringify(r));
  s = await state(); log("after redo: wrong", Object.keys(s.wrong).length);
  await click('[data-a="back"]');

  // quick practice + lesson match + keyboard path
  await click('[data-a="quick"]'); r = await playQuiz(0); log("quick:", r.n); await click('[data-a="back"]');
  await click('.seg [data-t="k"]'); await click('[data-a="lmatch"]');
  for (let k = 0; k < 6; k++) { if (k < 5) { await click(`.match [data-a="ma"][data-k="${k}"]`); await click(`.match [data-a="mb"][data-k="${k + 1}"]`); await page.waitForTimeout(460); } await click(`.match [data-a="ma"][data-k="${k}"]`); await click(`.match [data-a="mb"][data-k="${k}"]`); }
  await page.waitForSelector(".stats3"); log("lesson match done"); await click('[data-a="back"]');

  // practice hub
  await click('#nav [data-g="practice"]');
  await page.screenshot({ path: path.join(shots, "5-practice-mobile.png") });
  await click('[data-a="daily"]'); r = await playQuiz(4); log("daily:", JSON.stringify(r)); s = await state(); log("daily flag", s.daily, "xp", s.xp);
  await click('[data-a="back"]');
  await click('[data-a="mist"]'); r = await playQuiz(0); log("mistakes:", r.n); await click('[data-a="back"]');
  await click('[data-a="matchg"]');
  const np = await page.locator('.match [data-a="ma"]').count();
  for (let k = 0; k < np; k++) { await click(`.match [data-a="ma"][data-k="${k}"]`); await click(`.match [data-a="mb"][data-k="${k}"]`); }
  await page.waitForSelector(".stats3"); s = await state(); log("global match best", s.matchBest); await click('[data-a="back"]');
  if (await page.locator('[data-a="listen"]').count()) { await click('[data-a="listen"]'); r = await playQuiz(0); log("listen:", JSON.stringify(r)); await click('[data-a="back"]'); } else log("listen: not offered (no speech)");

  // flashcards
  await click('[data-a="flash"]');
  await click('[data-a="flip"]'); await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(shots, "6-flash-mobile.png") });
  await click('[data-a="later"]'); await click('[data-a="know"]'); await click('[data-a="know"]');
  await click('[data-a="filt"][data-f="expert"]');
  for (let k = 0; k < 80 && await page.locator('[data-a="know"]').count(); k++) await click('[data-a="know"]');
  log("flash empty state:", await page.locator('[data-a="resetk"]').count());
  await click('[data-a="resetk"]');
  s = await state(); log("known after reset of expert:", Object.keys(s.known).length);

  // placement
  await click('#nav [data-g="practice"]'); await click('[data-a="place"]');
  for (let k = 0; k < 18; k++) { if (k % 5 === 4) await click('[data-a="skip"]'); else { await page.locator(".opts .opt").first().click(); await click("#chk"); } }
  await page.waitForSelector('[data-a="go"]');
  log("placement result:", await page.locator("h1").first().textContent());
  if (await page.locator('[data-a="mark"]').count()) await click('[data-a="mark"]');
  await click('[data-a="go"]');

  // level test via home
  await click('.back[data-g="home"]');
  await click('.lrow.test[data-l="0"]'); r = await playQuiz(0); log("level test:", JSON.stringify(r));
  s = await state(); log("after level test: done", Object.keys(s.done).length, "badges", Object.keys(s.badges).join(","));
  await page.waitForTimeout(300);
  await click('[data-a="back"]');

  // reading
  await click('#nav [data-g="home"]');
  await click('.lrow[data-a="read"][data-l="1"]');
  await page.screenshot({ path: path.join(shots, "12-reading.png") });
  await click('[data-a="go"]');
  await page.locator("details.ctx summary").click();
  r = await playQuiz(0); log("reading:", JSON.stringify(r)); s = await state(); log("read score", JSON.stringify(s.read));
  await click('[data-a="back"]');
  // speaking
  await click('.back[data-g="home"]');
  await click('.lrow[data-a="speak"][data-l="0"]');
  await page.screenshot({ path: path.join(shots, "13-speak.png") });
  if (await page.locator('[data-a="self"]').count()) { await click('[data-a="self"]'); await click('[data-a="next"]'); await click('[data-a="self"]'); log("speak: self-mark path"); }
  else { log("speak: mic button present", await page.locator('[data-a="rec"]').count()); await page.evaluate(() => { S.spoke.basic = { 0: 1, 1: 1 }; save(); }); }
  s = await state(); log("spoke", JSON.stringify(s.spoke));
  // export / import roundtrip
  await click('#nav [data-g="profile"]');
  await click('[data-a="exp"]');
  const code = await page.locator("#expout textarea").inputValue();
  const before = (await state()).xp;
  await page.evaluate(() => { S = fresh(); S.onb = 1; save(); });
  await click('#nav [data-g="profile"]');
  await page.fill("#impin", code); await click('[data-a="imp"]');
  s = await state(); log("import: code", code.length, "chars, xp restored", s.xp === before, s.xp);
  log("install hint:", await page.evaluate(() => installHint()));
  // missions + chest
  await click('#nav [data-g="home"]');
  s = await state(); log("missions:", JSON.stringify(await page.evaluate(() => missions().map(m => m.v + "/" + m.max))));
  await page.evaluate(() => { const t = dkey(); S.days[t] = Math.max(S.days[t] || 0, S.goal); S.dc[t] = 15; S.dcombo[t] = 5; save(); rerender(); });
  await page.screenshot({ path: path.join(shots, "11-chest-ready.png") });
  const xp0 = (await state()).xp; await click('[data-a="chest"]'); s = await state();
  log("chest: +", s.xp - xp0, "xp, chests", s.chests, "badge", !!s.badges.chest, "again-button", await page.locator('[data-a="chest"]').count());
  // profile
  await click('#nav [data-g="profile"]');
  await click('[data-a="goal"][data-v="100"]');
  await page.locator("#snd").uncheck();
  await page.screenshot({ path: path.join(shots, "7-profile-mobile.png"), fullPage: true });
  s = await state(); log("goal", s.goal, "sound", s.sound, "xp", s.xp, "ans", s.ans, "cor", s.cor, "combo", s.combo);

  // reload keeps progress
  await page.reload(); await page.waitForSelector(".statgrid"); log("reload keeps screen:", await page.evaluate(() => ROUTE.v)); await click('#nav [data-g="home"]'); await page.waitForSelector(".lvcard");
  s = await state(); log("after reload: xp", s.xp, "done", Object.keys(s.done).length);

  // desktop + dark
  await page.setViewportSize({ width: 1280, height: 900 });
  await page.screenshot({ path: path.join(shots, "8-home-desktop.png") });
  await page.emulateMedia({ colorScheme: "dark" });
  await page.screenshot({ path: path.join(shots, "9-home-desktop-dark.png") });
  await page.setViewportSize({ width: 390, height: 844 });
  await click('.lrow[data-a="open"][data-l="2"][data-j="1"]'); await click('.seg [data-t="q"]'); await click('[data-a="quiz"]');
  for (let k = 0; k < 3; k++) { await answer(k === 1); if (k < 2) await click("#nx"); }
  await page.screenshot({ path: path.join(shots, "10-quiz-dark.png") });
  await click('[data-a="quit"]'); await click('[data-a="leave"]');
  await page.emulateMedia({ colorScheme: "light" });

  // reset
  await click('#nav [data-g="profile"]'); await click('[data-a="reset"]'); await click('[data-a="reset"]');
  s = await state(); log("after reset: xp", s.xp, "done", Object.keys(s.done).length, "resetAt>0", s.resetAt > 0);

  // horizontal overflow check on every main view at 360px
  await page.setViewportSize({ width: 360, height: 780 });
  for (const v of ["home", "practice", "profile"]) {
    await click(`#nav [data-g="${v}"]`);
    const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (over > 0) errors.push(`overflow-x ${over}px on ${v}`);
  }
  await click('#nav [data-g="home"]');
  for (const step of [() => click('.lrow[data-a="open"][data-l="4"][data-j="1"]'), () => click('.seg [data-t="c"]'), () => click('.seg [data-t="k"]'), () => click('.seg [data-t="q"]'), () => click('[data-a="quiz"]')]) {
    await step();
    const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (over > 0) errors.push(`overflow-x ${over}px in lesson flow: ${await page.locator("h1,.eyebrow").first().textContent()}`);
  }
  await click('[data-a="quit"]'); await click('[data-a="leave"]');
  await click('#nav [data-g="practice"]'); await click('[data-a="flash"]');
  { const over = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth); if (over > 0) errors.push(`overflow-x ${over}px on flash`); }
  console.log(errors.length ? "ERRORS:\n" + errors.join("\n") : "NO ERRORS");
  await browser.close();
  process.exit(errors.length ? 1 : 0);
})().catch(e => { console.error("TEST FAILED:", e.message.split("\n").slice(0, 6).join("\n")); process.exit(2); });
