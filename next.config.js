/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Produces a self-contained .next/standalone folder with only the files
  // needed to run the app (a minimal node_modules + server.js). This is
  // what you want on a VPS: you copy/run that folder instead of shipping
  // the whole project + full node_modules, and startup/deploys are faster.
  output: 'standalone',

  webpack: (config, { nextRuntime }) => {
    if (nextRuntime === 'edge') {
      config.resolve.alias = {
        ...config.resolve.alias,
        ws: false,
        bufferutil: false,
        'utf-8-validate': false,
      }
    }
    return config
  },

  // On Vercel these headers are added for you. On a bare VPS they aren't,
  // so we set them here. Adjust the CSP if you add new external scripts,
  // fonts, or embeds — an overly strict CSP will silently break them.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          // Only sent over HTTPS by browsers; harmless if you're briefly on HTTP
          // during setup, but make sure HTTPS is actually in place before relying on it.
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https:",
              "font-src 'self' data:",
              "connect-src 'self' https://*.supabase.co https://api.resend.com",
              "frame-ancestors 'self'",
            ].join('; '),
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig