/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    swcMinify: true,
    outputStandalone: true,
  },
}

module.exports = nextConfig
