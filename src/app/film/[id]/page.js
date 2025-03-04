import load from '@api/loader'

export default async function Page({params}) 
{
	const id = (await params).id

	const project = load.project(id.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase()))

	return (
		<>
			{project.title}
		</>
	)
}