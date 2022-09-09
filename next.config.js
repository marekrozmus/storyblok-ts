/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    storyblokApiToken: process.env.STORYBLOK_API_TOKEN,
    storyblokApiPreviewToken: process.env.STORYBLOK_API_PREVIEW_TOKEN,
    pageToBeBuildId: process.env.STORYBLOK_PAGE_TO_BE_BULD_ID,
  },
  assetPrefix: "/",
  trailingSlash: true,
};

module.exports = nextConfig;
