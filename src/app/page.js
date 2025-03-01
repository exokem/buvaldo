'use client'
import Image from "next/image"
import {Button} from "@nextui-org/button"
import {ParallaxProvider} from 'react-scroll-parallax'
import Home from '@page/home'
import cover from './bryan-cover.jpg'
import {config, assets} from '@api/config'
import {FaArrowCircleDown} from "react-icons/fa"
import Container from '@comp/container'
import Cover from '@comp/cover'
import load from '@api/loader'
import {passionOne, inter} from '@font'


import BackgroundCover from '@comp/static/bgcover'
import {useState} from "react"

function AboutCover()
{
	return (
		<div className="full-height flex flex-col justify-end">
			<div className="bg-gradient-to-b from-transparent to-emphasis">
				<Container className="
					flex flex-col
					h-min
					self-end
					gap-12 py-12
				">
					<div className="bg-white px-5 py-4 rounded-xl max-w-[800px] text-xl drop-shadow-lg self-center">
						{load.config('home.aboutSummary')}
					</div>
					<a href="#featured" className="self-center down-arrow-holder bg-black rounded-[50%]">
						<FaArrowCircleDown className="self-center transition-colors fill-highlight-400 hover:fill-highlight-300" size={"40px"}/>
					</a>
				</Container>
			</div>
		</div>
	)
}

function SectionHeading({title, id})
{
	return (
		<div className='flex justify-center items-center py-5'>
			<h1 id={id} className={`
				font-bold ${passionOne.className} 
				text-4xl md:text-5xl lg:text-6xl
				text-nowrap text-black
				highlight-gradient
				w-min
				px-3
				self-center
				z-20
			`}>{title}</h1>
		</div>
	)
}

function Section({title, id, className = '', children = null})
{
	return (
		<div className={`full-height ${className}`}>
			<Container className="
				h-full
				flex flex-col
			">
				<SectionHeading title={title} id={id}/>
				{children}
			</Container>
		</div>
	)
}

function useFocus()
{
	const [focusedItem, setFocusedItem] = useState(null)

	const isItemFocused = (item) => focusedItem === item

	const isOtherItemFocused = (item) =>
	{
		if (focusedItem === null)
			return false

		return focusedItem !== item
	}

	const assignFocus = (item) => setFocusedItem(item)
	const unassignFocus = (item) =>
	{
		if (focusedItem === item)
		{
			setFocusedItem(null)
		}
	}

	return {
		isItemFocused,
		isOtherItemFocused,
		assignFocus,
		unassignFocus,
	}
}

function FilmPreview({film, setFocusedFilm, focus})
{
	return (
		<div
			className={`
				aspect-[calc(40/59)]
				relative
				p-9
				cursor-pointer
				overflow-clip
				bg-black
				z-10
				
				hover:rotate-3
				hover:scale-110
				hover:[filter:_blur(0)_!important;]
				hover:z-50 
				
				rounded-lg
				drop-shadow-lg
				
				transition-all
				${focus.isOtherItemFocused(film) ? 'animate-blur' : 'animate-unblur'}
			`}
			onMouseEnter={() => focus.assignFocus(film)}
			onMouseLeave={() => focus.unassignFocus(film)}
		>
			<div className={`
				w-full h-full
				absolute
				
				${focus.isOtherItemFocused(film) ? '!bg-black' : 'bg-transparent'}
				
				transition-all
				opacity-50
				top-0 left-0
				z-51
			`}/>
			<a href={`/project/${film.id}`} className=" ">
				{load.image(film.cover)}
			</a>
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
				p-20
				pt-14
				flex flex-row gap-20
				grow
				relative
				place-content-evenly
			'>
				{films.map(film => <FilmPreview film={film} key={film.id} focus={focus}/>)}
			</div>
			<div className={`
				fixed inset-0
				w-screen h-screen 
				pointer-events-none
				transition-all
				${focus.isOtherItemFocused(null) ? `
					backdrop-blur-md 
					backdrop-saturate-150 
					bg-overlay/30 
					z-40
				` : `
					backdrop-blur-0 
					backdrop-saturate-100 
					bg-overlay/0
					z-0
				`}
			`}/>
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
