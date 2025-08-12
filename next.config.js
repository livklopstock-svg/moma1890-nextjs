const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'de', 'es', 'fr'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['images.unsplash.com', 'www.moma1890.com'],
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname);
    return config;
  },
};

module.exports = nextConfig;
