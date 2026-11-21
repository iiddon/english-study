// Uji fitur baru: Bubu bereaksi, kata hari ini, percakapan, kartu bagikan/sertifikat, mode gelap.
const { chromium } = require("playwright");
const path = require("path");
const url = "file://" + path.join(__dirname, "..", "index.html");
const shots = process.env.SHOTS || "/tmp/ep-shots";
require("fs").mkdirSync(shots, { recursive: true });
const ok = (c, m) => { if (!c) { console.log("FAIL", m); process.exitCode = 1; } else console.log("ok  ", m); };

(async () => {
  const browser = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  for (const [name, vp, scheme] of [["hp", { width: 390, height: 844 }, "light"], ["ipad", { width: 1180, height: 820 }, "dark"], ["hpkecil", { width: 375, height: 667 }, "light"]]) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 2, colorScheme: scheme });
    const page = await ctx.newPage();
    const errors = [];
    page.on("pageerror", e => errors.push(e.message));
    page.on("console", m => { if (m.type() === "error" && !/Failed to load resource|net::ERR/.test(m.text())) errors.push(m.text()); });
    await page.addInitScript(() => { if (!localStorage.getItem("englishpath_v1")) localStorage.setItem("englishpath_v1", JSON.stringify({ onb: 1, name: "Dewi", xp: 120 })); });
    await page.goto(url);
    await page.waitForTimeout(400);
    const theme = await page.evaluate(() => document.documentElement.dataset.theme);
    ok(theme === (scheme === "dark" ? "dark" : "light"), `${name}: tema otomatis ${theme}`);

    // kata hari ini
    const w = await page.locator(".wotd-w b").textContent();
    ok(w && w.length > 0, `${name}: kata hari ini "${w}"`);
    await page.screenshot({ path: `${shots}/f-${name}-home.png` });
    await page.locator('[data-a="wknow"]').click();
    ok(await page.evaluate(w => isKnown(w), w), `${name}: tandai sudah tahu`);
    ok(await page.locator(".wotd .okpill").count() === 1, `${name}: label sudah tahu tampil`);

    // kuis: Bubu bereaksi
    await page.evaluate(() => lessonQuiz(0, 0));
    for (let n = 0; n < 4; n++) {
      const t = await page.evaluate(() => {
        const opts = [...document.querySelectorAll(".opt")]; if (!opts.length) return "x";
        opts[0].click(); document.querySelector("#chk").click(); return "m";
      });
      if (t === "x") { const f = await page.$("form.typer"); if (f) { await page.fill("#ans", "zzz"); await page.click("form.typer .btn"); } else { await page.evaluate(() => { let b; while ((b = document.querySelector('[data-a="pickw"]:not([disabled])'))) b.click(); document.querySelector("#chk").click(); }); } }
      ok(await page.locator(".fb .bubu.react").count() === 1, `${name}: Bubu muncul di umpan balik soal ${n + 1}`);
      if (n === 1) await page.screenshot({ path: `${shots}/f-${name}-react.png` });
      await page.click("#nx");
    }
    // selesaikan kuis dengan jawaban benar lewat state
    await page.evaluate(() => nav("home"));

    // percakapan
    await page.evaluate(() => nav("talk"));
    ok(await page.locator(".tool").count() === 6, `${name}: daftar 6 percakapan`);
    await page.locator(".tool").nth(1).click();
    await page.waitForTimeout(900);
    for (let n = 0; n < 5; n++) {
      await page.waitForSelector("#reply .opt", { timeout: 4000 });
      const idx = await page.evaluate(n => { const L = LEVELS[1], T = TALK[L.id], u = T.turns.filter(t => t[0] === "u")[n]; const right = talkLine(u[1][0]); const bs = [...document.querySelectorAll("#reply .opt")]; return n === 2 ? bs.findIndex(b => b.textContent !== right) : bs.findIndex(b => b.textContent === right); }, n);
      ok(await page.locator("#chk").isDisabled(), `${name}: Kirim nonaktif sebelum memilih (${n + 1})`);
      await page.locator("#reply .opt").nth(idx).click();
      if (n === 0) await page.screenshot({ path: `${shots}/f-${name}-talk.png` });
      await page.click("#chk");
      await page.click("#nx");
      await page.waitForTimeout(800);
    }
    await page.waitForSelector(".talkend", { timeout: 4000 });
    const tk = await page.evaluate(() => S.talk.elem);
    ok(tk === 80, `${name}: skor percakapan ${tk}%`);
    const noScroll = await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth && document.documentElement.scrollHeight <= innerHeight + 2);
    ok(noScroll, `${name}: percakapan pas satu layar`);
    await page.screenshot({ path: `${shots}/f-${name}-talkend.png` });

    // kartu bagikan
    await page.click('.talkend [data-a="share"]');
    await page.waitForFunction(() => { const i = document.querySelector("#cimg"); return i && i.src.startsWith("data:image/png") && !document.querySelector(".modal.busy"); }, null, { timeout: 8000 });
    ok(true, `${name}: kartu hasil terbuat`);
    await page.screenshot({ path: `${shots}/f-${name}-share.png` });
    if (name === "hp") {
      const data = await page.evaluate(() => document.querySelector("#cimg").src);
      require("fs").writeFileSync(`${shots}/card-result.png`, Buffer.from(data.split(",")[1], "base64"));
    }
    await page.keyboard.press("Escape");
    ok(await page.locator(".modal").count() === 0, `${name}: modal tertutup dengan Esc`);

    // sertifikat dari tes level (paksa lulus)
    await page.evaluate(() => { S.cert.basic = { p: 95, d: dkey() }; save(); nav("profile"); });
    await page.click('.cert[data-a="cert"]');
    await page.waitForFunction(() => { const i = document.querySelector("#cimg"); return i && i.src.startsWith("data:image/png") && !document.querySelector(".modal.busy"); }, null, { timeout: 8000 });
    await page.fill("#cname", "Dewi Lestari");
    await page.waitForTimeout(900);
    ok(await page.evaluate(() => S.name) === "Dewi Lestari", `${name}: nama di sertifikat tersimpan`);
    if (name === "hp") {
      await page.waitForFunction(() => !document.querySelector(".modal.busy"));
      const data = await page.evaluate(() => document.querySelector("#cimg").src);
      require("fs").writeFileSync(`${shots}/card-cert.png`, Buffer.from(data.split(",")[1], "base64"));
    }
    await page.screenshot({ path: `${shots}/f-${name}-cert.png` });
    await page.click(".modal [data-x]");

    // mode gelap manual
    await page.click('[data-a="theme"][data-v="dark"]');
    ok(await page.evaluate(() => document.documentElement.dataset.theme) === "dark", `${name}: pilih Gelap`);
    await page.screenshot({ path: `${shots}/f-${name}-profile-dark.png`, fullPage: false });
    await page.evaluate(() => nav("home"));
    await page.screenshot({ path: `${shots}/f-${name}-home-dark.png` });
    await page.reload(); await page.waitForTimeout(300);
    { const th = await page.evaluate(() => [document.documentElement.dataset.theme, S.theme, localStorage.getItem("englishpath_v1").includes('"theme":"dark"')]); ok(th[0] === "dark", `${name}: gelap bertahan setelah muat ulang ${th}`); }
    await page.evaluate(() => lessonQuiz(1, 0));
    await page.evaluate(() => { document.querySelector(".opt") && document.querySelector(".opt").click(); });
    await page.screenshot({ path: `${shots}/f-${name}-quiz-dark.png` });
    await page.evaluate(() => { S.theme = "light"; save(); applyTheme(); });

    ok(errors.length === 0, `${name}: tanpa error ${errors.join(" | ")}`);
    await ctx.close();
  }
  await browser.close();
})();
