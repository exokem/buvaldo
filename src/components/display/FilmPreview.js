import load from "@api/loader"
import {FilmThumbnailPopupInitiator} from "@comp/display/FilmThumbnailContent"

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
				
				lg:hover:rotate-3
				lg:hover:scale-110
				lg:hover:[filter:_blur(0)_!important;]
				lg:hover:z-[60] 
				
				rounded-lg
				drop-shadow-lg
				
				transition-all
				${focus.isOtherItemFocused(film) ? 'animate-blur' : 'animate-unblur'}
			`}
			onMouseEnter={() => focus.assignFocus(film)}
			onMouseLeave={() => focus.unassignFocus(film)}
		>
			<FilmThumbnailPopupInitiator film={film} focus={focus}>
				{load.image(film.cover)}
			</FilmThumbnailPopupInitiator>

		</div>
	)
}
