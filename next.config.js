/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add these configurations for Netlify deployment
  output: 'export', // Enable static export
  trailingSlash: true,
  images: {
    domains: ["media.graphassets.com", "res.cloudinary.com", "media.dev.to"],
    unoptimized: true, // This helps with Netlify deployment
  },
}

module.exports = nextConfig
