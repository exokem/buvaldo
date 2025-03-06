import {FilmThumbnail} from "@comp/display/FilmThumbnail"

export default function ItemGrid({className = '', children})
{
	return (
		<div className={`
			grid
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
