'use client'
import Image from "next/image"
import {Button} from "@nextui-org/button"
import {ParallaxProvider} from 'react-scroll-parallax'
import Home from '@page/home'
import cover from './bryan-cover.jpg'

import BackgroundCover from '@comp/static/bgcover'

export default function Page() 
{
	return (
		<>
			{/* <div className="bg-red-500 h-[100vh] opacity-50 z-10">a</div> */}
			<BackgroundCover src={cover}/>
		</>
	)
	// return <ParallaxProvider><Home/></ParallaxProvider>
}
