import FeaturedProperty from "@/components/Home/FeaturedProperty";
import Hero from "@/components/Home/Hero";
import Properties from "@/components/Home/Properties";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";
import BlogSmall from "@/components/shared/Blog";
import GetInTouch from "@/components/Home/GetInTouch";
import FAQ from "@/components/Home/FAQs";
import AboutKartSquare from "@/components/Home/AboutKartSquare";
import KartSquareSolutions from "@/components/Home/KartSquareSolutions";
import IndustriesSection from "@/components/Home/Industries/page";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <AboutKartSquare />
      <Services />
      <Properties />
      <IndustriesSection />
      <FeaturedProperty />
      <Testimonial />
      <KartSquareSolutions />
      <BlogSmall />
      <GetInTouch />
      <FAQ />
    </main>
  );
}
