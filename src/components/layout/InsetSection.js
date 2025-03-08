import React from "react"

export function InsetShadowOverlay({className=''})
{
	return (
		<div className={`
			absolute w-full h-full top-0 left-0
			rounded-lg
			pointer-events-none
			${className}
			[box-shadow:_inset_0_0px_4px_rgba(0,0,0,0.2)]
		`}/>
	)
}

export const insetSectionBackgroundClassName = `
	bg-lgray-d bg-opacity-50
`

export const insetSectionClassName = `
	rounded-lg
	overflow-clip
	relative
`

export default function InsetSection({children, className = ''})
{
	return (
		<div className={`
			${insetSectionClassName}
			${insetSectionBackgroundClassName}
			${className}
		`}>
			{children}
			<InsetShadowOverlay/>
		</div>
	)
}
