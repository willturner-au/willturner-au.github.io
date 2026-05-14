/**
 * Cloudflare Worker — Markdown Negotiation for willturner.au
 *
 * When an agent sends Accept: text/markdown, this worker returns
 * the contents of /llms.txt instead of the HTML page.
 *
 * Deploy via Cloudflare Dashboard > Workers & Pages > Create Worker
 * Then add a Route: willturner.au/* → this worker
 *
 * Alternatively, if you migrate to Cloudflare Pages, rename this
 * file to _worker.js and place it in the repo root.
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const accept = request.headers.get('Accept') || '';

    // Only intercept if agent requests markdown AND it's a content page
    const isAsset = /\.(js|css|png|jpg|jpeg|avif|webp|svg|ico|woff2?|xml|json|txt)$/i.test(url.pathname);
    const wantsMarkdown = accept.includes('text/markdown');

    if (wantsMarkdown && !isAsset) {
      // Fetch llms.txt and return it with correct Content-Type
      const llmsUrl = new URL('/llms.txt', url.origin);
      const llmsResponse = await fetch(llmsUrl.toString());
      const llmsText = await llmsResponse.text();

      return new Response(llmsText, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Cache-Control': 'public, max-age=3600',
          'Vary': 'Accept',
          'X-Markdown-Source': 'llms.txt'
        }
      });
    }

    // All other requests pass through normally
    return fetch(request);
  }
};
