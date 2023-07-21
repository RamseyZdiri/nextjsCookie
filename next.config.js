const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ren-s-easygoing-harp-seal.euwest01.umbraco.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['@/components'] = path.join(__dirname, 'path/to/your/components/folder');
    return config;
  },
};

module.exports = nextConfig;
