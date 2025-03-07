'use client'

import {useState} from "react"
import loadState from "@api/loadState"
import {Spinner, useDisclosure} from "@nextui-org/react"
import load from "@api/loader"
import {displayTypes as displayType} from "@api/projects"
import FilmModal from "@comp/display/FilmModal"

function FilmThumbnailImage({film, isLandscape, setState})
{
	const assetPath = isLandscape ? film.thumbnail : film.cover
	return load.image(assetPath, setState)
}

const className = "w-full h-full absolute top-0 left-0 bottom-0 right-0"

function FilmThumbnailPopupInitiator({film, children})
{
	const disclosure = useDisclosure()

	return (
		<div
			className={`
				${className}
				cursor-pointer
			`}
			onClick={disclosure.onOpen}
		>
			{children}
			<FilmModal film={film} disclosure={disclosure} />
		</div>
	)
}

function FilmThumbnailControl({film, children})
{

	switch (film.displayType)
	{
		case displayType.popup: return (
			<FilmThumbnailPopupInitiator film={film}>
				{children}
			</FilmThumbnailPopupInitiator>
		)

		case displayType.dedicated: return (
			<a href={`/films/${film.id}`} className={className}>
				{children}
			</a>
		)
	}
}

export default function FilmThumbnailContent({film, isLandscape})
{
	const [state, setState] = useState(loadState.loading)

	return (
		<>
			<Spinner className={`
				h-full w-full
				${state === loadState.loading ? '' : 'hidden'}
			`} size='lg' classNames={
				{
					circle1: 'border-b-lgray-xxd',
					circle2: 'border-b-lgray-xxd'
				}
			}/>
			<FilmThumbnailControl film={film}>
				<FilmThumbnailImage film={film} isLandscape={isLandscape} setState={setState} />
			</FilmThumbnailControl>
		</>
	)
}
