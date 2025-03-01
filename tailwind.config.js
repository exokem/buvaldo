const {nextui} = require("@nextui-org/react")
const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				highlight: colors.yellow,
				emphasis: {
					DEFAULT: '#0000007D',
					25: '#00000019',
					50: '#00000032',
					75: '#000000C0'
				}
			},
			keyframes: {
				blur: {
					'0%': {filter: "blur(0px)"},
					'100%': {filter: "blur(8px)"},
				},
				unblur: {
					'0%': {filter: "blur(8px)"},
					'100%': {filter: "blur(0px)"},
				}
			},
			animation: {
				blur: 'blur 300ms linear both',
				unblur: 'unblur 300ms linear both'
			}
		},
	},
	darkMode: "class",
	plugins: [nextui()],
}
