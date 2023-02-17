/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/brandonluii/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
