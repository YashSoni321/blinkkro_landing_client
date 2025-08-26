import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BlinkKaro Blog - Service Tips, Trends & Home Care Guides | Expert Insights",
  description: "Discover expert tips on home services, beauty trends, event planning guides & lifestyle insights. Stay updated with BlinkKaro's comprehensive service blog.",
  keywords: ["home service tips", "beauty trends", "event planning guide", "lifestyle blog", "service insights", "BlinkKaro blog", "home care tips"],
  openGraph: {
    title: "BlinkKaro Blog - Service Tips, Trends & Expert Insights",
    description: "Get expert advice on home services, beauty, events & lifestyle. Comprehensive guides to help you make the most of BlinkKaro services.",
    url: "https://blinkkaro.com/blogs",
  },
  alternates: {
    canonical: "https://blinkkaro.com/blogs",
  },
};

const Blog = () => {
  return (
    <>
      <HeroSub
        title="Insights, Trends & Stories."
        description="Explore expert tips, service trends, and inspiring stories that help you get the most out of BlinkKaro — from wellness to lifestyle and beyond."
        badge="Blog"
      />
      <BlogList />
    </>
  );
};

export default Blog;
