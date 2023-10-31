const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = {
  ...withNextra(),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // reactStrictMode: true,
  basePath: process.env.NODE_ENV !== "development" ? "/nextra-test/" : "",
  assetPrefix: process.env.NODE_ENV !== "development" ? "/nextra-test/" : ""
};