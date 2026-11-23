"use strict";
/* ================= helpers ================= */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const app = $("#app");
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const pick = a => a[Math.floor(Math.random() * a.length)];
const pad = n => String(n).padStart(2, "0");
const dkey = (d = new Date()) => d.getFullYear() + "-" + pad(d.getMonth() + 1) + "-" + pad(d.getDate());
const dayAgo = n => { const d = new Date(); d.setDate(d.getDate() - n); return dkey(d); };
const DAYN = ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"];
const DAYL = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
const MON = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];

const ICONS = {
  map: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  x: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  left: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  right: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  speaker: '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
  grid: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>',
  headphones: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>',
  compass: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>',
  retry: '<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>',
  award: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  target: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  play: '<polygon points="7 4 20 12 7 20 7 4"/>',
  down: '<polyline points="6 9 12 15 18 9"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  mic: '<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10v1a7 7 0 0 0 14 0v-1"/><line x1="12" y1="18" x2="12" y2="22"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>',
  chat: '<path d="M21 12a8 8 0 0 1-8 8H7l-4 3V12a8 8 0 0 1 8-8h2a8 8 0 0 1 8 8z"/><path d="M8 11h8M8 15h5"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  bookmark: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>',
  timer: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2M9 2h6"/>',
  chart: '<path d="M3 3v18h18"/><rect x="7" y="12" width="3" height="6"/><rect x="12" y="8" width="3" height="10"/><rect x="17" y="5" width="3" height="13"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
  lock: '<rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/>',
  shirt: '<path d="M8 3l4 2.5L16 3l5 3.5-2.5 4-2.5-1.2V21H8V9.3L5.5 10.5 3 6.5z"/>',
  moon: '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/>',
  spark: '<path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  box: '<rect x="3" y="9" width="18" height="12" rx="2"/><path d="M3 13h18"/><path d="M12 11v4"/><path d="M5 9a7 5 0 0 1 14 0"/>'
};
const I = n => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;
const BUBU_FACE = {
  happy: '<path d="M26 33q6-7 12 0M48 33q6-7 12 0" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/><circle cx="24" cy="44" r="4.4" fill="#ff9bb3"/><circle cx="62" cy="44" r="4.4" fill="#ff9bb3"/><path d="M31 44q12 0 24 0q-2 11-12 11t-12-11z" fill="#fff"/>',
  oops: '<path d="M25 25l12-4M61 25l-12-4" stroke="#fff" stroke-width="3" stroke-linecap="round"/><circle cx="32" cy="33" r="7" fill="#fff"/><circle cx="54" cy="33" r="7" fill="#fff"/><circle cx="33" cy="31" r="3.4" fill="#24264a"/><circle cx="55" cy="31" r="3.4" fill="#24264a"/><circle cx="24" cy="45" r="4" fill="#ff9bb3" opacity=".8"/><circle cx="62" cy="45" r="4" fill="#ff9bb3" opacity=".8"/><path d="M35 50q8-5 16 0" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>',
  wow: '<circle cx="32" cy="32" r="8.5" fill="#fff"/><circle cx="54" cy="32" r="8.5" fill="#fff"/><path d="M32 26.5l1.6 3.6 3.9.4-2.9 2.6.8 3.8-3.4-2-3.4 2 .8-3.8-2.9-2.6 3.9-.4zM54 26.5l1.6 3.6 3.9.4-2.9 2.6.8 3.8-3.4-2-3.4 2 .8-3.8-2.9-2.6 3.9-.4z" fill="#ffc845"/><circle cx="24" cy="45" r="4.4" fill="#ff9bb3"/><circle cx="62" cy="45" r="4.4" fill="#ff9bb3"/><ellipse cx="43" cy="50" rx="6" ry="6.5" fill="#fff"/>',
  base: '<circle cx="32" cy="32" r="7" fill="#fff"/><circle cx="54" cy="32" r="7" fill="#fff"/><circle cx="34" cy="33" r="3.4" fill="#24264a"/><circle cx="56" cy="33" r="3.4" fill="#24264a"/><circle cx="24" cy="44" r="4" fill="#ff9bb3" opacity=".8"/><circle cx="62" cy="44" r="4" fill="#ff9bb3" opacity=".8"/><path d="M33 46q10 8 20 0" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/>'
};
// mood: base (default), happy (benar), oops (salah, tetap menyemangati), wow (combo/sempurna)
// Kostum: look = { color, hat, face, acc }. Default memakai kostum pemain (S.look); false = Bubu polos (logo).
const COIN = '<svg class="coin-ic" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10" fill="#ffc845" stroke="#d9a21f" stroke-width="2"/><path d="M12 7l1.5 3.1 3.4.5-2.5 2.4.6 3.4-3-1.6-3 1.6.6-3.4-2.5-2.4 3.4-.5z" fill="#fff"/></svg>';
const LOOK0 = { color: "violet", hat: "none", face: "none", acc: "none" };
const cItem = (cat, id) => COSTUME[cat].find(x => x.id === id);
const BUBU = (size, cls = "", label = "", mood = "base", look) => {
  const L = look === false ? LOOK0 : Object.assign({}, LOOK0, look || (typeof S !== "undefined" && S && S.look) || {});
  const col = cItem("color", L.color) || COSTUME.color[0], hat = cItem("hat", L.hat), face = cItem("face", L.face), acc = cItem("acc", L.acc);
  const k = size / 86, h = Math.round(size * 92 / 86), W = Math.round(size * 114 / 86), Hh = Math.round(size * 132 / 86);
  const dressed = !!((hat && hat.svg) || (face && face.svg) || (acc && acc.svg) || col.fill.startsWith("url"));
  const box = dressed ? `width="${W}" height="${Hh}" viewBox="-14 -34 114 132" style="margin:${(-34 * k).toFixed(1)}px ${(-14 * k).toFixed(1)}px ${(-6 * k).toFixed(1)}px"` : `width="${size}" height="${h}" viewBox="0 0 86 92"`;
  const back = acc && acc.layer === "back" ? acc.svg : "", front = acc && acc.layer !== "back" ? acc.svg : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" class="bubu ${cls}" ${box} ${label ? 'role="img" aria-label="' + label + '"' : 'aria-hidden="true"'}>${col.fill.startsWith("url") ? COSTUME_DEFS : ""}<ellipse cx="43" cy="89" rx="24" ry="3" fill="rgba(36,38,74,.12)"/>${back}<path d="M10 14a10 10 0 0 1 10-10h46a10 10 0 0 1 10 10v40a10 10 0 0 1-10 10H38l-14 14 2-14h-6a10 10 0 0 1-10-10z" fill="${col.fill}"/>${L.color === "galaxy" ? COSTUME_GAL : ""}${BUBU_FACE[mood] || BUBU_FACE.base}${face ? face.svg : ""}${hat ? hat.svg : ""}${front}</svg>`;
};
// Ukuran gambar Bubu untuk kanvas (kartu bagikan): kotak penuh termasuk topi.
const bubuBox = (size, mood, look) => { const k = size / 86; const svg = BUBU(size, "", "", mood, look); const dressed = svg.includes('viewBox="-14'); return dressed ? { svg, w: 114 * k, h: 132 * k, dx: -14 * k, dy: -34 * k } : { svg, w: size, h: 92 * k, dx: 0, dy: 0 }; };
const LOGO = (size, label) => `<span style="display:grid;place-items:center;width:${size}px;height:${size}px;border-radius:26%;background:#ffc845;box-shadow:0 4px 0 #d9a21f;flex:none" ${label ? 'role="img" aria-label="' + label + '"' : ""}>${BUBU(Math.round(size * .62), "", "", "base", false)}</span>`;

/* ================= content ================= */
function parseLine(line) {
  const p = line.split("|");
  if (p[0] === "m") return { t: "m", q: p[1], o: p.slice(2, 6), e: p[6] || "" };
  if (p[0] === "t") return { t: "t", q: p[1], a: p[2].split("/"), e: p[3] || "" };
  if (p[0] === "f") return { t: "f", q: p[1], a: p[2] === "1", e: p[3] || "" };
  return { t: "o", s: p[1], tr: p[2] };
}
const LESSONS = [], QMAP = {}, VOCAB = [];
LEVELS.forEach((L, li) => {
  L.i = li;
  L.lessons.forEach((x, j) => {
    x.li = li; x.j = j;
    const extra = ((EXTRA[x.id] || "") + "\n" + (ROUNDS[x.id] || "")).trim().split("\n").map(s => s.trim()).filter(Boolean).map(parseLine);
    x.qs = x.quiz.map(q => ({ t: "m", q: q.q, o: q.o, e: q.e })).concat(extra);
    x.qs.forEach((q, n) => { q.key = x.id + ":" + n; q.li = li; QMAP[q.key] = q; });
    LESSONS.push(x);
  });
});
{ const seen = new Set(); LESSONS.forEach(x => x.vocab.forEach(([w, m]) => { if (!seen.has(w)) { seen.add(w); VOCAB.push({ w, m, li: x.li, t: x.title }); } }));
  LEVELS.forEach((L, li) => (VOCX[L.id] || "").trim().split("\n").forEach(ln => { const [w, m, t] = ln.split("|").map(x => x && x.trim()); if (w && m && !seen.has(w)) { seen.add(w); VOCAB.push({ w, m, li, t: t || "" }); } })); }
LEVELS.forEach(L => {
  const R = READING[L.id];
  if (R) {
    L.reads = [R, ...(READING2[L.id] || []), ...(READING3[L.id] || [])].map((r, k) => {
      const o = { title: r.title, text: r.text, k, sid: k ? L.id + "_" + k : L.id, qs: r.qs.trim().split("\n").map(x => x.trim()).filter(Boolean).map(parseLine) };
      o.qs.forEach((q, n) => { q.key = "r_" + L.id + (k ? k + 1 : "") + ":" + n; q.li = L.i; QMAP[q.key] = q; });
      return o;
    });
    L.read = L.reads[0];
  }
  // Praktik berbicara: 5 topik × 6 kalimat. L.speak = semua kalimat (untuk hitungan).
  L.topics = (SPEAKT[L.id] || []).map((t, k) => ({ title: t.title, s: t.s, k }));
  L.speak = L.topics.flatMap(t => t.s);
});
const NQ = LESSONS.reduce((n, x) => n + x.qs.length, 0) + LEVELS.reduce((n, L) => n + (L.reads || []).reduce((m, r) => m + r.qs.length, 0), 0);
const RANKS = [[0, "Rakyat Biasa"], [200, "Murid Istana"], [600, "Pengawal"], [1500, "Kesatria"], [3000, "Penyihir Kata"], [5000, "Panglima"], [8000, "Penasihat Raja"], [12000, "Bangsawan"], [17000, "Penguasa Bahasa"], [25000, "Raja Bahasa"]];
const KIND = { m: "Pilihan ganda", t: "Isian", f: "Benar/salah", o: "Susun kalimat" };

/* ================= state ================= */
const KEY = "englishpath_v1";
// Target harian (XP). 1 babak ≈ 200–250 XP ≈ 5 menit.
const GOALN = [[250, "Santai", "± 5–10 menit"], [500, "Normal", "± 15 menit"], [1000, "Serius", "± 30 menit"], [1500, "Pejuang", "± 45 menit"]];
const GOALS = GOALN.map(g => g[0]);
const goalInfo = () => { const g = GOALN.find(x => x[0] === S.goal) || GOALN[1]; return g[1] + " · " + g[2] + " sehari"; };
const fresh = () => ({ done: {}, scores: {}, xp: 0, streak: 0, best: 0, lastDay: "", days: {}, goal: 500, wrong: {}, known: {}, badges: {}, sound: true, ans: 0, cor: 0, combo: 0, daily: "", matchBest: 0, ts: 0, resetAt: 0, dc: {}, dcombo: {}, chest: "", chests: 0, read: {}, spoke: {}, onb: 0, name: "", theme: "auto", talk: {}, cert: {}, mine: {}, sk: {}, exams: [], rounds: {}, look: Object.assign({}, LOOK0), coins: 0, coinsAll: 0, owned: {}, seenSp: {}, perf: 0 });
let S = fresh();
function hydrate(o) {
  const s = Object.assign(fresh(), o || {});
  ["done", "scores", "days", "wrong", "known", "badges", "dc", "dcombo", "read", "spoke", "talk", "cert", "mine", "sk", "rounds", "owned", "seenSp"].forEach(k => { if (!s[k] || typeof s[k] !== "object") s[k] = {}; });
  ["xp", "streak", "best", "ans", "cor", "combo", "ccur", "matchBest", "ts", "resetAt", "chests", "onb", "dailyN"].forEach(k => { s[k] = Number(s[k]) || 0; });
  if (!s.fl || typeof s.fl !== "object") s.fl = {};
  const td = dkey();
  Object.keys(s.wrong).forEach(k => { if (!s.wrong[k] || typeof s.wrong[k] !== "object") s.wrong[k] = { b: 0, d: td }; });
  Object.keys(s.known).forEach(k => { if (!s.known[k] || typeof s.known[k] !== "object") s.known[k] = { b: 1, d: td }; });
  // Progres berbicara lama (per level, indeks kalimat) → per topik.
  LEVELS.forEach(L => {
    const old = s.spoke[L.id]; if (!old || typeof old !== "object") return;
    const list = (SPEAK[L.id] || []).concat(SPEAK2[L.id] || []);
    Object.keys(old).forEach(i => { const en = list[+i] && list[+i][0]; if (!en) return;
      L.topics.forEach(T => T.s.forEach((x, j) => { if (x[0] === en) { const key = L.id + ":" + T.k; s.spoke[key] = Object.assign({}, s.spoke[key], { [j]: 1 }); } })); });
    delete s.spoke[L.id];
  });
  { const OLD = { 30: 250, 50: 500, 100: 1000 }; if (OLD[s.goal]) s.goal = OLD[s.goal]; if (!GOALS.includes(s.goal)) s.goal = 500; }
  s.name = typeof s.name === "string" ? s.name.slice(0, 24) : "";
  if (!["auto", "light", "dark"].includes(s.theme)) s.theme = "auto";
  if (!Array.isArray(s.exams)) s.exams = [];
  s.look = Object.assign({}, LOOK0, s.look && typeof s.look === "object" ? s.look : {});
  ["color", "hat", "face", "acc"].forEach(c => { if (!cItem(c, s.look[c])) s.look[c] = LOOK0[c]; });
  ["coins", "coinsAll", "perf"].forEach(k => { s[k] = Math.max(0, Number(s[k]) || 0); });
  return s;
}
function loadLocal() { try { const r = localStorage.getItem(KEY); if (r) S = hydrate(JSON.parse(r)); } catch (e) {} }
function saveLocal() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
function save() { S.ts = Date.now(); saveLocal(); queuePush(); }

const doneCount = () => LESSONS.filter(x => S.done[x.id]).length;
const nextLesson = () => LESSONS.find(x => !S.done[x.id]) || null;
const opened = () => { const n = nextLesson(); return LESSONS.filter(x => S.done[x.id] || (n && x.id === n.id)); };
// Ulangan pintar (spaced repetition): kotak 0..5, jeda 0/1/3/7/14/30 hari.
const INT = [0, 1, 3, 7, 14, 30];
const addDays = n => { const d = new Date(); d.setDate(d.getDate() + n); return dkey(d); };
function srsHit(map, k, ok) {
  const e = map[k];
  if (!ok) { map[k] = { b: 0, d: dkey() }; return; }
  if (!e) return;
  const b = (e.b || 0) + 1;
  if (b >= INT.length) delete map[k]; else map[k] = { b, d: addDays(INT[b]) };
}
const wrongItems = () => Object.keys(S.wrong).filter(k => S.wrong[k].d <= dkey()).map(k => QMAP[k]).filter(Boolean);
const wrongLater = () => Object.keys(S.wrong).filter(k => S.wrong[k].d > dkey() && QMAP[k]).length;
const isKnown = w => !!(S.known[w] && S.known[w].b >= 1);
const knownCount = () => VOCAB.filter(v => isKnown(v.w)).length;
const topicN = (L, t) => Object.keys(S.spoke[L.id + ":" + t] || {}).length;
const topicDone = (L, t) => topicN(L, t) >= L.topics[t].s.length;
const spokeN = L => L.topics.reduce((n, T) => n + topicN(L, T.k), 0);
const spokeTotal = () => LEVELS.reduce((n, L) => n + spokeN(L), 0);
const streakNow = () => (S.lastDay === dkey() || S.lastDay === dayAgo(1)) ? S.streak : 0;
function rankOf(xp) { let k = 0; RANKS.forEach((r, i) => { if (xp >= r[0]) k = i; }); const n = RANKS[k + 1]; return { name: RANKS[k][1], at: RANKS[k][0], next: n ? { at: n[0], name: n[1] } : null }; }
function addXp(n) {
  const t = dkey();
  const before = S.streak;
  if (S.lastDay !== t) { S.streak = (S.lastDay === dayAgo(1) ? S.streak : 0) + 1; S.lastDay = t; S.best = Math.max(S.best, S.streak); if (S.streak % 7 === 0 && S.streak !== before) { addCoins(25); setTimeout(() => toast("Streak " + S.streak + " hari: +25 koin!"), 600); } }
  S.xp += n; S.days[t] = (S.days[t] || 0) + n;
  { const h = new Date().getHours(); if (!S.fl) S.fl = {}; if (h < 6) S.fl.early = 1; if (h >= 22) S.fl.night = 1; }
  ["days", "dc", "dcombo"].forEach(m => { const ks = Object.keys(S[m]).sort(); while (ks.length > 60) delete S[m][ks.shift()]; });
}
// Koin: mata uang Lemari Bubu, terpisah dari XP.
function addCoins(n) { S.coins += n; S.coinsAll += n; }
const SPECIAL = {
  c2: () => !!S.cert.expert, streak30: () => S.best >= 30, streak100: () => S.best >= 100, streak7: () => S.best >= 7,
  stars36: () => LESSONS.every(x => starsOf(x) === 3), alltests: () => LEVELS.every(L => S.cert[L.id]), cert: () => Object.keys(S.cert).length > 0,
  talk12: () => TALKS.filter(T => S.talk[T.id] != null).length >= 12, examc1: () => S.exams.some(e => e.li >= 4), exam90: () => S.exams.some(e => e.sc >= 90),
  read18: () => Object.keys(S.read).length >= 18, perfect10: () => S.perf >= 10
};
const spOpen = it => it.p === null && !!(it.u && SPECIAL[it.u[0]] && SPECIAL[it.u[0]]());
const ownsItem = (cat, it) => it.p === 0 || !!S.owned[cat + ":" + it.id] || spOpen(it);
const CATN = { color: "Warna", hat: "Topi", face: "Wajah", acc: "Aksesori" };
const missions = () => { const t = dkey(); return [
  { n: "Kumpulkan " + S.goal.toLocaleString("id-ID") + " XP", v: S.days[t] || 0, max: S.goal },
  { n: "Jawab 30 soal dengan benar", v: S.dc[t] || 0, max: 30 },
  { n: "Raih combo 10× tanpa salah", v: S.dcombo[t] || 0, max: 10 }]; };

// Babak: setiap pelajaran punya 3 babak × 20 soal. Babak 1 menandai pelajaran selesai; babak 2 & 3 memberi bintang.
const RN = ["Dasar", "Latihan", "Tantangan"];
const roundQs = (x, r) => x.qs.slice((r - 1) * 20, r * 20);
const roundScore = (x, r) => r === 1 ? S.scores[x.id] : S.rounds[x.id + ":" + r];
const roundPassed = (x, r) => r === 1 ? !!S.done[x.id] || (S.scores[x.id] || 0) >= 75 : (S.rounds[x.id + ":" + r] || 0) >= 75;
const roundOpen = (x, r) => r === 1 || roundPassed(x, r - 1);
const starsOf = x => [1, 2, 3].filter(r => roundPassed(x, r)).length;
const starHTML = x => { const n = starsOf(x); return `<span class="stars" role="img" aria-label="${n} dari 3 bintang">${[1, 2, 3].map(k => `<i class="${k <= n ? "on" : ""}">${k <= n ? "★" : "☆"}</i>`).join("")}</span>`; };
// Daftar percakapan: lima per level.
const TALKS = []; LEVELS.forEach((L, li) => [[L.id, TALK[L.id]], [L.id + "2", TALK2[L.id]], ...(TALK3[L.id] || []).map((t, k) => [L.id + (k + 3), t])].forEach(([id, t]) => { if (t) TALKS.push(Object.assign({ id, li }, t)); }));
// Semua materi di rute: pelajaran, bacaan, latihan berbicara, percakapan, dan tes level.
function routeProgress() {
  const c = { lesson: [0, 0], read: [0, 0], speak: [0, 0], talk: [0, 0], test: [0, 0] };
  LEVELS.forEach(L => {
    L.lessons.forEach(x => { c.lesson[1]++; if (S.done[x.id]) c.lesson[0]++; });
    (L.reads || []).forEach(r => { c.read[1]++; if (S.read[r.sid] != null) c.read[0]++; });
    L.topics.forEach(T => { c.speak[1]++; if (topicDone(L, T.k)) c.speak[0]++; });
    c.test[1]++; if (S.cert[L.id]) c.test[0]++;
  });
  TALKS.forEach(T => { c.talk[1]++; if (S.talk[T.id] != null) c.talk[0]++; });
  c.all = Object.values(c).reduce((a, v) => [a[0] + v[0], a[1] + v[1]], [0, 0]);
  return c;
}
// Praktik keterampilan per level: babak 1 bacaan, babak 2 berbicara, babak 3 percakapan (5 topik per babak).
const SKB = [["Bacaan", "book"], ["Berbicara", "mic"], ["Percakapan", "chat"]];
const levelTalks = li => TALKS.map((T, n) => ({ T, n })).filter(x => x.T.li === li);
function skillCounts(li) {
  const L = LEVELS[li];
  return [(L.reads || []).filter(r => S.read[r.sid] != null).length, L.topics.filter(T => topicDone(L, T.k)).length, levelTalks(li).filter(x => S.talk[x.T.id] != null).length];
}
const skillTotals = li => [(LEVELS[li].reads || []).length, LEVELS[li].topics.length, levelTalks(li).length];
const skillDone = li => skillCounts(li).reduce((a, b) => a + b, 0);
const skillFirst = li => { const c = skillCounts(li), t = skillTotals(li); const b = c.findIndex((v, i) => v < t[i]); return b < 0 ? 0 : b; };
const nCount = o => Object.keys(o || {}).length;
const stars3 = () => LESSONS.filter(x => starsOf(x) === 3).length;
const ownedCostumes = () => { let n = 0; Object.keys(COSTUME).forEach(c => COSTUME[c].forEach(it => { if (ownsItem(c, it)) n++; })); return n; };
// r: tingkat kelangkaan 1 perunggu, 2 perak, 3 emas, 4 legendaris. p: progres 0..1 untuk "hampir dapat".
const TIER = ["", "Perunggu", "Perak", "Emas", "Legendaris"];
const BADGES = [
  { id: "first", n: "Langkah pertama", d: "Selesaikan 1 pelajaran", ic: "flag", t: () => doneCount() >= 1 },
  { id: "s3", n: "Tiga hari", d: "Belajar 3 hari beruntun", ic: "flame", t: () => S.best >= 3 },
  { id: "s7", n: "Seminggu penuh", d: "Belajar 7 hari beruntun", ic: "flame", t: () => S.best >= 7 },
  { id: "perfect", n: "Sempurna", d: "Skor 100% di kuis pelajaran", ic: "target", t: () => Object.values(S.scores).some(v => v === 100) },
  { id: "combo10", n: "Combo 10", d: "10 jawaban benar berturut-turut", ic: "zap", t: () => S.combo >= 10 },
  { id: "c100", n: "100 benar", d: "Jawab 100 soal dengan benar", ic: "check", t: () => S.cor >= 100 },
  { id: "c500", n: "500 benar", d: "Jawab 500 soal dengan benar", ic: "check", t: () => S.cor >= 500 },
  { id: "w30", n: "Kolektor kata", d: "Tandai 30 kata sudah hafal", ic: "layers", t: () => knownCount() >= 30 },
  { id: "reader", n: "Pembaca", d: "Skor 60% atau lebih di satu bacaan", ic: "book", t: () => Object.values(S.read).some(v => v >= 60) },
  { id: "speaker", n: "Pembicara", d: "Ucapkan 10 kalimat dengan lancar", ic: "mic", t: () => spokeTotal() >= 10 },
  { id: "talk3", n: "Teman ngobrol", d: "Selesaikan 3 percakapan", ic: "chat", t: () => Object.keys(S.talk).length >= 3 },
  { id: "exam1", n: "Peserta ujian", d: "Selesaikan satu simulasi tes", ic: "timer", t: () => S.exams.length >= 1 },
  { id: "mine20", n: "Kamus pribadi", d: "Simpan 20 kata di Kataku", ic: "bookmark", t: () => Object.keys(S.mine).length >= 20 },
  { id: "star5", n: "Tuntas", d: "Raih 3 bintang di 5 pelajaran", ic: "star", t: () => LESSONS.filter(x => starsOf(x) === 3).length >= 5 },
  { id: "chest", n: "Pemburu peti", d: "Buka peti misi harian", ic: "box", t: () => S.chests >= 1 },
  { id: "xp1000", n: "1.000 XP", d: "Kumpulkan 1.000 XP", ic: "star", t: () => S.xp >= 1000 },
  { id: "s14", r: 2, n: "Dua minggu", d: "Belajar 14 hari beruntun", ic: "flame", t: () => S.best >= 14, p: () => S.best / 14 },
  { id: "s30", r: 3, n: "Sebulan konsisten", d: "Belajar 30 hari beruntun", ic: "flame", t: () => S.best >= 30, p: () => S.best / 30 },
  { id: "s60", r: 3, n: "Dua bulan membara", d: "Belajar 60 hari beruntun", ic: "flame", t: () => S.best >= 60, p: () => S.best / 60 },
  { id: "s100", r: 4, n: "Seratus hari", d: "Belajar 100 hari beruntun", ic: "flame", t: () => S.best >= 100, p: () => S.best / 100 },
  { id: "s365", r: 4, n: "Setahun setia", d: "Belajar 365 hari beruntun", ic: "flame", t: () => S.best >= 365, p: () => S.best / 365 },
  { id: "xp2500", r: 1, n: "2.500 XP", d: "Kumpulkan 2.500 XP", ic: "star", t: () => S.xp >= 2500, p: () => S.xp / 2500 },
  { id: "xp5000", r: 2, n: "5.000 XP", d: "Kumpulkan 5.000 XP", ic: "star", t: () => S.xp >= 5000, p: () => S.xp / 5000 },
  { id: "xp10k", r: 3, n: "10.000 XP", d: "Kumpulkan 10.000 XP", ic: "star", t: () => S.xp >= 10000, p: () => S.xp / 10000 },
  { id: "xp25k", r: 4, n: "Raja Bahasa", d: "Kumpulkan 25.000 XP", ic: "award", t: () => S.xp >= 25000, p: () => S.xp / 25000 },
  { id: "c1000", r: 2, n: "1.000 benar", d: "Jawab 1.000 soal dengan benar", ic: "check", t: () => S.cor >= 1000, p: () => S.cor / 1000 },
  { id: "c2500", r: 3, n: "2.500 benar", d: "Jawab 2.500 soal dengan benar", ic: "check", t: () => S.cor >= 2500, p: () => S.cor / 2500 },
  { id: "c5000", r: 4, n: "5.000 benar", d: "Jawab 5.000 soal dengan benar", ic: "check", t: () => S.cor >= 5000, p: () => S.cor / 5000 },
  { id: "combo20", r: 2, n: "Combo 20", d: "20 jawaban benar berturut-turut", ic: "zap", t: () => S.combo >= 20, p: () => S.combo / 20 },
  { id: "combo50", r: 3, n: "Combo 50", d: "50 jawaban benar berturut-turut", ic: "zap", t: () => S.combo >= 50, p: () => S.combo / 50 },
  { id: "combo100", r: 4, n: "Tak terbendung", d: "100 jawaban benar berturut-turut", ic: "zap", t: () => S.combo >= 100, p: () => S.combo / 100 },
  { id: "perf10", r: 2, n: "Sepuluh sempurna", d: "Skor 100% sebanyak 10 kali", ic: "target", t: () => S.perf >= 10, p: () => S.perf / 10 },
  { id: "perf25", r: 3, n: "Perfeksionis", d: "Skor 100% sebanyak 25 kali", ic: "target", t: () => S.perf >= 25, p: () => S.perf / 25 },
  { id: "perf50", r: 4, n: "Tanpa cela", d: "Skor 100% sebanyak 50 kali", ic: "target", t: () => S.perf >= 50, p: () => S.perf / 50 },
  { id: "star15", r: 2, n: "Bintang 15", d: "Raih 3 bintang di 15 pelajaran", ic: "star", t: () => stars3() >= 15, p: () => stars3() / 15 },
  { id: "star36", r: 4, n: "Semua bintang", d: "Raih 3 bintang di semua 36 pelajaran", ic: "star", t: () => stars3() >= 36, p: () => stars3() / 36 },
  { id: "route25", r: 1, n: "Pejalan rute", d: "Selesaikan 25 materi di rute", ic: "map", t: () => routeProgress().all[0] >= 25, p: () => routeProgress().all[0] / 25 },
  { id: "route50", r: 2, n: "Penjelajah rute", d: "Selesaikan 50 materi di rute", ic: "map", t: () => routeProgress().all[0] >= 50, p: () => routeProgress().all[0] / 50 },
  { id: "routeAll", r: 4, n: "Rute tuntas", d: "Selesaikan semua materi dari A1 sampai C2", ic: "map", t: () => { const a = routeProgress().all; return a[0] >= a[1]; }, p: () => { const a = routeProgress().all; return a[0] / a[1]; } },
  { id: "read6", r: 1, n: "Rajin membaca", d: "Kerjakan 6 bacaan", ic: "book", t: () => routeProgress().read[0] >= 6, p: () => routeProgress().read[0] / 6 },
  { id: "read18", r: 3, n: "Kutu buku", d: "Kerjakan 18 bacaan", ic: "book", t: () => routeProgress().read[0] >= 18, p: () => routeProgress().read[0] / 18 },
  { id: "speak36", r: 2, n: "Suara percaya diri", d: "Ucapkan 36 kalimat dengan lancar", ic: "mic", t: () => spokeTotal() >= 36, p: () => spokeTotal() / 36 },
  { id: "speak72", r: 3, n: "Lidah fasih", d: "Ucapkan 72 kalimat dengan lancar", ic: "mic", t: () => spokeTotal() >= 72, p: () => spokeTotal() / 72 },
  { id: "talk12", r: 3, n: "Diplomat", d: "Selesaikan 12 percakapan", ic: "chat", t: () => routeProgress().talk[0] >= 12, p: () => routeProgress().talk[0] / 12 },
  { id: "read30", r: 4, n: "Perpustakaan berjalan", d: "Kerjakan semua 30 bacaan", ic: "book", t: () => routeProgress().read[0] >= 30, p: () => routeProgress().read[0] / 30 },
  { id: "speak180", r: 4, n: "Orator", d: "Ucapkan semua 180 kalimat dengan lancar", ic: "mic", t: () => spokeTotal() >= 180, p: () => spokeTotal() / 180 },
  { id: "talk30", r: 4, n: "Duta bahasa", d: "Selesaikan semua 30 percakapan", ic: "chat", t: () => routeProgress().talk[0] >= 30, p: () => routeProgress().talk[0] / 30 },
  { id: "route_skill1", r: 2, n: "Serba bisa", d: "Tuntaskan 15 topik Praktik di satu level", ic: "spark", t: () => LEVELS.some(L => skillDone(L.i) >= 15), p: () => Math.max(...LEVELS.map(L => skillDone(L.i))) / 15 },
  { id: "talkPerfect", r: 2, n: "Lawan bicara ideal", d: "Skor 100% di 5 percakapan", ic: "chat", t: () => Object.values(S.talk).filter(v => v === 100).length >= 5, p: () => Object.values(S.talk).filter(v => v === 100).length / 5 },
  { id: "test1", r: 1, n: "Lulus ujian", d: "Lulus satu tes level", ic: "flag", t: () => nCount(S.cert) >= 1, p: () => nCount(S.cert) },
  { id: "test3", r: 2, n: "Tiga sertifikat", d: "Lulus 3 tes level", ic: "award", t: () => nCount(S.cert) >= 3, p: () => nCount(S.cert) / 3 },
  { id: "testAll", r: 4, n: "Sertifikat lengkap", d: "Lulus semua tes level A1–C2", ic: "award", t: () => nCount(S.cert) >= 6, p: () => nCount(S.cert) / 6 },
  { id: "exam5", r: 2, n: "Rajin ujian", d: "Selesaikan 5 simulasi tes", ic: "timer", t: () => S.exams.length >= 5, p: () => S.exams.length / 5 },
  { id: "exam90", r: 3, n: "Nilai A", d: "Skor 90 ke atas di simulasi tes", ic: "timer", t: () => S.exams.some(e => e.sc >= 90), p: () => Math.max(0, ...S.exams.map(e => e.sc)) / 90 },
  { id: "examC2", r: 4, n: "Level C2", d: "Simulasi tes dengan hasil C2", ic: "timer", t: () => S.exams.some(e => e.li >= 5), p: () => (Math.max(-1, ...S.exams.map(e => e.li)) + 1) / 6 },
  { id: "w100", r: 2, n: "100 kata", d: "Hafal 100 kata di flashcard", ic: "layers", t: () => knownCount() >= 100, p: () => knownCount() / 100 },
  { id: "w300", r: 3, n: "300 kata", d: "Hafal 300 kata di flashcard", ic: "layers", t: () => knownCount() >= 300, p: () => knownCount() / 300 },
  { id: "wAll", r: 4, n: "Kamus berjalan", d: "Hafal semua kata di flashcard", ic: "layers", t: () => knownCount() >= VOCAB.length, p: () => knownCount() / VOCAB.length },
  { id: "mine100", r: 2, n: "Kamus tebal", d: "Simpan 100 kata di Kataku", ic: "bookmark", t: () => nCount(S.mine) >= 100, p: () => nCount(S.mine) / 100 },
  { id: "chest10", r: 1, n: "Kolektor peti", d: "Buka 10 peti misi harian", ic: "box", t: () => S.chests >= 10, p: () => S.chests / 10 },
  { id: "chest50", r: 3, n: "Harta karun", d: "Buka 50 peti misi harian", ic: "box", t: () => S.chests >= 50, p: () => S.chests / 50 },
  { id: "chest100", r: 4, n: "Raja peti", d: "Buka 100 peti misi harian", ic: "box", t: () => S.chests >= 100, p: () => S.chests / 100 },
  { id: "daily7", r: 1, n: "Penantang", d: "Selesaikan 7 tantangan harian", ic: "calendar", t: () => S.dailyN >= 7, p: () => S.dailyN / 7 },
  { id: "daily30", r: 3, n: "Penantang sejati", d: "Selesaikan 30 tantangan harian", ic: "calendar", t: () => S.dailyN >= 30, p: () => S.dailyN / 30 },
  { id: "coin500", r: 2, n: "Celengan", d: "Kumpulkan total 500 koin", ic: "star", t: () => S.coinsAll >= 500, p: () => S.coinsAll / 500 },
  { id: "coin2000", r: 3, n: "Saudagar", d: "Kumpulkan total 2.000 koin", ic: "star", t: () => S.coinsAll >= 2000, p: () => S.coinsAll / 2000 },
  { id: "closet10", r: 1, n: "Gaya pertama", d: "Punya 10 kostum Bubu", ic: "shirt", t: () => ownedCostumes() >= 10, p: () => ownedCostumes() / 10 },
  { id: "closet30", r: 2, n: "Fashionista", d: "Punya 30 kostum Bubu", ic: "shirt", t: () => ownedCostumes() >= 30, p: () => ownedCostumes() / 30 },
  { id: "closetAll", r: 4, n: "Lemari penuh", d: "Punya semua 72 kostum Bubu", ic: "shirt", t: () => ownedCostumes() >= 72, p: () => ownedCostumes() / 72 },
  { id: "early", r: 2, n: "Burung pagi", d: "Belajar sebelum jam 6 pagi", ic: "sun", t: () => !!(S.fl && S.fl.early), p: () => 0 },
  { id: "night", r: 2, n: "Burung hantu", d: "Belajar setelah jam 10 malam", ic: "moon", t: () => !!(S.fl && S.fl.night), p: () => 0 },
  ...LEVELS.map(L => ({ id: "lv_" + L.id, n: "Jalur " + L.cefr, d: "Selesaikan semua pelajaran " + L.name, ic: "award", r: 2, t: () => L.lessons.every(x => S.done[x.id]) }))
];
const BPROG = {
  first: () => doneCount(), s3: () => S.best / 3, s7: () => S.best / 7, perfect: () => Math.max(0, ...Object.values(S.scores)) / 100, combo10: () => S.combo / 10,
  c100: () => S.cor / 100, c500: () => S.cor / 500, w30: () => knownCount() / 30, reader: () => Math.max(0, ...Object.values(S.read)) / 60, speaker: () => spokeTotal() / 10,
  chest: () => S.chests, star5: () => LESSONS.filter(x => starsOf(x) === 3).length / 5, xp1000: () => S.xp / 1000, talk3: () => Object.keys(S.talk).length / 3, exam1: () => S.exams.length, mine20: () => Object.keys(S.mine).length / 20
};
const badgeProg = b => { if (b.p) return Math.min(1, Math.max(0, b.p() || 0)); const f = BPROG[b.id]; if (f) return Math.min(1, f() || 0); const L = LEVELS.find(l => "lv_" + l.id === b.id); return L ? L.lessons.filter(x => S.done[x.id]).length / L.lessons.length : 0; };
const badgeHTML = (b, prog) => `<div class="badge t${b.r || 1}${S.badges[b.id] ? " on" : ""}"><span class="bi">${I(b.ic)}</span><span><b>${b.n}</b><em class="tier">${TIER[b.r || 1]}</em><small>${b.d}</small>${prog && !S.badges[b.id] ? `<span class="bprog" aria-label="Progres ${Math.round(badgeProg(b) * 100)}%"><i style="width:${badgeProg(b) * 100}%"></i></span>` : ""}</span></div>`;
// Kategori lencana untuk halaman Koleksi.
const BCATS = [["streak", "Streak"], ["soal", "Soal & combo"], ["rute", "Rute & materi"], ["kata", "Kosakata"], ["ujian", "Ujian"], ["hadiah", "Peti, koin & Lemari"], ["kejutan", "Kejutan"]];
const bcat = b => /^s\d/.test(b.id) ? "streak" : /^(c\d|combo|perf|perfect|xp)/.test(b.id) ? "soal" : /^(first|star|route|read|reader|speak|talk|lv_)/.test(b.id) ? "rute"
  : /^(w\d|wAll|mine)/.test(b.id) ? "kata" : /^(test|exam)/.test(b.id) ? "ujian" : /^(chest|coin|closet|daily)/.test(b.id) ? "hadiah" : "kejutan";
const badgeIcon = (b, cls = "") => `<span class="bic t${b.r || 1}${S.badges[b.id] ? " on" : ""} ${cls}">${I(S.badges[b.id] ? b.ic : "lock")}</span>`;
function badgeSummary() {
  const got = BADGES.filter(b => S.badges[b.id]), recent = got.slice().sort((x, y) => (S.badges[y.id] || "").localeCompare(S.badges[x.id] || "")).slice(0, 3);
  const near = BADGES.filter(b => !S.badges[b.id]).map(b => [b, badgeProg(b)]).sort((x, y) => y[1] - x[1])[0];
  return `<section class="card stack bsum" aria-label="Lencana">
    <div class="bsum-h"><h2>Lencana</h2><b>${got.length}<span class="muted"> / ${BADGES.length}</span></b></div>
    <span class="skbar"><i style="width:${got.length / BADGES.length * 100}%"></i></span>
    ${recent.length ? `<p class="eyebrow">Terbaru</p><div class="bmini">${recent.map(b => `<button class="bmi" data-a="badge" data-id="${b.id}">${badgeIcon(b)}<span>${esc(b.n)}</span></button>`).join("")}</div>` : `<p class="muted">Belum ada lencana. Selesaikan pelajaran pertamamu untuk mendapat yang pertama.</p>`}
    ${near ? `<p class="eyebrow">Paling dekat</p><button class="bnear" data-a="badge" data-id="${near[0].id}">${badgeIcon(near[0])}<span class="grow"><b>${esc(near[0].n)}</b><small>${esc(near[0].d)}</small><span class="bprog"><i style="width:${near[1] * 100}%"></i></span></span><em class="tierchip t${near[0].r || 1}">${TIER[near[0].r || 1]}</em></button>` : ""}
    <button class="btn lv" data-g="badges">${I("award")} Lihat koleksi lencana</button>
  </section>`;
}
// Lembar detail satu lencana (dipakai di Profil dan halaman Koleksi).
function badgeSheet(id) {
  const b = BADGES.find(x => x.id === id); if (!b) return;
  const on = !!S.badges[b.id], pr = Math.round(badgeProg(b) * 100);
  let m = $("#bsheet"); if (m) m.remove();
  m = document.createElement("div"); m.id = "bsheet"; m.className = "wsheet-bg";
  m.innerHTML = `<div class="wsheet bsheet" role="dialog" aria-modal="true" aria-labelledby="bsh">
    <div class="bsh-top">${badgeIcon(b, "big")}<div><em class="tierchip t${b.r || 1}">${TIER[b.r || 1]}</em><p class="wname" id="bsh">${esc(b.n)}</p><p class="muted">${esc(b.d)}</p></div></div>
    ${on ? `<p class="bgot">${I("check")} Didapat ${longDate(S.badges[b.id])}</p>` : `<div class="bpr"><span class="skbar"><i style="width:${pr}%"></i></span><b>${pr}%</b></div>`}
    <button class="btn ghost" data-x>Tutup</button></div>`;
  document.body.appendChild(m);
  const close = () => { m.remove(); document.removeEventListener("keydown", key, true); };
  const key = e => { if (e.key === "Escape") { e.stopPropagation(); close(); } };
  document.addEventListener("keydown", key, true);
  m.addEventListener("click", e => { if (e.target === m || e.target.closest("[data-x]")) close(); });
  try { m.querySelector("[data-x]").focus({ preventScroll: true }); } catch (e) {}
}
function newBadges() {
  const out = []; BADGES.forEach(b => { if (!S.badges[b.id] && b.t()) { S.badges[b.id] = dkey(); out.push(b); } });
  // Kostum khusus yang baru terbuka ikut diumumkan di tempat yang sama.
  Object.keys(COSTUME).forEach(c => COSTUME[c].forEach(it => { const k = c + ":" + it.id; if (it.p === null && !S.seenSp[k] && spOpen(it)) { S.seenSp[k] = dkey(); out.push({ k: "Kostum khusus terbuka", n: it.n, d: it.u[1] + " · pakai di Lemari Bubu", ic: "star" }); } }));
  return out;
}

/* ================= account sync (optional) ================= */
let REMOTE = null, SYNC = "off", pushT = null, pushing = false, dirty = false;
function merge(a, b) {
  if ((a.resetAt || 0) !== (b.resetAt || 0)) return hydrate((a.resetAt || 0) > (b.resetAt || 0) ? a : b);
  const newer = (a.ts || 0) >= (b.ts || 0) ? a : b, older = newer === a ? b : a;
  const out = hydrate(Object.assign({}, older, newer));
  const maxMap = k => { const m = {}; [a[k] || {}, b[k] || {}].forEach(o => Object.keys(o).forEach(x => { m[x] = Math.max(m[x] || 0, Number(o[x]) || 0); })); return m; };
  out.done = Object.assign({}, a.done, b.done);
  out.badges = Object.assign({}, b.badges, a.badges);
  out.known = Object.assign({}, a.known, b.known);
  out.scores = maxMap("scores"); out.days = maxMap("days"); out.dc = maxMap("dc"); out.dcombo = maxMap("dcombo");
  out.chest = (a.chest || "") > (b.chest || "") ? a.chest : (b.chest || "");
  out.read = maxMap("read"); out.talk = maxMap("talk"); out.rounds = maxMap("rounds");
  out.owned = Object.assign({}, a.owned, b.owned); out.seenSp = Object.assign({}, a.seenSp, b.seenSp);
  out.coinsAll = Math.max(a.coinsAll || 0, b.coinsAll || 0); out.perf = Math.max(a.perf || 0, b.perf || 0);
  out.dailyN = Math.max(a.dailyN || 0, b.dailyN || 0); out.fl = Object.assign({}, a.fl, b.fl);
  out.mine = Object.assign({}, a.mine, b.mine);
  { const k = {}; [a.sk || {}, b.sk || {}].forEach(o => Object.keys(o).forEach(c => { const v = o[c]; if (Array.isArray(v) && (!k[c] || v[0] > k[c][0])) k[c] = v; })); out.sk = k; }
  { const seen = {}; [...(a.exams || []), ...(b.exams || [])].forEach(e => { if (e && e.at) seen[e.at] = e; }); out.exams = Object.values(seen).sort((x, y) => x.at - y.at).slice(-12); }
  { const c = {}; [a.cert || {}, b.cert || {}].forEach(o => Object.keys(o).forEach(l => { const v = o[l]; if (v && (!c[l] || (v.p || 0) > (c[l].p || 0))) c[l] = v; })); out.cert = c; }
  { const sp = {}; [a.spoke || {}, b.spoke || {}].forEach(o => Object.keys(o).forEach(l => { sp[l] = Object.assign(sp[l] || {}, o[l]); })); out.spoke = sp; }
  out.onb = Math.max(a.onb || 0, b.onb || 0);
  ["xp", "ans", "cor", "best", "combo", "chests"].forEach(k => { out[k] = Math.max(a[k] || 0, b[k] || 0); });
  const mb = [a.matchBest, b.matchBest].filter(Boolean); out.matchBest = mb.length ? Math.min(...mb) : 0;
  const la = a.lastDay || "", lb = b.lastDay || "";
  if (la === lb) out.streak = Math.max(a.streak || 0, b.streak || 0);
  else { const s = la > lb ? a : b; out.streak = s.streak || 0; out.lastDay = s.lastDay || ""; }
  out.daily = (a.daily || "") > (b.daily || "") ? a.daily : (b.daily || "");
  return out;
}
function queuePush() { if (!REMOTE) return; dirty = true; clearTimeout(pushT); pushT = setTimeout(doPush, 1500); }
async function doPush() {
  if (pushing || !dirty || !REMOTE) return;
  pushing = true; dirty = false;
  try { await REMOTE.set({ v: 1, state: JSON.parse(JSON.stringify(S)) }); SYNC = "on"; }
  catch (e) { SYNC = "err"; const c = e && e.code; if (c && c !== "unavailable" && c !== "resource_exhausted") REMOTE = null; }
  pushing = false;
  if (dirty) queuePush();
}
async function initSync() {
  try {
    if (!window.claude || typeof window.claude.use !== "function") return;
    const [db, user] = await Promise.all([window.claude.use("db"), window.claude.use("user")]);
    if (!db || !user) return;
    const uid = await user.id();
    if (!uid) return;
    const ref = db.doc("data/users/" + uid + "/progress");
    const snap = await ref.get();
    const before = JSON.stringify(S);
    let remote = "";
    if (snap.exists) { const d = snap.data(); if (d && d.state) { remote = JSON.stringify(d.state); S = merge(S, JSON.parse(remote)); } }
    REMOTE = ref; SYNC = "on";
    const after = JSON.stringify(S);
    if (after !== before) { newBadges(); saveLocal(); if (!document.body.classList.contains("focus")) rerender(); }
    if (JSON.stringify(S) !== remote) queuePush();
    if (S.onb && ROUTE.v === "welcome") nav("home");
    if (ROUTE.v === "profile" && !document.body.classList.contains("focus")) rerender();
  } catch (e) { SYNC = "off"; }
}
document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden" && dirty) { clearTimeout(pushT); doPush(); } });

/* ================= sound & speech ================= */
let AC = null;
function tone(freqs, dur = 0.11, type = "sine") {
  if (!S.sound) return;
  try {
    AC = AC || new (window.AudioContext || window.webkitAudioContext)();
    if (AC.state === "suspended") AC.resume();
    const t = AC.currentTime;
    freqs.forEach((f, i) => {
      const o = AC.createOscillator(), g = AC.createGain(), a = t + i * dur;
      o.type = type; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, a); g.gain.exponentialRampToValueAtTime(0.14, a + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, a + dur);
      o.connect(g); g.connect(AC.destination); o.start(a); o.stop(a + dur + 0.03);
    });
  } catch (e) {}
}
const buzz = p => { if (!S.sound) return; try { if (navigator.vibrate) navigator.vibrate(p); } catch (e) {} };
const sfx = { ok: () => { tone([660, 990]); buzz(12); }, no: () => { tone([233, 175], 0.15, "triangle"); buzz([25, 50, 25]); }, win: () => tone([523, 659, 784, 1047], 0.13) };

let TTS = null, voice = null;
const hasNative = (() => { try { return "speechSynthesis" in window && typeof SpeechSynthesisUtterance !== "undefined"; } catch (e) { return false; } })();
const canSpeak = () => !!TTS || hasNative;
function speakNative(t, slow) {
  try {
    const s = window.speechSynthesis; s.cancel();
    const u = new SpeechSynthesisUtterance(t); u.lang = "en-US"; u.rate = slow ? 0.6 : 0.92;
    if (!voice) { const vs = s.getVoices(); voice = vs.find(v => /^en[-_]US/i.test(v.lang)) || vs.find(v => /^en/i.test(v.lang)) || null; }
    if (voice) u.voice = voice;
    s.speak(u);
  } catch (e) {}
}
function speak(t, slow) {
  if (TTS) {
    try { TTS.speak(t, { language: "en", rate: slow ? 0.75 : 1 }).catch(e => { if (e && (e.code === "not_granted" || e.code === "capability_disabled" || e.code === "capability_removed")) { TTS = null; if (hasNative) speakNative(t, slow); } }); }
    catch (e) { if (hasNative) speakNative(t, slow); }
  } else if (hasNative) speakNative(t, slow);
}
function stopSpeak() { try { if (TTS) { const p = TTS.stop(); if (p && p.catch) p.catch(() => {}); } else if (hasNative) window.speechSynthesis.cancel(); } catch (e) {} }
async function initTts() { try { if (window.claude && typeof window.claude.use === "function") { const t = await window.claude.use("tts"); if (t) TTS = t; } } catch (e) {} }
const spk = t => canSpeak() ? `<button class="spk" data-say="${esc(t)}" aria-label="Dengarkan: ${esc(t)}">${I("speaker")}</button>` : "";

function confetti() {
  try {
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const c = $("#fx"), x = c.getContext("2d"), W = c.width = window.innerWidth, Hh = c.height = window.innerHeight;
    const cols = ["#ffc845", "#34c79a", "#5b5bf0", "#ff7a59", "#ff9bb3", "#8fb3ff"];
    const P = Array.from({ length: 110 }, () => ({ x: W / 2 + (Math.random() - .5) * Math.min(W, 520) * .5, y: Math.min(Hh * .4, 360), vx: (Math.random() - .5) * 13, vy: -Math.random() * 12 - 4, r: 4 + Math.random() * 5, c: pick(cols), a: Math.random() * 6, va: (Math.random() - .5) * .5 }));
    const t0 = performance.now(); c.style.display = "block";
    (function f(t) {
      const dt = (t - t0) / 1000; x.clearRect(0, 0, W, Hh);
      P.forEach(p => { p.vy += .38; p.x += p.vx; p.y += p.vy; p.a += p.va; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.globalAlpha = Math.max(0, 1 - dt / 1.9); x.fillRect(-p.r, -p.r / 2, p.r * 2, p.r); x.restore(); });
      if (dt < 1.9) requestAnimationFrame(f); else { x.clearRect(0, 0, W, Hh); c.style.display = "none"; }
    })(t0);
  } catch (e) {}
}

/* ================= router ================= */
let ROUTE = { v: "home", a: [] }, H = {}, QUIZ = null, TICK = null, QT = null;
const VIEWS = {};
const SECTION = { badges: "profile", wardrobe: "wardrobe", settings: "profile", exam: "practice", mine: "practice", talk: "practice", home: "home", lesson: "home", read: "home", speak: "home", skill: "home", practice: "practice", flash: "practice", profile: "profile" };
function toTop() { try { window.scrollTo(0, 0); } catch (e) {} }
/* Setiap layar punya alamat (#rute, #pelajaran-0-1, …) agar tombol kembali di HP bekerja.
   Sesi kuis/game memakai #kuis; menekan kembali saat kuis memunculkan konfirmasi keluar. */
let SKIPHASH = 0, QPREV = null, QBACKED = false;
function hashOf(v, a) {
  switch (v) {
    case "lesson": return "#pelajaran-" + a[0] + "-" + a[1];
    case "read": return "#bacaan-" + a[0] + (a[1] ? "-" + a[1] : "");
    case "speak": return "#bicara-" + a[0] + "-" + (a[1] || 0);
    case "skill": return "#praktik-" + a[0] + "-" + (a[1] || 0);
    case "talk": return a[0] != null ? "#ngobrol-" + a[0] : "#ngobrol";
    case "flash": return "#flashcard-" + (a[0] || "all");
    case "practice": return "#latihan";
    case "exam": return "#ujian";
    case "mine": return "#kataku";
    case "profile": return "#profil";
    case "settings": return "#pengaturan";
    case "wardrobe": return "#lemari";
    case "badges": return "#lencana";
    case "welcome": return "#mulai-" + (a[0] || 0);
    default: return "#rute";
  }
}
function parseHash(h) {
  const p = String(h || "").replace(/^#/, "").split("-"), n = x => (/^\d+$/.test(x || "") ? +x : NaN);
  switch (p[0]) {
    case "rute": return { v: "home", a: [] };
    case "latihan": return { v: "practice", a: [] };
    case "ujian": return { v: "exam", a: [] };
    case "kataku": return { v: "mine", a: [] };
    case "profil": return { v: "profile", a: [] };
    case "pengaturan": return { v: "settings", a: [] };
    case "lemari": return { v: "wardrobe", a: [] };
    case "lencana": return { v: "badges", a: [] };
    case "flashcard": return { v: "flash", a: [LEVELS.some(L => L.id === p[1]) || p[1] === "mine" ? p[1] : "all"] };
    case "mulai": return { v: "welcome", a: [Math.min(3, n(p[1]) || 0)] };
    case "pelajaran": { const li = n(p[1]), j = n(p[2]); return LEVELS[li] && LEVELS[li].lessons[j] ? { v: "lesson", a: [li, j] } : null; }
    case "bacaan": { const li = n(p[1]), k = n(p[2]) || 0; return LEVELS[li] && LEVELS[li].reads && LEVELS[li].reads[k] ? { v: "read", a: [li, k] } : null; }
    case "ngobrol": { const k = n(p[1]); return { v: "talk", a: isNaN(k) ? [] : [k] }; }
    case "bicara": { const li = n(p[1]), t = n(p[2]) || 0; return LEVELS[li] && LEVELS[li].topics[t] ? { v: "speak", a: [li, t] } : null; }
    case "praktik": { const li = n(p[1]), b = Math.min(2, n(p[2]) || 0); return LEVELS[li] ? { v: "skill", a: [li, b] } : null; }
    default: return null;
  }
}
function setHash(h) {
  try {
    const cur = location.hash || "";
    if (cur === h) return;
    if (!cur) { history.replaceState(null, "", h); return; }
    if (cur === "#kuis") {
      if (h === QPREV) { SKIPHASH++; history.back(); } else history.replaceState(null, "", h);
      return;
    }
    SKIPHASH++; location.hash = h;
  } catch (e) {}
}
function enterSession() {
  QBACKED = false;
  try { if (location.hash !== "#kuis") { QPREV = location.hash || "#rute"; SKIPHASH++; location.hash = "#kuis"; } } catch (e) {}
}
window.addEventListener("hashchange", () => {
  if (SKIPHASH > 0) { SKIPHASH--; return; }
  const h = location.hash;
  if (QUIZ && document.body.classList.contains("focus")) {
    if (h !== "#kuis") { QBACKED = true; if (H.quit) H.quit(); }
    return;
  }
  const r = parseHash(h);
  if (r) nav(r.v, ...r.a); else nav("home");
});

// Posisi gulir halaman utama diingat, supaya kembali dari pelajaran tidak loncat ke atas.
const TOPLEVEL = ["home", "practice", "wardrobe", "profile"], SCROLLS = {};
function nav(v, ...a) {
  const from = ROUTE && ROUTE.v;
  if (TOPLEVEL.includes(from) && !QUIZ) SCROLLS[from] = window.scrollY;
  clearInterval(TICK); TICK = null; clearInterval(QT); QT = null; QUIZ = null; stopSpeak(); stopRec();
  document.body.classList.remove("focus", "sub", "wardpage"); REPAGE = null;
  if (!VIEWS[v]) { v = "home"; a = []; }
  if (v === "welcome" && S.onb) { v = "home"; a = []; }
  ROUTE = { v, a }; H = {};
  VIEWS[v](...a); chrome();
  const restore = TOPLEVEL.includes(v) && from && from !== v && !TOPLEVEL.includes(from) && SCROLLS[v] != null;
  if (restore) { const y = SCROLLS[v]; window.scrollTo(0, y); requestAnimationFrame(() => window.scrollTo(0, y)); } else toTop();
  setHash(hashOf(v, a));
}
const rerender = () => nav(ROUTE.v, ...ROUTE.a);
const here = () => { const r = ROUTE; return () => nav(r.v, ...r.a); };
function chrome() {
  applyTheme();
  $("#top").innerHTML = `<button class="brand" data-g="home" aria-label="English Path, buka rute"><span class="mark">${BUBU(26, "", "", "base", false)}</span><span class="wm">English Path</span></button>
    <div class="chips"><span class="chip" title="Hari beruntun">${I("flame")}${streakNow()}</span><span class="chip xp" title="Total XP">${I("star")}${S.xp}</span><button class="chip coin hdr" data-g="wardrobe" aria-label="${S.coins} koin, buka Lemari Bubu">${COIN}${S.coins}</button></div>`;
  const cur = SECTION[ROUTE.v] || "home";
  $("#nav").innerHTML = [["home", "Rute", "map"], ["practice", "Latihan", "zap"], ["wardrobe", "Lemari Bubu", "shirt"], ["profile", "Profil", "user"]]
    .map(([v, t, ic]) => `<button data-g="${v}"${cur === v ? ' aria-current="page"' : ""} aria-label="${t}">${I(ic)}<span class="t">${t}</span></button>`).join("");
}
document.addEventListener("click", e => {
  const say = e.target.closest("[data-say]"); if (say) { speak(say.dataset.say); return; }
  const bm = e.target.closest("[data-bm]"); if (bm) { toggleMine(bm.dataset.bm); return; }
  const g = e.target.closest("[data-g]"); if (g) { nav(g.dataset.g); return; }
  const el = e.target.closest("[data-a]"); if (el && !el.disabled && H[el.dataset.a]) H[el.dataset.a](el, e);
});
app.addEventListener("submit", e => { e.preventDefault(); if (H.submit) H.submit(e.target); });
app.addEventListener("input", e => { const el = e.target.closest("[data-i]"); if (el && H[el.dataset.i]) H[el.dataset.i](el); });
app.addEventListener("change", e => { const el = e.target.closest("[data-c]"); if (el && H[el.dataset.c]) H[el.dataset.c](el); });
document.addEventListener("keydown", e => {
  if (!QUIZ || document.body.classList.contains("modal-open")) return;
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input") return;
  if (tag === "button" && !(e.key === "Enter" && e.target.classList.contains("opt") && e.target.classList.contains("sel"))) return;
  if (e.key === "Enter") { if (QUIZ.enter()) e.preventDefault(); }
  else if (/^[1-4]$/.test(e.key)) QUIZ.digit(+e.key - 1);
});

function ring(f, main, sub, cls = "") {
  f = Math.max(0, Math.min(1, f || 0)); const r = 42, c = 2 * Math.PI * r;
  return `<div class="ring ${cls}"><svg viewBox="0 0 100 100" aria-hidden="true"><circle class="tr" cx="50" cy="50" r="${r}"/><circle class="fg" cx="50" cy="50" r="${r}" stroke-dasharray="${c.toFixed(1)}" stroke-dashoffset="${(c * (1 - f)).toFixed(1)}"/></svg><div class="lab"><b>${main}</b><span>${sub}</span></div></div>`;
}

/* ================= home ================= */
// Level yang dibuka di peta (akordeon). Awalnya hanya level yang sedang dipelajari.
let OPENLV = null;
app.addEventListener("toggle", e => {
  const d = e.target;
  if (!d.matches || !d.matches("details.lvcard")) return;
  const li = +d.dataset.li;
  if (d.open) OPENLV.add(li); else OPENLV.delete(li);
  const b = $("[data-a='allopen']"); if (b) b.textContent = OPENLV.size === LEVELS.length ? "Tutup semua" : "Buka semua";
}, true);
function greetMsg() {
  const dx = S.days[dkey()] || 0, st = streakNow();
  if (!S.xp && !doneCount()) return "Yuk, mulai pelajaran pertamamu hari ini.";
  if (dx >= S.goal) return "Target hari ini tercapai. Keren banget!";
  if (dx === 0 && st > 0) return "Jaga streak " + st + " harimu, yuk belajar sebentar.";
  return "Tinggal " + (S.goal - dx).toLocaleString("id-ID") + " XP lagi untuk target hari ini.";
}
VIEWS.home = function () {
  if (!OPENLV) { const n0 = nextLesson(); OPENLV = new Set([n0 ? n0.li : LEVELS.length - 1]); }
  const d = doneCount(), next = nextLesson(), t = dkey(), nW = wrongItems().length, now = new Date();
  const ms = missions(), nDone = ms.filter(m => m.v >= m.max).length, allDone = nDone === ms.length, opened = S.chest === t;
  const known = knownCount(), later = wrongLater();
  let cont;
  if (next) {
    const L = LEVELS[next.li], dn = L.lessons.filter(x => S.done[x.id]).length;
    cont = `<button class="cont" data-a="cont" style="--lv:var(--l${L.i + 1});--ldk:var(--ld${L.i + 1})"><span class="tag">Lanjutkan · ${L.cefr} ${L.name}</span><span class="t">${esc(next.title)}</span>
      <span class="go"><span style="flex:1;display:grid;gap:7px"><span class="row" style="flex-wrap:nowrap"><span class="pbar"><i style="width:${dn / L.lessons.length * 100}%"></i></span><b>${dn}/${L.lessons.length}</b></span><small>Pelajaran ${next.j + 1} dari ${L.lessons.length} · 3 babak</small></span><span class="play">${I("play")}</span></span></button>`;
  } else cont = `<div class="card stack"><h2>Semua ${LESSONS.length} pelajaran selesai</h2><p class="muted">Jaga kemampuan Anda lewat misi harian dan tantangan.</p></div>`;
  const chest = opened ? `<div class="chest">${I("box")}<span><b>Peti hari ini sudah dibuka</b><br><span class="muted">Misi baru muncul besok.</span></span></div>`
    : allDone ? `<button class="chest ready pop" data-a="chest">${I("box")}<span><b>Buka peti hadiah</b><br>+50 XP menunggu Anda</span></button>`
    : `<div class="chest">${I("box")}<span><b>Peti hadiah</b><br><span class="muted">Selesaikan 3 misi untuk +50 XP</span></span></div>`;
  const lvcard = L => {
    const dn = L.lessons.filter(x => S.done[x.id]).length, n = L.lessons.length;
    const isCur = next && next.li === L.i, all = dn === n;
    const status = all ? "Selesai" : isCur ? "Sedang dipelajari" : dn ? dn + " dari " + n + " selesai" : n + " pelajaran";
    return `<details class="lvcard${isCur ? " cur" : ""}${all ? " done" : ""}" data-li="${L.i}" style="--lv:var(--l${L.i + 1});--ldk:var(--ld${L.i + 1})"${OPENLV.has(L.i) ? " open" : ""}>
      <summary class="lv-h"><span class="roundel">${all ? I("check") : L.cefr}</span><span class="lv-t"><span class="lv-n">${L.cefr} · ${L.name}</span><span class="lv-s">${status}</span><span class="lvbar" aria-hidden="true"><i style="width:${dn / n * 100}%"></i></span></span><span class="chev">${I("down")}</span></summary>
      <p class="lv-d">${L.desc}</p>
      <ol class="lrows">${L.lessons.map(x => {
        const st = S.done[x.id] ? "done" : (next && next.id === x.id ? "cur" : "todo");
        return `<li><button class="lrow ${st}" data-a="open" data-l="${L.i}" data-j="${x.j}"><span class="n">${st === "done" ? I("check") : x.j + 1}</span><span class="grow"><b>${esc(x.title)}</b><small>3 babak · ${x.qs.length} soal</small></span>${st === "cur" ? "" : starHTML(x)}${st === "cur" ? '<span class="go">Mulai</span>' : ""}</button></li>`;
      }).join("")}
      ${(() => { const c = skillCounts(L.i), t = skillTotals(L.i), d = c.reduce((a, b) => a + b, 0), tt = t.reduce((a, b) => a + b, 0);
        return `<li><button class="lrow skillrow${d >= tt ? " done" : ""}" data-a="skill" data-l="${L.i}"><span class="n">${d >= tt ? I("check") : I("spark")}</span><span class="grow"><b>Praktik keterampilan ${L.cefr}</b><small>3 babak · ${tt} topik</small>
          <span class="skchips">${SKB.map(([n, ic], b) => `<span class="${c[b] >= t[b] ? "ok" : ""}">${I(ic)}<b>${c[b]}/${t[b]}</b><i>${n}</i></span>`).join("")}</span>
          <span class="pbar"><i style="width:${d / tt * 100}%"></i></span></span><span class="skn">${d}/${tt}</span></button></li>`; })()}
      <li><button class="lrow test${dn === n ? " done" : ""}" data-a="test" data-l="${L.i}"><span class="n">${I("flag")}</span><span><b>Tes level ${L.cefr}</b><small>20 soal acak · lulus 75% menandai level selesai</small></span></button></li></ol></details>`;
  };
  app.innerHTML = `<div class="home">
    <div class="side stack">
      <div class="greet">${BUBU(64, "wave", "Bubu, maskot English Path")}<div class="say"><b>Halo${S.name ? ", " + esc(S.name) : ""}!</b><span>${greetMsg()}</span></div></div>
      ${cont}
      <div class="swipe" id="swipe" aria-label="Kartu harian, geser untuk melihat"><section class="card mission" aria-label="Misi hari ini">
        <div class="mission-h"><h2>Misi hari ini</h2><span class="muted">${nDone} dari 3 selesai</span></div>
        ${ms.map(m => { const ok = m.v >= m.max; return `<div class="mrow${ok ? " done" : ""}"><span class="mbox">${ok ? I("check") : ""}</span><span><span class="mt">${m.n}</span>${ok ? "" : `<span class="pbar" style="display:block"><i style="width:${m.v / m.max * 100}%"></i></span>`}</span><span class="mn">${Math.min(m.v, m.max)}/${m.max}</span></div>`; }).join("")}
        ${chest}
      </section>
      ${wotdHTML()}${wardTeaser()}</div><div class="sdots" aria-hidden="true"><i class="on"></i><i></i><i></i><span>Geser untuk kartu lainnya</span></div>
      <div class="tiles">
        <button class="tile" style="--tc:var(--sun-l);--ts:var(--sun-s);--ti:var(--sun-d)" data-a="daily">${I("calendar")}<b>Tantangan harian</b><small>${S.daily === t ? "Selesai hari ini" : "10 soal · +30 XP"}</small></button>
        <button class="tile" style="--tc:var(--coral-l);--ts:var(--coral-s);--ti:var(--coral)" data-a="mist"${nW ? "" : " disabled"}>${I("retry")}<b>Ulangan hari ini</b><small>${nW ? nW + " soal jatuh tempo" : later ? later + " soal terjadwal nanti" : "Belum ada"}</small></button>
        <button class="tile" style="--tc:var(--lilac-l);--ts:var(--lilac-s);--ti:var(--ld3)" data-a="matchg">${I("grid")}<b>Cocokkan kata</b><small>${S.matchBest ? "Rekor " + S.matchBest + " dtk" : "6 pasang kata"}</small></button>
        <button class="tile" style="--tc:var(--mint-l);--ts:var(--mint-s);--ti:var(--mint)" data-a="flash">${I("layers")}<b>Flashcard</b><small>${known} dari ${VOCAB.length} hafal</small></button>
      </div>
    </div>
    <section class="stack" aria-label="Peta level">
      <div class="secthead"><div><p class="eyebrow">Peta level · ${LESSONS.length} pelajaran · ${NQ} soal</p><h2 style="font-size:30px;margin-top:4px">Dari A1 sampai C2</h2></div><button class="back" data-a="allopen" style="padding:8px 0">${OPENLV.size === LEVELS.length ? "Tutup semua" : "Buka semua"}</button></div>
      <div class="levels">${LEVELS.map(lvcard).join("")}</div>
    </section></div>`;
  { const sw = $("#swipe"), dots = $$(".sdots i"), lab = $(".sdots span");
    if (sw) sw.addEventListener("scroll", () => { const k = Math.round(sw.scrollLeft / Math.max(1, sw.scrollWidth - sw.clientWidth) * (dots.length - 1)); dots.forEach((d, n) => d.classList.toggle("on", n === k)); if (lab) lab.textContent = ["Geser untuk kartu lainnya", "Geser untuk Lemari Bubu", "Geser kembali ke Misi"][k] || ""; }, { passive: true }); }
  H = {
    open(el) { nav("lesson", +el.dataset.l, +el.dataset.j); },
    allopen() { const all = OPENLV.size === LEVELS.length; $$("details.lvcard").forEach(dd => { dd.open = !all; }); },
    test(el) { levelTest(+el.dataset.l); },
    read(el) { nav("read", +el.dataset.l, +el.dataset.k || 0); },
    skill(el) { const li = +el.dataset.l; nav("skill", li, skillFirst(li)); },
    wknow(el) { const w = el.dataset.w; if (!isKnown(w)) S.known[w] = { b: 1, d: addDays(INT[1]) }; newBadges(); save(); const y = window.scrollY; rerender(); try { window.scrollTo(0, y); } catch (e) {} sfx.ok(); },
    cont() { nav("lesson", next.li, next.j); },
    flash() { nav("flash"); },
    chest() {
      if (S.chest === dkey() || !missions().every(m => m.v >= m.max)) return;
      S.chest = dkey(); S.chests++; addXp(50); addCoins(10); newBadges(); save(); setTimeout(() => toast("Peti dibuka: +50 XP dan +10 koin"), 300);
      const y = window.scrollY; rerender(); try { window.scrollTo(0, y); } catch (e) {}
      sfx.win(); confetti();
    },
    daily: startDaily, mist: startMistakes, matchg: globalMatch
  };
};

/* ================= lesson ================= */
/* Halaman pelajaran: selalu pas satu layar. Isi yang panjang dibagi menjadi halaman
   (geser atau tekan Lanjut), bukan di-scroll. Di layar lebar, dua halaman tampil berdampingan. */
let REPAGE = null;
window.addEventListener("resize", () => { clearTimeout(window.__rp); window.__rp = setTimeout(() => { if (REPAGE) REPAGE(); }, 120); });
VIEWS.lesson = function (li, j, tab = "m") {
  const L = LEVELS[li], x = L && L.lessons[j];
  if (!x) return nav("home");
  document.body.classList.add("sub");
  const tabs = [["m", "Materi"], ["c", "Contoh"], ["k", "Kosakata"], ["q", "Latihan"]];
  const NEXT = { m: ["c", "Lihat contoh"], c: ["k", "Lanjut ke kosakata"], k: ["q", "Lanjut ke latihan"] };
  const row = ([en, tr]) => `<div class="ex">${spk(en)}<div><b>${esc(en)}</b><span>${esc(tr)}</span></div></div>`;
  let items = [], kind = "";
  if (tab === "m") {
    const tmp = document.createElement("div"); tmp.innerHTML = x.theory;
    const kids = [...tmp.children];
    for (let i = 0; i < kids.length; i++) { let h = kids[i].outerHTML; if (kids[i].tagName === "H3" && kids[i + 1]) h += kids[++i].outerHTML; items.push(h); }
    kind = "theory";
  } else if (tab === "c") {
    items = x.examples.map(row);
    if (canSpeak()) items.push(`<div class="pg-extra"><button class="btn ghost" data-a="listen">${I("headphones")} Latihan dengar</button></div>`);
  } else if (tab === "k") {
    items = x.vocab.map(([en, tr]) => `<div class="ex">${spk(en)}<div class="grow"><b>${esc(en)}</b><span>${esc(tr)}</span></div>${bmBtn(en)}</div>`);
    items.push(`<div class="pg-extra"><button class="btn ghost" data-a="lmatch">${I("grid")} Main cocokkan kata</button></div>`);
  }
  let panel, foot;
  if (tab === "q") {
    const cur = [1, 2, 3].find(r => roundOpen(x, r) && !roundPassed(x, r)) || 0, nx = stepAfter("lesson", li, j);
    panel = `<div class="panel card qinfo">
      <div class="qhead"><div><b>3 babak · ${x.qs.length} soal</b><span class="muted">${cur ? "Lulus 75% membuka babak berikutnya" : "Tuntas! Semua babak sudah lulus"}</span></div>${starHTML(x)}</div>
      <div class="rounds">${[1, 2, 3].map(r => { const open = roundOpen(x, r), ok = roundPassed(x, r), sc = roundScore(x, r);
        return `<button class="round${ok ? " ok" : ""}${r === cur ? " cur" : ""}" data-a="round" data-r="${r}"${open ? "" : " disabled"}><span class="rn">${ok ? I("check") : open ? r : I("lock")}</span><span class="grow"><b>Babak ${r} · ${RN[r - 1]}</b><small>${open ? "20 soal" + (sc != null ? " · terbaik " + sc + "%" : "") : "Lulus Babak " + (r - 1) + " untuk membuka"}</small></span>${open ? I("right") : ""}</button>`; }).join("")}</div></div>`;
    foot = cur ? `<div class="pgfoot col"><button class="btn lv" data-a="round" data-r="${cur}">Mulai Babak ${cur} · 20 soal</button><button class="btn ghost" data-a="quick">Latihan singkat · 5 soal acak</button></div>`
      : `<div class="pgfoot col">${nx ? `<button class="btn lv" data-a="nextles">${stepLabel(nx)} ${I("right")}</button>` : `<button class="btn lv" data-g="home">Semua pelajaran tuntas! Kembali ke rute</button>`}<button class="btn ghost" data-a="quick">Latihan singkat · 5 soal acak</button></div>`;
  } else {
    panel = `<div class="panel card ${kind}" id="panel"><div class="spread" id="spread"></div></div>`;
    foot = `<div class="pgfoot"><button class="btn ghost sq" data-a="prev" id="pprev" aria-label="Halaman sebelumnya">${I("left")}</button><span class="pgc" id="pgc" aria-live="polite"></span><button class="btn lv" data-a="next" id="pnext"></button></div>`;
  }
  app.innerHTML = `<div class="lessonv" style="--lv:var(--l${li + 1});--ldk:var(--ld${li + 1})">
    <div class="lv-top"><button class="iconbtn" data-g="home" aria-label="Kembali ke peta level">${I("left")}</button><span class="roundel sm">${L.cefr}</span>
      <div class="lv-tt"><p class="eyebrow">${L.name} · Pelajaran ${j + 1} dari ${L.lessons.length}</p><h1>${esc(x.title)}</h1></div></div>
    <div class="seg" role="tablist">${tabs.map(([k, n]) => `<button role="tab" aria-selected="${k === tab}" data-a="tab" data-t="${k}">${n}</button>`).join("")}</div>
    ${panel}${foot}</div>`;

  let pages = [], cur = 0, cols = 1;
  const draw = () => {
    const sp = $("#spread"); if (!sp) return;
    const shown = pages.slice(cur, cur + cols);
    sp.style.gridTemplateColumns = `repeat(${cols}, minmax(0, 1fr))`;
    sp.innerHTML = shown.map(pg => `<div class="pg">${pg.map(i => items[i]).join("")}</div>`).join("");
    const total = Math.ceil(pages.length / cols), at = Math.floor(cur / cols) + 1, more = cur + cols < pages.length;
    $("#panel").classList.toggle("over", shown.length === 1 && shown[0].length === 1 && $("#spread .pg").scrollHeight > $("#panel").clientHeight);
    $("#pgc").textContent = total > 1 ? at + " / " + total : "";
    $("#pprev").disabled = cur === 0; $("#pprev").hidden = total <= 1; $("#pgc").hidden = total <= 1;
    $("#pnext").innerHTML = more ? `Lanjut ${I("right")}` : `${NEXT[tab][1]} ${I("right")}`;
  };
  const paginate = () => {
    const pn = $("#panel"); if (!pn) return;
    const keep = pages.length ? (pages[cur] || [0])[0] : 0;
    const cs = getComputedStyle(pn);
    const W = pn.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const Hh = pn.clientHeight - parseFloat(cs.paddingTop) - parseFloat(cs.paddingBottom);
    const split = colW => {
      const m = document.createElement("div");
      m.className = "pg " + kind; m.style.cssText = `position:absolute;left:-9999px;top:0;visibility:hidden;width:${colW}px`;
      pn.appendChild(m);
      const out = []; let pg = [];
      items.forEach((h, idx) => {
        const n0 = m.children.length;
        m.insertAdjacentHTML("beforeend", h);
        if (m.scrollHeight > Hh + 1 && pg.length) {
          while (m.children.length > n0) m.lastElementChild.remove();
          out.push(pg); pg = []; m.innerHTML = h;
        }
        pg.push(idx);
      });
      if (pg.length) out.push(pg);
      m.remove();
      return out;
    };
    // Satu kolom kalau isinya muat satu halaman; dua halaman berdampingan di layar lebar kalau tidak.
    cols = 1; pages = split(W);
    if (pages.length > 1 && W >= 760) { cols = 2; pages = split((W - 32) / 2); }
    const pi = Math.max(0, pages.findIndex(p => p.includes(keep)));
    cur = pi - (pi % cols);
    draw();
  };
  const go = d => { const n = cur + d * cols; if (n < 0 || n >= pages.length) return false; cur = n; draw(); return true; };
  const back = () => nav("lesson", li, j, tab);
  H = {
    tab(el) { nav("lesson", li, j, el.dataset.t); },
    prev() { go(-1); },
    next() { if (!go(1)) nav("lesson", li, j, NEXT[tab][0]); },
    quiz() { lessonQuiz(li, j); },
    round(el) { lessonQuiz(li, j, +el.dataset.r); },
    nextles() { goStep(stepAfter("lesson", li, j)); },
    quick() { const run = () => runQuiz(shuffle(x.qs).slice(0, 5), { title: x.title + " · latihan singkat", li, back, again: run, msg: "Latihan singkat tidak mengubah skor pelajaran." }); run(); },
    listen() { const run = () => runQuiz(shuffle(x.examples).map(([s2, tr]) => ({ t: "l", s: s2, tr })), { title: x.title + " · latihan dengar", li, back, again: run, msg: "Dengarkan lagi contoh-contohnya kapan saja di tab Contoh." }); run(); },
    lmatch() { const run = () => matchGame(x.vocab, { li, back, again: run }); run(); }
  };
  if (tab !== "q") {
    REPAGE = paginate;
    paginate();
    try { document.fonts.ready.then(() => { if (REPAGE === paginate) paginate(); }); } catch (e) {}
    // geser kiri/kanan untuk berpindah halaman
    const pn = $("#panel"); let sx = null, sy = 0;
    pn.addEventListener("pointerdown", e => { sx = e.clientX; sy = e.clientY; });
    pn.addEventListener("pointerup", e => {
      if (sx === null) return; const dx = e.clientX - sx, dy = e.clientY - sy; sx = null;
      if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(dx < 0 ? 1 : -1);
    });
  }
};
// Urutan rute satu level, sama dengan urutan di peta: pelajaran, bacaan, berbicara, percakapan, lalu tes level.
function routeSteps(li) {
  const L = LEVELS[li], out = L.lessons.map(x => ({ t: "lesson", li, j: x.j, title: x.title }));
  (L.reads || []).forEach(r => out.push({ t: "read", li, k: r.k, title: "Bacaan: " + r.title }));
  L.topics.forEach(T => out.push({ t: "speak", li, k: T.k, title: "Berbicara: " + T.title }));
  TALKS.forEach((T, n) => { if (T.li === li) out.push({ t: "talk", li, n, title: "Percakapan: " + T.title }); });
  out.push({ t: "test", li, title: "Tes level " + L.cefr });
  return out;
}
// Langkah sesudah langkah tertentu; sesudah tes level lanjut ke pelajaran pertama level berikutnya.
function stepAfter(t, li, key) {
  const st = routeSteps(li), i = st.findIndex(x => x.t === t && (t === "lesson" ? x.j === key : t === "read" || t === "speak" ? x.k === key : t === "talk" ? x.n === key : true));
  if (i >= 0 && i + 1 < st.length) return st[i + 1];
  return li + 1 < LEVELS.length ? routeSteps(li + 1)[0] : null;
}
function goStep(x) {
  if (!x) return nav("home");
  if (x.t === "lesson") nav("lesson", x.li, x.j);
  else if (x.t === "read") nav("read", x.li, x.k);
  else if (x.t === "speak") nav("speak", x.li, x.k);
  else if (x.t === "talk") { TALKFROM = ["skill", x.li, 2]; nav("talk", x.n); }
  else levelTest(x.li);
}
const stepLabel = x => !x ? "" : x.t === "test" ? "Lanjut ke " + x.title : x.t === "lesson" && x.j === 0 ? "Lanjut ke Level " + LEVELS[x.li].cefr : "Lanjut ke materi berikutnya";
// Ketika langkah berikut pindah babak, labelnya menyebut babaknya.
const stepLabel2 = (x, from) => x && x.t !== from && ["read", "speak", "talk"].includes(x.t) ? "Lanjut ke Babak " + (["read", "speak", "talk"].indexOf(x.t) + 1) + ": " + SKB[["read", "speak", "talk"].indexOf(x.t)][0] : stepLabel(x);
// Pelajaran sesudah (li, j): lanjut di level yang sama, atau pelajaran pertama level berikutnya.
function nextOf(li, j) { const L = LEVELS[li]; if (j + 1 < L.lessons.length) return { li, j: j + 1, title: L.lessons[j + 1].title }; if (li + 1 < LEVELS.length) return { li: li + 1, j: 0, title: LEVELS[li + 1].lessons[0].title }; return null; }
function lessonQuiz(li, j, r = 1) {
  const L = LEVELS[li], x = L.lessons[j];
  if (!roundOpen(x, r)) r = 1;
  const nx = stepAfter("lesson", li, j), nextLesson = nx ? () => goStep(nx) : null;
  const items = roundQs(x, r);
  runQuiz(shuffle(items), {
    title: x.title + " · Babak " + r, li, bonus: true, pass: 75,
    next: r < 3 ? () => lessonQuiz(li, j, r + 1) : nextLesson, nextLabel: r < 3 ? "Lanjut ke Babak " + (r + 1) : stepLabel(nx),
    passMsg: r === 1 ? "Pelajaran ini selesai. Babak 2 terbuka!" : r === 2 ? "Bintang kedua didapat. Babak 3 terbuka!" : "Tiga bintang! Pelajaran ini tuntas.",
    back: () => nav("lesson", li, j, "q"), again: () => lessonQuiz(li, j, r),
    share: { title: x.title + " · Babak " + r, sub: "Pelajaran " + LEVELS[li].cefr + " · " + LEVELS[li].name, li },
    onEnd(p) {
      const was = roundPassed(x, r), had3 = starsOf(x) === 3;
      if (r === 1) { S.scores[x.id] = Math.max(S.scores[x.id] || 0, p); if (p >= 75) S.done[x.id] = 1; }
      else { const k = x.id + ":" + r; S.rounds[k] = Math.max(S.rounds[k] || 0, p); }
      if (!was && roundPassed(x, r)) addCoins(5);
      if (!had3 && starsOf(x) === 3) addCoins(15);
    }
  });
}
function levelTest(li) {
  const L = LEVELS[li], back = here();
  runQuiz(shuffle(L.lessons.flatMap(x => shuffle(x.qs).slice(0, 4))).slice(0, 20), {
    title: "Tes level " + L.cefr + " · " + L.name, li, bonus: true, pass: 75, back, again: () => levelTest(li),
    passMsg: "Semua pelajaran di jalur " + L.cefr + " ditandai selesai.",
    next: li + 1 < LEVELS.length ? () => nav("lesson", li + 1, 0) : null, nextLabel: li + 1 < LEVELS.length ? "Lanjut ke Level " + LEVELS[li + 1].cefr : "",
    cert: li,
    onEnd(p) { if (p >= 75) { L.lessons.forEach(x => { S.done[x.id] = 1; }); const c = S.cert[L.id]; if (!c || p > c.p) S.cert[L.id] = { p, d: dkey() }; } }
  });
}
function startDaily() {
  const first = S.daily !== dkey();
  runQuiz(shuffle(opened().flatMap(x => x.qs)).slice(0, 10), {
    title: "Tantangan harian", back: here(), again: startDaily, extra: () => first ? 30 : 0,
    msg: first ? "Bonus harian 30 XP sudah masuk." : "Bonus harian sudah diambil hari ini.", onEnd() { if (S.daily !== dkey()) S.dailyN = (S.dailyN || 0) + 1; S.daily = dkey(); }
  });
}
function startMistakes() {
  const items = shuffle(wrongItems()).slice(0, 15), back = here();
  if (!items.length) return back();
  runQuiz(items, { title: "Ulangan hari ini", back, again: startMistakes, msg: "Soal yang benar dijadwalkan muncul lagi nanti (1, 3, 7, 14, lalu 30 hari). Yang salah kembali ke awal." });
}
function globalMatch() { matchGame(opened().flatMap(x => x.vocab), { back: here(), again: globalMatch, record: true }); }
function globalListen() {
  runQuiz(shuffle(opened().flatMap(x => x.examples)).slice(0, 5).map(([s, tr]) => ({ t: "l", s, tr })), { title: "Dengar & susun", back: here(), again: globalListen, msg: "Kalimat diambil dari pelajaran yang sudah Anda buka." });
}

/* ================= quiz engine ================= */
const PRAISE = ["Benar!", "Tepat!", "Mantap!", "Bagus!", "Keren!"];
const OK_LINES = ["Aku tahu kamu bisa!", "Lanjutkan, kamu lagi bagus.", "Pintar! Bubu bangga.", "Tepat sasaran!", "Mudah buatmu, ya?"];
const NO_LINES = ["Tidak apa-apa, salah itu bagian dari belajar.", "Hampir! Baca penjelasannya sebentar, ya.", "Santai, soal ini akan muncul lagi di Ulangan.", "Pelan-pelan saja, kamu pasti bisa."];
const COMBO_LINES = { 3: "Combo 3×! Mulai panas nih.", 5: "Combo 5×! Kamu lagi on fire!", 10: "Combo 10×! Luar biasa!", 15: "Combo 15×! Siapa yang bisa hentikanmu?", 20: "Combo 20×! Legenda!" };
// Kalimat Bubu di layar hasil, sesuai skor.
const resultMood = (pct, passed) => pct === 100 ? ["wow", "Sempurna! Bubu sampai melongo."] : passed ? ["happy", pick(["Kerja bagus! Satu langkah lebih dekat.", "Hebat, ilmunya masuk!", "Mantap, terus konsisten ya."])] : ["oops", pick(["Belum lulus bukan berarti gagal. Ulangi yang salah dulu, yuk.", "Hampir! Coba lagi setelah baca ulang materinya.", "Bubu tetap di sini. Kita coba sekali lagi?"])];
const QLABEL = { m: "Pilih jawaban yang tepat", t: "Ketik jawabannya", f: "Benar atau salah?", o: "Susun kalimat bahasa Inggrisnya", l: "Dengarkan, lalu susun kalimatnya" };
const answerOf = q => q.t === "m" ? q.o[0] : q.t === "t" ? q.a[0] : q.t === "f" ? (q.a ? "Benar" : "Salah") : q.s;
const norm = s => String(s).toLowerCase().replace(/[‘’`]/g, "'").replace(/\s+/g, " ").trim().replace(/[.!?]+$/, "");
const CONTR = [[/\bcan't\b/g, ["cannot", "can not"]], [/\bwon't\b/g, ["will not"]], [/n't\b/g, [" not"]], [/'re\b/g, [" are"]], [/'m\b/g, [" am"]], [/'ve\b/g, [" have"]], [/'ll\b/g, [" will"]], [/'d\b/g, [" would", " had"]], [/'s\b/g, [" is", " has"]]];
function variants(x) {
  const set = new Set([norm(x)]);
  CONTR.forEach(([re, alts]) => [...set].forEach(v => { re.lastIndex = 0; if (re.test(v)) alts.forEach(a => { re.lastIndex = 0; set.add(v.replace(re, a).replace(/\s+/g, " ").trim()); }); }));
  return set;
}
const accepts = (answers, user) => { const u = variants(user); return answers.some(a => [...variants(a)].some(v => u.has(v))); };
const fmtQ = s => esc(s).replace(/___/g, '<span class="blank"></span>');

function runQuiz(items, o) {
  if (!items.length) return o.back();
  const coin0 = S.coins;
  enterSession();
  clearInterval(TICK); TICK = null; stopSpeak();
  document.body.classList.add("focus");
  const N = items.length, lv = o.li != null ? ` style="--lv:var(--l${o.li + 1});--ldk:var(--ld${o.li + 1})"` : "";
  // Combo berjalan disimpan (S.ccur), jadi berlanjut ke materi berikutnya sampai ada jawaban salah.
  const carried = o.silent ? 0 : (S.ccur || 0);
  let i = 0, right = 0, combo = carried, maxCombo = 0, gained = 0, answered = false, st = {};
  const missed = [], res = [];
  const deadline = o.limit ? Date.now() + o.limit * 1000 : 0;
  const mmss = ms => { const t = Math.max(0, Math.ceil(ms / 1000)); return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0"); };
  clearInterval(QT); QT = null;
  if (deadline) QT = setInterval(() => {
    const left = deadline - Date.now(), el = $("#qtime");
    if (el) { el.lastChild.textContent = mmss(left); el.classList.toggle("warn", left < 60000); }
    if (left <= 0) { clearInterval(QT); QT = null; if (i < N) { while (res.length < N) res.push(false); i = N; o.timeUp = true; finish(); } }
  }, 500);
  const comboHTML = () => combo >= 3 ? `<span class="combo"${combo === carried && carried ? ' title="Lanjutan dari materi sebelumnya"' : ""}>${combo}× combo${combo === carried && carried ? " · lanjut" : ""}</span>` : "";

  function drawOrd() {
    const used = new Set(st.ans);
    $("#ord").innerHTML = `<div class="slot" aria-label="Jawaban Anda">${st.ans.map((k, p) => `<button class="word" data-a="unpick" data-p="${p}">${esc(st.words[k])}</button>`).join("")}${st.ans.length ? "" : '<span class="hint">Ketuk kata-kata di bawah sesuai urutan</span>'}${st.ans.length === st.words.length ? `<span class="punct">${esc(st.punct)}</span>` : ""}</div>
      <div class="bank">${st.bank.map(k => `<button class="word${used.has(k) ? " used" : ""}" data-a="pickw" data-k="${k}"${used.has(k) ? " disabled" : ""}>${esc(st.words[k])}</button>`).join("")}</div>`;
    const c = $("#chk"); if (c) c.disabled = st.ans.length !== st.words.length;
  }

  function show() {
    if (i >= N) return finish();
    const c = items[i]; answered = false; st = {};
    let body = "";
    if (c.t === "m") {
      st.opts = shuffle(c.o);
      body = `<p class="qtext">${fmtQ(c.q)}</p><div class="opts">${st.opts.map((t, k) => `<button class="opt" data-a="pick" data-k="${k}"><kbd>${k + 1}</kbd><span>${esc(t)}</span></button>`).join("")}</div><button class="btn lv" data-a="confirm" id="chk" disabled>${o.silent ? "Lanjut" : "Periksa"}</button><p class="muted pickhint">Ketuk jawaban, lalu tekan ${o.silent ? "Lanjut" : "Periksa"}. Masih bisa diganti sebelum itu.</p>`;
    } else if (c.t === "f") {
      const lx = c.key ? LESSONS.find(x => x.id === c.key.split(":")[0]) : null;
      body = `<div class="tstack"><div class="tcard" id="tcard">${lx ? `<span class="tag">${LEVELS[lx.li].cefr} · ${esc(lx.title)}</span>` : ""}<p class="qtext tq">${esc(c.q)}</p><span class="muted" style="font-weight:600">Kalimat atau pernyataan ini benar?</span></div></div><div class="tf"><button class="opt pop" data-a="tf" data-v="0">${I("x")} Salah</button><button class="opt pop" data-a="tf" data-v="1">${I("check")} Benar</button></div><button class="btn lv" data-a="confirm" id="chk" disabled>${o.silent ? "Lanjut" : "Periksa"}</button>`;
    } else if (c.t === "t") {
      body = `<p class="qtext">${fmtQ(c.q)}</p><form class="typer" novalidate><label class="sr" for="ans">Jawaban Anda</label><input id="ans" name="ans" type="text" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" enterkeyhint="done" placeholder="Ketik di sini"><button class="btn lv" type="submit">Periksa</button></form>`;
    } else {
      const m = c.s.match(/^(.*?)([.?!]*)$/); st.words = m[1].split(" "); st.punct = m[2]; st.ans = [];
      const idx = st.words.map((_, k) => k); let b = shuffle(idx), tries = 0;
      while (idx.length > 1 && b.every((v, k) => st.words[v] === st.words[k]) && tries++ < 20) b = shuffle(idx);
      st.bank = b;
      body = (c.t === "l"
        ? `<div class="listen"><button class="btn lv" data-a="play">${I("speaker")} Putar</button><button class="btn ghost" data-a="slow">Lambat</button></div><p class="muted" id="lhint"><button class="back" data-a="hint" style="padding:0">Tidak ada suara? Tampilkan artinya</button></p>`
        : `<p class="qtext">${esc(c.tr)}</p>`) + `<div id="ord"></div><button class="btn lv" data-a="check" id="chk" disabled>Periksa</button>`;
    }
    app.innerHTML = `<div class="quiz"${lv}>
      <div class="qbar"><button class="iconbtn" data-a="quit" aria-label="Keluar dari sesi">${I("x")}</button>${N <= 12 ? `<div class="blocks" style="--n:${N}" role="progressbar" aria-valuemin="0" aria-valuemax="${N}" aria-valuenow="${i}" aria-label="Soal ${i + 1} dari ${N}${o.silent ? "" : ", " + right + " benar"}">${items.map((_, k) => `<span class="${k < i ? (o.silent ? "cur" : res[k] ? "ok" : "no") : k === i ? "cur" : ""}" title="${k < i && !o.silent ? (res[k] ? "Benar" : "Salah") : ""}"></span>`).join("")}</div>` : `<div class="prog" role="progressbar" aria-valuemin="0" aria-valuemax="${N}" aria-valuenow="${i}"><i style="width:${i / N * 100}%"></i></div>`}<span class="qcount">${i + 1}/${N}</span>${deadline ? `<span class="qtime" id="qtime" role="timer" aria-label="Sisa waktu">${I("timer")}<span>${mmss(deadline - Date.now())}</span></span>` : `<span id="combo">${comboHTML()}</span>`}</div>
      <div id="confirm"></div>${c.ctx || o.ctx || ""}
      <p class="eyebrow">${c.sec ? `<b class="sec">${c.sec}</b> · ` : ""}${QLABEL[c.t]}</p>${body}
      <div id="fb" aria-live="polite"></div>
      ${o.silent ? `<button class="btn ghost skip" data-a="skip">Saya tidak tahu</button>` : ""}</div>`;
    if (c.t === "o" || c.t === "l") drawOrd();
    if (c.t === "t") { try { $("#ans").focus({ preventScroll: true }); } catch (e) {} }
    if (c.t === "l") speak(c.s);
    toTop();
  }

  function grade(ok) {
    if (answered) return; answered = true;
    const c = items[i]; res.push(ok);
    if (o.silent) { i++; return show(); }
    S.ans++;
    { const cat = c.t === "l" ? "l" : c.key && c.key.startsWith("r_") ? "r" : "g", v = S.sk[cat] || [0, 0]; S.sk[cat] = [v[0] + 1, v[1] + (ok ? 1 : 0)]; }
    if (ok) { right++; combo++; S.ccur = combo; maxCombo = Math.max(maxCombo, combo); S.cor++; { const td = dkey(); S.dc[td] = (S.dc[td] || 0) + 1; S.dcombo[td] = Math.max(S.dcombo[td] || 0, combo); } if (combo > S.combo) S.combo = combo; if (c.key) srsHit(S.wrong, c.key, true); addXp(10); addCoins(1); gained += 10; sfx.ok(); }
    else { combo = 0; S.ccur = 0; if (c.key) srsHit(S.wrong, c.key, false); missed.push(c); sfx.no(); }
    save();
    const blk = $$(".blocks span")[i]; if (blk) blk.className = ok ? "ok" : "no";
    const pg = $(".prog i"); if (pg) pg.style.width = (i + 1) / N * 100 + "%";
    $("#combo").innerHTML = comboHTML();
    const milestone = ok && (COMBO_LINES[combo] || (combo > 20 && combo % 10 === 0 ? "Combo " + combo + "×! Tak terbendung!" : ""));
    if (milestone) { const cb = $("#combo .combo"); if (cb) cb.classList.add("boom"); buzz([15, 40, 15]); }
    const mood = !ok ? "oops" : milestone ? "wow" : "happy", line = !ok ? pick(NO_LINES) : milestone || pick(OK_LINES);
    $("#fb").innerHTML = `<div class="fb ${ok ? "ok" : "no"}"><div class="fb-top">${BUBU(50, "react " + mood, "", mood)}<div class="fb-say"><p class="fb-h"><span>${ok ? pick(PRAISE) : "Belum tepat"}</span>${ok ? '<span class="plus">+10 XP</span><span class="plus coin">' + COIN + '+1</span>' : ""}</p><p class="bline">${line}</p></div></div>
      ${!ok || c.t === "l" ? `<p>Jawaban: <b>${esc(answerOf(c))}</b></p>` : ""}${c.t === "l" ? `<p>${esc(c.tr)}</p>` : ""}${c.e ? `<p>${esc(c.e)}</p>` : ""}
      <button class="btn ${ok ? "good" : "bad"}" data-a="next" id="nx">${i + 1 < N ? "Lanjut" : "Lihat hasil"}</button></div>`;
    try { $("#nx").focus({ preventScroll: true }); } catch (e) {}
    try { $("#fb").scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) {}
  }

  function finish() {
    QUIZ = null; stopSpeak(); clearInterval(QT); QT = null;
    if (o.silent) { document.body.classList.remove("focus"); return o.onEnd(res); }
    const pct = Math.round(right / N * 100);
    let bonus = 0;
    if (o.bonus && pct >= 75) bonus += 20;
    if (o.bonus && pct === 100) bonus += 30;
    if (o.extra) bonus += o.extra(pct) || 0;
    if (bonus) addXp(bonus);
    if (o.onEnd) o.onEnd(pct);
    if (pct === 100) S.perf++;
    const coinGain = S.coins - coin0;
    const nb = newBadges(); save();
    const passed = o.pass ? pct >= o.pass : pct >= 60;
    const head = pct === 100 ? "Sempurna!" : passed ? (o.pass ? "Lulus!" : "Kerja bagus!") : pct >= 50 ? "Hampir sampai" : "Belum sampai";
    const sub = o.pass ? (passed ? (o.passMsg || "Pelajaran ini ditandai selesai.") : "Butuh " + o.pass + "% untuk lulus. Ulangi soal yang salah, lalu coba lagi.") : (o.msg || "Sesi selesai.");
    const goNext = o.next && passed;
    const [mood, mline] = resultMood(pct, passed);
    const shareBtn = passed && o.share ? `<button class="btn ghost" data-a="share">${I("share")} Bagikan hasil</button>` : "";
    const certBtn = passed && o.cert != null ? `<button class="btn sun" data-a="cert">${I("award")} Lihat sertifikat</button>` : "";
    app.innerHTML = `<div class="quiz stack"${lv}>
      <p class="eyebrow">${esc(o.title)}</p>
      <div class="res-top">${ring(pct / 100, pct + "%", right + " dari " + N + " benar", "big")}<div><h1>${head}</h1><p class="muted">${sub}</p></div></div>
      <div class="greet res-bubu">${BUBU(58, "react " + mood, "Bubu", mood)}<div class="say"><span>${mline}</span></div></div>
      ${coinGain > 0 ? `<button class="coinpill" data-g="wardrobe">${COIN}<span><b>+${coinGain} koin</b> · total ${S.coins}</span>${I("right")}</button>` : ""}
      <dl class="stats3"><div><dt>XP didapat</dt><dd>+${gained + bonus}</dd></div><div><dt>Combo terbaik</dt><dd>${maxCombo}×</dd>${S.ccur >= 3 ? `<small class="carry">${S.ccur}× berlanjut</small>` : ""}</div><div><dt>Perlu diulang</dt><dd>${missed.length}</dd></div></dl>
      ${nb.map(b => `<div class="newbadge">${I(b.ic)}<div><b>${b.k || "Lencana baru"}: ${b.n}</b><span>${b.d}</span></div></div>`).join("")}
      ${certBtn}${goNext ? `<button class="btn lv" data-a="next">${o.nextLabel || "Pelajaran berikutnya"} ${I("right")}</button>` : ""}${shareBtn}
      ${missed.length ? `<button class="btn ${goNext ? "ghost" : "lv"}" data-a="redo">Ulangi ${missed.length} soal yang salah</button>` : ""}
      <div class="pair"><button class="btn ghost" data-a="again">Dari awal</button><button class="btn ghost" data-a="back">Kembali</button></div>
      <button class="btn ghost" data-g="home">${I("map")} Kembali ke beranda</button>
      ${missed.length ? `<h2 style="margin-top:12px">Yang perlu diulang</h2><ul class="missed">${missed.map(m => `<li>${esc(m.t === "o" || m.t === "l" ? m.tr : m.q)}<br><b>${esc(answerOf(m))}</b>${m.e ? `<small>${esc(m.e)}</small>` : ""}</li>`).join("")}</ul>` : ""}</div>`;
    H = {
      next() { o.next(); }, again() { o.again(); }, back() { o.back(); },
      share() { shareCard(Object.assign({ kind: "result", pct }, o.share)); },
      cert() { showCert(o.cert); },
      redo() { runQuiz(shuffle(missed), { title: o.title + " · ulangan", li: o.li, back: o.back, again: o.again, msg: "Ulangan soal yang tadi salah.", next: passed ? o.next : null, nextLabel: o.nextLabel }); }
    };
    if (passed) { sfx.win(); confetti(); }
    toTop();
  }

  H = {
    quit() { $("#confirm").innerHTML = `<div class="confirm"><span>Keluar dari sesi ini? XP yang sudah didapat tetap tersimpan.</span><span class="row"><button class="btn ghost auto" data-a="stay">Lanjutkan</button><button class="btn bad auto" data-a="leave">Keluar</button></span></div>`; },
    stay() { $("#confirm").innerHTML = ""; if (QBACKED) { QBACKED = false; try { SKIPHASH++; location.hash = "#kuis"; } catch (e) {} } },
    leave() { o.back(); },
    // Ketukan hanya memilih; jawaban dinilai setelah tombol Periksa ditekan.
    pick(el) { if (answered) return; st.sel = el; $$(".opt").forEach(b => { const on = b === el; b.classList.toggle("sel", on); b.setAttribute("aria-pressed", on); }); $("#chk").disabled = false; },
    tf(el) { H.pick(el); },
    confirm() {
      if (answered || !st.sel) return;
      const c = items[i], el = st.sel;
      el.classList.remove("sel");
      $("#chk").remove(); const hint = $(".pickhint"); if (hint) hint.remove();
      if (c.t === "m") {
        const ok = st.opts[+el.dataset.k] === c.o[0];
        if (!o.silent) { $$(".opt").forEach((b, k) => { b.disabled = true; if (st.opts[k] === c.o[0]) b.classList.add("right"); }); if (!ok) el.classList.add("wrong"); }
        return grade(ok);
      }
      const v = el.dataset.v === "1", ok = v === c.a;
      $$(".opt").forEach(b => { b.disabled = true; if ((b.dataset.v === "1") === c.a) b.classList.add("right"); });
      if (!ok) el.classList.add("wrong");
      const tc = $("#tcard"); if (tc) tc.classList.add(v ? "r" : "l", ok ? "ok" : "no");
      grade(ok);
    },
    submit(form) {
      if (answered) return;
      const inp = $("#ans"), v = norm(inp.value); if (!v) { inp.focus(); return; }
      const ok = accepts(items[i].a, inp.value);
      inp.disabled = true; inp.classList.add(ok ? "right" : "wrong");
      const b = form.querySelector("button"); if (b) b.remove();
      grade(ok);
    },
    pickw(el) { if (answered) return; st.ans.push(+el.dataset.k); drawOrd(); },
    unpick(el) { if (answered) return; st.ans.splice(+el.dataset.p, 1); drawOrd(); },
    check() {
      if (answered || st.ans.length !== st.words.length) return;
      const ok = st.ans.map(k => st.words[k]).join(" ") === st.words.join(" ");
      $("#ord").classList.add("locked", ok ? "right" : "wrong");
      const b = $("#chk"); if (b) b.remove();
      grade(ok);
    },
    play() { speak(items[i].s); },
    slow() { speak(items[i].s, true); },
    hint() { const h = $("#lhint"); if (h) h.textContent = "Artinya: " + items[i].tr; },
    next() { i++; show(); },
    skip() { if (answered) return; res.push(false); i++; show(); }
  };
  QUIZ = {
    enter() {
      if (i >= N) return false;
      if (answered) { H.next(); return true; }
      const c = items[i];
      if ((c.t === "o" || c.t === "l") && st.ans.length === st.words.length) { H.check(); return true; }
      if ((c.t === "m" || c.t === "f") && st.sel) { H.confirm(); return true; }
      return false;
    },
    digit(k) { if (i < N && (items[i].t === "m" || items[i].t === "f") && !answered) { const b = $$(".opts .opt, .tf .opt")[k]; if (b) H.pick(b); } }
  };
  show();
}

/* ================= match game ================= */
function matchGame(pool, o) {
  clearInterval(TICK); stopSpeak(); enterSession();
  document.body.classList.add("focus");
  const lv = o.li != null ? ` style="--lv:var(--l${o.li + 1});--ldk:var(--ld${o.li + 1})"` : "";
  const en = new Set(), id = new Set(), pairs = [];
  for (const p of shuffle(pool)) { if (pairs.length >= 6) break; if (en.has(p[0]) || id.has(p[1])) continue; en.add(p[0]); id.add(p[1]); pairs.push(p); }
  const A = shuffle(pairs.map((_, k) => k)), B = shuffle(pairs.map((_, k) => k));
  let sa = null, sb = null, done = 0, miss = 0, lock = false;
  const t0 = Date.now();
  app.innerHTML = `<div class="quiz"${lv}>
    <div class="qbar"><button class="iconbtn" data-a="leave" aria-label="Keluar">${I("x")}</button><div class="prog"><i id="mp" style="width:0%"></i></div><span class="qcount" id="mt">0 dtk</span></div>
    <p class="eyebrow">Cocokkan kata dengan artinya</p>
    <div class="match" style="margin-top:18px">${pairs.map((_, r) => `<button class="opt" data-a="ma" data-k="${A[r]}">${esc(pairs[A[r]][0])}</button><button class="opt" data-a="mb" data-k="${B[r]}">${esc(pairs[B[r]][1])}</button>`).join("")}</div></div>`;
  TICK = setInterval(() => { const e = $("#mt"); if (e) e.textContent = Math.round((Date.now() - t0) / 1000) + " dtk"; }, 500);
  function test() {
    if (!sa || !sb) return;
    const a = sa, b = sb; sa = sb = null;
    if (a.dataset.k === b.dataset.k) {
      [a, b].forEach(x => { x.classList.remove("sel"); x.classList.add("gone"); x.disabled = true; });
      done++; sfx.ok(); $("#mp").style.width = done / pairs.length * 100 + "%";
      if (done === pairs.length) end();
    } else {
      miss++; sfx.no(); lock = true;
      [a, b].forEach(x => { x.classList.remove("sel"); x.classList.add("wrong"); });
      setTimeout(() => { [a, b].forEach(x => x.classList.remove("wrong")); lock = false; }, 420);
    }
  }
  function end() {
    clearInterval(TICK); TICK = null;
    const secs = Math.max(1, Math.round((Date.now() - t0) / 1000)), xp = 15 + (miss ? 0 : 5);
    const rec = !!o.record && (!S.matchBest || secs < S.matchBest);
    addXp(xp); if (rec) S.matchBest = secs;
    const nb = newBadges(); save(); sfx.win(); if (rec || !miss) confetti();
    app.innerHTML = `<div class="quiz stack"${lv}>
      <p class="eyebrow">Cocokkan kata</p>
      <h1>${rec ? "Rekor baru!" : miss ? "Semua pasangan ketemu" : "Tanpa salah!"}</h1>
      <dl class="stats3"><div><dt>Waktu</dt><dd>${secs} dtk</dd></div><div><dt>Salah pasang</dt><dd>${miss}</dd></div><div><dt>XP didapat</dt><dd>+${xp}</dd></div></dl>
      ${nb.map(b => `<div class="newbadge">${I(b.ic)}<div><b>${b.k || "Lencana baru"}: ${b.n}</b><span>${b.d}</span></div></div>`).join("")}
      <button class="btn lv" data-a="again">Main lagi</button><button class="btn ghost" data-a="back">Kembali</button><button class="btn ghost" data-g="home">${I("map")} Kembali ke beranda</button></div>`;
    H = { again() { o.again(); }, back() { o.back(); } };
    toTop();
  }
  const sel = side => el => {
    if (lock) return;
    $$('.match [data-a="' + side + '"]').forEach(b => b.classList.remove("sel"));
    el.classList.add("sel"); if (side === "ma") sa = el; else sb = el; test();
  };
  H = { leave() { o.back(); }, ma: sel("ma"), mb: sel("mb") };
  toTop();
}

/* ================= practice hub ================= */
VIEWS.practice = function () {
  const t = dkey(), nW = wrongItems().length, known = knownCount(), later = wrongLater();
  const tool = (a, ic, lv, title, desc, meta, dis) => `<button class="tool" data-a="${a}" style="--lv:var(--l${lv});--ldk:var(--ld${lv})"${dis ? " disabled" : ""}><span class="tic">${I(ic)}</span><span><b>${title}</b><small>${desc}</small></span><span class="meta">${meta}</span></button>`;
  app.innerHTML = `<div class="narrow stack">
    <div><p class="eyebrow">Latihan bebas</p><h1 style="margin-top:8px">Asah lagi yang sudah dipelajari.</h1></div>
    <section class="tgroup" aria-label="Harian"><div class="tg-h"><h2>Harian</h2><span class="muted">Sebentar tiap hari</span></div><div class="tools">
      ${tool("daily", "calendar", 4, "Tantangan harian", "10 soal acak dari pelajaran yang sudah Anda buka", S.daily === t ? "Selesai" : "+30 XP")}
      ${tool("mist", "retry", 5, "Ulangan hari ini", nW ? "Soal yang pernah salah, dijadwalkan ulang otomatis" : later ? later + " soal dijadwalkan muncul di hari lain" : "Soal yang Anda jawab salah akan dijadwalkan di sini", nW ? nW + " soal" : "Kosong", !nW)}
    </div></section>
    <section class="tgroup" aria-label="Asah skill"><div class="tg-h"><h2>Asah skill</h2><span class="muted">Kosakata, mendengar, ngobrol</span></div><div class="tools">
      ${tool("flash", "layers", 2, "Flashcard", "Balik kartu dan tandai kata yang sudah hafal", known + "/" + VOCAB.length)}
      ${tool("mine", "bookmark", 5, "Kataku", "Kamus pribadimu: kata yang kamu simpan, siap dilatih", Object.keys(S.mine).length + " kata")}
      ${tool("matchg", "grid", 3, "Cocokkan kata", "Pasangkan 6 kata dengan artinya secepat mungkin", S.matchBest ? S.matchBest + " dtk" : "Baru")}
      ${canSpeak() ? tool("listen", "headphones", 6, "Dengar & susun", "Dengarkan kalimat, lalu susun kata-katanya", "5 kalimat") : ""}
      ${tool("talk", "chat", 1, "Percakapan", "Ngobrol di kafe, hotel, sampai wawancara kerja", TALKS.filter(T => S.talk[T.id] != null).length + "/" + TALKS.length)}
    </div></section>
    <section class="tgroup" aria-label="Ukur level"><div class="tg-h"><h2>Ukur level</h2><span class="muted">Cek kemajuanmu</span></div><div class="tools">
      ${tool("exam", "timer", 6, "Simulasi tes", "Tes berwaktu: tata bahasa, membaca, mendengar. Dapat perkiraan level CEFR", S.exams.length ? "Terakhir " + S.exams[S.exams.length - 1].lv : "35 soal")}
      ${tool("place", "compass", 1, "Tes penempatan", "18 soal untuk menemukan level awal Anda", "A1–C2")}
    </div></section>
    </div>`;
  H = { daily: startDaily, mist: startMistakes, matchg: globalMatch, talk() { nav("talk"); }, exam() { nav("exam"); }, mine() { nav("mine"); }, flash() { nav("flash"); }, listen: globalListen, place: startPlacement };
};

function startPlacement() {
  const items = [];
  LEVELS.forEach(L => shuffle(L.lessons.flatMap(x => x.qs.filter(q => q.t === "m"))).slice(0, 3).forEach(q => items.push(q)));
  runQuiz(items, {
    title: "Tes penempatan", silent: true, back: () => nav("practice"),
    onEnd(res) {
      const sc = LEVELS.map((_, i) => res.slice(i * 3, i * 3 + 3).filter(Boolean).length);
      let rec = 0; while (rec < LEVELS.length && sc[rec] >= 2) rec++;
      const tgt = Math.min(rec, LEVELS.length - 1), L = LEVELS[tgt];
      app.innerHTML = `<div class="narrow stack" style="--lv:var(--l${tgt + 1});--ldk:var(--ld${tgt + 1})">
        <p class="eyebrow">Hasil tes penempatan</p>
        <div class="lesson-h"><span class="roundel">${L.cefr}</span><div><h1>Mulai dari ${L.name}</h1><p class="muted">${rec === LEVELS.length ? "Anda menjawab benar di semua level. Pakai jalur Expert untuk mengasah." : "Level dihitung lulus jika 2 dari 3 soalnya benar."}</p></div></div>
        <div class="card">${LEVELS.map((l, i) => `<div class="setting"><span class="row"><span class="roundel sm" style="--lv:var(--l${i + 1});--ldk:var(--ld${i + 1})">${l.cefr}</span><b>${l.name}</b></span><span class="count">${sc[i]}/3</span></div>`).join("")}</div>
        <button class="btn lv" data-a="go">Buka jalur ${L.cefr} ${I("right")}</button>
        ${tgt > 0 ? `<button class="btn ghost" data-a="mark">Tandai ${tgt} jalur sebelumnya selesai</button>` : ""}
        <button class="btn ghost" data-g="home">Kembali ke rute</button></div>`;
      H = {
        go() { nav("lesson", tgt, 0); },
        mark(el) { for (let i = 0; i < tgt; i++) LEVELS[i].lessons.forEach(x => { S.done[x.id] = 1; }); newBadges(); save(); el.disabled = true; el.textContent = "Jalur sebelumnya ditandai selesai"; }
      };
      toTop();
    }
  });
}

/* ================= flashcards ================= */
VIEWS.flash = function (f = "all") {
  const pool = VOCAB.filter(v => f === "all" || (f === "mine" ? S.mine[v.w] : LEVELS[v.li].id === f));
  const due = v => !S.known[v.w] || S.known[v.w].d <= dkey();
  let deck = shuffle(pool.filter(due)), flipped = false;
  const draw = () => {
    const known = pool.filter(v => isKnown(v.w)).length, c = deck[0];
    app.innerHTML = `<div class="narrow stack">
      <div><button class="back" data-g="practice">${I("left")} Latihan</button><h1>Flashcard</h1></div>
      <div class="seg scroll" role="group" aria-label="Pilih level"><button aria-pressed="${f === "all"}" data-a="filt" data-f="all">Semua</button><button aria-pressed="${f === "mine"}" data-a="filt" data-f="mine">Kataku</button>${LEVELS.map(L => `<button aria-pressed="${f === L.id}" data-a="filt" data-f="${L.id}">${L.cefr}</button>`).join("")}</div>
      <div><div class="bar"><i style="width:${pool.length ? known / pool.length * 100 : 0}%"></i></div><p class="muted" style="margin-top:6px">${known} dari ${pool.length} kata hafal · ${deck.length} kartu untuk hari ini</p></div>
      ${c ? `<div class="flip" style="--lv:var(--l${c.li + 1});--ldk:var(--ld${c.li + 1})"><button class="flip-in" data-a="flip" aria-label="Balik kartu">
          <span class="face a"><span class="eyebrow">${LEVELS[c.li].cefr}${c.t ? " · " + esc(c.t) : ""} · ${S.known[c.w] ? "Ulangan" : "Kata baru"}</span><span class="w">${esc(c.w)}</span><span class="hint">Ketuk untuk melihat arti</span></span>
          <span class="face b"><span class="eyebrow" style="color:inherit">Arti</span><span class="w">${esc(c.m)}</span><span class="hint">${esc(c.w)}</span></span></button></div>
        <div class="pair">${canSpeak() ? `<button class="btn ghost" data-say="${esc(c.w)}">${I("speaker")} Dengarkan</button>` : ""}${bmBtn(c.w, true)}</div>
        <div class="pair"><button class="btn bad" data-a="later">Belum hafal</button><button class="btn good" data-a="know">Sudah hafal</button></div>
        <p class="muted">Kata yang hafal muncul lagi setelah 1, 3, 7, 14, lalu 30 hari supaya benar-benar menempel.</p>`
        : f === "mine" && !pool.length ? `<div class="card stack"><h2>Kataku masih kosong</h2><p class="muted">Simpan kata dengan ikon penanda di Kosakata pelajaran, Kata hari ini, atau di sini saat latihan flashcard.</p><button class="btn" data-g="mine">Buka Kataku</button></div>`
        : `<div class="card stack"><h2>Kartu hari ini selesai</h2><p class="muted">Kata yang sudah hafal akan muncul lagi sesuai jadwal. Pilih level lain, atau ulangi semua dari awal.</p><button class="btn" data-a="resetk">Ulangi semua dari awal</button></div>`}</div>`;
  };
  H = {
    filt(el) { nav("flash", el.dataset.f); },
    flip() { flipped = !flipped; const e = $(".flip"); if (e) e.classList.toggle("on", flipped); },
    later() { const c = deck.shift(); S.known[c.w] = { b: 0, d: dkey() }; save(); deck.push(c); flipped = false; draw(); },
    know() {
      const c = deck.shift(), e = S.known[c.w], b = (e ? e.b : 0) + 1;
      S.known[c.w] = { b, d: addDays(INT[Math.min(b, INT.length - 1)] || 1) };
      addXp(2); newBadges(); save(); flipped = false; draw(); chrome();
    },
    resetk() { pool.forEach(v => { delete S.known[v.w]; }); save(); nav("flash", f); }
  };
  draw();
};

/* ================= reading ================= */
VIEWS.read = function (li, k = 0) {
  const L = LEVELS[li];
  if (!L || !L.reads || !L.reads[k]) return nav("home");
  const R = L.reads[k], full = R.text.join(" ").replace(/<br>/g, ". ");
  app.innerHTML = `<div class="narrow stack" style="--lv:var(--l${li + 1});--ldk:var(--ld${li + 1})">
    <div><button class="back" data-a="toskill">${I("left")} Praktik ${L.cefr}</button>
    <div class="lesson-h"><span class="roundel">${L.cefr}</span><div><p class="eyebrow">Babak 1 · Bacaan ${k + 1} dari ${L.reads.length}</p><h1>${esc(R.title)}</h1></div></div></div>
    ${canSpeak() ? `<div class="pair"><button class="btn ghost" data-a="listen">${I("headphones")} Dengarkan</button><button class="btn ghost" data-a="slow">Lambat</button></div>` : ""}
    <article class="card reading">${R.text.map(p => `<p>${p}</p>`).join("")}</article>
    <p class="muted">Baca sampai selesai, lalu jawab ${R.qs.length} soal. Teksnya tetap bisa dibuka saat menjawab.</p>
    <button class="btn lv" data-a="go">Jawab soal ${I("right")}</button></div>`;
  H = { listen() { speak(full); }, slow() { speak(full, true); }, go() { startRead(li, k); }, toskill() { nav("skill", li, 0); } };
};
function startRead(li, k = 0) {
  const L = LEVELS[li], R = L.reads[k];
  runQuiz(R.qs.slice(), {
    title: "Bacaan · " + R.title, li, pass: 60, bonus: true, passMsg: "Pemahaman bacaan Anda bagus.",
    back: () => nav("read", li, k), again: () => startRead(li, k),
    next: () => goStep(stepAfter("read", li, k)), nextLabel: stepLabel2(stepAfter("read", li, k), "read"),
    ctx: `<details class="ctx"><summary>Lihat bacaan</summary>${R.text.map(p => `<p>${p}</p>`).join("")}</details>`,
    onEnd(p) { S.read[R.sid] = Math.max(S.read[R.sid] || 0, p); }
  });
}

/* ================= speaking ================= */
const SR = (() => { try { return window.SpeechRecognition || window.webkitSpeechRecognition || null; } catch (e) { return null; } })();
let REC = null;
function stopRec() { try { if (REC) { REC.onend = REC.onresult = REC.onerror = null; REC.abort(); } } catch (e) {} REC = null; }
const expand1 = x => CONTR.reduce((v, [re, alts]) => { re.lastIndex = 0; return v.replace(re, alts[0]); }, norm(x));
function sayScore(target, heard) {
  const words = x => expand1(x).replace(/[^a-z0-9' ]/g, " ").split(/\s+/).filter(Boolean);
  const T = words(target), pool = words(heard);
  if (!T.length) return 0;
  let hit = 0; T.forEach(w => { const k = pool.indexOf(w); if (k >= 0) { hit++; pool.splice(k, 1); } });
  return Math.round(hit / T.length * 100);
}
VIEWS.speak = function (li, t = 0) {
  const L = LEVELS[li];
  if (!L || !L.topics[t]) return nav("home");
  const TP = L.topics[t], SS = TP.s, key = L.id + ":" + t;
  let k = Math.max(0, SS.findIndex((_, n) => !(S.spoke[key] || {})[n])), st = "idle", heard = "", pct = 0;
  const done = () => S.spoke[key] || {};
  const nx = stepAfter("speak", li, t);
  const draw = () => {
    const [en, tr] = SS[k], ok = done()[k];
    const fb = st === "ok" || st === "no" ? `<div class="fb ${st}"><p class="fb-h"><span>${st === "ok" ? "Lancar!" : "Coba lagi"}</span><span class="plus">${pct}% cocok</span></p><p>Terdengar: <b>${esc(heard || "(tidak ada suara)")}</b></p>${st === "no" ? "<p>Ucapkan pelan dan jelas. Targetnya 80% kata cocok.</p>" : ""}</div>`
      : st === "err" ? `<div class="fb no"><p>${esc(heard)}</p></div>` : "";
    app.innerHTML = `<div class="narrow stack" style="--lv:var(--l${li + 1});--ldk:var(--ld${li + 1})">
      <div><button class="back" data-a="toskill">${I("left")} Praktik ${L.cefr}</button>
      <div class="lesson-h"><span class="roundel">${L.cefr}</span><div><p class="eyebrow">Babak 2 · Topik ${t + 1} dari ${L.topics.length} · ${topicN(L, t)}/${SS.length} lancar</p><h1>${esc(TP.title)}</h1></div></div></div>
      <div class="dots" role="group" aria-label="Pilih kalimat">${SS.map((_, n) => `<button class="${n === k ? "cur" : ""}${done()[n] ? " ok" : ""}" data-a="jump" data-k="${n}" aria-label="Kalimat ${n + 1}${done()[n] ? ", lancar" : ""}"></button>`).join("")}</div>
      <div class="tcard say${st === "ok" ? " ok" : st === "no" ? " no" : ""}"><span class="tag">Kalimat ${k + 1} dari ${SS.length}${ok ? " · lancar" : ""}</span><p class="qtext tq">${esc(en)}</p><span class="muted" style="font-weight:600">${esc(tr)}</span></div>
      ${canSpeak() ? `<div class="pair"><button class="btn ghost" data-say="${esc(en)}">${I("speaker")} Dengar</button><button class="btn ghost" data-a="slow">Lambat</button></div>` : ""}
      ${SR ? `<button class="btn ${st === "rec" ? "bad" : "blue"}" data-a="rec">${I("mic")} ${st === "rec" ? "Mendengarkan… ketuk untuk berhenti" : "Ketuk lalu ucapkan"}</button>`
           : `<div class="card"><p><b>Penilaian suara tidak tersedia di browser ini.</b> Buka English Path di Chrome (Android atau komputer) agar ucapan Anda dinilai otomatis. Untuk sekarang: dengarkan, tirukan dengan suara keras, lalu tandai sendiri.</p></div><button class="btn blue" data-a="self">Saya sudah mengucapkannya</button>`}
      <div aria-live="polite">${fb}</div>
      <div class="pair"><button class="btn ghost" data-a="prev"${k === 0 ? " disabled" : ""}>Sebelumnya</button><button class="btn lv" data-a="next">${k + 1 < SS.length ? "Berikutnya" : nx ? stepLabel2(nx, "speak").replace("materi berikutnya", "topik berikutnya") : "Selesai"}</button></div></div>`;
  };
  const pass = () => { if (done()[k]) return; S.spoke[key] = Object.assign({}, done(), { [k]: 1 }); addXp(5); addCoins(1); newBadges(); save(); chrome(); };
  H = {
    jump(el) { stopRec(); k = +el.dataset.k; st = "idle"; draw(); },
    prev() { stopRec(); if (k > 0) { k--; st = "idle"; draw(); } },
    next() { stopRec(); if (k + 1 < SS.length) { k++; st = "idle"; draw(); } else goStep(nx); },
    toskill() { stopRec(); nav("skill", li, 1); },
    slow() { speak(SS[k][0], true); },
    self() { pass(); st = "ok"; pct = 100; heard = "(ditandai sendiri)"; sfx.ok(); draw(); },
    rec() {
      if (st === "rec") { try { REC && REC.stop(); } catch (e) {} return; }
      try {
        stopSpeak(); stopRec();
        const r = REC = new SR(); r.lang = "en-US"; r.interimResults = false; r.maxAlternatives = 3;
        r.onresult = e => {
          const alts = [...e.results[0]].map(x => x.transcript); let best = -1, bh = alts[0] || "";
          alts.forEach(a => { const sc = sayScore(SS[k][0], a); if (sc > best) { best = sc; bh = a; } });
          heard = bh; pct = Math.max(0, best); st = pct >= 80 ? "ok" : "no";
          if (st === "ok") { pass(); sfx.ok(); } else sfx.no();
          draw();
        };
        r.onerror = e => {
          st = "err";
          heard = e.error === "not-allowed" || e.error === "service-not-allowed" ? "Izin mikrofon ditolak. Izinkan mikrofon untuk situs ini di pengaturan browser, lalu coba lagi."
            : e.error === "no-speech" ? "Tidak terdengar suara. Coba lagi lebih dekat ke mikrofon." : "Mikrofon bermasalah (" + e.error + "). Coba lagi.";
          draw();
        };
        r.onend = () => { if (st === "rec") { st = "idle"; draw(); } };
        r.start(); st = "rec"; draw();
      } catch (e) { st = "err"; heard = "Mikrofon tidak bisa dimulai di browser ini."; draw(); }
    }
  };
  draw();
};

/* ================= welcome ================= */
VIEWS.welcome = function (step = 0) {
  document.body.classList.add("focus");
  const done = () => { S.onb = 1; save(); };
  if (step === 0) {
    app.innerHTML = `<div class="narrow stack welcome">
      <div class="greet">${BUBU(78, "wave", "Bubu, maskot English Path")}<div class="say"><b>Hai, aku Bubu!</b><span>Aku akan menemanimu belajar bahasa Inggris.</span></div></div>
      <h1>Belajar bahasa Inggris dari nol sampai mahir.</h1>
      <ul class="perks">
        <li>${I("map")}<span><b>${LESSONS.length} pelajaran, ${NQ} soal</b><br>Dari A1 Basic sampai C2 Expert, dijelaskan dalam bahasa Indonesia.</span></li>
        <li>${I("mic")}<span><b>Membaca, mendengar, berbicara</b><br>Bacaan pendek, latihan dengar, dan ucapan yang dinilai otomatis.</span></li>
        <li>${I("retry")}<span><b>Ulangan pintar</b><br>Soal yang salah dan kosakata muncul lagi tepat sebelum terlupa.</span></li>
      </ul>
      <button class="btn blue" data-a="s1">Mulai ${I("right")}</button>
      <button class="btn ghost" data-a="skip">Lewati, langsung ke peta level</button></div>`;
  } else if (step === 1) {
    app.innerHTML = `<div class="narrow stack welcome">
      <p class="eyebrow">Langkah 1 dari 3</p><h1>Mau dipanggil siapa?</h1>
      <form class="stack" id="nameform" novalidate><label class="sr" for="nm">Nama panggilan</label>
      <input class="namefield" id="nm" name="nm" type="text" maxlength="24" autocomplete="given-name" placeholder="Nama panggilan" value="${esc(S.name)}">
      <button class="btn" type="submit">Lanjut ${I("right")}</button></form>
      <button class="btn ghost" data-a="noname">Lewati</button>
      <p class="muted">Nama hanya tersimpan di perangkat ini, dipakai Bubu untuk menyapamu.</p></div>`;
  } else if (step === 2) {
    app.innerHTML = `<div class="narrow stack welcome">
      <p class="eyebrow">Langkah 2 dari 3</p><h1>Berapa lama mau belajar tiap hari?</h1>
      <div class="goals">${GOALN.map(([g, n, m]) => `<button class="goal pop${S.goal === g ? " on" : ""}" data-a="goal" data-v="${g}"><b>${n}</b><span>${m} · ${g.toLocaleString("id-ID")} XP</span></button>`).join("")}</div>
      <p class="muted">Bisa diubah kapan saja di Profil.</p></div>`;
  } else {
    app.innerHTML = `<div class="narrow stack welcome">
      <p class="eyebrow">Langkah 3 dari 3</p><h1>Sudah bisa bahasa Inggris?</h1>
      <button class="goal pop" data-a="a1"><b>Saya pemula</b><span>Mulai dari pelajaran pertama A1</span></button>
      <button class="goal pop" data-a="test"><b>Sudah bisa sedikit</b><span>Tes penempatan 18 soal, ± 3 menit</span></button></div>`;
  }
  H = {
    s1() { nav("welcome", 1); },
    skip() { done(); nav("home"); },
    goal(el) { S.goal = +el.dataset.v; save(); nav("welcome", 3); },
    submit(f) { S.name = (f.querySelector("#nm").value || "").trim().slice(0, 24); save(); nav("welcome", 2); },
    noname() { nav("welcome", 2); },
    a1() { done(); nav("lesson", 0, 0); },
    test() { done(); startPlacement(); }
  };
};

/* ================= profile ================= */
VIEWS.profile = function () {
  const r = rankOf(S.xp), acc = S.ans ? Math.round(S.cor / S.ans * 100) : 0, got = BADGES.filter(b => S.badges[b.id]).length;
  const stat = (k, v) => `<div><dt>${k}</dt><dd>${v}</dd></div>`, rp = routeProgress();
  app.innerHTML = `<div class="narrow stack">
    <div class="rank"><div class="rank-h"><p class="eyebrow">Peringkat ${S.name ? esc(S.name) : "Anda"}</p><button class="iconbtn" data-g="settings" aria-label="Pengaturan">${I("gear")}</button></div><h1>${r.name}</h1>
      ${r.next ? `<div class="bar"><i style="width:${(S.xp - r.at) / (r.next.at - r.at) * 100}%"></i></div><p class="muted">${S.xp} XP. ${r.next.at - S.xp} XP lagi menuju ${r.next.name}.</p>` : `<p class="muted">${S.xp} XP. Ini peringkat tertinggi.</p>`}</div>
    <section class="card stack statcard" aria-label="Statistik">
      <dl class="statrow">${stat("Streak", streakNow() + " hr")}${stat("Materi", rp.all[0] + "/" + rp.all[1])}${stat("Akurasi", acc + "%")}${stat("Kata hafal", knownCount())}</dl>
      <details class="more"><summary>Statistik lengkap ${I("down")}</summary><dl class="statlist">${stat("Hari beruntun", streakNow())}${stat("Rekor beruntun", S.best + " hari")}${stat("Materi selesai", rp.all[0] + " dari " + rp.all[1])}${stat("· Pelajaran", rp.lesson[0] + " dari " + rp.lesson[1])}${stat("· Bacaan", rp.read[0] + " dari " + rp.read[1])}${stat("· Latihan berbicara", rp.speak[0] + " dari " + rp.speak[1])}${stat("· Percakapan", rp.talk[0] + " dari " + rp.talk[1])}${stat("· Tes level", rp.test[0] + " dari " + rp.test[1])}${stat("Lencana", nCount(S.badges) + " dari " + BADGES.length)}${stat("Akurasi", acc + "%")}${stat("Soal dijawab", S.ans)}${stat("Jawaban benar", S.cor)}${stat("Combo terbaik", S.combo + "×")}${stat("Kata hafal", knownCount())}${stat("Kata di Kataku", Object.keys(S.mine).length)}${stat("Simulasi tes", S.exams.length + "×")}</dl></details>
    </section>
    ${progressHTML(7)}
    ${badgeSummary()}
    <h2 style="margin-top:10px">Sertifikat</h2>
    ${LEVELS.some(L => S.cert[L.id]) ? `<div class="certs">${LEVELS.filter(L => S.cert[L.id]).map(L => `<button class="cert" data-a="cert" data-l="${L.i}" style="--lv:var(--l${L.i + 1});--ldk:var(--ld${L.i + 1})"><span class="roundel sm">${L.cefr}</span><span><b>${L.name}</b><small>Skor ${S.cert[L.id].p}% · ${longDate(S.cert[L.id].d)}</small></span>${I("award")}</button>`).join("")}</div>` : `<div class="card"><p class="muted">Lulus tes level (skor 75% ke atas) untuk mendapat sertifikat bernama yang bisa kamu bagikan.</p></div>`}
    <button class="setrow" data-g="settings">${I("gear")}<span class="grow"><b>Pengaturan</b><small>Nama, target harian, tampilan, suara, pindahkan progres</small></span>${I("right")}</button></div>`;
  H = {
    badge(el) { badgeSheet(el.dataset.id); },
    range(el) { const n = +el.dataset.v; $("#xpc").innerHTML = xpChart(n); $$('[data-a="range"]').forEach(b => b.setAttribute("aria-pressed", b === el)); },
    toexam() { nav("exam"); },
    cert(el) { showCert(+el.dataset.l); },
  };
};

/* ================= pengaturan ================= */
VIEWS.settings = function () {
  app.innerHTML = `<div class="narrow stack">
    <div><button class="back" data-g="profile">${I("left")} Profil</button><h1>Pengaturan</h1></div>
    <h2 style="margin-top:4px">Umum</h2>
    <div class="card" style="padding-top:4px;padding-bottom:4px">
      <div class="setting"><label for="pname"><b>Nama panggilan</b><p class="muted">Dipakai Bubu untuk menyapamu</p></label><input id="pname" type="text" maxlength="24" autocomplete="given-name" data-c="nm" value="${esc(S.name)}" placeholder="Nama"></div>
      <div class="setting"><div><b>Target harian</b><p class="muted" id="goalinfo">${goalInfo()}</p></div><div class="seg" role="group" aria-label="Target harian">${GOALS.map(g => `<button aria-pressed="${S.goal === g}" data-a="goal" data-v="${g}">${g.toLocaleString("id-ID")}</button>`).join("")}</div></div>
      <div class="setting"><div><b>Tampilan</b><p class="muted">Ikuti perangkat, terang, atau gelap</p></div><div class="seg" role="group" aria-label="Tampilan">${[["auto", "Otomatis"], ["light", "Terang"], ["dark", "Gelap"]].map(([v, t]) => `<button aria-pressed="${S.theme === v}" data-a="theme" data-v="${v}">${t}</button>`).join("")}</div></div>
      <div class="setting"><label class="switch" for="snd"><input type="checkbox" id="snd" data-c="sound"${S.sound ? " checked" : ""}> Efek suara</label></div>
    </div>
    <h2 style="margin-top:10px">Pindahkan progres</h2>
    <div class="card stack">
      <p class="muted">Ganti HP atau browser? Salin kode progres di sini, lalu tempel di perangkat baru. Progres digabung, tidak ada yang hilang.</p>
      <button class="btn ghost" data-a="exp">${I("copy")} Salin kode progres</button><div id="expout"></div>
      <label class="eyebrow" for="impin">Tempel kode dari perangkat lain</label>
      <textarea id="impin" rows="3" spellcheck="false" autocomplete="off" placeholder="EP1:…"></textarea>
      <button class="btn blue" data-a="imp">Pulihkan progres</button><div id="impmsg" aria-live="polite"></div>
    </div>
    <h2 style="margin-top:10px">Hapus data</h2>
    <div class="card" style="padding-top:4px;padding-bottom:4px">
      <div class="setting"><div><b>Reset progres</b><p class="muted">Menghapus semua XP, skor, lencana, dan Kataku. Tidak bisa dibatalkan.</p></div><button class="btn ghost auto" data-a="reset">Reset</button></div>
    </div></div>`;
  let armed = false;
  H = {
    goal(el) { S.goal = +el.dataset.v; save(); $$('[data-a="goal"]').forEach(b => b.setAttribute("aria-pressed", b === el)); const gi = $("#goalinfo"); if (gi) gi.textContent = goalInfo(); },
    theme(el) { S.theme = el.dataset.v; save(); applyTheme(); $$('[data-a="theme"]').forEach(b => b.setAttribute("aria-pressed", b === el)); },
    nm(el) { S.name = (el.value || "").trim().slice(0, 24); save(); },
    sound(el) { S.sound = el.checked; save(); if (S.sound) sfx.ok(); },
    install() { if (!DEFER) return; DEFER.prompt(); DEFER.userChoice.finally(() => { DEFER = null; rerender(); }); },
    exp() {
      const code = "EP1:" + btoa(unescape(encodeURIComponent(JSON.stringify(S))));
      const out = $("#expout");
      out.innerHTML = `<textarea readonly rows="3" aria-label="Kode progres">${esc(code)}</textarea><p class="muted" id="expmsg"></p>`;
      const ta = out.querySelector("textarea"); ta.focus(); ta.select();
      const done = m => { const e = $("#expmsg"); if (e) e.textContent = m; };
      try { navigator.clipboard.writeText(code).then(() => done("Kode disalin. Tempel di perangkat baru."), () => done("Salin kode di atas secara manual (tekan lama, lalu Salin).")); }
      catch (e) { done("Salin kode di atas secara manual (tekan lama, lalu Salin)."); }
    },
    imp() {
      const raw = ($("#impin").value || "").replace(/\s+/g, ""), msg = $("#impmsg");
      try {
        if (!raw.startsWith("EP1:")) throw 0;
        const obj = JSON.parse(decodeURIComponent(escape(atob(raw.slice(4)))));
        S = merge(S, hydrate(obj)); applyTheme(); S.onb = 1; S.ts = Date.now(); newBadges(); save();
        msg.innerHTML = `<div class="fb ok"><p class="fb-h"><span>Progres dipulihkan</span></p><p>${S.xp} XP · ${doneCount()} pelajaran selesai.</p></div>`;
        chrome();
      } catch (e) { msg.innerHTML = `<div class="fb no"><p>Kode tidak dikenali. Pastikan kode diawali EP1: dan tersalin utuh.</p></div>`; }
    },
    reset(el) {
      if (!armed) { armed = true; el.className = "btn bad auto"; el.textContent = "Ketuk lagi untuk menghapus"; return; }
      const th = S.theme; S = fresh(); S.theme = th; S.onb = 1; S.resetAt = Date.now(); save(); rerender(); toast("Progres sudah direset.");
    }
  };
};

/* ================= tema (terang / gelap) ================= */
const DARKQ = (() => { try { return matchMedia("(prefers-color-scheme: dark)"); } catch (e) { return null; } })();
function applyTheme() {
  const dark = S.theme === "dark" || (S.theme === "auto" && DARKQ && DARKQ.matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  const m = document.querySelector('meta[name="theme-color"]'); if (m) m.setAttribute("content", dark ? "#141629" : "#eef4ff");
}
try { DARKQ && DARKQ.addEventListener("change", () => { if (S.theme === "auto") applyTheme(); }); } catch (e) {}

/* ================= kata hari ini ================= */
function wordOfDay() {
  const n = nextLesson(), top = n ? n.li : LEVELS.length - 1;
  const pool = VOCAB.filter(v => v.li <= top);
  let h = 7; for (const ch of dkey()) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  const v = pool[h % pool.length];
  const re = new RegExp("\\b" + v.w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + "\\b", "i");
  let ex = null;
  for (const x of LESSONS) { const e = x.examples.find(([en]) => re.test(en)); if (e && (!ex || x.li === v.li)) { ex = e; if (x.li === v.li) break; } }
  return { v, ex };
}
function wotdHTML() {
  const { v, ex } = wordOfDay(), k = isKnown(v.w), L = LEVELS[v.li];
  return `<section class="card wotd" aria-label="Kata hari ini" style="--lv:var(--l${v.li + 1});--ldk:var(--ld${v.li + 1})">
    <div class="wotd-h"><p class="eyebrow">Kata hari ini · ${L.cefr}</p>${k ? `<span class="okpill">${I("check")} Sudah tahu</span>` : ""}</div>
    <div class="wotd-w"><b lang="en">${esc(v.w)}</b>${spk(v.w)}${bmBtn(v.w)}</div>
    <p class="wotd-m">${esc(v.m)}</p>
    ${ex ? `<p class="wotd-ex"><span lang="en">${esc(ex[0])}</span>${spk(ex[0])}<br><span class="muted">${esc(ex[1])}</span></p>` : ""}
    ${k ? `<button class="btn ghost" data-a="flash">${I("layers")} Latih kata lain di flashcard</button>` : `<button class="btn ghost" data-a="wknow" data-w="${esc(v.w)}">${I("check")} Saya sudah tahu kata ini</button>`}
  </section>`;
}

/* ================= kartu hasil & sertifikat ================= */
const SITE = "iiddon.github.io/english-study";
const LVC = ["#c8f0df", "#d6e3ff", "#e3dbff", "#ffe0c2", "#ffd9e2", "#fff0bf"], LVD = ["#21a37b", "#3f6fe0", "#7a5cf0", "#e07a1f", "#e0527a", "#c99300"];
const svgImg = svg => new Promise((ok, no) => { const im = new Image(); im.onload = () => ok(im); im.onerror = no; im.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg); });
function rr(x, X, Y, W, Hh, r) { x.beginPath(); x.moveTo(X + r, Y); x.arcTo(X + W, Y, X + W, Y + Hh, r); x.arcTo(X + W, Y + Hh, X, Y + Hh, r); x.arcTo(X, Y + Hh, X, Y, r); x.arcTo(X, Y, X + W, Y, r); x.closePath(); }
function fitFont(x, t, max, weight, fam, size) { let s = size; x.font = `${weight} ${s}px ${fam}`; while (x.measureText(t).width > max && s > 24) { s -= 2; x.font = `${weight} ${s}px ${fam}`; } return s; }
function wrapLines(x, t, max) { const out = []; let line = ""; t.split(" ").forEach(w => { const tr = line ? line + " " + w : w; if (x.measureText(tr).width > max && line) { out.push(line); line = w; } else line = tr; }); if (line) out.push(line); return out; }
const longDate = d => { try { return new Date(d + "T12:00:00").toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" }); } catch (e) { return d; } };
async function drawCard(spec) {
  try { await Promise.all([document.fonts.load("700 80px Fredoka"), document.fonts.load("800 40px Nunito")]); } catch (e) {}
  const W = 1080, Hh = 1350, c = document.createElement("canvas"); c.width = W; c.height = Hh;
  const x = c.getContext("2d"), nm = (S.name || "").trim(), li = spec.li || 0, FD = "Fredoka, 'Trebuchet MS', sans-serif", FB = "Nunito, 'Segoe UI', sans-serif";
  x.fillStyle = "#eef4ff"; x.fillRect(0, 0, W, Hh);
  x.fillStyle = LVC[li]; x.beginPath(); x.arc(960, 150, 300, 0, 7); x.fill();
  x.fillStyle = "#fff2cc"; x.beginPath(); x.arc(90, 1270, 240, 0, 7); x.fill();
  x.fillStyle = "#dbe4f7"; rr(x, 70, 168, 940, 1040, 60); x.fill();
  x.fillStyle = "#fff"; rr(x, 70, 156, 940, 1040, 60); x.fill();
  x.fillStyle = "#ffc845"; rr(x, 70, 44, 84, 84, 24); x.fill();
  x.drawImage(await svgImg(BUBU(56, "", "", "base", false)), 84, 56, 56, 60);
  x.fillStyle = "#24264a"; x.textBaseline = "middle"; x.font = `700 44px ${FD}`; x.fillText("English Path", 176, 88);
  x.textAlign = "center";
  const mood = spec.kind === "cert" || spec.pct !== 100 ? "happy" : "wow";
  { const bb = bubuBox(210, mood); x.drawImage(await svgImg(bb.svg), W / 2 - 105 + bb.dx, 214 + bb.dy, bb.w, bb.h); }
  const pill = (t, y, bg, fg, size) => { x.font = `800 ${size}px ${FB}`; const w = x.measureText(t).width + size * 1.4; x.fillStyle = bg; rr(x, W / 2 - w / 2, y - size * .9, w, size * 1.8, size * .9); x.fill(); x.fillStyle = fg; x.fillText(t, W / 2, y + 2); };
  if (spec.kind === "cert") {
    x.strokeStyle = LVD[li]; x.lineWidth = 6; x.setLineDash([2, 14]); x.lineCap = "round"; rr(x, 100, 186, 880, 980, 44); x.stroke(); x.setLineDash([]);
    pill("SERTIFIKAT KELULUSAN", 500, LVC[li], "#24264a", 30);
    x.fillStyle = "#55587a"; x.font = `700 36px ${FB}`; x.fillText("Diberikan kepada", W / 2, 590);
    x.fillStyle = "#24264a"; fitFont(x, nm || "Pelajar English Path", 800, 700, FD, 104); x.fillText(nm || "Pelajar English Path", W / 2, 690);
    x.fillStyle = LVD[li]; x.fillRect(W / 2 - 160, 762, 320, 6);
    x.fillStyle = "#24264a"; x.font = `700 40px ${FB}`; x.fillText("telah lulus Tes Level", W / 2, 840);
    x.font = `700 76px ${FD}`; x.fillStyle = LVD[li]; x.fillText(LEVELS[li].cefr + " · " + LEVELS[li].name, W / 2, 925);
    if (spec.pct != null) pill("Skor " + spec.pct + "%", 1025, "#d9f5ea", "#127a55", 38);
    x.fillStyle = "#55587a"; x.font = `700 32px ${FB}`; x.fillText(longDate(spec.d || dkey()), W / 2, 1115);
  } else {
    pill(spec.sub || "English Path", 500, LVC[li], "#24264a", 30);
    x.fillStyle = "#55587a"; x.font = `700 38px ${FB}`; x.fillText((nm || "Aku") + " berhasil menyelesaikan", W / 2, 590);
    x.fillStyle = "#24264a"; x.font = `700 72px ${FD}`;
    const lines = wrapLines(x, spec.title || "", 820).slice(0, 2); lines.forEach((l, k) => x.fillText(l, W / 2, 680 + k * 84));
    const y = 680 + lines.length * 84 + 110;
    x.font = `700 170px ${FD}`; x.fillStyle = LVD[li]; x.fillText(spec.pct + "%", W / 2, y);
    x.fillStyle = "#55587a"; x.font = `700 34px ${FB}`; x.fillText(spec.pct === 100 ? "Sempurna, tanpa salah!" : "jawaban benar", W / 2, y + 110);
  }
  x.fillStyle = "#24264a"; x.font = `700 34px ${FB}`; x.fillText("Belajar bahasa Inggris gratis di", W / 2, 1258);
  x.fillStyle = "#3d3dc4"; x.font = `700 40px ${FD}`; x.fillText(SITE, W / 2, 1306);
  return c;
}
function shareCard(spec) {
  const isCert = spec.kind === "cert", fname = isCert ? "sertifikat-english-path-" + LEVELS[spec.li || 0].cefr + ".png" : "hasil-english-path.png";
  const text = isCert ? "Aku lulus Tes Level " + LEVELS[spec.li || 0].cefr + " di English Path! Belajar gratis di https://" + SITE : "Skor " + spec.pct + "% di \"" + (spec.title || "") + "\" — belajar bahasa Inggris gratis di https://" + SITE;
  const m = document.createElement("div");
  m.className = "modal"; m.setAttribute("role", "dialog"); m.setAttribute("aria-modal", "true"); m.setAttribute("aria-labelledby", "mh");
  m.innerHTML = `<div class="sheet"><div class="sheet-h"><h2 id="mh">${isCert ? "Sertifikat kamu" : "Kartu hasil"}</h2><button class="iconbtn" data-x aria-label="Tutup">${I("x")}</button></div>
    <div class="cardimg"><img id="cimg" alt=""><span class="spin" aria-hidden="true"></span></div>
    <div class="cname"><label for="cname">Nama di ${isCert ? "sertifikat" : "kartu"}</label><input class="namefield" id="cname" type="text" maxlength="24" autocomplete="given-name" value="${esc(S.name)}" placeholder="Nama kamu"></div>
    <div class="pair"><button class="btn lv" data-sh>${I("share")} Bagikan</button><a class="btn ghost" data-dl download="${fname}" href="#">${I("download")} Simpan</a></div>
    <p class="muted" id="cmsg" aria-live="polite">Tombol tidak berfungsi? Tekan lama gambar, lalu pilih Simpan.</p></div>`;
  document.body.appendChild(m); document.body.classList.add("modal-open");
  const prev = document.activeElement, img = m.querySelector("#cimg"), dl = m.querySelector("[data-dl]");
  let blob = null, tmr = null, gen = 0;
  const render = async () => {
    const my = ++gen; m.classList.add("busy");
    try {
      const c = await drawCard(spec); if (my !== gen) return;
      const url = c.toDataURL("image/png"); img.src = url; dl.href = url;
      img.alt = isCert ? "Sertifikat English Path level " + LEVELS[spec.li || 0].cefr + " untuk " + (S.name || "pelajar") : "Kartu hasil: " + spec.pct + "% di " + (spec.title || "");
      blob = await new Promise(r => c.toBlob(r, "image/png"));
    } catch (e) { m.querySelector("#cmsg").textContent = "Gambar gagal dibuat di perangkat ini."; }
    if (my === gen) m.classList.remove("busy");
  };
  const close = () => { clearTimeout(tmr); const pn = document.getElementById("pname"); if (pn) pn.value = S.name; m.remove(); document.body.classList.remove("modal-open"); document.removeEventListener("keydown", onKey, true); try { prev && prev.focus({ preventScroll: true }); } catch (e) {} };
  const onKey = e => { if (e.key === "Escape") { e.stopPropagation(); close(); } };
  document.addEventListener("keydown", onKey, true);
  m.addEventListener("click", async e => {
    if (e.target === m || e.target.closest("[data-x]")) return close();
    if (e.target.closest("[data-dl]")) {
      // Di dalam Claude, unduhan harus lewat kemampuan downloads; di GitHub Pages pakai tautan biasa.
      let dn = null; try { if (window.claude && typeof window.claude.use === "function") dn = await window.claude.use("downloads"); } catch (err) {}
      if (dn && blob) {
        e.preventDefault();
        try { await dn.save({ filename: fname, data: blob }); m.querySelector("#cmsg").textContent = "Gambar disimpan."; }
        catch (err) { if (!err || err.code !== "declined") m.querySelector("#cmsg").textContent = "Tidak bisa menyimpan di sini. Tekan lama gambar, lalu pilih Simpan."; }
      }
      return;
    }
    if (e.target.closest("[data-sh]")) {
      const msg = m.querySelector("#cmsg");
      try {
        const file = blob && new File([blob], fname, { type: "image/png" });
        if (file && navigator.canShare && navigator.canShare({ files: [file] })) await navigator.share({ files: [file], text });
        else if (navigator.share) await navigator.share({ title: "English Path", text, url: "https://" + SITE });
        else { dl.click(); msg.textContent = "Simpan gambarnya, lalu unggah ke media sosial favoritmu."; }
      } catch (err) { if (!err || err.name !== "AbortError") msg.textContent = "Berbagi tidak tersedia di sini. Pakai tombol Simpan atau tekan lama gambar."; }
    }
  });
  m.querySelector("#cname").addEventListener("input", e => { clearTimeout(tmr); tmr = setTimeout(() => { S.name = (e.target.value || "").trim().slice(0, 24); save(); render(); }, 350); });
  try { m.querySelector("[data-x]").focus({ preventScroll: true }); } catch (e) {}
  render();
}
function showCert(li) { const L = LEVELS[li], c = S.cert[L.id]; shareCard({ kind: "cert", li, pct: c ? c.p : null, d: c ? c.d : dkey() }); }

/* ================= percakapan ================= */
let TALKFROM = "talk";
const talkLine = t => String(t).replace(/\{n\}/g, (S.name || "").trim() || "Dewi");
VIEWS.talk = function (n) {
  if (n == null || !TALKS[n]) {
    app.innerHTML = `<div class="narrow stack">
      <div><p class="eyebrow">Percakapan</p><h1 style="margin-top:8px">Latihan ngobrol dalam situasi nyata.</h1><p class="muted" style="margin-top:6px">Pilih balasan yang paling tepat. Partner bicara akan membacakan kalimatnya.</p></div>
      <div class="tools">${TALKS.map((T, n) => { const L = LEVELS[T.li], b = S.talk[T.id]; return `<button class="tool" data-a="go" data-l="${n}" style="--lv:var(--l${L.i + 1});--ldk:var(--ld${L.i + 1})"><span class="tic txt">${L.cefr}</span><span><b>${esc(T.title)}</b><small>${esc(T.place)} · bersama ${esc(T.who)}</small></span><span class="meta">${b != null ? b + "%" : "Baru"}</span></button>`; }).join("")}</div></div>`;
    H = { go(el) { TALKFROM = "talk"; nav("talk", +el.dataset.l); } };
    return;
  }
  const T = TALKS[n], li = T.li, L = LEVELS[li], turns = T.turns, nU = turns.filter(t => t[0] === "u").length;
  document.body.classList.add("sub");
  let k = 0, score = 0, asked = 0, sel = null, opts = [], locked = false;
  const log = [];
  app.innerHTML = `<div class="talkv" style="--lv:var(--l${li + 1});--ldk:var(--ld${li + 1})">
    <div class="lv-top"><button class="iconbtn" data-a="exit" aria-label="Kembali">${I("left")}</button><span class="roundel sm">${L.cefr}</span>
      <div class="lv-tt"><p class="eyebrow">${esc(T.place)}</p><h1>${esc(T.title)}</h1></div><span class="qcount" id="tc">0/${nU}</span></div>
    <div class="chat" id="chat" aria-live="polite"></div>
    <div class="reply" id="reply"></div></div>`;
  const chat = $("#chat"), reply = $("#reply"), initial = T.who.replace(/^(Mr|Ms|Mrs)\. /, "").charAt(0);
  const bubble = m => m.who === "p"
    ? `<div class="msg p"><span class="av" aria-hidden="true">${initial}</span><div class="bub"><span class="who">${esc(T.who)}</span><span lang="en">${esc(m.t)}</span><small>${esc(m.tr)}</small></div>${spk(m.t)}</div>`
    : `<div class="msg u${m.ok ? "" : " fixed"}"><div class="bub"><span lang="en">${esc(m.t)}</span>${m.ok ? "" : "<small>Balasan yang tepat</small>"}</div></div>`;
  const drawChat = () => { chat.innerHTML = log.map(bubble).join("") + (k < turns.length && turns[k][0] === "p" ? '<div class="msg p typing"><span class="av">' + initial + '</span><div class="bub"><i></i><i></i><i></i></div></div>' : ""); stick(); };
  // Obrolan selalu menempel di pesan terbaru, juga saat panel balasan berubah tinggi dan area chat menyusut.
  const stick = () => { const go = () => { chat.scrollTop = chat.scrollHeight; }; go(); requestAnimationFrame(go); setTimeout(go, 120); };
  try { const ro = new ResizeObserver(() => { if (ROUTE.v === "talk") chat.scrollTop = chat.scrollHeight; }); ro.observe(chat); } catch (e) {}
  const reduced = (() => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) { return false; } })();
  function step() {
    if (ROUTE.v !== "talk") return;
    if (k >= turns.length) return done();
    const t = turns[k];
    if (t[0] === "p") {
      drawChat(); reply.innerHTML = "";
      setTimeout(() => { if (ROUTE.v !== "talk") return; log.push({ who: "p", t: talkLine(t[1]), tr: t[2] }); k++; drawChat(); speak(talkLine(t[1])); step(); }, reduced ? 0 : 650);
      return;
    }
    sel = null; locked = false; opts = shuffle(t[1].map((x, n) => ({ x: talkLine(x), ok: n === 0 })));
    reply.innerHTML = `<p class="eyebrow">Pilih balasanmu</p><div class="opts">${opts.map((o, n) => `<button class="opt" data-a="pick" data-k="${n}" lang="en"><span>${esc(o.x)}</span></button>`).join("")}</div><button class="btn lv" data-a="send" id="chk" disabled>${I("chat")} Kirim</button>`;
    stick();
  }
  function done() {
    const pct = Math.round(score / nU * 100), first = S.talk[T.id] == null;
    const bonus = first ? 20 : 5; addXp(bonus);
    S.talk[T.id] = Math.max(S.talk[T.id] || 0, pct); const nb = newBadges(); save(); chrome();
    const [mood, line] = resultMood(pct, pct >= 60);
    reply.innerHTML = `<div class="talkend"><div class="greet">${BUBU(56, "react " + mood, "Bubu", mood)}<div class="say"><b>${score} dari ${nU} tepat</b><span>${line} +${bonus} XP</span></div></div>
      ${nb.map(b => `<div class="newbadge">${I(b.ic)}<div><b>${b.k || "Lencana baru"}: ${b.n}</b><span>${b.d}</span></div></div>`).join("")}
      <div class="pair">${pct >= 60 ? `<button class="btn ghost" data-a="share">${I("share")} Bagikan</button>` : `<button class="btn ghost" data-a="again">Ulangi</button>`}<button class="btn ${pct >= 60 ? "ghost" : "lv"}" data-a="exit">Selesai</button></div>${pct >= 60 ? `<button class="btn lv" data-a="nextstep">${stepLabel2(stepAfter("talk", li, n), "talk")} ${I("right")}</button>` : ""}<button class="btn ghost" data-g="home">${I("map")} Kembali ke beranda</button></div>`;
    if (pct >= 60) { sfx.win(); confetti(); }
  }
  H = {
    exit() { const f = [].concat(TALKFROM); TALKFROM = "talk"; nav(...f); },
    again() { rerender(); },
    nextstep() { TALKFROM = "talk"; goStep(stepAfter("talk", li, n)); },
    share() { shareCard({ kind: "result", li, pct: Math.round(score / nU * 100), title: T.title, sub: "Percakapan " + L.cefr + " · " + L.name }); },
    pick(el) { if (locked) return; sel = +el.dataset.k; $$("#reply .opt").forEach(b => { const on = b === el; b.classList.toggle("sel", on); b.setAttribute("aria-pressed", on); }); $("#chk").disabled = false; },
    send() {
      if (locked || sel == null) return; locked = true;
      const t = turns[k], ok = opts[sel].ok; asked++;
      if (ok) { score++; addXp(5); addCoins(1); S.ccur = (S.ccur || 0) + 1; if (S.ccur > S.combo) S.combo = S.ccur; sfx.ok(); } else { S.ccur = 0; sfx.no(); }
      $("#tc").textContent = asked + "/" + nU;
      $$("#reply .opt").forEach((b, n) => { b.disabled = true; b.classList.remove("sel"); if (opts[n].ok) b.classList.add("right"); else if (n === sel) b.classList.add("wrong"); });
      $("#chk").remove(); save(); chrome();
      const mood = ok ? "happy" : "oops";
      reply.insertAdjacentHTML("beforeend", `<div class="fb ${ok ? "ok" : "no"}"><div class="fb-top">${BUBU(44, "react " + mood, "", mood)}<div class="fb-say"><p class="fb-h"><span>${ok ? pick(PRAISE) : "Kurang pas"}</span>${ok ? '<span class="plus">+5 XP</span>' : ""}</p><p class="bline">${esc(t[2])}</p></div></div><button class="btn ${ok ? "good" : "bad"}" data-a="cont" id="nx">Lanjut</button></div>`);
      try { $("#nx").focus({ preventScroll: true }); } catch (e) {}
      stick();
      H.cont = () => { log.push({ who: "u", t: talkLine(t[1][0]), ok }); k++; step(); };
    }
  };
  step();
};

/* ================= Kataku (kamus pribadi) ================= */
const VMAP = {}; VOCAB.forEach(v => { VMAP[v.w] = v; });
const bmBtn = (w, wide) => `<button class="bm${wide ? " btn ghost" : ""}" data-bm="${esc(w)}" aria-pressed="${!!S.mine[w]}" aria-label="${S.mine[w] ? "Hapus dari" : "Simpan ke"} Kataku: ${esc(w)}">${I("bookmark")}${wide ? `<span>${S.mine[w] ? "Tersimpan" : "Simpan"}</span>` : ""}</button>`;
function toggleMine(w) {
  if (!VMAP[w]) return;
  const on = !S.mine[w];
  if (on) S.mine[w] = dkey(); else delete S.mine[w];
  const nb = newBadges(); save(); buzz(10);
  $$("[data-bm]").forEach(b => {
    if (b.dataset.bm !== w) return;
    b.setAttribute("aria-pressed", on); b.setAttribute("aria-label", (on ? "Hapus dari" : "Simpan ke") + " Kataku: " + w);
    const t = b.querySelector("span"); if (t) t.textContent = on ? "Tersimpan" : "Simpan";
    b.classList.remove("pop"); void b.offsetWidth; b.classList.add("pop");
  });
  toast(on ? `“${w}” disimpan ke Kataku` + (nb.length ? " · Lencana baru!" : "") : `“${w}” dihapus dari Kataku`, on ? null : () => { S.mine[w] = dkey(); save(); if (ROUTE.v === "mine") rerender(); else $$(`[data-bm]`).forEach(b => { if (b.dataset.bm === w) { b.setAttribute("aria-pressed", true); const t = b.querySelector("span"); if (t) t.textContent = "Tersimpan"; } }); });
  if (ROUTE.v === "mine" && H.refresh) H.refresh();
}
function toast(msg, undo) {
  let t = $("#toast"); if (t) t.remove();
  t = document.createElement("div"); t.id = "toast"; t.className = "toast"; t.setAttribute("role", "status");
  t.innerHTML = `<span>${esc(msg)}</span>${undo ? '<button type="button">Batalkan</button>' : ""}`;
  document.body.appendChild(t);
  if (undo) t.querySelector("button").onclick = () => { undo(); t.remove(); };
  setTimeout(() => { if (t.isConnected) t.remove(); }, undo ? 5000 : 2200);
}
VIEWS.mine = function () {
  let q = "";
  app.innerHTML = `<div class="narrow stack">
    <div><button class="back" data-g="practice">${I("left")} Latihan</button><h1>Kataku</h1><p class="muted" style="margin-top:4px">Kamus pribadimu. Simpan kata dengan ikon penanda, lalu latih di sini.</p></div>
    <div class="search"><label class="sr" for="mq">Cari kata</label><input id="mq" type="search" data-i="q" placeholder="Cari atau tambah dari ${VOCAB.length} kata…" autocomplete="off" autocapitalize="off" spellcheck="false"></div>
    <div id="mlist"></div></div>`;
  const list = () => {
    const mine = Object.keys(S.mine).filter(w => VMAP[w]).sort((a, b) => (S.mine[b] || "").localeCompare(S.mine[a] || "") || a.localeCompare(b));
    const nq = q.trim().toLowerCase();
    const rowH = v => `<li class="wrow" style="--lv:var(--l${v.li + 1});--ldk:var(--ld${v.li + 1})"><span class="roundel sm">${LEVELS[v.li].cefr}</span><div class="grow"><b lang="en">${esc(v.w)}</b><span>${esc(v.m)}</span></div>${spk(v.w)}${bmBtn(v.w)}</li>`;
    let h = "";
    if (!nq) {
      h = mine.length ? `<div class="row" style="justify-content:space-between"><h2>${mine.length} kata tersimpan</h2></div>
        <button class="btn lv" data-a="train">${I("layers")} Latih ${mine.length} kata di flashcard</button>
        <ul class="wlist">${mine.map(w => rowH(VMAP[w])).join("")}</ul>`
        : `<div class="card stack empty">${BUBU(64, "", "", "base")}<h2>Belum ada kata</h2><p class="muted">Ketuk ikon penanda ${I("bookmark")} di Kosakata pelajaran, Kata hari ini, atau flashcard. Bisa juga cari kata di kotak atas.</p></div>`;
    } else {
      const hits = VOCAB.filter(v => v.w.toLowerCase().includes(nq) || v.m.toLowerCase().includes(nq)).sort((a, b) => (!!S.mine[b.w] - !!S.mine[a.w]) || a.li - b.li).slice(0, 40);
      h = hits.length ? `<p class="muted">${hits.length} hasil${hits.length === 40 ? " (40 teratas)" : ""}. Ketuk penanda untuk menyimpan.</p><ul class="wlist">${hits.map(rowH).join("")}</ul>` : `<div class="card"><p class="muted">Tidak ada kata yang cocok dengan “${esc(q)}”.</p></div>`;
    }
    $("#mlist").innerHTML = h;
  };
  H = { q(el) { q = el.value || ""; list(); }, refresh: list, train() { nav("flash", "mine"); } };
  list();
};

/* ================= simulasi tes ================= */
const EXAM_MIN = 25;
function buildExam() {
  const pickN = (arr, n) => shuffle(arr).slice(0, n);
  const G = [2, 3, 3, 3, 3, 2], items = [];
  LEVELS.forEach((L, li) => pickN(L.lessons.flatMap(x => x.qs.filter(q => q.t !== "o")), G[li]).forEach(q => items.push(Object.assign({}, q, { sec: "Tata bahasa" }))));
  const rl = shuffle([1, 2, 3, 4]).slice(0, 2).sort();
  rl.forEach(li => { const L = LEVELS[li]; if (!L.reads) return; const RD = pick(L.reads); const ctx = `<details class="ctx" open><summary>${esc(RD.title)}</summary>${RD.text.map(p => `<p>${p}</p>`).join("")}</details>`; RD.qs.forEach(q => items.push(Object.assign({}, q, { sec: "Membaca", ctx }))); });
  if (canSpeak()) [0, 1, 2, 2, 3, 4, 5].forEach(li => { const ex = pick(LEVELS[li].lessons.flatMap(x => x.examples).filter(e => e[0].split(" ").length <= 9)); items.push({ t: "l", s: ex[0], tr: ex[1], li, sec: "Mendengar" }); });
  return items;
}
const CEFR_OF = sc => LEVELS[Math.max(0, Math.min(5, sc))];
VIEWS.exam = function () {
  const hist = S.exams.slice().reverse(), listen = canSpeak();
  app.innerHTML = `<div class="narrow stack">
    <div><button class="back" data-g="practice">${I("left")} Latihan</button><h1>Simulasi tes</h1><p class="muted" style="margin-top:4px">Seperti ujian sungguhan: berwaktu, tanpa tahu benar/salah sampai selesai. Hasilnya perkiraan level CEFR dan bagian yang perlu diasah.</p></div>
    <div class="card stack">
      <div class="exsec"><span class="tic" style="--ldk:var(--ld2)">${I("check")}</span><div><b>Tata bahasa</b><small>16 soal dari A1 sampai C2</small></div></div>
      <div class="exsec"><span class="tic" style="--ldk:var(--ld4)">${I("book")}</span><div><b>Membaca</b><small>2 bacaan, teks tetap terlihat saat menjawab</small></div></div>
      <div class="exsec${listen ? "" : " off"}"><span class="tic" style="--ldk:var(--ld3)">${I("headphones")}</span><div><b>Mendengar</b><small>${listen ? "7 kalimat untuk disusun, bisa diputar ulang" : "Tidak tersedia: perangkat ini tidak bisa memutar suara"}</small></div></div>
      <div class="exsec"><span class="tic" style="--ldk:var(--coral-d)">${I("timer")}</span><div><b>${EXAM_MIN} menit</b><small>Soal yang belum dijawab saat waktu habis dihitung salah</small></div></div>
    </div>
    <button class="btn lv" data-a="start">${I("timer")} Mulai tes</button>
    <p class="muted">Ini latihan, bukan sertifikasi resmi. Skor TOEIC/IELTS asli bisa berbeda.</p>
    ${hist.length ? `<h2 style="margin-top:8px">Riwayat</h2><ul class="exhist">${hist.map(e => `<li><span class="roundel sm" style="--lv:var(--l${e.li + 1})">${e.lv}</span><span class="grow"><b>Skor ${e.sc}</b><small>${longDate(e.d)} · ${Math.round(e.tm / 60)} menit</small></span></li>`).join("")}</ul>` : ""}</div>`;
  H = { start: startExam };
};
function startExam() {
  const items = buildExam(), t0 = Date.now(), o = { title: "Simulasi tes", silent: true, limit: EXAM_MIN * 60, back: () => nav("exam") };
  o.onEnd = res => examResult(items, res, Math.round((Date.now() - t0) / 1000), o.timeUp);
  runQuiz(items, o);
}
function examResult(items, res, tm, timeUp) {
  const W = items.map(q => q.li + 1), tot = W.reduce((a, b) => a + b, 0);
  const sc = Math.round(items.reduce((a, q, k) => a + (res[k] ? q.li + 1 : 0), 0) / tot * 100);
  const byLv = LEVELS.map((_, li) => { const ks = items.map((q, k) => k).filter(k => items[k].li === li); return ks.length ? ks.filter(k => res[k]).length / ks.length : null; });
  let est = -1; for (let li = 0; li < 6; li++) { if (byLv[li] == null) continue; if (byLv[li] >= .6) est = li; else break; }
  est = Math.max(0, est);
  const secs = ["Tata bahasa", "Membaca", "Mendengar"].map(n => { const ks = items.map((q, k) => k).filter(k => items[k].sec === n); return { n, ok: ks.filter(k => res[k]).length, all: ks.length }; }).filter(x => x.all);
  const weak = secs.slice().sort((a, b) => a.ok / a.all - b.ok / b.all)[0];
  const right = res.filter(Boolean).length, wrongKeys = items.filter((q, k) => !res[k] && q.key).map(q => q.key);
  wrongKeys.forEach(k => srsHit(S.wrong, k, false));
  items.forEach((q, k) => { const cat = q.sec === "Mendengar" ? "l" : q.sec === "Membaca" ? "r" : "g", v = S.sk[cat] || [0, 0]; S.sk[cat] = [v[0] + 1, v[1] + (res[k] ? 1 : 0)]; });
  S.ans += items.length; S.cor += right;
  const L = CEFR_OF(est);
  S.exams.push({ at: Date.now(), d: dkey(), sc, lv: L.cefr, li: est, tm }); S.exams = S.exams.slice(-12);
  addXp(20 + right * 2); addCoins(right); const nb = newBadges(); save();
  const prev = S.exams.length > 1 ? S.exams[S.exams.length - 2] : null;
  const [mood, line] = resultMood(sc, sc >= 60);
  const tip = { "Tata bahasa": ["Ulangi pelajaran level " + L.cefr, () => nav("lesson", est, 0)], "Membaca": ["Latihan bacaan " + L.cefr, () => nav("read", est)], "Mendengar": ["Latihan dengar & susun", globalListen] }[weak.n];
  app.innerHTML = `<div class="narrow stack" style="--lv:var(--l${est + 1});--ldk:var(--ld${est + 1})">
    <p class="eyebrow">Hasil simulasi tes${timeUp ? " · waktu habis" : ""}</p>
    <div class="res-top">${ring(sc / 100, sc, "skor latihan", "big")}<div><p class="eyebrow">Perkiraan level</p><h1 style="margin-top:4px">${L.cefr} · ${L.name}</h1><p class="muted">${right} dari ${items.length} benar · ${Math.floor(tm / 60)} mnt ${tm % 60} dtk${prev ? ` · ${sc >= prev.sc ? "naik" : "turun"} ${Math.abs(sc - prev.sc)} dari tes sebelumnya` : ""}</p></div></div>
    <div class="greet res-bubu">${BUBU(56, "react " + mood, "Bubu", mood)}<div class="say"><span>${line}</span></div></div>
    <div class="card stack"><h2>Per bagian</h2>${secs.map(x => `<div class="skrow"><span class="skn">${x.n}</span><span class="skbar"><i style="width:${x.ok / x.all * 100}%"></i></span><span class="skv">${x.ok}/${x.all}</span></div>`).join("")}</div>
    <div class="card stack"><h2>Per level</h2>${LEVELS.map((l, li) => byLv[li] == null ? "" : `<div class="skrow" style="--ldk:var(--ld${li + 1})"><span class="skn">${l.cefr}</span><span class="skbar"><i style="width:${byLv[li] * 100}%"></i></span><span class="skv">${Math.round(byLv[li] * 100)}%</span></div>`).join("")}<p class="muted">Level dianggap dikuasai jika 60% soalnya benar, berurutan dari A1.</p></div>
    ${nb.map(b => `<div class="newbadge">${I(b.ic)}<div><b>${b.k || "Lencana baru"}: ${b.n}</b><span>${b.d}</span></div></div>`).join("")}
    <div class="card stack"><h2>Saran berikutnya</h2><p class="muted">Bagian terlemahmu: <b>${weak.n}</b>.${wrongKeys.length ? " " + wrongKeys.length + " soal yang salah sudah masuk ke Ulangan hari ini." : ""}</p><button class="btn lv" data-a="tip">${tip[0]} ${I("right")}</button></div>
    <div class="pair"><button class="btn ghost" data-a="again">Tes lagi</button><button class="btn ghost" data-a="back">Selesai</button></div>
    <button class="btn ghost" data-g="home">${I("map")} Kembali ke beranda</button></div>`;
  H = { tip: tip[1], again: startExam, back() { nav("exam"); } };
  if (sc >= 60) { sfx.win(); confetti(); }
  chrome(); toTop();
}

/* ================= grafik progres ================= */
function xpChart(n) {
  const days = []; for (let k = n - 1; k >= 0; k--) { const d = new Date(); d.setDate(d.getDate() - k); days.push(d); }
  const v = days.map(d => S.days[dkey(d)] || 0), max = Math.max(S.goal * 1.25, ...v, 10);
  const Wd = 340, Hh = 150, pad = 22, bw = (Wd - 8) / n, gy = Hh - pad - (S.goal / max) * (Hh - pad - 8);
  const total = v.reduce((a, b) => a + b, 0), active = v.filter(Boolean).length, hit = v.filter(x => x >= S.goal).length;
  const bars = v.map((x, k) => { const h = Math.max(x ? 4 : 2, x / max * (Hh - pad - 8)), X = 4 + k * bw + bw * .15, ww = bw * .7;
    const lab = n <= 7 ? DAYN[days[k].getDay()] : (k % 5 === 4 || k === n - 1 ? days[k].getDate() : "");
    return `<rect class="b${x >= S.goal ? " hit" : x ? "" : " zero"}" x="${X.toFixed(1)}" y="${(Hh - pad - h).toFixed(1)}" width="${ww.toFixed(1)}" height="${h.toFixed(1)}" rx="${Math.min(6, ww / 2).toFixed(1)}"><title>${days[k].getDate()}/${days[k].getMonth() + 1}: ${x} XP</title></rect>${lab !== "" ? `<text x="${(X + ww / 2).toFixed(1)}" y="${Hh - 6}">${lab}</text>` : ""}${n <= 7 && x ? `<text class="val" x="${(X + ww / 2).toFixed(1)}" y="${(Hh - pad - h - 5).toFixed(1)}">${x}</text>` : ""}`; }).join("");
  return `<svg class="xpchart" viewBox="0 0 ${Wd} ${Hh}" role="img" aria-label="XP ${n} hari terakhir: total ${total} XP, aktif ${active} hari, target tercapai ${hit} hari"><line class="goal" x1="0" x2="${Wd}" y1="${gy.toFixed(1)}" y2="${gy.toFixed(1)}"/>${bars}</svg>
    <dl class="stats3"><div><dt>Total XP</dt><dd>${total}</dd></div><div><dt>Hari aktif</dt><dd>${active}/${n}</dd></div><div><dt>Target tercapai</dt><dd>${hit}×</dd></div></dl>`;
}
function skills() {
  const acc = k => { const v = S.sk[k]; return v && v[0] >= 3 ? Math.round(v[1] / v[0] * 100) : null; };
  const avg = o => { const a = Object.values(o).map(Number).filter(x => !isNaN(x)); return a.length ? Math.round(a.reduce((x, y) => x + y, 0) / a.length) : null; };
  const nSpk = LEVELS.reduce((n, L) => n + L.speak.length, 0), kn = knownCount();
  return [
    ["Tata bahasa", acc("g") ?? avg(S.scores), "Ketepatan jawaban soal pelajaran", "zap"],
    ["Kosakata", kn ? Math.round(kn / VOCAB.length * 100) : null, kn + " dari " + VOCAB.length + " kata hafal", "layers"],
    ["Mendengar", acc("l"), "Ketepatan latihan dengar & susun", "headphones"],
    ["Membaca", avg(S.read) ?? acc("r"), "Rata-rata skor bacaan", "book"],
    ["Berbicara", spokeTotal() ? Math.round(spokeTotal() / nSpk * 100) : null, spokeTotal() + " dari " + nSpk + " kalimat lancar", "mic"],
    ["Percakapan", avg(S.talk), TALKS.filter(T => S.talk[T.id] != null).length + " dari " + TALKS.length + " percakapan", "chat"]
  ];
}
function progressHTML(n) {
  const sk = skills(), tried = sk.filter(x => x[1] != null);
  const best = tried.length ? tried.slice().sort((a, b) => b[1] - a[1])[0] : null, low = tried.length > 1 ? tried.slice().sort((a, b) => a[1] - b[1])[0] : null;
  return `<section class="card stack prog-card" aria-label="Progres">
    <div class="row" style="justify-content:space-between"><h2>${I("chart")} XP harian</h2><div class="seg sm" role="group" aria-label="Rentang">${[7, 30].map(d => `<button aria-pressed="${n === d}" data-a="range" data-v="${d}">${d} hari</button>`).join("")}</div></div>
    <div id="xpc">${xpChart(n)}</div><p class="muted legend"><i class="lg hit"></i> Target ${S.goal.toLocaleString("id-ID")} XP tercapai <i class="lg"></i> Belajar <i class="lg line"></i> Garis target</p></section>
  <section class="card stack" aria-label="Kemampuan">
    <h2>Kemampuan</h2>
    ${sk.map(([n2, v, d, ic]) => `<div class="skrow2"><span class="skic">${I(ic)}</span><div class="grow"><div class="skh"><b>${n2}</b><span>${v == null ? "Belum dicoba" : v + "%"}</span></div><span class="skbar${v == null ? " none" : ""}"><i style="width:${v || 0}%"></i></span><small>${d}</small></div></div>`).join("")}
    ${best ? `<p class="muted">Terkuat: <b>${best[0]}</b>${low && low !== best ? ` · Perlu diasah: <b>${low[0]}</b>` : ""}</p>` : ""}
    ${S.exams.length ? `<p class="muted">Simulasi tes terakhir: <b>${S.exams[S.exams.length - 1].lv}</b>, skor ${S.exams[S.exams.length - 1].sc}.</p>` : `<button class="btn ghost" data-a="toexam">${I("timer")} Ukur levelmu dengan simulasi tes</button>`}
  </section>`;
}

/* ================= Lemari Bubu (koin & kostum) ================= */
const wardCount = () => { let have = 0, all = 0; Object.keys(COSTUME).forEach(c => COSTUME[c].forEach(it => { all++; if (ownsItem(c, it)) have++; })); return [have, all]; };
// Barang terdekat yang bisa dibeli: dipakai di kartu beranda.
function nextGoal() {
  let best = null; Object.keys(COSTUME).forEach(c => COSTUME[c].forEach(it => { if (it.p && !ownsItem(c, it) && (!best || it.p < best.it.p)) best = { c, it }; }));
  return best;
}
function wardTeaser() {
  const g = nextGoal(), [have, all] = wardCount();
  const msg = !g ? "Semua barang sudah kamu punya. Keren!" : S.coins >= g.it.p ? `Koinmu cukup untuk ${esc(g.it.n)}. Coba sekarang!` : `Kumpulkan ${g.it.p - S.coins} koin lagi untuk ${esc(g.it.n)}.`;
  const look = g ? Object.assign({}, S.look, { [g.c]: g.it.id }) : S.look;
  return `<section class="card wteaser" aria-label="Lemari Bubu">
    <div class="wt-h"><p class="eyebrow">Lemari Bubu · ${have}/${all}</p><span class="chip coin">${COIN}${S.coins}</span></div>
    <div class="wt-b"><span class="wt-bubu">${BUBU(84, "", "", "happy", look)}</span><div><b>${g ? esc(g.it.n) : "Koleksi lengkap"}</b><p class="muted">${msg}</p></div></div>
    <button class="btn ghost" data-g="wardrobe">${I("star")} Buka Lemari Bubu</button>
  </section>`;
}
VIEWS.wardrobe = function () {
  document.body.classList.add("wardpage");
  let tab = "hat", sel = S.look.hat, confirm = false;
  app.innerHTML = `<div class="wardv">
    <div class="w-top"><div><p class="eyebrow" id="wcol"></p><h1>Lemari Bubu</h1></div><span class="chip coin" id="wcoin"></span></div>
    <div class="wbody">
      <section class="wstage" aria-label="Pratinjau Bubu"><div class="wbig" id="wbig"></div><div class="wtxt"><p class="eyebrow" id="wlab"></p><p class="wname" id="wname"></p><p class="muted" id="whint"></p></div></section>
      <div class="wpick">
        <div class="seg wtabs" role="tablist" aria-label="Kategori">${Object.keys(CATN).map(c => `<button role="tab" data-a="tab" data-c="${c}">${CATN[c]}</button>`).join("")}</div>
        <div class="wgrid" id="wgrid"></div>
        <p class="muted wnote">Ketuk untuk mencoba. Bertanda <b>Khusus</b> tidak dijual: terbuka lewat prestasi.</p>
      </div>
      <div class="wfoot"><button class="btn" id="wact" data-a="act"></button></div>
    </div>
    <div id="wsheet"></div>
  </div>`;
  const item = (c, id) => cItem(c, id);
  function draw(keepScroll) {
    const g = $("#wgrid"), y = g.scrollTop, cur = item(tab, sel), owned = ownsItem(tab, cur), worn = S.look[tab] === sel;
    const look = Object.assign({}, S.look, { [tab]: sel });
    const [have, all] = wardCount();
    $("#wcol").textContent = "Koleksi " + have + " dari " + all;
    $("#wcoin").innerHTML = COIN + S.coins; $("#wcoin").setAttribute("aria-label", S.coins + " koin");
    const big = matchMedia("(min-width:900px) and (orientation:landscape)").matches ? 170 : innerHeight < 700 ? 92 : 112;
    $("#wbig").innerHTML = BUBU(big, "bob", "Bubu memakai " + cur.n, "happy", look);
    $("#wlab").textContent = worn ? "Bubu kamu" : cur.p === null ? "Barang khusus" : "Sedang mencoba";
    $("#wlab").classList.toggle("sp", !worn && cur.p === null);
    $("#wname").textContent = cur.n;
    $("#whint").textContent = worn ? "Sedang kamu pakai. Pilih barang lain untuk mencoba." : owned ? (cur.p === null ? "Barang khusus milikmu. Ketuk Pakai." : "Sudah kamu punya. Ketuk Pakai.") : cur.p === null ? "Tidak dijual. Terbuka saat: " + cur.u[1] + "." : S.coins >= cur.p ? "Harga " + cur.p + " koin." : "Kurang " + (cur.p - S.coins) + " koin. Jawab soal dengan benar untuk menambah koin.";
    $$(".wtabs button").forEach(b => { const on = b.dataset.c === tab; b.setAttribute("aria-selected", on); b.setAttribute("aria-pressed", on); });
    g.innerHTML = COSTUME[tab].map(it => {
      const own = ownsItem(tab, it), on = S.look[tab] === it.id, sp = it.p === null, s2 = it.id === sel;
      const chip = on ? "Dipakai" : own ? (sp ? "Khusus ✓" : "Punya") : sp ? "Khusus" : it.p + " koin";
      const cls = on ? "on" : own ? "own" : sp ? "sp" : "buy";
      return `<button class="witem${s2 ? " sel" : ""}${sp ? " special" : ""}${!own && sp ? " locked" : ""}" data-a="pick" data-id="${it.id}" aria-pressed="${s2}" aria-label="${esc(it.n)}, ${on ? "sedang dipakai" : own ? "sudah dimiliki" : sp ? "barang khusus: " + esc(it.u[1]) : it.p + " koin"}"><span class="wthumb">${BUBU(56, "", "", "base", Object.assign({}, S.look, { [tab]: it.id }))}</span><span class="wn">${esc(it.n)}</span><span class="wchip ${cls}">${sp && !own ? I("lock") : ""}${chip}</span></button>`;
    }).join("");
    if (keepScroll) g.scrollTop = y;
    const act = $("#wact");
    let label = "Sedang dipakai", off = true, kind = "";
    if (!worn) {
      if (owned) { label = "Pakai " + cur.n; off = false; kind = "lv"; }
      else if (cur.p === null) label = "Terkunci · barang khusus";
      else if (S.coins >= cur.p) { label = "Beli · " + cur.p + " koin"; off = false; kind = "sun"; }
      else label = "Butuh " + (cur.p - S.coins) + " koin lagi";
    }
    act.textContent = label; act.disabled = off; act.className = "btn " + (off ? "" : kind);
    $("#wsheet").innerHTML = confirm ? `<div class="wsheet-bg"><div class="wsheet" role="dialog" aria-modal="true" aria-labelledby="wsh">
      <div class="wsh-b"><span>${BUBU(76, "", "", "happy", look)}</span><div><p class="wname" id="wsh">Beli ${esc(cur.n)}?</p><p class="muted">${cur.p} koin akan dipakai. Sisa koinmu jadi ${S.coins - cur.p}.</p></div></div>
      <div class="pair"><button class="btn ghost" data-a="no">Batal</button><button class="btn lv" data-a="yes">Ya, beli</button></div></div></div>` : "";
    if (confirm) try { $('#wsheet [data-a="yes"]').focus({ preventScroll: true }); } catch (e) {}
  }
  H = {
    tab(el) { tab = el.dataset.c; sel = S.look[tab]; draw(false); $("#wgrid").scrollTop = 0; },
    pick(el) { sel = el.dataset.id; buzz(8); draw(true); },
    act() {
      const cur = item(tab, sel);
      if (S.look[tab] === sel) return;
      if (ownsItem(tab, cur)) { S.look[tab] = sel; save(); chrome(); sfx.ok(); toast(cur.n + " dipakai!"); draw(true); return; }
      if (cur.p !== null && S.coins >= cur.p) { confirm = true; draw(true); }
    },
    no() { confirm = false; draw(true); try { $("#wact").focus({ preventScroll: true }); } catch (e) {} },
    yes() {
      const cur = item(tab, sel); if (cur.p === null || S.coins < cur.p) return;
      S.coins -= cur.p; S.owned[tab + ":" + sel] = dkey(); S.look[tab] = sel; confirm = false;
      save(); chrome(); sfx.win(); confetti(); buzz([10, 40, 10]); toast(cur.n + " dibeli dan dipakai!"); draw(true);
    }
  };
  // Tinggi pas di antara bilah atas dan menu bawah, supaya hanya daftar barang yang digulir.
  const fit = () => { const v = $(".wardv"); if (!v || ROUTE.v !== "wardrobe") return window.removeEventListener("resize", fit); const nv = $("#nav").getBoundingClientRect(); v.style.height = Math.max(380, nv.top - v.getBoundingClientRect().top - 12) + "px"; };
  window.addEventListener("resize", fit); fit();
  draw(false);
};

/* ================= koleksi lencana ================= */
/* ================= praktik keterampilan ================= */
VIEWS.skill = function (li, b = 0) {
  const L = LEVELS[li];
  if (!L) return nav("home");
  b = Math.max(0, Math.min(2, +b || 0));
  const c = skillCounts(li), t = skillTotals(li), d = c.reduce((x, y) => x + y, 0), tt = t.reduce((x, y) => x + y, 0);
  const row = (done, ic, title, sub, a, k, isNew) => `<li><button class="lrow${done ? " done" : ""}" data-a="${a}" data-k="${k}"><span class="n">${I(done ? "check" : ic)}</span><span class="grow"><b>${esc(title)}${isNew && !done ? ' <span class="newtag">Baru</span>' : ""}</b><small>${sub}</small></span>${I("right")}</button></li>`;
  const list = b === 0 ? L.reads.map(r => row(S.read[r.sid] != null, "book", r.title, r.qs.length + " soal pemahaman" + (S.read[r.sid] != null ? " · terbaik " + S.read[r.sid] + "%" : ""), "rd", r.k, r.k >= 3))
    : b === 1 ? L.topics.map(T => row(topicDone(L, T.k), "mic", T.title, topicN(L, T.k) + " dari " + T.s.length + " kalimat lancar", "sp", T.k, true))
    : levelTalks(li).map(({ T, n }, j) => row(S.talk[T.id] != null, "chat", T.title, "Ngobrol bersama " + esc(T.who) + (S.talk[T.id] != null ? " · terbaik " + S.talk[T.id] + "%" : ""), "tk", n, j >= 2));
  app.innerHTML = `<div class="skpage stack" style="--lv:var(--l${li + 1});--ldk:var(--ld${li + 1})">
    <div><button class="back" data-g="home">${I("left")} Rute</button>
    <div class="lesson-h"><span class="roundel">${L.cefr}</span><div><p class="eyebrow">${L.name} · ${d} dari ${tt} topik selesai</p><h1>Praktik ${L.cefr}</h1></div></div>
    <span class="pbar skbar"><i style="width:${d / tt * 100}%"></i></span></div>
    <div class="skwrap"><div class="sktabs" role="tablist" aria-label="Babak">${SKB.map(([n, ic], k) => `<button role="tab" aria-selected="${k === b}" data-a="tab" data-b="${k}" class="${c[k] >= t[k] ? "full" : ""}"><span class="skic">${I(c[k] >= t[k] ? "check" : ic)}</span><span><b>Babak ${k + 1}</b><small>${n} ${c[k]}/${t[k]}</small></span></button>`).join("")}</div>
    <section class="card sklist" role="tabpanel" aria-label="${SKB[b][0]}"><ol class="lrows">${list.join("")}</ol></section></div>
    <p class="muted">${b === 0 ? "Baca teksnya, lalu jawab 5 soal pemahaman." : b === 1 ? "Topik selesai kalau keenam kalimatnya diucapkan dengan lancar." : "Pilih balasan yang paling tepat dalam obrolan."} Babak bisa dikerjakan dalam urutan apa saja.</p></div>`;
  H = {
    tab(el) { nav("skill", li, +el.dataset.b); },
    rd(el) { nav("read", li, +el.dataset.k); },
    sp(el) { nav("speak", li, +el.dataset.k); },
    tk(el) { TALKFROM = ["skill", li, 2]; nav("talk", +el.dataset.k); }
  };
};

VIEWS.badges = function () {
  let show = "all", tier = 0;
  app.innerHTML = `<div class="narrow stack">
    <div><button class="back" data-g="profile">${I("left")} Profil</button><h1>Koleksi lencana</h1><p class="muted" id="bcount" style="margin-top:4px"></p></div>
    <div class="seg" role="group" aria-label="Tampilkan">${[["all", "Semua"], ["got", "Didapat"], ["todo", "Belum"]].map(([v, t]) => `<button data-a="show" data-v="${v}">${t}</button>`).join("")}</div>
    <div class="seg scroll tiers" role="group" aria-label="Tingkat">${["Semua tingkat", ...TIER.slice(1)].map((t, k) => `<button data-a="tier" data-v="${k}">${t}</button>`).join("")}</div>
    <div id="blist"></div></div>`;
  const draw = () => {
    const got = BADGES.filter(b => S.badges[b.id]).length;
    $("#bcount").textContent = got + " dari " + BADGES.length + " lencana didapat";
    $$('[data-a="show"]').forEach(b => b.setAttribute("aria-pressed", b.dataset.v === show));
    $$('[data-a="tier"]').forEach(b => b.setAttribute("aria-pressed", +b.dataset.v === tier));
    const ok = b => (show === "all" || (show === "got") === !!S.badges[b.id]) && (!tier || (b.r || 1) === tier);
    const html = BCATS.map(([c, n]) => {
      const list = BADGES.filter(b => bcat(b) === c && ok(b)); if (!list.length) return "";
      const all = BADGES.filter(b => bcat(b) === c), g = all.filter(b => S.badges[b.id]).length;
      return `<section class="bgrp"><div class="bgrp-h"><h2>${n}</h2><span class="muted">${g}/${all.length}</span></div><div class="bgrid">${list.map(b => {
        const on = !!S.badges[b.id], pr = badgeProg(b);
        return `<button class="btile${on ? " on" : ""}" data-a="badge" data-id="${b.id}" aria-label="${esc(b.n)}, ${TIER[b.r || 1]}, ${on ? "didapat" : "belum, progres " + Math.round(pr * 100) + "%"}">${badgeIcon(b)}<span class="bt-n">${esc(b.n)}</span>${on ? "" : `<span class="bprog"><i style="width:${pr * 100}%"></i></span>`}</button>`; }).join("")}</div></section>`;
    }).join("");
    $("#blist").innerHTML = html || `<div class="card"><p class="muted">Tidak ada lencana untuk filter ini.</p></div>`;
  };
  H = { show(el) { show = el.dataset.v; draw(); }, tier(el) { tier = +el.dataset.v; draw(); }, badge(el) { badgeSheet(el.dataset.id); } };
  draw();
};

/* ================= install (PWA) ================= */
let DEFER = null;
window.addEventListener("beforeinstallprompt", e => { e.preventDefault(); DEFER = e; if (ROUTE.v === "profile" && !document.body.classList.contains("focus")) rerender(); });
function installHint() {
  let standalone = false; try { standalone = matchMedia("(display-mode: standalone)").matches || navigator.standalone === true; } catch (e) {}
  if (standalone) return "Sudah terpasang di perangkat ini.";
  if (DEFER) return "Pasang English Path di layar utama agar bisa dibuka seperti aplikasi, juga tanpa internet.";
  if (/iphone|ipad|ipod/i.test(navigator.userAgent)) return "Di iPhone: buka di Safari, ketuk Bagikan, lalu pilih Tambahkan ke Layar Utama.";
  return "Buka iiddon.github.io/english-study di Chrome, lalu pilih menu ⋮ → Instal aplikasi.";
}

/* ================= boot ================= */
function boot(d) {
  loadLocal(); applyTheme();
  if (!S.onb && (S.xp > 0 || doneCount() > 0)) S.onb = 1;
  newBadges(); saveLocal();
  const r = d && d.route;
  const fromHash = parseHash(location.hash);
  try {
    if (!S.onb) nav("welcome", fromHash && fromHash.v === "welcome" ? fromHash.a[0] : 0);
    else if (r && VIEWS[r.v]) nav(r.v, ...(r.a || []));
    else if (fromHash) nav(fromHash.v, ...fromHash.a);
    else nav("home");
  } catch (e) { nav("home"); }
  try { if ("serviceWorker" in navigator && location.protocol === "https:" && window.top === window.self) navigator.serviceWorker.register("sw.js").catch(() => {}); } catch (e) {}
  initTts(); initSync();
}
try { if (hasNative) window.speechSynthesis.onvoiceschanged = () => { voice = null; }; } catch (e) {}
{
  const hot = window.claude && window.claude.hot;
  try { if (hot && hot.snapshot) hot.snapshot(() => ({ route: ROUTE })); } catch (e) {}
  if (hot && hot.ready) hot.ready(boot); else boot((hot && hot.data) || {});
}
