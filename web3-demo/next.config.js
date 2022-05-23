/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  future: { webpack5: true }
}
const withCSS = require('@zeit/next-css')
module.exports = withCSS({/* my next config */})
module.exports = nextConfig
