// Uji koin & Lemari Bubu.
const { chromium } = require("playwright");
const url = "file://" + require("path").join(__dirname, "..", "index.html");
const shots = "/tmp/ep-shots"; require("fs").mkdirSync(shots, { recursive: true });
const ok = (c, m) => { if (!c) { console.log("FAIL", m); process.exitCode = 1; } else console.log("ok  ", m); };
(async () => {
  const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  for (const [name, vp, scheme] of [["hp", { width: 390, height: 844 }, "light"], ["hpkecil", { width: 375, height: 667 }, "light"], ["ipad", { width: 1180, height: 820 }, "dark"], ["ipadtegak", { width: 820, height: 1180 }, "light"]]) {
    const p = await (await b.newContext({ viewport: vp, deviceScaleFactor: 2, colorScheme: scheme })).newPage();
    const errs = []; p.on("pageerror", e => errs.push(e.message));
    await p.goto(url);
    await p.evaluate(() => localStorage.setItem("englishpath_v1", JSON.stringify({ onb: 1, name: "Dewi", coins: 0 })));
    await p.reload(); await p.waitForTimeout(300);
    // dapat koin dari kuis
    await p.evaluate(() => { const x = LESSONS[0]; window.__it = x.qs.slice(0, 4).filter(q => q.t === "m"); runQuiz(window.__it, { title: "t", back: () => nav("home"), again: () => {} }); });
    const n = await p.evaluate(() => __it.length);
    for (let k = 0; k < n; k++) {
      await p.evaluate(() => { const q = __it[+document.querySelector(".qcount").textContent.split("/")[0] - 1]; [...document.querySelectorAll(".opts .opt")].find(b => b.querySelector("span").textContent === q.o[0]).click(); document.querySelector("#chk").click(); });
      if (k === 0) { ok(await p.locator(".fb .plus.coin").count() === 1, `${name}: umpan balik +1 koin`); if (name === "hp") await p.screenshot({ path: `${shots}/w-${name}-fb.png` }); }
      await p.click("#nx");
    }
    ok(await p.evaluate(() => S.coins) === n, `${name}: ${n} jawaban benar = ${n} koin`);
    ok(await p.locator(".coinpill").count() === 1, `${name}: hasil menampilkan koin`);
    // modal: beri koin, buka lemari dari chip
    await p.evaluate(() => { S.coins = 420; save(); nav("home"); });
    if (name === "hp") { await p.evaluate(() => { document.getElementById("swipe").scrollLeft = 9999; }); await p.waitForTimeout(300); await p.screenshot({ path: `${shots}/w-${name}-home.png` }); }
    await p.click("#top .chip.coin");
    ok(await p.evaluate(() => ROUTE.v) === "wardrobe", `${name}: chip koin membuka Lemari`);
    ok(await p.locator(".witem").count() === 18, `${name}: 18 barang per kategori`);
    await p.click('.witem[data-id="wizard"]');
    ok((await p.textContent("#wact")).includes("Beli · 400"), `${name}: tombol beli 400`);
    await p.click("#wact");
    ok(await p.locator(".wsheet").count() === 1, `${name}: konfirmasi beli muncul`);
    if (name === "hp" || name === "ipad") await p.screenshot({ path: `${shots}/w-${name}-confirm.png` });
    await p.click('.wsheet [data-a="yes"]');
    ok(await p.evaluate(() => S.coins === 20 && S.look.hat === "wizard" && !!S.owned["hat:wizard"]), `${name}: beli → koin 20, topi dipakai`);
    await p.click('.witem[data-id="crown"]');
    ok(await p.locator("#wact").isDisabled() && (await p.textContent("#whint")).includes("Lulus semua tes level"), `${name}: Mahkota khusus terkunci`);
    await p.click('.wtabs [data-c="acc"]');
    await p.click('.witem[data-id="balloon"]');
    ok((await p.textContent("#wact")).includes("Butuh 280"), `${name}: koin kurang → butuh 280 lagi`);
    await p.screenshot({ path: `${shots}/w-${name}-lemari.png` });
    ok(await p.evaluate(() => document.documentElement.scrollHeight <= innerHeight + 2 && document.documentElement.scrollWidth <= innerWidth), `${name}: Lemari pas satu layar`);
    // barang khusus terbuka lewat prestasi
    await p.evaluate(() => { S.best = 7; window.__nb = newBadges(); save(); });
    ok(await p.evaluate(() => __nb.some(x => x.n === "Medali juara") && ownsItem("acc", cItem("acc", "medal"))), `${name}: streak 7 membuka Medali juara`);
    await p.evaluate(() => nav("wardrobe")); await p.click('.wtabs [data-c="acc"]'); await p.click('.witem[data-id="medal"]'); await p.click("#wact");
    ok(await p.evaluate(() => S.look.acc === "medal"), `${name}: Medali dipakai`);
    await p.reload(); await p.waitForTimeout(300);
    ok(await p.evaluate(() => S.look.hat === "wizard" && S.look.acc === "medal"), `${name}: kostum tersimpan setelah muat ulang`);
    await p.evaluate(() => nav("home")); ok(await p.evaluate(() => document.querySelector(".greet .bubu").outerHTML.includes("#5b3fb8")), `${name}: Bubu di beranda memakai topi penyihir`);
    if (name === "hp") { await p.evaluate(() => nav("profile")); await p.screenshot({ path: `${shots}/w-${name}-profile.png` }); }
    // kartu bagikan dengan Bubu berkostum
    if (name === "hp") { await p.evaluate(() => { S.cert.basic = { p: 90, d: dkey() }; showCert(0); }); await p.waitForFunction(() => { const i = document.querySelector("#cimg"); return i && i.src.startsWith("data:image/png") && !document.querySelector(".modal.busy"); }, null, { timeout: 8000 });
      const d = await p.evaluate(() => document.querySelector("#cimg").src); require("fs").writeFileSync(`${shots}/w-cert.png`, Buffer.from(d.split(",")[1], "base64")); }
    ok(errs.length === 0, `${name}: tanpa error ${errs.join("|")}`);
  }
  await b.close();
})();
