import BlogList from "@/components/Blog";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Grids | blinkkaro ",
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
