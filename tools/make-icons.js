// Membuat ikon aplikasi (PNG) dan gambar pratinjau tautan dari SVG.
const { chromium } = require("playwright");
const fs = require("fs"), path = require("path");
const out = path.join(__dirname, "..", "icons");
const BUBBLE = "M172 136H340A56 56 0 0 1 396 192V280A56 56 0 0 1 340 336H236L158 398L176 336H172A56 56 0 0 1 116 280V192A56 56 0 0 1 172 136Z";
const FONT = "Bricolage Grotesque, Inter Display, Inter, Arial Black, sans-serif";
const icon = (bg = "#ffd84d") => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<rect width="512" height="512" fill="${bg}"/>
<path transform="translate(14 14)" d="${BUBBLE}" fill="#111111"/>
<path d="${BUBBLE}" fill="#3d5afe" stroke="#111111" stroke-width="16" stroke-linejoin="round"/>
<text x="256" y="284" text-anchor="middle" font-family="${FONT}" font-weight="800" font-size="132" fill="#ffffff">Hi!</text>
</svg>`;
// Favicon kecil: tanpa bayangan, garis lebih tebal agar terbaca di 16–32 px.
const fav = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
<rect width="512" height="512" rx="112" fill="#ffd84d"/>
<path d="M150 110H362A70 70 0 0 1 432 180V286A70 70 0 0 1 362 356H250L148 438L170 356H150A70 70 0 0 1 80 286V180A70 70 0 0 1 150 110Z" fill="#3d5afe" stroke="#111111" stroke-width="30" stroke-linejoin="round"/>
<text x="256" y="292" text-anchor="middle" font-family="${FONT}" font-weight="900" font-size="170" fill="#ffffff">Hi</text>
</svg>`;
(async () => {
  fs.writeFileSync(path.join(out, "icon.svg"), icon());
  fs.writeFileSync(path.join(out, "favicon.svg"), fav);
  const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  const p = await b.newPage();
  const shot = async (svg, size, name) => {
    await p.setViewportSize({ width: size, height: size });
    await p.setContent(`<html><body style="margin:0">${svg.replace("<svg ", `<svg width="${size}" height="${size}" `)}</body></html>`);
    await p.waitForTimeout(80);
    await p.screenshot({ path: path.join(out, name), omitBackground: true });
  };
  await shot(icon(), 512, "icon-512.png");
  await shot(icon(), 192, "icon-192.png");
  await shot(icon(), 512, "icon-maskable-512.png");
  await shot(icon(), 180, "apple-touch-icon.png");
  await shot(fav, 32, "favicon-32.png");
  // Gambar pratinjau tautan 1200×630
  await p.setViewportSize({ width: 1200, height: 630 });
  await p.setContent(`<html><body style="margin:0;width:1200px;height:630px;background:#c9f2e3;font-family:${FONT};display:flex;align-items:center;gap:56px;padding:0 80px;box-sizing:border-box;color:#111">
    <div style="flex:none;border:5px solid #111;border-radius:64px;box-shadow:12px 12px 0 #111;overflow:hidden;width:300px;height:300px">${icon().replace("<svg ", '<svg width="300" height="300" ')}</div>
    <div><div style="display:inline-block;padding:8px 18px;border:4px solid #111;border-radius:99px;background:#fff;font:700 26px Inter,sans-serif;letter-spacing:.08em">GRATIS · A1 → C2</div>
    <div style="font-weight:900;font-size:92px;line-height:.98;letter-spacing:-.03em;margin-top:22px">English Path</div>
    <div style="font:600 34px/1.3 Inter,sans-serif;margin-top:18px">Belajar bahasa Inggris dari nol sampai mahir. 750 soal, bacaan &amp; latihan bicara.</div></div></body></html>`);
  await p.waitForTimeout(100);
  await p.screenshot({ path: path.join(out, "og.png") });
  await b.close();
})();
