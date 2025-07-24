import {FilmThumbnail} from "@comp/display/FilmThumbnail"

export default function ItemGrid({className = '', children})
{
	return (
		<div className={`
			flex flex-col
			px-5
			lg:px-0
			lg:grid
			grid-cols-3
			auto-rows-min
			
			gap-9 pb-9
			
			h-min min-h-min
			relative
			${className}
		`}>
			{children}
		</div>
	)
}
