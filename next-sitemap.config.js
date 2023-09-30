/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://gympal.com',
  generateRobotsTxt: true,
  autoLastmod: false,
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [
      {
        userAgent: '*',
        allow: '/',
        // disallow: [],
      },
    ],
  },
  sitemapSize: 7000,
};
