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
import {handwriting, inter, passionOne} from "@font"
import {Button, Divider, Link} from '@heroui/react'
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
				hover:bg-amber-400
				hover:border-amber-400
				hover:text-stone-950
				!opacity-100
				transition-colors duration-200
				text-lg
				font-semibold
				h-auto
				py-2 px-10
				rounded-none
				group
				flex flex-row gap-3
				${className}
				${inter.className}
			`}
		>
			<MaterialIcon path={icon} size={24} className={`fill-amber-400 group-hover:fill-stone-950 transition-colors duration-200`}/>
			{children}
		</Button>
	)
}

function SlateTripart({label, icon, className=''})
{
	return (
		<Button className={`
			h-24
			grow
			flex flex-col
			items-start
			bg-transparent
			text-stone-50
			text-lg
			font-semibold
			rounded-none
			${inter.className}
			${className}
			pt-4
			px-4
		`}>
			<h2 className={`w-full place-content-start flex flex-row gap-2`}><MaterialIcon path={icon} size={24} className={`fill-stone-50 my-auto`}/>{label}</h2>
			<div className="grow">

			</div>
		</Button>
	)
}

function Slate()
{
	return (
		<div className={`
			w-min text-nowrap
			bg-stone-900
			text-stone-50
			rounded-b-3xl
			rounded-t-lg
			relative
			drop-shadow-xl
			border-2
				border-stone-950
			${inter.className}
		`}>
			{/* Angled striped bar */}
			<div className={`
				bg-stripes-alt	
				w-full
				rounded-lg
				drop-shadow-xl
				border-2
				border-stone-950
				
				-translate-y-4
				h-14
				origin-bottom-left
				-rotate-[10deg]
				absolute
				-top-10
			`}/>
			{/* Horizontal striped bar */}
			<div className={`
				bg-stripes
				w-full
				rounded-lg
				drop-shadow-xl
				border-2
				border-stone-950
				h-14
			`}/>
			{/* Hinge */}
			<div className={`
				bg-stone-800 w-20 h-20
				absolute
				-top-10
				rounded-xl
				rounded-tr-[75%]
				drop-shadow-lg
				border-2
				border-stone-950
				p-2
			`}>
				<div className={`
					rounded-full
					bg-stone-500
					w-4 h-4
					border-2
					border-stone-950
					absolute top-2 left-2
				`}/>
				<div className={`
					rounded-full
					bg-stone-500
					w-4 h-4
					border-2
				border-stone-950
					absolute bottom-2 left-2
				`}/>
				<div className={`
					rounded-full
					bg-stone-500
					w-4 h-4
					border-2
				border-stone-950
					absolute bottom-2 right-2
				`}/>
			</div>
			<div className={`flex flex-col p-10 pt-8 font-semibold`}>
				<div className={`text-2xl flex flex-row gap-10`}>
					<em>DIRECTOR</em> Bryan Uvaldo
				</div>
				<Divider className={`border-none bg-stone-50 h-[0.1rem] my-4 mb-6`}/>
				<div className={`text-xl flex flex-row gap-10`}>
					<em>PROD.</em> Brazilian-American Filmmaker & NYU Tisch Graduate
				</div>
				<Divider className={`border-none bg-stone-50 h-[0.1rem] mt-4`}/>
				<div className={`
					grid [grid-template-columns:_5fr_6fr_5fr]
					place-content-evenly
					w-full
				`}>
					<SlateTripart label={`Directing`} icon={icons.movie2} className={`flex-1`}/>
					<SlateTripart label={`Editing`} icon={icons.film} className={`flex-2 border-x-[0.1rem] border-gray-50`}/>
					<SlateTripart label={`Bio`} icon={icons.user} className={`flex-1`}/>
				</div>
			</div>
		</div>
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
						font-bold ${handwriting.className} 
						text-9xl
						text-nowrap 
						 text-amber-400
						 drop-shadow-xl
						w-min
						px-5
						pt-2
						rounded-l-xl
						z-20
					`}>
						BRYAN UVALDO.
					</h1>

					<p className={`
						text-nowrap
						rounded-l-xl
						px-3
						py-2
						text-medium
						font-bold
						border-3
						border-amber-400
						text-amber-400
						backdrop-blur 
						w-min 
						rounded-xl
						backdrop-brightness-75
						
						${inter.className}
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
							border-3
							border-amber-400
							text-stone-950
							text-lg font-bold
							h-auto
							px-4
							py-3
							transition-colors duration-200
							rounded-l-xl
							${inter.className}
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
