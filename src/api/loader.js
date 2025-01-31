
import {config} from '@api/config'

export default function load(id)
{
	const parts = id.split('.')

	let obj = config

	for (const part of parts)
	{
		obj = obj[part]
	}

	return obj
}
