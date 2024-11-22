
import {config} from '@api/config'

export default function Container({className="", children})
{
	return (
		<div className={`${className} flex limited-width m-auto`}>
			{children}
		</div>
	)
}