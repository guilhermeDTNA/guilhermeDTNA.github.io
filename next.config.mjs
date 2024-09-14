/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'guilhermerocha.dev.br',
        port: '',
        pathname: '/**',
      },
    ],
  },
};



export default nextConfig;
