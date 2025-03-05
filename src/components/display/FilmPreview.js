import load from "@api/loader"
import {Skeleton, Spinner} from "@nextui-org/react"

export function SimpleFilmPreview({film, isLandscape = true})
{
	return (
		<div
			className={`
				${isLandscape ? 'aspect-[calc(16/9)]' : 'aspect-[calc(40/59)]' }
				relative
				flex
				p-9
				cursor-pointer
				overflow-clip
				bg-transparent
				z-10
				
				hover:rotate-3
				hover:scale-110
				hover:[filter:_blur(0)_!important;]
				hover:z-[60] 
				
				rounded-lg
				drop-shadow-2xl
				
				transition-all
				content-center
			`}
		>
			<div className={`w-full h-full absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70 blur-md`}/>
			{/*<Spinner className={`h-full w-full`} size='lg' classNames={*/}
			{/*	{*/}
			{/*		circle1: 'border-b-lgray-xxd',*/}
			{/*		circle2: 'border-b-lgray-xxd'*/}
			{/*	}*/}
			{/*}/>*/}
			<a href={`/film/${film.id}`} className="w-full h-full absolute top-0 left-0 bottom-0 right-0">
				{load.image(isLandscape ? film.thumbnail : film.cover)}
			</a>
		</div>
	)
}

export default function FilmPreview({film, setFocusedFilm, focus})
{
	return (
		<div
			className={`
				aspect-[calc(40/59)]
				relative
				p-9
				cursor-pointer
				overflow-clip
				bg-black
				z-10
				
				hover:rotate-3
				hover:scale-110
				hover:[filter:_blur(0)_!important;]
				hover:z-[60] 
				
				rounded-lg
				drop-shadow-lg
				
				transition-all
				${focus.isOtherItemFocused(film) ? 'animate-blur' : 'animate-unblur'}
			`}
			onMouseEnter={() => focus.assignFocus(film)}
			onMouseLeave={() => focus.unassignFocus(film)}
		>
			<a href={`/film/${film.id}`} className=" ">
				{load.image(film.cover)}
			</a>
		</div>
	)
}
