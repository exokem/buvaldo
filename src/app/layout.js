import "./globals.css"
import {Providers} from "./providers"
import Navigation from '@comp/static/Navigation'

export const metadata = {
	title: "Bryan Uvaldo",
	description: "Bryan Uvaldo's directorial & editorial portfolio.",
}

export default function RootLayout({children})
{
	return (
		<html lang="en" className='scroll-smooth'>
			<body>
				<Providers>
					<Navigation/>
					{children}
				</Providers>
			</body>
		</html>
	)
}
