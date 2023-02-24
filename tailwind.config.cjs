/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			screens: {
				sm: '320px',
			},
		},
	},
	plugins: [
		require('@tailwindcss/line-clamp'),
		require('tailwind-scrollbar')({ nocompatible: true }),
	],
	variants: {
        scrollbar: ['rounded']
    }
}
