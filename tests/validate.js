// Memeriksa bank soal: jumlah per pelajaran, format, dan kunci jawaban.
const fs = require("fs"), path = require("path");
const src = f => fs.readFileSync(path.join(__dirname, "..", "src", f), "utf8");
eval(src("levels.js").replace("const LEVELS", "globalThis.LEVELS"));
eval(src("extra.js").replace("const EXTRA", "globalThis.EXTRA"));
eval(src("lessons2.js").replace("const MORE", "globalThis.MORE").replace("const READING", "globalThis.READING").replace("const SPEAK", "globalThis.SPEAK"));
for (const f of ["r1", "r2", "r3", "r4", "r5", "r6"]) eval(src(f + ".js").replace("const ROUNDS", "globalThis.ROUNDS"));
for (const k in ROUNDS) { const n = ROUNDS[k].trim().split("\n").length; if (n !== 40) console.log("ERR rounds " + k + " has " + n + " lines"); EXTRA[k] = (EXTRA[k] || "") + "\n" + ROUNDS[k]; }
eval(src("more2.js").replace("const READING2", "globalThis.READING2").replace("const SPEAK2", "globalThis.SPEAK2").replace("const TALK2", "globalThis.TALK2"));
const extraReads = [];
for (const k in READING2) READING2[k].forEach((r, n) => { EXTRA["r_" + k + (n + 2)] = r.qs; extraReads.push({ id: "r_" + k + (n + 2), title: "Bacaan " + r.title, quiz: [], min: 5 }); });
for (const k in READING) { EXTRA["r_" + k] = READING[k].qs; }
let bad = 0, total = 0;
const err = m => { bad++; console.log("ERR", m); };
for (const L of LEVELS) for (const x of [...L.lessons, { id: "r_" + L.id, title: "Bacaan " + L.name, quiz: [], min: 5 }, ...extraReads.filter(r => r.id.startsWith("r_" + L.id) && /\d$/.test(r.id))]) {
  const lines = (EXTRA[x.id] || "").trim().split("\n").map(s => s.trim()).filter(Boolean);
  const kinds = { m: x.quiz.length, t: 0, f: 0, o: 0 };
  const seen = new Set(x.quiz.map(q => q.q));
  x.quiz.forEach(q => { if (new Set(q.o).size !== 4) err(x.id + " dup option: " + q.q); });
  for (const ln of lines) {
    const p = ln.split("|");
    if (!(p[0] in kinds)) { err(x.id + " bad kind: " + ln); continue; }
    kinds[p[0]]++;
    if (seen.has(p[1])) err(x.id + " duplicate question: " + p[1]);
    seen.add(p[1]);
    if (p[0] === "m") {
      if (p.length !== 7) err(x.id + " m needs 7 fields: " + ln);
      if (new Set(p.slice(2, 6)).size !== 4) err(x.id + " dup option: " + ln);
      if (!p[6]) err(x.id + " no explanation: " + ln);
    } else if (p[0] === "t") {
      if (p.length !== 4 || !p[2] || !p[3]) err(x.id + " t needs 4 fields: " + ln);
    } else if (p[0] === "f") {
      if (p.length !== 4 || !/^[01]$/.test(p[2]) || !p[3]) err(x.id + " f needs 4 fields: " + ln);
    } else if (p[0] === "o") {
      if (p.length !== 3 || !p[2]) err(x.id + " o needs 3 fields: " + ln);
      if (p[1].replace(/[.?!]+$/, "").split(" ").length < 4) err(x.id + " o too short: " + ln);
    }
    if (/`|\$\{/.test(ln)) err(x.id + " illegal char: " + ln);
  }
  const n = Object.values(kinds).reduce((a, b) => a + b, 0);
  total += n;
  if (n < (x.min || 60)) err(x.id + " only " + n + " questions");
  if (!x.min && n !== 60) err(x.id + " has " + n + " questions, expected 60");
  console.log(x.id.padEnd(3), String(n).padStart(2), JSON.stringify(kinds), x.title);
}
console.log("TOTAL", total, bad ? "— " + bad + " problem(s)" : "— all good");
process.exit(bad ? 1 : 0);
