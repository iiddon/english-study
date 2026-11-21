// Pelajaran tambahan: 2 per level. Soal ditulis dalam format EXTRA (lihat extra.js).
const MORE = {
basic: [
 {id:"b5",title:"Possessives & This/That",theory:`<p><b>Possessive adjectives</b> menunjukkan kepemilikan dan selalu diikuti kata benda.</p>
<table><tr><th>Subjek</th><th>Milik</th><th>Contoh</th></tr>
<tr><td>I</td><td>my</td><td>my bag</td></tr><tr><td>you</td><td>your</td><td>your phone</td></tr>
<tr><td>he / she / it</td><td>his / her / its</td><td>his car, her book</td></tr>
<tr><td>we / they</td><td>our / their</td><td>our house, their dog</td></tr></table>
<p><b>'s</b> untuk milik orang: <i>Rina's bag</i>, <i>my father's car</i>. Kata jamak berakhiran -s cukup tambah apostrof: <i>my parents' house</i>.</p>
<h3>This / That / These / Those</h3>
<table><tr><th></th><th>Dekat</th><th>Jauh</th></tr><tr><td>Tunggal</td><td>this</td><td>that</td></tr><tr><td>Jamak</td><td>these</td><td>those</td></tr></table>
<p class="muted">Jangan tertukar: <b>its</b> (miliknya) vs <b>it's</b> (it is).</p>`,
 examples:[["This is my sister's room.","Ini kamar kakak perempuan saya."],["Those shoes are very expensive.","Sepatu-sepatu itu sangat mahal."],["Is this your phone?","Apakah ini ponselmu?"],["Their house is next to ours.","Rumah mereka di sebelah rumah kami."]],
 vocab:[["sister","saudara perempuan"],["brother","saudara laki-laki"],["room","kamar"],["shoes","sepatu"],["key","kunci"],["wallet","dompet"]],
 quiz:[]},
 {id:"b6",title:"Question Words (Wh-)",theory:`<p>Kata tanya dipakai untuk meminta informasi, bukan jawaban ya/tidak.</p>
<table><tr><td><b>What</b></td><td>apa</td></tr><tr><td><b>Where</b></td><td>di mana</td></tr><tr><td><b>When</b></td><td>kapan</td></tr><tr><td><b>Who</b></td><td>siapa</td></tr>
<tr><td><b>Why</b></td><td>mengapa</td></tr><tr><td><b>How</b></td><td>bagaimana</td></tr><tr><td><b>Which</b></td><td>yang mana</td></tr><tr><td><b>How much / How many</b></td><td>berapa (tak terhitung / terhitung)</td></tr></table>
<div class="formula">Wh- + to be + S …? → Where <u>is</u> the station?<br>Wh- + do/does + S + V1? → What <u>do</u> you <u>do</u>?</div>
<p class="muted">Jika <b>Who/What</b> menjadi subjek, tidak perlu do/does: <i>Who lives here?</i></p>`,
 examples:[["Where do you live?","Kamu tinggal di mana?"],["What time is it?","Jam berapa sekarang?"],["Why are you late?","Kenapa kamu terlambat?"],["How many brothers do you have?","Kamu punya berapa saudara laki-laki?"]],
 vocab:[["where","di mana"],["when","kapan"],["why","mengapa"],["how","bagaimana"],["which","yang mana"],["how much","berapa (harga/jumlah)"]],
 quiz:[]}
],
elem: [
 {id:"e5",title:"Countable & Uncountable",theory:`<p><b>Countable</b> (bisa dihitung): apple, chair, friend. <b>Uncountable</b> (tak bisa dihitung): water, money, rice, information, advice.</p>
<table><tr><th></th><th>Countable</th><th>Uncountable</th></tr>
<tr><td>banyak</td><td>many apples</td><td>much water</td></tr><tr><td>sedikit</td><td>a few apples</td><td>a little water</td></tr>
<tr><td>tanya</td><td>How many?</td><td>How much?</td></tr></table>
<p><b>some</b> untuk kalimat positif dan tawaran; <b>any</b> untuk kalimat negatif dan pertanyaan. <i>a lot of</i> cocok untuk keduanya.</p>
<p class="muted">Uncountable tidak memakai a/an dan tidak dijamakkan: <i>some advice</i>, bukan <i>an advice</i>.</p>`,
 examples:[["There isn't any milk in the fridge.","Tidak ada susu di kulkas."],["How much money do you need?","Kamu butuh uang berapa?"],["I have a few friends in Bandung.","Saya punya beberapa teman di Bandung."],["Would you like some tea?","Mau teh?"]],
 vocab:[["advice","saran"],["information","informasi"],["furniture","perabot"],["luggage","bagasi"],["a few","beberapa (terhitung)"],["a little","sedikit (tak terhitung)"]],
 quiz:[]},
 {id:"e6",title:"Prepositions of Time",theory:`<table><tr><th>Preposisi</th><th>Dipakai untuk</th><th>Contoh</th></tr>
<tr><td><b>at</b></td><td>jam, waktu tepat</td><td>at 7 o'clock, at night, at noon</td></tr>
<tr><td><b>on</b></td><td>hari dan tanggal</td><td>on Monday, on 17 August, on my birthday</td></tr>
<tr><td><b>in</b></td><td>bulan, tahun, musim, bagian hari</td><td>in May, in 2025, in the morning</td></tr></table>
<p>Tanpa preposisi: <i>last week, next month, this morning, every day, tomorrow</i>.</p>
<p><b>for</b> = selama (durasi), <b>during</b> = selama (dalam suatu peristiwa), <b>until</b> = sampai.</p>`,
 examples:[["The meeting starts at nine.","Rapatnya mulai jam sembilan."],["We go to church on Sunday.","Kami ke gereja hari Minggu."],["She was born in 1998.","Dia lahir tahun 1998."],["I usually study in the evening.","Saya biasanya belajar di malam hari."]],
 vocab:[["noon","tengah hari"],["midnight","tengah malam"],["weekend","akhir pekan"],["until","sampai"],["during","selama"],["birthday","ulang tahun"]],
 quiz:[]}
],
inter: [
 {id:"i5",title:"Past Continuous",theory:`<div class="formula">S + was/were + V-ing</div>
<p>Dipakai untuk aksi yang <b>sedang berlangsung</b> pada waktu tertentu di masa lalu.</p>
<ul><li>At 8 p.m. yesterday, I <b>was watching</b> TV.</li>
<li>Aksi panjang disela aksi pendek: I <b>was cooking when</b> the phone <b>rang</b>.</li>
<li>Dua aksi bersamaan: She <b>was reading while</b> he <b>was sleeping</b>.</li></ul>
<p class="muted"><b>when</b> + simple past (aksi pendek), <b>while</b> + past continuous (aksi panjang).</p>`,
 examples:[["I was sleeping when you called.","Saya sedang tidur waktu kamu menelepon."],["What were you doing at ten last night?","Kamu sedang apa jam sepuluh tadi malam?"],["It was raining all morning.","Hujan turun sepanjang pagi."],["While I was walking home, I saw an accident.","Saat berjalan pulang, saya melihat kecelakaan."]],
 vocab:[["while","sementara, saat"],["suddenly","tiba-tiba"],["ring (rang)","berdering"],["accident","kecelakaan"],["fall asleep","tertidur"],["interrupt","menyela"]],
 quiz:[]},
 {id:"i6",title:"Used to & Would",theory:`<p><b>used to + V1</b>: kebiasaan atau keadaan di masa lalu yang <b>sekarang tidak lagi</b>.</p>
<div class="formula">(+) I used to play football.<br>(−) I didn't use to like coffee.<br>(?) Did you use to live here?</div>
<p><b>would + V1</b> juga bisa untuk kebiasaan berulang di masa lalu, tapi <u>tidak</u> untuk keadaan (live, have, like, be).</p>
<h3>Jangan tertukar</h3><ul><li><b>be used to + V-ing</b> = sudah terbiasa: <i>I'm used to waking up early.</i></li>
<li><b>get used to + V-ing</b> = mulai terbiasa: <i>She's getting used to the cold.</i></li></ul>`,
 examples:[["I used to live in Medan.","Dulu saya tinggal di Medan."],["We would play outside every afternoon.","Dulu kami selalu main di luar setiap sore."],["Did you use to wear glasses?","Dulu kamu pakai kacamata?"],["I'm used to working at night.","Saya sudah terbiasa bekerja malam hari."]],
 vocab:[["childhood","masa kecil"],["glasses","kacamata"],["habit","kebiasaan"],["neighbourhood","lingkungan rumah"],["anymore","lagi (dalam negatif)"],["get used to","mulai terbiasa"]],
 quiz:[]}
],
upper: [
 {id:"u5",title:"Past Perfect",theory:`<div class="formula">S + had + V3</div>
<p>Dipakai untuk kejadian yang terjadi <b>lebih dulu</b> sebelum kejadian lain di masa lalu.</p>
<ul><li>When we arrived, the film <b>had</b> already <b>started</b>. (film mulai dulu, lalu kami tiba)</li>
<li>She <b>had never seen</b> snow before she went to Japan.</li>
<li>Penanda: before, after, by the time, already, never … before.</li></ul>
<p class="muted">Jika urutan sudah jelas dari <i>after/before</i>, simple past juga sering diterima.</p>`,
 examples:[["When I got to the station, the train had left.","Waktu saya sampai di stasiun, keretanya sudah berangkat."],["She had finished dinner before he called.","Dia sudah selesai makan malam sebelum dia menelepon."],["I had never flown before that trip.","Saya belum pernah naik pesawat sebelum perjalanan itu."],["By the time we arrived, everyone had gone home.","Saat kami tiba, semua orang sudah pulang."]],
 vocab:[["by the time","pada saat"],["already","sudah"],["realise","menyadari"],["leave (left)","berangkat"],["forget (forgot)","lupa"],["earlier","lebih awal"]],
 quiz:[]},
 {id:"u6",title:"Modals of Deduction",theory:`<p>Dipakai untuk <b>menebak dengan logika</b> berdasarkan bukti.</p>
<table><tr><th>Keyakinan</th><th>Sekarang</th><th>Masa lalu</th></tr>
<tr><td>Hampir pasti ya</td><td>must + V1</td><td>must have + V3</td></tr>
<tr><td>Mungkin</td><td>might / may / could + V1</td><td>might / may / could have + V3</td></tr>
<tr><td>Hampir pasti tidak</td><td>can't + V1</td><td>can't / couldn't have + V3</td></tr></table>
<p class="muted">Untuk tebakan negatif, pakai <b>can't</b>, bukan <i>mustn't</i> (mustn't = dilarang).</p>`,
 examples:[["He must be tired. He worked all night.","Dia pasti lelah. Dia kerja semalaman."],["She can't be at home. Her car is gone.","Dia tidak mungkin di rumah. Mobilnya tidak ada."],["They might have missed the bus.","Mereka mungkin ketinggalan bus."],["You must have been very happy.","Kamu pasti sangat senang waktu itu."]],
 vocab:[["evidence","bukti"],["guess","menebak"],["certain","pasti"],["probably","kemungkinan besar"],["impossible","tidak mungkin"],["conclusion","kesimpulan"]],
 quiz:[]}
],
adv: [
 {id:"a5",title:"Participle Clauses",theory:`<p>Participle clause memadatkan dua klausa menjadi satu agar tulisan lebih ringkas dan alami.</p>
<ul><li><b>Present participle (V-ing)</b>, aktif atau bersamaan: <i><b>Walking</b> home, I met an old friend.</i></li>
<li><b>Past participle (V3)</b>, pasif: <i><b>Built</b> in 1900, the house needs repairs.</i></li>
<li><b>Having + V3</b>, selesai lebih dulu: <i><b>Having finished</b> the report, she went home.</i></li></ul>
<p class="muted">Subjek kedua klausa harus <b>sama</b>. "Walking home, the rain started" salah, karena hujan tidak berjalan pulang.</p>`,
 examples:[["Feeling tired, I went to bed early.","Karena merasa lelah, saya tidur lebih awal."],["Written in 1990, the book is still popular.","Ditulis tahun 1990, buku itu masih populer."],["Having lost my key, I couldn't get in.","Karena kehilangan kunci, saya tidak bisa masuk."],["The woman sitting by the window is my aunt.","Wanita yang duduk di dekat jendela adalah bibi saya."]],
 vocab:[["concise","ringkas"],["repair","perbaikan"],["aunt","bibi"],["consequently","akibatnya"],["simultaneously","bersamaan"],["clause","klausa"]],
 quiz:[]},
 {id:"a6",title:"Future Perfect & Continuous",theory:`<table><tr><th>Tense</th><th>Pola</th><th>Fungsi</th></tr>
<tr><td>Future continuous</td><td>will be + V-ing</td><td>sedang berlangsung pada waktu tertentu di masa depan</td></tr>
<tr><td>Future perfect</td><td>will have + V3</td><td>sudah selesai sebelum waktu tertentu di masa depan</td></tr>
<tr><td>Future perfect continuous</td><td>will have been + V-ing</td><td>durasi sampai titik di masa depan</td></tr></table>
<ul><li>This time tomorrow, I <b>will be flying</b> to Bali.</li><li>By 2030, I <b>will have graduated</b>.</li>
<li>By June, she <b>will have been working</b> here for ten years.</li></ul>
<p class="muted">Penanda future perfect: <b>by</b> (paling lambat), by the time, by then.</p>`,
 examples:[["By next year, I will have saved enough money.","Tahun depan, saya sudah menabung cukup uang."],["Don't call at eight. I'll be having dinner.","Jangan telepon jam delapan. Saya sedang makan malam."],["Will you be using the car tonight?","Apakah kamu akan memakai mobil malam ini?"],["By Friday, we will have finished the project.","Paling lambat Jumat, proyek ini sudah selesai."]],
 vocab:[["by then","pada saat itu"],["graduate","lulus kuliah"],["deadline","tenggat"],["complete","menyelesaikan"],["this time tomorrow","besok pada jam yang sama"],["retire","pensiun"]],
 quiz:[]}
],
expert: [
 {id:"x5",title:"Ellipsis & Substitution",theory:`<p>Penutur asli menghindari pengulangan dengan menghilangkan atau mengganti bagian kalimat.</p>
<table><tr><th>Bentuk</th><th>Contoh</th></tr>
<tr><td>so / neither + aux + S</td><td>"I love jazz." "<b>So do I</b>." · "I can't swim." "<b>Neither can I</b>."</td></tr>
<tr><td>do so</td><td>He promised to call, but he didn't <b>do so</b>.</td></tr>
<tr><td>one / ones</td><td>I don't like the red shirt. I prefer the blue <b>one</b>.</td></tr>
<tr><td>so / not</td><td>"Will it rain?" "I hope <b>not</b>." · "I think <b>so</b>."</td></tr>
<tr><td>auxiliary saja</td><td>She said she'd help, and she <b>did</b>.</td></tr></table>`,
 examples:[["I'm tired. So am I.","Saya lelah. Saya juga."],["She hasn't finished, and neither have I.","Dia belum selesai, saya juga belum."],["Is he coming? I'm afraid not.","Dia datang? Sepertinya tidak."],["These boxes are heavy, but those ones are light.","Kotak-kotak ini berat, tapi yang itu ringan."]],
 vocab:[["neither","juga tidak"],["I'm afraid not","sayangnya tidak"],["I suppose so","saya kira begitu"],["redundant","berlebihan"],["avoid repetition","menghindari pengulangan"],["prefer","lebih suka"]],
 quiz:[]},
 {id:"x6",title:"Professional English",theory:`<p>Bahasa Inggris untuk email, rapat, dan wawancara kerja: sopan, jelas, dan tidak terlalu langsung.</p>
<table><tr><th>Terlalu langsung</th><th>Profesional</th></tr>
<tr><td>Send me the file.</td><td>Could you please send me the file?</td></tr>
<tr><td>I want a meeting.</td><td>Would it be possible to arrange a meeting?</td></tr>
<tr><td>You're wrong.</td><td>I see your point, but I'd suggest …</td></tr>
<tr><td>Sorry for late reply.</td><td>Apologies for the delayed response.</td></tr></table>
<h3>Frasa email</h3><ul><li>I'm writing to follow up on … / Please find attached …</li><li>I look forward to hearing from you.</li><li>Let me know if you have any questions.</li></ul>
<h3>Rapat</h3><ul><li>Could I add something here? / Let's move on to the next point.</li><li>To sum up, … / Let's touch base next week.</li></ul>`,
 examples:[["Please find the report attached.","Terlampir laporannya."],["Could we reschedule the meeting to Thursday?","Bisakah rapatnya dijadwal ulang ke Kamis?"],["I look forward to hearing from you.","Saya menantikan kabar dari Anda."],["Let's touch base next week.","Mari kita berkabar lagi minggu depan."]],
 vocab:[["follow up","menindaklanjuti"],["attached","terlampir"],["reschedule","menjadwal ulang"],["deadline","tenggat waktu"],["touch base","berkabar, sinkronisasi"],["agenda","agenda rapat"]],
 quiz:[]}
]
};

Object.assign(EXTRA, {
b5: `
m|This is ___ bag. (milik saya)|my|me|mine|I|Possessive adjective untuk I adalah my, diikuti kata benda.
m|___ name is Budi. (milik dia, laki-laki)|His|He|Her|Him|Laki-laki → his.
m|Is this ___ phone? (milik kamu)|your|you|yours|you're|you → your + kata benda.
m|They love ___ new house.|their|there|they're|them|Milik mereka → their.
m|___ books on the table are mine. (jamak, dekat)|These|This|That|Those|Jamak dan dekat → these.
m|Look at ___ birds in the sky! (jamak, jauh)|those|these|that|this|Jamak dan jauh → those.
m|This is ___ car.|my father's|my fathers|my father|my's father|Kepemilikan orang: father's.
m|The dog is wagging ___ tail.|its|it's|it|his|Milik benda/hewan → its (tanpa apostrof).
m|We visited ___ grandmother last week.|our|us|we|ours|we → our.
m|Is ___ your umbrella over there? (tunggal, jauh)|that|this|these|those|Tunggal dan jauh → that.
m|She lost ___ keys yesterday.|her|she|hers|his|she → her.
t|This is Rina. ___ brother is a doctor. (milik Rina)|Her/her|Milik perempuan → her.
t|___ shoes are under the bed. (jamak, dekat)|These/these|Jamak dan dekat → these.
t|Tulis bentuk kepemilikan: the house of my parents → my ___ house.|parents'|Jamak berakhiran -s cukup tambah apostrof.
f|It's tail is long.|0|Yang benar: Its tail is long. (it's = it is)
f|Those are my friends' bikes.|1|those = jamak jauh; friends' = milik beberapa teman.
f|This shoes are new.|0|shoes jamak → These shoes are new.
o|This is my brother's room.|Ini kamar saudara laki-laki saya.
o|Is that your new car?|Apakah itu mobil barumu?
o|Their children are very polite.|Anak-anak mereka sangat sopan.
`,
b6: `
m|___ do you live? (di mana)|Where|What|When|Who|di mana → Where.
m|___ is your birthday? (kapan)|When|Where|Why|Which|kapan → When.
m|___ is that man? (siapa)|Who|What|Where|How|siapa → Who.
m|___ are you sad? (mengapa)|Why|What|Who|Which|mengapa → Why.
m|___ old are you?|How|What|Who|Which|How old = berapa umur.
m|___ many people are in your family?|How|What|Which|Who|How many + benda terhitung.
m|___ much is this shirt?|How|What|Why|Where|How much = berapa harga.
m|___ do you do?|What|Who|Where|How|What do you do? = apa pekerjaanmu?
m|___ colour do you prefer, red or blue?|Which|What|Who|How|Memilih dari pilihan terbatas → Which.
m|Where ___ she work?|does|do|is|are|she + kata kerja → does.
m|Who ___ in that house?|lives|does live|do lives|living|Who sebagai subjek → tanpa do/does, kata kerja + s.
t|___ time is it? (jam berapa)|What/what|What time = jam berapa.
t|Where ___ you going? (to be)|are|you + are + V-ing.
t|___ do you get to work? By bus. (bagaimana)|How/how|Cara → How.
f|Where you live?|0|Perlu do: Where do you live?
f|What does your father do?|1|What + does + S + V1.
f|Who does live next door?|0|Who sebagai subjek: Who lives next door?
o|What time does the class start?|Jam berapa kelasnya mulai?
o|Why are you so happy today?|Kenapa kamu sangat senang hari ini?
o|How many languages do you speak?|Kamu bisa berbicara berapa bahasa?
`,
e5: `
m|How ___ water do you drink every day?|much|many|few|lot|water tak terhitung → much.
m|How ___ eggs do we need?|many|much|little|lot|eggs terhitung → many.
m|There isn't ___ sugar left.|any|some|many|a few|Kalimat negatif → any.
m|Can I have ___ water, please?|some|any|many|a few|Permintaan atau tawaran → some.
m|She gave me some good ___.|advice|advices|an advice|a advice|advice tak terhitung, tidak dijamakkan.
m|I have ___ friends in Jakarta, so I'm not lonely.|a few|a little|much|any|friends terhitung → a few.
m|There's ___ milk left. Let's buy more.|only a little|only a few|many|a lot|milk tak terhitung → a little.
m|Mana yang tak terhitung (uncountable)?|information|chair|apple|student|information tidak bisa dihitung.
m|We don't have ___ time. Hurry!|much|many|a few|few|time (waktu) tak terhitung → much.
m|There are ___ people at the concert.|a lot of|much|a little|any|a lot of cocok untuk terhitung maupun tak terhitung.
m|Is there ___ bread in the kitchen?|any|some|many|a few|Kalimat tanya → any.
t|How ___ money do you have? (much/many)|much|money tak terhitung → much.
t|I need ___ information about the course. (some/any)|some|Kalimat positif → some.
t|Tulis kata tanya untuk benda terhitung: How ___ chairs?|many|chairs terhitung → many.
f|I need an advice.|0|advice tak terhitung: I need some advice.
f|There are a few apples on the table.|1|apples terhitung → a few.
f|How many money do you have?|0|money tak terhitung → How much money.
o|There is not any milk left.|Tidak ada susu tersisa.
o|How much sugar do you want?|Kamu mau gula berapa banyak?
o|I have a few questions for you.|Saya punya beberapa pertanyaan untukmu.
`,
e6: `
m|The class starts ___ 8 a.m.|at|on|in|by|Jam → at.
m|My birthday is ___ March.|in|on|at|by|Bulan → in.
m|We have a meeting ___ Monday.|on|in|at|by|Hari → on.
m|She was born ___ 2001.|in|on|at|for|Tahun → in.
m|I usually go jogging ___ the morning.|in|on|at|by|in the morning (pagi hari).
m|The shop is closed ___ night.|at|in|on|by|at night (pengecualian).
m|We celebrate independence ___ 17 August.|on|in|at|by|Tanggal → on.
m|I'll see you ___ next week.|(tanpa preposisi)|on|in|at|next week tidak memakai preposisi.
m|I lived in Bali ___ three years.|for|during|since|in|Durasi → for.
m|Please wait here ___ I come back.|until|during|for|since|sampai → until.
m|He fell asleep ___ the film.|during|for|until|at|selama (dalam suatu peristiwa) → during.
t|The train leaves ___ 6:30.|at|Jam → at.
t|We go to the beach ___ summer.|in|Musim → in.
t|The party is ___ Saturday night.|on|Hari tertentu → on (on Saturday night).
f|I was born in 15 June.|0|Tanggal memakai on: I was born on 15 June.
f|We have English class on Tuesdays.|1|Hari → on.
f|I'll call you at tomorrow.|0|tomorrow tidak memakai preposisi: I'll call you tomorrow.
o|The shop opens at nine in the morning.|Tokonya buka jam sembilan pagi.
o|We are going to Bali in December.|Kami akan ke Bali bulan Desember.
o|I studied English for two years.|Saya belajar bahasa Inggris selama dua tahun.
`,
i5: `
m|At 9 p.m. yesterday, I ___ TV.|was watching|watched|am watching|were watching|Aksi berlangsung pada waktu tertentu di masa lalu → was + V-ing.
m|They ___ football when it started to rain.|were playing|was playing|played|are playing|They → were + V-ing.
m|I was cooking when the phone ___.|rang|was ringing|rings|ringing|Aksi pendek yang menyela → simple past.
m|___ she was sleeping, someone knocked on the door.|While|When|During|For|while + aksi panjang (past continuous).
m|What ___ you doing at midnight?|were|was|did|are|you → were.
m|He ___ when I saw him. He looked happy.|was smiling|smiled|smiles|is smiling|Keadaan yang sedang berlangsung saat itu.
m|It ___ all night, so the roads were wet.|was raining|rained|is raining|were raining|Aksi panjang di masa lalu.
m|She broke her leg while she ___.|was skiing|skied|skis|is skiing|while + past continuous.
m|I ___ the answer at that moment.|didn't know|wasn't knowing|don't know|weren't knowing|know adalah stative verb, tidak memakai -ing.
m|While we were having dinner, the lights ___ out.|went|were going|go|was going|Aksi pendek → simple past.
m|They weren't ___ attention.|paying|pay|paid|pays|was/were + V-ing.
t|I ___ (walk) home when I saw the accident.|was walking|I + was + V-ing.
t|We ___ (wait) for you at 7 o'clock.|were waiting|We + were + V-ing.
t|Tulis kata penghubung untuk aksi panjang: ___ I was reading, he was sleeping.|While/while|Dua aksi panjang bersamaan → while.
f|I was sleeping when you called.|1|Aksi panjang (sleeping) disela aksi pendek (called).
f|She were cooking dinner.|0|She → was: She was cooking dinner.
f|When I was arriving, they left.|0|Aksi pendek memakai simple past: When I arrived, they were leaving / had left.
o|I was taking a shower when you called.|Saya sedang mandi waktu kamu menelepon.
o|What were you doing last night?|Kamu sedang apa tadi malam?
o|It was raining when we left.|Hujan sedang turun saat kami berangkat.
`,
i6: `
m|I ___ play the guitar, but I stopped.|used to|use to|am used to|would to|Kebiasaan masa lalu yang sudah berhenti → used to.
m|Did you ___ live in Surabaya?|use to|used to|using to|uses to|Setelah did → use to (tanpa d).
m|She didn't ___ like vegetables.|use to|used to|uses to|using to|Setelah didn't → use to.
m|When I was a child, we ___ go fishing every Sunday.|would|will|are|did use|would untuk tindakan berulang di masa lalu.
m|I ___ have long hair. (keadaan, bukan tindakan)|used to|would|am used to|was used|Keadaan (have) tidak memakai would.
m|I'm used to ___ up early.|getting|get|got|gets|be used to + V-ing.
m|She's getting used to ___ in a big city.|living|live|lived|lives|get used to + V-ing.
m|"I used to smoke" artinya…|Dulu saya merokok, sekarang tidak.|Saya terbiasa merokok.|Saya sedang merokok.|Saya akan merokok.|used to = kebiasaan masa lalu yang sudah berhenti.
m|"I'm used to the noise" artinya…|Saya sudah terbiasa dengan bisingnya.|Dulu ada bising.|Saya memakai bising.|Saya tidak tahan bising.|be used to = sudah terbiasa.
m|There ___ be a cinema here, but now it's a mall.|used to|would|is used to|uses to|Keadaan masa lalu → used to.
m|He ___ working night shifts, so he isn't tired.|is used to|used to|use to|would|Sudah terbiasa → be used to + V-ing.
t|We ___ to live in Bandung. (dulu)|used|used to.
t|Did she ___ to work here? (satu kata)|use|Setelah did → use.
t|I'm not used to ___ (drive) on the left.|driving|be used to + V-ing.
f|I would have a dog when I was young.|0|have adalah keadaan; pakai used to: I used to have a dog.
f|We used to visit our grandparents every holiday.|1|Kebiasaan masa lalu → used to + V1.
f|I'm used to wake up early.|0|be used to + V-ing: I'm used to waking up early.
o|I used to live near the sea.|Dulu saya tinggal dekat laut.
o|She is used to working late.|Dia sudah terbiasa kerja sampai larut.
o|Did you use to play football?|Dulu kamu main sepak bola?
`,
u5: `
m|When we arrived, the film ___ already started.|had|has|have|was|Kejadian lebih dulu → had + V3.
m|She ___ never seen the sea before she moved to Bali.|had|has|was|did|Pengalaman sebelum titik di masa lalu → had + V3.
m|By the time I got there, everyone ___.|had left|left|has left|was leaving|By the time + past → past perfect.
m|I couldn't pay because I ___ my wallet.|had lost|have lost|was losing|lose|Kehilangan terjadi lebih dulu.
m|After he ___ his homework, he went out.|had finished|has finished|finishes|was finished|Selesai dulu, lalu pergi.
m|They were tired because they ___ all day.|had worked|have worked|work|were work|Penyebab yang terjadi sebelumnya.
m|___ you ever been abroad before 2020?|Had|Have|Did|Were|Tanya past perfect → Had + S + V3.
m|I realised I ___ the oven on.|had left|have left|leave|was leave|Meninggalkan oven terjadi lebih dulu.
m|The plane ___ when we reached the airport.|had taken off|has taken off|takes off|had take off|had + V3 (taken).
m|She told me she ___ the book twice.|had read|has read|reads|was read|Reported speech + kejadian lebih dulu.
m|V3 dari 'begin' adalah…|begun|began|begined|beginned|begin – began – begun.
t|When I woke up, my mother ___ (cook) breakfast already.|had cooked|Memasak terjadi lebih dulu → had + V3.
t|I ___ (not / meet) him before the party. Tulis dengan bentuk singkat.|hadn't met/had not met|Negatif → hadn't + V3.
t|By 10 p.m., we ___ (finish) the project.|had finished|By + waktu lampau → had + V3.
f|When I arrived, the train has left.|0|Yang benar: When I arrived, the train had left.
f|She had already eaten when I called her.|1|Makan terjadi sebelum telepon.
f|I had saw that film before.|0|Harus V3: I had seen that film before.
o|The meeting had started when I arrived.|Rapat sudah mulai saat saya tiba.
o|I had never tried durian before.|Saya belum pernah mencoba durian sebelumnya.
o|She had gone home by six.|Dia sudah pulang jam enam.
`,
u6: `
m|He's been working for 12 hours. He ___ be exhausted.|must|can't|mustn't|should|Bukti kuat → must.
m|She ___ be at home. I just saw her at the mall.|can't|must|might|should|Hampir pasti tidak → can't.
m|I'm not sure where Tom is. He ___ be in the library.|might|must|can't|mustn't|Tidak yakin → might.
m|The ground is wet. It ___ have rained.|must|can't|mustn't|shouldn't|Bukti → must have + V3.
m|He ___ have stolen the money. He was with me all day.|can't|must|might|should|Tidak mungkin → can't have + V3.
m|They ___ have missed the bus. They're very late.|might|can't|mustn't|shouldn't|Kemungkinan → might have + V3.
m|You ___ be hungry. You haven't eaten since morning.|must|can't|mightn't|shouldn't|Hampir pasti → must.
m|The lights are off. They ___ be asleep.|might|mustn't|can't|shouldn't|Mungkin → might.
m|She ___ have forgotten. I reminded her three times!|can't|must|might|should|Tidak mungkin lupa → can't have.
m|Untuk tebakan 'pasti tidak' gunakan…|can't|mustn't|don't must|shouldn't|mustn't = dilarang, bukan tebakan.
m|"He must have left" artinya…|Dia pasti sudah pergi.|Dia harus pergi.|Dia mungkin akan pergi.|Dia tidak boleh pergi.|must have + V3 = tebakan kuat tentang masa lalu.
t|The lights are on. Someone ___ be at home. (hampir pasti)|must|Bukti kuat → must.
t|She ___ have taken the wrong train. (mungkin, diawali m)|might/may|might/may have + V3 = mungkin.
t|He ___ have seen me. I was hiding. (tidak mungkin)|can't/couldn't|can't/couldn't have + V3.
f|She mustn't be at home; her car isn't there.|0|Tebakan negatif memakai can't: She can't be at home.
f|They must have forgotten about the meeting.|1|must have + V3 = tebakan kuat masa lalu.
f|He might has missed the call.|0|Setelah modal pakai have: He might have missed the call.
o|She must be very tired.|Dia pasti sangat lelah.
o|They might have gone home.|Mereka mungkin sudah pulang.
o|He can't be serious.|Dia tidak mungkin serius.
`,
a5: `
m|___ tired, I went to bed early.|Feeling|Felt|To feel|Feel|Alasan yang aktif → V-ing.
m|___ in 1900, the house needs many repairs.|Built|Building|Having building|Build|Makna pasif → V3.
m|___ finished the report, she went home.|Having|Had|Being|Have|Selesai lebih dulu → Having + V3.
m|The man ___ next to me was very loud.|sitting|sat|sits|was sitting|Reduced relative clause aktif → V-ing.
m|The cars ___ in this factory are exported.|made|making|make|having made|Reduced relative clause pasif → V3.
m|___ the news, she started crying.|Hearing|Heard|Hear|To hearing|Aksi yang terjadi bersamaan → V-ing.
m|___ by the noise, the baby woke up.|Frightened|Frightening|Frighten|Having frighten|Bayi ditakuti (pasif) → V3.
m|Not ___ what to do, I called my mother.|knowing|known|know|knew|Negatif: Not + V-ing.
m|Mana yang SALAH (subjek tidak sama)?|Walking home, the rain started.|Walking home, I saw a rainbow.|Tired, she sat down.|Having eaten, we left.|Hujan tidak berjalan pulang; subjeknya harus sama.
m|___ the exam, he celebrated with friends.|Having passed|Passed|Passing having|Have passed|Lulus dulu, baru merayakan → Having + V3.
m|Anyone ___ to join should register by Friday.|wishing|wished|wish|wishes|Reduced relative clause aktif → V-ing.
t|___ (write) in simple English, the book is easy to read.|Written/written|Buku ditulis (pasif) → Written.
t|___ (look) out of the window, I saw a strange light.|Looking/looking|Aksi aktif bersamaan → Looking.
t|___ eaten lunch, we continued working. (satu kata)|Having/having|Having + V3 = sudah selesai lebih dulu.
f|Having finished my homework, I watched TV.|1|Subjek sama (I), selesai dulu → Having + V3.
f|Opening the door, the cat ran out.|0|Kucing tidak membuka pintu; subjek tidak cocok (dangling participle).
f|The woman wearing a red dress is my boss.|1|wearing = who is wearing.
o|Feeling hungry, I made a sandwich.|Karena lapar, saya membuat roti isi.
o|Written in English, the letter was hard to read.|Karena ditulis dalam bahasa Inggris, surat itu sulit dibaca.
o|Having lost the key, she called a locksmith.|Karena kehilangan kunci, dia memanggil tukang kunci.
`,
a6: `
m|This time tomorrow, I ___ on the beach.|will be lying|will lie|will have lain|lie|Sedang berlangsung pada waktu tertentu di masa depan.
m|By 2030, she ___ from university.|will have graduated|will graduate|will be graduating|graduates|by + waktu masa depan → will have + V3.
m|Don't call at 8. We ___ dinner.|will be having|will have had|have|had|Sedang makan pada jam 8 → future continuous.
m|By the time you arrive, I ___ the cake.|will have baked|will bake|bake|will be baked|Selesai sebelum kamu tiba.
m|By June, he ___ here for ten years.|will have been working|will work|will be work|is working|Durasi sampai titik masa depan.
m|___ you be using the laptop this evening?|Will|Are|Do|Have|Pertanyaan sopan → Will you be using …?
m|Next week, I ___ in Singapore for a conference.|will be staying|will have stayed|stay|stayed|Sedang berlangsung minggu depan.
m|By the end of this month, we ___ 50 customers.|will have reached|will reach|reach|are reaching|by the end of … → future perfect.
m|In ten minutes, the train ___.|will have left|has left|had left|leaves already|Akan sudah berangkat dalam 10 menit.
m|Penanda yang paling khas untuk future perfect adalah…|by|now|yesterday|since|by = paling lambat.
m|I ___ my report by Friday, so we can discuss it then.|will have finished|will be finishing|finish|finished|Selesai paling lambat Jumat.
t|By next year, I ___ (save) enough money.|will have saved/'ll have saved|will have + V3.
t|At 10 a.m. tomorrow, she ___ (fly) to Jakarta.|will be flying/'ll be flying|will be + V-ing.
t|By the time he retires, he ___ (work) here for 30 years. Tulis tiga kata + V-ing.|will have been working|Durasi sampai titik masa depan.
f|By tomorrow, I will finish the book.|0|by tomorrow → future perfect: I will have finished the book.
f|This time next week, we will be travelling around Europe.|1|future continuous untuk aksi yang sedang berlangsung.
f|She will have been finished by then.|0|Aktif: She will have finished by then.
o|I will be working late tonight.|Saya akan kerja sampai larut malam ini.
o|By Friday, we will have finished.|Paling lambat Jumat, kami sudah selesai.
o|Will you be coming to the party?|Apakah kamu akan datang ke pesta?
`,
x5: `
m|"I love spicy food." "___ do I."|So|Neither|Too|Also|Setuju dengan kalimat positif → So + aux + S.
m|"I can't swim." "___ can I."|Neither|So|Either|Too|Setuju dengan kalimat negatif → Neither + aux + S.
m|"Is it going to rain?" "I hope ___."|not|no|don't|neither|I hope not = semoga tidak.
m|"Will she come?" "I think ___."|so|it|that|yes|I think so = saya kira begitu.
m|I don't like this shirt. I prefer the blue ___.|one|ones|it|that one's|Mengganti kata benda tunggal → one.
m|These shoes are too small. Do you have bigger ___?|ones|one|them|it|Mengganti kata benda jamak → ones.
m|He said he would help, and he ___.|did|helped did|has|so|Elipsis: cukup kata bantu.
m|"I've finished." "So ___ I."|have|do|am|did|Mengikuti aux kalimat pertama (have).
m|"She was late." "So ___ he."|was|did|is|has|Mengikuti aux kalimat pertama (was).
m|They asked me to leave, but I refused to ___.|do so|so do|do it so|done so|do so = melakukannya.
m|"Did you lock the door?" "I'm afraid ___."|not|no|don't|didn't|I'm afraid not = sayangnya tidak.
t|"I'm hungry." "So ___ I."|am|Mengikuti to be (am).
t|"I didn't go." "Neither ___ I."|did|Mengikuti aux kalimat pertama (did).
t|Which bag is yours? The black ___.|one|Mengganti kata benda tunggal → one.
f|"I like tea." "Neither do I."|0|Kalimat positif → So do I.
f|"She can't drive." "Neither can I."|1|Kalimat negatif → Neither + aux + S.
f|"I'm tired." "So do I."|0|Ikuti to be: So am I.
o|I hope so, but I am not sure.|Semoga begitu, tapi saya tidak yakin.
o|My sister cannot cook and neither can I.|Kakak saya tidak bisa masak, saya juga tidak.
o|I prefer the red ones.|Saya lebih suka yang merah.
`,
x6: `
m|Kalimat paling sopan untuk meminta file adalah…|Could you please send me the file?|Send me the file.|I want the file now.|Give me the file.|Could you please … adalah permintaan sopan.
m|Please find ___ the report.|attached|attach|attaching|attachment|Please find attached = terlampir.
m|I look forward to ___ from you.|hearing|hear|heard|be hearing|look forward to + V-ing.
m|I'm writing to ___ on our conversation yesterday.|follow up|follow|following|follow out|follow up on = menindaklanjuti.
m|Ungkapan profesional untuk 'maaf telat membalas' adalah…|Apologies for the delayed response.|Sorry late.|My bad for late.|Late reply, sorry la.|Bentuk formal yang umum di email.
m|Could we ___ the meeting to Friday?|reschedule|move back on|replan of|remeet|reschedule = menjadwal ulang.
m|Ungkapan untuk menyela dengan sopan dalam rapat:|Could I add something here?|Stop talking.|Wait, listen to me.|I talk now.|Bertanya izin sebelum menyela.
m|Untuk menyimpulkan di akhir rapat:|To sum up, …|At first, …|For example, …|By the way, …|To sum up = sebagai kesimpulan.
m|Menyampaikan ketidaksetujuan secara diplomatis:|I see your point, but I'd suggest …|You're wrong.|That's stupid.|No, no, no.|Akui pendapat lawan bicara dulu, lalu beri saran.
m|"Let's touch base next week" artinya…|Mari berkabar lagi minggu depan.|Mari menyentuh markas.|Mari olahraga minggu depan.|Mari rapat di pangkalan.|touch base = berkabar atau sinkronisasi singkat.
m|Penutup email formal yang tepat:|Kind regards,|Bye bye,|See ya,|XOXO,|Kind regards / Best regards = penutup formal.
t|Let me know ___ you have any questions. (satu kata)|if|Let me know if … = kabari saya jika …
t|I am writing ___ apply for the position. (satu kata)|to|I am writing to + V1 = saya menulis untuk …
t|Please do not ___ to contact me. (ragu)|hesitate|do not hesitate = jangan ragu.
f|'I want a meeting tomorrow' adalah cara paling sopan meminta rapat.|0|Lebih sopan: Would it be possible to arrange a meeting tomorrow?
f|'Kind regards' cocok untuk menutup email kerja.|1|Penutup netral dan profesional.
f|'Please find attach the document' adalah frasa yang benar.|0|Yang benar: Please find attached the document.
o|Could you send me the report by Friday?|Bisakah Anda mengirim laporannya paling lambat Jumat?
o|I look forward to working with you.|Saya menantikan bekerja sama dengan Anda.
o|Let me know if you have any questions.|Kabari saya jika ada pertanyaan.
`
});

// Bacaan per level. Soal memakai format EXTRA (m / f).
const READING = {
basic: {title:"My Morning", text:["My name is Sari. I am twenty years old and I am a student in Yogyakarta.","Every day I wake up at five o'clock. I drink a cup of tea and I eat bread for breakfast. My brother doesn't eat breakfast because he is always late.","I go to campus by bus. The bus is usually full, but I like it because I can read on the way. My classes start at eight and finish at two."],
 qs:`
m|How old is Sari?|twenty|eighteen|twenty-five|thirty|"I am twenty years old."
m|What does Sari drink in the morning?|tea|coffee|milk|juice|"I drink a cup of tea."
m|How does Sari go to campus?|by bus|by car|on foot|by motorbike|"I go to campus by bus."
f|Sari's brother eats breakfast every day.|0|He doesn't eat breakfast because he is always late.
f|Sari's classes finish at two.|1|"My classes start at eight and finish at two."
`},
elem: {title:"A Trip to Lombok", text:["Last month, Andi and his friends went to Lombok for a short holiday. They flew from Jakarta and arrived on Friday evening.","On Saturday morning they rented motorbikes and rode to a quiet beach in the south. The water was clear and they swam for hours. In the afternoon it started to rain, so they went back to the hotel.","On Sunday they visited a traditional village. Andi bought some handmade cloth for his mother. He wants to go back next year because the trip was too short."],
 qs:`
m|When did they arrive in Lombok?|on Friday evening|on Saturday morning|on Sunday|last year|"…arrived on Friday evening."
m|Why did they go back to the hotel on Saturday?|It started to rain.|They were hungry.|The beach was crowded.|Their bikes broke.|"In the afternoon it started to rain…"
m|What did Andi buy for his mother?|handmade cloth|a bag|some food|a shirt|"Andi bought some handmade cloth for his mother."
f|They went to Lombok by boat.|0|They flew from Jakarta.
f|Andi thinks the trip was too short.|1|"…because the trip was too short."
`},
inter: {title:"Working From Home", text:["Since 2020, many companies have allowed their employees to work from home. Some people love it because they don't have to spend hours in traffic. Others miss talking to their colleagues face to face.","Research shows that people who work from home often work longer hours. They might start earlier and finish later because the office is always just a few steps away. For this reason, experts say you should have a fixed schedule and a separate place to work.","Many companies now use a hybrid model: employees come to the office two or three days a week and work from home on the other days."],
 qs:`
m|Why do some people love working from home?|They avoid traffic.|They earn more money.|They work fewer hours.|They can sleep all day.|"…they don't have to spend hours in traffic."
m|What do experts recommend?|a fixed schedule and a separate workspace|working at night|never going to the office|working in bed|"…have a fixed schedule and a separate place to work."
m|What is a 'hybrid model'?|some days at the office, some days at home|only working from home|only working at the office|working two jobs|Employees split their week between office and home.
f|People who work from home always work fewer hours.|0|Research shows they often work longer hours.
f|Some people miss face-to-face contact with colleagues.|1|"Others miss talking to their colleagues face to face."
`},
upper: {title:"The Coffee Shop Boom", text:["Over the past decade, the number of coffee shops in Indonesian cities has grown dramatically. Many of them are run by young entrepreneurs who had worked in offices before deciding to start their own businesses.","Part of the reason for this boom is that coffee shops have become more than places to drink coffee. They are used as offices, meeting rooms and even photo studios for social media. Owners who had understood this early on designed their spaces accordingly, with fast Wi-Fi and plenty of power sockets.","However, competition is fierce. A shop that cannot offer something unique, such as locally grown beans or a memorable atmosphere, might struggle to survive more than a year or two."],
 qs:`
m|What had many coffee shop owners done before?|worked in offices|studied abroad|worked on farms|owned restaurants|"…who had worked in offices before…"
m|Why did some owners add fast Wi-Fi and power sockets?|People use coffee shops as workplaces.|It was required by law.|It made coffee cheaper.|Customers asked for music.|Coffee shops are used as offices and meeting rooms.
m|According to the text, which shop might struggle?|one with nothing unique|one with local beans|one with a memorable atmosphere|one with fast Wi-Fi|"A shop that cannot offer something unique…might struggle."
f|Coffee shops are now used only for drinking coffee.|0|They are also used as offices, meeting rooms and photo studios.
f|The text says competition between coffee shops is strong.|1|"However, competition is fierce."
`},
adv: {title:"The Myth of Multitasking", text:["Many of us believe we are skilled multitaskers, answering emails while listening to a meeting and checking our phones. Research, however, suggests otherwise. What we call multitasking is usually rapid task-switching, and each switch carries a cost.","Having studied thousands of participants, psychologists found that people who multitask heavily are, paradoxically, worse at filtering out irrelevant information. Not only do they make more mistakes, but they also take longer to finish tasks than those who focus on one thing at a time.","The practical lesson is simple, if not always easy to apply: group similar tasks together, silence notifications during deep work, and accept that doing one thing well is often faster than doing three things badly."],
 qs:`
m|According to the text, multitasking is usually…|rapid task-switching|a natural talent|impossible to learn|better than focusing|"What we call multitasking is usually rapid task-switching…"
m|What did psychologists find about heavy multitaskers?|They are worse at filtering irrelevant information.|They are more creative.|They finish tasks faster.|They make fewer mistakes.|"…paradoxically, worse at filtering out irrelevant information."
m|Which advice is NOT given in the text?|work in a noisy place|group similar tasks|silence notifications|focus on one thing well|The text recommends grouping tasks and silencing notifications.
f|The writer claims the lesson is always easy to apply.|0|"simple, if not always easy to apply"
f|Heavy multitaskers take longer to finish tasks.|1|"…they also take longer to finish tasks…"
`},
expert: {title:"Email: Project Delay", text:["Dear Ms Hartono,","I am writing to follow up on our call last Tuesday regarding the launch of the new mobile application. Having reviewed the test results with our engineering team, we have identified several issues that, while not critical, would noticeably affect the user experience.","In light of this, I would like to propose postponing the launch by two weeks, to 15 March. This would give the team sufficient time to resolve the issues and conduct a final round of testing. I appreciate that this may have implications for your marketing schedule, and I would be happy to discuss how we might minimise any disruption.","I look forward to hearing your thoughts. Please do not hesitate to contact me should you have any questions.","Kind regards,<br>Dimas Pratama<br>Project Manager"],
 qs:`
m|What is the main purpose of the email?|to propose postponing a launch|to cancel the project|to complain about the marketing team|to request more money|"I would like to propose postponing the launch…"
m|How serious are the issues described?|not critical, but noticeable|extremely critical|completely solved|unknown|"…while not critical, would noticeably affect the user experience."
m|Which phrase shows the writer considers Ms Hartono's situation?|I appreciate that this may have implications for your marketing schedule|Kind regards|I am writing to follow up|Having reviewed the test results|He acknowledges the impact on her schedule.
f|The writer proposes a delay of one month.|0|He proposes two weeks, to 15 March.
f|'Should you have any questions' means 'if you have any questions'.|1|Inverted conditional: Should you… = If you…
`}
};

// Kalimat latihan berbicara per level.
const SPEAK = {
basic: [["Hello, my name is Rina.","Halo, nama saya Rina."],["I am a student.","Saya seorang pelajar."],["Where do you live?","Kamu tinggal di mana?"],["This is my brother.","Ini saudara laki-laki saya."],["I wake up at six every day.","Saya bangun jam enam setiap hari."],["There is a cat under the table.","Ada kucing di bawah meja."]],
elem: [["I went to the beach yesterday.","Kemarin saya pergi ke pantai."],["What are you doing now?","Kamu sedang apa sekarang?"],["I am going to visit my grandmother.","Saya akan mengunjungi nenek saya."],["This bag is cheaper than that one.","Tas ini lebih murah dari yang itu."],["How much water do you drink?","Kamu minum air berapa banyak?"],["The meeting starts at nine.","Rapat mulai jam sembilan."]],
inter: [["I have never been to Japan.","Saya belum pernah ke Jepang."],["You should get some rest.","Sebaiknya kamu istirahat."],["If it rains, we will stay at home.","Kalau hujan, kami akan di rumah."],["English is spoken all over the world.","Bahasa Inggris digunakan di seluruh dunia."],["I was cooking when the phone rang.","Saya sedang masak waktu telepon berdering."],["I used to live in Medan.","Dulu saya tinggal di Medan."]],
upper: [["If I were you, I would take the job.","Kalau saya jadi kamu, saya ambil pekerjaan itu."],["She said that she was tired.","Dia bilang dia lelah."],["The man who called you is my uncle.","Pria yang meneleponmu adalah paman saya."],["I'm looking forward to seeing you.","Saya menantikan bertemu denganmu."],["The train had left when I arrived.","Kereta sudah berangkat waktu saya tiba."],["He must be very tired.","Dia pasti sangat lelah."]],
adv: [["Never have I seen such a beautiful view.","Belum pernah saya melihat pemandangan seindah ini."],["I wish I had studied harder.","Andai saya belajar lebih keras dulu."],["We need to come up with a better plan.","Kita perlu menemukan rencana yang lebih baik."],["What I need is a long holiday.","Yang saya butuhkan adalah liburan panjang."],["Having finished the report, she went home.","Setelah menyelesaikan laporan, dia pulang."],["By next year, I will have graduated.","Tahun depan saya sudah lulus."]],
expert: [["That exam was a piece of cake.","Ujian itu gampang sekali."],["It is essential that he be present.","Sangat penting dia hadir."],["These findings suggest a possible link.","Temuan ini menunjukkan kemungkinan kaitan."],["I see your point, but I would suggest another approach.","Saya paham maksud Anda, tapi saya menyarankan pendekatan lain."],["I look forward to hearing from you.","Saya menantikan kabar dari Anda."],["Could we reschedule the meeting to Thursday?","Bisakah rapatnya dijadwal ulang ke Kamis?"]]
};

// Gabungkan pelajaran tambahan ke tiap level.
LEVELS.forEach(L => { (MORE[L.id] || []).forEach(x => L.lessons.push(x)); });
