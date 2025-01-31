
import Container from '@comp/container'
import config from '@api/config'

// Covers the full page, minus the navbar height
export default function Cover({className="", children})
{
	return (
		<Container className={`${className} full-height`}>
			{children}
		</Container>
	)
}