// Praktik keterampilan: 1 kartu per level, 3 babak × 5 topik, migrasi progres lama, alur lanjut.
const { chromium } = require("playwright");
const url = "file://" + require("path").join(__dirname, "..", "index.html");
let fail = 0; const ok = (c, m) => { console.log((c ? "ok   " : "FAIL ") + m); if (!c) fail++; };
(async () => {
  const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  for (const [name, vp, dark] of [["hp", { width: 375, height: 740 }, 0], ["ipad", { width: 1180, height: 820 }, 1]]) {
    const p = await (await b.newContext({ viewport: vp, colorScheme: dark ? "dark" : "light" })).newPage();
    const errs = []; p.on("pageerror", e => errs.push(e.message));
    await p.goto(url);
    // progres lama: kalimat 0 & 6 basic ("Hello…", "I have two sisters."), bacaan & percakapan lama
    await p.evaluate(() => localStorage.setItem("englishpath_v1", JSON.stringify({ onb: 1, spoke: { basic: { 0: 1, 6: 1 } }, read: { basic: 100, basic_1: 80 }, talk: { basic: 100 } })));
    await p.reload(); await p.waitForTimeout(300);
    const mig = await p.evaluate(() => JSON.stringify(S.spoke));
    ok(mig === '{"basic:0":{"0":1},"basic:1":{"1":1}}', name + ": migrasi bicara " + mig);
    await p.evaluate(() => { OPENLV.add(0); nav("home"); }); await p.waitForTimeout(200);
    ok(await p.locator('.lrow[data-a="read"], .lrow[data-a="speak"], .lrow[data-a="talk"]').count() === 0, name + ": baris lama hilang");
    ok(await p.locator('.lrow[data-a="skill"]').count() === 6, name + ": 6 kartu Praktik");
    const chips = await p.locator('.lrow[data-a="skill"][data-l="0"] .skchips').innerText();
    ok(/2\/5[\s\S]*0\/5[\s\S]*1\/5/.test(chips), name + ": chip A1 " + chips.replace(/\s+/g, " "));
    await p.locator('.lrow[data-a="skill"][data-l="0"]').screenshot({ path: `/tmp/ep-shots/sk-${name}-card.jpg`, type: "jpeg", quality: 85 });
    await p.click('.lrow[data-a="skill"][data-l="0"]'); await p.waitForTimeout(200);
    ok(await p.evaluate(() => ROUTE.v === "skill" && ROUTE.a[1] === 0 && location.hash === "#praktik-0-0"), name + ": buka Praktik A1 babak 1");
    ok(await p.locator(".sklist .lrow").count() === 5, name + ": 5 bacaan");
    ok(await p.locator(".newtag").count() === 2, name + ": 2 tanda Baru");
    await p.screenshot({ path: `/tmp/ep-shots/sk-${name}-b1.jpg`, type: "jpeg", quality: 85 });
    await p.click('[data-a="tab"][data-b="1"]');
    ok((await p.locator(".sklist .lrow").count()) === 5 && (await p.locator(".sklist").innerText()).includes("Perkenalan diri"), name + ": babak 2 berbicara 5 topik");
    await p.click('[data-a="tab"][data-b="2"]');
    ok((await p.locator(".sklist .lrow").count()) === 5 && (await p.locator(".sklist").innerText()).includes("Pesan di warung"), name + ": babak 3 percakapan 5 topik");
    await p.screenshot({ path: `/tmp/ep-shots/sk-${name}-b3.jpg`, type: "jpeg", quality: 85 });
    ok(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth), name + ": tanpa scroll samping");
    // percakapan dari Praktik → keluar kembali ke Praktik babak 3
    await p.click('.lrow[data-a="tk"]'); await p.waitForTimeout(200);
    await p.click('[data-a="exit"]'); await p.waitForTimeout(200);
    ok(await p.evaluate(() => ROUTE.v === "skill" && ROUTE.a[1] === 2), name + ": keluar percakapan → Praktik babak 3");
    // berbicara topik: mulai dari kalimat yang belum lancar, kembali ke babak 2
    await p.evaluate(() => nav("speak", 0, 0)); await p.waitForTimeout(200);
    ok((await p.textContent(".tcard .tag")).includes("Kalimat 2 dari 6"), name + ": mulai dari kalimat belum lancar");
    ok((await p.textContent(".lesson-h h1")) === "Perkenalan diri", name + ": judul topik");
    await p.evaluate(() => { S.spoke["basic:4"] = { 0: 1, 1: 1, 2: 1, 3: 1, 4: 1 }; save(); nav("speak", 0, 4); }); await p.waitForTimeout(200);
    const lbl = (await p.textContent('[data-a="next"]')).trim();
    ok(lbl.includes("Babak 3"), name + ": topik ke-5 → " + lbl);
    await p.click('[data-a="next"]'); await p.waitForTimeout(250);
    ok(await p.evaluate(() => ROUTE.v === "talk" && TALKS[ROUTE.a[0]].id === "basic"), name + ": lanjut ke percakapan pertama");
    await p.evaluate(() => nav("speak", 0, 2)); await p.click('.back[data-a="toskill"]');
    ok(await p.evaluate(() => ROUTE.v === "skill" && ROUTE.a[1] === 1), name + ": kembali ke Praktik babak 2");
    ok(await p.evaluate(() => routeProgress().all[1] === 132), name + ": total materi 132");
    ok(await p.evaluate(() => BADGES.length === 77 && BADGES.filter(x => bcat(x) === "rute").some(x => x.id === "talk30")), name + ": 77 lencana");
    ok(!errs.length, name + ": tanpa error " + errs.join("|"));
  }
  await b.close(); process.exit(fail ? 1 : 0);
})();
