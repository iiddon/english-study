// Uji ringkasan lencana di Profil, halaman Koleksi, filter, dan detail.
const { chromium } = require("playwright");
const url = "file://" + require("path").join(__dirname, "..", "index.html");
const ok = (c, m) => { if (!c) { console.log("FAIL", m); process.exitCode = 1; } else console.log("ok  ", m); };
(async () => {
  const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  for (const [name, vp, sc] of [["hp", { width: 390, height: 844 }, "light"], ["ipad", { width: 1180, height: 820 }, "dark"]]) {
    const p = await (await b.newContext({ viewport: vp, deviceScaleFactor: 2, colorScheme: sc })).newPage();
    const errs = []; p.on("pageerror", e => errs.push(e.message));
    await p.goto(url); await p.evaluate(() => localStorage.setItem("englishpath_v1", JSON.stringify({ onb: 1, name: "iiddon", xp: 6067, best: 9, cor: 483, ans: 536, combo: 20, chests: 4, done: { b1: 1, b2: 1, b3: 1, b4: 1, b5: 1, b6: 1 }, scores: { b1: 100 }, read: { basic: 100 }, talk: { basic: 100 }, cert: { basic: { p: 90, d: "2026-11-20" } } }))); await p.reload();
    await p.evaluate(() => { newBadges(); save(); nav("profile"); });
    const sum = p.locator(".bsum");
    ok(await sum.count() === 1, `${name}: kartu ringkasan lencana di Profil`);
    ok(await p.locator(".badges").count() === 0, `${name}: daftar lencana panjang tidak lagi di Profil`);
    await sum.scrollIntoViewIfNeeded(); await p.screenshot({ path: `/tmp/ep-shots/b-${name}-sum.png` });
    await p.click(".bsum .bnear"); ok(await p.locator(".bsheet").count() === 1, `${name}: detail lencana terbuka`);
    await p.keyboard.press("Escape"); ok(await p.locator(".bsheet").count() === 0, `${name}: detail tertutup dengan Esc`);
    await p.click('[data-g="badges"]'); ok(await p.evaluate(() => ROUTE.v === "badges" && location.hash === "#lencana"), `${name}: halaman Koleksi lencana`);
    const n = await p.locator(".btile").count(); ok(n === await p.evaluate(() => BADGES.length), `${name}: semua ${n} lencana tampil`);
    ok(await p.locator(".bgrp").count() === 7, `${name}: 7 kategori`);
    await p.screenshot({ path: `/tmp/ep-shots/b-${name}-list.png` });
    await p.click('[data-a="show"][data-v="got"]'); const g = await p.locator(".btile").count(); ok(g === await p.evaluate(() => Object.keys(S.badges).length), `${name}: filter Didapat (${g})`);
    await p.click('[data-a="show"][data-v="todo"]'); await p.click('[data-a="tier"][data-v="4"]');
    const leg = await p.locator(".btile").count(); ok(leg > 0 && leg === await p.evaluate(() => BADGES.filter(b => b.r === 4 && !S.badges[b.id]).length), `${name}: filter Belum + Legendaris (${leg})`);
    await p.locator(".btile").first().click(); ok(await p.locator(".bsheet .bpr").count() === 1, `${name}: detail lencana belum didapat menampilkan progres`);
    await p.screenshot({ path: `/tmp/ep-shots/b-${name}-sheet.png` });
    await p.click(".bsheet [data-x]");
    ok(await p.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${name}: tanpa scroll samping`);
    ok(errs.length === 0, `${name}: tanpa error ` + errs.join("|"));
  }
  await b.close();
})();
