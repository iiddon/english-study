// Uji combo berlanjut antar materi & peringkat baru.
const { chromium } = require("playwright");
const url = "file://" + require("path").join(__dirname, "..", "index.html");
const ok = (c, m) => { if (!c) { console.log("FAIL", m); process.exitCode = 1; } else console.log("ok  ", m); };
(async () => {
  const b = await chromium.launch({ executablePath: "/usr/bin/google-chrome", args: ["--no-sandbox"] });
  const p = await (await b.newContext({ viewport: { width: 390, height: 844 } })).newPage();
  const errs = []; p.on("pageerror", e => errs.push(e.message));
  await p.goto(url); await p.evaluate(() => localStorage.setItem("englishpath_v1", JSON.stringify({ onb: 1 }))); await p.reload();
  const play = async (qs, wrongAt = -1) => {
    await p.evaluate(qs => { window.__it = qs; runQuiz(qs, { title: "t", back: () => nav("home"), again: () => {} }); }, qs);
    for (let k = 0; k < qs.length; k++) {
      await p.evaluate(w => { const n = +document.querySelector(".qcount").textContent.split("/")[0] - 1, q = __it[n]; const bs = [...document.querySelectorAll(".opts .opt")]; const r = bs.findIndex(b => b.querySelector("span").textContent === q.o[0]); bs[n === w ? (r + 1) % bs.length : r].click(); document.querySelector("#chk").click(); }, wrongAt);
      await p.click("#nx");
    }
  };
  const ms = await p.evaluate(() => LESSONS.flatMap(x => x.qs).filter(q => q.t === "m").slice(0, 12).map(q => ({ t: q.t, q: q.q, o: q.o, e: q.e, key: q.key })));
  await play(ms.slice(0, 4));
  ok(await p.evaluate(() => S.ccur) === 4, "materi 1: combo 4");
  await p.evaluate(() => nav("home"));
  await p.evaluate(qs => { window.__it = qs; runQuiz(qs, { title: "t2", back: () => nav("home"), again: () => {} }); }, ms.slice(4, 8));
  ok((await p.textContent("#combo")).includes("4× combo · lanjut"), "materi 2 dimulai dengan combo 4× lanjutan");
  await p.evaluate(() => nav("home"));
  await play(ms.slice(4, 8));
  ok(await p.evaluate(() => S.ccur === 8 && S.combo === 8), "materi 2: combo berlanjut ke 8");
  ok((await p.textContent(".stats3")).includes("8× berlanjut"), "hasil menampilkan combo berlanjut");
  await play(ms.slice(8, 12), 1);
  ok(await p.evaluate(() => S.ccur === 2 && S.combo === 9), "salah di soal 2 → combo reset, rekor 9 tetap");
  ok(await p.evaluate(() => rankOf(26000).name === "Raja Bahasa" && rankOf(9000).name === "Penasihat Raja" && rankOf(5000).next.at === 8000), "peringkat Kerajaan sampai Raja Bahasa 25.000");
  ok(errs.length === 0, "tanpa error " + errs.join("|"));
  await b.close();
})();
