import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: process.env.PUBLIC_SITE_URL || "https://skylander.co.id",
	integrations: [svelte(), tailwind(), sitemap()],
	compressHTML: true,
	build: {
		inlineStylesheets: "auto",
	},
});
