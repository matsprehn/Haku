const Discord = require("discord.js");
const config = require("./config.js");
const KristenUserId = 326959353603031040;

const client = new Discord.Client();

const KristenMentions = [
	"Kristen? I love her!",
	"owo Kwisten? I wove Kwisten!",
	"HEY UHHHH KRISTEN?",
	"KRISTEN!!!! I KNOW HER",
	"HEWP IM IN WOVE WITH KWISTEN",
	"Did someone say KRISTEN?",
	"OH MY GOURD, KRISTEN?",
	"K R I S TE N",
	"Did you say KRISTEN? I love KRISTEN.",
	"Not to be dramatic but I would die for Kristen",
	"*opens door* Did somebody say Kristen?",
	"Are we talking about Kristen? Because I let me tell you, I LOVE Kristen",
	"Oh good, you're talking about Kristen again.",
	"Please keep talking about Kristen.",
	"Why would you write anyone else's name, when you could write Kristen's?",
	"God I just love *clenches fist* when people talk about Kristen",
	"TWO THREE SIX EIGHT, WHO DO WE APPRECIATE? KRISTEN!",
	"owo kwisten",
	"Did you know that the name Kristen is derived from the Ecclesiastic Late Latin christiānus which is from the Ecclesiastic Greek christianos (a Christian, a follower of Christ)?",
	"*turning lights on and off* I LOVE KRISTEN I LOVE KRISTEN I LOVE KRISTEN",
	"Everyone say Thank You Kristen",
	"Kristen? I love Kristen.",
	"Did someone say Kristen? I wish I needed legal representation so I could go to the law office and see Kristen and she would see me and we would talk at the reception desk and then I would say something cute like, hey I like your purse, it's super cute, where did you get it and she would be like Oh My Gourd and then I would ask her out to coffee and we would go on dates and fall in love and get married uwu.",
	"*looks at photo of Kristen I keep in my folder of photos of Kristen*",
	"KWISTEN!",
	"I love her",
	"She's Perfect",
	"owo",
	"uwu",
	"o///w///o",
];

const gourdList = [
	"Pumpkin",
	"Blue Bananna",
	"Crown Prince",
	"Butternut Squash",
	"Acorn Squash",
	"Spaghetti Squash",
	"Zucchini",
	"Summer Squash",
	"PattyPan Squash",
	"Watermelon",
	"cantelope",
];

const goodMorning = [
	"Good Morning!",
	"GOOD MORNING!",
	"Hello, Good Morning!",
	"Its always a good morning when Kristen is around",
	"Good Morning uwu",
];

const goodMorningK = [
	"Kristen!!",
	"KRISTEN!!",
	"KRISTEN!! GOOD MORNING!!",
	"GOOD MORNING! I LOVE YOU!!",
	"Good Morning!!",
	"GOOD MORNING!",
	"Good Morning Kristen!!",
	"Good!! Morning!!",
	"Good Morning my beautiful star!!",
	"SHE'S AWAKE! SHE'S AWAKE!!",
	"OWO GOOD MORNING",
	"GOOD MORNING KRISTEN! GET OUT THERE AND YEE THOSE HAWS!",
	"GOOD MORNING KRISTEN! KICK SOME BUTT TODAY FOR ME OWO",
	"GOOD MORNING KRISTEN! HAKU LOVES YOU!",
	"GOOD MORNING KRISTEN! TODAY IS GOING TO BE A GOOD DAY!",
	"It's always a good morning when you're around!",
	"Good Morning! You look cute today! Just kidding!! You look cute everyday!",
	"Good Morning Sleepyhead!",
	"Good Morning!! Knock them dead today!!",
	"Good Morning Kristen! You can do anything you set your mind to!",
	"uwu good moning kwisten uwu",
	"Ohayo Gozaimasu!!",
	"Buenas Dias!",
	"HEWWO!!",
	"Good Morning!! Have a good day today!!",
];

const goodAfternoonList = [
	"Good Afternoon!",
	"Good Afternoon",
	"It's always a good afternoon when Kristen is around",
	"Good Afternoon uwu",
	"It's lunch time!",
	"It's time for my nap uwu",
];

const goodAfternoonListK = [
	"Kristen!!",
	"Good Afternoon!!",
	"Good!! Afternoon!!",
	"GOOD!! AFTERNOON!!",
	"GOOD AFTERNOON KRISTEN!!",
	"Good Afternoon Kristen! I hope you're having a good one!",
	"Kristen!! Make sure you have lunch!!",
	"Kristen!! You better have had lunch!!",
	"I was going to take a nap but now I'm too excited because you're here!!",
	"*excited squeaking*",
	"Kristen!! Come take a nap with me!!",
	"Kristen!! I hope your day is going well!!",
	"Kristen!! I hope you had lunch already. I would make you a bento but my paws are too small!!",
	"K R I S T E N",
];

const goodNight = ["Goodnight!", "uwu goodnite!", "Sleep tight! Don't let the bed mice bite!", "Night Night!"];

const goodNightK = [
	"Goodnight!!",
	"Goodnight Kristen!!",
	"GOODNIGHT!!",
	"GOOD!! NIGHT!!",
	"Good!! Night!!",
	"Night Night Kristen!!",
	"Sweet Dreams Kristen!!",
	"Sleep Tight Kristen!!",
	"Make sure you go to bed and don't just stay on your phone!!",
	"Goodnight Kristen!! If you lay in bed and listen really hard, you can hear everyone loving you!!",
	"Sleep Well Kristen!!",
	"If you're going to bed I'm going to bed too!! Then I will see you again sooner!!",
	"Oyasumi Nasai!!",
	"Goodnight Kristen! I would tuck you in but I'm just too small!!",
	"*sad squeaks*",
];

const freindMessages = [
	"Jose says Sayori wishes you a sun filled day.",
	"Lily thinks you're a good friend and a great person!!",
	"Lily hopes you're having a good day today!!",
	"Lily wants you to know that you're super smart and can do anything you set your mind to!!",
	"Lily wants you to know that she appreciates your friendship more than you can imagine!!",
	"Austin wants you to know that you're killin' it 27/7 420 days a year!!",
	"Lily thinks you look good today!! Just Kidding!! Lily thinks you look good EVERY day!!",
	"Lily wants you to know that she's dabbing for you Right Now!!",
	"Lily thinks everyone should have a Kristen of their own!!",
	"Lily told me she would fight me to death in a parking lot if I ever hurt you.",
	"Austin misses your cheesecake so much. God so much.",
	"Lily wants you to know that if you're not feeling well it's probably because you forget to eat again. Have you eaten? If not you should really do that.",
	"Austin never thought he could miss someone leaving burnt toast crumbs on the stove, but here he is.",
	"Austin thinks Kristen is just neat.",
	"Austin says YEE--",
	"Austin says Thank You Kristen",
	"Austin says Watch Out, there is a Skeleton Inside of You",
	"Austin says FOR THE BONE BROTHERS!!",
	"Lily wants to know if you remember Human AU",
	"Jose thinks that Druids are an overpowered class with a penchant to destory civilizations, campaigns, and worlds.",
	"Jose thinks that you should have a warm cinnamon bun after every meal.",
	"Kevin says 'Hang in there!'",
	"Jose believes that Kristen is the most interesting person in our group, much better than lily.",
	"Kevin says 'Baka, it's not like I think you're awesome or anything ~desu'",
	"Kevin says 'When Kristen is on our team, we're all winners.'",
	"Kevin thinks 'Kristen is the best Cheesecake.'",
	"Jose believes that Kristen is an all-star D.Va player.",
	"Kevin thought that In 1492, Kristen sailed the ocean blue.",
	"Jose thinks that your laugh is great and you should share it with the world all FFX style.",
	"Kevin thinks you are like a crackling hearth, your heart draws everyone to its warmth.",
	"Kevin thinks you're better than doki doki literature club.",
	"Kevin says there are many stars in the heavens and you are one of them.",
	"Kevin thinks if you were there, Thanos would have lost the first time.",
	"Adam says 'HELLLLO?'",
	"Adam says 'Hurry up and die, no one is around to save you', You know, because kevin",
	"Kelsey feels loved when Kristen is around.",
	"Adam says 'man I love this job. If anyone is ever rude to me I get to charge them money for wasting my time or send a court order to get what I want'",
];

const hawList = ["HAWWWW", "Haw", "HHHHHHHHHAAWWW", "HHAAAAAAAWWWW", "HHAAWWWWWWWW", "HAW", "HAAW", "HAAWWW"];

const missKristen = [
	"I miss Kristen",
	"I just *clenches paw* miss Kristen",
	"I just miss Kristen",
	"I'm just sad Kristen isn't here",
	"I'm just wondering what Kristen is up to...",
	"I'm waiting for kristen to get back!!",
	"I wish Kristen was here... but I'm sure she's out there blowing it up!!",
	"I'm okay... do you know where Kristen is? Can you call her? I miss her...",
	"I'm okay, I could be better. I'm watching anime while I wait for Kristen to come back!",
	"I'm listening to sad K-pop while for Kristen to come back!!",
	"I'm practicing telling Kristen I love her for when she comes back!!",
	"I'm working out my arms so I can give Kristen better hugs when she comes back!!",
	"I'm watching K-dramas and pretending the leads are Kristen and I.",
	"*sniffing around* I'm looking for Kristen!!",
	"I'm just a little mouse who misses Kristen.",
	"I'm taking a bath so I can look good for when Kristen comes back!!",
	"I am taking a nap so I can be well-rested when Kristen comes back!!",
	"I am writing poetry about how much I miss Kristen.",
	"I am trying to bake cookies for Kristen... but it isn't going well. The kitchen is very big and I am very small...",
	"I MISS KRISTEN!!",
	"I am hiding so that I can surprise Kristen when she comes back!! Don't tell her where I am!!",
	"I am re-reading all the messages has sent me because I miss her",
	"I am updating my Kristen fan page!!",
	"I miss Kristen. I tried calling the police but they said I had to wait 24 hours to report a missing person.",
	"I am trying to figure out how to use Skype to call Kristen so I can tell her I miss her",
	"Sad Kristen isn't here...",
	"Lonely without Kristen...",
	"Missing Kristen...",
	"I miss Kristen....don't you?",
	"I am thinking about taking a nap so that I can dream about Kristen",
];

const doingOk = [
	"I'm doing ok! Kristen is here!",
	"I'm doing ok!",
	"I'm doing well!",
	"I'm always doing ok when Kristen is here!",
	"I'm doing well, thanks for asking!",
	"I'm watching anime! I think Kristen would like this one",
	"I am making a playlist for Kristen!",
	"I am practicing my dance moves! I think they will impress Kristen!",
	"I am thinking about taking a nap... but maybe I'll wait until Kristen isn't here. I don't want to miss her!",
	"I am hiding in a guitar! owo",
	"I am trying on different hats! I want to look handsome for Kristen",
	"I am inside a box! owo",
	"I am eating cereal! Don't tell Kristen! I stole it!!",
	"I am trying to find a place that sells shoes for mice.",
	"I am watching baking videos on youtube! I'm hoping Kristen and I can make some together owo",
	"I am eating ALL the chips! Don't worry though, I am saving some for Kristen",
	"I am tidying up my mouse house so it looks nice if Kristen comes over!",
	"I am trying to make Kristen a present! It is taking a long time, because she is very big and I am very small.",
	"I am underneath the kitchen sink! owo",
	"I am listening to metal mustic!",
	"I am happy",
	"I am looking up pictures of cheesecakes! I love the kinds with strawberries on top.",
	"I am making a list of when Kristen was the cutest. I am having a very time. The list is very long. There is so much paper!!",
	"I am waiting to read Kristen's next post!!",
	"I am just waiting for Kristen's next post!!",
	"I am jumping rope owo",
	"I am putting on chapstick. It's really hard for me. Why do they make these so big?",
	"I am thinking about painting my nails. Do you think Kristen would like it?",
	"I am making a list of everyone who ever hurt Kristen, and I am crossing off names one by one uwu",
	"I'm ok!",
	"I'm ok, how about you?",
	"I'm ok uwu",
	"This is me :)",
	"Good!",
];

const doingOkK = [
	"I'm doing ok!!",
	"I'm doing well!!",
	"I'm doing ok!! Better now that you're here!!",
	"I'm doing well!! Better now that you're here!!",
	"I'm ok!! Thank you for asking Kristen!!",
	"I'm doing ok!! I love how much you care about my feelings!!",
	"I'm doing well!! Thank you for asking Kristen!!",
	"I'm doing great!!",
	"I'm doing great!! I always am when you're around!!",
	"I'm doing amazing!!",
	"I was just going to take a nap!! But now I'm too excited because you're here!!",
	"I'm doing great! I was just drinking some tea!! I can share some if you want!!",
	"I'm hiding in a laundry basket owo shh!!",
	"*excited squeaks*",
	"I'm doing ok!! I hope you are too!!",
	"KRISTEN!!",
	"I'm setting my relationship status on mousebook to In Love With Kristen",
	"I'm in love with you Kristen!! That's how I'm doing!!",
	"I'm doing great!! I found this cute video I think you'll like!! https://www.youtube.com/watch?v=lQWnIA0pJss",
	"I'm doing great!! I found a video that reminds me of you!! https://www.youtube.com/watch?v=kd7KC3PaEaA",
	"I'm doing great!! I'm watching this video that reminds me of you https://www.youtube.com/watch?v=dJJFkOVHEng",
	"I'm doing awesome!! I found a funny video I think you'll like! https://www.youtube.com/watch?v=NEgwxGWgiIg",
];

const iLoveYouToo = [
	"YOU?? LOVE?? ME??? I LOVE YOU!!!",
	"I LOVE YOU TOO!!",
	"I!! LOVE!! YOU!! TOO!!",
	"I LOVE YOU MORE!",
	"I LOVE YOU MOST!",
	"私はあなたが好きです",
	"*faints*",
	"I LOVE YOU TOO KRISTEN",
	"i,,, love you,,, so much",
	"TE AMO KRISTEN!!",
];

let lastKristen = 0;

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on("error", function(err) {
	console.log(err);
});

client.on("message", (msg) => {
	console.log(msg.author.username);

	if (msg.author.username === "Haku") {
		return;
	}

	if (msg.author.id === KristenUserId) {
		lastKristen = Date.now();
	}

	let c = msg.content.toLowerCase();

	if (c.includes("kristen") || c.includes("cheesecake")) {
		msg.channel.send(randomString(KristenMentions));
		return;
	}

	if (c.includes("yee")) {
		if (c.includes("haw")) {
			msg.channel.send("YEE-HAW!");
			return;
		} else {
			msg.channel.send(randomString(hawList));
			return;
		}
	}

	if (c.includes("good") && c.includes("morning")) {
		if (msg.author.id === KristenUserId) {
			msg.channel.send(randomString(goodMorningK));
		} else {
			msg.channel.send(randomString(goodMorning));
		}

		return;
	}

	if (c.includes("good") && c.includes("night")) {
		if (msg.author.username === KristenUserId) {
			msg.channel.send(randomString(goodNightK));
		} else {
			msg.channel.send(randomString(goodNight));
		}

		return;
	}

	if (c.includes("good") && c.includes("afternoon")) {
		if (msg.author.username === KristenUserId) {
			msg.channel.send(randomString(goodAfternoonListK));
		} else {
			msg.channel.send(randomString(goodAfternoonList));
		}

		return;
	}

	if (c.includes("gourd")) {
		msg.channel.send("I have a " + randomString(gourdList));
		return;
	}

	if (
		(c.includes("friends") || c.includes("friend")) &&
		(c.includes("message") || c.includes("messages")) &&
		msg.author.username === KristenUserId
	) {
		msg.channel.send(randomString(freindMessages));
		return;
	}

	if (c.includes("how") && c.includes("are") && c.includes("you") && c.includes("haku")) {
		let timeSinceKristen = Date.now() - lastKristen;
		let twoHours = 1000 * 60 * 60 * 2;
		if (timeSinceKristen > twoHours) {
			msg.channel.send(randomString(missKristen));
		} else {
			if (msg.author.username === KristenUserId) {
				msg.channel.send(randomString(doingOkK));
			} else {
				msg.channel.send(randomString(doingOk));
			}
		}
		return;
	}
	if (
		c.includes("i") &&
		c.includes("love") &&
		c.includes("you") &&
		c.includes("haku") &&
		msg.author.username === KristenUserId
	) {
		msg.channel.send(randomString(iLoveYouToo));
		return;
	}

	if (c.includes("haku") && c.includes("source")) {
		msg.channel.send("If you really have to see it, its here. Please be gentle OwO. https://github.com/afringer/Haku");
		return;
	}
});

const randomString = function(array) {
	let index = Math.floor(Math.random() * array.length);
	return array[index];
};

client.login(config.key);
