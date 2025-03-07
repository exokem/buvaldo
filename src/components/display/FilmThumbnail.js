
import FilmThumbnailContent from './FilmThumbnailContent'

function Overlay({film})
{
	return (
		<div className={`
				bg-black bg-opacity-70
				w-full
				absolute
				bottom-0
				pt-2
				px-4
				pb-3
				left-0 right-0
				opacity-0
				group-hover:opacity-100
				transition-all
				text-xl
				text-gray-50
			`}>
			<p><em>{film.title}</em></p>
			<p className={`text-sm text-gray-300`}>
				{film.genre}
				{
					film.categories !== undefined && film.categories.length !== 0 ? <>
						<span> | </span>{film.categories.join(', ')}</> : <></>
				}
			</p>
		</div>
	)
}

export default function FilmThumbnail({film, isLandscape = true})
{
	return (
		<div
			className={`
				${isLandscape ? 'aspect-[calc(16/9)]' : 'aspect-[calc(40/59)]'}
				relative
				flex
				p-9
				cursor-pointer
				overflow-clip
				bg-transparent
				z-5
				
				hover:scale-110
				hover:[filter:_blur(0)_!important;]
				hover:z-[60] 
				
				rounded-lg
				drop-shadow-2xl
				
				transition-all
				content-center
				group
			`}
		>
			<div className={`w-full h-full absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70 blur-md`}/>
			<FilmThumbnailContent film={film} isLandscape={isLandscape} />
			<Overlay film={film}/>
		</div>
	)
}
