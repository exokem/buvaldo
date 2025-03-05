import assets from './assets'

const filmCategory = Object.freeze(
	{
		short: {
			label: 'Short',
			listTitle: 'Short Films'
		},
		narrative: {
			label: 'Narrative',
			listTitle: 'Narrative Work'
		},
		commercial: {
			label: 'Commercial',
			listTitle: 'Commercial Work'
		}
	}
)

const postProduction = Object.freeze(
	{
		// NAME: {
		// 	title: '',
		// 	description: '',
		// 	category: '',
		// 	date: '',
		// 	cover: null,
		// },

		// HBO
		palante: {
			title: 'Roberto Aguirre-Sacasa & Maia Reficco Pa\'lante Pa\' Mi',
			id: 'palante-pa-mi',
			description: 'Co-Creator, Roberto Aguirre-Sacasa, and actress, Maia Reficco, discuss their latin roots and how their heritage has shaped who they are and what they bring to the show. Part of the Pretty Little Liars: Original Sin Campaign through Palante Max.',
			category: 'HBO Max Promo',
			date: '2022',
			cover: null,
			thumbnail: 'images.palanteThumbnail',
		},
		maliaPyles: {
			title: 'Malia Pyles Queerness in Conversation',
			id: 'malia-pyles',
			description: 'Actress Malia Pyles discusses how her character Mouse’s experiences help build an authentic queer representation on the show. Part of the Pretty Little Liars: Original Sin Campaign through Human by Orientation.',
			category: 'HBO Max Promo',
			date: '2022',
			cover: null,
			thumbnail: 'images.maliaPylesThumbnail',
		},
		minx: {
			title: 'Minx',
			id: 'minx',
			description: 'Part of my application process in getting an internship at HBO. I was tasked with creating a minute-long promo of an episode of Minx.',
			category: 'HBO Max Promo',
			date: '2022',
			cover: null,
			thumbnail: 'images.minxThumbnail',
		},

		// Narrative
		chasingButterflyDreams: {
			title: 'Chasing Butterfly Dreams',
			id: 'butterfly-dreams',
			description: '',
			category: 'Narrative',
			tags: 'Feature Film',
			date: '',
			cover: null,
			thumbnail: 'images.butterflyDreamsThumbnail',
		},
		scrambledEggs: {
			title: 'scrambledEggs',
			id: 'scrambled-eggs',
			description: '',
			category: 'Narrative',
			tags: 'NYU Thesis Short',
			date: '',
			cover: null,
			thumbnail: 'images.scrambledEggsThumbnail',
		},
		cloche: {
			title: 'Cloche',
			id: 'cloche',
			description: '',
			category: 'Narrative',
			tags: 'NYU Thesis Short',
			date: '',
			cover: '',
			thumbnail: 'images.clocheThumbnail',
		},

		// Commercial
		dianaFlorence: {
			title: 'Diana Florence: Why it Matters',
			id: 'diana-florence',
			description: 'One of multiple short promos made for Diana Florence\'s Why It Matters campaign as part of her run for Manhattan District Attorney in 2021.',
			category: 'Commercial',
			tags: 'Advertising',
			date: '2020-2021',
			cover: null,
			thumbnail: 'images.dianaFlorenceThumbnail',
		},
		stanLabs: {
			title: 'Stan Labs Vehicle Deodorizer Instructional Video',
			id: 'stan-labs',
			description: 'Instructional How to Use video for a Stan Labs Deodorizer product.',
			category: 'Commercial',
			date: '2020',
			cover: null,
			thumbnail: 'images.stanLabsThumbnail',
		},
	}
)

const films = Object.freeze(
	{
		// Shorts
		loveBombBaby: {
			title: 'Love Bomb Baby',
			id: 'love-bomb-baby',
			description: 'After catching her cheating girlfriend, a fiery, drunk woman beats up an entire Halloween college party--all while prioritizing which booze is in her hand.',
			category: filmCategory.short,
			genre: 'Action Comedy',
			tags: [],
			date: '2023',
			cover: 'images.loveBombBabyCover',
			durationSeconds: 603,
			credits: {}
		},
		playinAround: {
			title: 'Playin\' Around',
			id: 'playin-around',
			description: ' Determined to buy the perfect gift for her little brother, a young woman must fight her way through crazed customers at a toy store turned madhouse.',
			category: filmCategory.short,
			genre: 'Action Comedy',
			tags: [],
			date: '2024',
			cover: 'images.playinAroundCover',
			durationSeconds: 603,
			credits: {}
		},

		// Narratives
		soLong: {
			title: 'So Long',
			id: 'so-long',
			description: 'Struggling with school, a student is forced to accept help from his high school teacher. This is my love letter to all my teachers I\'ve had over the years. The short film submitted with my NYU Application in 2019.',
			category: filmCategory.narrative,
			genre: 'Coming of Age',
			tags: [],
			date: '2019',
			cover: '',
			durationSeconds: 0,
			credits: {}
		},
		pierCatharsis: {
			title: 'Catharsis at the Pier',
			id: 'catharsis-at-the-pier',
			description: 'A one-shot film of a student filmmaker failing to make a one-shot film; ala Symbiopsychotaxiplasm: Take One (1968). Film made in NYU Sight & Sound with the challenge of making it in only one shot.',
			category: filmCategory.narrative,
			genre: 'Satire',
			tags: [
				'NYU Short'
			],
			date: '2021',
			cover: '',
			durationSeconds: 0,
			credits: {}
		},
		poster: {
			title: 'My Poster Film',
			id: 'my-poster-film',
			description: 'An inside look into Bryan\'s first job where he was tasked with changing out the movie posters at his local movie theater. The "Yourselfie" part of his accepted NYU Application in 2019.',
			category: filmCategory.narrative,
			genre: 'Personal Narrative',
			tags: [
				'NYU Application',
			],
			date: '2019',
			cover: '',
			durationSeconds: 0,
			credits: {}
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
