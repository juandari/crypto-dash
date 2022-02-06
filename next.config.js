/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bin.bnbstatic.com', 'ex.bnbstatic.com', 'bitcoin.org'],
  },
}

module.exports = nextConfig
