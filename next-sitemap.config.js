/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://naufalnr.my.moklet.org",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: "monthly",
  priority: 0.7,
  exclude: ["/admin"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
