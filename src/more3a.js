// Konten Praktik: 2 bacaan tambahan per level (total 5 bacaan per level).
const READING3 = {
basic: [
{title:"My Small House", text:["I live in a small house in Bogor with my parents. The house is old, but it is very clean and comfortable.","There are two bedrooms, a living room, a kitchen, and one bathroom. My bedroom is small. There is a bed, a desk, and a big window. I can see a mango tree from my window.","My favourite room is the kitchen. My mother cooks there every evening, and the kitchen always smells good. We eat dinner at a small table near the door."],
 qs:`
m|Where does the writer live?|in Bogor|in Bandung|in Bali|in Surabaya|"I live in a small house in Bogor."
m|How many bedrooms are there?|two|one|three|four|"There are two bedrooms…"
m|What can the writer see from the window?|a mango tree|a big river|a park|the sea|"I can see a mango tree from my window."
f|The house is new.|0|"The house is old…"
f|The writer's favourite room is the kitchen.|1|"My favourite room is the kitchen."
`},
{title:"A Day at the Beach", text:["Today is Sunday. Dewi and her cousin Rudi are at the beach. The weather is hot and sunny, and the sky is blue.","Dewi is swimming in the sea. Rudi doesn't like swimming, so he is sitting under a big umbrella. He is reading a book and drinking coconut water.","At twelve o'clock they eat fried rice and grilled fish at a small restaurant. In the afternoon they walk on the sand and take photos. They are tired but very happy."],
 qs:`
m|What is the weather like?|hot and sunny|cold and windy|rainy|cloudy|"The weather is hot and sunny…"
m|What is Rudi drinking?|coconut water|tea|orange juice|coffee|"…drinking coconut water."
m|What do they eat for lunch?|fried rice and grilled fish|noodles and chicken|bread and eggs|soup and rice|"…fried rice and grilled fish…"
f|Rudi likes swimming.|0|"Rudi doesn't like swimming…"
f|They take photos in the afternoon.|1|"In the afternoon they walk on the sand and take photos."
`}],
elem: [
{title:"My First Job", text:["When I was nineteen, I got my first job at a small bookshop in Semarang. I worked there every Saturday and Sunday for one year.","My boss, Pak Hadi, was kind but very strict. I had to arrive at eight o'clock sharp. I put new books on the shelves, cleaned the floor, and helped customers find the books they wanted.","The pay was not very good, but I learned a lot. I learned how to talk to people politely and how to work in a team. I also read many books during my lunch breaks!"],
 qs:`
m|How old was the writer when they got the job?|nineteen|seventeen|twenty-one|twenty-five|"When I was nineteen…"
m|When did the writer work?|at weekends|every evening|on weekdays|only in the holidays|"…every Saturday and Sunday…"
m|What did the writer learn?|how to talk to people politely|how to drive a car|how to write books|how to cook|"I learned how to talk to people politely…"
f|Pak Hadi was not strict.|0|"…kind but very strict."
f|The writer read books during lunch breaks.|1|"I also read many books during my lunch breaks!"
`},
{title:"Plans for the Weekend", text:["Maya is very excited because this weekend is a long weekend. She is going to visit her grandparents in a village near Malang.","On Friday evening she is going to take the train with her younger brother. The journey takes about six hours, so she is going to bring snacks and a good book.","On Saturday her grandfather is going to show them his rice fields, and on Sunday the whole family is going to have a big lunch together. Maya hopes it won't rain."],
 qs:`
m|Where is Maya going?|to her grandparents' village|to the beach|to Jakarta|to a hotel|"…visit her grandparents in a village near Malang."
m|How long is the train journey?|about six hours|about two hours|about one day|about thirty minutes|"The journey takes about six hours…"
m|What will happen on Sunday?|a big family lunch|a trip to the rice fields|a train journey home|a party at school|"…on Sunday the whole family is going to have a big lunch together."
f|Maya is travelling alone.|0|She is going with her younger brother.
f|Maya hopes the weather will be dry.|1|"Maya hopes it won't rain."
`}],
inter: [
{title:"Living in a Big City", text:["More than half of the world's population now lives in cities, and this number is expected to grow. People move to big cities for better jobs, schools, and hospitals.","However, city life also has its problems. Traffic jams can make a short journey take hours, and housing is often very expensive. Many people spend a large part of their salary on rent.","Some cities are trying to solve these problems by building better public transport and more parks. Experts believe that if cities are planned well, they can be healthy and pleasant places to live."],
 qs:`
m|Why do people move to big cities?|for better jobs, schools, and hospitals|because houses are cheap|to avoid traffic|because cities are quiet|"…for better jobs, schools, and hospitals."
m|What problem with housing is mentioned?|It is very expensive.|It is too big.|It is too far from work.|It is very old.|"…housing is often very expensive."
m|How are some cities solving problems?|building better public transport and parks|making cars cheaper|closing schools|moving people to villages|"…building better public transport and more parks."
f|Less than half of the world's population lives in cities.|0|More than half now lives in cities.
f|Experts think well-planned cities can be pleasant.|1|"…they can be healthy and pleasant places to live."
`},
{title:"Plastic in the Ocean", text:["Every year, millions of tonnes of plastic end up in the ocean. Much of it comes from rivers that carry rubbish from towns and cities into the sea.","Plastic doesn't disappear. Instead, it breaks into tiny pieces called microplastics. Fish and sea birds often eat these pieces because they think they are food, and the plastic can then enter our own food chain.","There are simple things everyone can do to help. We can carry reusable bags and bottles, say no to plastic straws, and join beach clean-ups. If enough people change their habits, the amount of plastic in the sea could be reduced."],
 qs:`
m|Where does much ocean plastic come from?|rivers carrying rubbish from towns|ships|fish farms|beach hotels only|"Much of it comes from rivers…"
m|What are microplastics?|tiny pieces of plastic|a type of fish|a kind of food|new plastic bottles|"…tiny pieces called microplastics."
m|Why do animals eat plastic?|They think it is food.|They are very hungry.|It tastes good.|People give it to them.|"…because they think they are food…"
f|Plastic disappears after a few years.|0|"Plastic doesn't disappear."
f|Joining beach clean-ups is one way to help.|1|"…and join beach clean-ups."
`}],
upper: [
{title:"The Rise of Online Learning", text:["Ten years ago, few people would have imagined taking a university course from their bedroom. Today, millions of learners study online, often for free, with teachers they will never meet in person.","Supporters argue that online learning has made education far more accessible. People who live far from a university, or who need to work during the day, can now study at their own pace. Courses can also be updated quickly to keep up with new developments.","Critics, however, point out that many students fail to finish online courses. Without classmates and a fixed timetable, it is easy to lose motivation. The most successful learners, it seems, are those who set clear goals and build a routine."],
 qs:`
m|What is one advantage of online learning?|People can study at their own pace.|It always costs a lot.|Students meet teachers in person.|Courses never change.|"…can now study at their own pace."
m|What problem do critics mention?|Many students don't finish courses.|Courses are too short.|The internet is too slow.|Teachers are not qualified.|"…many students fail to finish online courses."
m|Who are the most successful online learners?|those who set goals and build a routine|those who study at night|those with expensive computers|those who skip lessons|"…those who set clear goals and build a routine."
f|Online courses can be updated quickly.|1|"Courses can also be updated quickly…"
f|The text says online learning is only for people living near universities.|0|It helps people who live far from a university.
`},
{title:"Why We Procrastinate", text:["Almost everyone has put off an important task at some point, choosing instead to tidy their desk or scroll through social media. This habit, known as procrastination, is often blamed on laziness, but psychologists say the real cause is more complex.","According to recent research, we tend to procrastinate when a task makes us feel anxious, bored, or uncertain. Avoiding it gives us short-term relief, even though it usually leads to more stress later.","Experts suggest breaking big tasks into smaller steps and starting with just five minutes of work. Once people have started, they often find it easier to keep going than they had expected."],
 qs:`
m|What do psychologists say about procrastination?|Its cause is more complex than laziness.|It is only caused by laziness.|It never causes stress.|It only affects students.|"…the real cause is more complex."
m|When do we tend to procrastinate?|when a task makes us feel anxious or bored|when we are very hungry|when we have too much free time|only at weekends|"…when a task makes us feel anxious, bored, or uncertain."
m|What do experts suggest?|starting with just five minutes of work|working all night|ignoring difficult tasks|doing several tasks at once|"…starting with just five minutes of work."
f|Avoiding a task gives long-term relief.|0|It gives short-term relief and more stress later.
f|People often find it easier to continue once they have started.|1|"…they often find it easier to keep going…"
`}],
adv: [
{title:"The Value of Boredom", text:["In an age of constant notifications, boredom has become something most of us go to great lengths to avoid. The moment we find ourselves waiting in a queue, we instinctively reach for our phones.","Yet a growing body of research suggests that boredom may serve a valuable purpose. When the mind is left to wander, it tends to make unexpected connections, which is why so many people claim their best ideas come to them in the shower or on a long walk.","Some psychologists therefore recommend deliberately building unstructured time into our days. Far from being wasted, these moments of apparent idleness may be precisely what allows creativity to flourish."],
 qs:`
m|What do people usually do when they feel bored?|reach for their phones|go for a walk|start a conversation|close their eyes|"…we instinctively reach for our phones."
m|According to research, what happens when the mind wanders?|It makes unexpected connections.|It becomes tired.|It forgets important information.|It stops working.|"…it tends to make unexpected connections…"
m|What do some psychologists recommend?|building unstructured time into our days|avoiding boredom completely|working longer hours|using more apps|"…deliberately building unstructured time into our days."
f|The writer believes idle moments are a complete waste of time.|0|"Far from being wasted…"
f|Many people say their best ideas come in the shower.|1|"…their best ideas come to them in the shower…"
`},
{title:"Cities That Never Sleep", text:["Thanks to electric lighting, many modern cities remain brightly lit throughout the night. While this has undoubtedly made streets safer and extended working hours, scientists are increasingly concerned about the side effects of artificial light.","Exposure to light at night disrupts the body's internal clock, suppressing the hormone melatonin, which regulates sleep. Studies have linked long-term disruption to poorer sleep quality and a range of health problems. Wildlife is affected too: migrating birds and newly hatched turtles can become disoriented by bright coastal lights.","In response, several cities have introduced 'dark sky' policies, such as dimming streetlights after midnight and shielding lamps so that light points downwards. Such measures, campaigners argue, cost little and benefit both people and nature."],
 qs:`
m|What does light at night suppress?|melatonin, a hormone that regulates sleep|appetite|body temperature|our memory|"…suppressing the hormone melatonin…"
m|Which animals are mentioned as affected?|migrating birds and baby turtles|cats and dogs|bees and butterflies|fish in rivers|"…migrating birds and newly hatched turtles…"
m|What is one 'dark sky' measure?|dimming streetlights after midnight|banning all cars at night|closing shops early|painting buildings black|"…dimming streetlights after midnight…"
f|The text says artificial light has no benefits.|0|It has made streets safer and extended working hours.
f|Campaigners say dark sky measures are cheap.|1|"…cost little and benefit both people and nature."
`}],
expert: [
{title:"Memo: New Hybrid Policy", text:["To all staff: following extensive consultation, the leadership team has agreed on a revised hybrid working policy, which will take effect from the first of next month.","Under the new arrangement, employees will be expected to be in the office on Tuesdays and Thursdays, which have been designated as collaboration days. The remaining days may be worked remotely, subject to the operational needs of each department. Managers retain discretion to approve exceptions in individual circumstances.","We recognise that this represents a change for some colleagues, and we are committed to reviewing the policy after six months in light of your feedback. Should you have any concerns in the meantime, please do not hesitate to raise them with your line manager or HR."],
 qs:`
m|When will the new policy take effect?|from the first of next month|immediately|next year|after six months|"…will take effect from the first of next month."
m|Why are Tuesdays and Thursdays special?|They are collaboration days in the office.|They are days off.|They are remote-only days.|They are training days.|"…designated as collaboration days."
m|Who can approve exceptions?|managers|any employee|the IT team|clients|"Managers retain discretion to approve exceptions…"
f|The policy will be reviewed after six months.|1|"…reviewing the policy after six months…"
f|Staff must raise concerns only at the review.|0|They can raise them in the meantime with their manager or HR.
`},
{title:"The Ethics of Algorithms", text:["Algorithms now play a decisive role in decisions that profoundly affect people's lives, from who is shortlisted for a job to who is granted a loan. Their appeal lies in the promise of speed, consistency and apparent objectivity.","Yet that objectivity can be illusory. Because algorithms learn from historical data, they risk reproducing, and even amplifying, the biases embedded in past decisions. A recruitment tool trained on a decade of hiring records, for instance, may quietly penalise candidates who do not resemble those previously hired.","Consequently, there are growing calls for algorithmic accountability: requiring organisations to explain how automated decisions are reached, to audit their systems regularly for bias, and to ensure that a human being can review contested outcomes."],
 qs:`
m|What is the appeal of algorithms?|speed, consistency and apparent objectivity|low cost and fun|creativity and emotion|privacy and secrecy|"…speed, consistency and apparent objectivity."
m|Why can algorithms be biased?|They learn from historical data.|They are designed to be unfair.|They are too slow.|They use too little data.|"Because algorithms learn from historical data…"
m|What does 'algorithmic accountability' include?|explaining decisions and auditing for bias|banning all algorithms|keeping systems secret|removing humans from decisions|"…explain how automated decisions are reached, to audit their systems…"
f|The writer argues that algorithms are always objective.|0|"…that objectivity can be illusory."
f|People should be able to have a human review contested decisions.|1|"…ensure that a human being can review contested outcomes."
`}]
};
