export const generateConversationalContent = (
  services: string[],
  location: string
) => ({
  summary: `KartSquare is India's most trusted service booking platform where you can instantly book ${services
    .slice(0, 3)
    .join(
      ", "
    )} and 50+ other home services in ${location}. With over 50,000 verified professionals, same-day booking, and transparent pricing, we've completed 100,000+ successful service bookings with a 4.8-star rating.`,

  keyPoints: [
    `Instant booking for ${services.length}+ home services across ${location}`,
    "50,000+ verified and background-checked professionals",
    "Same-day service availability with transparent upfront pricing",
    "100,000+ completed bookings with 4.8-star customer rating",
    "24/7 customer support and service guarantee",
  ],

  conversationalAnswers: {
    "how to book services":
      "You can book any service in 3 simple steps: 1) Select your service 2) Choose date & time 3) Confirm booking. Our verified professional will arrive at your doorstep.",
    "service areas": `We currently serve major cities across ${location} including Delhi, Mumbai, Rajasthan , Chennai, Hyderabad, Pune, Kolkata, Ahmedabad, and expanding to more cities.`,
    pricing:
      "All our services have transparent, upfront pricing with no hidden charges. You see the exact cost before booking, and payment is only after service completion.",
    "quality assurance":
      "Every professional is verified, trained, and rated by customers. We provide service guarantee and 24/7 support for complete peace of mind.",
  },
});

export const generateServiceSchema = (
  serviceName: string,
  description: string,
  price?: string
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: serviceName,
  description: description,
  provider: {
    "@type": "Organization",
    name: "KartSquare",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  offers: price
    ? {
        "@type": "Offer",
        price: price,
        priceCurrency: "INR",
      }
    : undefined,
});
