import BackgroundCover from "@comp/static/BackgroundCover"
import cover from './cover.jpg'
import Container from "@comp/layout/Container"
import instagram from './instagram.svg'
import youtube from './youtube.svg'
import linkedin from './linkedin.svg'
import Image from "next/image"
import {Button, Link} from '@heroui/react'

function ImdbLogo()
{
	return (
		<svg id="home_img" className="ipc-logo min-w-[5rem]  min-h-[2.5rem]" xmlns="http://www.w3.org/2000/svg"
			 viewBox="0 0 64 32" version="1.1">
			<g fill="#F5C518">
				<rect x="0" y="0" width="100%" height="100%" rx="4"></rect>
			</g>
			<g transform="translate(8.000000, 7.000000)" fill="#000000" fillRule="nonzero">
				<polygon points="0 18 5 18 5 0 0 0"></polygon>
				<path
					d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>
				<path
					d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>
				<path
					d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path>
			</g>
		</svg>
	)
}

// function LinkedInLogo()
// {
// 	return (
// 		<svg viewBox="0 0 84 21" preserveAspectRatio="xMinYMin meet" xmlns="http://www.w3.org/2000/svg"
// 			 version="1.1" focusable="false" className={`h-[40px]`}
// 			 aria-busy="false">
// 			<g className="inbug" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
// 				<path
// 					d="M19.479,0 L1.583,0 C0.727,0 0,0.677 0,1.511 L0,19.488 C0,20.323 0.477,21 1.333,21 L19.229,21 C20.086,21 21,20.323 21,19.488 L21,1.511 C21,0.677 20.336,0 19.479,0"
// 					className="bug-text-color" transform="translate(63.000000, 0.000000)"></path>
// 				<path
// 					d="M82.479,0 L64.583,0 C63.727,0 63,0.677 63,1.511 L63,19.488 C63,20.323 63.477,21 64.333,21 L82.229,21 C83.086,21 84,20.323 84,19.488 L84,1.511 C84,0.677 83.336,0 82.479,0 Z M71,8 L73.827,8 L73.827,9.441 L73.858,9.441 C74.289,8.664 75.562,7.875 77.136,7.875 C80.157,7.875 81,9.479 81,12.45 L81,18 L78,18 L78,12.997 C78,11.667 77.469,10.5 76.227,10.5 C74.719,10.5 74,11.521 74,13.197 L74,18 L71,18 L71,8 Z M66,18 L69,18 L69,8 L66,8 L66,18 Z M69.375,4.5 C69.375,5.536 68.536,6.375 67.5,6.375 C66.464,6.375 65.625,5.536 65.625,4.5 C65.625,3.464 66.464,2.625 67.5,2.625 C68.536,2.625 69.375,3.464 69.375,4.5 Z"
// 					className="background" fill="#0a66c2"></path>
// 			</g>
// 			<g className="linkedin-text">
// 				<path
// 					d="M60,18 L57.2,18 L57.2,16.809 L57.17,16.809 C56.547,17.531 55.465,18.125 53.631,18.125 C51.131,18.125 48.978,16.244 48.978,13.011 C48.978,9.931 51.1,7.875 53.725,7.875 C55.35,7.875 56.359,8.453 56.97,9.191 L57,9.191 L57,3 L60,3 L60,18 Z M54.479,10.125 C52.764,10.125 51.8,11.348 51.8,12.974 C51.8,14.601 52.764,15.875 54.479,15.875 C56.196,15.875 57.2,14.634 57.2,12.974 C57.2,11.268 56.196,10.125 54.479,10.125 L54.479,10.125 Z"
// 					fill="#0a66c2"></path>
// 				<path
// 					d="M47.6611,16.3889 C46.9531,17.3059 45.4951,18.1249 43.1411,18.1249 C40.0001,18.1249 38.0001,16.0459 38.0001,12.7779 C38.0001,9.8749 39.8121,7.8749 43.2291,7.8749 C46.1801,7.8749 48.0001,9.8129 48.0001,13.2219 C48.0001,13.5629 47.9451,13.8999 47.9451,13.8999 L40.8311,13.8999 L40.8481,14.2089 C41.0451,15.0709 41.6961,16.1249 43.1901,16.1249 C44.4941,16.1249 45.3881,15.4239 45.7921,14.8749 L47.6611,16.3889 Z M45.1131,11.9999 C45.1331,10.9449 44.3591,9.8749 43.1391,9.8749 C41.6871,9.8749 40.9121,11.0089 40.8311,11.9999 L45.1131,11.9999 Z"
// 					fill="#0a66c2"></path>
// 				<polygon fill="#0a66c2"
// 						 points="38 8 34.5 8 31 12 31 3 28 3 28 18 31 18 31 13 34.699 18 38.241 18 34 12.533"></polygon>
// 				<path
// 					d="M16,8 L18.827,8 L18.827,9.441 L18.858,9.441 C19.289,8.664 20.562,7.875 22.136,7.875 C25.157,7.875 26,9.792 26,12.45 L26,18 L23,18 L23,12.997 C23,11.525 22.469,10.5 21.227,10.5 C19.719,10.5 19,11.694 19,13.197 L19,18 L16,18 L16,8 Z"
// 					fill="#0a66c2"></path>
// 				<path
// 					d="M11,18 L14,18 L14,8 L11,8 L11,18 Z M12.501,6.3 C13.495,6.3 14.3,5.494 14.3,4.5 C14.3,3.506 13.495,2.7 12.501,2.7 C11.508,2.7 10.7,3.506 10.7,4.5 C10.7,5.494 11.508,6.3 12.501,6.3 Z"
// 					fill="#0a66c2"></path>
// 				<polygon fill="#0a66c2" points="3 3 0 3 0 18 9 18 9 15 3 15"></polygon>
// 			</g>
// 		</svg>
// 	)
// }

function LogoButton({href, children, className})
{
	return (
		<Button
			as={Link}
			href={href}
			className={`w-min max-w-min h-[40px] p-0 ${className}`}
		>
			{children}
		</Button>
	)
}

export default function About()
{
	return (
		<>
			<BackgroundCover src={cover}/>
			<Container className={`
				full-height 
				place-content-center md:place-content-end
			`}>
				<div className={`
					flex flex-col 
					h-min
					self-center
					gap-5
					max-w-[32rem] 
					place-content-center
					text-lg
					p-5
					rounded-xl
					bg-stone-50
					bg-opacity-70
					mt-[25rem] md:mt-0
				`}>
					<p className={``}>
						Bryan Uvaldo is a Brazilian-American filmmaker with a B.F.A. in Film & Television from NYU Tisch
						School of the Arts.
					</p>
					<p>
						Passionate for the action film genre, Bryan is set to debut his first action short Love Bomb
						Baby later this year and follow that up with his NYU thesis, Playin’ Around, early next year.
						Bryan has edited ten short films, multiple promos for HBO Max, and is now the lead editor for a
						feature film.
					</p>
					<p>
						An intern at Warner Brothers Discovery during the Summer of 2022, Bryan worked as an editor for
						the marketing campaigns of Pretty Little Liars: Original Sin & Edge of the Earth. Bryan is
						determined to use his post-production experience as a building block for his path to becoming a
						director for blockbuster films.
					</p>
					<div className={`
						max-h-20
						flex flex-row
						place-content-center md:place-content-start
						gap-3
					`}>
						<LogoButton
							className={`min-w-[3.625rem]`}
							href={`https://www.youtube.com/channel/UCNDFgziSeSvF3CjxJxo7esg`}>
							<Image src={youtube} alt={``} className={`w-full h-[2.5rem]`}/>
						</LogoButton>
						<LogoButton
							className={`min-w-[5rem]`}
							href={`https://www.imdb.com/name/nm12071705/`}>
							<ImdbLogo/>
						</LogoButton>
						<LogoButton
							className={`min-w-[2.5rem] rounded-sm bg-transparent`}
							href={`https://www.linkedin.com/in/bryan-uvaldo-59827a1b9/`}>
							<Image src={linkedin} alt={``} className={`h-[2.5rem]`}/>
							{/*<LinkedInLogo/>*/}
						</LogoButton>
						<LogoButton
							className={`min-w-[2.5rem] rounded-sm bg-transparent`}
							href={`https://www.instagram.com/buvaldo218/`}>
							<Image src={instagram} alt={``} className={`h-[2.5rem]`}/>
						</LogoButton>
					</div>
				</div>

			</Container>
		</>
	)
}
