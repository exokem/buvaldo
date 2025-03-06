import projects from "@api/projects"
import Section, {SectionHeading} from "@comp/layout/Section"
import Container from "@comp/layout/Container"
import ItemGrid from "@comp/layout/ItemGrid"
import background from './background.jpg'
import BackgroundCover from "@comp/static/BackgroundCover"
import {FilmThumbnail} from "@comp/display/FilmThumbnail"

export default async function Page()
{
	const postProjects = projects.postProduction

	return (
		<>
			<Container className={`
				h-auto
				flex flex-col
			`}>
				<SectionHeading id={'hbo'}>HBO</SectionHeading>
				<ItemGrid>
					{Object.values(projects.postProduction.hbo).map(film => (
						<FilmThumbnail key={film.id} film={film}/>
					))}
				</ItemGrid>
				<SectionHeading id={'narrative'}>NARRATIVE</SectionHeading>
				<ItemGrid>
					{Object.values(projects.postProduction.narrative).map(film => (
						<FilmThumbnail key={film.id} film={film}/>
					))}
				</ItemGrid>
				<SectionHeading id={'commercial'}>COMMERCIAL</SectionHeading>
				<ItemGrid>
					{Object.values(projects.postProduction.commercial).map(film => (
						<FilmThumbnail key={film.id} film={film}/>
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
				backdrop-brightness-50
				bg-overlay/30 
				-z-10
			`}/>
		</>
	)
}
