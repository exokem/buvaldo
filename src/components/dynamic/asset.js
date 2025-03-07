import loader from "@api/loader"

const Asset = ({
	assetId = null,
	asset = null,
	setLoadState = null,
	className = '',
	properties = {}
}) =>
{
	if (asset !== null)
	{
		return loader.direct.asset(asset, {
			className,
			...properties
		})
	}

	if (assetId === null)
	{
		throw Error(`An asset ID is required unless an asset object is provided.`)
	}

	if (setLoadState === null)
	{
		throw Error(`A load state setter is required unless an asset object is provided.`)
	}

	return loader.asset(assetId, setLoadState, properties)
}

export default Asset
