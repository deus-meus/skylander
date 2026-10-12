const distDir = "./dist";
const port = Number(process.env.PORT) || 3000;
const hostname = process.env.HOSTNAME || "0.0.0.0";

const securityHeaders = {
	"X-Content-Type-Options": "nosniff",
	"X-Frame-Options": "DENY",
	"Referrer-Policy": "strict-origin-when-cross-origin",
	"Permissions-Policy": "camera=(), microphone=(), geolocation=()",
};

Bun.serve({
	port,
	hostname,
	async fetch(req) {
		const url = new URL(req.url);
		let pathname = decodeURIComponent(url.pathname);

		if (pathname.includes("..")) {
			return new Response("Forbidden", {
				status: 403,
				headers: securityHeaders,
			});
		}

		if (pathname.endsWith("/")) {
			pathname += "index.html";
		}

		let file = Bun.file(`${distDir}${pathname}`);
		if (!(await file.exists())) {
			file = Bun.file(`${distDir}${pathname}/index.html`);
		}

		if (await file.exists()) {
			return new Response(file, {
				headers: {
					...securityHeaders,
					"Content-Type": file.type || "application/octet-stream",
					"Cache-Control":
						pathname.startsWith("/_astro/") || pathname.startsWith("/images/")
							? "public, max-age=31536000, immutable"
							: "public, max-age=3600",
				},
			});
		}

		return new Response("Not Found", {
			status: 404,
			headers: securityHeaders,
		});
	},
});

console.log(
	`Skylander production server listening on http://${hostname}:${port}`,
);
