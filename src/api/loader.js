
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

const loadAssetObj = (asset, properties = {}) =>
{
	if (asset.type === null || asset.type === undefined)
	{
		throw Error(`Unable to read entry type for asset ${asset.toString()}`)
	}

	const typeName = asset.type
	const type = load(assetType, 'assetType', typeName)

	return type.load(asset.url, asset.alt, properties)
}

const loadAsset = (id, setLoadState, properties) =>
{
	if (id === undefined || id === null || id === '')
	{
		return <></>
	}

	const entry = load(assets, 'assets', id)

	if (entry === null || entry === undefined)
	{
		throw Error(`Unable to read entry for asset ${id}`)
	}

	return loadAssetObj(entry, {setLoadState, ...properties})
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
		config: (id) => load(config, 'config', id),
		film: loadFilm,
		postProduction: (id) => load(projects.postProduction, 'projects.postProduction', id),
		image: loadAsset,
		asset: loadAsset,
		direct: {
			asset: loadAssetObj
		}
	}
)

export default loader
