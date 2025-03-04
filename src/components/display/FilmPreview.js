import load from "@api/loader"

export function SimpleFilmPreview({film})
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
			`}
		>
			<a href={`/film/${film.id}`} className=" ">
				{/*{load.image(film.cover)}*/}
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
