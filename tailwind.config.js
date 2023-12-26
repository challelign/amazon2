/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				fontFamily: {
					satoshi: ["Satoshi", "sans-serif"],
					inter: ["Inter", "sans-serif"],
				},
				amazon_blue: {
					light: "#232F3E",
					DEFAULT: "#131921",
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
