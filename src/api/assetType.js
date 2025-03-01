import Image from "next/image"

const assetType = Object.freeze(
	{
		dropbox: {
			name: 'dropbox',
			load: (url, alt) =>
			{
				const rawURL = url.replace('&dl=0', '&raw=1')
				return (
					<Image
						src={rawURL}
						alt={alt}
						fill
					/>
				)
			}
		}
	}
)

export default assetType
