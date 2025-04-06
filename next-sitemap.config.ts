import { IConfig } from "next-sitemap";

const config: IConfig = {
  siteUrl: "https://naufalnr.my.moklet.org",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  changefreq: "monthly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

export default config;
