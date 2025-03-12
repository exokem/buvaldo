import Image from "next/image"

export default function BackgroundCover({src, alt=""})
{
	return (
		<Image
			src={src}
			alt={alt}
			className={`
				-translate-x-[calc(calc(100%-100vw)/2)]
				fixed z-[-10]
				
				top-[0]
			`}
		/>
	)
}
