// Uji babak: kunci, lulus, bintang.
const { chromium } = require("playwright");
const url = "file://" + require("path").join(__dirname, "..", "index.html");
const ok = (c, m) => { if (!c) { console.log("FAIL", m); process.exitCode = 1; } else console.log("ok  ", m); };
(async () => {
  const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  const p = await (await b.newContext({ viewport: { width: 375, height: 667 }, deviceScaleFactor: 2 })).newPage();
  const errs = []; p.on("pageerror", e => errs.push(e.message));
  await p.goto(url); await p.evaluate(() => localStorage.setItem("englishpath_v1", JSON.stringify({ onb: 1, name: "Dewi" }))); await p.reload();
  ok(await p.evaluate(() => LESSONS.every(x => x.qs.length === 60)), "36 pelajaran × 60 soal");
  ok(await p.evaluate(() => VOCAB.length) > 500, "kosakata: " + await p.evaluate(() => VOCAB.length) + " kata");
  ok(await p.evaluate(() => TALKS.length === 30 && LEVELS.every(L => L.reads.length === 5 && L.topics.length === 5 && L.speak.length === 30)), "30 percakapan, 5 bacaan & 5 topik bicara per level");
  await p.evaluate(() => nav("lesson", 0, 0, "q")); await p.waitForTimeout(200);
  ok(await p.locator('.round[data-r="2"]').isDisabled() && await p.locator('.round[data-r="3"]').isDisabled(), "babak 2 & 3 terkunci");
  await p.screenshot({ path: "/tmp/ep-shots/r-locked.png" });
  // lulus babak 1 dengan menjawab benar semua
  await p.click('.pgfoot [data-a="round"]');
  const play = async () => { for (let k = 0; k < 25; k++) {
    if (!(await p.locator(".quiz .qbar").count())) break;
    await p.evaluate(() => {
      const q = document.querySelector(".qtext"), c = (() => { const txt = q && q.textContent; return null; })();
    });
    const done = await p.evaluate(() => {
      // cari soal yang sedang tampil lewat QMAP + teks
      const t = document.querySelector(".qtext"), tr = t ? t.textContent : "";
      const all = Object.values(QMAP);
      const opts = [...document.querySelectorAll(".opts .opt, .tf .opt")];
      if (opts.length) {
        const c = all.find(q => (q.t === "m" || q.t === "f") && (q.q || "").replace(/___/g, "") === tr);
        let btn = opts[0];
        if (c && c.t === "m") btn = opts.find(b => b.textContent.replace(/^\d/, "") === c.o[0]) || btn;
        if (c && c.t === "f") btn = opts.find(b => (b.dataset.v === "1") === c.a) || btn;
        btn.click(); document.querySelector("#chk").click(); return true;
      }
      const f = document.querySelector("form.typer");
      if (f) { const c = all.find(q => q.t === "t" && (q.q || "").replace(/___/g, "") === tr); document.querySelector("#ans").value = c ? c.a[0] : "x"; f.querySelector(".btn").click(); return true; }
      const c = all.find(q => q.t === "o" && q.tr === tr);
      if (c) { const words = c.s.replace(/[.?!]+$/, "").split(" "); for (const w of words) { const bt = [...document.querySelectorAll('[data-a="pickw"]:not([disabled])')].find(x => x.textContent === w); if (bt) bt.click(); } }
      else { let x; while ((x = document.querySelector('[data-a="pickw"]:not([disabled])'))) x.click(); }
      const ch = document.querySelector("#chk"); if (ch) ch.click(); return true;
    });
    await p.waitForTimeout(20);
    if (await p.locator("#nx").count()) await p.click("#nx");
  } };
  await play();
  const s1 = await p.evaluate(() => [S.scores.b1, !!S.done.b1]);
  ok(s1[0] >= 75 && s1[1], "lulus babak 1: " + s1[0] + "%");
  ok(await p.locator("text=Lanjut ke Babak 2").count() === 1, "tombol Lanjut ke Babak 2");
  await p.screenshot({ path: "/tmp/ep-shots/r-pass1.png" });
  await p.click("text=Lanjut ke Babak 2");
  ok(await p.evaluate(() => document.querySelector(".quiz .eyebrow") && document.querySelector(".quiz").textContent.length > 0), "babak 2 berjalan");
  await play();
  ok(await p.evaluate(() => (S.rounds["b1:2"] || 0) >= 75), "lulus babak 2: " + await p.evaluate(() => S.rounds["b1:2"]) + "%");
  await p.evaluate(() => nav("lesson", 0, 0, "q")); await p.waitForTimeout(200);
  ok(!(await p.locator('.round[data-r="3"]').isDisabled()), "babak 3 terbuka");
  ok(await p.evaluate(() => starsOf(LESSONS[0])) === 2, "2 bintang");
  await p.screenshot({ path: "/tmp/ep-shots/r-tab.png" });
  ok(await p.evaluate(() => document.documentElement.scrollHeight <= innerHeight + 2), "tab Latihan pas satu layar (375×667)");
  await p.evaluate(() => { nav("home"); document.querySelectorAll("details.lvcard").forEach(d => d.open = true); });
  await p.locator(".lrow .stars").first().scrollIntoViewIfNeeded();
  await p.screenshot({ path: "/tmp/ep-shots/r-map.png" });
  await p.evaluate(() => nav("read", 2, 1)); ok(await p.evaluate(() => location.hash) === "#bacaan-2-1", "bacaan kedua punya alamat sendiri");
  await p.screenshot({ path: "/tmp/ep-shots/r-read.png" });
  ok(errs.length === 0, "tanpa error " + errs.join("|"));
  await b.close();
})();
