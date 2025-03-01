export default function BlurOverlay({isVisible})
{
	return (
		<div className={`
			fixed inset-0
			w-screen h-screen 
			pointer-events-none
			transition-all
			${isVisible ? `
				backdrop-blur-md 
				backdrop-saturate-150 
				bg-overlay/30 
				z-40
			` : `
				backdrop-blur-0 
				backdrop-saturate-100 
				bg-overlay/0
				z-0
			`}
		`}/>
	)
}
