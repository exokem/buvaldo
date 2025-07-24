
'use client'

import React from "react"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from '@heroui/react'
import {passionOne, inter} from '@font'

import config from '@api/config'
import icons from "@api/icons";
import {ExploreButton} from "@comp/exploreButton";

function Title()
{
	return (
		<NavbarBrand>
			<Link className="text-black flex flex-col" href="/">
				<h1
					className={`
						${passionOne.className}
						self-start 
						text-4xl md:text-5xl lg:text-6xl
						px-3
						highlight-gradient
					`}
				>
					BRYAN UVALDO
				</h1>
				<h3 className={`${inter.className} self-start font-bold pl-3`}>DIRECTOR. EDITOR.</h3>
			</Link>
		</NavbarBrand>
	)
}

// highlight-gradient
// hover:highlight-gradient-onhover

function Item({label, href, isMobile = true})
{
	const link = (
		<Link
			href={href}
			className={`
				${inter.className} 
				text-black font-bold text-xl
				hidden lg:flex
				h-[80%]
				group
			`}
		>
			<span
				className={`
					relative 
					overflow-hidden 
					transition-colors duration-300 group cursor-pointer
					px-3 py-2
				`}
			>
				{label}
				<span aria-hidden="true" className="
					opacity-40
					highlight-gradient-alt
					absolute
					inset-0
					-translate-x-full
					group-hover:translate-x-0
					transition-transform
					duration-300
					z-[-1]
				"/>
			</span>
		</Link>
	)

	if (isMobile)
		return <NavbarMenuItem>{link}</NavbarMenuItem>
	else
		return <NavbarItem className="h-full flex items-center">{link}</NavbarItem>
}

function MenuItems({isMobile = true})
{
	return <>
		<Item isMobile={isMobile} label='DIRECTORIAL' href='/directorial'/>
		<Item isMobile={isMobile} label='EDITORIAL' href='/editorial'/>
		<Item isMobile={isMobile} label='ABOUT' href='/about'/>
	</>
}

export default function Navigation()
{
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	return <Navbar height={config.navigation.height} maxWidth="xl" position="sticky" className="[&>header]:px-3 highlight-gradient">
		<NavbarContent>
			<Title/>
		</NavbarContent>

		<NavbarContent className="flex flex-col lg:flex-row gap-6" justify="end">
			<MenuItems isMobile={false}/>
		</NavbarContent>

		<NavbarContent className="md:hidden flex gap-4" justify="end">
			<NavbarMenuToggle
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				className="md:hidden text-black aspect-square w-auto"
			/>
		</NavbarContent>
		<NavbarMenu className={'bg-emphasis flex flex-col place-content-center gap-10'}>
			<NavbarMenuItem>
				<ExploreButton href={`/directorial`} icon={icons.movie2} className={'py-10'}>
					Directing
				</ExploreButton>
			</NavbarMenuItem>
			<NavbarMenuItem>
				<ExploreButton href={`/editorial`} icon={icons.film} className={'py-10'}>
					Editing
				</ExploreButton>
			</NavbarMenuItem>
			<NavbarMenuItem>
				<ExploreButton href={`/about`} icon={icons.user} className={'py-10'}>
					About
				</ExploreButton>
			</NavbarMenuItem>
		</NavbarMenu>
	</Navbar>
}
