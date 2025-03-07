
/**
 * Creates an SVG element with the provided path instructions.
 *
 * @param {*} path A string containing a list of path commands.
 * @param {*} className A string containing css class names for the svg element.
 * @param {*} size The square size of the icon in pixels.
 * @returns
 * @see https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d#path_commands
 */
export default function MaterialIcon({path, className, size=24})
{
	return <>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={`${size}px`}
			height={`${size}px`}
			className={className}
			viewBox="0 -960 960 960"
		>
			<path d={path}/>
		</svg>
	</>
}
