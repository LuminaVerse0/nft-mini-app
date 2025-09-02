/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // Add any external image hosts you plan to use (IPFS gateways, CDN, etc.)
    domains: [
      'nft-mini-app-sage.vercel.app',
      'ipfs.io',
      'gateway.pinata.cloud',
      'ipfs.infura.io',
      'telegra.ph'
    ],
  },
  async headers() {
    return [
      {
        // Apply these headers to every route
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            // Allow Telegram webview to embed the site and permit inline scripts for
            // small WebApp SDK usage. Adjust/remove 'unsafe-inline' / 'unsafe-eval'
            // for stricter security if you have CSP-safe code.
            value:
              "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval'; frame-ancestors 'self' https://t.me https://telegram.me https://web.telegram.org https://telegram.org;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
