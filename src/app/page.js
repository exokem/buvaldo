'use client'
import Image from "next/image"
import {Button} from "@nextui-org/button"
import {ParallaxProvider} from 'react-scroll-parallax'
import Home from '@page/home'
export default function Page() 
{
	return <ParallaxProvider><Home/></ParallaxProvider>
}
