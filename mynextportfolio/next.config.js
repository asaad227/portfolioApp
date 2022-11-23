/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co'
      },{
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/asaad227/**'
      },{
        protocol: 'https',
        hostname:"github-readme-stats.vercel.app"
      }
    ],
  },
}