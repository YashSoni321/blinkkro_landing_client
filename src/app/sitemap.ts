import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kartsquare.com";
  const currentDate = new Date();

  return [
    // Home page - highest priority
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,
      lastModified: currentDate,
      changeFrequency: "daily",
      priority: 1.0,
    },

    // About Us page - high priority submenu
    {
      url: `${baseUrl}/en/aboutus`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // Services page - important section
    {
      url: `${baseUrl}/en/services`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },

    // Contact Us page
    {
      url: `${baseUrl}/en/contactus`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.7,
    },

    // Waitlist page
    {
      url: `${baseUrl}/en/waitlist`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.6,
    },
  ];
}
