import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // Production robots.txt - allows crawlers
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/signin',
          '/signup',
          '/delete-account'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/_next/',
          '/private/',
          '/signin',
          '/signup',
          '/delete-account'
        ],
      }
    ],
    sitemap: 'https://kartsquare.com/sitemap.xml',
  }
}