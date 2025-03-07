import {passionOne} from "@font"
import Container from "@comp/layout/Container"

export function SectionHeading({children, id, className})
{
	return (
		<div className='flex justify-center items-center py-9'>
			<h1 id={id} className={`
				font-bold ${passionOne.className} 
				text-4xl md:text-5xl lg:text-6xl
				text-nowrap text-black
				highlight-gradient
				w-min
				px-3
				self-center
				rounded-l-lg
				z-20
				${className}
			`}>{children}</h1>
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
				<SectionHeading id={id}>
					{title}
				</SectionHeading>
				{children}
			</Container>
		</div>
	)
}
