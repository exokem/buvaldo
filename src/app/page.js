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

import BackgroundCover from '@comp/static/bgcover'

function AboutCover()
{
	return (
		<Cover className="justify-center">
			<div className="
				flex flex-col 
				h-min
				self-end 
				gap-12 py-12
			">
				<div className="bg-white px-5 py-4 rounded-xl max-w-[800px] text-xl drop-shadow-lg">
					{load.config('home.aboutSummary')}
				</div>
				<a href="#films" className="self-center down-arrow-holder bg-black rounded-[50%]">
					<FaArrowCircleDown className="self-center transition-colors fill-highlight-300 hover:fill-highlight-200" size={"40px"}/>
				</a>
			</div>
		</Cover>


	)
}

function FilmPreview({film})
{
	return (
		<div className="aspect-[calc(40/59)] relative p-9">
			<a href={`/project/${film.id}`}>
				{load.image(film.cover)}
			</a>
		</div>
	)
}

function Films()
{
	const films = load.config('home.featuredFilms')

	return (
		<div className="flex flex-row">
			{films.map((it) => <FilmPreview key={it.cover} film={it}/>)}
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
