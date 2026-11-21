// Membuat ikon aplikasi (PNG) dan gambar pratinjau tautan. Ikon = maskot Bubu di atas kotak kuning.
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const out = path.join(__dirname, "..", "icons");
const BUBBLE = "M10 14a10 10 0 0 1 10-10h46a10 10 0 0 1 10 10v40a10 10 0 0 1-10 10H38l-14 14 2-14h-6a10 10 0 0 1-10-10z";
const face = `<path d="${BUBBLE}" fill="#5b5bf0"/><circle cx="32" cy="32" r="7" fill="#fff"/><circle cx="54" cy="32" r="7" fill="#fff"/><circle cx="34" cy="33" r="3.4" fill="#24264a"/><circle cx="56" cy="33" r="3.4" fill="#24264a"/><circle cx="24" cy="44" r="4" fill="#ff9bb3" opacity=".85"/><circle cx="62" cy="44" r="4" fill="#ff9bb3" opacity=".85"/><path d="M33 46q10 8 20 0" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>`;
// skala 3.3: maskot 284×304 px, berada di zona aman ikon maskable
const icon = (rx = 0) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="${rx}" fill="#ffc845"/>
<g transform="translate(114 116) scale(3.3)"><path d="${BUBBLE}" fill="#d9a21f" transform="translate(0 3)"/>${face}</g></svg>`;
const fav = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><rect width="512" height="512" rx="120" fill="#ffc845"/><g transform="translate(56 50) scale(4.65)">${face}</g></svg>`;
(async () => {
  fs.writeFileSync(path.join(out, "icon.svg"), icon(112));
  fs.writeFileSync(path.join(out, "favicon.svg"), fav);
  const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  const p = await b.newPage();
  const shot = async (svg, size, name) => {
    await p.setViewportSize({ width: size, height: size });
    await p.setContent(`<html><body style="margin:0">${svg.replace("<svg ", `<svg width="${size}" height="${size}" `)}</body></html>`);
    await p.screenshot({ path: path.join(out, name), omitBackground: true });
  };
  await shot(icon(), 512, "icon-512.png");
  await shot(icon(), 192, "icon-192.png");
  await shot(icon(), 512, "icon-maskable-512.png");
  await shot(icon(), 180, "apple-touch-icon.png");
  await shot(fav, 32, "favicon-32.png");
  await p.setViewportSize({ width: 1200, height: 630 });
  await p.setContent(`<html><head><link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@600;700&family=Nunito:wght@700;800&display=swap" rel="stylesheet"></head>
  <body style="margin:0;width:1200px;height:630px;background:#eef4ff;font-family:Nunito,sans-serif;display:flex;align-items:center;gap:60px;padding:0 90px;box-sizing:border-box;color:#24264a">
    <div style="flex:none;border-radius:72px;box-shadow:0 12px 0 #d9a21f;overflow:hidden;width:300px;height:300px">${icon().replace("<svg ", '<svg width="300" height="300" ')}</div>
    <div><div style="display:inline-block;padding:10px 20px;border-radius:99px;background:#fff;box-shadow:0 5px 0 #dbe4f7;font:800 26px Nunito,sans-serif">Gratis · A1 sampai C2</div>
    <div style="font:700 96px/1 Fredoka,sans-serif;margin-top:24px">English Path</div>
    <div style="font:700 34px/1.35 Nunito,sans-serif;margin-top:18px;color:#55587a">Belajar bahasa Inggris dari nol sampai mahir, ditemani Bubu.</div></div></body></html>`);
  await p.waitForLoadState("networkidle").catch(() => {}); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(200);
  await p.screenshot({ path: path.join(out, "og.png") });
  await b.close();
})();
