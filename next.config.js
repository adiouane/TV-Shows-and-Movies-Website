/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    domains: ['wallpaperaccess.com', 'image.tmdb.org', 'img.icons8.com'],
  },
};

module.exports = nextConfig;
