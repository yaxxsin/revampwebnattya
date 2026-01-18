// Cloudflare Workers script for serving static HTML website
export default {
    async fetch(request, env, ctx) {
        const url = new URL(request.url);
        let pathname = url.pathname;

        // Handle root path
        if (pathname === '/') {
            pathname = '/index.html';
        }

        // Handle paths without extensions (assume .html)
        if (!pathname.includes('.') && !pathname.endsWith('/')) {
            pathname = pathname + '.html';
        }

        // Map of file paths to content types
        const contentTypes = {
            '.html': 'text/html; charset=utf-8',
            '.css': 'text/css; charset=utf-8',
            '.js': 'application/javascript; charset=utf-8',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon',
            '.webp': 'image/webp',
            '.woff': 'font/woff',
            '.woff2': 'font/woff2',
            '.ttf': 'font/ttf',
            '.eot': 'application/vnd.ms-fontobject',
        };

        // Get file extension
        const ext = pathname.substring(pathname.lastIndexOf('.'));
        const contentType = contentTypes[ext] || 'application/octet-stream';

        try {
            // Try to fetch the asset
            const assetResponse = await env.ASSETS.fetch(request);

            // If asset found, return with proper content type
            if (assetResponse.status === 200) {
                return new Response(assetResponse.body, {
                    status: 200,
                    headers: {
                        'Content-Type': contentType,
                        'Cache-Control': 'public, max-age=3600',
                        'X-Content-Type-Options': 'nosniff',
                    },
                });
            }

            // If not found and it's an HTML request, try index.html (SPA fallback)
            if (assetResponse.status === 404 && ext === '.html') {
                const indexResponse = await env.ASSETS.fetch(new Request(new URL('/index.html', request.url)));
                if (indexResponse.status === 200) {
                    return new Response(indexResponse.body, {
                        status: 200,
                        headers: {
                            'Content-Type': 'text/html; charset=utf-8',
                            'Cache-Control': 'public, max-age=3600',
                        },
                    });
                }
            }

            // Return 404 page
            return new Response('404 Not Found', {
                status: 404,
                headers: { 'Content-Type': 'text/plain' },
            });
        } catch (error) {
            return new Response('Internal Server Error: ' + error.message, {
                status: 500,
                headers: { 'Content-Type': 'text/plain' },
            });
        }
    },
};
