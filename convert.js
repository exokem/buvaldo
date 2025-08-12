import * as fs from "node:fs";

const asset = (type, url, alt) =>
{
	return {
		type: type.name,
		url: url,
		alt: alt
	}
}

const assetType = Object.freeze(
	{
		dropbox: {
			name: 'dropbox',
			// load: (url, alt, {setLoadState}) =>
			// {
			// 	const rawURL = url.replace('&dl=0', '&raw=1')
			// 	return createImage(rawURL, alt, setLoadState)
			// }
		},
		local: {
			name: 'local',
			// load: (url, alt, {setLoadState}) => (
			// 	createImage(url, alt, setLoadState)
			// )
		},
		youtube: {
			name: 'youtube',
			// load: (url, alt, {className = ''}) =>
			// {
			// 	if (url === '')
			// 	{
			// 		return (
			// 			<div className={`text-stone-50 text-4xl self-center justify-self-center mx-auto font-bold`}>COMING SOON</div>
			// 		)
			// 	}
			// 	return (
			// 		<iframe
			// 			src={url}
			// 			className={`${className}`}
			// 			allowFullScreen
			// 		/>
			// 	)
			// }
		}
	}
)

export const dropboxImage = ({url, alt}) => asset(assetType.dropbox, url, alt)

export const localImage = ({url, alt}) => asset(assetType.local, url, alt)

export const youtubeEmbed = ({url, alt}) => asset(assetType.youtube, url, alt)


const assets = Object.freeze(
	{
		images: {
			loveBombBabyCover: {
				type: assetType.dropbox.name,
				url: 'https://www.dropbox.com/scl/fi/da8rhbznwiapgcnn2gg9j/love-bomb-baby.png?rlkey=mpzxs4bbt8apz82j4o069ujpm&dl=0',
				alt: ''
			},
			playinAroundCover: {
				type: assetType.dropbox.name,
				url: 'https://www.dropbox.com/scl/fi/rkdfqsto0igim6lwzqje5/playin-around.png?rlkey=lydhl3yfeya173f89rb8obur4&dl=0',
				alt: ''
			},

			clocheThumbnail: {
				type: assetType.local.name,
				url: '/editorial/cloche/thumbnail.png',
				alt: ''
			},

			butterflyDreamsThumbnail: {
				type: assetType.local.name,
				url: '/editorial/butterfly-dreams/thumbnail.png',
				alt: ''
			},

			dianaFlorenceThumbnail: {
				type: assetType.local.name,
				url: '/editorial/diana-florence/thumbnail.png',
				alt: ''
			},

			palanteThumbnail: {
				type: assetType.local.name,
				url: '/editorial/palante-pa-mi/thumbnail.png',
				alt: ''
			},

			maliaPylesThumbnail: {
				type: assetType.local.name,
				url: '/editorial/malia-pyles/thumbnail.png',
				alt: ''
			},

			minxThumbnail: {
				type: assetType.local.name,
				url: '/editorial/minx/thumbnail.png',
				alt: ''
			},

			scrambledEggsThumbnail: {
				type: assetType.local.name,
				url: '/editorial/scrambled-eggs/thumbnail.png',
				alt: ''
			},

			stanLabsThumbnail: {
				type: assetType.local.name,
				url: '/editorial/stan-labs/thumbnail.png',
				alt: ''
			},

			edgeOfEarthThumbnail: {
				type: assetType.local.name,
				url: '/editorial/edge-of-earth/thumbnail.png',
				alt: ''
			},

			jordanGonzalesThumbnail: {
				type: assetType.local.name,
				url: '/editorial/jordan-gonzales/thumbnail.png',
				alt: ''
			},

			loveBombThumbnail: {
				type: assetType.local.name,
				url: '/directorial/love-bomb/thumbnail.png',
				alt: ''
			},
			playinAroundThumbnail: {
				type: assetType.local.name,
				url: '/directorial/playin-around/thumbnail.png',
				alt: ''
			},

			soLongThumbnail: {
				type: assetType.local.name,
				url: '/directorial/so-long/thumbnail.png',
				alt: ''
			},

			pierCatharsisThumbnail: {
				type: assetType.local.name,
				url: '/directorial/pier-catharsis/thumbnail.png',
				alt: ''
			},

			posterThumbnail: {
				type: assetType.local.name,
				url: '/directorial/poster/thumbnail.png',
				alt: ''
			},

			pityPartyThumbnail: {
				type: assetType.local.name,
				url: '/directorial/pity-party/thumbnail.png',
				alt: ''
			},

			helloAgainThumbnail: {
				type: assetType.local.name,
				url: '/directorial/hello-again/thumbnail.png',
				alt: ''
			},

			omicronSpymasterThumbnail: {
				type: assetType.local.name,
				url: '/directorial/omicron-spymaster/thumbnail.png',
				alt: ''
			},
		}
	}
)

export const displayTypes = {
	// Popup modal
	popup: 'popup',
	// Dedicated page
	dedicated: 'dedicated',
	// External link
	external: 'external',
}

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
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/r0cMIRx3JiA?si=lntiOLd-Mwnrgz9c',
					alt: ''
				}),
				displayType: displayTypes.popup
			},
			maliaPyles: {
				title: 'Malia Pyles Queerness in Conversation HBO Max Promo',
				id: 'malia-pyles-queerness-in-conversation',
				description: 'Actress Malia Pyles discusses how her character Mouse’s experiences help build an authentic queer representation on the show. Part of the Pretty Little Liars: Original Sin Campaign through Human by Orientation.',
				genre: 'Promotional',
				categories: ['Pretty Little Liars: Original Sin'],
				date: '2022',
				thumbnail: 'images.maliaPylesThumbnail',
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/CQi9zzYs1Zg?si=216PbAp1sbUZW29o',
					alt: ''
				}),
				displayType: displayTypes.popup
			},
			minx: {
				title: 'Minx HBO Max Promo',
				id: 'minx',
				description: 'Part of my application process in getting an internship at HBO. I was tasked with creating a minute-long promo of an episode of Minx.',
				genre: 'Promotional',
				categories: ['HBO Application'],
				date: '2022',
				thumbnail: 'images.minxThumbnail',
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/opts4FlU9fE?si=CU1uzzeZ3TVLohoc',
					alt: ''
				}),
				displayType: displayTypes.popup
			},
			edgeOfEarth: {
				title: 'Edge of the Earth',
				id: 'edge-of-the-earth',
				description: 'Used to promote the four part-documentary series Edge of the Earth on the front page of HBO Max in July 2022.',
				genre: 'Promotional',
				categories: ['HBO Max Video Hero'],
				date: '2022',
				thumbnail: 'images.edgeOfEarthThumbnail',
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/l0nYj16wh5s?si=S-RxZHxYXFOaysOE',
					alt: ''
				}),
				displayType: displayTypes.popup
			},
			jordanGonzales: {
				title: 'Jordan Gonzalez Queerness in Conversation HBO Max Promo',
				id: 'jordan-gonzalez-queerness-in-conversation',
				description: 'Jordan Gonzalez discusses the importance of Ash’s character and his impact on Mouse’s journey on the show. Part of the Pretty Little Liars: Original Sin Campaign through Human by Orientation.',
				genre: 'Promotional',
				categories: ['Pretty Little Liars: Original Sin'],
				date: '2022',
				thumbnail: 'images.jordanGonzalesThumbnail',
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/nD1kmj1xC0k?si=Qj9W4rTOMCpklUtW',
					alt: ''
				}),
				displayType: displayTypes.popup
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
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/NSMPPcNZosg?si=Se9hKa0paYMUdtuu',
					alt: ''
				}),
				displayType: displayTypes.popup
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
				// embed: youtubeEmbed({
				// 	url: '',
				// 	alt: ''
				// }),
				displayType: displayTypes.popup
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
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/M5aKudxDckQ?si=OspVULSZq7MJAmWX',
					alt: ''
				}),
				displayType: displayTypes.popup
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
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/Ws7EbmiXohM?si=jaZIUorrhvTAijOH',
					alt: ''
				}),
				displayType: displayTypes.popup
			},
			stanLabs: {
				title: 'Stan Labs Vehicle Deodorizer Instructional Video',
				id: 'stan-labs',
				description: 'Instructional How to Use video for a Stan Labs Deodorizer product.',
				genre: 'Instructional',
				categories: [],
				date: '2020',
				thumbnail: 'images.stanLabsThumbnail',
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/C_BCKLYmKqA?si=pSf_v3B0au6zeCDP',
					alt: ''
				}),
				displayType: displayTypes.popup
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
				credits: {},
				url: '',
				embed: youtubeEmbed({
					url: '',
					alt: ''
				}),
				displayType: displayTypes.popup
				// displayType: displayTypes.dedicated
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
				credits: {},
				url: '',
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/DbYIgkQm-mI?si=UAJHVAo_B7K49OdU',
					alt: ''
				}),
				displayType: displayTypes.popup
				// displayType: displayTypes.dedicated
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
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/uS_2iwAPDRk?si=PHUYmAW06Wrptaa4',
					alt: ''
				}),
				displayType: displayTypes.popup
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
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/2p1O0O32TSk?si=eNehFbc9ZFavOBJ6',
					alt: ''
				}),
				displayType: displayTypes.popup
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
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/Bj-33tOL95I?si=TOHeD8y5AhllcqBt',
					alt: ''
				}),
				displayType: displayTypes.popup
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
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/41eNpV6g0QI?si=PBMf0u11yH-WnTpL',
					alt: ''
				}),
				displayType: displayTypes.popup
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
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/74O2C8ktmcE?si=fvNDbNzjT75vu1km',
					alt: ''
				}),
				displayType: displayTypes.popup
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
				embed: youtubeEmbed({
					url: 'https://www.youtube.com/embed/Gfwce4TkSP8?si=dwIM_a1ySOFVa92q',
					alt: ''
				}),
				displayType: displayTypes.popup
			}
		},
	}
)

function readAllText(filePath) {
	try {
		const text = fs.readFileSync(filePath, 'utf-8');
		console.log(text);
		return text;
	} catch (err) {
		console.error('Error reading file:', err);
	}
}

const template = readAllText(`A:/Projects/buvaldo-astro/src/data/projects/.template`)

const outDir = `A:\\Projects\\buvaldo-astro\\src\\data\\projects`

const writeFile = (d) => {
	let content = template
	for (const [key, value] of Object.entries(d))
	{
		if (Array.isArray(value))
		{
			content = content.replace(`$${key}`, value.map(v => `"${v.toString()}"`).join(', '))
		}
		else
			content = content.replace(`$${key}`, value.toString())
	}

	const path = `${outDir}/${d.id}.toml`

	fs.writeFileSync(path, content)
	console.log(path)
}

for (const [sectionName, section] of Object.entries(postProduction))
{
	for (const project of Object.values(section))
	{
		const thumbPath = project.thumbnail?.split('.') ?? '';
		const portPath = project.cover?.split('.') ?? '';

		writeFile({
			title: project.title,
			id: project.id,
			description: project.description,
			genre: project.genre,
			type: 'editorial',
			section: sectionName,
			categories: project.categories,
			year: project.date,
			seconds: project.durationSeconds ?? 0,
			roles: project.bryan ?? [],
			format: project.displayType,
			"landscape-src": assets[thumbPath[0]]?.[thumbPath[1]]?.url ?? '',
			"portrait-src": assets[portPath[0]]?.[portPath[1]]?.url ?? '',
			"embed-type": project.embed?.type ?? '',
			"embed-src": project.embed?.url ?? '',
		})
	}
}

for (const [sectionName, section] of Object.entries(films))
{
	for (const project of Object.values(section))
	{
		const thumbPath = project.thumbnail?.split('.') ?? '';
		const portPath = project.cover?.split('.') ?? '';

		writeFile({
			title: project.title,
			id: project.id,
			description: project.description,
			genre: project.genre,
			type: 'directorial',
			section: sectionName,
			categories: project.categories,
			year: project.date,
			seconds: project.durationSeconds ?? 0,
			roles: project.bryan ?? [],
			format: project.displayType,
			"landscape-src": assets[thumbPath[0]]?.[thumbPath[1]]?.url ?? '',
			"portrait-src": assets[portPath[0]]?.[portPath[1]]?.url ?? '',
			"embed-type": project.embed?.type ?? '',
			"embed-src": project.embed?.url ?? '',
		})
	}
}
