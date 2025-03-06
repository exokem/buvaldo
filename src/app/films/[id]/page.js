import load from '@api/loader'

export default async function Page({params})
{
	const id = (await params).id

	const camelCaseId = id.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase())
	const project = load.film(camelCaseId)

	return (
		<>
			{project.title}
		</>
	)
}
