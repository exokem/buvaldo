
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
				url: '/editorial/cloche/thumbnail.png',
				alt: ''
			},

			butterflyDreamsThumbnail: {
				type: assetType.local.name,
				url: '/editorial/butterfly-dreams/thumbnail.jpeg',
				alt: ''
			},

			dianaFlorenceThumbnail: {
				type: assetType.local.name,
				url: '/editorial/diana-florence/thumbnail.png',
				alt: ''
			},

			palanteThumbnail: {
				type: assetType.local.name,
				url: '/editorial/palante-pa-mi/thumbnail.png',
				alt: ''
			},

			maliaPylesThumbnail: {
				type: assetType.local.name,
				url: '/editorial/malia-pyles/thumbnail.png',
				alt: ''
			},

			minxThumbnail: {
				type: assetType.local.name,
				url: '/editorial/minx/thumbnail.png',
				alt: ''
			},

			scrambledEggsThumbnail: {
				type: assetType.local.name,
				url: '/editorial/scrambled-eggs/thumbnail.png',
				alt: ''
			},

			stanLabsThumbnail: {
				type: assetType.local.name,
				url: '/editorial/stan-labs/thumbnail.png',
				alt: ''
			},

			edgeOfEarthThumbnail: {
				type: assetType.local.name,
				url: '/editorial/edge-of-earth/thumbnail.png',
				alt: ''
			},

			jordanGonzalesThumbnail: {
				type: assetType.local.name,
				url: '/editorial/jordan-gonzales/thumbnail.png',
				alt: ''
			},



			loveBombThumbnail: {
				type: assetType.local.name,
				url: '/directorial/love-bomb/thumbnail.jpeg',
				alt: ''
			},

			playinAroundThumbnail: {
				type: assetType.local.name,
				url: '/directorial/playin-around/thumbnail.jpeg',
				alt: ''
			},

			soLongThumbnail: {
				type: assetType.local.name,
				url: '/directorial/so-long/thumbnail.jpg',
				alt: ''
			},

			pierCatharsisThumbnail: {
				type: assetType.local.name,
				url: '/directorial/pier-catharsis/thumbnail.jpg',
				alt: ''
			},

			posterThumbnail: {
				type: assetType.local.name,
				url: '/directorial/poster/thumbnail.jpg',
				alt: ''
			},

			pityPartyThumbnail: {
				type: assetType.local.name,
				url: '/directorial/pity-party/thumbnail.jpeg',
				alt: ''
			},

			helloAgainThumbnail: {
				type: assetType.local.name,
				url: '/directorial/hello-again/thumbnail.jpg',
				alt: ''
			},

			omicronSpymasterThumbnail: {
				type: assetType.local.name,
				url: '/directorial/omicron-spymaster/thumbnail.jpg',
				alt: ''
			},
		}
	}
)

const asset = (type, url, alt) =>
{
	return {
		type: type.name,
		url: url,
		alt: alt
	}
}

export const dropboxImage = ({url, alt}) => asset(assetType.dropbox, url, alt)

export const localImage = ({url, alt}) => asset(assetType.local, url, alt)

export const youtubeEmbed = ({url, alt}) => asset(assetType.youtube, url, alt)

export default assets
