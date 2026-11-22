// Uji urutan "lanjut": pelajaran → bacaan → berbicara → percakapan → tes level → level berikutnya.
const { chromium } = require("playwright");
const url = "file://" + require("path").join(__dirname, "..", "index.html");
const ok = (c, m) => { if (!c) { console.log("FAIL", m); process.exitCode = 1; } else console.log("ok  ", m); };
(async () => {
  const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  const errs = []; p.on("pageerror", e => errs.push(e.message));
  await p.goto(url); await p.evaluate(() => localStorage.setItem("englishpath_v1", JSON.stringify({ onb: 1 }))); await p.reload();
  const seq = await p.evaluate(() => routeSteps(0).map(x => x.t + (x.j ?? x.k ?? x.n ?? "")).join(","));
  ok(seq === "lesson0,lesson1,lesson2,lesson3,lesson4,lesson5,read0,read1,read2,read3,read4,speak0,speak1,speak2,speak3,speak4,talk0,talk1,talk2,talk3,talk4,test", "urutan A1: " + seq);
  const chk = async (t, li, key, want) => { const s = await p.evaluate(([t, li, key]) => { const x = stepAfter(t, li, key); return x ? x.t + ":" + x.li + ":" + (x.j ?? x.k ?? x.n ?? "") : "null"; }, [t, li, key]); ok(s === want, `${t} ${li}/${key} → ${s}`); };
  await chk("lesson", 0, 5, "read:0:0");
  await chk("read", 0, 2, "read:0:3");
  await chk("read", 0, 4, "speak:0:0");
  await chk("speak", 0, 4, "talk:0:0");
  await chk("talk", 0, 1, "talk:0:2");
  await chk("talk", 0, 4, "test:0:");
  await chk("test", 0, undefined, "lesson:1:0");
  await chk("lesson", 0, 0, "lesson:0:1");
  await chk("test", 5, undefined, "null");
  // tab Latihan pelajaran ke-6 A1 dengan 3 bintang → ke Bacaan
  await p.evaluate(() => { S.done.b6 = 1; S.scores.b6 = 100; S.rounds["b6:2"] = 90; S.rounds["b6:3"] = 90; save(); nav("lesson", 0, 5, "q"); });
  ok((await p.textContent('[data-a="nextles"]')).includes("materi berikutnya"), "label tombol: " + (await p.textContent('[data-a="nextles"]')).trim());
  await p.click('[data-a="nextles"]');
  ok(await p.evaluate(() => ROUTE.v === "read" && ROUTE.a[0] === 0 && ROUTE.a[1] === 0), "pelajaran 6 A1 → Bacaan pertama A1");
  // hasil bacaan punya tombol lanjut
  await p.evaluate(() => { const R = LEVELS[0].reads[0]; window.__qs = R.qs; startRead(0, 0); });
  for (let k = 0; k < 5; k++) {
    await p.evaluate(() => { const t = document.querySelector(".qtext"); const all = __qs; const tr = t ? t.textContent : ""; const opts = [...document.querySelectorAll(".opts .opt, .tf .opt")];
      const c = all.find(q => (q.q || "").replace(/___/g, "") === tr); let btn = opts[0];
      if (c && c.t === "m") btn = opts.find(b => b.querySelector("span").textContent === c.o[0]) || btn; if (c && c.t === "f") btn = opts.find(b => (b.dataset.v === "1") === c.a) || btn;
      btn.click(); document.querySelector("#chk").click(); });
    await p.click("#nx");
  }
  ok(await p.locator('.quiz [data-g="home"]').count() === 1, "hasil: tombol Kembali ke beranda ada");
  ok(await p.locator('[data-a="next"]').count() === 1, "hasil bacaan: tombol " + (await p.locator('[data-a="next"]').textContent()).trim());
  await p.click('[data-a="next"]');
  ok(await p.evaluate(() => ROUTE.v === "read" && ROUTE.a[1] === 1), "bacaan 1 → bacaan 2");
  ok(errs.length === 0, "tanpa error " + errs.join("|"));
  await b.close();
})();
