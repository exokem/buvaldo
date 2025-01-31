

import projects from './projects'

const config = Object.freeze(
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
			featuredFilms: [
				projects.loveBombBaby,
				projects.playinAround
			]
		}
	}
)

export default config

