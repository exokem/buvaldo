
'use client'

import React from "react"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react"
import {passionOne, inter} from '@font'

function Title() 
{
	return (
		<NavbarBrand>
			<Link className="text-black flex flex-col" href="/">
				<h1 className={`${passionOne.className} self-start text-3xl sm:text-4xl md:text-6xl`}>BRYAN UVALDO</h1>
				<h3 className={`${inter.className} self-start font-bold`}>DIRECTOR.EDITOR.</h3>
			</Link>
		</NavbarBrand>
	)
}

function Item({label, href, isMobile = true})
{
	const link = (
		<Link 
			href={href}
			className={`${inter.className} text-black font-medium`}
		>
			{label}
		</Link>
	)

	if (isMobile)
		return <NavbarMenuItem>{link}</NavbarMenuItem>
	else 
		return <NavbarItem>{link}</NavbarItem>
}

function MenuItems({isMobile = true})
{
	return <>
		<Item isMobile={isMobile} label='FILMS' href='/films'/>
		<Item isMobile={isMobile} label='POST PRODUCTION' href='/post-production'/>
		<Item isMobile={isMobile} label='ABOUT' href='/about'/>
	</>
}

export default function Navigation() 
{
	const [isMenuOpen, setIsMenuOpen] = React.useState(false)

	return <Navbar height={'6rem'} maxWidth="xl">
		<NavbarContent>
			
			<Title/>
		</NavbarContent>

		<NavbarContent className="hidden sm:flex gap-4" justify="end">
			<MenuItems isMobile={false}/>
		</NavbarContent>

		<NavbarContent className="sm:hidden flex gap-4" justify="end">
			<NavbarMenuToggle
				aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				className="sm:hidden text-black"
			/>
		</NavbarContent>
		<NavbarMenu>
			<MenuItems/>
		</NavbarMenu>
	</Navbar>
}