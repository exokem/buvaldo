
import assetType from '@api/assetType'

const assets = Object.freeze(
	{
		images: {
			loveBombBabyCover: {
				type: assetType.dropbox.name,
				url: 'https://www.dropbox.com/scl/fi/da8rhbznwiapgcnn2gg9j/love-bomb-baby.png?rlkey=mpzxs4bbt8apz82j4o069ujpm&dl=0',
				alt: ''
			},
			playinAroundCover: {
				type: assetType.dropbox.name,
				url: 'https://www.dropbox.com/scl/fi/rkdfqsto0igim6lwzqje5/playin-around.png?rlkey=lydhl3yfeya173f89rb8obur4&dl=0',
				alt: ''
			}
		}
	}
)

export default assets