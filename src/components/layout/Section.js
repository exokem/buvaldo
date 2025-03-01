import {passionOne} from "@font"
import Container from "@comp/layout/container"

export function SectionHeading({title, id})
{
	return (
		<div className='flex justify-center items-center py-5'>
			<h1 id={id} className={`
				font-bold ${passionOne.className} 
				text-4xl md:text-5xl lg:text-6xl
				text-nowrap text-black
				highlight-gradient
				w-min
				px-3
				self-center
				z-20
			`}>{title}</h1>
		</div>
	)
}

export default function Section({title, id, className = '', children = null})
{
	return (
		<div className={`full-height ${className}`}>
			<Container className="
				h-full
				flex flex-col
			">
				<SectionHeading title={title} id={id}/>
				{children}
			</Container>
		</div>
	)
}
