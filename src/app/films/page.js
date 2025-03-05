import projects from "@api/projects"
import {SimpleFilmPreview} from "@comp/display/FilmPreview"
import Section, {SectionHeading} from "@comp/layout/Section"
import Container from "@comp/layout/Container"
import {Skeleton} from "@nextui-org/react"
import ItemGrid from "@comp/layout/ItemGrid"
import background from './background.jpg'
import BackgroundCover from "@comp/static/BackgroundCover"

export default async function Page()
{
	const films = projects.films

	return (
		<>
			<Container className={`
				h-auto
				flex flex-col
			`}>
				<SectionHeading id={'films'}>FILMS</SectionHeading>
				<ItemGrid>
					{Object.values(films).map(film => (
						<SimpleFilmPreview key={film.id} film={film}/>
					))}
				</ItemGrid>
			</Container>
			<BackgroundCover src={background}/>
			<div className={`
				fixed inset-0
				w-screen h-screen 
				pointer-events-none
				transition-all
				backdrop-blur-sm
				backdrop-saturate-150 
				bg-overlay/30 
				-z-10
			`}/>
		</>
	)
}
