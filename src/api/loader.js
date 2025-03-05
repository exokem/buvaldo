
import config from '@api/config'
import projects from '@api/projects'
import assets from '@api/assets'
import assetType from '@api/assetType'

const load = (source, sourceName, id) =>
{
	if (id === undefined)
	{
		throw Error(`Unable to load undefined identifier from source '${sourceName}'`)
	}

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
const loadImage = (id) =>
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

	return type.load(entry.url, entry.alt)
}

const loader = Object.freeze(
	{
		asset: loadAsset,
		config: (id) => load(config, 'config', id),
		film: (id) => load(projects.films, 'projects.films', id),
		postProduction: (id) => load(projects.postProduction, 'projects.postProduction', id),
		image: loadImage,
	}
)

export default loader
