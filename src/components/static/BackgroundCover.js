import Image from "next/image"

export default function BackgroundCover({src, alt=""})
{
	return (
		<Image
			src={src}
			alt={alt}
			className={`
				-translate-x-[calc(calc(100%-100vw)/2)]
				h-[100vh] lg:h-auto 
				w-[calc(1.5*100vh)] lg:w-auto
				max-w-[100000px] lg:max-w-full
				
				!aspect-[3/2]
				fixed z-[-10]
				
				top-[0]
			`}
		/>
	)
}
