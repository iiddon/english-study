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
  box: '<rect x="3" y="9" width="18" height="12" rx="2"/><path d="M3 13h18"/><path d="M12 11v4"/><path d="M5 9a7 5 0 0 1 14 0"/>'
};
const I = n => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n]}</svg>`;
const BUBU = (size, cls = "", label = "") => `<svg class="bubu ${cls}" width="${size}" height="${Math.round(size * 92 / 86)}" viewBox="0 0 86 92" ${label ? 'role="img" aria-label="' + label + '"' : 'aria-hidden="true"'}><ellipse cx="43" cy="89" rx="24" ry="3" fill="rgba(36,38,74,.12)"/><path d="M10 14a10 10 0 0 1 10-10h46a10 10 0 0 1 10 10v40a10 10 0 0 1-10 10H38l-14 14 2-14h-6a10 10 0 0 1-10-10z" fill="#5b5bf0"/><circle cx="32" cy="32" r="7" fill="#fff"/><circle cx="54" cy="32" r="7" fill="#fff"/><circle cx="34" cy="33" r="3.4" fill="#24264a"/><circle cx="56" cy="33" r="3.4" fill="#24264a"/><circle cx="24" cy="44" r="4" fill="#ff9bb3" opacity=".8"/><circle cx="62" cy="44" r="4" fill="#ff9bb3" opacity=".8"/><path d="M33 46q10 8 20 0" fill="none" stroke="#fff" stroke-width="3.4" stroke-linecap="round"/></svg>`;
const LOGO = (size, label) => `<span style="display:grid;place-items:center;width:${size}px;height:${size}px;border-radius:26%;background:#ffc845;box-shadow:0 4px 0 #d9a21f;flex:none" ${label ? 'role="img" aria-label="' + label + '"' : ""}>${BUBU(Math.round(size * .62))}</span>`;
const REPO = "https://github.com/iiddon/english-study";

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
    const extra = (EXTRA[x.id] || "").trim().split("\n").map(s => s.trim()).filter(Boolean).map(parseLine);
    x.qs = x.quiz.map(q => ({ t: "m", q: q.q, o: q.o, e: q.e })).concat(extra);
    x.qs.forEach((q, n) => { q.key = x.id + ":" + n; q.li = li; QMAP[q.key] = q; });
    LESSONS.push(x);
  });
});
{ const seen = new Set(); LESSONS.forEach(x => x.vocab.forEach(([w, m]) => { if (!seen.has(w)) { seen.add(w); VOCAB.push({ w, m, li: x.li }); } })); }
LEVELS.forEach(L => {
  const R = READING[L.id];
  if (R) {
    L.read = { title: R.title, text: R.text, qs: R.qs.trim().split("\n").map(x => x.trim()).filter(Boolean).map(parseLine) };
    L.read.qs.forEach((q, n) => { q.key = "r_" + L.id + ":" + n; q.li = L.i; QMAP[q.key] = q; });
  }
  L.speak = SPEAK[L.id] || [];
});
const NQ = LESSONS.reduce((n, x) => n + x.qs.length, 0) + LEVELS.reduce((n, L) => n + (L.read ? L.read.qs.length : 0), 0);
const RANKS = [[0, "Penumpang baru"], [200, "Komuter"], [600, "Penjelajah"], [1500, "Navigator"], [3000, "Kondektur"], [5000, "Masinis"]];
const KIND = { m: "Pilihan ganda", t: "Isian", f: "Benar/salah", o: "Susun kalimat" };

/* ================= state ================= */
const KEY = "englishpath_v1";
const fresh = () => ({ done: {}, scores: {}, xp: 0, streak: 0, best: 0, lastDay: "", days: {}, goal: 50, wrong: {}, known: {}, badges: {}, sound: true, ans: 0, cor: 0, combo: 0, daily: "", matchBest: 0, ts: 0, resetAt: 0, dc: {}, dcombo: {}, chest: "", chests: 0, read: {}, spoke: {}, onb: 0, name: "" });
let S = fresh();
function hydrate(o) {
  const s = Object.assign(fresh(), o || {});
  ["done", "scores", "days", "wrong", "known", "badges", "dc", "dcombo", "read", "spoke"].forEach(k => { if (!s[k] || typeof s[k] !== "object") s[k] = {}; });
  ["xp", "streak", "best", "ans", "cor", "combo", "matchBest", "ts", "resetAt", "chests", "onb"].forEach(k => { s[k] = Number(s[k]) || 0; });
  const td = dkey();
  Object.keys(s.wrong).forEach(k => { if (!s.wrong[k] || typeof s.wrong[k] !== "object") s.wrong[k] = { b: 0, d: td }; });
  Object.keys(s.known).forEach(k => { if (!s.known[k] || typeof s.known[k] !== "object") s.known[k] = { b: 1, d: td }; });
  if (![30, 50, 100].includes(s.goal)) s.goal = 50;
  s.name = typeof s.name === "string" ? s.name.slice(0, 24) : "";
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
const spokeN = L => Object.keys(S.spoke[L.id] || {}).length;
const spokeTotal = () => LEVELS.reduce((n, L) => n + spokeN(L), 0);
const streakNow = () => (S.lastDay === dkey() || S.lastDay === dayAgo(1)) ? S.streak : 0;
function rankOf(xp) { let k = 0; RANKS.forEach((r, i) => { if (xp >= r[0]) k = i; }); const n = RANKS[k + 1]; return { name: RANKS[k][1], at: RANKS[k][0], next: n ? { at: n[0], name: n[1] } : null }; }
function addXp(n) {
  const t = dkey();
  if (S.lastDay !== t) { S.streak = (S.lastDay === dayAgo(1) ? S.streak : 0) + 1; S.lastDay = t; S.best = Math.max(S.best, S.streak); }
  S.xp += n; S.days[t] = (S.days[t] || 0) + n;
  ["days", "dc", "dcombo"].forEach(m => { const ks = Object.keys(S[m]).sort(); while (ks.length > 60) delete S[m][ks.shift()]; });
}
const missions = () => { const t = dkey(); return [
  { n: "Kumpulkan " + S.goal + " XP", v: S.days[t] || 0, max: S.goal },
  { n: "Jawab 15 soal dengan benar", v: S.dc[t] || 0, max: 15 },
  { n: "Raih combo 5× tanpa salah", v: S.dcombo[t] || 0, max: 5 }]; };

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
  { id: "chest", n: "Pemburu peti", d: "Buka peti misi harian", ic: "box", t: () => S.chests >= 1 },
  { id: "xp1000", n: "1.000 XP", d: "Kumpulkan 1.000 XP", ic: "star", t: () => S.xp >= 1000 },
  ...LEVELS.map(L => ({ id: "lv_" + L.id, n: "Jalur " + L.cefr, d: "Selesaikan semua pelajaran " + L.name, ic: "award", t: () => L.lessons.every(x => S.done[x.id]) }))
];
function newBadges() { const out = []; BADGES.forEach(b => { if (!S.badges[b.id] && b.t()) { S.badges[b.id] = dkey(); out.push(b); } }); return out; }

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
  out.read = maxMap("read");
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
let ROUTE = { v: "home", a: [] }, H = {}, QUIZ = null, TICK = null;
const VIEWS = {};
const SECTION = { home: "home", lesson: "home", read: "home", speak: "home", practice: "practice", flash: "practice", profile: "profile" };
function toTop() { try { window.scrollTo(0, 0); } catch (e) {} }
/* Setiap layar punya alamat (#rute, #pelajaran-0-1, …) agar tombol kembali di HP bekerja.
   Sesi kuis/game memakai #kuis; menekan kembali saat kuis memunculkan konfirmasi keluar. */
let SKIPHASH = 0, QPREV = null, QBACKED = false;
function hashOf(v, a) {
  switch (v) {
    case "lesson": return "#pelajaran-" + a[0] + "-" + a[1];
    case "read": return "#bacaan-" + a[0];
    case "speak": return "#bicara-" + a[0];
    case "flash": return "#flashcard-" + (a[0] || "all");
    case "practice": return "#latihan";
    case "profile": return "#profil";
    case "welcome": return "#mulai-" + (a[0] || 0);
    default: return "#rute";
  }
}
function parseHash(h) {
  const p = String(h || "").replace(/^#/, "").split("-"), n = x => (/^\d+$/.test(x || "") ? +x : NaN);
  switch (p[0]) {
    case "rute": return { v: "home", a: [] };
    case "latihan": return { v: "practice", a: [] };
    case "profil": return { v: "profile", a: [] };
    case "flashcard": return { v: "flash", a: [LEVELS.some(L => L.id === p[1]) ? p[1] : "all"] };
    case "mulai": return { v: "welcome", a: [Math.min(3, n(p[1]) || 0)] };
    case "pelajaran": { const li = n(p[1]), j = n(p[2]); return LEVELS[li] && LEVELS[li].lessons[j] ? { v: "lesson", a: [li, j] } : null; }
    case "bacaan": { const li = n(p[1]); return LEVELS[li] && LEVELS[li].read ? { v: "read", a: [li] } : null; }
    case "bicara": { const li = n(p[1]); return LEVELS[li] ? { v: "speak", a: [li] } : null; }
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

function nav(v, ...a) {
  clearInterval(TICK); TICK = null; QUIZ = null; stopSpeak(); stopRec();
  document.body.classList.remove("focus");
  if (!VIEWS[v]) { v = "home"; a = []; }
  if (v === "welcome" && S.onb) { v = "home"; a = []; }
  ROUTE = { v, a }; H = {};
  VIEWS[v](...a); chrome(); toTop();
  setHash(hashOf(v, a));
}
const rerender = () => nav(ROUTE.v, ...ROUTE.a);
const here = () => { const r = ROUTE; return () => nav(r.v, ...r.a); };
function chrome() {
  $("#top").innerHTML = `<button class="brand" data-g="home" aria-label="English Path, buka rute"><span class="mark">${BUBU(26)}</span><span class="wm">English Path</span></button>
    <div class="chips"><span class="chip" title="Hari beruntun">${I("flame")}${streakNow()}</span><span class="chip xp" title="Total XP">${I("star")}${S.xp}</span></div>`;
  const cur = SECTION[ROUTE.v] || "home";
  $("#nav").innerHTML = [["home", "Rute", "map"], ["practice", "Latihan", "zap"], ["profile", "Profil", "user"]]
    .map(([v, t, ic]) => `<button data-g="${v}"${cur === v ? ' aria-current="page"' : ""} aria-label="${t}">${I(ic)}<span class="t">${t}</span></button>`).join("");
}
document.addEventListener("click", e => {
  const say = e.target.closest("[data-say]"); if (say) { speak(say.dataset.say); return; }
  const g = e.target.closest("[data-g]"); if (g) { nav(g.dataset.g); return; }
  const el = e.target.closest("[data-a]"); if (el && !el.disabled && H[el.dataset.a]) H[el.dataset.a](el, e);
});
app.addEventListener("submit", e => { e.preventDefault(); if (H.submit) H.submit(e.target); });
app.addEventListener("change", e => { const el = e.target.closest("[data-c]"); if (el && H[el.dataset.c]) H[el.dataset.c](el); });
document.addEventListener("keydown", e => {
  if (!QUIZ) return;
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
  return "Tinggal " + (S.goal - dx) + " XP lagi untuk target hari ini.";
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
      <span class="go"><span style="flex:1;display:grid;gap:7px"><span class="row" style="flex-wrap:nowrap"><span class="pbar"><i style="width:${dn / L.lessons.length * 100}%"></i></span><b>${dn}/${L.lessons.length}</b></span><small>Pelajaran ${next.j + 1} dari ${L.lessons.length} · ${next.qs.length} soal</small></span><span class="play">${I("play")}</span></span></button>`;
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
        return `<li><button class="lrow ${st}" data-a="open" data-l="${L.i}" data-j="${x.j}"><span class="n">${st === "done" ? I("check") : x.j + 1}</span><span><b>${esc(x.title)}</b><small>${x.qs.length} soal${S.scores[x.id] != null ? " · terbaik " + S.scores[x.id] + "%" : ""}</small></span>${st === "cur" ? '<span class="go">Mulai</span>' : ""}</button></li>`;
      }).join("")}
      ${L.read ? `<li><button class="lrow${S.read[L.id] != null ? " done" : ""}" data-a="read" data-l="${L.i}"><span class="n">${I("book")}</span><span><b>Bacaan: ${esc(L.read.title)}</b><small>${L.read.qs.length} soal pemahaman${S.read[L.id] != null ? " · terbaik " + S.read[L.id] + "%" : ""}</small></span></button></li>` : ""}
      ${L.speak.length ? `<li><button class="lrow${spokeN(L) >= L.speak.length ? " done" : ""}" data-a="speak" data-l="${L.i}"><span class="n">${I("mic")}</span><span><b>Latihan berbicara</b><small>${spokeN(L)} dari ${L.speak.length} kalimat lancar</small></span></button></li>` : ""}
      <li><button class="lrow test${dn === n ? " done" : ""}" data-a="test" data-l="${L.i}"><span class="n">${I("flag")}</span><span><b>Tes level ${L.cefr}</b><small>20 soal acak · lulus 75% menandai level selesai</small></span></button></li></ol></details>`;
  };
  app.innerHTML = `<div class="home">
    <div class="side stack">
      <div class="greet">${BUBU(64, "wave", "Bubu, maskot English Path")}<div class="say"><b>Halo${S.name ? ", " + esc(S.name) : ""}!</b><span>${greetMsg()}</span></div></div>
      ${cont}
      <section class="card mission" aria-label="Misi hari ini">
        <div class="mission-h"><h2>Misi hari ini</h2><span class="muted">${nDone} dari 3 selesai</span></div>
        ${ms.map(m => { const ok = m.v >= m.max; return `<div class="mrow${ok ? " done" : ""}"><span class="mbox">${ok ? I("check") : ""}</span><span><span class="mt">${m.n}</span>${ok ? "" : `<span class="pbar" style="display:block"><i style="width:${m.v / m.max * 100}%"></i></span>`}</span><span class="mn">${Math.min(m.v, m.max)}/${m.max}</span></div>`; }).join("")}
        ${chest}
      </section>
      <div class="tiles">
        <button class="tile" style="--tc:var(--sun-l);--ts:#f3dc94;--ti:#e0a400" data-a="daily">${I("calendar")}<b>Tantangan harian</b><small>${S.daily === t ? "Selesai hari ini" : "10 soal · +30 XP"}</small></button>
        <button class="tile" style="--tc:var(--coral-l);--ts:#f6c6b3;--ti:var(--coral)" data-a="mist"${nW ? "" : " disabled"}>${I("retry")}<b>Ulangan hari ini</b><small>${nW ? nW + " soal jatuh tempo" : later ? later + " soal terjadwal nanti" : "Belum ada"}</small></button>
        <button class="tile" style="--tc:var(--lilac-l);--ts:#d6ccfa;--ti:#7a5cf0" data-a="matchg">${I("grid")}<b>Cocokkan kata</b><small>${S.matchBest ? "Rekor " + S.matchBest + " dtk" : "6 pasang kata"}</small></button>
        <button class="tile" style="--tc:var(--mint-l);--ts:#b4e6d2;--ti:var(--mint)" data-a="flash">${I("layers")}<b>Flashcard</b><small>${known} dari ${VOCAB.length} hafal</small></button>
      </div>
    </div>
    <section class="stack" aria-label="Peta level">
      <div class="secthead"><div><p class="eyebrow">Peta level · ${LESSONS.length} pelajaran · ${NQ} soal</p><h2 style="font-size:30px;margin-top:4px">Dari A1 sampai C2</h2></div><button class="back" data-a="allopen" style="padding:8px 0">${OPENLV.size === LEVELS.length ? "Tutup semua" : "Buka semua"}</button></div>
      <div class="levels">${LEVELS.map(lvcard).join("")}</div>
    </section></div>`;
  H = {
    open(el) { nav("lesson", +el.dataset.l, +el.dataset.j); },
    allopen() { const all = OPENLV.size === LEVELS.length; $$("details.lvcard").forEach(dd => { dd.open = !all; }); },
    test(el) { levelTest(+el.dataset.l); },
    read(el) { nav("read", +el.dataset.l); },
    speak(el) { nav("speak", +el.dataset.l); },
    cont() { nav("lesson", next.li, next.j); },
    flash() { nav("flash"); },
    chest() {
      if (S.chest === dkey() || !missions().every(m => m.v >= m.max)) return;
      S.chest = dkey(); S.chests++; addXp(50); newBadges(); save();
      const y = window.scrollY; rerender(); try { window.scrollTo(0, y); } catch (e) {}
      sfx.win(); confetti();
    },
    daily: startDaily, mist: startMistakes, matchg: globalMatch
  };
};

/* ================= lesson ================= */
VIEWS.lesson = function (li, j, tab = "m") {
  const L = LEVELS[li], x = L && L.lessons[j];
  if (!x) return nav("home");
  const tabs = [["m", "Materi"], ["c", "Contoh"], ["k", "Kosakata"], ["q", "Latihan"]];
  const rows = list => `<div class="card">${list.map(([en, tr]) => `<div class="ex">${spk(en)}<div><b>${esc(en)}</b><span>${esc(tr)}</span></div></div>`).join("")}</div>`;
  let body = "";
  if (tab === "m") body = `<div class="card theory">${x.theory}</div><button class="btn lv" data-a="tab" data-t="c">Lihat contoh ${I("right")}</button>`;
  if (tab === "c") body = rows(x.examples) + (canSpeak() ? `<button class="btn ghost" data-a="listen">${I("headphones")} Latihan dengar</button>` : "") + `<button class="btn lv" data-a="tab" data-t="k">Lanjut ke kosakata ${I("right")}</button>`;
  if (tab === "k") body = rows(x.vocab) + `<button class="btn ghost" data-a="lmatch">${I("grid")} Main cocokkan kata</button><button class="btn lv" data-a="tab" data-t="q">Lanjut ke latihan ${I("right")}</button>`;
  if (tab === "q") {
    const cnt = {}; x.qs.forEach(q => { cnt[q.t] = (cnt[q.t] || 0) + 1; });
    body = `<div class="card stack"><p class="eyebrow">Kuis pelajaran</p><h2>${x.qs.length} soal, ${Object.keys(cnt).length} jenis</h2>
      <ul class="types">${Object.keys(cnt).map(k => `<li>${KIND[k]} × ${cnt[k]}</li>`).join("")}</ul>
      <p class="muted">Skor 75% atau lebih menandai pelajaran ini selesai.${S.scores[x.id] != null ? " Skor terbaik Anda: " + S.scores[x.id] + "%." : ""}</p>
      <button class="btn lv" data-a="quiz">Mulai kuis</button><button class="btn ghost" data-a="quick">Latihan singkat · 5 soal</button></div>`;
  }
  app.innerHTML = `<div class="narrow stack" style="--lv:var(--l${li + 1});--ldk:var(--ld${li + 1})">
    <div><button class="back" data-g="home">${I("left")} Rute</button>
    <div class="lesson-h"><span class="roundel">${L.cefr}</span><div><p class="eyebrow">${L.name} · Pelajaran ${j + 1} dari ${L.lessons.length}</p><h1>${esc(x.title)}</h1></div></div>
    <div class="seg" role="tablist">${tabs.map(([k, n]) => `<button role="tab" aria-selected="${k === tab}" data-a="tab" data-t="${k}">${n}</button>`).join("")}</div></div>
    ${body}</div>`;
  const back = () => nav("lesson", li, j, tab);
  H = {
    tab(el) { nav("lesson", li, j, el.dataset.t); },
    quiz() { lessonQuiz(li, j); },
    quick() { const run = () => runQuiz(shuffle(x.qs).slice(0, 5), { title: x.title + " · latihan singkat", li, back, again: run, msg: "Latihan singkat tidak mengubah skor pelajaran." }); run(); },
    listen() { const run = () => runQuiz(shuffle(x.examples).map(([s, tr]) => ({ t: "l", s, tr })), { title: x.title + " · latihan dengar", li, back, again: run, msg: "Dengarkan lagi contoh-contohnya kapan saja di tab Contoh." }); run(); },
    lmatch() { const run = () => matchGame(x.vocab, { li, back, again: run }); run(); }
  };
};
function lessonQuiz(li, j) {
  const L = LEVELS[li], x = L.lessons[j];
  const next = j + 1 < L.lessons.length ? () => nav("lesson", li, j + 1) : (li + 1 < LEVELS.length ? () => nav("lesson", li + 1, 0) : null);
  runQuiz(shuffle(x.qs), {
    title: x.title, li, bonus: true, pass: 75, next, back: () => nav("lesson", li, j, "q"), again: () => lessonQuiz(li, j),
    onEnd(p) { S.scores[x.id] = Math.max(S.scores[x.id] || 0, p); if (p >= 75) S.done[x.id] = 1; }
  });
}
function levelTest(li) {
  const L = LEVELS[li], back = here();
  runQuiz(shuffle(L.lessons.flatMap(x => shuffle(x.qs).slice(0, 4))).slice(0, 20), {
    title: "Tes level " + L.cefr + " · " + L.name, li, bonus: true, pass: 75, back, again: () => levelTest(li),
    passMsg: "Semua pelajaran di jalur " + L.cefr + " ditandai selesai.",
    next: li + 1 < LEVELS.length ? () => nav("lesson", li + 1, 0) : null,
    onEnd(p) { if (p >= 75) L.lessons.forEach(x => { S.done[x.id] = 1; }); }
  });
}
function startDaily() {
  const first = S.daily !== dkey();
  runQuiz(shuffle(opened().flatMap(x => x.qs)).slice(0, 10), {
    title: "Tantangan harian", back: here(), again: startDaily, extra: () => first ? 30 : 0,
    msg: first ? "Bonus harian 30 XP sudah masuk." : "Bonus harian sudah diambil hari ini.", onEnd() { S.daily = dkey(); }
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
const reportUrl = c => REPO + "/issues/new?title=" + encodeURIComponent("Laporan soal " + (c.key || "")) + "&body=" + encodeURIComponent("Soal: " + (c.q || c.tr || c.s) + "\nKunci jawaban: " + answerOf(c) + "\n\nMasalahnya:\n");
const fmtQ = s => esc(s).replace(/___/g, '<span class="blank"></span>');

function runQuiz(items, o) {
  if (!items.length) return o.back();
  enterSession();
  clearInterval(TICK); TICK = null; stopSpeak();
  document.body.classList.add("focus");
  const N = items.length, lv = o.li != null ? ` style="--lv:var(--l${o.li + 1});--ldk:var(--ld${o.li + 1})"` : "";
  let i = 0, right = 0, combo = 0, maxCombo = 0, gained = 0, answered = false, st = {};
  const missed = [], res = [];
  const comboHTML = () => combo >= 3 ? `<span class="combo">${combo}× combo</span>` : "";

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
      <div class="qbar"><button class="iconbtn" data-a="quit" aria-label="Keluar dari sesi">${I("x")}</button>${N <= 12 ? `<div class="blocks" style="--n:${N}" role="progressbar" aria-valuemin="0" aria-valuemax="${N}" aria-valuenow="${i}" aria-label="Soal ${i + 1} dari ${N}${o.silent ? "" : ", " + right + " benar"}">${items.map((_, k) => `<span class="${k < i ? (o.silent ? "cur" : res[k] ? "ok" : "no") : k === i ? "cur" : ""}" title="${k < i && !o.silent ? (res[k] ? "Benar" : "Salah") : ""}"></span>`).join("")}</div>` : `<div class="prog" role="progressbar" aria-valuemin="0" aria-valuemax="${N}" aria-valuenow="${i}"><i style="width:${i / N * 100}%"></i></div>`}<span class="qcount">${i + 1}/${N}</span><span id="combo">${comboHTML()}</span></div>
      <div id="confirm"></div>${o.ctx || ""}
      <p class="eyebrow">${QLABEL[c.t]}</p>${body}
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
    if (ok) { right++; combo++; maxCombo = Math.max(maxCombo, combo); S.cor++; { const td = dkey(); S.dc[td] = (S.dc[td] || 0) + 1; S.dcombo[td] = Math.max(S.dcombo[td] || 0, combo); } if (combo > S.combo) S.combo = combo; if (c.key) srsHit(S.wrong, c.key, true); addXp(10); gained += 10; sfx.ok(); }
    else { combo = 0; if (c.key) srsHit(S.wrong, c.key, false); missed.push(c); sfx.no(); }
    save();
    const blk = $$(".blocks span")[i]; if (blk) blk.className = ok ? "ok" : "no";
    const pg = $(".prog i"); if (pg) pg.style.width = (i + 1) / N * 100 + "%";
    $("#combo").innerHTML = comboHTML();
    $("#fb").innerHTML = `<div class="fb ${ok ? "ok" : "no"}"><p class="fb-h"><span>${ok ? pick(PRAISE) : "Belum tepat"}</span>${ok ? '<span class="plus">+10 XP</span>' : ""}</p>
      ${!ok || c.t === "l" ? `<p>Jawaban: <b>${esc(answerOf(c))}</b></p>` : ""}${c.t === "l" ? `<p>${esc(c.tr)}</p>` : ""}${c.e ? `<p>${esc(c.e)}</p>` : ""}${c.key ? `<a class="report" href="${reportUrl(c)}" target="_blank" rel="noopener">Ada yang salah dengan soal ini? Laporkan</a>` : ""}
      <button class="btn ${ok ? "good" : "bad"}" data-a="next" id="nx">${i + 1 < N ? "Lanjut" : "Lihat hasil"}</button></div>`;
    try { $("#nx").focus({ preventScroll: true }); } catch (e) {}
    try { $("#fb").scrollIntoView({ block: "nearest", behavior: "smooth" }); } catch (e) {}
  }

  function finish() {
    QUIZ = null; stopSpeak();
    if (o.silent) { document.body.classList.remove("focus"); return o.onEnd(res); }
    const pct = Math.round(right / N * 100);
    let bonus = 0;
    if (o.bonus && pct >= 75) bonus += 20;
    if (o.bonus && pct === 100) bonus += 30;
    if (o.extra) bonus += o.extra(pct) || 0;
    if (bonus) addXp(bonus);
    if (o.onEnd) o.onEnd(pct);
    const nb = newBadges(); save();
    const passed = o.pass ? pct >= o.pass : pct >= 60;
    const head = pct === 100 ? "Sempurna!" : passed ? (o.pass ? "Lulus!" : "Kerja bagus!") : pct >= 50 ? "Hampir sampai" : "Belum sampai";
    const sub = o.pass ? (passed ? (o.passMsg || "Pelajaran ini ditandai selesai.") : "Butuh " + o.pass + "% untuk lulus. Ulangi soal yang salah, lalu coba lagi.") : (o.msg || "Sesi selesai.");
    const goNext = o.next && passed;
    app.innerHTML = `<div class="quiz stack"${lv}>
      <p class="eyebrow">${esc(o.title)}</p>
      <div class="res-top">${ring(pct / 100, pct + "%", right + " dari " + N + " benar", "big")}<div><h1>${head}</h1><p class="muted">${sub}</p></div></div>
      <dl class="stats3"><div><dt>XP didapat</dt><dd>+${gained + bonus}</dd></div><div><dt>Combo terbaik</dt><dd>${maxCombo}×</dd></div><div><dt>Perlu diulang</dt><dd>${missed.length}</dd></div></dl>
      ${nb.map(b => `<div class="newbadge">${I(b.ic)}<div><b>Lencana baru: ${b.n}</b><span>${b.d}</span></div></div>`).join("")}
      ${goNext ? `<button class="btn lv" data-a="next">Pelajaran berikutnya ${I("right")}</button>` : ""}
      ${missed.length ? `<button class="btn ${goNext ? "ghost" : "lv"}" data-a="redo">Ulangi ${missed.length} soal yang salah</button>` : ""}
      <div class="pair"><button class="btn ghost" data-a="again">Dari awal</button><button class="btn ghost" data-a="back">Kembali</button></div>
      ${missed.length ? `<h2 style="margin-top:12px">Yang perlu diulang</h2><ul class="missed">${missed.map(m => `<li>${esc(m.t === "o" || m.t === "l" ? m.tr : m.q)}<br><b>${esc(answerOf(m))}</b>${m.e ? `<small>${esc(m.e)}</small>` : ""}</li>`).join("")}</ul>` : ""}</div>`;
    H = {
      next() { o.next(); }, again() { o.again(); }, back() { o.back(); },
      redo() { runQuiz(shuffle(missed), { title: o.title + " · ulangan", li: o.li, back: o.back, again: o.again, msg: "Ulangan soal yang tadi salah." }); }
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
      ${nb.map(b => `<div class="newbadge">${I(b.ic)}<div><b>Lencana baru: ${b.n}</b><span>${b.d}</span></div></div>`).join("")}
      <button class="btn lv" data-a="again">Main lagi</button><button class="btn ghost" data-a="back">Kembali</button></div>`;
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
    <div class="tools">
      ${tool("daily", "calendar", 4, "Tantangan harian", "10 soal acak dari pelajaran yang sudah Anda buka", S.daily === t ? "Selesai" : "+30 XP")}
      ${tool("mist", "retry", 5, "Ulangan hari ini", nW ? "Soal yang pernah salah, dijadwalkan ulang otomatis" : later ? later + " soal dijadwalkan muncul di hari lain" : "Soal yang Anda jawab salah akan dijadwalkan di sini", nW ? nW + " soal" : "Kosong", !nW)}
      ${tool("matchg", "grid", 3, "Cocokkan kata", "Pasangkan 6 kata dengan artinya secepat mungkin", S.matchBest ? S.matchBest + " dtk" : "Baru")}
      ${tool("flash", "layers", 2, "Flashcard", "Balik kartu dan tandai kata yang sudah hafal", known + "/" + VOCAB.length)}
      ${canSpeak() ? tool("listen", "headphones", 6, "Dengar & susun", "Dengarkan kalimat, lalu susun kata-katanya", "5 kalimat") : ""}
      ${tool("place", "compass", 1, "Tes penempatan", "18 soal untuk menemukan level awal Anda", "A1–C2")}
    </div></div>`;
  H = { daily: startDaily, mist: startMistakes, matchg: globalMatch, flash() { nav("flash"); }, listen: globalListen, place: startPlacement };
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
  const pool = VOCAB.filter(v => f === "all" || LEVELS[v.li].id === f);
  const due = v => !S.known[v.w] || S.known[v.w].d <= dkey();
  let deck = shuffle(pool.filter(due)), flipped = false;
  const draw = () => {
    const known = pool.filter(v => isKnown(v.w)).length, c = deck[0];
    app.innerHTML = `<div class="narrow stack">
      <div><button class="back" data-g="practice">${I("left")} Latihan</button><h1>Flashcard</h1></div>
      <div class="seg scroll" role="group" aria-label="Pilih level"><button aria-pressed="${f === "all"}" data-a="filt" data-f="all">Semua</button>${LEVELS.map(L => `<button aria-pressed="${f === L.id}" data-a="filt" data-f="${L.id}">${L.cefr}</button>`).join("")}</div>
      <div><div class="bar"><i style="width:${pool.length ? known / pool.length * 100 : 0}%"></i></div><p class="muted" style="margin-top:6px">${known} dari ${pool.length} kata hafal · ${deck.length} kartu untuk hari ini</p></div>
      ${c ? `<div class="flip" style="--lv:var(--l${c.li + 1});--ldk:var(--ld${c.li + 1})"><button class="flip-in" data-a="flip" aria-label="Balik kartu">
          <span class="face a"><span class="eyebrow">${LEVELS[c.li].cefr} · ${S.known[c.w] ? "Ulangan" : "Kata baru"}</span><span class="w">${esc(c.w)}</span><span class="hint">Ketuk untuk melihat arti</span></span>
          <span class="face b"><span class="eyebrow" style="color:inherit">Arti</span><span class="w">${esc(c.m)}</span><span class="hint">${esc(c.w)}</span></span></button></div>
        ${canSpeak() ? `<button class="btn ghost" data-say="${esc(c.w)}">${I("speaker")} Dengarkan</button>` : ""}
        <div class="pair"><button class="btn bad" data-a="later">Belum hafal</button><button class="btn good" data-a="know">Sudah hafal</button></div>
        <p class="muted">Kata yang hafal muncul lagi setelah 1, 3, 7, 14, lalu 30 hari supaya benar-benar menempel.</p>`
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
VIEWS.read = function (li) {
  const L = LEVELS[li];
  if (!L || !L.read) return nav("home");
  const R = L.read, full = R.text.join(" ").replace(/<br>/g, ". ");
  app.innerHTML = `<div class="narrow stack" style="--lv:var(--l${li + 1});--ldk:var(--ld${li + 1})">
    <div><button class="back" data-g="home">${I("left")} Rute</button>
    <div class="lesson-h"><span class="roundel">${L.cefr}</span><div><p class="eyebrow">Bacaan · ${L.name}</p><h1>${esc(R.title)}</h1></div></div></div>
    ${canSpeak() ? `<div class="pair"><button class="btn ghost" data-a="listen">${I("headphones")} Dengarkan</button><button class="btn ghost" data-a="slow">Lambat</button></div>` : ""}
    <article class="card reading">${R.text.map(p => `<p>${p}</p>`).join("")}</article>
    <p class="muted">Baca sampai selesai, lalu jawab ${R.qs.length} soal. Teksnya tetap bisa dibuka saat menjawab.</p>
    <button class="btn lv" data-a="go">Jawab soal ${I("right")}</button></div>`;
  H = { listen() { speak(full); }, slow() { speak(full, true); }, go() { startRead(li); } };
};
function startRead(li) {
  const L = LEVELS[li], R = L.read;
  runQuiz(R.qs.slice(), {
    title: "Bacaan · " + R.title, li, pass: 60, bonus: true, passMsg: "Pemahaman bacaan Anda bagus.",
    back: () => nav("read", li), again: () => startRead(li),
    ctx: `<details class="ctx"><summary>Lihat bacaan</summary>${R.text.map(p => `<p>${p}</p>`).join("")}</details>`,
    onEnd(p) { S.read[L.id] = Math.max(S.read[L.id] || 0, p); }
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
VIEWS.speak = function (li) {
  const L = LEVELS[li];
  if (!L || !L.speak.length) return nav("home");
  let k = 0, st = "idle", heard = "", pct = 0;
  const done = () => S.spoke[L.id] || {};
  const draw = () => {
    const [en, tr] = L.speak[k], ok = done()[k];
    const fb = st === "ok" || st === "no" ? `<div class="fb ${st}"><p class="fb-h"><span>${st === "ok" ? "Lancar!" : "Coba lagi"}</span><span class="plus">${pct}% cocok</span></p><p>Terdengar: <b>${esc(heard || "(tidak ada suara)")}</b></p>${st === "no" ? "<p>Ucapkan pelan dan jelas. Targetnya 80% kata cocok.</p>" : ""}</div>`
      : st === "err" ? `<div class="fb no"><p>${esc(heard)}</p></div>` : "";
    app.innerHTML = `<div class="narrow stack" style="--lv:var(--l${li + 1});--ldk:var(--ld${li + 1})">
      <div><button class="back" data-g="home">${I("left")} Rute</button>
      <div class="lesson-h"><span class="roundel">${L.cefr}</span><div><p class="eyebrow">Latihan berbicara · ${spokeN(L)}/${L.speak.length} lancar</p><h1>Ucapkan kalimat ini</h1></div></div></div>
      <div class="dots" role="group" aria-label="Pilih kalimat">${L.speak.map((_, n) => `<button class="${n === k ? "cur" : ""}${done()[n] ? " ok" : ""}" data-a="jump" data-k="${n}" aria-label="Kalimat ${n + 1}${done()[n] ? ", lancar" : ""}"></button>`).join("")}</div>
      <div class="tcard say${st === "ok" ? " ok" : st === "no" ? " no" : ""}"><span class="tag">Kalimat ${k + 1} dari ${L.speak.length}${ok ? " · lancar" : ""}</span><p class="qtext tq">${esc(en)}</p><span class="muted" style="font-weight:600">${esc(tr)}</span></div>
      ${canSpeak() ? `<div class="pair"><button class="btn ghost" data-say="${esc(en)}">${I("speaker")} Dengar</button><button class="btn ghost" data-a="slow">Lambat</button></div>` : ""}
      ${SR ? `<button class="btn ${st === "rec" ? "bad" : "blue"}" data-a="rec">${I("mic")} ${st === "rec" ? "Mendengarkan… ketuk untuk berhenti" : "Ketuk lalu ucapkan"}</button>`
           : `<div class="card"><p><b>Penilaian suara tidak tersedia di browser ini.</b> Buka English Path di Chrome (Android atau komputer) agar ucapan Anda dinilai otomatis. Untuk sekarang: dengarkan, tirukan dengan suara keras, lalu tandai sendiri.</p></div><button class="btn blue" data-a="self">Saya sudah mengucapkannya</button>`}
      <div aria-live="polite">${fb}</div>
      <div class="pair"><button class="btn ghost" data-a="prev"${k === 0 ? " disabled" : ""}>Sebelumnya</button><button class="btn lv" data-a="next">${k + 1 < L.speak.length ? "Berikutnya" : "Selesai"}</button></div></div>`;
  };
  const pass = () => { if (done()[k]) return; S.spoke[L.id] = Object.assign({}, done(), { [k]: 1 }); addXp(5); newBadges(); save(); chrome(); };
  H = {
    jump(el) { stopRec(); k = +el.dataset.k; st = "idle"; draw(); },
    prev() { stopRec(); if (k > 0) { k--; st = "idle"; draw(); } },
    next() { stopRec(); if (k + 1 < L.speak.length) { k++; st = "idle"; draw(); } else nav("home"); },
    slow() { speak(L.speak[k][0], true); },
    self() { pass(); st = "ok"; pct = 100; heard = "(ditandai sendiri)"; sfx.ok(); draw(); },
    rec() {
      if (st === "rec") { try { REC && REC.stop(); } catch (e) {} return; }
      try {
        stopSpeak(); stopRec();
        const r = REC = new SR(); r.lang = "en-US"; r.interimResults = false; r.maxAlternatives = 3;
        r.onresult = e => {
          const alts = [...e.results[0]].map(x => x.transcript); let best = -1, bh = alts[0] || "";
          alts.forEach(a => { const sc = sayScore(L.speak[k][0], a); if (sc > best) { best = sc; bh = a; } });
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
      <div class="goals">${[[30, "Santai", "± 10 menit"], [50, "Normal", "± 20 menit"], [100, "Serius", "± 40 menit"]].map(([g, n, m]) => `<button class="goal pop${S.goal === g ? " on" : ""}" data-a="goal" data-v="${g}"><b>${n}</b><span>${m} · ${g} XP</span></button>`).join("")}</div>
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
  const stat = (k, v) => `<div><dt>${k}</dt><dd>${v}</dd></div>`;
  app.innerHTML = `<div class="narrow stack">
    <div class="rank"><p class="eyebrow">Peringkat Anda</p><h1>${r.name}</h1>
      ${r.next ? `<div class="bar"><i style="width:${(S.xp - r.at) / (r.next.at - r.at) * 100}%"></i></div><p class="muted">${S.xp} XP. ${r.next.at - S.xp} XP lagi menuju ${r.next.name}.</p>` : `<p class="muted">${S.xp} XP. Ini peringkat tertinggi.</p>`}</div>
    <dl class="statgrid">${stat("Hari beruntun", streakNow())}${stat("Rekor beruntun", S.best)}${stat("Pelajaran", doneCount() + "/" + LESSONS.length)}${stat("Akurasi", acc + "%")}${stat("Soal dijawab", S.ans)}${stat("Jawaban benar", S.cor)}${stat("Combo terbaik", S.combo + "×")}${stat("Kata hafal", knownCount())}</dl>
    <h2 style="margin-top:10px">Lencana · ${got} dari ${BADGES.length}</h2>
    <div class="badges">${BADGES.map(b => `<div class="badge${S.badges[b.id] ? " on" : ""}"><span class="bi">${I(b.ic)}</span><span><b>${b.n}</b><small>${b.d}</small></span></div>`).join("")}</div>
    <h2 style="margin-top:10px">Pengaturan</h2>
    <div class="card" style="padding-top:4px;padding-bottom:4px">
      <div class="setting"><label for="pname"><b>Nama panggilan</b><p class="muted">Dipakai Bubu untuk menyapamu</p></label><input id="pname" type="text" maxlength="24" autocomplete="given-name" data-c="nm" value="${esc(S.name)}" placeholder="Nama"></div>
      <div class="setting"><div><b>Target harian</b><p class="muted">XP yang ingin Anda kumpulkan per hari</p></div><div class="seg" role="group" aria-label="Target harian">${[30, 50, 100].map(g => `<button aria-pressed="${S.goal === g}" data-a="goal" data-v="${g}">${g} XP</button>`).join("")}</div></div>
      <div class="setting"><label class="switch" for="snd"><input type="checkbox" id="snd" data-c="sound"${S.sound ? " checked" : ""}> Efek suara</label></div>
      <div class="setting"><div><b>Penyimpanan</b><p class="muted">${SYNC === "on" ? "Progres tersimpan di akun Claude Anda, jadi sama di HP dan komputer." : SYNC === "err" ? "Belum bisa menyimpan ke akun. Progres tetap tersimpan di browser ini." : "Progres tersimpan di browser ini."}</p></div></div>
      <div class="setting"><div><b>Pasang aplikasi</b><p class="muted">${installHint()}</p></div>${DEFER ? `<button class="btn blue auto" data-a="install">${I("download")} Pasang</button>` : ""}</div>
      <div class="setting"><div><b>Reset progres</b><p class="muted">Menghapus semua XP, skor, dan lencana.</p></div><button class="btn ghost auto" data-a="reset">Reset</button></div>
    </div>
    <h2 style="margin-top:10px">Pindahkan progres</h2>
    <div class="card stack">
      <p class="muted">Ganti HP atau browser? Salin kode progres di sini, lalu tempel di perangkat baru. Progres digabung, tidak ada yang hilang.</p>
      <button class="btn ghost" data-a="exp">${I("copy")} Salin kode progres</button><div id="expout"></div>
      <label class="eyebrow" for="impin">Tempel kode dari perangkat lain</label>
      <textarea id="impin" rows="3" spellcheck="false" autocomplete="off" placeholder="EP1:…"></textarea>
      <button class="btn blue" data-a="imp">Pulihkan progres</button><div id="impmsg" aria-live="polite"></div>
    </div>
    <p class="muted">English Path gratis dan terbuka. Kode dan laporan soal: <a href="${REPO}" target="_blank" rel="noopener">github.com/iiddon/english-study</a></p></div>`;
  let armed = false;
  H = {
    goal(el) { S.goal = +el.dataset.v; save(); rerender(); },
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
        S = merge(S, hydrate(obj)); S.onb = 1; S.ts = Date.now(); newBadges(); save();
        msg.innerHTML = `<div class="fb ok"><p class="fb-h"><span>Progres dipulihkan</span></p><p>${S.xp} XP · ${doneCount()} pelajaran selesai.</p></div>`;
        chrome();
      } catch (e) { msg.innerHTML = `<div class="fb no"><p>Kode tidak dikenali. Pastikan kode diawali EP1: dan tersalin utuh.</p></div>`; }
    },
    reset(el) {
      if (!armed) { armed = true; el.className = "btn bad auto"; el.textContent = "Ketuk lagi untuk menghapus"; return; }
      S = fresh(); S.resetAt = Date.now(); save(); rerender();
    }
  };
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
  loadLocal();
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
