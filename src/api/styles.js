
const ruleParts = [
	'bg-gradient-to-r',
	'from-highlight-300',
	'from-70%',
	'to-transparent'
]

export function yellowGradient(prefix = "") 
{
	return ruleParts.map((p) => `${prefix}${p}`).join(' ')
}

export const yellowGradientString = yellowGradient()