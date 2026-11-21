/* Percakapan interaktif: satu adegan per level.
   ["p", kalimat partner, terjemahan] atau ["u", [jawaban benar, salah, salah], penjelasan].
   {n} diganti nama panggilan pengguna. */
const TALK = {
  basic: { title: "Kenalan di kelas", place: "Hari pertama kursus", who: "Emma", turns: [
    ["p", "Hi! I'm Emma. What's your name?", "Hai! Aku Emma. Siapa namamu?"],
    ["u", ["My name is {n}.", "I name is {n}.", "Me name {n}."], "Perkenalkan diri dengan My name is … atau I'm …"],
    ["p", "Nice to meet you, {n}! Where are you from?", "Senang bertemu denganmu! Kamu dari mana?"],
    ["u", ["I'm from Indonesia.", "I from Indonesia.", "I'm come Indonesia."], "Polanya I'm from + negara atau kota. Jangan lupa am ('m)."],
    ["p", "Cool! How old are you?", "Keren! Umurmu berapa?"],
    ["u", ["I'm twenty-five years old.", "I have twenty-five years.", "I'm twenty-five years."], "Umur memakai be: I'm 25 atau I'm 25 years old. \"I have 25 years\" adalah terjemahan langsung yang keliru."],
    ["p", "What do you do?", "Apa pekerjaanmu?"],
    ["u", ["I'm a teacher.", "I'm teacher.", "I do teacher."], "Profesi tunggal butuh a/an: I'm a teacher, I'm an engineer."],
    ["p", "That's great! Do you like English?", "Bagus! Kamu suka bahasa Inggris?"],
    ["u", ["Yes, I do. I like it a lot.", "Yes, I like. Very like.", "Yes, I am like it."], "Jawaban pendek untuk Do you …? adalah Yes, I do atau No, I don't."],
    ["p", "Me too! See you in class, {n}.", "Aku juga! Sampai ketemu di kelas."]
  ] },
  elem: { title: "Pesan di kafe", place: "Kafe dekat kantor", who: "Sam", turns: [
    ["p", "Good morning! What can I get for you?", "Selamat pagi! Mau pesan apa?"],
    ["u", ["Can I have a latte, please?", "Give me latte.", "I want a latte, give."], "Can I have …, please? terdengar sopan. \"Give me\" terlalu langsung."],
    ["p", "Sure. Hot or iced?", "Tentu. Panas atau dingin?"],
    ["u", ["Iced, please.", "Ice please cold.", "Iced, thanks you."], "Cukup jawab singkat ditambah please. \"Thanks you\" salah; yang benar thank you atau thanks."],
    ["p", "What size would you like? Small, medium or large?", "Ukuran apa? Kecil, sedang, atau besar?"],
    ["u", ["A medium one, please.", "Medium size one big.", "I would like medium a."], "One menggantikan kata benda yang sudah disebut: a medium one = latte ukuran sedang."],
    ["p", "Anything else?", "Ada lagi?"],
    ["u", ["Yes, a chocolate muffin, please.", "Yes, any chocolate muffin.", "Yes, a chocolates muffin."], "Satu barang memakai a. Any dipakai di kalimat tanya atau negatif."],
    ["p", "That's seven fifty. Cash or card?", "Totalnya tujuh lima puluh. Tunai atau kartu?"],
    ["u", ["Card, please. Here you go.", "Card. Here you are go.", "By card, here is you."], "Here you go atau Here you are dipakai saat menyerahkan sesuatu."],
    ["p", "Thank you! Your drink will be ready in a minute.", "Terima kasih! Minumanmu siap sebentar lagi."]
  ] },
  inter: { title: "Check-in hotel", place: "Lobi Harbor Hotel", who: "Mr. Lee", turns: [
    ["p", "Good evening, welcome to the Harbor Hotel. How can I help you?", "Selamat malam, selamat datang di Harbor Hotel. Ada yang bisa saya bantu?"],
    ["u", ["Hi, I have a reservation under the name {n}.", "Hi, I have reservation on name {n}.", "Hi, I reserved by name {n} yesterday ago."], "Ungkapan bakunya: a reservation under the name …"],
    ["p", "Let me check. Yes, a double room for three nights. Could I see your passport, please?", "Saya cek dulu. Ya, kamar double untuk tiga malam. Boleh lihat paspor Anda?"],
    ["u", ["Of course. Here it is.", "Of course. Here is it.", "Of course. It here is."], "Urutan yang benar untuk satu benda: Here it is."],
    ["p", "Thank you. Breakfast is served from six to ten. Would you like a wake-up call?", "Terima kasih. Sarapan pukul enam sampai sepuluh. Mau dibangunkan lewat telepon?"],
    ["u", ["Yes, please. Could you call me at six thirty?", "Yes, please. Can you calling me at six thirty?", "Yes, please. You call me six thirty o'clock."], "Setelah can atau could, pakai kata kerja dasar: Could you call me …?"],
    ["p", "No problem. Is there anything else I can do for you?", "Baik. Ada lagi yang bisa saya bantu?"],
    ["u", ["Is there a pharmacy near here?", "Is there have a pharmacy near here?", "There is a pharmacy near here, yes?"], "Untuk menanyakan ada atau tidaknya sesuatu: Is there a … near here?"],
    ["p", "Yes, there's one just around the corner, next to the bank.", "Ada, tepat di tikungan, di sebelah bank."],
    ["u", ["Great, thank you for your help.", "Great, thank you for you help.", "Great, thanks for helping to me."], "Thank you for your help. Your (milikmu), bukan you."],
    ["p", "You're welcome. Enjoy your stay!", "Sama-sama. Selamat menikmati masa inap Anda!"]
  ] },
  upper: { title: "Komplain lewat telepon", place: "Layanan pelanggan QuickShop", who: "Nadia", turns: [
    ["p", "Thank you for calling QuickShop. This is Nadia speaking. How may I help you?", "Terima kasih telah menghubungi QuickShop. Saya Nadia. Ada yang bisa saya bantu?"],
    ["u", ["Hi, I'm calling about an order I placed last week.", "Hi, I call about an order I have placed last week.", "Hi, I'm calling for order that I place last week."], "I'm calling about … adalah pembuka yang wajar. Last week butuh past simple: I placed."],
    ["p", "I'm sorry to hear there's an issue. Could you give me your order number?", "Maaf atas kendalanya. Boleh minta nomor pesanannya?"],
    ["u", ["Sure, it's QS48271.", "Sure, is QS48271.", "Sure, the number it is QS48271."], "Kalimat bahasa Inggris butuh subjek: it's …, bukan is … saja."],
    ["p", "Thank you. I can see it was delivered yesterday. What seems to be the problem?", "Terima kasih. Pesanan diterima kemarin. Apa masalahnya?"],
    ["u", ["The headphones I received don't work properly.", "The headphones I received doesn't work properly.", "The headphones what I received not working proper."], "Headphones berbentuk jamak, jadi don't. Properly adalah adverb."],
    ["p", "I apologise for that. Would you prefer a replacement or a refund?", "Mohon maaf. Anda memilih penggantian barang atau pengembalian dana?"],
    ["u", ["I'd rather have a replacement, if possible.", "I'd rather to have a replacement, if possible.", "I'd prefer have a replacement, if possible."], "Would rather + kata kerja dasar tanpa to. Prefer memakai to: I'd prefer to have …"],
    ["p", "Certainly. We'll send a new pair within three days, and you'll get a return label by email.", "Tentu. Kami kirim yang baru dalam tiga hari, dan label retur dikirim lewat email."],
    ["u", ["Perfect. Would you mind confirming that by email as well?", "Perfect. Would you mind to confirm that by email as well?", "Perfect. Do you mind confirm that by email as well?"], "Would you mind + -ing: Would you mind confirming …?"],
    ["p", "Not at all. You'll receive it shortly. Have a great day!", "Tentu saja. Email segera dikirim. Semoga hari Anda menyenangkan!"]
  ] },
  adv: { title: "Wawancara kerja", place: "Ruang rapat kantor", who: "Ms. Carter", turns: [
    ["p", "Thanks for coming in today. Could you start by telling me a little about yourself?", "Terima kasih sudah datang. Bisa mulai dengan menceritakan sedikit tentang diri Anda?"],
    ["u", ["Sure. I've been working in marketing for five years, mainly on digital campaigns.", "Sure. I am working in marketing since five years, mainly on digital campaigns.", "Sure. I work in marketing for five years until now, mainly digital campaigns."], "Durasi yang berlangsung sampai sekarang memakai present perfect (continuous) + for: I've been working … for five years."],
    ["p", "Why are you interested in this position?", "Kenapa Anda tertarik dengan posisi ini?"],
    ["u", ["I'm keen to take on more responsibility, and your focus on innovation really appeals to me.", "I'm keen on take more responsibility, and your focus on innovation is appealing for me.", "I want responsibility more, and your innovation is very appeal to me."], "Keen to + verb atau keen on + -ing. Sesuatu appeals to someone."],
    ["p", "Can you tell me about a challenge you faced and how you handled it?", "Ceritakan tantangan yang pernah Anda hadapi dan cara Anda mengatasinya."],
    ["u", ["We once lost a major client, so I led a review that helped us win them back within two months.", "We once lose a major client, so I lead a review that help us win them back in two months.", "Once a major client was lost by us, then I was leading review and they back in two months."], "Cerita masa lalu memakai past simple secara konsisten: lost, led, helped."],
    ["p", "What would you say is your biggest weakness?", "Menurut Anda, apa kelemahan terbesar Anda?"],
    ["u", ["I sometimes take on too much, but I've learned to delegate and prioritise better.", "I sometimes take on too much, but I've learned delegating and prioritise better.", "My weakness is I am too perfect, so I don't have weakness."], "Learn + to + verb. Jawaban yang baik jujur dan menunjukkan perbaikan."],
    ["p", "Do you have any questions for us?", "Ada pertanyaan untuk kami?"],
    ["u", ["Yes. What would a typical day look like in this role?", "Yes. How a typical day would look like in this role?", "Yes. What is typical day look like in this role?"], "Pola yang benar: What would … look like? Bukan How … look like."],
    ["p", "Great question. We'll be in touch by Friday. Thank you for your time.", "Pertanyaan bagus. Kami akan menghubungi Anda paling lambat Jumat. Terima kasih atas waktunya."]
  ] },
  expert: { title: "Negosiasi kontrak", place: "Rapat daring dengan klien", who: "Mr. Okafor", turns: [
    ["p", "Thanks for joining. I'll be frank: your proposal is excellent, but the price is well above our budget.", "Terima kasih sudah bergabung. Terus terang, proposal Anda bagus, tapi harganya jauh di atas anggaran kami."],
    ["u", ["I appreciate your candour. Could you tell me which part of the budget is under the most pressure?", "I appreciate your candour. Could you tell me which part of budget is under most pressure?", "Thank for being frank. Tell me which is the budget part most pressured?"], "Tanggapi keberatan dengan menghargai, lalu menggali: I appreciate … Could you tell me …?"],
    ["p", "Mainly the implementation phase. We simply can't justify that cost this year.", "Terutama tahap implementasi. Kami tidak bisa membenarkan biaya itu tahun ini."],
    ["u", ["Were we to phase the implementation over two quarters, would that make it more manageable?", "If we would phase the implementation over two quarters, will it make it more manageable?", "Were we phase the implementation over two quarters, it would be manageable?"], "Inversi kondisional formal: Were we to …, would that …? Artinya sama dengan If we were to …"],
    ["p", "That might work, provided the core features are delivered first.", "Itu mungkin bisa, asalkan fitur inti dikirim lebih dulu."],
    ["u", ["That's entirely reasonable. We'd prioritise them in phase one, subject to your sign-off.", "That's entirely reasonable. We'd prioritise them in phase one, subject to you sign off.", "Is very reasonable. We prioritise them phase one, subject your sign-off."], "Subject to + noun: subject to your sign-off (tergantung persetujuan Anda)."],
    ["p", "And what about support? Your competitors include a year of it at no extra cost.", "Bagaimana dengan dukungan? Pesaing Anda memberi gratis setahun."],
    ["u", ["Rather than match that outright, we could offer six months of premium support, which goes well beyond a standard package.", "Rather than match that outright, we could offer six months of premium support, what goes well beyond a standard package.", "Instead to match that, we could offer six months of premium support, that it goes beyond standard package."], "Klausa yang menerangkan seluruh pernyataan sebelumnya memakai which, bukan what."],
    ["p", "Hmm. If you can put that in writing, I think we have a deal.", "Hmm. Kalau itu tertulis, saya rasa kita sepakat."],
    ["u", ["Absolutely. I'll have a revised proposal on your desk by Thursday.", "Absolutely. I'll have a revised proposal be on your desk by Thursday.", "Absolutely. I'll make a revised proposal to arrive your desk by Thursday."], "I'll have something on your desk by … berarti memastikan sesuatu sudah sampai pada waktunya."],
    ["p", "Excellent. It's been a pleasure doing business with you.", "Bagus sekali. Senang berbisnis dengan Anda."]
  ] }
};
