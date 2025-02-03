
'use client'

import React from "react"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react"
import {passionOne, inter} from '@font'

import config from '@api/config'

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
				<h3 className={`${inter.className} self-start font-bold pl-3`}>DIRECTOR.EDITOR.</h3>
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
					highlight-gradient 
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
		<Item isMobile={isMobile} label='FILMS' href='/films'/>
		<Item isMobile={isMobile} label='POST-PRODUCTION' href='/post-production'/>
		<Item isMobile={isMobile} label='ABOUT' href='/about'/>
	</>
}

export default function Navigation() 
{
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	return <Navbar height={config.navigation.height} maxWidth="xl" position="sticky" className="[&>header]:px-3">
		<NavbarContent>
			<Title/>
		</NavbarContent>

		<NavbarContent className="hidden md:flex gap-6" justify="end">
			<MenuItems isMobile={false}/>
		</NavbarContent>

		<NavbarContent className="md:hidden flex gap-4" justify="end">
			<NavbarMenuToggle
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				className="md:hidden text-black aspect-square w-auto"
			/>
		</NavbarContent>
		<NavbarMenu>
			<MenuItems/>
		</NavbarMenu>
	</Navbar>
}