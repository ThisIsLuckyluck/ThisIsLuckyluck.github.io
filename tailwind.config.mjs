/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors : {
				darktheme: "#0f172a",
				lighttheme: "#f5f5f5",
			}
		},
	},
	plugins: [],
}
