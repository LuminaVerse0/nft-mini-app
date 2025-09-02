/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['your-image-domain.com'], // add domains for external images if needed
  },
  env: {
    NEXT_PUBLIC_APP_NAME: 'NFT Mini App', // example environment variable
  },
};

module.exports = nextConfig;
