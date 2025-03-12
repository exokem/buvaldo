import {
	Button,
	Divider,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader
} from '@heroui/react'
import load from '@api/loader'
import Asset from "@comp/dynamic/Asset"
import InsetSection from "@comp/layout/InsetSection"
import {SectionHeading} from "@comp/layout/Section"
import {inter, passionOne} from "@font"
import MaterialIcon from "@comp/Icon"
import icons from "@api/icons"
import {useState} from "react"

function FilmModalHeader({film, onClose})
{
	return <>
		{/* Modal title */}
		<h1
			id={film.id}
			className={`
				font-bold ${inter.className}  
				text-black font-bold text-2xl
				content-center
				text-nowrap
				px-6
				w-min
				h-full
				self-center
				flex flex-row
				place-items-center
				gap-3
			`}
		>
			{/* Film icon */}
			<MaterialIcon
				path={icons.movie}
				className={`fill-black`}
				size={36}
			/>
			Preview
		</h1>

		{/* Close button */}
		<Button
			onClick={onClose}
			className={`
				h-full
				bg-transparent
				hover:bg-amber-200
				rounded-none
				rounded-tr-xl
				min-h-full
				px-3
			`}
		>
			<MaterialIcon
				path={icons.x}
				className={`
					fill-black
				`}
				size={36}
			/>
		</Button>
	</>
}

function FilmDetailsOverlay({film, expandDetails, setExpandDetails})
{
	return <>
		{/* Blur overlay */}
		<div className={`
			absolute top-0 left-0 
			w-full h-full
			bg-stone-950 bg-opacity-70
			backdrop-blur
			transition-opacity
			${expandDetails ? 'opacity-100' : 'opacity-0 pointer-events-none'}
			flex flex-col
			place-items-center
			justify-center
			py-9
		`}>
			{/* Centered details container */}
			<div className={`
				w-[55%]
				bg-stone-950 bg-opacity-50
				backdrop-blur
				text-stone-100
				px-9
				py-9
				rounded-xl
				relative
				flex flex-col gap-5
			`}>
				<FilmDetails film={film}/>

				{/* Close button */}
				<Button
					onClick={() => setExpandDetails(false)}
					className={`
				absolute top-0 right-0
				bg-transparent
				min-w-0
				!p-4
				h-auto
			`}
				>
					<MaterialIcon
						path={icons.x}
						className={`fill-stone-200`}
						size={24}
					/>
				</Button>
			</div>
		</div>
	</>
}

function FilmDetails({film})
{
	return <>
		{/*	Title */}
		<h1 className={`font-black text-4xl`}>
			<em>{film.title}</em>
		</h1>

		{/* Details */}
		<p className={`text-2xl text-stone-400`}>
			<b>{film.date} </b>
			<span> | </span>
			<span>{film.genre}</span>
			{film.categories !== undefined && film.categories.length !== 0 ? ` | `: ''}
			<em>
				{film.categories?.join(', ') ?? ''}
			</em>
		</p>

		{/* Separator */}
		<Divider className={`bg-stone-50 h-0.5 rounded-lg my-4`} />

		{/* Description */}
		<p className={`text-2xl text-stone-200`}>
			{film.description}
		</p>
	</>
}

function FilmModalBody({film, onClose})
{
	const [expandDetails, setExpandDetails] = useState(false)

	return <>
		<InsetSection
			className={`
				min-h-full 
				aspect-[calc(16/9)] 
				rounded-xl
				bg-stone-400
				bg-opacity-100
				relative
				flex flex-row place-content-center
				gap-3
				${inter.className}
			`}
		>
			{/* Film embed */}
			<Asset
				asset={film.embed}
				className={`
					rounded-xl
					drop-shadow-lg
					aspect-[calc(16/9)] 
					outline-none
					w-full h-full
				`}
			/>
			<FilmDetailsOverlay film={film} expandDetails={expandDetails} setExpandDetails={setExpandDetails} />
		</InsetSection>

		{/* Details toggle button */}
		<Button
			className={`
				absolute
				-bottom-[1rem]
				self-center
				font-bold ${inter.className}  
				bg-amber-400
				drop-shadow-lg
				!opacity-100
				hover:!opacity-100
				hover:bg-amber-300
				z-[200]
				pl-3
				text-black font-bold text-lg
			`}
			onClick={() => setExpandDetails(!expandDetails)}
		>
			<MaterialIcon
				path={expandDetails ? icons.hide : icons.show}
				className={`fill-black`}
				size={24}
			/>
			{expandDetails ? 'Hide Details' : 'Show Details'}
		</Button>
	</>
}

export default function FilmModal({film, disclosure})
{
	return (
		<Modal
			isOpen={disclosure.isOpen}
			onOpenChange={disclosure.onOpenChange}
			hideCloseButton={true}
			isDismissable={true}
			backdrop='blur'
			className={`text-stone-900`}
			classNames={{
				// backdrop: "z-[200]",
				wrapper: 'z-[100]',
				base: `
					min-w-[70vw] 
					bg-amber-400
					border-amber-400
					min-h-[calc(calc(9/16)*40vw)]
					overflow-visible
				`,
				header: `
					bg-amber-300
					rounded-t-xl
					p-0
					flex-row
					h-16
					place-content-between
					mb-1.5
				`,
				body: `
					bg-stone-950 
					px-3 py-3
					rounded-xl
					mx-1 mb-1
				`,
				// footer: "bg-lgray-h",
				closeButton: "hover:bg-amber-400 active:bg-white/10",
			}}
		>
			<ModalContent>
				{(onClose) => (
					<>
						<ModalHeader>
							<FilmModalHeader film={film} onClose={onClose} />
						</ModalHeader>
						<ModalBody>
							<FilmModalBody film={film} onClose={onClose} />
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
