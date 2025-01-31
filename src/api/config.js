
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

export const postProduction = Object.freeze(
	{
		// NAME: {
		// 	title: '',
		// 	description: '',
		// 	category: '',
		// 	date: '',
		// 	coverID: null,
		// },

		// HBO
		palante: {
			title: 'Roberto Aguirre-Sacasa & Maia Reficco Pa\'lante Pa\' Mi',
			description: 'Co-Creator, Roberto Aguirre-Sacasa, and actress, Maia Reficco, discuss their latin roots and how their heritage has shaped who they are and what they bring to the show. Part of the Pretty Little Liars: Original Sin Campaign through Palante Max.',
			category: 'HBO Max Promo',
			date: '2022',
			coverID: null,
		},
		maliaPyles: {
			title: 'Malia Pyles Queerness in Conversation',
			description: 'Actress Malia Pyles discusses how her character Mouse’s experiences help build an authentic queer representation on the show. Part of the Pretty Little Liars: Original Sin Campaign through Human by Orientation.',
			category: 'HBO Max Promo',
			date: '2022',
			coverID: null,
		},
		minx: {
			title: 'Minx',
			description: 'Part of my application process in getting an internship at HBO. I was tasked with creating a minute-long promo of an episode of Minx.',
			category: 'HBO Max Promo',
			date: '2022',
			coverID: null,
		},
		
		// Narrative
		chasingButterflyDreams: {
			title: 'Chasing Butterfly Dreams',
			description: '',
			category: 'Narrative',
			tags: 'Feature Film',
			date: '',
			coverID: null,
		},
		scrambledEggs: {
			title: 'scrambledEggs',
			description: '',
			category: 'Narrative',
			tags: 'NYU Thesis Short',
			date: '',
			coverID: null,
		},
		cloche: {
			title: 'Cloche',
			description: '',
			category: 'Narrative',
			tags: 'NYU Thesis Short',
			date: '',
			coverID: null,
		},

		// Commercial
		dianaFlorence: {
			title: 'Diana Florence: Why it Matters',
			description: 'One of multiple short promos made for Diana Florence\'s Why It Matters campaign as part of her run for Manhattan District Attorney in 2021.',
			category: 'Commercial',
			tags: 'Advertising',
			date: '2020-2021',
			coverID: null,
		},
		stanLabs: {
			title: 'Stan Labs Vehicle Deodorizer Instructional Video',
			description: 'Instructional How to Use video for a Stan Labs Deodorizer product.',
			category: 'Commercial',
			date: '2020',
			coverID: null,
		},
	}
)

export const films = Object.freeze(
	{
		// Shorts
		loveBombBaby: {
			title: 'Love Bomb Baby',
			description: 'After catching her cheating girlfriend, a fiery, drunk woman beats up an entire Halloween college party--all while prioritizing which booze is in her hand.',
			category: filmCategory.short,
			genre: 'Action Comedy',
			tags: [],
			date: '2023',
			coverID: '',
			durationSeconds: 603,
			credits: {}
		},
		playinAround: {
			title: 'Playin\' Around',
			description: ' Determined to buy the perfect gift for her little brother, a young woman must fight her way through crazed customers at a toy store turned madhouse.',
			category: filmCategory.short,
			genre: 'Action Comedy',
			tags: [],
			date: '2024',
			coverID: '',
			durationSeconds: 603,
			credits: {}
		},

		// Narratives
		soLong: {
			title: 'So Long',
			description: 'Struggling with school, a student is forced to accept help from his high school teacher. This is my love letter to all my teachers I\'ve had over the years. The short film submitted with my NYU Application in 2019.',
			category: filmCategory.narrative,
			genre: 'Coming of Age',
			tags: [],
			date: '2019',
			coverID: '',
			durationSeconds: 0,
			credits: {}
		},
		pierCatharsis: {
			title: 'Catharsis at the Pier',
			description: 'A one-shot film of a student filmmaker failing to make a one-shot film; ala Symbiopsychotaxiplasm: Take One (1968). Film made in NYU Sight & Sound with the challenge of making it in only one shot.',
			category: filmCategory.narrative,
			genre: 'Satire',
			tags: [
				'NYU Short'
			],
			date: '2021',
			coverID: '',
			durationSeconds: 0,
			credits: {}
		},
		poster: {
			title: 'My Poster Film',
			description: 'An inside look into Bryan\'s first job where he was tasked with changing out the movie posters at his local movie theater. The "Yourselfie" part of his accepted NYU Application in 2019.',
			category: filmCategory.narrative,
			genre: 'Personal Narrative',
			tags: [
				'NYU Application',
			],
			date: '2019',
			coverID: '',
			durationSeconds: 0,
			credits: {}
		},
	}
)

export const config = Object.freeze(
	{
		navigation: {
			height: '6rem'
		},
		layout: {
			maxContentWidth: '1280px',
		},
		socialMedia: {
			instagram: 'https://www.instagram.com/buvaldo218/',
			youtube: 'https://www.youtube.com/channel/UCNDFgziSeSvF3CjxJxo7esg',
			imdb: 'https://www.imdb.com/name/nm12071705/',
			linkedIn: 'https://www.linkedin.com/in/bryan-uvaldo-59827a1b9/',
		},
		home: {
			aboutSummary: <>
				<p className="mb-3">
					Bryan Uvaldo, a Brazilian-American filmmaker and NYU Tisch graduate, is set to 
					debut his action short Love Bomb Baby this year, followed by his thesis film 
					Playin&apos; Around next year.
				</p>
				<p>
					With ten short films and HBO Max promos edited, 
					he&apos;s now lead editor on a feature film. After interning at Warner 
					Brothers Discovery in 2022, Bryan aims to leverage his post-production experience 
					to become a blockbuster director.
				</p>
			</>,
		}
	}
)

