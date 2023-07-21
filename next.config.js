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
};

module.exports = nextConfig;
