// Uji fitur: simulasi tes, grafik progres, Kataku.
const { chromium } = require("playwright");
const path = require("path");
const url = "file://" + path.join(__dirname, "..", "index.html");
const shots = process.env.SHOTS || "/tmp/ep-shots";
require("fs").mkdirSync(shots, { recursive: true });
const ok = (c, m) => { if (!c) { console.log("FAIL", m); process.exitCode = 1; } else console.log("ok  ", m); };

(async () => {
  const browser = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  for (const [name, vp, scheme] of [["hp", { width: 390, height: 844 }, "light"], ["ipad", { width: 820, height: 1180 }, "dark"], ["hpkecil", { width: 375, height: 667 }, "light"]]) {
    const ctx = await browser.newContext({ viewport: vp, deviceScaleFactor: 2, colorScheme: scheme });
    const page = await ctx.newPage();
    const errors = [];
    page.on("pageerror", e => errors.push(e.message));
    page.on("console", m => { if (m.type() === "error" && !/Failed to load resource|net::ERR/.test(m.text())) errors.push(m.text()); });
    await page.goto(url);
    await page.evaluate(() => {
      const days = {}; for (let k = 0; k < 30; k++) { const d = new Date(); d.setDate(d.getDate() - k); if (k % 3 !== 2) days[dkey(d)] = [20, 60, 45, 80, 10, 55][k % 6]; }
      localStorage.setItem("englishpath_v1", JSON.stringify({ onb: 1, name: "Dewi", xp: 900, days, read: { basic: 80 }, talk: { basic: 100, elem: 60 }, scores: { b1: 90 } }));
    });
    await page.reload(); await page.waitForTimeout(300);

    // ---- grafik progres
    await page.evaluate(() => nav("profile"));
    ok(await page.locator(".xpchart rect").count() === 7, `${name}: grafik 7 hari`);
    await page.screenshot({ path: `${shots}/g-${name}-progress7.png` });
    await page.click('[data-a="range"][data-v="30"]');
    ok(await page.locator(".xpchart rect").count() === 30, `${name}: grafik 30 hari`);
    ok(await page.locator(".skrow2").count() === 6, `${name}: 6 kemampuan`);
    await page.locator(".skrow2").first().scrollIntoViewIfNeeded();
    await page.screenshot({ path: `${shots}/g-${name}-progress30.png` });

    // ---- Kataku
    await page.evaluate(() => nav("lesson", 0, 0, "k"));
    const w0 = await page.locator(".ex [data-bm]").first().getAttribute("data-bm");
    await page.locator(".ex [data-bm]").first().click();
    ok(await page.evaluate(w => !!S.mine[w], w0), `${name}: simpan "${w0}" dari kosakata`);
    ok(await page.locator(".toast").count() === 1, `${name}: toast muncul`);
    await page.screenshot({ path: `${shots}/g-${name}-bm.png` });
    await page.evaluate(() => nav("home"));
    await page.locator(".wotd [data-bm]").click();
    await page.evaluate(() => nav("mine"));
    const n1 = await page.locator(".wlist .wrow").count();
    ok(n1 >= 1, `${name}: Kataku berisi ${n1} kata`);
    const term = await page.evaluate(() => VOCAB.find(v => !S.mine[v.w] && v.w.length > 4).w);
    await page.fill("#mq", term);
    await page.waitForTimeout(100);
    const hits = await page.locator(".wlist .wrow").count();
    ok(hits >= 1, `${name}: cari "${term}" → ${hits} hasil`);
    await page.locator(".wlist [data-bm][aria-pressed=false]").first().click();
    await page.fill("#mq", "");
    await page.waitForTimeout(100);
    const n2 = await page.locator(".wlist .wrow").count();
    ok(n2 === n1 + 1, `${name}: tambah dari pencarian (${n2})`);
    await page.screenshot({ path: `${shots}/g-${name}-mine.png` });
    await page.locator(".wlist [data-bm]").first().click();
    ok(await page.locator(".wlist .wrow").count() === n2 - 1, `${name}: hapus dari Kataku`);
    await page.click(".toast button");
    await page.waitForTimeout(100);
    ok(await page.locator(".wlist .wrow").count() === n2, `${name}: batalkan hapus`);
    await page.click('[data-a="train"]');
    ok(await page.evaluate(() => ROUTE.v === "flash" && ROUTE.a[0] === "mine"), `${name}: latih Kataku di flashcard`);
    ok(await page.locator('.seg [data-f="mine"][aria-pressed=true]').count() === 1, `${name}: filter Kataku aktif`);

    // ---- simulasi tes
    await page.evaluate(() => nav("exam"));
    await page.screenshot({ path: `${shots}/g-${name}-examintro.png` });
    await page.click('[data-a="start"]');
    ok(await page.locator("#qtime").count() === 1, `${name}: timer tampil`);
    let steps = 0, shotR = false;
    while (await page.locator(".quiz .qbar").count() && steps < 60) {
      steps++;
      const isRead = await page.evaluate(() => !!document.querySelector(".quiz details.ctx[open]"));
      if (isRead && !shotR) { await page.screenshot({ path: `${shots}/g-${name}-examread.png` }); shotR = true; }
      const t = await page.evaluate(() => {
        const o = document.querySelector(".opt:not([disabled])"); if (o) { o.click(); document.querySelector("#chk").click(); return "m"; }
        const f = document.querySelector("form.typer"); if (f) { document.querySelector("#ans").value = "is"; document.querySelector("form.typer .btn").click(); return "t"; }
        let b; while ((b = document.querySelector('[data-a="pickw"]:not([disabled])'))) b.click(); const c = document.querySelector("#chk"); if (c) { c.click(); return "o"; } return "?";
      });
      if (t === "?") break;
      await page.waitForTimeout(30);
    }
    await page.waitForTimeout(200);
    const ex = await page.evaluate(() => S.exams[S.exams.length - 1]);
    ok(ex && ex.lv && ex.sc >= 0, `${name}: hasil tes ${ex && ex.lv} skor ${ex && ex.sc} (${steps} soal)`);
    ok(await page.locator(".skrow").count() >= 4, `${name}: rincian per bagian & level`);
    await page.screenshot({ path: `${shots}/g-${name}-examres.png`, fullPage: true });
    // waktu habis
    await page.evaluate(() => { const items = buildExam(); runQuiz(items, { title: "t", silent: true, limit: 2, back: () => nav("exam"), onEnd: res => { window.__res = res; examResult(items, res, 2, true); } }); });
    await page.waitForTimeout(3000);
    ok(await page.evaluate(() => window.__res && window.__res.every(x => x === false)), `${name}: waktu habis → sisa soal dihitung salah`);
    ok(await page.locator("text=waktu habis").count() === 1, `${name}: label waktu habis`);
    await page.evaluate(() => nav("profile"));
    ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${name}: tanpa scroll samping`);
    ok(errors.length === 0, `${name}: tanpa error ${errors.join(" | ")}`);
    await ctx.close();
  }
  await browser.close();
})();
