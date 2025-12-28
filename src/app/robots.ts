import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Block all crawlers during development/staging
  return {
    rules: {
      userAgent: '*',
      disallow: '/', // Block all pages
    },
    sitemap: 'https://kartsquare.com/sitemap.xml',
  }
}