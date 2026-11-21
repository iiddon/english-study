// Babak 2 dan 3: 40 soal tambahan per pelajaran (format sama dengan extra.js).
// Baris 1–20 = Babak 2, baris 21–40 = Babak 3.
const ROUNDS = {};
Object.assign(ROUNDS, {
b1: `
m|She ___ a nurse at the city hospital.|is|are|am|be|She memakai is.
m|You and Rina ___ in the same class.|are|is|am|be|You and Rina = you (jamak), jadi are.
m|___ I late for the meeting?|Am|Is|Are|Do|Kalimat tanya untuk I: Am I ...?
m|The weather ___ nice this morning.|is|are|am|be|The weather = it, jadi is.
m|___ name is Budi. He lives in Bandung.|His|He|Him|He's|Kepemilikan untuk laki-laki: his.
m|This is my cat. ___ name is Kiki.|Its|It's|It|Is|Kepemilikan untuk benda/hewan: its (tanpa apostrof).
m|"Is she your sister?" "No, she ___."|isn't|aren't|not|doesn't|Jawaban pendek negatif: No, she isn't.
m|Please call ___ tomorrow. Here is my number.|me|I|my|mine|Setelah kata kerja (call) pakai objek: me.
t|___ (we) are ready. Tulis kata gantinya dengan huruf kapital.|We|Subjek kata ganti orang pertama jamak: We.
t|Lengkapi: ___ you thirsty? Yes, I am.|Are|Pertanyaan untuk you memakai Are.
t|The books ___ on the table.|are|The books jamak, jadi are.
t|Bentuk singkat dari "she is":|she's|she is disingkat she's.
f|My mother is a doctor.|1|My mother = she, jadi is benar.
f|The students is in the library.|0|Students jamak: The students are in the library.
f|Is they your cousins?|0|Yang benar: Are they your cousins?
f|I'm not hungry right now.|1|I'm not = I am not. Benar.
o|My brother is a good cook.|Saudara laki-lakiku juru masak yang baik.
o|We are not at the office today.|Kami tidak di kantor hari ini.
o|Is your teacher from Japan?|Apakah gurumu dari Jepang?
o|They are my new neighbours.|Mereka tetangga baruku.
m|Dina and her husband ___ from Medan.|are|is|am|be|Dua orang = they, jadi are.
m|Where ___ your keys?|are|is|am|be|Keys jamak, jadi are.
m|Kata ganti yang tepat untuk "Andi and I":|we|they|us|you|Andi and I = we (sebagai subjek).
m|Our teacher gives ___ a lot of homework.|us|we|our|ours|Objek setelah gives: us.
m|"Who is that man?" "___ my uncle."|He's|His|He|Him's|He's = he is.
m|The coffee ___ too hot to drink.|is|are|am|be|Coffee tak terhitung, dianggap it: is.
m|I ___ not a morning person.|am|is|are|be|I + am.
m|That bag is not mine. It is ___.|hers|her|she|she's|Kata ganti kepemilikan berdiri sendiri: hers.
t|Bentuk singkat dari "we are not":|we aren't/we're not|we are not bisa disingkat we aren't atau we're not.
t|Lengkapi dengan is/are: Everybody ___ here now.|is|Everybody dianggap tunggal, jadi is.
t|Kata ganti objek untuk "they":|them|Objek dari they adalah them.
t|Lengkapi: My phone ___ in my bag.|is|My phone = it, jadi is.
f|Mr. and Mrs. Tan are very kind.|1|Dua orang, jadi are. Benar.
f|Me am from Bali.|0|Subjek harus I: I am from Bali.
f|The news is on TV at seven.|1|News dianggap tunggal, jadi is benar.
f|Your shoes is under the bed.|0|Shoes jamak: Your shoes are under the bed.
o|Are you and your sister twins?|Apakah kamu dan saudarimu kembar?
o|It is not my phone.|Itu bukan teleponku.
o|Her parents are very friendly.|Orang tuanya sangat ramah.
o|I am a little nervous today.|Aku sedikit gugup hari ini.
`,
b2: `
m|My father ___ to work by bus.|goes|go|going|is go|He/she/it + verb-s/es: goes.
m|We ___ breakfast at seven every day.|have|has|having|haves|We memakai bentuk dasar: have.
m|She ___ coffee. She prefers tea.|doesn't drink|don't drink|not drink|doesn't drinks|Negatif he/she/it: doesn't + verb dasar.
m|___ your brother play football?|Does|Do|Is|Are|Pertanyaan he/she/it: Does ...?
m|The shop ___ at nine in the morning.|opens|open|opening|is open at|The shop = it, jadi opens.
m|How often ___ you visit your grandparents?|do|does|are|is|Pertanyaan untuk you: do.
m|Water ___ at 100 degrees Celsius.|boils|boil|is boil|boiling|Fakta umum memakai simple present: boils.
m|My kids never ___ vegetables.|eat|eats|eating|to eat|My kids = they, kata kerja dasar: eat.
t|He ___ (watch) TV every evening.|watches|Kata kerja berakhiran -ch ditambah -es: watches.
t|She ___ (study) English on Mondays.|studies|Konsonan + y menjadi -ies: studies.
t|Lengkapi: I ___ (not/like) spicy food. Pakai bentuk singkat.|don't like|Negatif I: don't + verb dasar.
t|Lengkapi: ___ they live near here?|Do|Pertanyaan untuk they memakai Do.
f|My sister work in a bank.|0|Yang benar: My sister works in a bank.
f|Does he speak Japanese?|1|Does + verb dasar. Benar.
f|The train leave at 6 a.m.|0|Yang benar: The train leaves at 6 a.m.
f|We don't go to school on Sundays.|1|Negatif we: don't + verb dasar. Benar.
o|She always drinks water in the morning.|Dia selalu minum air di pagi hari.
o|Do you usually walk to work?|Apakah kamu biasanya berjalan kaki ke kantor?
o|My cat sleeps on the sofa.|Kucingku tidur di sofa.
o|He never forgets my birthday.|Dia tidak pernah lupa ulang tahunku.
m|Rudi ___ his teeth twice a day.|brushes|brush|brushs|is brush|Berakhiran -sh ditambah -es: brushes.
m|"Do you like jazz?" "No, I ___."|don't|doesn't|not|am not|Jawaban pendek untuk Do you: No, I don't.
m|Where ___ your sister work?|does|do|is|are|Your sister = she, jadi does.
m|I ___ to the gym three times a week.|go|goes|going|am go|I memakai bentuk dasar: go.
m|Posisi "usually" yang benar:|She usually gets up early.|She gets usually up early.|Usually she gets up usually early.|She gets up early usually always.|Kata keterangan frekuensi biasanya sebelum kata kerja utama.
m|The baby ___ a lot at night.|cries|crys|cry|crying|Konsonan + y menjadi -ies: cries.
m|My parents ___ in a small village.|live|lives|living|is live|My parents = they: live.
m|It ___ much in the dry season.|doesn't rain|don't rain|isn't rain|not rains|Negatif it: doesn't + verb dasar.
t|Bentuk he/she dari "have":|has|Have menjadi has untuk he/she/it.
t|Lengkapi: My friend ___ (fix) computers for a living.|fixes|Berakhiran -x ditambah -es: fixes.
t|Lengkapi: What time ___ the film start?|does|The film = it, jadi does.
t|Lengkapi: She ___ (not/eat) meat. Pakai bentuk singkat.|doesn't eat|Negatif she: doesn't + verb dasar.
f|I am usually go to bed at ten.|0|Jangan campur am dengan verb: I usually go to bed at ten.
f|Ali plays the guitar very well.|1|Ali = he, plays. Benar.
f|Does your parents know?|0|Your parents jamak: Do your parents know?
f|The sun rises in the east.|1|Fakta umum dengan simple present. Benar.
o|What do you usually have for lunch?|Biasanya kamu makan siang apa?
o|My brother doesn't like horror films.|Saudaraku tidak suka film horor.
o|The bus comes every ten minutes.|Bus datang setiap sepuluh menit.
o|Does she work on Saturdays?|Apakah dia bekerja di hari Sabtu?
`,
b3: `
m|I need ___ new phone.|a|an|the|-|New diawali bunyi konsonan, jadi a.
m|She is ___ honest person.|an|a|the|-|Honest diawali bunyi vokal (h tidak dibaca): an.
m|Look at ___ moon tonight!|the|a|an|-|Hanya ada satu bulan, jadi the.
m|Bentuk jamak dari "box":|boxes|boxs|boxen|boxies|Berakhiran -x ditambah -es.
m|Bentuk jamak dari "city":|cities|citys|cityes|cityies|Konsonan + y menjadi -ies.
m|There are three ___ in the garden.|mice|mouses|mouse|mices|Jamak tidak beraturan: mouse menjadi mice.
m|He plays ___ piano beautifully.|the|a|an|-|Alat musik biasanya memakai the.
m|I usually go to work by ___.|train|a train|the train|trains|Ungkapan by + kendaraan tanpa artikel.
t|Bentuk jamak dari "knife":|knives|-fe menjadi -ves: knives.
t|Bentuk jamak dari "foot":|feet|Jamak tidak beraturan: foot menjadi feet.
t|Lengkapi dengan a/an: She eats ___ apple every day.|an|Apple diawali bunyi vokal: an.
t|Bentuk jamak dari "potato":|potatoes|Beberapa kata berakhiran -o ditambah -es: potatoes.
f|I saw an university near the station.|0|University dibaca /ju:/ (bunyi konsonan): a university.
f|The children are playing outside.|1|Children adalah jamak dari child. Benar.
f|She has two babys.|0|Yang benar: two babies.
f|Can you close the door, please?|1|Pintu yang jelas dimaksud memakai the. Benar.
o|There is an orange on the table.|Ada sebuah jeruk di atas meja.
o|The women in the photo are my aunts.|Para perempuan di foto itu bibi-bibiku.
o|I want to buy a new umbrella.|Aku ingin membeli payung baru.
o|My sheep are in the field.|Domba-dombaku ada di ladang.
m|He is ___ engineer at a big company.|an|a|the|-|Engineer diawali bunyi vokal: an.
m|Terjemahan yang benar untuk "Saya suka kucing" (secara umum):|I like cats.|I like a cats.|I like cat.|I like an cats.|Pernyataan umum memakai jamak tanpa artikel.
m|Bentuk jamak dari "leaf":|leaves|leafs|leafes|leaf|-f menjadi -ves: leaves.
m|Bentuk jamak sehari-hari dari "person":|people|peoples|persones|personies|Jamak sehari-hari person adalah people.
m|We had ___ great time at the beach.|a|an|the|-|Ungkapan have a great time.
m|___ Nile is the longest river in Africa.|The|A|An|-|Nama sungai memakai the.
m|Bentuk jamak dari "fish" (ikan sejenis):|fish|fishs|fishies|fishen|Fish biasanya tetap fish dalam bentuk jamak.
m|My sister wants to be ___ doctor.|a|an|the|-|Profesi tunggal memakai a/an.
t|Bentuk jamak dari "tooth":|teeth|Jamak tidak beraturan: tooth menjadi teeth.
t|Lengkapi dengan a/an: It takes ___ hour to get there.|an|Hour diawali bunyi vokal (h tidak dibaca): an.
t|Bentuk jamak dari "bus":|buses|Berakhiran -s ditambah -es: buses.
t|Bentuk jamak dari "wife":|wives|-fe menjadi -ves: wives.
f|She is a European singer.|1|European dibaca /ju/ (bunyi konsonan), jadi a benar.
f|I have three childs.|0|Yang benar: three children.
f|The sun is very hot today.|1|Benda yang hanya satu memakai the. Benar.
f|He bought a eggs at the market.|0|Jamak tanpa a: He bought eggs / some eggs.
o|An elephant is a very big animal.|Gajah adalah hewan yang sangat besar.
o|The dishes are in the kitchen.|Piring-piring ada di dapur.
o|I have two brothers and a sister.|Aku punya dua saudara laki-laki dan satu saudara perempuan.
o|She is an English teacher.|Dia seorang guru bahasa Inggris.
`,
b4: `
m|There ___ a big tree in front of my house.|is|are|be|am|Satu benda tunggal: There is.
m|There ___ some apples in the basket.|are|is|be|am|Apples jamak: There are.
m|___ there any milk in the fridge?|Is|Are|Do|Has|Milk tak terhitung: Is there any milk?
m|The cat is sleeping ___ the bed.|under|in front|between of|at under|Under = di bawah.
m|My office is ___ the second floor.|on|in|at|under|Lantai bangunan memakai on.
m|The bank is ___ the post office and the bakery.|between|among|behind of|next|Di antara dua tempat: between.
m|She lives ___ Jakarta.|in|on|at|to|Kota memakai in.
m|There aren't ___ chairs in this room.|any|some|a|many of|Negatif jamak memakai any.
t|Lengkapi: There ___ two cars outside.|are|Two cars jamak: are.
t|Lawan kata "in front of":|behind|Lawan in front of adalah behind.
t|Lengkapi: The picture is ___ the wall. (menempel di dinding)|on|Menempel di permukaan memakai on.
t|Lengkapi: Is there ___ bank near here?|a|Bank tunggal terhitung: a bank.
f|There is three books on the desk.|0|Jamak: There are three books.
f|The keys are next to the laptop.|1|Next to = di sebelah. Benar.
f|There are a cat in the garden.|0|Tunggal: There is a cat.
f|We meet at the bus stop.|1|Titik/lokasi spesifik memakai at. Benar.
o|There is a pharmacy near the station.|Ada apotek di dekat stasiun.
o|Are there any eggs in the fridge?|Apakah ada telur di kulkas?
o|The shoes are under the chair.|Sepatunya di bawah kursi.
o|My house is opposite the mosque.|Rumahku di seberang masjid.
m|The children are ___ school now.|at|in|on|to|Ungkapan be at school.
m|Kalimat yang benar:|There isn't any sugar.|There aren't any sugar.|There isn't some sugar.|There no sugar.|Sugar tak terhitung: There isn't any sugar.
m|Put the milk ___ the fridge, please.|in|on|at|between|Di dalam ruang tertutup: in.
m|The lamp is ___ the table. (di atas, menempel)|on|in|at|between|Di atas permukaan: on.
m|How many students ___ in your class?|are there|there are|is there|there is|Pertanyaan jamak: How many ... are there?
m|The supermarket is ___ the end of the street.|at|in|on|to|Ungkapan at the end of the street.
m|There ___ a lot of people at the concert last night.|were|was|is|be|Lampau jamak: There were.
m|The cinema is ___ to the restaurant.|next|near to|beside of|between|Next to = di sebelah.
t|Lengkapi: There ___ some water in the bottle.|is|Water tak terhitung: There is.
t|Lengkapi: I live ___ Jalan Merdeka 12. (alamat lengkap)|at|Alamat lengkap dengan nomor memakai at.
t|Lawan kata "near":|far|Lawan near adalah far.
t|Lengkapi: The plane is flying ___ the clouds. (di atas, tidak menempel)|above/over|Di atas tanpa menempel: above atau over.
f|My phone is in my pocket.|1|Di dalam saku: in. Benar.
f|There is any bread left.|0|Positif memakai some: There is some bread left.
f|The hotel is between the beach.|0|Between butuh dua hal: between the beach and the market.
f|Is there a toilet on this floor?|1|Tunggal + on this floor. Benar.
o|There are two windows in my bedroom.|Ada dua jendela di kamar tidurku.
o|The bakery is behind the bank.|Toko roti ada di belakang bank.
o|Is there a parking area here?|Apakah ada area parkir di sini?
o|My bag is on the floor.|Tasku ada di lantai.
`,
b5: `
m|This is ___ car. (milik ayahku)|my father's|my fathers|my father|my fathers'|Kepemilikan tunggal: father's.
m|These shoes are ___ . (milikku)|mine|my|me|mine's|Kata ganti milik berdiri sendiri: mine.
m|___ book is this? Is it yours?|Whose|Who|Who's|Which's|Bertanya pemilik: Whose.
m|___ are my cousins over there.|Those|That|This|These one|Jamak dan jauh: those.
m|Look at ___ bird on my hand!|this|these|those|they|Tunggal dan dekat: this.
m|The ___ room is very messy. (kamar anak-anak)|children's|childrens'|childrens|children|Jamak tak beraturan + 's: children's.
m|Is this your pen or ___?|hers|her|she|her's|Berdiri sendiri: hers (tanpa apostrof).
m|The students' bags ___ in the classroom.|are|is|am|be|Bags jamak: are.
t|Kepemilikan untuk "we":|our|Kata sifat milik untuk we: our.
t|Lengkapi: That is ___ (Rina) phone.|Rina's|Kepemilikan nama: Rina's.
t|Bentuk jamak dari "this":|these|Jamak this adalah these.
t|Lengkapi: The house is ___ . (milik mereka)|theirs|Berdiri sendiri untuk they: theirs.
f|This are my friends.|0|Jamak dekat: These are my friends.
f|Whose umbrella is this?|1|Whose untuk menanyakan pemilik. Benar.
f|The dog wagged it's tail.|0|Kepemilikan it tanpa apostrof: its tail.
f|My parents' house is in Solo.|1|Parents jamak berakhiran s: parents'. Benar.
o|Is this your cousin's motorbike?|Apakah ini motor sepupumu?
o|Are these keys yours?|Apakah kunci-kunci ini milikmu?
o|That is not her wallet.|Itu bukan dompetnya (perempuan).
o|Those shoes are very expensive.|Sepatu-sepatu itu sangat mahal.
m|Our neighbours love ___ garden.|their|there|they're|theirs|Kepemilikan they sebelum kata benda: their.
m|"Is this Andi's bike?" "Yes, it's ___."|his|him|he|he's|Berdiri sendiri untuk he: his.
m|___ is my favourite song! Listen!|This|These|Those|They|Lagu yang sedang terdengar (dekat): this.
m|The ___ names are on the list. (nama para pemain)|players'|player's|players|player|Jamak berakhiran s: players'.
m|Pilih yang benar:|a friend of mine|a friend of me|a friend of my|a my friend|Pola: a friend of mine.
m|I like your dress. Where did you buy ___?|it|its|it's|this one's|Objek untuk dress: it.
m|Can I borrow ___ pencil? Mine is broken.|your|yours|you|you're|Sebelum kata benda: your.
m|These are ___ toys. (milik kucing-kucing)|the cats'|the cat's|the cats|the cat|Banyak kucing: cats'.
t|Lengkapi: That bag is ___ . (milik kami)|ours|Berdiri sendiri untuk we: ours.
t|Bentuk jamak dari "that":|those|Jamak that adalah those.
t|Lengkapi: ___ wallet is this? Pakai kata tanya.|Whose|Menanyakan pemilik: Whose.
t|Lengkapi: My ___ (sister) bedroom is upstairs.|sister's|Kepemilikan tunggal: sister's.
f|These is my favourite shirt.|0|Tunggal: This is my favourite shirt.
f|Is that your father's car?|1|Kepemilikan dengan 's. Benar.
f|The book is my.|0|Berdiri sendiri: The book is mine.
f|Those houses are new.|1|Jamak jauh: those. Benar.
o|Whose glasses are these?|Kacamata siapa ini?
o|My mother's cooking is the best.|Masakan ibuku yang terbaik.
o|This room is ours.|Kamar ini milik kami.
o|Is that your sister's laptop?|Apakah itu laptop saudarimu?
`,
b6: `
m|___ do you live? In Bogor.|Where|When|What|Who|Menanyakan tempat: Where.
m|___ is your birthday? In May.|When|Where|Who|Why|Menanyakan waktu: When.
m|___ is your favourite colour?|What|Who|Where|How|Menanyakan hal/benda: What.
m|___ is that woman? She's my aunt.|Who|What|Whose|Which|Menanyakan orang: Who.
m|___ are you sad? Because I lost my phone.|Why|What|How|When|Menanyakan alasan: Why.
m|___ old is your son?|How|What|Which|When|Menanyakan umur: How old.
m|___ brothers do you have?|How many|How much|How long|How old|Jumlah benda terhitung: How many.
m|___ does this shirt cost?|How much|How many|How long|What much|Menanyakan harga: How much.
t|Lengkapi: ___ time is it? It's three o'clock.|What|Ungkapan What time is it?
t|Lengkapi: ___ do you go to work? By motorbike.|How|Menanyakan cara: How.
t|Lengkapi: ___ way is the station, left or right?|Which|Memilih dari pilihan terbatas: Which.
t|Lengkapi: ___ often do you exercise?|How|Menanyakan frekuensi: How often.
f|Where you are from?|0|Urutan tanya: Where are you from?
f|What does she do?|1|Menanyakan pekerjaan. Benar.
f|How much apples do you want?|0|Apples terhitung: How many apples?
f|Who is your best friend?|1|Who untuk orang. Benar.
o|Where does your sister work?|Saudarimu bekerja di mana?
o|What time do you finish work?|Jam berapa kamu selesai kerja?
o|How long is the flight?|Berapa lama penerbangannya?
o|Why are you always late?|Kenapa kamu selalu terlambat?
m|___ is the bathroom, please?|Where|What|Which|Who|Menanyakan tempat: Where.
m|___ bag is yours, the red one or the blue one?|Which|What|Whose|Who|Memilih dari dua pilihan: Which.
m|___ water do you drink every day?|How much|How many|How often|How long|Water tak terhitung: How much.
m|___ far is your house from here?|How|What|Where|Which|Menanyakan jarak: How far.
m|Pilih pertanyaan yang benar:|What does he like?|What he likes?|What does he likes?|What likes he?|Does + verb dasar.
m|"___ did you call?" "My mother."|Who|Whose|Where|Which|Menanyakan orang (objek): Who.
m|___ do you usually get up? At 5:30.|What time|What day|How many|Which time of|Menanyakan jam: What time.
m|___ kind of music do you like?|What|How|Who|Where|Ungkapan What kind of ...
t|Lengkapi: ___ is your phone number?|What|Ungkapan What is your phone number?
t|Lengkapi: ___ did you arrive? Yesterday.|When|Menanyakan waktu: When.
t|Lengkapi: ___ are you? I'm fine, thanks.|How|Menanyakan kabar: How are you?
t|Lengkapi: ___ car is that? It's Mr. Lee's.|Whose|Menanyakan pemilik: Whose.
f|How many money do you have?|0|Money tak terhitung: How much money.
f|When does the shop close?|1|Pola When + does + subjek + verb. Benar.
f|Why you didn't come?|0|Urutan tanya: Why didn't you come?
f|Which floor do you live on?|1|Which + kata benda. Benar.
o|How many people work here?|Berapa banyak orang bekerja di sini?
o|What do you do on weekends?|Apa yang kamu lakukan di akhir pekan?
o|Who is your English teacher?|Siapa guru bahasa Inggrismu?
o|How do you spell your name?|Bagaimana mengeja namamu?
`
});
