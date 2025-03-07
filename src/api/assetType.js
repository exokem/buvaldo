import Image from "next/image"
import loadState from "@api/loadState"

const createImage = (src, alt, setLoadState) =>
{
	return (
		<Image
			src={src}
			alt={alt}
			fill
			onLoad={() => setLoadState?.(loadState.success)}
			onError={() => setLoadState?.(loadState.failure)}
		/>
	)
}

const assetType = Object.freeze(
	{
		dropbox: {
			name: 'dropbox',
			load: (url, alt, {setLoadState}) =>
			{
				const rawURL = url.replace('&dl=0', '&raw=1')
				return createImage(rawURL, alt, setLoadState)
			}
		},
		local: {
			name: 'local',
			load: (url, alt, {setLoadState}) => (
				createImage(url, alt, setLoadState)
			)
		},
		youtube: {
			name: 'youtube',
			load: (url, alt, {className = ''}) => (
				<iframe
					src={url}
					className={`${className}`}
					allowFullScreen
				/>
			)
		}
	}
)

export default assetType
