const LEVELS = [
{id:"basic",name:"Basic",cefr:"A1",color:"#22a06b",desc:"Fondasi: to be, kalimat sederhana, kosakata sehari-hari.",lessons:[
 {id:"b1",title:"To Be & Pronouns",theory:`<p>Kata <b>to be</b> (am / is / are) dipakai untuk menyatakan identitas, sifat, keadaan, dan lokasi. Dalam bahasa Indonesia sering tidak diterjemahkan.</p>
<table><tr><th>Subjek</th><th>To be</th><th>Singkatan</th></tr>
<tr><td>I</td><td>am</td><td>I'm</td></tr><tr><td>He / She / It</td><td>is</td><td>he's, she's, it's</td></tr><tr><td>You / We / They</td><td>are</td><td>you're, we're, they're</td></tr></table>
<div class="formula">(+) S + am/is/are + ...<br>(−) S + am/is/are + not + ...<br>(?) Am/Is/Are + S + ...?</div>
<p class="muted">Tips: "is not" → isn't, "are not" → aren't. "am not" tidak disingkat menjadi "amn't".</p>`,
 examples:[["I am a student.","Saya seorang pelajar."],["She is happy today.","Dia senang hari ini."],["They are not at home.","Mereka tidak di rumah."],["Is he your brother?","Apakah dia saudara laki-lakimu?"]],
 vocab:[["student","pelajar"],["teacher","guru"],["happy","senang"],["tired","lelah"],["hungry","lapar"],["friend","teman"]],
 quiz:[{q:"She ___ a doctor.",o:["is","am","are","be"],e:"She (orang ketiga tunggal) memakai 'is'."},
 {q:"We ___ from Indonesia.",o:["are","is","am","be"],e:"We memakai 'are'."},
 {q:"___ you hungry?",o:["Are","Is","Am","Do"],e:"Kalimat tanya to be: Are + you."},
 {q:"Bentuk negatif dari 'I am tired' adalah…",o:["I am not tired.","I not tired.","I no am tired.","I don't tired."],e:"Negatif: tambahkan 'not' setelah to be."}]},
 {id:"b2",title:"Simple Present Tense",theory:`<p>Dipakai untuk <b>kebiasaan, rutinitas, dan fakta umum</b>.</p>
<div class="formula">(+) S + V1 (he/she/it + V-s/es)<br>(−) S + do/does + not + V1<br>(?) Do/Does + S + V1?</div>
<ul><li>Tambah <b>-es</b> untuk kata berakhiran -s, -sh, -ch, -x, -o: watch → watches, go → goes.</li>
<li>Konsonan + y → <b>-ies</b>: study → studies.</li>
<li>Setelah does / doesn't, kata kerja kembali ke bentuk dasar: <i>She doesn't <b>like</b></i>.</li></ul>
<p>Kata keterangan waktu: <i>always, usually, often, sometimes, never, every day</i>.</p>`,
 examples:[["I drink coffee every morning.","Saya minum kopi setiap pagi."],["He works in a bank.","Dia bekerja di bank."],["She doesn't like spicy food.","Dia tidak suka makanan pedas."],["Do you speak English?","Apakah kamu berbicara bahasa Inggris?"]],
 vocab:[["always","selalu"],["usually","biasanya"],["often","sering"],["sometimes","kadang-kadang"],["never","tidak pernah"],["wake up","bangun tidur"]],
 quiz:[{q:"He ___ to school every day.",o:["goes","go","going","gone"],e:"He + V-s/es → goes."},
 {q:"They ___ like cats.",o:["don't","doesn't","isn't","aren't"],e:"They memakai don't untuk kalimat negatif kata kerja."},
 {q:"___ she play the piano?",o:["Does","Do","Is","Are"],e:"She → Does + S + V1."},
 {q:"Water ___ at 100°C.",o:["boils","boil","boiling","is boil"],e:"Fakta umum, subjek tunggal → boils."}]},
 {id:"b3",title:"Articles & Plurals",theory:`<p><b>a / an</b> untuk benda tunggal yang belum spesifik. Pilihannya ditentukan oleh <b>bunyi</b>, bukan huruf.</p>
<ul><li><b>a</b> + bunyi konsonan: a book, a <b>u</b>niversity (bunyi "yu")</li>
<li><b>an</b> + bunyi vokal: an apple, an <b>h</b>our ("h" tidak dibaca)</li>
<li><b>the</b> untuk hal yang spesifik, sudah disebut, atau satu-satunya: the sun, the moon.</li></ul>
<h3>Bentuk jamak (plural)</h3>
<table><tr><th>Aturan</th><th>Contoh</th></tr><tr><td>+ s</td><td>book → books</td></tr><tr><td>+ es</td><td>box → boxes</td></tr><tr><td>y → ies</td><td>city → cities</td></tr><tr><td>Tidak beraturan</td><td>child → children, man → men, foot → feet, mouse → mice</td></tr></table>`,
 examples:[["I have a cat and an umbrella.","Saya punya seekor kucing dan sebuah payung."],["The cat is sleeping.","Kucing itu sedang tidur."],["She has two children.","Dia punya dua anak."],["It takes an hour.","Butuh waktu satu jam."]],
 vocab:[["umbrella","payung"],["hour","jam (durasi)"],["children","anak-anak"],["people","orang-orang"],["teeth","gigi (jamak)"],["women","para wanita"]],
 quiz:[{q:"I need ___ umbrella.",o:["an","a","the","(kosong)"],e:"'umbrella' diawali bunyi vokal → an."},
 {q:"She is ___ university student.",o:["a","an","the","(kosong)"],e:"'university' dibaca 'yu-' (bunyi konsonan) → a."},
 {q:"Bentuk jamak dari 'child' adalah…",o:["children","childs","childes","childrens"],e:"child → children (tidak beraturan)."},
 {q:"Look at ___ moon!",o:["the","a","an","(kosong)"],e:"Hanya ada satu bulan → the."}]},
 {id:"b4",title:"There is/are & Prepositions",theory:`<p><b>There is</b> + benda tunggal / tak terhitung. <b>There are</b> + benda jamak. Artinya "ada".</p>
<div class="formula">There is a book on the table.<br>There are three chairs in the room.</div>
<h3>Preposisi tempat</h3>
<table><tr><td><b>in</b></td><td>di dalam</td></tr><tr><td><b>on</b></td><td>di atas (menempel)</td></tr><tr><td><b>under</b></td><td>di bawah</td></tr><tr><td><b>next to</b></td><td>di sebelah</td></tr><tr><td><b>between</b></td><td>di antara (dua)</td></tr><tr><td><b>behind</b></td><td>di belakang</td></tr><tr><td><b>in front of</b></td><td>di depan</td></tr></table>`,
 examples:[["There is a cat under the bed.","Ada seekor kucing di bawah tempat tidur."],["There are many people in the park.","Ada banyak orang di taman."],["The bank is next to the school.","Bank berada di sebelah sekolah."],["Is there a pharmacy near here?","Apakah ada apotek di dekat sini?"]],
 vocab:[["near","dekat"],["far","jauh"],["behind","di belakang"],["between","di antara"],["pharmacy","apotek"],["fridge","kulkas"]],
 quiz:[{q:"There ___ two books on the table.",o:["are","is","am","be"],e:"two books (jamak) → there are."},
 {q:"There ___ some milk in the fridge.",o:["is","are","am","have"],e:"milk tak terhitung → there is."},
 {q:"The cat is ___ the table. (di bawah)",o:["under","on","in","between"],e:"di bawah = under."},
 {q:"The bank is ___ the school and the post office.",o:["between","next","behind of","among of"],e:"Di antara dua tempat → between."}]}
]},
{id:"elem",name:"Elementary",cefr:"A2",color:"#1e88e5",desc:"Bercerita tentang sekarang, masa lalu, dan rencana.",lessons:[
 {id:"e1",title:"Present Continuous",theory:`<p>Untuk aksi yang <b>sedang terjadi sekarang</b> atau rencana pasti dalam waktu dekat.</p>
<div class="formula">S + am/is/are + V-ing</div>
<ul><li>Penanda: now, right now, at the moment, Look!, Listen!</li>
<li><b>Stative verbs</b> (know, like, love, want, need, believe, understand) biasanya <u>tidak</u> memakai -ing: <i>I know</i>, bukan <i>I am knowing</i>.</li></ul>`,
 examples:[["I am reading a book now.","Saya sedang membaca buku sekarang."],["Listen! The baby is crying.","Dengar! Bayinya sedang menangis."],["We are meeting her tomorrow.","Kami akan bertemu dia besok."],["What are you doing?","Kamu sedang apa?"]],
 vocab:[["right now","saat ini juga"],["at the moment","saat ini"],["cry","menangis"],["wait","menunggu"],["cook","memasak"],["understand","memahami"]],
 quiz:[{q:"Listen! The baby ___.",o:["is crying","cries","cry","cried"],e:"'Listen!' → aksi sedang berlangsung."},
 {q:"I ___ the answer.",o:["know","am knowing","knowing","am know"],e:"'know' adalah stative verb, tidak pakai -ing."},
 {q:"They ___ TV right now.",o:["are watching","watch","is watching","watched"],e:"They + are + V-ing."},
 {q:"What ___ you doing?",o:["are","do","is","did"],e:"you + are + V-ing."}]},
 {id:"e2",title:"Simple Past Tense",theory:`<p>Untuk kejadian yang <b>sudah selesai di masa lalu</b> (yesterday, last week, ago, in 2010).</p>
<div class="formula">(+) S + V2<br>(−) S + did not (didn't) + V1<br>(?) Did + S + V1?</div>
<table><tr><th>Regular (+ed)</th><th>Irregular</th></tr>
<tr><td>work → worked</td><td>go → went</td></tr><tr><td>play → played</td><td>eat → ate</td></tr><tr><td>study → studied</td><td>see → saw</td></tr><tr><td>stop → stopped</td><td>buy → bought</td></tr></table>
<p class="muted">Ingat: setelah did/didn't, kata kerja kembali ke V1.</p>`,
 examples:[["We went to Bali last year.","Kami pergi ke Bali tahun lalu."],["I didn't see him yesterday.","Saya tidak melihatnya kemarin."],["Did you finish your homework?","Apakah kamu menyelesaikan PR-mu?"],["She bought a new phone.","Dia membeli ponsel baru."]],
 vocab:[["yesterday","kemarin"],["last night","tadi malam"],["ago","yang lalu"],["bought","membeli (V2)"],["brought","membawa (V2)"],["thought","berpikir (V2)"]],
 quiz:[{q:"We ___ to Bali last year.",o:["went","go","goes","gone"],e:"last year → simple past, go → went."},
 {q:"She didn't ___ the email.",o:["send","sent","sends","sending"],e:"Setelah didn't → V1."},
 {q:"___ you see the movie yesterday?",o:["Did","Do","Were","Was"],e:"Tanya simple past dengan kata kerja → Did."},
 {q:"Bentuk lampau dari 'buy' adalah…",o:["bought","buyed","brought","buy"],e:"buy → bought. (brought = bentuk lampau 'bring')."}]},
 {id:"e3",title:"Future: Will vs Going to",theory:`<table><tr><th>will</th><th>be going to</th></tr>
<tr><td>Keputusan spontan</td><td>Rencana yang sudah dibuat</td></tr>
<tr><td>Prediksi berdasar opini</td><td>Prediksi berdasar bukti yang terlihat</td></tr>
<tr><td>Janji, tawaran</td><td>—</td></tr></table>
<div class="formula">S + will + V1<br>S + am/is/are + going to + V1</div>`,
 examples:[["The phone is ringing. I'll answer it.","Teleponnya berdering. Biar saya angkat."],["Look at those clouds! It's going to rain.","Lihat awan itu! Akan hujan."],["We're going to visit Japan next month.","Kami akan ke Jepang bulan depan."],["I promise I won't be late.","Saya janji tidak akan terlambat."]],
 vocab:[["promise","janji"],["plan","rencana"],["next week","minggu depan"],["soon","segera"],["probably","mungkin sekali"],["decide","memutuskan"]],
 quiz:[{q:"Look at those dark clouds! It ___ rain.",o:["is going to","will","goes to","would"],e:"Ada bukti yang terlihat → going to."},
 {q:"\"The phone is ringing.\" \"I ___ answer it.\"",o:["will","am going to","going","am"],e:"Keputusan spontan → will."},
 {q:"I've bought tickets. We ___ visit Japan next month.",o:["are going to","will","go to","would"],e:"Rencana yang sudah dibuat → going to."},
 {q:"I promise I ___ tell anyone.",o:["won't","am not going","don't","not will"],e:"Janji → will / won't."}]},
 {id:"e4",title:"Comparatives & Superlatives",theory:`<table><tr><th>Jenis</th><th>Comparative</th><th>Superlative</th></tr>
<tr><td>1 suku kata</td><td>tall<b>er</b> than</td><td>the tall<b>est</b></td></tr>
<tr><td>Berakhiran -y</td><td>happ<b>ier</b></td><td>the happ<b>iest</b></td></tr>
<tr><td>2+ suku kata</td><td><b>more</b> expensive</td><td><b>the most</b> expensive</td></tr>
<tr><td>Tidak beraturan</td><td>good → better, bad → worse</td><td>the best, the worst</td></tr></table>
<p><b>as + adj + as</b> = sama: <i>She is as tall as me.</i></p>`,
 examples:[["Jakarta is bigger than Bandung.","Jakarta lebih besar dari Bandung."],["This is the most interesting book I've read.","Ini buku paling menarik yang pernah saya baca."],["My English is better than last year.","Bahasa Inggris saya lebih baik dari tahun lalu."],["He is as tall as his father.","Dia setinggi ayahnya."]],
 vocab:[["cheap","murah"],["expensive","mahal"],["better","lebih baik"],["worse","lebih buruk"],["crowded","ramai/padat"],["comfortable","nyaman"]],
 quiz:[{q:"Jakarta is ___ than Bandung.",o:["bigger","big","biggest","more big"],e:"Kata pendek → -er + than."},
 {q:"This is the ___ book I've ever read.",o:["most interesting","more interesting","interesting","interestingest"],e:"Kata panjang + superlative → the most."},
 {q:"My English is ___ than last year.",o:["better","gooder","best","more good"],e:"good → better (tidak beraturan)."},
 {q:"She is as tall ___ her brother.",o:["as","than","like","so"],e:"Pola: as + adj + as."}]}
]},
{id:"inter",name:"Intermediate",cefr:"B1",color:"#8e44ad",desc:"Present perfect, modal, kalimat pengandaian, pasif.",lessons:[
 {id:"i1",title:"Present Perfect",theory:`<div class="formula">S + have/has + V3</div>
<p>Dipakai untuk:</p><ul><li><b>Pengalaman</b> (tanpa waktu spesifik): I have been to Japan.</li>
<li><b>Hasil yang terasa sekarang</b>: I've lost my keys.</li>
<li><b>Durasi sampai sekarang</b> dengan <b>for</b> (lamanya) / <b>since</b> (titik awal).</li></ul>
<p class="muted">Jika ada waktu spesifik di masa lalu (yesterday, in 2019), gunakan <b>simple past</b>.</p>`,
 examples:[["I have been to London twice.","Saya pernah ke London dua kali."],["She has lived here since 2020.","Dia tinggal di sini sejak 2020."],["We've known each other for ten years.","Kami sudah saling kenal sepuluh tahun."],["Have you ever eaten durian?","Pernahkah kamu makan durian?"]],
 vocab:[["ever","pernah"],["never","tidak pernah"],["already","sudah"],["yet","belum/sudah (tanya)"],["just","baru saja"],["since","sejak"]],
 quiz:[{q:"I ___ to London twice.",o:["have been","went","have gone","was"],e:"Pengalaman tanpa waktu spesifik → have been."},
 {q:"She ___ here since 2020.",o:["has lived","lives","lived","is living"],e:"since + durasi hingga kini → present perfect."},
 {q:"I ___ him yesterday.",o:["saw","have seen","have saw","seen"],e:"'yesterday' = waktu spesifik → simple past."},
 {q:"We have known each other ___ ten years.",o:["for","since","ago","during"],e:"Lamanya waktu → for."}]},
 {id:"i2",title:"Modal Verbs",theory:`<table><tr><th>Modal</th><th>Fungsi</th></tr>
<tr><td><b>can</b></td><td>kemampuan, izin</td></tr><tr><td><b>should</b></td><td>saran ("sebaiknya")</td></tr>
<tr><td><b>must</b></td><td>keharusan (dari pembicara/aturan)</td></tr><tr><td><b>have to</b></td><td>keharusan dari luar</td></tr>
<tr><td><b>mustn't</b></td><td>dilarang</td></tr><tr><td><b>don't have to</b></td><td>tidak perlu (boleh saja)</td></tr></table>
<div class="formula">S + modal + V1 (tanpa "to", kecuali have to)</div>`,
 examples:[["You mustn't smoke here.","Kamu dilarang merokok di sini."],["You don't have to come early.","Kamu tidak perlu datang lebih awal."],["You should drink more water.","Sebaiknya kamu minum lebih banyak air."],["Can I borrow your pen?","Boleh saya pinjam pulpenmu?"]],
 vocab:[["allowed","diizinkan"],["forbidden","dilarang"],["borrow","meminjam"],["advice","saran"],["necessary","perlu"],["rule","aturan"]],
 quiz:[{q:"You ___ smoke here. It's forbidden.",o:["mustn't","don't have to","shouldn't to","can"],e:"Dilarang → mustn't."},
 {q:"It's Sunday. I ___ go to work.",o:["don't have to","mustn't","can't","shouldn't"],e:"Tidak perlu (bukan dilarang) → don't have to."},
 {q:"You look tired. You ___ get some rest.",o:["should","must to","can","would"],e:"Saran → should."},
 {q:"___ you swim?",o:["Can","Must","Should","Have"],e:"Menanyakan kemampuan → Can."}]},
 {id:"i3",title:"Conditionals 0 & 1",theory:`<table><tr><th>Tipe</th><th>Pola</th><th>Fungsi</th></tr>
<tr><td>Zero</td><td>If + present, present</td><td>Fakta / hukum alam</td></tr>
<tr><td>First</td><td>If + present, will + V1</td><td>Kemungkinan nyata di masa depan</td></tr></table>
<p class="muted">Jangan pakai "will" di klausa if: <i>If it <b>rains</b></i>, bukan <i>If it will rain</i>. <b>Unless</b> = if … not.</p>`,
 examples:[["If you heat ice, it melts.","Jika es dipanaskan, ia mencair."],["If it rains tomorrow, we'll stay home.","Jika besok hujan, kami akan di rumah."],["Unless you hurry, you'll miss the bus.","Kalau tidak buru-buru, kamu akan ketinggalan bus."],["If I see her, I'll tell her.","Kalau saya bertemu dia, akan saya beri tahu."]],
 vocab:[["unless","kecuali jika"],["heat","memanaskan"],["melt","mencair"],["miss","ketinggalan"],["hurry","bergegas"],["pass","lulus"]],
 quiz:[{q:"If you heat ice, it ___.",o:["melts","melt","will melted","melted"],e:"Fakta → zero conditional (present)."},
 {q:"If it rains tomorrow, we ___ at home.",o:["will stay","stay","stayed","would stay"],e:"First conditional → will + V1."},
 {q:"If she ___ hard, she will pass.",o:["studies","study","will study","studied"],e:"Klausa if memakai present simple."},
 {q:"Unless you hurry, you ___ the bus.",o:["will miss","miss","missed","would miss"],e:"Unless = if not → first conditional."}]},
 {id:"i4",title:"Passive Voice",theory:`<p>Dipakai saat <b>objek/aksi lebih penting</b> daripada pelakunya.</p>
<div class="formula">S + be + V3 (+ by …)</div>
<table><tr><th>Tense</th><th>Aktif</th><th>Pasif</th></tr>
<tr><td>Present</td><td>They clean the room.</td><td>The room <b>is cleaned</b>.</td></tr>
<tr><td>Past</td><td>They built it in 1990.</td><td>It <b>was built</b> in 1990.</td></tr>
<tr><td>Future</td><td>They will open it.</td><td>It <b>will be opened</b>.</td></tr></table>`,
 examples:[["English is spoken all over the world.","Bahasa Inggris digunakan di seluruh dunia."],["The bridge was built in 1990.","Jembatan itu dibangun tahun 1990."],["The letters were sent yesterday.","Surat-surat itu dikirim kemarin."],["The results will be announced soon.","Hasilnya akan segera diumumkan."]],
 vocab:[["build","membangun"],["announce","mengumumkan"],["invent","menemukan"],["produce","memproduksi"],["deliver","mengantar"],["repair","memperbaiki"]],
 quiz:[{q:"English ___ all over the world.",o:["is spoken","speaks","is speaking","spoke"],e:"Pasif present: is + V3."},
 {q:"The bridge ___ in 1990.",o:["was built","built","is built","was build"],e:"Pasif past: was + V3 (built)."},
 {q:"The letters ___ by the secretary yesterday.",o:["were typed","was typed","typed","are typed"],e:"letters (jamak) + past → were + V3."},
 {q:"Bentuk pasif dari 'They clean the room every day':",o:["The room is cleaned every day.","The room cleaned every day.","The room was cleaned every day.","The room is clean every day."],e:"Present simple → is + V3."}]}
]},
{id:"upper",name:"Upper-Intermediate",cefr:"B2",color:"#e67e22",desc:"Pengandaian tak nyata, kalimat tak langsung, klausa relatif.",lessons:[
 {id:"u1",title:"Conditionals 2 & 3",theory:`<table><tr><th>Tipe</th><th>Pola</th><th>Fungsi</th></tr>
<tr><td>Second</td><td>If + V2, would + V1</td><td>Tidak nyata di masa kini</td></tr>
<tr><td>Third</td><td>If + had + V3, would have + V3</td><td>Tidak nyata di masa lalu (penyesalan)</td></tr></table>
<p>Pada second conditional, gunakan <b>were</b> untuk semua subjek (lebih baku): <i>If I were you…</i></p>`,
 examples:[["If I were rich, I would travel the world.","Seandainya saya kaya, saya akan keliling dunia."],["If I were you, I'd apologize.","Kalau saya jadi kamu, saya akan minta maaf."],["If she had studied, she would have passed.","Seandainya dia belajar, dia pasti lulus."],["We would have come if you had invited us.","Kami pasti datang kalau kamu mengundang kami."]],
 vocab:[["regret","menyesal"],["apologize","meminta maaf"],["afford","mampu (membeli)"],["opportunity","kesempatan"],["imagine","membayangkan"],["otherwise","jika tidak"]],
 quiz:[{q:"If I ___ rich, I would travel the world.",o:["were","am","will be","had been"],e:"Second conditional → if + were."},
 {q:"If she had studied, she ___ the exam.",o:["would have passed","would pass","will pass","passed"],e:"Third conditional → would have + V3."},
 {q:"If I ___ you, I'd apologize.",o:["were","am","was being","be"],e:"Ungkapan saran: If I were you."},
 {q:"We would have come if you ___ us.",o:["had invited","invited","would invite","have invited"],e:"Third conditional → if + had + V3."}]},
 {id:"u2",title:"Reported Speech",theory:`<p>Saat melaporkan ucapan orang lain, tense biasanya <b>mundur satu langkah</b>.</p>
<table><tr><th>Langsung</th><th>Tidak langsung</th></tr>
<tr><td>present</td><td>past</td></tr><tr><td>past / present perfect</td><td>past perfect</td></tr>
<tr><td>will / can</td><td>would / could</td></tr><tr><td>now / today / tomorrow</td><td>then / that day / the next day</td></tr></table>
<p><b>Pertanyaan:</b> pakai <i>if/whether</i> (ya/tidak) atau kata tanya, lalu susunan kalimat berita: <i>She asked where I <b>lived</b></i>.</p>`,
 examples:[["She said (that) she was tired.","Dia bilang dia lelah."],["He said he would call me.","Dia bilang akan meneleponku."],["She asked me where I lived.","Dia bertanya di mana saya tinggal."],["He asked if I was ready.","Dia bertanya apakah saya sudah siap."]],
 vocab:[["mention","menyebutkan"],["explain","menjelaskan"],["claim","mengklaim"],["admit","mengakui"],["deny","menyangkal"],["whether","apakah"]],
 quiz:[{q:"\"I am tired.\" → She said that she ___ tired.",o:["was","is","has been","were"],e:"present → past (am → was)."},
 {q:"\"I will call you.\" → He said he ___ call me.",o:["would","will","can","shall"],e:"will → would."},
 {q:"\"Where do you live?\" → She asked me where ___.",o:["I lived","do I live","did I live","I live"],e:"Susunan kalimat berita + tense mundur."},
 {q:"\"Are you ready?\" → He asked ___ I was ready.",o:["if","that","what","do"],e:"Pertanyaan ya/tidak → if / whether."}]},
 {id:"u3",title:"Relative Clauses",theory:`<table><tr><th>Kata</th><th>Untuk</th></tr>
<tr><td><b>who</b></td><td>orang</td></tr><tr><td><b>which</b></td><td>benda/hewan</td></tr><tr><td><b>that</b></td><td>orang/benda (hanya defining)</td></tr>
<tr><td><b>whose</b></td><td>kepemilikan</td></tr><tr><td><b>where</b></td><td>tempat</td></tr></table>
<p><b>Defining</b>: informasi penting, tanpa koma. <b>Non-defining</b>: informasi tambahan, diapit koma, <u>tidak boleh</u> memakai "that".</p>`,
 examples:[["The man who lives next door is a pilot.","Pria yang tinggal di sebelah adalah pilot."],["This is the house where I grew up.","Ini rumah tempat saya dibesarkan."],["The girl whose bag was stolen called the police.","Gadis yang tasnya dicuri menelepon polisi."],["My car, which is very old, still runs well.","Mobil saya, yang sudah sangat tua, masih berjalan baik."]],
 vocab:[["neighbour","tetangga"],["grow up","tumbuh besar"],["steal","mencuri"],["own","memiliki"],["recommend","merekomendasikan"],["whose","yang … -nya"]],
 quiz:[{q:"The man ___ lives next door is a pilot.",o:["who","which","whose","where"],e:"Orang → who."},
 {q:"This is the house ___ I grew up.",o:["where","which","who","whose"],e:"Tempat → where."},
 {q:"The girl ___ bag was stolen called the police.",o:["whose","who","which","whom"],e:"Kepemilikan → whose."},
 {q:"My car, ___ is very old, still runs well.",o:["which","that","who","what"],e:"Non-defining (pakai koma) → which, bukan that."}]},
 {id:"u4",title:"Gerund vs Infinitive",theory:`<table><tr><th>+ V-ing (gerund)</th><th>+ to V1 (infinitive)</th></tr>
<tr><td>enjoy, avoid, finish, mind, suggest, keep, consider</td><td>want, decide, hope, plan, agree, refuse, manage</td></tr>
<tr><td>setelah preposisi: interested <b>in</b> learning</td><td>setelah adjektif: easy <b>to</b> learn</td></tr></table>
<h3>Arti berubah</h3><ul><li><b>stop smoking</b> = berhenti merokok · <b>stop to smoke</b> = berhenti (sejenak) untuk merokok</li>
<li><b>remember locking</b> = ingat sudah mengunci · <b>remember to lock</b> = ingat untuk mengunci</li></ul>
<p class="muted">Jebakan: <i>look forward to <b>seeing</b></i> — "to" di sini adalah preposisi.</p>`,
 examples:[["I enjoy reading novels.","Saya suka membaca novel."],["She decided to study abroad.","Dia memutuskan kuliah di luar negeri."],["He stopped smoking last year.","Dia berhenti merokok tahun lalu."],["I'm looking forward to seeing you.","Saya menantikan bertemu denganmu."]],
 vocab:[["avoid","menghindari"],["consider","mempertimbangkan"],["refuse","menolak"],["manage","berhasil (melakukan)"],["abroad","luar negeri"],["look forward to","menantikan"]],
 quiz:[{q:"I enjoy ___ novels.",o:["reading","to read","read","reads"],e:"enjoy + V-ing."},
 {q:"She decided ___ abroad.",o:["to study","studying","study","studied"],e:"decide + to V1."},
 {q:"He stopped ___ — now he's healthier. (berhenti merokok)",o:["smoking","to smoke","smoke","smoked"],e:"stop + V-ing = berhenti melakukan."},
 {q:"I'm looking forward to ___ you.",o:["seeing","see","to see","saw"],e:"'to' di sini preposisi → V-ing."}]}
]},
{id:"adv",name:"Advanced",cefr:"C1",color:"#c0392b",desc:"Struktur penekanan, inversi, phrasal verbs, bahasa natural.",lessons:[
 {id:"a1",title:"Inversion",theory:`<p>Inversi (membalik subjek–kata bantu) dipakai untuk <b>penekanan</b> dan gaya <b>formal</b>, setelah kata keterangan negatif/terbatas.</p>
<div class="formula">Negative adverb + auxiliary + S + V</div>
<ul><li><b>Never</b> have I seen such a view.</li><li><b>Rarely</b> does she complain.</li>
<li><b>Not only</b> was he late, <b>but</b> he also forgot his notes.</li>
<li><b>No sooner</b> had we arrived <b>than</b> it started to rain.</li><li><b>Hardly</b> had I sat down <b>when</b> the phone rang.</li></ul>
<h3>Conditional tanpa "if"</h3><ul><li><b>Had</b> I known… (= If I had known)</li><li><b>Should</b> you need help… (= If you need)</li><li><b>Were</b> I in your position… (= If I were)</li></ul>`,
 examples:[["Never have I seen such a beautiful sunset.","Belum pernah saya melihat matahari terbenam seindah ini."],["Had I known, I would have helped.","Seandainya saya tahu, saya pasti membantu."],["Should you need anything, please call me.","Jika Anda membutuhkan sesuatu, silakan hubungi saya."],["Rarely do we get such an opportunity.","Jarang sekali kita mendapat kesempatan seperti ini."]],
 vocab:[["rarely","jarang"],["seldom","jarang sekali"],["hardly","hampir tidak"],["under no circumstances","dalam keadaan apa pun tidak"],["little did I know","sama sekali tidak saya sangka"],["only then","barulah saat itu"]],
 quiz:[{q:"Never ___ such a beautiful sunset.",o:["have I seen","I have seen","I saw","did I seen"],e:"Never + auxiliary + subjek."},
 {q:"___ I known, I would have helped.",o:["Had","If","Have","Did"],e:"Had I known = If I had known."},
 {q:"Not only ___ late, but he also forgot his notes.",o:["was he","he was","he is","did he"],e:"Not only + inversi (was he)."},
 {q:"No sooner had we arrived ___ it started to rain.",o:["than","when","then","that"],e:"Pasangan tetap: No sooner … than."}]},
 {id:"a2",title:"Wish, If only & Mixed Conditionals",theory:`<table><tr><th>Pola</th><th>Fungsi</th></tr>
<tr><td>wish + V2 / were</td><td>berharap keadaan sekarang berbeda</td></tr>
<tr><td>wish + had + V3</td><td>menyesali masa lalu</td></tr>
<tr><td>wish + would + V1</td><td>kesal pada perilaku orang lain</td></tr></table>
<p><b>If only</b> = wish, tetapi lebih emosional.</p>
<h3>Mixed conditional</h3><p>Masa lalu → akibat sekarang: <i>If I <b>had taken</b> that job, I <b>would be</b> rich now.</i><br>Sekarang → akibat masa lalu: <i>If I <b>were</b> braver, I <b>would have spoken</b> up.</i></p>`,
 examples:[["I wish I were taller.","Andai saya lebih tinggi."],["I wish I hadn't said that.","Andai saya tidak mengatakan itu."],["If only you would listen!","Andai saja kamu mau mendengarkan!"],["If I had saved money, I wouldn't be broke now.","Kalau dulu saya menabung, sekarang saya tidak bokek."]],
 vocab:[["if only","andai saja"],["broke","bokek"],["speak up","bersuara"],["brave","berani"],["save","menabung"],["complain","mengeluh"]],
 quiz:[{q:"I wish I ___ taller.",o:["were","am","will be","have been"],e:"Harapan tentang sekarang → were."},
 {q:"I wish I ___ that. It was a mistake.",o:["hadn't said","didn't say","wouldn't say","don't say"],e:"Penyesalan masa lalu → had + V3."},
 {q:"If I had taken that job, I ___ in London now.",o:["would be living","would have lived","will live","am living"],e:"Mixed: masa lalu → hasil sekarang (would + V1)."},
 {q:"I wish you ___ making that noise!",o:["would stop","stopped","had stopped","will stop"],e:"Kesal pada kebiasaan orang lain → wish + would."}]},
 {id:"a3",title:"Phrasal Verbs Penting",theory:`<p>Phrasal verb = kata kerja + partikel, artinya sering <b>tidak bisa ditebak</b> dari kata per kata. Sangat umum dalam percakapan.</p>
<table><tr><td><b>put off</b></td><td>menunda</td></tr><tr><td><b>come up with</b></td><td>memunculkan (ide)</td></tr>
<tr><td><b>turn down</b></td><td>menolak (tawaran)</td></tr><tr><td><b>run out of</b></td><td>kehabisan</td></tr>
<tr><td><b>look into</b></td><td>menyelidiki</td></tr><tr><td><b>get along with</b></td><td>akur dengan</td></tr>
<tr><td><b>bring up</b></td><td>mengungkit / membesarkan (anak)</td></tr><tr><td><b>figure out</b></td><td>memahami / menemukan jawaban</td></tr></table>`,
 examples:[["We need to come up with a better plan.","Kita perlu menemukan rencana yang lebih baik."],["The meeting was put off until next week.","Rapat ditunda hingga minggu depan."],["She turned down the job offer.","Dia menolak tawaran kerja itu."],["We've run out of milk.","Kita kehabisan susu."]],
 vocab:[["put off","menunda"],["turn down","menolak"],["run out of","kehabisan"],["figure out","memecahkan"],["look into","menyelidiki"],["get along with","akur dengan"]],
 quiz:[{q:"We need to ___ a better plan.",o:["come up with","come down to","put up","look after"],e:"come up with = memunculkan ide."},
 {q:"The meeting was ___ until next week.",o:["put off","put on","taken off","called up"],e:"put off = menunda."},
 {q:"She ___ the job offer because the salary was low.",o:["turned down","turned up","gave in","looked down"],e:"turn down = menolak."},
 {q:"We've ___ milk. Can you buy some?",o:["run out of","run into","run over","run away"],e:"run out of = kehabisan."}]},
 {id:"a4",title:"Cleft Sentences (Penekanan)",theory:`<p>Kalimat cleft memecah kalimat untuk <b>menonjolkan</b> satu bagian.</p>
<div class="formula">It + be + [bagian yang ditekankan] + that/who …<br>What + S + V + be + [penekanan]</div>
<ul><li>John broke the vase. → <b>It was John who</b> broke the vase.</li>
<li>I need a holiday. → <b>What I need is</b> a holiday.</li>
<li><b>All I want is</b> some peace and quiet.</li><li><b>The reason why</b> I left <b>is that</b> …</li></ul>`,
 examples:[["It was Sarah who found the keys.","Sarah-lah yang menemukan kuncinya."],["What I need is a long holiday.","Yang saya butuhkan adalah liburan panjang."],["All I want is some peace and quiet.","Yang saya mau hanyalah ketenangan."],["It was in Bali that I lost my phone.","Di Bali-lah saya kehilangan ponsel."]],
 vocab:[["emphasise","menekankan"],["peace and quiet","ketenangan"],["the thing is","masalahnya adalah"],["what matters is","yang penting adalah"],["vase","vas bunga"],["reason","alasan"]],
 quiz:[{q:"___ I need is a long holiday.",o:["What","That","Which","It"],e:"Pola: What + S + V + is …"},
 {q:"It was Sarah ___ found the keys.",o:["who","which","what","whom"],e:"It was + orang + who."},
 {q:"All I want ___ some peace and quiet.",o:["is","are","be","being"],e:"'All I want' dianggap tunggal → is."},
 {q:"Menekankan tempat dari 'I lost my phone in Bali':",o:["It was in Bali that I lost my phone.","It is Bali which I lost my phone.","What I lost was in Bali my phone.","Bali was where lost my phone."],e:"It was + [penekanan] + that + sisa kalimat."}]}
]},
{id:"expert",name:"Expert",cefr:"C2",color:"#2c3e50",desc:"Idiom, register formal, kolokasi, dan gaya akademik.",lessons:[
 {id:"x1",title:"Idioms Populer",theory:`<p>Idiom membuat bahasa Anda terdengar <b>natural seperti penutur asli</b>. Artinya tidak harfiah.</p>
<table><tr><td><b>a piece of cake</b></td><td>sangat mudah</td></tr><tr><td><b>break the ice</b></td><td>mencairkan suasana</td></tr>
<tr><td><b>under the weather</b></td><td>kurang enak badan</td></tr><tr><td><b>once in a blue moon</b></td><td>sangat jarang</td></tr>
<tr><td><b>cost an arm and a leg</b></td><td>sangat mahal</td></tr><tr><td><b>beat around the bush</b></td><td>berbelit-belit</td></tr>
<tr><td><b>hit the nail on the head</b></td><td>tepat sasaran</td></tr><tr><td><b>the ball is in your court</b></td><td>giliran Anda memutuskan</td></tr></table>`,
 examples:[["The exam was a piece of cake.","Ujiannya gampang sekali."],["I'm feeling a bit under the weather.","Saya agak kurang enak badan."],["That car cost an arm and a leg.","Mobil itu mahal sekali."],["Stop beating around the bush and tell me.","Jangan berbelit-belit, katakan saja."]],
 vocab:[["a piece of cake","sangat mudah"],["break the ice","mencairkan suasana"],["under the weather","kurang enak badan"],["once in a blue moon","sangat jarang"],["cost an arm and a leg","sangat mahal"],["hit the nail on the head","tepat sasaran"]],
 quiz:[{q:"\"The exam was a piece of cake\" artinya…",o:["Ujiannya sangat mudah","Ujiannya sangat sulit","Ujiannya enak","Ujiannya membosankan"],e:"a piece of cake = sangat mudah."},
 {q:"\"I'm feeling under the weather\" artinya…",o:["Saya kurang enak badan","Saya kehujanan","Saya senang","Saya kedinginan di luar"],e:"under the weather = sedikit sakit."},
 {q:"\"Stop beating around the bush!\" artinya…",o:["Langsung ke intinya!","Berhenti berkebun!","Berhenti berbohong!","Berhenti mengeluh!"],e:"beat around the bush = berbelit-belit."},
 {q:"\"We eat out once in a blue moon\" artinya…",o:["Sangat jarang","Setiap bulan purnama","Setiap malam","Saat hujan"],e:"once in a blue moon = sangat jarang."}]},
 {id:"x2",title:"Subjunctive & Register Formal",theory:`<p><b>Subjunctive</b>: setelah kata seperti <i>suggest, recommend, insist, demand, essential, vital</i> + <b>that</b>, gunakan <b>bentuk dasar</b> kata kerja untuk semua subjek.</p>
<div class="formula">It is essential that he <u>be</u> on time.<br>The doctor recommended that she <u>stop</u> smoking.</div>
<h3>Informal → Formal</h3>
<table><tr><td>get</td><td>obtain</td></tr><tr><td>ask for</td><td>request</td></tr><tr><td>help</td><td>assist</td></tr>
<tr><td>buy</td><td>purchase</td></tr><tr><td>need</td><td>require</td></tr><tr><td>find out</td><td>ascertain / determine</td></tr></table>`,
 examples:[["The board insisted that he be present.","Dewan bersikeras agar dia hadir."],["It is vital that every applicant submit the form.","Sangat penting setiap pelamar menyerahkan formulir."],["Please do not hesitate to contact us.","Jangan ragu untuk menghubungi kami."],["We regret to inform you that…","Dengan berat hati kami sampaikan bahwa…"]],
 vocab:[["obtain","memperoleh"],["request","meminta"],["assist","membantu"],["purchase","membeli"],["require","membutuhkan"],["ascertain","memastikan"]],
 quiz:[{q:"The doctor recommended that he ___ smoking.",o:["stop","stops","stopped","will stop"],e:"Subjunctive → bentuk dasar (stop)."},
 {q:"It is essential that every student ___ on time.",o:["be","is","was","being"],e:"essential that + be."},
 {q:"Padanan formal dari 'find out' adalah…",o:["ascertain","figure","look","discover out"],e:"find out → ascertain / determine."},
 {q:"I insist that he ___ informed.",o:["be","is","was","will be"],e:"insist that + bentuk dasar (be)."}]},
 {id:"x3",title:"Collocations & Nuance",theory:`<p><b>Kolokasi</b> = pasangan kata yang lazim dipakai bersama. Salah kolokasi terdengar janggal meski tata bahasanya benar.</p>
<table><tr><th>make</th><th>do</th></tr><tr><td>a decision, a mistake, progress, an effort</td><td>homework, business, research, a favour</td></tr></table>
<p>Lainnya: <b>heavy</b> rain, <b>strong</b> coffee, <b>highly</b> unlikely, <b>deeply</b> concerned, <b>bitterly</b> disappointed.</p>
<h3>Kata yang sering tertukar</h3><ul><li><b>economic</b> (terkait ekonomi) vs <b>economical</b> (hemat)</li>
<li><b>affect</b> (kata kerja: memengaruhi) vs <b>effect</b> (kata benda: dampak)</li>
<li><b>sensible</b> (masuk akal) vs <b>sensitive</b> (peka)</li></ul>`,
 examples:[["We need to make a decision soon.","Kita harus segera mengambil keputusan."],["There was heavy rain last night.","Tadi malam hujan deras."],["It's highly unlikely to happen.","Hal itu sangat kecil kemungkinannya terjadi."],["This car is very economical.","Mobil ini sangat irit."]],
 vocab:[["make progress","membuat kemajuan"],["do a favour","membantu"],["heavy traffic","lalu lintas padat"],["deeply concerned","sangat khawatir"],["affect","memengaruhi"],["effect","dampak"]],
 quiz:[{q:"We need to ___ a decision soon.",o:["make","do","have","get"],e:"Kolokasi: make a decision."},
 {q:"There was ___ rain last night.",o:["heavy","strong","big","thick"],e:"Kolokasi: heavy rain."},
 {q:"This car is very ___; it uses little fuel.",o:["economical","economic","economy","economist"],e:"economical = hemat."},
 {q:"The new law will ___ small businesses.",o:["affect","effect","infect","effort"],e:"affect = kata kerja (memengaruhi)."}]},
 {id:"x4",title:"Academic Writing & Hedging",theory:`<p><b>Discourse markers</b> menghubungkan ide secara logis:</p>
<table><tr><td>Kontras</td><td>however, nevertheless, whereas, on the other hand</td></tr>
<tr><td>Tambahan</td><td>moreover, furthermore, in addition</td></tr>
<tr><td>Akibat</td><td>consequently, therefore, as a result, hence</td></tr></table>
<p><b>Hedging</b>: melunakkan klaim agar lebih akademis dan hati-hati.</p>
<ul><li>This <b>suggests</b> that… (bukan "This proves…")</li><li>It <b>appears</b> that… / X <b>tends to</b>…</li><li><b>To some extent</b>, … / <b>Arguably</b>, …</li></ul>`,
 examples:[["The sample was small; nevertheless, the results are promising.","Sampelnya kecil; meski demikian, hasilnya menjanjikan."],["Prices rose sharply. Consequently, demand fell.","Harga naik tajam. Akibatnya, permintaan turun."],["These findings suggest a link between sleep and memory.","Temuan ini menunjukkan adanya kaitan antara tidur dan memori."],["Some prefer cities, whereas others prefer the countryside.","Sebagian suka kota, sementara yang lain suka pedesaan."]],
 vocab:[["nevertheless","meskipun demikian"],["consequently","akibatnya"],["whereas","sedangkan"],["furthermore","selanjutnya"],["arguably","bisa dikatakan"],["to some extent","sampai batas tertentu"]],
 quiz:[{q:"The data is limited; ___, the results are promising.",o:["nevertheless","moreover","therefore","because"],e:"Kontras → nevertheless."},
 {q:"Mana yang paling 'hedged' (hati-hati)?",o:["This suggests that…","This proves that…","This clearly shows…","This is definitely…"],e:"'suggests' melunakkan klaim."},
 {q:"Prices rose sharply. ___, demand fell.",o:["Consequently","Whereas","Although","Despite"],e:"Hubungan sebab-akibat → Consequently."},
 {q:"Some people prefer cities, ___ others prefer the countryside.",o:["whereas","moreover","therefore","hence"],e:"Membandingkan dua hal yang berbeda → whereas."}]}
]}
];
