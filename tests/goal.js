const { chromium } = require("playwright");
const path = require("path");
(async () => {
  const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome" });
  const url = "file://" + path.resolve(__dirname, "../index.html");
  let fail = 0; const ok = (c, m) => { console.log((c ? "ok   " : "FAIL ") + m); if (!c) fail++; };
  for (const [name, vp] of [["hp", { width: 360, height: 700 }], ["ipad", { width: 820, height: 1180 }]]) {
    const p = await b.newPage({ viewport: vp }); const errs = []; p.on("pageerror", e => errs.push(e.message));
    await p.goto(url);
    await p.evaluate(() => { localStorage.setItem("englishpath_v1", JSON.stringify({ onb: 1, goal: 50, name: "T" })); });
    await p.reload(); await p.waitForTimeout(400);
    ok(await p.evaluate(() => S.goal) === 500, name + ": target lama 50 → 500");
    const m = await p.evaluate(() => missions().map(x => x.n + "/" + x.max).join("|"));
    ok(/500 XP\/500/.test(m) && /30 soal.*\/30/.test(m) && /combo 10×.*\/10/.test(m), name + ": misi " + m);
    await p.evaluate(() => { location.hash = "#pengaturan"; }); await p.waitForTimeout(400);
    if (!(await p.$('[data-a="goal"][data-v="1500"]'))) { await p.evaluate(() => nav("settings")); await p.waitForTimeout(300); }
    await p.click('[data-a="goal"][data-v="1500"]');
    ok(await p.evaluate(() => S.goal) === 1500, name + ": pilih 1.500");
    ok(/Pejuang/.test(await p.textContent("#goalinfo")), name + ": info Pejuang");
    const over = await p.evaluate(() => document.documentElement.scrollWidth > innerWidth);
    ok(!over, name + ": tanpa scroll samping");
    await p.screenshot({ path: "/tmp/ep-shots/goal-" + name + ".jpg", type: "jpeg", quality: 85 });
    for (const [o, n] of [[30, 250], [100, 1000], [77, 500]]) {
      await p.evaluate(o => localStorage.setItem("englishpath_v1", JSON.stringify({ onb: 1, goal: o })), o); await p.reload(); await p.waitForTimeout(300);
      ok(await p.evaluate(() => S.goal) === n, name + ": " + o + " → " + n);
    }
    ok(!errs.length, name + ": tanpa error " + errs.join(";"));
  }
  await b.close(); process.exit(fail ? 1 : 0);
})();
