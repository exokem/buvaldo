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
				<p className="bg-white px-5 py-4 rounded-xl max-w-[800px] text-xl">
					Bryan Uvaldo, a Brazilian-American filmmaker and NYU Tisch graduate, is set to 
					debut his action short Love Bomb Baby this year, followed by his thesis film 
					Playin&apos; Around next year. With ten short films and HBO Max promos edited, 
					he&apos;s now lead editor on a feature film. After interning at Warner 
					Brothers Discovery in 2022, Bryan aims to leverage his post-production experience 
					to become a blockbuster director.
				</p>
				<a href="#films" className="self-center">
					<FaArrowCircleDown className="self-center fill-highlight-300" size={"40px"}/>
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
