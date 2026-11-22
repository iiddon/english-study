// Percakapan: pesan terbaru harus selalu terlihat di area chat (tidak tergulir ke atas).
const { chromium } = require("playwright");
const url = "file://" + require("path").join(__dirname, "..", "index.html");
let fail = 0; const ok = (c, m) => { console.log((c ? "ok   " : "FAIL ") + m); if (!c) fail++; };
(async () => {
  const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  for (const [name, vp, rm] of [["hp", { width: 360, height: 780 }, "no-preference"], ["hp-pendek", { width: 375, height: 667 }, "reduce"], ["ipad", { width: 820, height: 1180 }, "no-preference"]]) {
    const p = await (await b.newContext({ viewport: vp, reducedMotion: rm })).newPage();
    const errs = []; p.on("pageerror", e => errs.push(e.message));
    await p.goto(url); await p.evaluate(() => localStorage.setItem("englishpath_v1", JSON.stringify({ onb: 1 }))); await p.reload();
    await p.evaluate(() => { TALKFROM = "talk"; nav("talk", 1); });
    const seen = async () => p.evaluate(() => { const c = document.querySelector("#chat"), m = [...c.querySelectorAll(".msg:not(.typing)")].pop(); if (!m) return true; const a = c.getBoundingClientRect(), r = m.getBoundingClientRect(); return r.bottom <= a.bottom + 2 && r.top >= a.top - 2; });
    for (let n = 0; n < 5; n++) {
      await p.waitForSelector("#reply .opt", { timeout: 5000 }); await p.waitForTimeout(400);
      ok(await seen(), `${name}: giliran ${n + 1} pesan terbaru terlihat saat memilih`);
      await p.locator("#reply .opt").first().click(); await p.click("#chk"); await p.waitForTimeout(300);
      ok(await seen(), `${name}: giliran ${n + 1} pesan terbaru terlihat setelah Kirim`);
      if (n === 2) await p.screenshot({ path: `/tmp/ep-shots/ts-${name}.jpg`, type: "jpeg", quality: 80 });
      await p.click("#nx");
    }
    await p.waitForSelector(".talkend", { timeout: 5000 }); await p.waitForTimeout(300);
    ok(await seen(), `${name}: akhir percakapan pesan terakhir terlihat`);
    ok(!errs.length, `${name}: tanpa error ${errs.join("|")}`);
  }
  await b.close(); process.exit(fail ? 1 : 0);
})();
