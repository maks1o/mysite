/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcMinify: true,
    outputStandalone: true,
  },
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
}

module.exports = nextConfig
