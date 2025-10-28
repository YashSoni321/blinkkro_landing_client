import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";
import { useTranslations } from "next-intl"; // or your i18n library

export const metadata: Metadata = {
  title: "blogPage.metadata.title",
  description: "blogPage.metadata.description",
  keywords: "blogPage.metadata.keywords",
  openGraph: {
    title: "Real Stories & Service Secrets - KartSquare Blog",
    description: "blogPage.metadata.description",
    url: "https://kartsquare.com/blogs",
    type: "website",
    images: [
      {
        url: "/images/blog/blog-hero.jpg",
        width: 1200,
        height: 630,
        alt: "KartSquare Blog - Real Stories and Service Tips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Stories & Service Secrets - KartSquare Blog",
    description: "blogPage.metadata.description",
    images: ["/images/blog/blog-hero.jpg"],
  },
  alternates: {
    canonical: "https://kartsquare.com/blogs",
  },
};

const Blog = () => {
  const t = useTranslations();

  return (
    <>
      <HeroSub
        title={t("blogPage.hero.title")}
        description={t("blogPage.hero.description")}
        badge={t("blogPage.hero.badge")}
      />
      <BlogList />
    </>
  );
};

export default Blog;
