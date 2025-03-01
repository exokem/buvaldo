import "./globals.css"
import {Providers} from "./providers"
import Navigation from '@comp/static/navigation'

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
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
