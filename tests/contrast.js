// Cek kontras teks nyata (warna terhitung vs latar terdekat) di mode terang dan gelap.
const { chromium } = require("playwright");
const url = "file://" + require("path").join(__dirname, "..", "index.html");
(async () => {
  const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  for (const scheme of ["light", "dark"]) {
    const p = await (await b.newContext({ viewport: { width: 390, height: 844 }, colorScheme: scheme })).newPage();
    await p.addInitScript(() => { if (!localStorage.getItem("englishpath_v1")) localStorage.setItem("englishpath_v1", JSON.stringify({ onb: 1, name: "Dewi", xp: 300, talk: { basic: 80 }, cert: { basic: { p: 90, d: "2026-11-20" } }, done: { b1: 1 } })); });
    await p.goto(url); await p.waitForTimeout(300);
    const screens = [["home", "nav('home');document.querySelectorAll('details.lvcard').forEach(d=>d.open=true)"], ["practice", "nav('practice')"], ["profile", "nav('profile')"], ["settings", "nav('settings')"], ["talk", "nav('talk')"], ["talk1", "nav('talk',0)"], ["exam", "nav('exam')"], ["mine", "S.mine={student:'2026-11-21'};nav('mine')"], ["lesson", "nav('lesson',0,0)"], ["quiz", "lessonQuiz(0,0);document.querySelector('.opt')&&document.querySelector('.opt').click()"]];
    let bad = [];
    for (const [n, js] of screens) {
      await p.evaluate(js); await p.waitForTimeout(1200);
      const r = await p.evaluate(() => {
        const lum = c => { const m = c.match(/[\d.]+/g).map(Number); const f = v => { v /= 255; return v <= .03928 ? v / 12.92 : Math.pow((v + .055) / 1.055, 2.4); }; return [.2126 * f(m[0]) + .7152 * f(m[1]) + .0722 * f(m[2]), m[3] == null ? 1 : m[3]]; };
        const bgOf = el => { while (el) { const c = getComputedStyle(el).backgroundColor; const a = (c.match(/[\d.]+/g) || []).map(Number); if (a.length && (a[3] == null || a[3] > .9)) return c; el = el.parentElement; } return getComputedStyle(document.body).backgroundColor; };
        const out = [];
        document.querySelectorAll("#app *, #top *, #nav *").forEach(el => {
          const t = [...el.childNodes].filter(x => x.nodeType === 3 && x.textContent.trim()).map(x => x.textContent.trim()).join(" ");
          if (!t) return; const cs = getComputedStyle(el); if (cs.visibility === "hidden" || cs.display === "none" || el.closest("[disabled]") || el.closest(".opt.right,.opt.wrong")) return;
          const [L1] = lum(cs.color), [L2] = lum(bgOf(el)); const cr = (Math.max(L1, L2) + .05) / (Math.min(L1, L2) + .05);
          const big = parseFloat(cs.fontSize) >= 24 || (parseFloat(cs.fontSize) >= 18.6 && +cs.fontWeight >= 700);
          if (cr < (big ? 3 : 4.5) && parseFloat(cs.opacity) > .9) out.push(cr.toFixed(2) + " " + t.slice(0, 40));
        });
        return out;
      });
      r.forEach(x => bad.push(n + ": " + x));
    }
    console.log(scheme, bad.length ? "\n  " + [...new Set(bad)].slice(0, 40).join("\n  ") : "OK");
  }
  await b.close();
})();
