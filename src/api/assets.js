
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
			},

			clocheThumbnail: {
				type: assetType.local.name,
				url: '/post/cloche/thumbnail.png',
				alt: ''
			},

			butterflyDreamsThumbnail: {
				type: assetType.local.name,
				url: '/post/butterfly-dreams/thumbnail.jpeg',
				alt: ''
			},

			dianaFlorenceThumbnail: {
				type: assetType.local.name,
				url: '/post/diana-florence/thumbnail.png',
				alt: ''
			},

			palanteThumbnail: {
				type: assetType.local.name,
				url: '/post/palante-pa-mi/thumbnail.png',
				alt: ''
			},

			maliaPylesThumbnail: {
				type: assetType.local.name,
				url: '/post/malia-pyles/thumbnail.png',
				alt: ''
			},

			minxThumbnail: {
				type: assetType.local.name,
				url: '/post/minx/thumbnail.png',
				alt: ''
			},

			scrambledEggsThumbnail: {
				type: assetType.local.name,
				url: '/post/scrambled-eggs/thumbnail.png',
				alt: ''
			},

			stanLabsThumbnail: {
				type: assetType.local.name,
				url: '/post/stan-labs/thumbnail.png',
				alt: ''
			},
		}
	}
)

export default assets
