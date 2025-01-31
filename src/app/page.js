'use client'
import Image from "next/image"
import {Button} from "@nextui-org/button"
import {ParallaxProvider} from 'react-scroll-parallax'
import Home from '@page/home'
import cover from './bryan-cover.jpg'
import {config} from '@api/config'
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
					{load('home.aboutSummary')}
				</div>
				<a href="#films" className="self-center down-arrow-holder bg-black rounded-[50%]">
					<FaArrowCircleDown className="self-center transition-colors fill-highlight-300 hover:fill-highlight-200" size={"40px"}/>
				</a>
			</div>
		</Cover>


	)
}

function Films()
{
	return (
		<div id="films">
		</div>
	)
}

export default function Page() 
{
	return (
		<>
			{/* <div className="bg-red-500 h-[100vh] opacity-50 z-10">a</div> */}
			<AboutCover/>
			<Films/>
			<BackgroundCover src={cover}/>
		</>
	)
	// return <ParallaxProvider><Home/></ParallaxProvider>
}
