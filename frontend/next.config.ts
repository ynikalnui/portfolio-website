import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
        search: ''
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
        search: ''
      },
      {
        protocol: 'https',
        hostname: 'oleh-strapi.dieselservice.com.ua',
        port: '',
        pathname: '/**',
        search: ''
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1037',
        pathname: '/**',
        search: ''
      }
    ]
  }
};

export default nextConfig;