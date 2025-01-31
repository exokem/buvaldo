
import config from '@api/config'
import projects from '@api/projects'
import assets from '@api/assets'
import assetType from '@api/assetType'

const loadX = (source, sourceName, id) => 
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

const loadConfig = (id) => loadX(config, 'config', id)
const loadAsset = (id) => loadX(assets, 'assets', id)
const loadProject = (id) => loadX(projects, 'projects', id)
const loadImage = (id) => 
{
	const entry = loadAsset(id)
	const typeName = entry.type
	const type = loadX(assetType, 'assetType', typeName)

	return type.load(entry.url, entry.alt)
}

const load = Object.freeze(
	{
		asset: loadAsset,
		config: loadConfig,
		project: loadProject,
		image: loadImage,
	}
)

export default load