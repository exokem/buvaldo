import projects from "@api/projects"
import {SimpleFilmPreview} from "@comp/display/FilmPreview"
import Section, {SectionHeading} from "@comp/layout/Section"
import Container from "@comp/layout/Container"

export default async function Page()
{
	const films = projects.films

	return (
		<Container className={`
			h-auto
			flex flex-col
		`}>
			<SectionHeading id={'films'}>FILMS</SectionHeading>
			<div className={`
				grid
				grid-cols-5
				gap-9
				pb-9
				
				auto-rows-min
				h-min
				min-h-min
			`}>
				<SimpleFilmPreview film={films.soLong} />
				<SimpleFilmPreview film={films.soLong} />
				<SimpleFilmPreview film={films.soLong} />
				<SimpleFilmPreview film={films.soLong} />
				<SimpleFilmPreview film={films.soLong} />
				<SimpleFilmPreview film={films.soLong} />
				<SimpleFilmPreview film={films.soLong} />
				<SimpleFilmPreview film={films.soLong} />
			</div>
		</Container>
	)
}
