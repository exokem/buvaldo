'use client'
import cover from './bryan-cover.jpg'
import {FaArrowCircleDown} from "react-icons/fa"
import Container from '@comp/layout/Container'

import BackgroundCover from '@comp/static/BackgroundCover'
import BlurOverlay from "@comp/layout/BlurOverlay"
import FilmPreview from "@comp/display/FilmPreview"
import {useFocus} from "@api/hooks/useFocus"
import Section from "@comp/layout/Section"
import load from "@api/loader"
import {inter, passionOne} from "@font"
import {Button, Link} from "@nextui-org/react"
import MaterialIcon from "@comp/Icon"
import icons from "@api/icons"

function ExploreButton({href, icon, children, className = ''})
{
	return (
		<Button
			as={Link}
			href={href}
			className={`
				bg-transparent
				border-3
				border-x-0
				border-amber-400
				text-amber-400
				hover:bg-amber-300
				hover:border-amber-300
				hover:text-stone-950
				!opacity-100
				transition-colors duration-200
				text-2xl
				font-semibold
				h-auto
				py-3 px-14
				rounded-none
				group
				flex flex-row gap-3
				${className}
			`}
		>
			<MaterialIcon path={icon} size={30} className={`fill-amber-400 group-hover:fill-stone-950 transition-colors duration-200`}/>
			{children}
		</Button>
	)
}

function AboutCover()
{
	return (
		<div className="full-height flex flex-col justify-end">
			<div className="bg-gradient-to-b from-transparent to-emphasis">
				<Container className="
					flex flex-col
					h-min
					self-end
					gap-9 py-12
				">
					<h1 className={`
						font-bold ${passionOne.className} 
						text-9xl
						text-nowrap text-amber-400
						shadow-gradient
						w-min
						px-5
						pt-2
						rounded-l-xl
						z-20
					`}>
						BRYAN UVALDO.
					</h1>
					<p className={`
						shadow-gradient text-amber-400
						text-opacity-75
						w-min
						text-nowrap
						rounded-l-xl
						px-3
						py-2
						text-4xl
						font-bold
						
						${passionOne.className}
					`}>
						<span>Brazilian-American Filmmaker & NYU Tisch Graduate</span>
					</p>
					<div className={`
						flex flex-row 
						backdrop-blur 
						w-min 
						rounded-xl
						backdrop-brightness-75
					`}>
						<div className={`
							bg-amber-400
							hover:bg-amber-300
							border-3
							border-amber-400
							text-stone-950 font-bold
							text-2xl
							h-auto
							px-4
							py-3
							transition-colors duration-200
							rounded-l-xl
						`}>
							EXPLORE
						</div>
						<ExploreButton href={`/directorial`} icon={icons.movie2}>
							Directing
						</ExploreButton>
						<ExploreButton href={`/editorial`} icon={icons.film}>
							Editing
						</ExploreButton>
						<ExploreButton href={`/about`} icon={icons.user} className={`
							rounded-l-none
							border-r-3
							rounded-r-xl
						`}>
							Bio
						</ExploreButton>
					</div>
					{/*<a href="#featured-films" className="self-center down-arrow-holder bg-black rounded-[50%]">*/}
					{/*	<FaArrowCircleDown className="self-center transition-colors fill-highlight-400 hover:fill-highlight-300 animate-pulse" size={"40px"}/>*/}
					{/*</a>*/}
				</Container>
			</div>
		</div>
	)
}

function FeaturedFilms()
{
	const films = load.config('home.featuredFilms')
	const focus = useFocus()

	return (
		<Section title='FEATURED FILMS' id='featured-films' className='bg-emphasis'>
			<div className='
				p-20 pt-12 gap-20
				flex flex-row grow relative
				place-content-center
			'>
				{films.map(film => <FilmPreview film={film} key={film.id} focus={focus}/>)}
			</div>
			<BlurOverlay isVisible={focus.getFocusedItem() !== null} />
		</Section>
	)
}

export default function Page()
{
	return (
		<>
			<AboutCover/>
			<FeaturedFilms/>
			<BackgroundCover src={cover}/>
		</>
	)
}
