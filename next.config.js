/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org'], // include this to avoid error on image src
  },
};

module.exports = nextConfig;
