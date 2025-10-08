import { Service } from "@/types/service";
import { useTranslations } from "next-intl";

// Hook to get translated services
export const useServices = () => {
  const t = useTranslations("servicesData");

  const services: Service[] = [
    {
      name: t("homeCleaning.name"),
      slug: "home-cleaning-service",
      provider: t("homeCleaning.provider"),
      category: t("homeCleaning.category"),
      price: "50",
      duration: t("homeCleaning.duration"),
      rating: 4.8,
      reviews: 156,
      images: [
        {
          src: "/images/services/cleaning/cleaning1.jpg",
        },
        {
          src: "/images/services/cleaning/cleaning2.jpg",
        },
        {
          src: "/images/services/cleaning/cleaning3.jpg",
        },
        {
          src: "/images/services/cleaning/cleaning4.jpg",
        },
      ],
    },
    {
      name: t("weddingPhotography.name"),
      slug: "wedding-photography",
      provider: t("weddingPhotography.provider"),
      category: t("weddingPhotography.category"),
      price: "800",
      duration: t("weddingPhotography.duration"),
      rating: 4.9,
      reviews: 89,
      images: [
        {
          src: "/images/services/photography/photo1.jpg",
        },
        {
          src: "/images/services/photography/photo2.jpg",
        },
        {
          src: "/images/services/photography/photo3.jpg",
        },
        {
          src: "/images/services/photography/photo4.jpg",
        },
      ],
    },
    {
      name: t("plumbingRepair.name"),
      slug: "plumbing-repair",
      provider: t("plumbingRepair.provider"),
      category: t("plumbingRepair.category"),
      price: "75",
      duration: t("plumbingRepair.duration"),
      rating: 4.7,
      reviews: 203,
      images: [
        {
          src: "/images/services/plumbing/plumb1.jpg",
        },
        {
          src: "/images/services/plumbing/plumb2.jpg",
        },
        {
          src: "/images/services/plumbing/plumb3.jpg",
        },
        {
          src: "/images/services/plumbing/plumb4.jpg",
        },
      ],
    },
    {
      name: t("eventPlanning.name"),
      slug: "event-planning",
      provider: t("eventPlanning.provider"),
      category: t("eventPlanning.category"),
      price: "500",
      duration: t("eventPlanning.duration"),
      rating: 4.8,
      reviews: 67,
      images: [
        {
          src: "/images/services/events/event1.jpg",
        },
        {
          src: "/images/services/events/event2.jpg",
        },
        {
          src: "/images/services/events/event3.jpg",
        },
        {
          src: "/images/services/events/event4.jpg",
        },
      ],
    },
    {
      name: t("personalTraining.name"),
      slug: "personal-training",
      provider: t("personalTraining.provider"),
      category: t("personalTraining.category"),
      price: "60",
      duration: t("personalTraining.duration"),
      rating: 4.9,
      reviews: 124,
      images: [
        {
          src: "/images/services/fitness/fitness1.jpg",
        },
        {
          src: "/images/services/fitness/fitness2.jpg",
        },
        {
          src: "/images/services/fitness/fitness3.jpg",
        },
        {
          src: "/images/services/fitness/fitness4.jpg",
        },
      ],
    },
    {
      name: t("electricalRepair.name"),
      slug: "electrical-repair",
      provider: t("electricalRepair.provider"),
      category: t("electricalRepair.category"),
      price: "85",
      duration: t("electricalRepair.duration"),
      rating: 4.6,
      reviews: 178,
      images: [
        {
          src: "/images/services/electrical/elec1.jpg",
        },
        {
          src: "/images/services/electrical/elec2.jpg",
        },
        {
          src: "/images/services/electrical/elec3.jpg",
        },
        {
          src: "/images/services/electrical/elec4.jpg",
        },
      ],
    },
  ];

  return services;
};

// Static fallback data
export const services: Service[] = [
  {
    name: "Home Cleaning Service",
    slug: "home-cleaning-service",
    provider: "CleanPro Services",
    category: "Home Services",
    price: "50",
    duration: "2-3 hours",
    rating: 4.8,
    reviews: 156,
    images: [
      {
        src: "/images/services/cleaning/cleaning1.jpg",
      },
      {
        src: "/images/services/cleaning/cleaning2.jpg",
      },
      {
        src: "/images/services/cleaning/cleaning3.jpg",
      },
      {
        src: "/images/services/cleaning/cleaning4.jpg",
      },
    ],
  },
  {
    name: "Wedding Photography",
    slug: "wedding-photography",
    provider: "Capture Moments Studio",
    category: "Event Services",
    price: "800",
    duration: "8-10 hours",
    rating: 4.9,
    reviews: 89,
    images: [
      {
        src: "/images/services/photography/photo1.jpg",
      },
      {
        src: "/images/services/photography/photo2.jpg",
      },
      {
        src: "/images/services/photography/photo3.jpg",
      },
      {
        src: "/images/services/photography/photo4.jpg",
      },
    ],
  },
  {
    name: "Plumbing Repair",
    slug: "plumbing-repair",
    provider: "FixIt Plumbing",
    category: "Home Services",
    price: "75",
    duration: "1-2 hours",
    rating: 4.7,
    reviews: 203,
    images: [
      {
        src: "/images/services/plumbing/plumb1.jpg",
      },
      {
        src: "/images/services/plumbing/plumb2.jpg",
      },
      {
        src: "/images/services/plumbing/plumb3.jpg",
      },
      {
        src: "/images/services/plumbing/plumb4.jpg",
      },
    ],
  },
  {
    name: "Event Planning",
    slug: "event-planning",
    provider: "Perfect Events Co.",
    category: "Event Services",
    price: "500",
    duration: "Full service",
    rating: 4.8,
    reviews: 67,
    images: [
      {
        src: "/images/services/events/event1.jpg",
      },
      {
        src: "/images/services/events/event2.jpg",
      },
      {
        src: "/images/services/events/event3.jpg",
      },
      {
        src: "/images/services/events/event4.jpg",
      },
    ],
  },
  {
    name: "Personal Training",
    slug: "personal-training",
    provider: "FitLife Trainers",
    category: "Health & Fitness",
    price: "60",
    duration: "1 hour",
    rating: 4.9,
    reviews: 124,
    images: [
      {
        src: "/images/services/fitness/fitness1.jpg",
      },
      {
        src: "/images/services/fitness/fitness2.jpg",
      },
      {
        src: "/images/services/fitness/fitness3.jpg",
      },
      {
        src: "/images/services/fitness/fitness4.jpg",
      },
    ],
  },
  {
    name: "Electrical Repair",
    slug: "electrical-repair",
    provider: "PowerFix Electricians",
    category: "Home Services",
    price: "85",
    duration: "1-3 hours",
    rating: 4.6,
    reviews: 178,
    images: [
      {
        src: "/images/services/electrical/elec1.jpg",
      },
      {
        src: "/images/services/electrical/elec2.jpg",
      },
      {
        src: "/images/services/electrical/elec3.jpg",
      },
      {
        src: "/images/services/electrical/elec4.jpg",
      },
    ],
  },
];
