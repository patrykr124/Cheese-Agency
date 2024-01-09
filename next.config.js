/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  future: { webpack5: true }
}
 
module.exports = nextConfig
