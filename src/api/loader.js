
import config from '@api/config'
import projects from '@api/projects'
import assets from '@api/assets'
import assetType from '@api/assetType'

const isIdInvalid = (id) =>
{
	if (id === undefined || id === null)
	{
		return true
	}

	if (id === '')
	{
		return true
	}

	return false
}

const assertIdIsValid = (sourceName, id) =>
{
	if (isIdInvalid(id))
	{
		throw Error(`Unable to load invalid identifier '${id}' from source '${sourceName}'`)
	}
}

const load = (source, sourceName, id) =>
{
	assertIdIsValid(sourceName, id)

	console.log(`Attempting to load ${sourceName}:${id}`)

	const parts = id.split('.')

	let obj = source

	for (const part of parts)
	{
		obj = obj[part]
	}

	return obj
}

const loadAsset = (id) => load(assets, 'assets', id)
const loadImage = (id, setLoadState) =>
{
	if (id === undefined || id === null || id === '')
	{
		return <></>
	}

	const entry = loadAsset(id)

	if (entry === null || entry === undefined)
	{
		throw Error(`Unable to read entry for image ${id}`)
	}

	if (entry.type === null || entry.type === undefined)
	{
		throw Error(`Unable to read entry type for image ${id}`)
	}

	const typeName = entry.type
	const type = load(assetType, 'assetType', typeName)

	return type.load(entry.url, entry.alt, setLoadState)
}

const loadFilm = (id) =>
{
	assertIdIsValid('projects.films.*', id)

	for (const [subsetName, filmSubset] of Object.entries(projects.films))
	{
		const value = load(filmSubset, `projects.films.${subsetName}`, id)

		if (value !== undefined)
		{
			return value
		}
	}

	throw Error(`Unable to load film with id '${id}'`)
}

const loader = Object.freeze(
	{
		asset: loadAsset,
		config: (id) => load(config, 'config', id),
		film: loadFilm,
		postProduction: (id) => load(projects.postProduction, 'projects.postProduction', id),
		image: loadImage,
	}
)

export default loader
