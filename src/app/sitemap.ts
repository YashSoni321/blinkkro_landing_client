import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kartsquare.com";

  return [
    // Home page - highest priority
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    // About Us page - high priority submenu
    {
      url: `${baseUrl}/en/aboutus`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    // Services page - important section
    {
      url: `${baseUrl}/en/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    // Contact Us page
    {
      url: `${baseUrl}/en/contactus`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    // Waitlist page
  ];
}
