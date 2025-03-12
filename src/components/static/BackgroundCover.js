import Image from "next/image"

export default function BackgroundCover({src, alt=""})
{
	return (
		<Image
			src={src}
			alt={alt}
			className={`
				left-0 right-0 
				fixed z-[-10]
				
				top-[var(--nav-height)]
			`}
		/>
	)
}
