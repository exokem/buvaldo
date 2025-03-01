'use client'
import cover from './bryan-cover.jpg'
import {FaArrowCircleDown} from "react-icons/fa"
import Container from '@comp/layout/container'

import BackgroundCover from '@comp/static/BackgroundCover'
import BlurOverlay from "@comp/layout/BlurOverlay"
import FilmPreview from "@comp/display/FilmPreview"
import {useFocus} from "@api/hooks/useFocus"
import Section from "@comp/layout/Section"
import load from "@api/loader"

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
					<a href="#featured-films" className="self-center down-arrow-holder bg-black rounded-[50%]">
						<FaArrowCircleDown className="self-center transition-colors fill-highlight-400 hover:fill-highlight-300" size={"40px"}/>
					</a>
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
				p-20 pt-14 gap-20
				flex flex-row grow relative
				place-content-evenly
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
