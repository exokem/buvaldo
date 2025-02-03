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

function FilmPreview({film})
{
	return (
		<div className="
			aspect-[calc(40/59)] 
			relative 
			p-9
			grow
			hover:rotate-3
			overflow-clip
			hover:scale-110 duration-300
			z-0 hover:z-10
			bg-black
			blur-none
			transition-all
			group-hover:blur-sm
			hover:[filter:_blur(0)_!important;]
			rounded-lg
			drop-shadow-lg
			group/prev
		">
			<div className="
				w-full h-full
				absolute
				bg-transparent
				group-hover:bg-black
				group-hover/prev:!bg-transparent
				group-hover/prev:!z-0
				transition-colors
				opacity-50
				top-0 left-0
				z-10
			"/>
			<a href={`/project/${film.id}`} className="">
				{load.image(film.cover)}
			</a>
		</div>
	)
}

function Films()
{
	const films = load.config('home.featuredFilms')

	return (
		<div className="full-height bg-emphasis">
			<Container className="h-full relative flex flex-col">
				<h1 id='featured' className={`
					font-bold text-black
					text-6xl
					highlight-gradient
					w-min
					text-nowrap
					px-3
					self-center
					z-20
					${passionOne.className}
				`}>FEATURED PROJECTS</h1>
				<div className="flex grow">
					<div className="
						flex flex-row self-center
						justify-evenly items-center
						w-full
						h-min
						gap-32
						group
					">
						{films.map((it) => <FilmPreview key={it.cover} film={it}/>)}

					</div>
				</div>
				
				<div className=" absolute top-0 bottom-0 left-[calc(50%-4rem)] z-10 w-32"/>

			</Container>
		</div>
	)
}

export default function Page() 
{
	return (
		<>
			<AboutCover/>
			<Films/>
			<BackgroundCover src={cover}/>
		</>
	)
}
