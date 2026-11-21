// Kosakata tambahan per level untuk flashcard, Kata hari ini, dan Kataku. Format: kata|arti|tema
const VOCX = {
basic: `
mother|ibu|Keluarga
father|ayah|Keluarga
grandmother|nenek|Keluarga
grandfather|kakek|Keluarga
uncle|paman|Keluarga
aunt|bibi|Keluarga
cousin|sepupu|Keluarga
husband|suami|Keluarga
wife|istri|Keluarga
baby|bayi|Keluarga
rice|nasi; beras|Makanan
bread|roti|Makanan
egg|telur|Makanan
chicken|ayam|Makanan
fish|ikan|Makanan
vegetable|sayur|Makanan
fruit|buah|Makanan
water|air|Makanan
milk|susu|Makanan
breakfast|sarapan|Makanan
lunch|makan siang|Makanan
dinner|makan malam|Makanan
kitchen|dapur|Rumah
bedroom|kamar tidur|Rumah
bathroom|kamar mandi|Rumah
door|pintu|Rumah
window|jendela|Rumah
table|meja|Rumah
chair|kursi|Rumah
bed|tempat tidur|Rumah
head|kepala|Tubuh
hand|tangan|Tubuh
eye|mata|Tubuh
ear|telinga|Tubuh
mouth|mulut|Tubuh
leg|kaki (tungkai)|Tubuh
red|merah|Warna
blue|biru|Warna
green|hijau|Warna
yellow|kuning|Warna
black|hitam|Warna
white|putih|Warna
morning|pagi|Waktu
afternoon|siang; sore|Waktu
evening|malam (awal)|Waktu
today|hari ini|Waktu
tomorrow|besok|Waktu
week|minggu (7 hari)|Waktu
school|sekolah|Tempat
market|pasar|Tempat
hospital|rumah sakit|Tempat
office|kantor|Tempat
mosque|masjid|Tempat
eat|makan|Kata kerja
drink|minum|Kata kerja
sleep|tidur|Kata kerja
read|membaca|Kata kerja
write|menulis|Kata kerja
open|membuka|Kata kerja
close|menutup|Kata kerja
big|besar|Sifat
small|kecil|Sifat
`,
elem: `
ticket|tiket|Perjalanan
passport|paspor|Perjalanan
airport|bandara|Perjalanan
station|stasiun|Perjalanan
journey|perjalanan|Perjalanan
map|peta|Perjalanan
arrive|tiba|Perjalanan
depart|berangkat|Perjalanan
book (a room)|memesan (kamar)|Perjalanan
souvenir|oleh-oleh|Perjalanan
price|harga|Belanja
discount|diskon|Belanja
receipt|struk; kuitansi|Belanja
cashier|kasir|Belanja
change (money)|uang kembalian|Belanja
size|ukuran|Belanja
try on|mencoba (pakaian)|Belanja
customer|pelanggan|Belanja
headache|sakit kepala|Kesehatan
fever|demam|Kesehatan
cough|batuk|Kesehatan
medicine|obat|Kesehatan
pharmacy|apotek|Kesehatan
healthy|sehat|Kesehatan
sick|sakit|Kesehatan
rest|istirahat|Kesehatan
sunny|cerah|Cuaca
cloudy|berawan|Cuaca
rainy|hujan; musim hujan|Cuaca
windy|berangin|Cuaca
storm|badai|Cuaca
temperature|suhu|Cuaca
angry|marah|Perasaan
bored|bosan|Perasaan
excited|bersemangat|Perasaan
nervous|gugup|Perasaan
worried|khawatir|Perasaan
proud|bangga|Perasaan
lonely|kesepian|Perasaan
job|pekerjaan|Kerja
boss|atasan|Kerja
colleague|rekan kerja|Kerja
salary|gaji|Kerja
meeting|rapat|Kerja
busy|sibuk|Kerja
holiday|liburan|Kerja
neighbour|tetangga|Sehari-hari
invite|mengundang|Sehari-hari
borrow|meminjam|Sehari-hari
lend|meminjamkan|Sehari-hari
forget|lupa|Sehari-hari
remember|ingat|Sehari-hari
carry|membawa|Sehari-hari
clean|membersihkan; bersih|Sehari-hari
quiet|tenang; sepi|Sifat
noisy|berisik|Sifat
dangerous|berbahaya|Sifat
safe|aman|Sifat
delicious|lezat|Sifat
empty|kosong|Sifat
full|penuh; kenyang|Sifat
`,
inter: `
apply|melamar; mendaftar|Kerja & Studi
interview|wawancara|Kerja & Studi
experience|pengalaman|Kerja & Studi
skill|keterampilan|Kerja & Studi
career|karier|Kerja & Studi
degree|gelar|Kerja & Studi
scholarship|beasiswa|Kerja & Studi
deadline|batas waktu|Kerja & Studi
improve|meningkatkan|Kerja & Studi
achieve|mencapai|Kerja & Studi
pollution|polusi|Lingkungan
environment|lingkungan|Lingkungan
recycle|mendaur ulang|Lingkungan
waste|sampah; membuang-buang|Lingkungan
flood|banjir|Lingkungan
drought|kekeringan|Lingkungan
protect|melindungi|Lingkungan
energy|energi|Lingkungan
device|perangkat|Teknologi
download|mengunduh|Teknologi
password|kata sandi|Teknologi
update|memperbarui|Teknologi
battery|baterai|Teknologi
screen|layar|Teknologi
online|daring|Teknologi
the news|berita|Media
headline|judul berita|Media
advertisement|iklan|Media
audience|penonton; pendengar|Media
journalist|wartawan|Media
attract|menarik (perhatian)|Media
behaviour|perilaku|Orang
honest|jujur|Orang
generous|murah hati|Orang
patient|sabar; pasien|Orang
confident|percaya diri|Orang
reliable|dapat diandalkan|Orang
selfish|egois|Orang
polite|sopan|Orang
rude|kasar|Orang
argue|berdebat|Hubungan
apologise|meminta maaf|Hubungan
trust|percaya; kepercayaan|Hubungan
support|mendukung|Hubungan
rely on|mengandalkan|Hubungan
avoid|menghindari|Kata kerja
suggest|menyarankan|Kata kerja
prefer|lebih suka|Kata kerja
compare|membandingkan|Kata kerja
describe|menggambarkan|Kata kerja
explain|menjelaskan|Kata kerja
increase|meningkat|Kata kerja
reduce|mengurangi|Kata kerja
cancel|membatalkan|Kata kerja
although|meskipun|Penghubung
however|namun|Penghubung
instead|sebagai gantinya|Penghubung
especially|terutama|Penghubung
probably|mungkin|Penghubung
recently|baru-baru ini|Penghubung
`,
upper: `
achievement|prestasi|Kerja
negotiate|bernegosiasi|Kerja
promotion|kenaikan jabatan|Kerja
resign|mengundurkan diri|Kerja
hire|merekrut|Kerja
fire (someone)|memecat|Kerja
responsibility|tanggung jawab|Kerja
efficient|efisien|Kerja
profit|keuntungan|Bisnis
loss|kerugian|Bisnis
invest|berinvestasi|Bisnis
budget|anggaran|Bisnis
launch|meluncurkan|Bisnis
competitor|pesaing|Bisnis
supply|pasokan|Bisnis
demand|permintaan|Bisnis
government|pemerintah|Masyarakat
policy|kebijakan|Masyarakat
community|komunitas; masyarakat|Masyarakat
poverty|kemiskinan|Masyarakat
equality|kesetaraan|Masyarakat
crime|kejahatan|Masyarakat
volunteer|relawan|Masyarakat
issue|masalah; isu|Masyarakat
opinion|pendapat|Diskusi
argument|argumen; pertengkaran|Diskusi
convince|meyakinkan|Diskusi
persuade|membujuk|Diskusi
point of view|sudut pandang|Diskusi
disagree|tidak setuju|Diskusi
evidence|bukti|Diskusi
reasonable|masuk akal|Diskusi
anxious|cemas|Perasaan
frustrated|frustrasi|Perasaan
grateful|bersyukur; berterima kasih|Perasaan
embarrassed|malu|Perasaan
relieved|lega|Perasaan
disappointed|kecewa|Perasaan
overwhelmed|kewalahan|Perasaan
determined|bertekad|Perasaan
challenge|tantangan|Umum
solution|solusi|Umum
benefit|manfaat|Umum
risk|risiko|Umum
impact|dampak|Umum
purpose|tujuan|Umum
habit|kebiasaan|Umum
progress|kemajuan|Umum
estimate|memperkirakan|Kata kerja
require|membutuhkan|Kata kerja
involve|melibatkan|Kata kerja
deserve|layak mendapat|Kata kerja
encourage|mendorong; menyemangati|Kata kerja
prevent|mencegah|Kata kerja
establish|mendirikan|Kata kerja
obvious|jelas|Sifat
rare|langka|Sifat
essential|penting sekali|Sifat
temporary|sementara|Sifat
permanent|permanen|Sifat
`,
adv: `
acknowledge|mengakui|Kata kerja
anticipate|mengantisipasi|Kata kerja
undermine|melemahkan|Kata kerja
enhance|meningkatkan (kualitas)|Kata kerja
facilitate|memfasilitasi|Kata kerja
implement|menerapkan|Kata kerja
emphasise|menekankan|Kata kerja
justify|membenarkan; memberi alasan|Kata kerja
pursue|mengejar (tujuan)|Kata kerja
diminish|berkurang|Kata kerja
overcome|mengatasi|Kata kerja
cope with|menghadapi; mengatasi|Kata kerja
thrive|berkembang pesat|Kata kerja
deteriorate|memburuk|Kata kerja
substantial|cukup besar|Sifat
inevitable|tak terelakkan|Sifat
reluctant|enggan|Sifat
vulnerable|rentan|Sifat
ambiguous|ambigu|Sifat
genuine|asli; tulus|Sifat
crucial|sangat penting|Sifat
diverse|beragam|Sifat
sustainable|berkelanjutan|Sifat
controversial|kontroversial|Sifat
thorough|teliti; menyeluruh|Sifat
feasible|layak dilakukan|Sifat
consistent|konsisten|Sifat
outcome|hasil|Kata benda
approach|pendekatan|Kata benda
perspective|perspektif|Kata benda
consequence|akibat|Kata benda
priority|prioritas|Kata benda
assumption|asumsi|Kata benda
trend|tren|Kata benda
insight|wawasan|Kata benda
burden|beban|Kata benda
obstacle|hambatan|Kata benda
breakthrough|terobosan|Kata benda
setback|kemunduran|Kata benda
dilemma|dilema|Kata benda
nevertheless|meskipun demikian|Penghubung
thereby|dengan demikian|Penghubung
whereby|yang dengannya|Penghubung
notably|terutama; khususnya|Penghubung
presumably|barangkali; diduga|Penghubung
predominantly|sebagian besar|Penghubung
take for granted|menganggap remeh|Ungkapan
in the long run|dalam jangka panjang|Ungkapan
on the other hand|di sisi lain|Ungkapan
bear in mind|perlu diingat|Ungkapan
come to terms with|menerima (kenyataan)|Ungkapan
keep up with|mengikuti; mengimbangi|Ungkapan
stand out|menonjol|Ungkapan
make up for|menebus|Ungkapan
in terms of|dalam hal|Ungkapan
as a matter of fact|sebenarnya|Ungkapan
by no means|sama sekali tidak|Ungkapan
to a large extent|sebagian besar|Ungkapan
put forward|mengajukan (ide)|Ungkapan
`,
expert: `
meticulous|sangat teliti|Sifat
pragmatic|pragmatis|Sifat
eloquent|fasih; pandai bicara|Sifat
resilient|tangguh|Sifat
candid|terus terang|Sifat
complacent|berpuas diri|Sifat
ubiquitous|ada di mana-mana|Sifat
tenacious|gigih|Sifat
superficial|dangkal|Sifat
unprecedented|belum pernah terjadi|Sifat
plausible|masuk akal|Sifat
detrimental|merugikan|Sifat
lucrative|menguntungkan|Sifat
tedious|membosankan|Sifat
cumbersome|merepotkan|Sifat
scrutinise|meneliti dengan saksama|Kata kerja
mitigate|mengurangi (dampak)|Kata kerja
alleviate|meringankan|Kata kerja
reconcile|mendamaikan; menyelaraskan|Kata kerja
articulate|mengungkapkan dengan jelas|Kata kerja
corroborate|menguatkan (bukti)|Kata kerja
discern|membedakan; memahami|Kata kerja
exacerbate|memperparah|Kata kerja
advocate|menganjurkan; pembela|Kata kerja
undertake|melaksanakan|Kata kerja
leverage|memanfaatkan|Kata kerja
prioritise|memprioritaskan|Kata kerja
streamline|menyederhanakan (proses)|Kata kerja
delegate|mendelegasikan|Kata kerja
compromise|kompromi|Kata benda
consensus|mufakat|Kata benda
discrepancy|ketidaksesuaian|Kata benda
nuance|nuansa|Kata benda
paradigm|paradigma|Kata benda
rationale|alasan dasar|Kata benda
stakeholder|pemangku kepentingan|Kata benda
leeway|kelonggaran|Kata benda
hindsight|tinjauan ke belakang|Kata benda
caveat|catatan peringatan|Kata benda
a double-edged sword|pedang bermata dua|Idiom
the tip of the iceberg|puncak gunung es|Idiom
to cut to the chase|langsung ke intinya|Idiom
to think outside the box|berpikir kreatif|Idiom
to be on the fence|belum memutuskan|Idiom
to play it by ear|lihat situasi nanti|Idiom
to get the ball rolling|memulai sesuatu|Idiom
to read between the lines|memahami makna tersirat|Idiom
a steep learning curve|banyak hal baru yang harus dipelajari cepat|Idiom
back to square one|kembali ke awal|Idiom
to go back to the drawing board|merancang ulang dari awal|Idiom
ballpark figure|angka perkiraan kasar|Bisnis
win-win|saling menguntungkan|Bisnis
bottom line|hasil akhir; intinya|Bisnis
pain point|titik masalah pelanggan|Bisnis
low-hanging fruit|target yang mudah dicapai|Bisnis
heads-up|pemberitahuan awal|Bisnis
in a nutshell|singkatnya|Ungkapan
by and large|secara umum|Ungkapan
for the time being|untuk sementara|Ungkapan
to all intents and purposes|pada dasarnya|Ungkapan
`
};
