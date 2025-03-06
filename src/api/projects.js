const postProduction = Object.freeze(
	{
		hbo: {
			palante: {
				title: 'Maia Reficco Pa\'lante Pa\' Mi HBO Max Promo',
				id: 'palante-pa-mi',
				description: 'Co-Creator, Roberto Aguirre-Sacasa, and actress, Maia Reficco, discuss their latin roots and how their heritage has shaped who they are and what they bring to the show. Part of the Pretty Little Liars: Original Sin Campaign through Palante Max.',
				genre: 'Promotional',
				categories: ['Pretty Little Liars: Original Sin'],
				date: '2022',
				thumbnail: 'images.palanteThumbnail',
				url: 'https://www.youtube.com/watch?v=r0cMIRx3JiA'
			},
			maliaPyles: {
				title: 'Malia Pyles Queerness in Conversation HBO Max Promo',
				id: 'malia-pyles-queerness-in-conversation',
				description: 'Actress Malia Pyles discusses how her character Mouse’s experiences help build an authentic queer representation on the show. Part of the Pretty Little Liars: Original Sin Campaign through Human by Orientation.',
				genre: 'Promotional',
				categories: ['Pretty Little Liars: Original Sin'],
				date: '2022',
				thumbnail: 'images.maliaPylesThumbnail',
				url: 'https://www.youtube.com/watch?v=CQi9zzYs1Zg'
			},
			minx: {
				title: 'Minx HBO Max Promo',
				id: 'minx',
				description: 'Part of my application process in getting an internship at HBO. I was tasked with creating a minute-long promo of an episode of Minx.',
				genre: 'Promotional',
				categories: ['HBO Application'],
				date: '2022',
				thumbnail: 'images.minxThumbnail',
			},
			edgeOfEarth: {
				title: 'Edge of the Earth',
				id: 'edge-of-the-earth',
				description: 'Used to promote the four part-documentary series Edge of the Earth on the front page of HBO Max in July 2022.',
				genre: 'Promotional',
				categories: ['HBO Max Video Hero'],
				date: '2022',
				thumbnail: 'images.edgeOfEarthThumbnail'
			},
			jordanGonzales: {
				title: 'Jordan Gonzalez Queerness in Conversation HBO Max Promo',
				id: 'jordan-gonzalez-queerness-in-conversation',
				description: 'Jordan Gonzalez discusses the importance of Ash’s character and his impact on Mouse’s journey on the show. Part of the Pretty Little Liars: Original Sin Campaign through Human by Orientation.',
				genre: 'Promotional',
				categories: ['Pretty Little Liars: Original Sin'],
				date: '2022',
				thumbnail: 'images.jordanGonzalesThumbnail',
				url: 'https://www.youtube.com/watch?v=nD1kmj1xC0k&t=1s'
			}
		},

		narrative: {
			chasingButterflyDreams: {
				title: 'Chasing Butterfly Dreams',
				id: 'butterfly-dreams',
				description: 'On the last day of summer, three people—a 10th grader seeking his first kiss, a college freshman chasing one wild experience, and a football star struggling with his fears—navigate friendship, love, and growing up, all while their paths collide.',
				genre: 'Coming of Age',
				categories: ['Feature Film'],
				date: '2025',
				thumbnail: 'images.butterflyDreamsThumbnail',
				bryan: ['Editor, On-Set DIT'],
				url: 'https://www.youtube.com/watch?v=NSMPPcNZosg',
			},
			scrambledEggs: {
				title: 'Scrambled Eggs',
				id: 'scrambled-eggs',
				description: 'Stefanie, who just lost her son, is secretly pregnant in a world where one family can only conceive one child per life, and she has to face her husband, who is a birth control officer, and his new protege. A 20 minute thesis film made at NYU Tisch by director Xueyang Niu.',
				genre: 'Drama',
				categories: ['NYU Thesis Short'],
				date: '2022',
				thumbnail: 'images.scrambledEggsThumbnail',
				bryan: ['Editor'],
				url: 'https://filmfreeway.com/ScrambledEggs166'
			},
			cloche: {
				title: 'Cloche',
				id: 'cloche',
				description: 'A college girl attends her popular friend’s potluck party in hopes of being accepted by the social group, but her inner self in animation joins to ruin the plan. A 10 minute short thesis film written and directed by Diana Miao for Parsons School of Design.',
				genre: 'Comedy',
				categories: ['Thesis Short'],
				date: '2022',
				thumbnail: 'images.clocheThumbnail',
				bryan: ['Editor'],
				url: 'https://www.youtube.com/watch?v=M5aKudxDckQ&t=3s'
			},
		},

		commercial: {
			dianaFlorence: {
				title: 'Diana Florence: Why it Matters',
				id: 'diana-florence',
				description: 'One of multiple short promos made for Diana Florence\'s Why It Matters campaign as part of her run for Manhattan District Attorney in 2021.',
				genre: 'Advertisement',
				categories: ['Advertising Campaign'],
				date: '2020-2021',
				thumbnail: 'images.dianaFlorenceThumbnail',
				url: 'https://www.youtube.com/watch?v=Ws7EbmiXohM',
			},
			stanLabs: {
				title: 'Stan Labs Vehicle Deodorizer Instructional Video',
				id: 'stan-labs',
				description: 'Instructional How to Use video for a Stan Labs Deodorizer product.',
				genre: 'Instructional',
				categories: [],
				date: '2020',
				thumbnail: 'images.stanLabsThumbnail',
				url: 'https://www.youtube.com/watch?v=C_BCKLYmKqA&t=1s'
			},
		},
	}
)

const films = Object.freeze(
	{
		narrative: {
			playinAround: {
				title: 'Playin\' Around',
				id: 'playin-around',
				description: ' Determined to buy the perfect gift for her little brother, a young woman must fight her way through crazed customers at a toy store turned madhouse.',
				genre: 'Action Comedy',
				categories: ['Short', 'NYU Thesis'],
				date: '2024',
				cover: 'images.playinAroundCover',
				thumbnail: 'images.playinAroundThumbnail',
				durationSeconds: 603,
				bryan: ['Director', 'Editor'],
				credits: {}
			},
			loveBombBaby: {
				title: 'Love Bomb Baby',
				id: 'love-bomb-baby',
				description: 'After catching her cheating girlfriend, a fiery, drunk woman beats up an entire Halloween college party--all while prioritizing which booze is in her hand.',
				genre: 'Action Comedy',
				categories: ['Short'],
				date: '2023',
				cover: 'images.loveBombBabyCover',
				thumbnail: 'images.loveBombThumbnail',
				durationSeconds: 603,
				bryan: ['Director', 'Writer', 'Editor'],
				credits: {}
			},
		},
		student: {
			poster: {
				title: 'My Poster Film',
				id: 'my-poster-film',
				description: 'An inside look into Bryan\'s first job where he was tasked with changing out the movie posters at his local movie theater. The "Yourselfie" part of his accepted NYU Application in 2019.',
				genre: 'Personal Narrative',
				categories: ['NYU Application'],
				date: '2019',
				thumbnail: 'images.posterThumbnail',
				durationSeconds: 0,
				bryan: ['Director', 'Editor'],
				credits: {},
				url: 'https://www.youtube.com/watch?v=uS_2iwAPDRk'
			},
			soLong: {
				title: 'So Long',
				id: 'so-long',
				description: 'Struggling with school, a student is forced to accept help from his high school teacher. This is my love letter to all my teachers I\'ve had over the years. The short film submitted with my NYU Application in 2019.',
				genre: 'Coming of Age',
				categories: ['NYU Application'],
				tags: [],
				date: '2019',
				thumbnail: 'images.soLongThumbnail',
				durationSeconds: 0,
				bryan: ['Director', 'Writer', 'Editor'],
				credits: {},
				url: 'https://www.youtube.com/watch?v=2p1O0O32TSk',
			},
			pierCatharsis: {
				title: 'Catharsis at the Pier',
				id: 'catharsis-at-the-pier',
				description: 'A one-shot film of a student filmmaker failing to make a one-shot film; ala Symbiopsychotaxiplasm: Take One (1968). Film made in NYU Sight & Sound with the challenge of making it in only one shot.',
				genre: 'Satire',
				categories: ['NYU Short'],
				date: '2021',
				thumbnail: 'images.pierCatharsisThumbnail',
				durationSeconds: 0,
				bryan: ['Director', 'Editor'],
				credits: {},
				url: 'https://www.youtube.com/watch?v=Bj-33tOL95I',
			},
			omicronSpymaster: {
				title: 'The Omicron Spymaster',
				id: 'the-omicron-spymaster',
				description: 'What if a cocky spy trainee fails his first test? What would he do to recover from such a blunder? Film made in NYU Frame & Sequence in 2020.',
				genre: 'Spy Comedy',
				categories: ['NYU Short'],
				date: '2020',
				thumbnail: 'images.omicronSpymasterThumbnail',
				durationSeconds: 0,
				bryan: ['Director', 'Editor'],
				credits: {},
				url: 'https://www.youtube.com/watch?v=41eNpV6g0QI',
			},
			helloAgain: {
				title: 'Hello Again',
				id: 'hello-again',
				description: 'My self portrait short film where I explore how many times I have been separated from both friends and family throughout my life, and how I overcame these disconnections over time. Film created for Video Production in Mamaroneck High School.',
				genre: 'Personal Narrative',
				categories: ['NYU Application'],
				date: '2018',
				thumbnail: 'images.helloAgainThumbnail',
				durationSeconds: 0,
				bryan: ['Director', 'Writer', 'Editor'],
				credits: {},
				url: 'https://www.youtube.com/watch?v=74O2C8ktmcE',
			}
		},
		commercial: {
			pityParty: {
				title: 'Carolina Rial\'s Pity Party',
				id: 'carolina-rial-pity-party',
				description: 'Lively and fun music video made for Carolina Rial’s song Pity Party. Made for NYU Short Commercial Form in 2022.',
				genre: 'Music Video',
				categories: [],
				date: '2022',
				thumbnail: 'images.pityPartyThumbnail',
				durationSeconds: 0,
				bryan: ['Director'],
				credits: {},
				url: 'https://www.youtube.com/watch?v=Gfwce4TkSP8',
			}
		},
	}
)

const projects = Object.freeze(
	{
		films: films,
		postProduction: postProduction
	}
)

export default projects
