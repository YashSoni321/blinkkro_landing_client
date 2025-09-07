import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BlinkKaro Blog - Real Stories, Smart Tips & Service Secrets | India's #1 Service Platform",
  description: "From midnight plumbing disasters to wedding day beauty wins - discover real customer stories, insider tips, and service hacks that'll save your day. Read how Indians are revolutionizing their service experience.",
  keywords: ["service booking tips India", "home service hacks", "beauty salon stories", "event planning India", "customer success stories", "BlinkKaro reviews", "service provider tips", "lifestyle hacks India", "home maintenance tips", "wedding planning guide India"],
  openGraph: {
    title: "Real Stories & Service Secrets - BlinkKaro Blog",
    description: "Discover how Indians are transforming their service experience. Real stories, insider tips, and hacks that actually work. From beauty wins to home disasters turned success stories.",
    url: "https://blinkkaro.com/blogs",
    type: "website",
    images: [
      {
        url: "/images/blog/blog-hero.jpg",
        width: 1200,
        height: 630,
        alt: "BlinkKaro Blog - Real Stories and Service Tips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Stories & Service Secrets - BlinkKaro Blog",
    description: "From midnight disasters to perfect service wins - discover stories and tips that'll change how you book services in India.",
    images: ["/images/blog/blog-hero.jpg"],
  },
  alternates: {
    canonical: "https://blinkkaro.com/blogs",
  },
};

const Blog = () => {
  return (
    <>
      <HeroSub
        title="Real Stories. Smart Tips. Service Secrets."
        description="From midnight plumbing disasters to wedding day beauty wins — discover how Indians are revolutionizing their service experience with insider tips that actually work."
        badge="Blog"
      />
      <BlogList />
    </>
  );
};

export default Blog;
