import type { APIRoute } from "astro";

export const GET: APIRoute = ({ site, url }) => {
	const siteOrigin = (site ?? url).origin;
	const sitemapUrl = new URL("/sitemap-index.xml", siteOrigin).toString();

	const body = [
		"User-agent: *",
		"Allow: /",
		"",
		`Sitemap: ${sitemapUrl}`,
		"",
	].join("\n");

	return new Response(body, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
