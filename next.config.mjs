/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			'www.dropbox.com'
		],
		// https://photos.app.goo.gl/vm7msmyeEt6pwwRL6
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'photos.app.goo.gl',
				port: '',
				pathname: '/**',
				search: '',
		  	},
			{
				protocol: 'https',
				hostname: 'lh3.googleusercontent.com',
				port: '',
				pathname: '/pw/**',
				search: '',
		  	},

			// https://www.dropbox.com/scl/fi/ggldi1uvkwua84vg4x9u2/stefanengineeringtechtree281-FINAL.jpg?rlkey=gpxg15e48pdbx1hrxt6q1e4du&st=0orgl4st&dl=0
			{
				protocol: 'https',
				hostname: 'www.dropbox.com',
				port: '',
				pathname: '/scl/fi/**',
				search: '',
		  	},
		],
	},
}

export default nextConfig
