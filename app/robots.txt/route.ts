export async function GET() {
  return new Response(`
User-agent: *
Allow: /
Disallow: /admin
Sitemap: `);
}
