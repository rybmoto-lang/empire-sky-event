import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'u-stena.ru',
        pathname: '/upload/**',
      },
    ],
  },
};

export default nextConfig;
