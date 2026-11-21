// Soal tambahan. Format per baris:
//   m|soal|benar|salah|salah|salah|penjelasan      (pilihan ganda)
//   t|soal|jawaban1/jawaban2|penjelasan            (isian)
//   f|kalimat atau pernyataan|1 atau 0|penjelasan  (benar/salah)
//   o|kalimat Inggris|terjemahan                   (susun kata)
const EXTRA = {
b1: `
m|I ___ from Surabaya.|am|is|are|be|Subjek I selalu berpasangan dengan am.
m|My parents ___ teachers.|are|is|am|be|My parents = they (jamak), jadi memakai are.
m|It ___ very hot today.|is|are|am|be|It memakai is.
m|Tom and I ___ good friends.|are|is|am|be|Tom and I = we, jadi memakai are.
m|___ he your teacher?|Is|Are|Am|Does|Kalimat tanya to be untuk he: Is he ...?
m|Singkatan dari 'they are' adalah…|they're|their|there|theyre|they are disingkat menjadi they're. (their = milik mereka, there = di sana)
m|"Are you a student?" Jawaban singkat yang benar: "Yes, ___."|I am|I'm|I is|I are|Jawaban singkat positif tidak disingkat: Yes, I am.
t|The children ___ in the garden.|are|children adalah jamak (they), jadi memakai are.
t|My name ___ Dewi.|is|My name = it, jadi memakai is.
t|We ___ (not) late. Tulis bentuk singkatnya.|aren't/are not|are not disingkat menjadi aren't.
f|He are my brother.|0|Yang benar: He is my brother.
f|They are at school.|1|They berpasangan dengan are.
f|I is a student.|0|Yang benar: I am a student.
o|She is not at home.|Dia tidak di rumah.
o|Are they your friends?|Apakah mereka temanmu?
o|I am very happy today.|Saya sangat senang hari ini.
`,
b2: `
m|My mother ___ dinner every evening.|cooks|cook|cooking|is cook|My mother = she, jadi kata kerja ditambah -s.
m|I ___ up at 5 a.m. every day.|wake|wakes|waking|am wake|Subjek I memakai kata kerja dasar tanpa -s.
m|She ___ English at university.|studies|studys|study|studying|study berakhiran konsonan + y, menjadi studies.
m|He ___ eat meat. He is a vegetarian.|doesn't|don't|isn't|not|He memakai doesn't + kata kerja dasar.
m|___ your parents live in Jakarta?|Do|Does|Are|Is|Your parents = they, jadi memakai Do.
m|My brother ___ TV every night.|watches|watchs|watch|watching|Kata kerja berakhiran -ch ditambah -es.
m|How often ___ she visit her grandmother?|does|do|is|are|She memakai does dalam kalimat tanya.
t|He ___ (play) football every Sunday.|plays|He + kata kerja + s.
t|She ___ (not / like) coffee. Tulis dengan bentuk singkat.|doesn't like/does not like|Negatif untuk she: doesn't + V1.
t|The sun ___ (rise) in the east.|rises|Fakta umum, subjek tunggal: rises.
f|She don't like tea.|0|Yang benar: She doesn't like tea.
f|We always have breakfast at seven.|1|Subjek we memakai kata kerja dasar; always diletakkan sebelum kata kerja.
f|Does he works here?|0|Yang benar: Does he work here? Setelah does, kata kerja kembali ke bentuk dasar.
o|My sister works in a hospital.|Kakak perempuan saya bekerja di rumah sakit.
o|Do you like spicy food?|Apakah kamu suka makanan pedas?
o|My father does not work on Sundays.|Ayah saya tidak bekerja pada hari Minggu.
`,
b3: `
m|He is ___ honest man.|an|a|the|(kosong)|Huruf h pada 'honest' tidak dibaca, jadi diawali bunyi vokal dan memakai an.
m|This is ___ egg.|an|a|two|(kosong)|egg diawali bunyi vokal, jadi memakai an.
m|Bentuk jamak dari 'box' adalah…|boxes|boxs|boxies|box|Kata berakhiran -x ditambah -es.
m|Bentuk jamak dari 'man' adalah…|men|mans|mens|manes|man → men (tidak beraturan).
m|There are three ___ in the room.|women|woman|womans|womens|woman → women (tidak beraturan).
m|I bought a book. ___ book is about history.|The|A|An|(kosong)|Benda sudah disebut sebelumnya, jadi memakai the.
m|She wants to be ___ engineer.|an|a|the|(kosong)|engineer diawali bunyi vokal; profesi tunggal memakai a/an.
t|Tulis bentuk jamak dari 'city'.|cities|Konsonan + y menjadi -ies.
t|Tulis bentuk jamak dari 'tooth'.|teeth|tooth → teeth (tidak beraturan).
t|Tulis bentuk jamak dari 'watch'.|watches|Kata berakhiran -ch ditambah -es.
f|I have a apple.|0|Yang benar: I have an apple.
f|The sun rises in the east.|1|Benda yang hanya ada satu (sun) memakai the.
f|There are two childs in the park.|0|Yang benar: two children.
o|I have an old umbrella.|Saya punya sebuah payung tua.
o|The children are in the garden.|Anak-anak itu ada di taman.
o|It takes an hour by bus.|Butuh waktu satu jam naik bus.
`,
b4: `
m|There ___ a park near my house.|is|are|am|be|a park (tunggal) → there is.
m|___ there any students in the classroom?|Are|Is|Am|Do|students (jamak) → Are there ...?
m|There ___ any water in the bottle.|isn't|aren't|don't|not|water tak terhitung → there isn't.
m|The picture is ___ the wall.|on|in|under|between|Menempel pada permukaan (dinding) → on.
m|The keys are ___ my bag. (di dalam)|in|on|under|behind|di dalam = in.
m|The car is parked ___ the house. (di depan)|in front of|behind|under|between|di depan = in front of.
m|The dog is hiding ___ the door. (di belakang)|behind|in front of|on|between|di belakang = behind.
t|There ___ five people in my family.|are|five people (jamak) → there are.
t|There ___ a supermarket next to the bank.|is|a supermarket (tunggal) → there is.
t|The shoes are ___ the bed. (di bawah)|under|di bawah = under.
f|There is many cars on the road.|0|Yang benar: There are many cars on the road.
f|There is a bookstore next to the café.|1|a bookstore (tunggal) → there is; next to = di sebelah.
f|The lamp is in the table.|0|Benda di atas permukaan meja memakai on: The lamp is on the table.
o|There is a cat under the table.|Ada seekor kucing di bawah meja.
o|Is there a bank near here?|Apakah ada bank di dekat sini?
o|My house is behind the school.|Rumah saya berada di belakang sekolah.
`,
e1: `
m|She ___ dinner at the moment.|is cooking|cooks|cook|cooking|at the moment → sedang berlangsung: is + V-ing.
m|Look! It ___.|is raining|rains|rain|rained|Look! menandakan aksi yang sedang terjadi.
m|We ___ for the bus now.|are waiting|is waiting|waits|waited|We + are + V-ing.
m|I ___ this song. It's great!|love|am loving|loving|am love|love adalah stative verb, tidak memakai -ing.
m|Bentuk -ing dari 'run' adalah…|running|runing|runnning|runs|Pola konsonan-vokal-konsonan: huruf akhir digandakan → running.
m|Bentuk -ing dari 'write' adalah…|writing|writeing|writting|writes|Huruf e di akhir dihilangkan → writing.
m|He ___ working today. He's on holiday.|isn't|aren't|doesn't|don't|Negatif present continuous: isn't + V-ing.
t|They ___ (play) football right now.|are playing/'re playing|They + are + V-ing.
t|I ___ (read) an interesting book at the moment.|am reading/'m reading|I + am + V-ing.
t|Tulis bentuk -ing dari 'swim'.|swimming|Huruf akhir digandakan → swimming.
f|She is wanting a new phone.|0|want adalah stative verb. Yang benar: She wants a new phone.
f|We are having lunch right now.|1|have dalam arti 'makan' boleh memakai -ing.
f|He are sleeping.|0|Yang benar: He is sleeping.
o|What are you doing now?|Kamu sedang apa sekarang?
o|She is talking to her mother.|Dia sedang berbicara dengan ibunya.
o|We are not watching TV.|Kami tidak sedang menonton TV.
`,
e2: `
m|I ___ a great film last night.|saw|see|seen|seeing|last night → simple past; see → saw.
m|They ___ football yesterday afternoon.|played|play|plays|playing|Kata kerja beraturan: play → played.
m|She ___ at home yesterday. She was at work.|wasn't|weren't|didn't|isn't|to be lampau untuk she: was / wasn't.
m|Where ___ you go last weekend?|did|do|were|was|Tanya simple past dengan kata kerja → did.
m|Bentuk lampau (V2) dari 'eat' adalah…|ate|eated|eaten|eat|eat → ate. eaten adalah V3.
m|We ___ very tired after the trip.|were|was|did|are|We → were.
m|He ___ his keys two days ago.|lost|lose|losed|loses|ago → simple past; lose → lost.
t|She ___ (study) English last year.|studied|study → studied (y menjadi ied).
t|I ___ (not / go) to work yesterday. Tulis dengan bentuk singkat.|didn't go/did not go|Negatif: didn't + V1.
t|Tulis bentuk lampau (V2) dari 'take'.|took|take → took.
f|I didn't went to the party.|0|Yang benar: I didn't go to the party.
f|She bought a new bag last week.|1|buy → bought; last week → simple past.
f|Did you saw him?|0|Yang benar: Did you see him?
o|I did not see him yesterday.|Saya tidak melihatnya kemarin.
o|Where did you buy that bag?|Di mana kamu membeli tas itu?
o|We went to the beach last Sunday.|Kami pergi ke pantai hari Minggu lalu.
`,
e3: `
m|"I'm thirsty." "Wait, I ___ get you some water."|will|am going to|going to|am|Tawaran spontan → will.
m|She's pregnant. She ___ have a baby in June.|is going to|will to|goes to|is go to|Ada bukti yang jelas → be going to.
m|I think Indonesia ___ win the match.|will|is going|going to|wills|Prediksi berdasarkan opini (I think) → will.
m|We ___ move to Bandung next year. We've already found a house.|are going to|will to|going|are go to|Sudah direncanakan → be going to.
m|Setelah 'will', kata kerja berbentuk…|bentuk dasar (V1)|V-ing|V2|to + V1|will + kata kerja dasar: will go, will eat.
m|Singkatan dari 'will not' adalah…|won't|willn't|wouldn't|wan't|will not → won't.
m|Careful! You ___ fall!|are going to|will to|going|go to|Ada bukti saat ini (hampir jatuh) → be going to.
t|Don't worry, I ___ help you. (janji spontan, satu kata)|will/'ll|Janji atau keputusan spontan → will.
t|Look at the sky! It ___ going to rain.|is/'s|It + is + going to.
t|They ___ come tomorrow. (bentuk singkat dari 'will not')|won't|will not → won't.
f|I will to call you tomorrow.|0|Setelah will tidak ada 'to'. Yang benar: I will call you tomorrow.
f|She is going to study medicine next year.|1|Rencana → be going to + V1.
f|He going to buy a car.|0|Kurang to be. Yang benar: He is going to buy a car.
o|I am going to visit my grandmother.|Saya akan mengunjungi nenek saya.
o|Will you help me with this?|Maukah kamu membantu saya dengan ini?
o|It is not going to rain today.|Hari ini tidak akan hujan.
`,
e4: `
m|This bag is ___ than that one.|cheaper|cheap|cheapest|more cheap|Kata pendek → -er + than.
m|He is the ___ student in the class.|tallest|taller|tall|most tall|Superlative kata pendek → the + -est.
m|This exercise is ___ than the last one.|more difficult|difficulter|most difficult|difficult|Kata panjang → more + adjective.
m|Today is ___ than yesterday.|hotter|hoter|more hot|hottest|hot → hotter (huruf akhir digandakan).
m|This is the ___ day of my life!|happiest|happier|most happy|happyest|happy → the happiest.
m|My cooking is bad, but yours is ___.|worse|badder|worst|more bad|bad → worse (tidak beraturan).
m|Mount Everest is ___ mountain in the world.|the highest|higher|highest than|the most high|Superlative: the + -est.
t|Tulis bentuk comparative dari 'good'.|better|good → better.
t|A plane is ___ (fast) than a train.|faster|fast → faster.
t|This is the ___ (bad) film I've ever seen.|worst|bad → the worst.
f|She is more tall than me.|0|Yang benar: She is taller than me.
f|This is the most beautiful beach in Bali.|1|Kata panjang → the most + adjective.
f|My house is biger than yours.|0|Ejaan yang benar: bigger.
o|This phone is more expensive than mine.|Ponsel ini lebih mahal daripada punyaku.
o|She is the best singer in the school.|Dia penyanyi terbaik di sekolah.
o|He is as old as my brother.|Dia seumur dengan saudara laki-laki saya.
`,
i1: `
m|___ you ever eaten sushi?|Have|Did|Do|Are|Pengalaman → Have you ever + V3?
m|I have ___ finished my homework. (baru saja)|just|yet|since|ago|just = baru saja, diletakkan di antara have dan V3.
m|She hasn't arrived ___.|yet|already|just|since|yet dipakai di akhir kalimat negatif atau tanya.
m|He ___ his keys. He can't get into the house.|has lost|loses|is losing|have lost|Hasil yang terasa sekarang → has + V3.
m|I've worked here ___ 2019.|since|for|ago|during|Titik awal waktu → since.
m|V3 dari 'write' adalah…|written|wrote|writed|writing|write – wrote – written.
m|We ___ each other when we were children.|knew|have known|know|has known|Waktu lampau yang sudah selesai (when we were children) → simple past.
t|She ___ (visit) Paris three times.|has visited/'s visited|Pengalaman → has + V3.
t|I have lived here ___ five years.|for|Lamanya waktu → for.
t|Tulis V3 dari 'go'.|gone|go – went – gone.
f|I have seen that film last week.|0|Ada waktu spesifik (last week), jadi harus simple past: I saw that film last week.
f|They have already eaten.|1|already diletakkan di antara have dan V3.
f|She have finished her work.|0|She memakai has: She has finished her work.
o|Have you ever been to Japan?|Pernahkah kamu ke Jepang?
o|I have not seen him since Monday.|Saya belum melihatnya sejak Senin.
o|She has just finished her homework.|Dia baru saja menyelesaikan PR-nya.
`,
i2: `
m|You ___ wear a seatbelt. It's the law.|must|can|might|would|Kewajiban atau aturan → must.
m|___ I use your phone, please?|May|Must|Should|Will|Meminta izin secara sopan → May (atau Can / Could).
m|She ___ speak three languages.|can|must to|should to|cans|Kemampuan → can + V1.
m|You ___ eat so much sugar. It's bad for you.|shouldn't|mustn't to|don't can|haven't|Saran negatif → shouldn't.
m|Students ___ use phones during the exam. It's not allowed.|mustn't|don't have to|shouldn't to|needn't|Larangan → mustn't.
m|I ___ swim when I was five. (kemampuan di masa lalu)|could|can|must|should|Kemampuan di masa lalu → could.
m|Tomorrow is a holiday, so we ___ get up early.|don't have to|mustn't|can't|must|Tidak perlu → don't have to.
t|You ___ see a doctor. (saran, satu kata)|should|Saran → should.
t|He ___ to wear a uniform at work. (keharusan, subjek he)|has|He + has to + V1.
t|I ___ ride a bike when I was six. (kemampuan di masa lalu)|could|could = bentuk lampau can.
f|She can to drive.|0|Setelah modal tidak ada 'to'. Yang benar: She can drive.
f|You must be quiet in the library.|1|must + V1 (be).
f|He musts go now.|0|Modal tidak ditambah -s. Yang benar: He must go now.
o|You should not drive so fast.|Sebaiknya kamu tidak menyetir secepat itu.
o|Can I borrow your pen?|Boleh saya pinjam pulpenmu?
o|We do not have to wear a uniform.|Kami tidak perlu memakai seragam.
`,
i3: `
m|If you mix red and white, you ___ pink.|get|will got|got|would get|Fakta umum → zero conditional (present + present).
m|If I ___ time tomorrow, I'll call you.|have|will have|had|would have|Klausa if memakai present simple.
m|She will be angry if you ___ late.|are|will be|were|would be|Klausa if → present simple.
m|If you don't water plants, they ___.|die|will died|died|would die|Fakta umum → zero conditional.
m|We'll miss the train ___ we leave now.|unless|if|when|because|unless = if not: kita akan ketinggalan kecuali berangkat sekarang.
m|If he ___ the bus, he'll be late for school.|misses|will miss|missed|miss|Subjek he + present simple → misses.
m|What will you do if you ___ the exam?|fail|will fail|failed|would fail|Klausa if pada first conditional → present simple.
t|If you ___ (press) this button, the machine stops.|press|Zero conditional: present simple.
t|If it ___ (rain), we will cancel the picnic.|rains|Klausa if → present simple (it rains).
t|If you study hard, you ___ (pass) the exam.|will pass/'ll pass|First conditional: will + V1.
f|If it will rain, we will stay home.|0|Tidak memakai will di klausa if. Yang benar: If it rains, we will stay home.
f|If you heat water to 100°C, it boils.|1|Fakta ilmiah → zero conditional.
f|Unless you don't hurry, you'll be late.|0|unless sudah bermakna negatif. Yang benar: Unless you hurry, you'll be late.
o|If you are tired, go to bed.|Kalau kamu lelah, tidurlah.
o|I will call you if I need help.|Saya akan meneleponmu kalau butuh bantuan.
o|What will you do if she says no?|Apa yang akan kamu lakukan kalau dia bilang tidak?
`,
i4: `
m|This house ___ in 1920.|was built|built|is build|was build|Pasif lampau: was + V3.
m|Rice ___ in many parts of Asia.|is grown|grows by|is grow|grown|Pasif present: is + V3.
m|The winner ___ tomorrow.|will be announced|will announced|will be announce|announces|Pasif future: will be + V3.
m|My wallet ___ yesterday.|was stolen|stole|is stolen|was stole|Pasif lampau: was + V3 (stolen).
m|The telephone was invented ___ Alexander Graham Bell.|by|from|with|of|Pelaku dalam kalimat pasif diawali by.
m|These cars ___ in Japan.|are made|is made|made by|are make|cars (jamak) → are + V3.
m|Bentuk pasif dari 'Someone stole my bike' adalah…|My bike was stolen.|My bike stolen.|My bike is stole.|My bike was stole.|Past simple pasif: was + V3.
t|The book was ___ (write) by a famous author.|written|was + V3: written.
t|English and French ___ spoken in Canada.|are|Subjek jamak → are + V3.
t|The Mona Lisa ___ painted by Leonardo da Vinci. (lampau)|was|Subjek tunggal, lampau → was + V3.
f|The cake was ate by the children.|0|Harus V3. Yang benar: The cake was eaten by the children.
f|The match will be played on Saturday.|1|Pasif future: will be + V3.
f|The letter were sent yesterday.|0|letter tunggal → was. Yang benar: The letter was sent yesterday.
o|The window was broken by the storm.|Jendela itu pecah karena badai.
o|This song is loved by many people.|Lagu ini disukai banyak orang.
o|The results will be announced tomorrow.|Hasilnya akan diumumkan besok.
`,
u1: `
m|If I had more time, I ___ learn Japanese.|would|will|would have|had|Second conditional: would + V1.
m|What would you do if you ___ the lottery?|won|win|will win|had won|Second conditional: if + V2.
m|If he had left earlier, he ___ the train.|wouldn't have missed|wouldn't miss|won't miss|didn't miss|Third conditional: would have + V3.
m|If I ___ about the party, I would have gone.|had known|knew|know|would know|Third conditional: if + had + V3.
m|She would travel more if she ___ so busy.|weren't|isn't|wouldn't be|hadn't been|Second conditional: if + V2 (weren't).
m|'If I had studied harder, I would have passed' berarti…|Saya tidak belajar keras dan tidak lulus.|Saya belajar keras dan lulus.|Saya akan belajar keras.|Saya sedang belajar keras.|Third conditional menyatakan pengandaian masa lalu yang tidak terjadi.
m|If we lived by the sea, we ___ swim every day.|could|can|will|could have|Second conditional juga bisa memakai could + V1.
t|If I ___ (be) you, I would take the job. (bentuk baku)|were|If I were you adalah bentuk baku.
t|If they had invited me, I ___ have come. (satu kata)|would/could/might|Third conditional: would have + V3.
t|If she ___ (have) a car, she would drive to work.|had|Second conditional: if + V2.
f|If I would have money, I would buy it.|0|Tidak memakai would di klausa if. Yang benar: If I had money, I would buy it.
f|If I had seen you, I would have said hello.|1|Third conditional: if + had + V3, would have + V3.
f|If she studied harder, she will pass.|0|Polanya tidak cocok. Second conditional: If she studied harder, she would pass.
o|If I were you, I would tell the truth.|Kalau saya jadi kamu, saya akan berkata jujur.
o|I would buy a house if I had enough money.|Saya akan membeli rumah kalau punya cukup uang.
o|If he had asked me, I would have helped him.|Seandainya dia meminta, saya pasti membantunya.
`,
u2: `
m|"I can swim." → He said he ___ swim.|could|can|will|is able|can → could.
m|"I have finished." → She said she ___ finished.|had|has|have|was|present perfect → past perfect.
m|"I saw him yesterday." → She said she had seen him ___.|the day before|yesterday|tomorrow|the next day|yesterday → the day before.
m|"Don't touch it!" → He told me ___ it.|not to touch|to not touching|don't touch|not touch|Perintah negatif → told + objek + not to + V1.
m|"Open the window, please." → She asked me ___ the window.|to open|open|opening|that I open|Permintaan → asked + objek + to + V1.
m|He ___ me that he was busy.|told|said|spoke|talked|tell + objek (me); say tidak langsung diikuti objek orang.
m|"I'm leaving tomorrow." → She said she was leaving ___.|the next day|tomorrow|yesterday|the day before|tomorrow → the next day / the following day.
t|"I like pizza." → He said he ___ pizza.|liked|present → past.
t|"We are waiting." → They said they ___ waiting.|were|are → were.
t|"I must go." → She said she ___ to go.|had|must → had to.
f|She said me that she was ill.|0|say tidak diikuti objek orang. Yang benar: She told me that she was ill.
f|He asked me what time it was.|1|Pertanyaan tak langsung memakai susunan kalimat berita.
f|She asked where did I work.|0|Yang benar: She asked where I worked.
o|He said that he was very busy.|Dia bilang dia sangat sibuk.
o|She asked me if I liked coffee.|Dia bertanya apakah saya suka kopi.
o|They told us not to wait for them.|Mereka menyuruh kami untuk tidak menunggu mereka.
`,
u3: `
m|The book ___ I bought yesterday is great.|which|who|whose|where|Benda → which / that.
m|She is the teacher ___ helped me the most.|who|which|whose|where|Orang → who.
m|That's the restaurant ___ we had our first date.|where|which|who|whose|Tempat terjadinya sesuatu → where.
m|I met a man ___ sister works with you.|whose|who|which|that|Kepemilikan → whose.
m|Do you remember the day ___ we first met?|when|where|which|whose|Waktu → when.
m|Mr. Hadi, ___ teaches math, is retiring.|who|that|which|whose|Non-defining untuk orang → who (bukan that).
m|Manakah kalimat yang benar?|The man I met was friendly.|The man which I met was friendly.|The man whose I met was friendly.|The man where I met was friendly.|Relative pronoun sebagai objek boleh dihilangkan: The man (who/that) I met.
t|The woman ___ lives upstairs is a nurse.|who/that|Orang → who / that.
t|This is the town ___ I was born.|where|Tempat → where.
t|He's the writer ___ books I love.|whose|Kepemilikan → whose.
f|The car who I bought is red.|0|Benda memakai which/that. Yang benar: The car which I bought is red.
f|The girl who sits next to me is very smart.|1|Orang → who.
f|My mother, that is a doctor, works at night.|0|Non-defining clause tidak boleh memakai that. Yang benar: My mother, who is a doctor, works at night.
o|The man who called you is my uncle.|Pria yang meneleponmu adalah paman saya.
o|This is the place where we met.|Ini tempat kami bertemu.
o|I like people who make me laugh.|Saya suka orang yang membuat saya tertawa.
`,
u4: `
m|She avoids ___ at night.|driving|to drive|drive|drove|avoid + V-ing.
m|We hope ___ you again soon.|to see|seeing|see|saw|hope + to V1.
m|He's interested in ___ photography.|learning|to learn|learn|learned|Setelah preposisi (in) → V-ing.
m|Would you mind ___ the door?|closing|to close|close|closed|mind + V-ing.
m|They agreed ___ us.|to help|helping|help|helped|agree + to V1.
m|___ is good for your health.|Swimming|Swim|To swimming|Swam|Gerund sebagai subjek kalimat.
m|Remember ___ the door when you leave!|to lock|locking|lock|locked|remember + to V1 = ingat untuk melakukan sesuatu.
t|I can't afford ___ (buy) a new car.|to buy|afford + to V1.
t|He finished ___ (write) the report.|writing|finish + V-ing.
t|She is good at ___ (cook).|cooking|Setelah preposisi (at) → V-ing.
f|I want going home.|0|want + to V1. Yang benar: I want to go home.
f|He suggested taking a taxi.|1|suggest + V-ing.
f|She enjoys to dance.|0|enjoy + V-ing. Yang benar: She enjoys dancing.
o|I am thinking of changing my job.|Saya sedang berpikir untuk ganti pekerjaan.
o|She refused to answer the question.|Dia menolak menjawab pertanyaan itu.
o|Thank you for helping me.|Terima kasih sudah membantu saya.
`,
a1: `
m|Rarely ___ such a talented player.|have we seen|we have seen|we saw|did we seen|Rarely + auxiliary + subjek.
m|Hardly had I sat down ___ the phone rang.|when|than|then|that|Pasangan tetap: Hardly … when.
m|___ you need any help, please let me know.|Should|Would|Had|Were|Should you need = If you need (formal).
m|Under no circumstances ___ this door be left open.|should|does|is|has|Under no circumstances + auxiliary + subjek.
m|Little ___ that his life was about to change.|did he know|he knew|he did know|knew he|Little + did + subjek + V1.
m|Only then ___ how serious the problem was.|did I realise|I realised|I did realise|realised I|Only then + auxiliary + subjek.
m|___ I in your position, I would resign.|Were|Was|Had|Should|Were I = If I were (formal).
t|Not until the next day ___ I hear the news. (satu kata)|did|Not until … + did + subjek + V1.
t|Seldom ___ she arrive late. (present, satu kata)|does|Seldom + does + subjek + V1.
t|___ he studied harder, he would have passed. (= If he had studied)|Had|Had + subjek + V3 = If + subjek + had + V3.
f|Never I have been so embarrassed.|0|Perlu inversi: Never have I been so embarrassed.
f|Not only did she win, but she also broke the record.|1|Not only + did + subjek + V1.
f|No sooner had I left when it started raining.|0|Pasangannya than: No sooner had I left than it started raining.
o|Never have I heard such nonsense.|Belum pernah saya mendengar omong kosong seperti itu.
o|Had we known, we would have come earlier.|Seandainya kami tahu, kami pasti datang lebih awal.
o|Rarely does he make a mistake.|Jarang sekali dia membuat kesalahan.
`,
a2: `
m|I wish I ___ speak Spanish.|could|can|will|would have|wish + could untuk kemampuan yang tidak dimiliki sekarang.
m|If only I ___ more attention in class back then!|had paid|paid|would pay|pay|Penyesalan masa lalu → had + V3.
m|She wishes she ___ so far from her family.|didn't live|doesn't live|won't live|hasn't lived|Keadaan sekarang → wish + V2.
m|I wish it ___ raining. I want to go out.|would stop|stops|will stop|has stopped|Berharap situasi berubah → wish + would.
m|If I weren't afraid of flying, I ___ you last summer.|would have visited|would visit|will visit|visited|Mixed: kondisi umum sekarang → akibat di masa lalu (would have + V3).
m|If she had gone to bed earlier, she ___ so tired now.|wouldn't be|wouldn't have been|won't be|isn't|Mixed: masa lalu → akibat sekarang (would + V1).
m|'I wish I had a car' berarti…|Saya tidak punya mobil sekarang.|Saya dulu punya mobil.|Saya akan membeli mobil.|Saya punya mobil.|wish + V2 = keadaan sekarang yang tidak nyata.
t|I wish I ___ (know) the answer. (sekarang)|knew|wish + V2 untuk masa kini.
t|I wish I ___ (not / eat) so much last night. Tulis dengan bentuk singkat.|hadn't eaten/had not eaten|Penyesalan masa lalu → hadn't + V3.
t|If only he ___ (be) here now!|were/was|If only + were (bentuk baku) untuk masa kini.
f|I wish I would be taller.|0|Untuk keadaan diri sendiri pakai V2: I wish I were taller.
f|I wish you had told me earlier.|1|Penyesalan masa lalu → had + V3.
f|If only I know her number.|0|Yang benar: If only I knew her number.
o|I wish I had more free time.|Andai saya punya lebih banyak waktu luang.
o|If only we had left earlier.|Andai saja kita berangkat lebih awal.
o|I wish you would listen to me.|Andai kamu mau mendengarkan saya.
`,
a3: `
m|Can you ___ the children while I'm out?|look after|look into|look up to|look down on|look after = menjaga atau merawat.
m|I can't ___ this noise any longer!|put up with|put off|put on|put away|put up with = tahan terhadap, menoleransi.
m|The plane ___ at 9 a.m.|took off|took up|took over|took in|take off = lepas landas.
m|She ___ smoking two years ago.|gave up|gave in|gave away|gave out|give up = berhenti dari kebiasaan.
m|The police are ___ the case.|looking into|looking after|looking up to|looking out|look into = menyelidiki.
m|I ___ an old friend at the mall yesterday.|ran into|ran out of|ran over|ran away|run into = bertemu tanpa sengaja.
m|He was ___ by his grandparents.|brought up|brought in|brought down|brought out|bring up = membesarkan (anak).
t|We've run ___ of sugar. (satu kata)|out|run out of = kehabisan.
t|Please turn ___ the music. It's too loud. (kecilkan, satu kata)|down|turn down = mengecilkan (juga: menolak).
t|I get ___ well with my colleagues. (akur, satu kata)|along/on|get along (on) with = akur dengan.
f|'Call off the meeting' berarti menunda rapat ke hari lain.|0|call off = membatalkan. Menunda = put off.
f|'I'll look into it' berarti saya akan menyelidikinya.|1|look into = menyelidiki atau memeriksa.
f|'She takes after her mother' berarti dia merawat ibunya.|0|take after = mirip dengan. Merawat = look after.
o|We need to figure out a solution.|Kita perlu menemukan solusinya.
o|She came up with a brilliant idea.|Dia mendapat ide cemerlang.
o|Do not put off your homework.|Jangan menunda PR-mu.
`,
a4: `
m|It was the noise ___ woke me up.|that|what|who|where|It was + benda + that.
m|___ she did was call the police.|What|That|It|Which|What + S + V + was …
m|It is my brother ___ lives in Canada, not my sister.|who|which|what|whose|It is + orang + who/that.
m|The reason ___ I called is to apologise.|why|what|which|who|The reason why …
m|What I love about Bali ___ the food.|is|are|be|were|Klausa what dianggap tunggal → is.
m|It was not until midnight ___ he came home.|that|when|than|which|It was not until … that …
m|Menekankan objek dari 'I want coffee':|What I want is coffee.|What I want coffee is.|It is what coffee I want.|That I want is coffee.|What + S + V + is + bagian yang ditekankan.
t|___ I need is more time. (satu kata)|What/All|What I need is … (All I need is … juga benar).
t|It was Maria ___ called you. (satu kata)|who/that|It was + orang + who/that.
t|It ___ in 2015 that we first met. (satu kata)|was|It was … that (lampau).
f|It was John which broke the window.|0|Untuk orang pakai who/that: It was John who broke the window.
f|What I like most is the atmosphere.|1|What + S + V + is + bagian yang ditekankan.
f|It was yesterday when that I saw her.|0|Cukup that: It was yesterday that I saw her.
o|What I need is a good rest.|Yang saya butuhkan adalah istirahat yang cukup.
o|It was my sister who told me.|Kakak saya-lah yang memberi tahu saya.
o|All we can do is wait.|Yang bisa kita lakukan hanyalah menunggu.
`,
x1: `
m|"That phone cost an arm and a leg" artinya…|Ponsel itu sangat mahal|Ponsel itu rusak|Ponsel itu dicuri|Ponsel itu murah|cost an arm and a leg = sangat mahal.
m|"Let's break the ice" artinya…|Mari mencairkan suasana|Mari memecahkan es|Mari bertengkar|Mari pulang|break the ice = mencairkan suasana.
m|"You hit the nail on the head" artinya…|Kamu tepat sekali|Kamu melukai kepalamu|Kamu salah besar|Kamu bekerja terlalu keras|hit the nail on the head = tepat sasaran.
m|"The ball is in your court" artinya…|Sekarang giliranmu memutuskan|Bolanya ada di lapanganmu|Kamu sudah kalah|Kamu harus berolahraga|the ball is in your court = keputusan ada di tanganmu.
m|"I'm all ears" artinya…|Saya siap mendengarkan|Telinga saya sakit|Saya tidak mau dengar|Saya sedang sibuk|all ears = mendengarkan dengan penuh perhatian.
m|"Don't spill the beans!" artinya…|Jangan bocorkan rahasia!|Jangan tumpahkan kacang!|Jangan terlambat!|Jangan boros!|spill the beans = membocorkan rahasia.
m|"It's raining cats and dogs" artinya…|Hujan sangat deras|Banyak kucing dan anjing|Cuacanya cerah|Hujan gerimis|rain cats and dogs = hujan lebat.
t|The test was a piece of ___. (sangat mudah)|cake|a piece of cake = sangat mudah.
t|He visits us once in a blue ___. (sangat jarang)|moon|once in a blue moon = sangat jarang.
t|Stop beating around the ___ and get to the point.|bush|beat around the bush = berbelit-belit.
f|'Break a leg!' diucapkan untuk mendoakan keberhasilan seseorang.|1|Break a leg = semoga sukses (biasanya sebelum tampil).
f|'Under the weather' berarti sedang kehujanan.|0|under the weather = kurang enak badan.
f|'To cost an arm and a leg' berarti sangat murah.|0|Artinya sangat mahal.
o|That exam was a piece of cake.|Ujian itu gampang sekali.
o|She told a joke to break the ice.|Dia melontarkan lelucon untuk mencairkan suasana.
o|I only see him once in a blue moon.|Saya sangat jarang bertemu dengannya.
`,
x2: `
m|It is vital that she ___ the truth.|know|knows|knew|will know|Subjunctive → bentuk dasar.
m|They demanded that the manager ___ immediately.|resign|resigns|resigned|would resigns|demand that + bentuk dasar.
m|Padanan formal dari 'buy' adalah…|purchase|get|pick up|grab|buy → purchase.
m|Padanan formal dari 'ask for' adalah…|request|want|beg|call|ask for → request.
m|Kalimat mana yang paling formal?|I would be grateful if you could reply promptly.|Write back soon, OK?|Reply ASAP please!|Can you get back to me quickly?|would be grateful if you could … adalah ungkapan formal.
m|We suggest that the meeting ___ postponed.|be|is|was|will|Subjunctive pasif: be + V3.
m|Padanan formal dari 'help' adalah…|assist|give a hand|back up|sort out|help → assist.
t|It is important that he ___ (be) informed at once.|be|Subjunctive: be.
t|The committee recommends that she ___ (attend) the meeting.|attend|Subjunctive: bentuk dasar tanpa -s.
t|Tulis padanan formal dari 'need' (kata kerja, diawali huruf r).|require|need → require.
f|It is vital that he attends the meeting. (gaya formal dengan subjunctive)|0|Dalam subjunctive formal: It is vital that he attend the meeting.
f|It is essential that everyone be on time.|1|Subjunctive: be untuk semua subjek.
f|'Purchase' lebih formal daripada 'buy'.|1|purchase adalah padanan formal dari buy.
o|It is essential that he be present.|Sangat penting dia hadir.
o|We regret to inform you of the delay.|Dengan berat hati kami informasikan keterlambatan ini.
o|Please do not hesitate to contact us.|Jangan ragu untuk menghubungi kami.
`,
x3: `
m|Can you ___ me a favour?|do|make|give|have|Kolokasi: do a favour.
m|I always ___ my homework after dinner.|do|make|write|work|Kolokasi: do homework.
m|She ___ a mistake in the report.|made|did|had|took|Kolokasi: make a mistake.
m|I'd like a cup of ___ coffee, please.|strong|heavy|powerful|hard|Kolokasi: strong coffee.
m|He's a very ___ person; he cries easily.|sensitive|sensible|sensual|sensed|sensitive = peka, mudah tersentuh.
m|The medicine had no ___ on him.|effect|affect|effort|infect|effect = kata benda (dampak).
m|We are ___ concerned about the situation.|deeply|heavily|thickly|loudly|Kolokasi: deeply concerned.
t|You are making good ___ in English. (kemajuan)|progress|Kolokasi: make progress.
t|It's ___ unlikely that he will come. (sangat, diawali huruf h)|highly|Kolokasi: highly unlikely.
t|Let's ___ a break. (istirahat sejenak, kata kerja)|take/have|Kolokasi: take a break atau have a break.
f|'Do a mistake' adalah kolokasi yang benar.|0|Yang benar: make a mistake.
f|'Heavy traffic' adalah kolokasi yang benar.|1|heavy traffic = lalu lintas padat.
f|'The economical crisis' adalah frasa yang benar untuk 'krisis ekonomi'.|0|Yang benar: the economic crisis. economical = hemat.
o|We need to make an effort.|Kita perlu berusaha.
o|She did a lot of research.|Dia melakukan banyak penelitian.
o|It was a sensible decision.|Itu keputusan yang masuk akal.
`,
x4: `
m|The experiment failed. ___, the team learned a great deal.|Nevertheless|Therefore|Moreover|Hence|Kontras antara dua ide → Nevertheless.
m|The method is cheap. ___, it is easy to use.|Moreover|However|Nevertheless|Whereas|Menambah informasi sejenis → Moreover.
m|Sales fell; ___, the company cut jobs.|as a result|whereas|in addition to|on the other hand|Sebab-akibat → as a result.
m|Mana yang paling cocok untuk tulisan akademik?|The results indicate a possible link.|The results totally prove it.|Obviously, we were right.|Everybody knows this is true.|Bahasa akademik memakai klaim yang hati-hati (indicate, possible).
m|This ___ to be the main cause of the problem.|appears|definitely|sure|obviously|appear to = tampaknya (hedging).
m|___ the high cost, the project was approved.|Despite|Although|However|Because|Despite + kata benda. Although harus diikuti klausa.
m|___ it was expensive, the project was approved.|Although|Despite|However|In spite|Although + klausa (subjek + kata kerja).
t|Children ___ to learn languages faster than adults. (cenderung, satu kata)|tend|tend to = cenderung (hedging).
t|___ some extent, the theory is correct. (satu kata)|To|To some extent = sampai batas tertentu.
t|The data ___ (suggest) that the treatment is effective.|suggest/suggests|suggest = menunjukkan (hedging). 'data' bisa dianggap jamak atau tunggal.
f|'Furthermore' digunakan untuk menyatakan kontras.|0|Furthermore menambah informasi. Kontras: however, nevertheless.
f|'This may be due to a lack of sleep' adalah contoh hedging.|1|may be due to melunakkan klaim.
f|'Hence' memiliki arti yang mirip dengan 'therefore'.|1|Keduanya menyatakan akibat atau kesimpulan.
o|These findings suggest a possible link.|Temuan ini menunjukkan adanya kemungkinan kaitan.
o|However, further research is needed.|Namun, penelitian lebih lanjut diperlukan.
o|The results are consistent with previous studies.|Hasilnya konsisten dengan penelitian sebelumnya.
`
};
