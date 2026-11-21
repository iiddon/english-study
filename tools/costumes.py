# Katalog kostum Bubu: satu sumber untuk mockup dan aplikasi.
# Koordinat mengikuti tubuh Bubu (viewBox asli 0 0 86 92): kepala y 4..64, x 10..76, mata (32,32) & (54,32).
# layer: back (di belakang tubuh), face (di atas mata), hat, front (leher/dipegang).
# price None = barang khusus, terbuka lewat pencapaian (unlock = [kode, teks]).

COLORS = [
 ("violet","Ungu Bubu",0,"#5b5bf0"),("mint","Mint",100,"#2fb88c"),("coral","Koral",100,"#ff7a59"),
 ("sky","Langit",150,"#3f8cf0"),("candy","Permen",150,"#ec5f9a"),("orange","Jeruk",150,"#f59f1b"),
 ("teal","Toska",200,"#14a3a3"),("moss","Lumut",200,"#6a9f3a"),("grape","Anggur",250,"#8e44c9"),
 ("red","Merah cabai",250,"#e5484d"),("choco","Cokelat",300,"#8b5e3c"),("slate","Abu batu",300,"#64748b"),
 ("night","Malam",400,"#2b2d55"),("berry","Beri",400,"#b8326b"),("sea","Laut dalam",500,"#1f5fa8"),
 ("gold","Emas",None,"url(#bbGold)",["c2","Lulus Tes Level C2"]),
 ("rainbow","Pelangi",None,"url(#bbRain)",["streak30","Streak 30 hari"]),
 ("galaxy","Galaksi",None,"url(#bbGal)",["stars36","3 bintang di 36 pelajaran"]),
]
DEFS = ('<defs><linearGradient id="bbGold" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ffe07a"/><stop offset=".55" stop-color="#f2b705"/><stop offset="1" stop-color="#c98a00"/></linearGradient>'
 '<linearGradient id="bbRain" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#ff6b6b"/><stop offset=".25" stop-color="#ffc845"/><stop offset=".5" stop-color="#34c79a"/><stop offset=".75" stop-color="#3f8cf0"/><stop offset="1" stop-color="#8e44c9"/></linearGradient>'
 '<radialGradient id="bbGal" cx=".3" cy=".3" r=".9"><stop offset="0" stop-color="#7b5cff"/><stop offset=".6" stop-color="#2b1d6b"/><stop offset="1" stop-color="#120c33"/></radialGradient></defs>')
GAL_STARS = '<g fill="#fff" opacity=".9"><circle cx="20" cy="14" r="1.3"/><circle cx="66" cy="12" r="1"/><circle cx="70" cy="50" r="1.4"/><circle cx="16" cy="54" r="1"/><circle cx="44" cy="10" r=".9"/></g>'

D = "#24264a"
HATS = [
 ("none","Tanpa topi",0,"",None),
 ("party","Topi pesta",120,'<path d="M43 -26 L57 6 H29 Z" fill="#ff7a59"/><path d="M36 -8 H50 M33 0 H53" stroke="#fff" stroke-width="3"/><circle cx="43" cy="-27" r="5" fill="#ffc845"/>',None),
 ("beanie","Kupluk",150,'<path d="M17 8 Q43 -28 69 8 Z" fill="#34c79a"/><rect x="14" y="3" width="58" height="9" rx="4.5" fill="#21a37b"/><circle cx="43" cy="-13" r="6" fill="#21a37b"/>',None),
 ("cap","Topi pet",150,'<path d="M18 8 Q20 -16 43 -16 Q66 -16 68 8 Z" fill="#3f8cf0"/><path d="M60 6 Q80 4 88 10 Q72 12 58 10 Z" fill="#2c6fd1"/><circle cx="43" cy="-16" r="3" fill="#2c6fd1"/>',None),
 ("beret","Baret",180,'<ellipse cx="40" cy="4" rx="30" ry="9" fill="#e5484d"/><path d="M14 6 Q40 -16 68 2" fill="#e5484d"/><circle cx="42" cy="-8" r="3" fill="#b8323a"/>',None),
 ("bunny","Telinga kelinci",200,'<path d="M28 6 Q20 -30 30 -32 Q38 -30 36 6 Z" fill="#fff" stroke="#dbe4f7" stroke-width="2"/><path d="M50 6 Q48 -30 56 -32 Q66 -30 58 6 Z" fill="#fff" stroke="#dbe4f7" stroke-width="2"/><path d="M30 2 Q26 -22 31 -25 Q34 -22 33 2 Z" fill="#ff9bb3"/><path d="M53 2 Q52 -22 56 -25 Q60 -22 56 2 Z" fill="#ff9bb3"/>',None),
 ("cat","Telinga kucing",200,'<path d="M14 10 L18 -14 L36 4 Z" fill="#24264a"/><path d="M72 10 L68 -14 L50 4 Z" fill="#24264a"/><path d="M19 4 L21 -6 L29 3 Z" fill="#ff9bb3"/><path d="M67 4 L65 -6 L57 3 Z" fill="#ff9bb3"/>',None),
 ("flower","Mahkota bunga",250,'<path d="M14 6 Q43 -6 72 6" fill="none" stroke="#6a9f3a" stroke-width="4"/><g><circle cx="20" cy="3" r="6" fill="#ff9bb3"/><circle cx="32" cy="-1" r="6" fill="#ffc845"/><circle cx="44" cy="-2" r="6" fill="#ff7a59"/><circle cx="56" cy="-1" r="6" fill="#ec5f9a"/><circle cx="68" cy="3" r="6" fill="#ffc845"/></g><g fill="#fff"><circle cx="20" cy="3" r="2"/><circle cx="32" cy="-1" r="2"/><circle cx="44" cy="-2" r="2"/><circle cx="56" cy="-1" r="2"/><circle cx="68" cy="3" r="2"/></g>',None),
 ("chef","Topi koki",250,'<rect x="24" y="-6" width="38" height="14" rx="3" fill="#fff" stroke="#dbe4f7" stroke-width="2"/><circle cx="30" cy="-12" r="10" fill="#fff" stroke="#dbe4f7" stroke-width="2"/><circle cx="43" cy="-18" r="12" fill="#fff" stroke="#dbe4f7" stroke-width="2"/><circle cx="56" cy="-12" r="10" fill="#fff" stroke="#dbe4f7" stroke-width="2"/><rect x="25" y="-8" width="36" height="8" fill="#fff"/>',None),
 ("cowboy","Topi koboi",300,'<path d="M2 4 Q10 12 43 10 Q76 12 84 4 Q74 2 66 6 Z" fill="#8b5e3c"/><path d="M24 6 Q24 -18 43 -16 Q62 -18 62 6 Z" fill="#a8743f"/><rect x="24" y="0" width="38" height="5" fill="#5b3a1e"/>',None),
 ("pirate","Topi bajak laut",350,'<path d="M8 8 Q43 -30 78 8 Q43 0 8 8 Z" fill="#24264a"/><circle cx="43" cy="-4" r="5" fill="#fff"/><path d="M39 2 L47 6 M47 2 L39 6" stroke="#fff" stroke-width="2"/>',None),
 ("wizard","Topi penyihir",400,'<path d="M43 -34 L64 6 H22 Z" fill="#5b3fb8"/><ellipse cx="43" cy="6" rx="30" ry="6" fill="#4a2f9e"/><path d="M40 -14 l2 4 4 .6-3 3 .7 4-3.7-2-3.7 2 .7-4-3-3 4-.6z" fill="#ffc845"/>',None),
 ("tophat","Topi tinggi",450,'<ellipse cx="43" cy="6" rx="30" ry="5" fill="#24264a"/><rect x="27" y="-24" width="32" height="30" rx="3" fill="#24264a"/><rect x="27" y="-2" width="32" height="5" fill="#e5484d"/>',None),
 ("propeller","Topi baling-baling",500,'<path d="M18 8 Q43 -22 68 8 Z" fill="#ffc845"/><path d="M18 8 Q30 -12 43 -14 L43 8 Z" fill="#e5484d"/><rect x="41.5" y="-22" width="3" height="9" fill="#24264a"/><ellipse cx="33" cy="-22" rx="10" ry="3" fill="#3f8cf0"/><ellipse cx="53" cy="-22" rx="10" ry="3" fill="#34c79a"/>',None),
 ("astro","Helm astronot",700,'<path d="M10 30 Q10 -18 43 -18 Q76 -18 76 30" fill="none" stroke="#e6e9f2" stroke-width="7"/><path d="M14 30 Q14 -12 43 -12 Q72 -12 72 30" fill="rgba(160,200,255,.22)"/><rect x="6" y="24" width="10" height="16" rx="3" fill="#cfd5e3"/><rect x="70" y="24" width="10" height="16" rx="3" fill="#cfd5e3"/>',None),
 ("crown","Mahkota juara",None,'<path d="M23 7 L23 -12 L33 -2 L43 -18 L53 -2 L63 -12 L63 7 Z" fill="#ffc845" stroke="#d9a21f" stroke-width="2.5" stroke-linejoin="round"/><circle cx="43" cy="-1" r="3" fill="#ff7a59"/><circle cx="30" cy="2" r="2" fill="#3f8cf0"/><circle cx="56" cy="2" r="2" fill="#34c79a"/>',["alltests","Lulus semua tes level A1–C2"]),
 ("toga","Toga emas",None,'<rect x="27" y="-2" width="32" height="10" rx="3" fill="#24264a"/><path d="M43 -16 L80 -4 L43 8 L6 -4 Z" fill="#24264a"/><path d="M72 -3v15" stroke="#ffc845" stroke-width="2.5"/><circle cx="72" cy="14" r="3.5" fill="#ffc845"/>',["cert","Dapat sertifikat pertama"]),
 ("detective","Topi detektif",None,'<path d="M12 8 Q14 -16 43 -16 Q72 -16 74 8 Z" fill="#a8743f"/><path d="M12 8 Q43 -2 74 8 Q43 14 12 8 Z" fill="#8b5e3c"/><path d="M20 -2 Q43 -10 66 -2" fill="none" stroke="#5b3a1e" stroke-width="3"/>',["talk12","Selesaikan 12 percakapan"]),
]
FACE = [
 ("none","Tanpa",0,"",None),
 ("round","Kacamata bulat",100,f'<circle cx="32" cy="32" r="10" fill="rgba(255,255,255,.18)" stroke="{D}" stroke-width="3"/><circle cx="54" cy="32" r="10" fill="rgba(255,255,255,.18)" stroke="{D}" stroke-width="3"/><path d="M42 31h2" stroke="{D}" stroke-width="3" stroke-linecap="round"/>',None),
 ("square","Kacamata kotak",120,f'<rect x="21" y="24" width="21" height="16" rx="3" fill="rgba(255,255,255,.18)" stroke="{D}" stroke-width="3"/><rect x="44" y="24" width="21" height="16" rx="3" fill="rgba(255,255,255,.18)" stroke="{D}" stroke-width="3"/>',None),
 ("sun","Kacamata hitam",150,f'<rect x="19" y="24" width="22" height="15" rx="6" fill="{D}"/><rect x="45" y="24" width="22" height="15" rx="6" fill="{D}"/><path d="M41 29h4" stroke="{D}" stroke-width="3"/><path d="M24 28h6M50 28h6" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>',None),
 ("heart","Kacamata hati",180,'<path d="M32 42 L22 31 A5.5 5.5 0 0 1 32 24 A5.5 5.5 0 0 1 42 31 Z" fill="#ec5f9a"/><path d="M54 42 L44 31 A5.5 5.5 0 0 1 54 24 A5.5 5.5 0 0 1 64 31 Z" fill="#ec5f9a"/>',None),
 ("star","Kacamata bintang",200,'<path d="M32 21l3.3 6.7 7.4 1.1-5.4 5.2 1.3 7.4-6.6-3.5-6.6 3.5 1.3-7.4-5.4-5.2 7.4-1.1z" fill="#ffc845" stroke="#d9a21f" stroke-width="1.5"/><path d="M54 21l3.3 6.7 7.4 1.1-5.4 5.2 1.3 7.4-6.6-3.5-6.6 3.5 1.3-7.4-5.4-5.2 7.4-1.1z" fill="#ffc845" stroke="#d9a21f" stroke-width="1.5"/>',None),
 ("cateye","Kacamata kucing",200,'<path d="M20 28 Q24 22 40 26 Q40 38 30 38 Q20 38 20 28 Z" fill="rgba(255,255,255,.2)" stroke="#e5484d" stroke-width="3"/><path d="M66 28 Q62 22 46 26 Q46 38 56 38 Q66 38 66 28 Z" fill="rgba(255,255,255,.2)" stroke="#e5484d" stroke-width="3"/>',None),
 ("goggles","Kacamata renang",220,'<path d="M10 30 H76" stroke="#3f8cf0" stroke-width="4"/><ellipse cx="32" cy="31" rx="11" ry="9" fill="rgba(63,140,240,.35)" stroke="#2c6fd1" stroke-width="3"/><ellipse cx="54" cy="31" rx="11" ry="9" fill="rgba(63,140,240,.35)" stroke="#2c6fd1" stroke-width="3"/>',None),
 ("threed","Kacamata 3D",250,'<rect x="19" y="24" width="48" height="15" rx="3" fill="#fff" stroke="#dbe4f7" stroke-width="1.5"/><rect x="22" y="26" width="17" height="11" rx="2" fill="rgba(229,72,77,.75)"/><rect x="47" y="26" width="17" height="11" rx="2" fill="rgba(63,140,240,.75)"/>',None),
 ("hero","Topeng pahlawan",300,'<path d="M14 26 Q43 18 72 26 Q72 40 58 38 Q50 36 43 33 Q36 36 28 38 Q14 40 14 26 Z" fill="#e5484d"/><ellipse cx="31" cy="30" rx="5" ry="4" fill="#fff"/><ellipse cx="55" cy="30" rx="5" ry="4" fill="#fff"/>',None),
 ("patch","Penutup mata",300,f'<path d="M14 18 L72 40" stroke="{D}" stroke-width="2.5"/><ellipse cx="54" cy="32" rx="9" ry="8" fill="{D}"/>',None),
 ("mustache","Kumis",350,f'<path d="M43 44 Q36 38 28 42 Q24 46 30 47 Q36 46 43 44 Q50 46 56 47 Q62 46 58 42 Q50 38 43 44 Z" fill="{D}"/>',None),
 ("freckle","Bintik bintang",350,'<g fill="#ffc845"><path d="M22 42l1 2 2 .3-1.5 1.4.4 2.1-1.9-1-1.9 1 .4-2.1L19 44.3l2-.3z"/><path d="M64 42l1 2 2 .3-1.5 1.4.4 2.1-1.9-1-1.9 1 .4-2.1L61 44.3l2-.3z"/></g>',None),
 ("visor","Visor masa depan",450,'<path d="M16 24 Q43 18 70 24 L68 38 Q43 42 18 38 Z" fill="rgba(52,199,154,.55)" stroke="#21a37b" stroke-width="2"/><path d="M22 28 H40" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".8"/>',None),
 ("diving","Masker selam",500,'<rect x="16" y="20" width="54" height="22" rx="10" fill="rgba(160,210,255,.45)" stroke="#f59f1b" stroke-width="4"/><path d="M76 10 V40" stroke="#f59f1b" stroke-width="5" stroke-linecap="round"/>',None),
 ("monocle","Monokel",None,'<circle cx="54" cy="32" r="10" fill="rgba(255,255,255,.18)" stroke="#d9a21f" stroke-width="3"/><path d="M64 34 Q70 50 64 62" fill="none" stroke="#d9a21f" stroke-width="1.5"/>',["examc1","Simulasi tes dengan hasil C1"]),
 ("reader","Kacamata baca emas",None,'<path d="M20 34 H40 V30 Q30 26 20 30 Z M46 34 H66 V30 Q56 26 46 30 Z" fill="rgba(255,255,255,.2)" stroke="#d9a21f" stroke-width="3" stroke-linejoin="round"/><path d="M40 32 H46" stroke="#d9a21f" stroke-width="3"/>',["read18","Selesaikan 18 bacaan"]),
 ("goldstar","Bintang emas",None,'<path d="M32 19l3.8 7.7 8.5 1.2-6.2 6 1.5 8.5-7.6-4-7.6 4 1.5-8.5-6.2-6 8.5-1.2z" fill="#ffe07a" stroke="#c98a00" stroke-width="2"/><path d="M54 19l3.8 7.7 8.5 1.2-6.2 6 1.5 8.5-7.6-4-7.6 4 1.5-8.5-6.2-6 8.5-1.2z" fill="#ffe07a" stroke="#c98a00" stroke-width="2"/>',["perfect10","Skor 100% sebanyak 10 kali"]),
]
ACC = [
 ("none","Tanpa",0,"",None,"front"),
 ("bow","Dasi kupu-kupu",100,'<path d="M33 60 L43 66 L33 72 Z M53 60 L43 66 L53 72 Z" fill="#ff7a59"/><circle cx="43" cy="66" r="3.5" fill="#d9583a"/>',None,"front"),
 ("tie","Dasi kantor",120,'<path d="M39 62 H47 L45 67 L49 84 L43 90 L37 84 L41 67 Z" fill="#3f8cf0"/><path d="M40 72 L46 70 M39 78 L47 76" stroke="#2c6fd1" stroke-width="1.5"/>',None,"front"),
 ("scarf","Syal",150,'<path d="M16 58 Q43 70 70 58 L70 66 Q43 78 16 66 Z" fill="#ffc845"/><path d="M58 64 L64 84 L56 84 L52 66 Z" fill="#d9a21f"/>',None,"front"),
 ("flowerpin","Bunga di kepala",150,'<g transform="translate(66 10)"><circle cx="0" cy="-6" r="5" fill="#ff9bb3"/><circle cx="6" cy="0" r="5" fill="#ff9bb3"/><circle cx="0" cy="6" r="5" fill="#ff9bb3"/><circle cx="-6" cy="0" r="5" fill="#ff9bb3"/><circle cx="0" cy="0" r="4" fill="#ffc845"/></g>',None,"front"),
 ("bell","Kalung lonceng",180,'<path d="M20 62 Q43 72 66 62" fill="none" stroke="#e5484d" stroke-width="4"/><circle cx="43" cy="72" r="6" fill="#ffc845" stroke="#d9a21f" stroke-width="2"/><path d="M39 72 H47" stroke="#d9a21f" stroke-width="1.5"/>',None,"front"),
 ("pearls","Kalung mutiara",200,'<g fill="#fff" stroke="#dbe4f7" stroke-width="1"><circle cx="20" cy="54" r="3"/><circle cx="26" cy="57.5" r="3"/><circle cx="33" cy="60" r="3"/><circle cx="41" cy="61" r="3"/><circle cx="49" cy="61" r="3"/><circle cx="56" cy="60" r="3"/><circle cx="62" cy="57.5" r="3"/><circle cx="68" cy="54" r="3"/></g>',None,"front"),
 ("phones","Headphone",250,'<path d="M10 34 Q43 -12 76 34" fill="none" stroke="#24264a" stroke-width="6" stroke-linecap="round"/><rect x="3" y="26" width="12" height="20" rx="5" fill="#ff7a59"/><rect x="71" y="26" width="12" height="20" rx="5" fill="#ff7a59"/>',None,"front"),
 ("book","Buku",250,'<g transform="translate(78 44) rotate(10)"><rect x="-10" y="-12" width="20" height="26" rx="2" fill="#3f8cf0"/><rect x="-7" y="-9" width="14" height="5" rx="1" fill="#fff" opacity=".8"/><rect x="8" y="-12" width="3" height="26" fill="#2c6fd1"/></g>',None,"front"),
 ("mic","Mikrofon",300,'<g transform="translate(80 40) rotate(20)"><rect x="-2.5" y="2" width="5" height="22" rx="2" fill="#24264a"/><circle cx="0" cy="-2" r="8" fill="#64748b"/><path d="M-6 -4 H6 M-6 0 H6" stroke="#fff" stroke-width="1" opacity=".6"/></g>',None,"front"),
 ("balloon","Balon",300,'<path d="M78 70 Q82 40 86 16" fill="none" stroke="#55587a" stroke-width="1.5"/><ellipse cx="86" cy="2" rx="11" ry="14" fill="#e5484d"/><path d="M82 -4 Q84 -8 88 -8" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" opacity=".7"/>',None,"back"),
 ("cape","Jubah pahlawan",400,'<path d="M14 20 Q4 60 0 84 Q43 74 86 84 Q82 60 72 20 Z" fill="#e5484d"/>',None,"back"),
 ("backpack","Ransel",400,'<rect x="62" y="16" width="26" height="40" rx="9" fill="#f59f1b"/><rect x="66" y="34" width="18" height="14" rx="4" fill="#d9831a"/><path d="M66 18 Q60 30 64 50" fill="none" stroke="#d9831a" stroke-width="4"/>',None,"back"),
 ("lanyard","Kartu pelajar",450,'<path d="M24 58 L43 74 L62 58" fill="none" stroke="#3f8cf0" stroke-width="3"/><rect x="35" y="72" width="16" height="20" rx="3" fill="#fff" stroke="#dbe4f7" stroke-width="1.5"/><rect x="38" y="76" width="10" height="7" rx="1" fill="#c8f0df"/><path d="M38 87 H48" stroke="#55587a" stroke-width="1.5"/>',None,"front"),
 ("umbrella","Payung",500,'<path d="M58 -6 Q80 -26 102 -6 Z" fill="#14a3a3"/><path d="M80 -6 V52 Q80 58 74 56" fill="none" stroke="#24264a" stroke-width="2.5" stroke-linecap="round"/>',None,"back"),
 ("medal","Medali juara",None,'<path d="M33 56 L39 70 M53 56 L47 70" stroke="#3f8cf0" stroke-width="5"/><circle cx="43" cy="76" r="9" fill="#ffc845" stroke="#d9a21f" stroke-width="2.5"/><path d="M43 71l1.5 3 3.3.5-2.4 2.3.6 3.3-3-1.6-3 1.6.6-3.3-2.4-2.3 3.3-.5z" fill="#fff"/>',["streak7","Streak 7 hari"],"front"),
 ("trophy","Piala",None,'<g transform="translate(82 46)"><path d="M-9 -14 H9 V-4 Q9 6 0 7 Q-9 6 -9 -4 Z" fill="#ffc845" stroke="#d9a21f" stroke-width="2"/><path d="M-9 -10 Q-15 -10 -14 -4 Q-13 1 -8 0 M9 -10 Q15 -10 14 -4 Q13 1 8 0" fill="none" stroke="#d9a21f" stroke-width="2"/><rect x="-2" y="7" width="4" height="6" fill="#d9a21f"/><rect x="-7" y="13" width="14" height="5" rx="1.5" fill="#8b5e3c"/></g>',["exam90","Skor simulasi tes 90 ke atas"],"front"),
 ("wings","Sayap",None,'<path d="M12 24 Q-14 4 -12 34 Q-8 50 14 44 Z" fill="#e6e6ff" stroke="#9aa6d8" stroke-width="2"/><path d="M74 24 Q100 4 98 34 Q94 50 72 44 Z" fill="#e6e6ff" stroke="#9aa6d8" stroke-width="2"/><path d="M-4 22 Q2 30 4 40 M90 22 Q84 30 82 40" fill="none" stroke="#9aa6d8" stroke-width="2"/>',["streak100","Streak 100 hari"],"back"),
]
