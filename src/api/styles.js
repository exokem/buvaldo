
const ruleParts = [
	'bg-gradient-to-r',
	'from-highlight-300',
	'from-70%',
	'to-transparent'
]

export function highlightGradient(prefix = "") 
{
	return ruleParts.map((p) => `${prefix}${p}`).join(' ')
}