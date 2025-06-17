/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost', 'webmaster-pro.vercel.app'],
  },
  // הסרנו את rewrites לעת עתה - נוסיף כשיהיה backend
}

module.exports = nextConfig
