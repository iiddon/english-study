// Konten tambahan: 2 bacaan baru, 6 kalimat bicara, dan 1 percakapan baru per level.
const READING2 = {
basic: [
{title:"My Best Friend", text:["My best friend is Tono. He is twenty-two years old and he lives near my house in Malang.","Tono is tall and he has short black hair. He works in a bakery. Every morning he makes bread and cakes. His cakes are very delicious!","On Sundays we play football in the park. After that, we drink iced tea and talk about our week. Tono is funny and kind. I am happy he is my friend."],
 qs:`
m|Where does Tono work?|in a bakery|in a bank|in a school|in a hospital|"He works in a bakery."
m|What does Tono look like?|tall with short black hair|short with long hair|tall with long brown hair|short with no hair|"Tono is tall and he has short black hair."
m|What do they do on Sundays?|play football|go shopping|cook together|watch films|"On Sundays we play football in the park."
f|Tono lives far from the writer.|0|"He lives near my house."
f|They drink iced tea after football.|1|"After that, we drink iced tea…"
`},
{title:"A Busy Family", text:["There are five people in my family: my father, my mother, my two sisters, and me.","My father is a driver. He leaves home at six o'clock. My mother is a teacher at a primary school. My sisters are students. They go to school by bike.","In the evening we have dinner together at seven. My mother cooks rice, fish, and vegetables. After dinner, my sisters do their homework and I wash the dishes."],
 qs:`
m|How many people are in the family?|five|four|six|three|"There are five people in my family."
m|What is the mother's job?|teacher|driver|doctor|cook|"My mother is a teacher at a primary school."
m|How do the sisters go to school?|by bike|by bus|on foot|by car|"They go to school by bike."
f|The family has dinner at eight.|0|They have dinner at seven.
f|The writer washes the dishes after dinner.|1|"…I wash the dishes."
`}],
elem: [
{title:"A Bad Day", text:["Yesterday was a terrible day for Lina. Her alarm didn't ring, so she woke up late. She didn't have time for breakfast.","She ran to the bus stop, but the bus was already gone. She waited twenty minutes for the next one. When she arrived at the office, her boss was angry because she missed an important meeting.","In the evening, it started to rain and she forgot her umbrella. But when she got home, her mother had cooked her favourite soup. 'Things will be better tomorrow,' she thought."],
 qs:`
m|Why did Lina wake up late?|Her alarm didn't ring.|She was sick.|She went to bed late.|It was a holiday.|"Her alarm didn't ring…"
m|How long did she wait for the next bus?|twenty minutes|ten minutes|an hour|five minutes|"She waited twenty minutes…"
m|Why was her boss angry?|She missed a meeting.|She lost a document.|She was rude.|She left early.|"…she missed an important meeting."
f|Lina had breakfast before work.|0|"She didn't have time for breakfast."
f|Her mother cooked her favourite soup.|1|"…her mother had cooked her favourite soup."
`},
{title:"Shopping Online", text:["More and more people in Indonesia buy things online. It is easy: you open an app, choose a product, and pay with your phone.","Online shopping is often cheaper than shopping in a mall, and there are many discounts. However, sometimes the product looks different from the photo. The size can be wrong, or the colour is not the same.","Before you buy, it is a good idea to read the reviews from other customers. Also check the return policy, so you can send the product back if there is a problem."],
 qs:`
m|How do people pay when they shop online?|with their phone|only with cash|by cheque|at the bank|"…pay with your phone."
m|What is one problem with online shopping?|The product can look different.|It is always expensive.|There are no discounts.|You must go to the mall.|"…sometimes the product looks different from the photo."
m|What should you read before buying?|reviews from other customers|the newspaper|a cookbook|the app's history|"…read the reviews from other customers."
f|Online shopping is never cheaper than a mall.|0|It is often cheaper.
f|A return policy helps if there is a problem.|1|"…so you can send the product back…"
`}],
inter: [
{title:"The Power of Sleep", text:["Most adults need seven to nine hours of sleep every night, but many people sleep much less. Busy schedules, phones, and stress all keep us awake.","Scientists have found that sleep is important for memory. While we sleep, the brain organises the information we have learned during the day. People who don't sleep enough often find it harder to concentrate and are more likely to get sick.","Experts suggest going to bed at the same time every night and avoiding screens for an hour before sleep. A dark, quiet, and cool bedroom can also help."],
 qs:`
m|How many hours of sleep do most adults need?|seven to nine|five to six|ten to twelve|four to five|"Most adults need seven to nine hours…"
m|What does the brain do during sleep?|organises information|stops working|creates new muscles|burns sugar|"…the brain organises the information we have learned…"
m|What do experts suggest?|avoiding screens before bed|drinking coffee at night|sleeping in a warm room|going to bed at different times|"…avoiding screens for an hour before sleep."
f|People who sleep less concentrate better.|0|They find it harder to concentrate.
f|A dark and quiet room can help you sleep.|1|"A dark, quiet, and cool bedroom can also help."
`},
{title:"Coffee Culture", text:["Indonesia is one of the biggest coffee producers in the world. Coffee has been grown here since the Dutch brought it in the 1600s.","In the past, most people drank simple black coffee at home or at a small roadside stall. In recent years, modern coffee shops have opened in almost every city. Young people often meet there to study, work, or chat with friends.","Some coffee shops now buy their beans directly from local farmers. This helps the farmers earn more money and encourages them to grow better-quality coffee."],
 qs:`
m|Who brought coffee to Indonesia?|the Dutch|the British|the Chinese|the Portuguese|"…since the Dutch brought it in the 1600s."
m|What do young people do in coffee shops?|study, work, or chat|only drink coffee|sell coffee beans|grow coffee|"…to study, work, or chat with friends."
m|How do some coffee shops help farmers?|They buy beans directly from them.|They give them free coffee.|They teach them English.|They build them houses.|"…buy their beans directly from local farmers."
f|Coffee in Indonesia was first grown in the 1900s.|0|It was brought in the 1600s.
f|Buying directly can help farmers earn more.|1|"This helps the farmers earn more money…"
`}],
upper: [
{title:"The Four-Day Week", text:["Several companies around the world have experimented with a four-day working week. Employees work four days but receive the same salary as before.","Supporters argue that people who have more time to rest are happier and more productive. In some trials, companies reported that productivity stayed the same or even increased, while staff took fewer sick days.","Critics, however, point out that the model doesn't suit every industry. Hospitals, shops, and factories need people every day. Others worry that squeezing five days of work into four could actually increase stress."],
 qs:`
m|What happens to salaries in a four-day week?|They stay the same.|They are cut by 20%.|They double.|They depend on sales.|"…receive the same salary as before."
m|What did some trials report?|Productivity stayed the same or increased.|Productivity fell sharply.|Staff took more sick days.|Companies closed.|"…productivity stayed the same or even increased…"
m|What is one criticism?|It doesn't suit every industry.|It is too expensive for workers.|Nobody wants more free time.|It is illegal.|"…the model doesn't suit every industry."
f|Supporters believe rested workers are more productive.|1|Benar, itu argumen pendukung.
f|Critics think it would reduce stress for everyone.|0|They worry it could increase stress.
`},
{title:"Fake News", text:["Fake news is false information that is made to look like real news. It spreads quickly on social media because people often share stories without checking them.","Some fake stories are created to make money from advertising, while others aim to influence people's opinions, especially during elections. Once a false story has spread, it can be very difficult to correct.","To protect yourself, check who published the story, look for the same news on trusted websites, and be careful with headlines that seem designed to make you angry or shocked."],
 qs:`
m|Why does fake news spread quickly?|People share without checking.|It is always true.|Newspapers publish it.|It is shown on TV.|"…people often share stories without checking them."
m|Why are some fake stories created?|to make money or influence opinions|to teach history|to help journalists|to improve the internet|"…to make money… others aim to influence people's opinions…"
m|What is one way to protect yourself?|check who published the story|share it quickly|believe shocking headlines|ignore trusted websites|"…check who published the story…"
f|Fake news is easy to correct once it has spread.|0|It can be very difficult to correct.
f|Headlines that make you angry should be treated carefully.|1|Benar.
`}],
adv: [
{title:"The Paradox of Choice", text:["We tend to assume that having more options makes us happier. Yet psychologists have found that an abundance of choice can, paradoxically, leave us less satisfied.","In one well-known study, shoppers who were offered a small selection of jams were far more likely to buy one than those presented with a large display. Faced with too many alternatives, people often feel overwhelmed and postpone the decision altogether.","Even when they do choose, they are more likely to wonder whether another option would have been better. Some researchers therefore recommend deliberately limiting our options and accepting choices that are 'good enough' rather than perfect."],
 qs:`
m|What can too much choice lead to?|less satisfaction|more happiness|faster decisions|lower prices|"…an abundance of choice can… leave us less satisfied."
m|In the jam study, who bought more?|shoppers offered a small selection|shoppers offered a large display|both groups equally|nobody bought jam|"…a small selection… far more likely to buy…"
m|What do some researchers recommend?|accepting 'good enough' choices|always looking for the perfect option|avoiding shops|making choices randomly|"…accepting choices that are 'good enough'…"
f|People always decide faster when there are more options.|0|They often postpone the decision.
f|People with many options may regret their choice more.|1|"…wonder whether another option would have been better."
`},
{title:"Learning a Language as an Adult", text:["It is widely believed that children learn languages more easily than adults. While young learners often achieve a more native-like accent, adults have advantages of their own.","Adults can draw on their knowledge of grammar, use learning strategies consciously, and understand abstract explanations. Studies suggest that in the early stages, adult learners frequently progress faster than children.","What matters most, according to many experts, is consistent exposure and practice. Learners who use the language regularly, even for twenty minutes a day, tend to outperform those who study intensively but irregularly."],
 qs:`
m|What do young learners often achieve?|a more native-like accent|a larger vocabulary|faster progress at first|better grammar knowledge|"…young learners often achieve a more native-like accent…"
m|What advantage do adults have?|They can use strategies consciously.|They never forget words.|They have better hearing.|They don't need practice.|"…use learning strategies consciously…"
m|According to experts, what matters most?|consistent exposure and practice|studying only grammar|starting before age five|intensive study once a month|"…consistent exposure and practice."
f|Adults always learn more slowly than children.|0|Adults often progress faster at first.
f|Twenty minutes a day of regular practice can be very effective.|1|Benar.
`}],
expert: [
{title:"The Attention Economy", text:["In the digital age, attention has become a scarce and highly valuable resource. Many free apps and platforms generate revenue not by charging users, but by capturing their attention and selling it to advertisers.","To maximise engagement, designers employ techniques borrowed from behavioural psychology: infinite scrolling, unpredictable rewards, and notifications engineered to pull users back. Critics argue that these features exploit cognitive vulnerabilities and may contribute to anxiety and diminished concentration.","Proponents counter that users ultimately retain control and that such platforms provide genuine value, from connecting distant relatives to democratising access to information. The debate, arguably, hinges less on technology itself than on how transparently it is designed."],
 qs:`
m|How do many free platforms make money?|by selling users' attention to advertisers|by charging monthly fees|through government funding|by selling devices|"…capturing their attention and selling it to advertisers."
m|Which technique is mentioned?|infinite scrolling|paper manuals|paid subscriptions|long waiting times|"…infinite scrolling, unpredictable rewards…"
m|According to the author, what does the debate hinge on?|how transparently technology is designed|the price of smartphones|the speed of the internet|the age of the designers|"…hinges less on technology itself than on how transparently it is designed."
f|Critics claim these features may harm concentration.|1|"…may contribute to anxiety and diminished concentration."
f|Proponents argue that users have no control at all.|0|They argue users ultimately retain control.
`},
{title:"Remote Leadership", text:["Leading a team that rarely meets in person requires a different skill set from traditional management. Without the informal cues of an office, misunderstandings can go unnoticed and isolated employees may quietly disengage.","Effective remote leaders, research suggests, over-communicate rather than under-communicate. They set clear expectations, document decisions, and schedule regular one-to-one conversations that go beyond task updates.","Equally important is trust. Managers who measure output instead of monitoring online activity tend to foster greater autonomy and loyalty. Paradoxically, relinquishing a degree of control often yields better results than tightening it."],
 qs:`
m|What can happen without the cues of an office?|Misunderstandings may go unnoticed.|Employees work less on purpose.|Meetings become longer.|Salaries decrease.|"…misunderstandings can go unnoticed…"
m|What do effective remote leaders do?|over-communicate and document decisions|avoid one-to-one meetings|monitor online activity constantly|cancel team meetings|"…over-communicate… document decisions…"
m|What tends to foster autonomy and loyalty?|measuring output rather than activity|tracking every minute online|giving fewer instructions|reducing salaries|"Managers who measure output instead of monitoring online activity…"
f|The text suggests tighter control always gives better results.|0|Relinquishing some control often yields better results.
f|Regular one-to-one conversations are recommended.|1|Benar.
`}]
};
const SPEAK2 = {
basic: [["I have two sisters.","Saya punya dua saudara perempuan."],["My favourite colour is blue.","Warna favorit saya biru."],["Can I have some water, please?","Boleh saya minta air?"],["The bank is next to the market.","Banknya di sebelah pasar."],["I don't like spicy food.","Saya tidak suka makanan pedas."],["What time is it now?","Sekarang jam berapa?"]],
elem: [["I bought a new phone last week.","Saya membeli ponsel baru minggu lalu."],["It is raining at the moment.","Sedang hujan saat ini."],["I will call you tomorrow morning.","Saya akan meneleponmu besok pagi."],["How much is this shirt?","Berapa harga kemeja ini?"],["She is taller than her brother.","Dia lebih tinggi dari saudaranya."],["We have a little time left.","Kita masih punya sedikit waktu."]],
inter: [["Have you finished your homework yet?","Apakah kamu sudah menyelesaikan PR-mu?"],["You don't have to come if you're busy.","Kamu tidak perlu datang kalau sibuk."],["The bridge was built in 1990.","Jembatan itu dibangun pada 1990."],["I was cooking when you called.","Saya sedang memasak ketika kamu menelepon."],["I used to live in a small village.","Dulu saya tinggal di desa kecil."],["Unless you hurry, you will be late.","Kalau tidak cepat, kamu akan terlambat."]],
upper: [["If I had known, I would have helped you.","Kalau saya tahu, saya pasti membantumu."],["He told me that he had lost his keys.","Dia bilang dia kehilangan kuncinya."],["I'm thinking about changing my job.","Saya sedang berpikir untuk ganti pekerjaan."],["By the time we arrived, the film had started.","Saat kami tiba, filmnya sudah mulai."],["She must be very tired after the trip.","Dia pasti sangat lelah setelah perjalanan itu."],["The woman whose car was stolen called the police.","Perempuan yang mobilnya dicuri menelepon polisi."]],
adv: [["Not only is she talented, but she is also hardworking.","Dia tidak hanya berbakat, tapi juga pekerja keras."],["If only I had more time to travel.","Seandainya saya punya lebih banyak waktu untuk bepergian."],["What I really need is a long holiday.","Yang benar-benar saya butuhkan adalah liburan panjang."],["Having finished the report, she went home.","Setelah menyelesaikan laporan, dia pulang."],["By next year, I will have graduated.","Tahun depan saya sudah lulus."],["We have run out of coffee again.","Kita kehabisan kopi lagi."]],
expert: [["Let's cut to the chase and discuss the budget.","Mari langsung ke intinya dan membahas anggaran."],["I would appreciate it if you could reply by Friday.","Saya akan menghargai jika Anda bisa membalas paling lambat Jumat."],["The results appear to support our hypothesis.","Hasilnya tampaknya mendukung hipotesis kami."],["I'm afraid not, but I'll look into it.","Sayangnya tidak, tapi saya akan menyelidikinya."],["It is essential that everyone be informed.","Sangat penting semua orang diberi tahu."],["Could we touch base early next week?","Bisakah kita berkoordinasi awal minggu depan?"]]
};
const TALK2 = {
basic: { title: "Belanja di pasar", place: "Pasar pagi", who: "Bu Ani", turns: [
  ["p", "Good morning! Can I help you?", "Selamat pagi! Ada yang bisa dibantu?"],
  ["u", ["Yes, please. How much are the tomatoes?", "Yes, please. How many are the tomatoes?", "Yes, please. How much is tomatoes?"], "Menanyakan harga: How much are/is …? Tomatoes jamak, jadi are."],
  ["p", "They're ten thousand rupiah a kilo.", "Sepuluh ribu rupiah per kilo."],
  ["u", ["OK. Can I have two kilos, please?", "OK. Can I have two kilo, please?", "OK. Give two kilos me."], "Jumlah lebih dari satu memakai bentuk jamak: two kilos."],
  ["p", "Of course. Anything else?", "Tentu. Ada lagi?"],
  ["u", ["Yes, I'd like some eggs, please.", "Yes, I'd like an eggs, please.", "Yes, I like some egg, please."], "I'd like = saya mau (sopan). Some + jamak: some eggs."],
  ["p", "Here you are. That's thirty-five thousand.", "Ini dia. Jadi tiga puluh lima ribu."],
  ["u", ["Here's fifty thousand.", "Here are fifty thousands.", "This is fifty thousand for you is."], "Angka besar tetap tanpa -s: fifty thousand."],
  ["p", "And here's your change. Fifteen thousand.", "Dan ini kembaliannya. Lima belas ribu."],
  ["u", ["Thank you very much. Have a nice day!", "Thank you very much. Have a nice days!", "Thanks you very much. Nice day!"], "Thank you very much. Have a nice day!"],
  ["p", "You too! See you again.", "Kamu juga! Sampai jumpa lagi."]
] },
elem: { title: "Di dokter", place: "Klinik dekat rumah", who: "Dr. Smith", turns: [
  ["p", "Hello, please sit down. What's the problem?", "Halo, silakan duduk. Apa keluhannya?"],
  ["u", ["I have a headache and a sore throat.", "I have headache and sore throat.", "I am headache and my throat is sore."], "Keluhan sakit memakai have a …: I have a headache."],
  ["p", "I see. When did it start?", "Begitu. Kapan mulainya?"],
  ["u", ["It started two days ago.", "It starts since two days.", "It was start two days ago."], "Waktu lampau: It started two days ago."],
  ["p", "Do you have a fever?", "Apakah Anda demam?"],
  ["u", ["Yes, I had a fever last night.", "Yes, I have fever last night.", "Yes, I was fever last night."], "Last night = lampau: I had a fever."],
  ["p", "OK. I'll give you some medicine. Take it three times a day after meals.", "Baik. Saya beri obat. Diminum tiga kali sehari setelah makan."],
  ["u", ["Should I stay at home tomorrow?", "Should I staying at home tomorrow?", "Do I should stay at home tomorrow?"], "Should + verb dasar: Should I stay …?"],
  ["p", "Yes, you should rest for a day or two and drink plenty of water.", "Ya, sebaiknya istirahat satu atau dua hari dan banyak minum air."],
  ["u", ["Thank you, doctor. I'll do that.", "Thank you, doctor. I do that tomorrow later.", "Thank you, doctor. I will doing that."], "Keputusan spontan: I'll do that."],
  ["p", "You're welcome. I hope you feel better soon.", "Sama-sama. Semoga cepat sembuh."]
] },
inter: { title: "Mencari kos", place: "Rumah kos di Bandung", who: "Mrs. Wong", turns: [
  ["p", "Hi, you must be here about the room. Come in!", "Hai, pasti kamu datang untuk kamarnya. Masuklah!"],
  ["u", ["Yes, I saw your advert online. Is the room still available?", "Yes, I saw your advert online. Is the room still avail?", "Yes, I have seen your advert online yesterday. The room is available still?"], "Pertanyaan ya/tidak: Is the room still available?"],
  ["p", "It is. It's on the second floor and it has its own bathroom.", "Masih. Ada di lantai dua dan punya kamar mandi sendiri."],
  ["u", ["How much is the rent per month?", "How much the rent per month is?", "How many is the rent per month?"], "How much is …? untuk harga."],
  ["p", "It's two million a month, including electricity and Wi-Fi.", "Dua juta per bulan, termasuk listrik dan Wi-Fi."],
  ["u", ["Am I allowed to cook in the kitchen?", "Am I allow to cook in the kitchen?", "Do I allowed to cook in the kitchen?"], "Be allowed to + verb: Am I allowed to …?"],
  ["p", "Yes, but you have to clean up afterwards. And guests must leave by ten.", "Boleh, tapi harus dibersihkan setelahnya. Dan tamu harus pulang sebelum jam sepuluh."],
  ["u", ["That's fine. I've lived in a boarding house before.", "That's fine. I lived in a boarding house since two years.", "That's fine. I have live in a boarding house before."], "Pengalaman tanpa waktu spesifik: I've lived … before."],
  ["p", "Great. When would you like to move in?", "Bagus. Kapan kamu mau mulai menempati?"],
  ["u", ["If possible, I'd like to move in next Monday.", "If possible, I'd like move in next Monday.", "If it possible, I like to moving in next Monday."], "I'd like to + verb dasar."],
  ["p", "Monday works for me. I'll prepare the key.", "Senin bisa. Saya siapkan kuncinya."]
] },
upper: { title: "Rapat proyek", place: "Ruang rapat kantor", who: "Daniel", turns: [
  ["p", "Thanks for joining, everyone. Where are we with the website launch?", "Terima kasih sudah hadir. Sampai mana peluncuran situsnya?"],
  ["u", ["We've finished the design, but testing is taking longer than expected.", "We finished the design already, but testing takes longer than expect.", "We have finish the design, but testing is taking longer than expected."], "Present perfect untuk hasil sekarang: We've finished."],
  ["p", "I see. What's causing the delay?", "Begitu. Apa penyebab keterlambatannya?"],
  ["u", ["A few bugs were found on mobile devices.", "A few bugs was found on mobile devices.", "A few bugs found on mobile devices by us."], "Pasif jamak lampau: bugs were found."],
  ["p", "Will we still be able to launch on the fifteenth?", "Apakah kita masih bisa meluncurkan tanggal lima belas?"],
  ["u", ["If we got two more developers, we could make it.", "If we get two more developers, we could made it.", "If we would get two more developers, we can make it."], "Kondisional 2: If + past, could + verb dasar."],
  ["p", "That's not in the budget, I'm afraid. Any other ideas?", "Sayangnya itu tidak ada di anggaran. Ada ide lain?"],
  ["u", ["We could consider launching the desktop version first.", "We could consider to launch the desktop version first.", "We could considering launching the desktop version first."], "Consider + -ing."],
  ["p", "Interesting. Could you put that in an email so I can share it with the director?", "Menarik. Bisa kamu tulis di email supaya bisa saya bagikan ke direktur?"],
  ["u", ["Sure. I'll send it to you by the end of the day.", "Sure. I'll send it to you until the end of the day.", "Sure. I send you it in the end of the day."], "Batas waktu memakai by: by the end of the day."],
  ["p", "Perfect. Let's touch base again on Thursday.", "Sempurna. Kita koordinasi lagi hari Kamis."]
] },
adv: { title: "Diskusi panel", place: "Seminar kampus", who: "Prof. Hartono", turns: [
  ["p", "Welcome to the panel. Let's begin: do you think social media has done more harm than good?", "Selamat datang di panel. Kita mulai: menurut Anda media sosial lebih banyak merugikan atau menguntungkan?"],
  ["u", ["It's a complex issue, but on balance, I'd argue the benefits outweigh the harms.", "It's a complex issue, but on balance, I'd argue the benefits outweighs the harms.", "Is complex issue, but balancing, I argue benefits more than harms are."], "Benefits jamak: outweigh. On balance = secara keseluruhan."],
  ["p", "Interesting. What would you say is the biggest benefit?", "Menarik. Apa manfaat terbesarnya menurut Anda?"],
  ["u", ["What stands out for me is how it gives a voice to people who were previously ignored.", "What stands out for me are how it gives a voice to people who previously ignored.", "That stands out for me is how it give a voice to people previously ignoring."], "Cleft: What stands out for me is …; people who were ignored (pasif)."],
  ["p", "But surely misinformation is a serious problem?", "Tapi bukankah misinformasi masalah serius?"],
  ["u", ["Absolutely. Had platforms acted sooner, much of it could have been prevented.", "Absolutely. Had platforms act sooner, much of it could be prevented.", "Absolutely. If platforms would have acted sooner, much of it can have been prevented."], "Inversi kondisional 3: Had platforms acted …, could have been prevented."],
  ["p", "So what should be done now?", "Lalu apa yang harus dilakukan sekarang?"],
  ["u", ["Not only should platforms be more transparent, but users also need better media literacy.", "Not only platforms should be more transparent, but users also need better media literacy.", "Not only should platforms are more transparent, but users also needs better media literacy."], "Not only + inversi: Not only should platforms be …"],
  ["p", "A good point to end on. Any final thoughts?", "Poin yang bagus untuk penutup. Ada pemikiran terakhir?"],
  ["u", ["Only by working together can governments, companies, and users solve this.", "Only by working together governments, companies, and users can solve this.", "Only by work together can governments, companies, and users solving this."], "Only by … + inversi: can governments … solve."],
  ["p", "Thank you. That was a fascinating discussion.", "Terima kasih. Diskusi yang sangat menarik."]
] },
expert: { title: "Menyampaikan kabar buruk", place: "Panggilan video dengan klien", who: "Ms. Lindqvist", turns: [
  ["p", "Good afternoon. You mentioned there was something urgent you wanted to discuss?", "Selamat siang. Anda bilang ada hal mendesak yang ingin dibahas?"],
  ["u", ["Yes, I'm afraid I have some disappointing news regarding the delivery date.", "Yes, I'm afraid I have some disappointing news regard the delivery date.", "Yes, I fear I have a disappointed news about delivery date."], "Regarding = mengenai. Disappointing (yang mengecewakan) untuk berita."],
  ["p", "I see. How significant is the delay?", "Begitu. Seberapa besar keterlambatannya?"],
  ["u", ["We anticipate a delay of roughly two weeks, owing to a supplier issue.", "We anticipate a delay of roughly two weeks, owing a supplier issue.", "We are anticipating to delay roughly two weeks, because of supplier issue's."], "Owing to + noun = karena."],
  ["p", "That's quite a setback. Our campaign is scheduled to launch at the end of the month.", "Itu cukup menghambat. Kampanye kami dijadwalkan mulai akhir bulan."],
  ["u", ["I completely understand. To mitigate the impact, we could deliver the first batch on time.", "I completely understand. To mitigate the impact, we could delivered the first batch on time.", "I complete understand. For mitigate the impact, we can delivering first batch in time."], "To + verb untuk tujuan; could + verb dasar."],
  ["p", "That would help. But I'll need assurance that this won't happen again.", "Itu membantu. Tapi saya butuh jaminan ini tidak terulang."],
  ["u", ["That's entirely reasonable. We've already put a backup supplier in place.", "That's entirely reasonable. We've already put a backup supplier in placed.", "That's entire reasonable. We already have putted a backup supplier."], "Put something in place = menyiapkan."],
  ["p", "Very well. Please send me a revised timeline in writing.", "Baiklah. Tolong kirim jadwal revisi secara tertulis."],
  ["u", ["Of course. You'll have it in your inbox within the hour.", "Of course. You'll have it in your inbox until the hour.", "Of course. You have it on your inbox within hour."], "Within the hour = dalam satu jam ini."],
  ["p", "Thank you for being upfront about this. I appreciate it.", "Terima kasih sudah terus terang. Saya menghargainya."]
] }
};
