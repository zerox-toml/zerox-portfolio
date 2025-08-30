/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  images: {
    domains: ["media.graphassets.com", "res.cloudinary.com", "media.dev.to"],
    unoptimized: true,
  },
  // Bundle analyzer (optional - can be enabled for debugging)
  // webpack: (config, { dev, isServer }) => {
  //   if (!dev && !isServer) {
  //     config.optimization.splitChunks.cacheGroups = {
  //       ...config.optimization.splitChunks.cacheGroups,
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: 'vendors',
  //         chunks: 'all',
  //       },
  //     };
  //   }
  //   return config;
  // },
}

module.exports = nextConfig
