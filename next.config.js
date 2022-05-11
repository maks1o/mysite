/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    outputStandalone: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'media.giphy.com'],
  },
}

module.exports = nextConfig
