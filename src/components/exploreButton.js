import {Button, Link} from "@heroui/react"
import {inter} from "@font"
import MaterialIcon from "@comp/Icon"

export function ExploreButton({href, icon, children, className = ''})
{
	return (
		<Button
			as={Link}
			href={href}
			className={`
				bg-transparent
				border-3 lg:border-none
				rounded-xl lg:rounded-none
				border-amber-400
				text-amber-400
				hover:bg-amber-400
				hover:border-amber-400
				hover:text-stone-950
				backdrop-blur 
						backdrop-brightness-75
				!opacity-100
				transition-colors duration-200
				text-lg
				font-semibold
				h-auto
				py-3 
				px-3 lg:px-10
				group
				flex flex-row gap-3
				
				${className}
				${inter.className}
			`}
		>
			<MaterialIcon path={icon} size={24} className={`fill-amber-400 group-hover:fill-stone-950 transition-colors duration-200`}/>
			{children}
		</Button>
	)
}
