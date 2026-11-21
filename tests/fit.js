// Cek: tab pelajaran tidak boleh membuat halaman bisa di-scroll, di berbagai ukuran layar.
const { chromium } = require("playwright");
(async () => {
  const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  const sizes = [["HP kecil", 375, 667], ["HP", 390, 844], ["iPad tegak", 820, 1180], ["iPad datar", 1180, 820], ["Laptop", 1366, 768]];
  let bad = 0;
  for (const [n, w, h] of sizes) {
    const p = await (await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 })).newPage();
    await p.addInitScript(() => localStorage.setItem("englishpath_v1", JSON.stringify({ onb: 1, xp: 10, name: "Dewi" })));
    await p.goto("file://" + require("path").join(__dirname, "..", "index.html") + ""); await p.waitForSelector(".lvcard");
    await p.evaluate(() => document.fonts.ready);
    const out = [];
    for (const [li, j] of [...Array(36)].map((_, k) => [Math.floor(k / 6), k % 6])) for (const t of ["m", "c", "k", "q"]) {
      await p.evaluate(([li, j, t]) => nav("lesson", li, j, t), [li, j, t]); await p.waitForTimeout(60);
      const r = await p.evaluate(() => ({ sh: document.documentElement.scrollHeight, ih: innerHeight, pages: ($("#pgc") || {}).textContent || "", over: !!document.querySelector(".panel.over"), sw: document.documentElement.scrollWidth - innerWidth }));
      const ok = r.sh <= r.ih + 1 && !r.over && r.sw <= 0; if (!ok) bad++;
      out.push(`${LEVELS_ID(li)}${j}${t}:${r.pages || "1"}${ok ? "" : "!(" + r.sh + "/" + r.ih + (r.over ? " over" : "") + ")"}`);
    }
    console.log(n.padEnd(10), out.join(" "));
    if (w === 390 || w === 1180) for (const t of ["m", "k"]) { await p.evaluate(t => nav("lesson", 1, 0, t), t); await p.waitForTimeout(80); await p.screenshot({ path: `/tmp/fit-${w}-${t}.png` }); }
    if (w === 375) { await p.evaluate(() => nav("lesson", 3, 3, "q")); await p.screenshot({ path: `/tmp/fit-375-q.png` }); }
  }
  function LEVELS_ID(i) { return ["b", "e", "i", "u", "a", "x"][i]; }
  console.log(bad ? bad + " PROBLEM(S)" : "ALL FIT");
  await b.close();
})();
