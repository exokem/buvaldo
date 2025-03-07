import {
	Button,
	Divider,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader
} from "@nextui-org/react"
import load from '@api/loader'
import Asset from "@comp/dynamic/asset"
import InsetSection from "@comp/layout/InsetSection"
import {SectionHeading} from "@comp/layout/Section"
import {inter, passionOne} from "@font"
import MaterialIcon from "@comp/icon"
import icons from "@api/icons"
import {useState} from "react";

function FilmModalHeader({film, onClose})
{
	return (
		<>
			<h1
				id={film.id}
				className={`
					font-bold ${inter.className}  
					text-black font-bold text-2xl
					content-center
					text-nowrap
					px-6
					pt-3
					w-min
					h-full
					self-center
				`}
			>
				Preview
			</h1>
			<Button
				onClick={onClose}
				className={`
					h-full
					bg-transparent
					hover:bg-amber-300
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
	)
}

export default function FilmModal({film, disclosure})
{
	const [expandDetails, setExpandDetails] = useState(false)

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
					bg-transparent
					p-0
					flex-row
					h-16
					place-content-between
					mb-3
				`,
				body: `
					bg-stone-800 
					px-3 py-3
					rounded-xl
					mx-3 mb-3
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
							<InsetSection className={`
								min-h-full 
								aspect-[calc(16/9)] 
								rounded-xl
								bg-stone-400
								bg-opacity-100
								relative
								flex flex-row
								gap-3
								${inter.className}
							`}>
								<div className={`
									flex flex-col
									grow
									p-3 gap-3
									bg-stone-500
								`}>
									<Asset
										asset={film.embed}
										className={`
										rounded-xl
										drop-shadow-lg
										aspect-[calc(16/9)] 
										outline-none
										${expandDetails ? `
											h-[30%]
										` : `
											absolute
											z-[100]
											w-full h-full
											top-0 left-0
										`}
									`}
									/>

								</div>
								<div className={`
									flex flex-col
									grow
									px-9
									text-xl
									text-stone-900
								`}>
									<div className={`flex flex-col gap-3 py-9`}>
										<h1 className={`
											font-black text-4xl
										`}>
											<em>{film.title}</em>
										</h1>
										<p className={`text-2xl`}>
											<b>{film.genre}</b> {film.categories !== undefined && film.categories.length !== 0 ? ` | ${film.categories.join(', ')}`: ''}
										</p>
										<p className={`text-2xl`}>{film.date}</p>
									</div>
									<Divider className={`bg-black h-0.5 rounded-lg`} />

									<p className={`text-xl pt-9`}>
										{film.description}
									</p>
								</div>

							</InsetSection>
							<Button
								className={`
									absolute
									-bottom-[0.75rem]
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
									className={`
										fill-black
									`}
									size={24}
								/>
								{expandDetails ? 'Hide Details' : 'Show Details'}
							</Button>
						</ModalBody>
					</>
				)}
			</ModalContent>
		</Modal>
	)
}
