'use client'

import {useState} from "react"
import loadState from "@api/loadState"
import {Spinner} from "@nextui-org/react"
import load from "@api/loader"

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
			<a href={`/film/${film.id}`} className="w-full h-full absolute top-0 left-0 bottom-0 right-0">
				{load.image(isLandscape ? film.thumbnail : film.cover, setState)}
			</a>
		</>
	)
}
