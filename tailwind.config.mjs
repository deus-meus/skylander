/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				stone: {
					50: "#FAFAF9",
					100: "#F5F5F4",
					200: "#E7E5E4",
					300: "#D6D3D1",
					400: "#A8A29E",
					500: "#78716C",
					600: "#57534E",
					700: "#44403C",
					800: "#292524",
					900: "#1C1917",
					950: "#0C0A09",
				},
				slate: {
					950: "#0B1120",
				},
				amber: {
					400: "#D49B28",
					450: "#FFB923",
					500: "#C58B1B",
					600: "#B07914",
					700: "#8F5E0B",
				},
				brand: {
					dark: "#0B1120",
					elevated: "#1E293B",
					light: "#F8FAFC",
					amber: "#F59E0B",
					gold: "#FFB923",
					blue: "#2563EB",
					orange: "#EA580C",
				},
			},
			fontFamily: {
				heading: ["Plus Jakarta Sans", "sans-serif"],
				body: ["Inter", "sans-serif"],
				sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
				display: ["Plus Jakarta Sans", "sans-serif"],
				mono: ["JetBrains Mono", "monospace"],
			},
		},
	},
	plugins: [],
};
