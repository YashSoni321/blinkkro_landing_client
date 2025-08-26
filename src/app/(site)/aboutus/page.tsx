import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About BlinkKaro - India's Most Trusted Service Booking Platform | Our Story",
  description:
    "Learn about BlinkKaro's journey from 3 passionate founders to India's leading service platform. Connecting 10K+ customers with verified professionals since 2023.",
  keywords: [
    "about BlinkKaro",
    "service platform India",
    "founders story",
    "trusted professionals",
    "home services company",
  ],
  openGraph: {
    title: "About BlinkKaro - India's Most Trusted Service Platform",
    description:
      "Discover how BlinkKaro revolutionized service booking in India. Meet our team and learn our mission to simplify life through smart service discovery.",
    url: "https://blinkkaro.com/aboutus",
  },
  alternates: {
    canonical: "https://blinkkaro.com/aboutus",
  },
};

export default function AboutUs() {
  // const [sticky, setSticky] = React.useState(false);
  // const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);

  return (
    <>
      <HeroSub
        title="About BlinkKaro"
        description="BlinkKaro started with one vision — to bring all your everyday needs into a single, easy-to-use platform. From our humble beginnings to becoming a trusted hub for 99% of trending services, we’re redefining how people discover, book, and experience convenience."
        badge="About Us"
      />
      <section className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28">
        {/* What is BlinkKaro */}
        <div className="grid lg:grid-cols-2 gap-10 items-center mb-28">
          {/* Carousel */}
          <div className="relative text-center flex justify-center">
            <Image
              src={"/images/logo/logo-light.png"}
              alt="logo"
              width={500}
              height={100}
              unoptimized={true}
              className={`${
                false
                  ? false
                    ? "block dark:hidden"
                    : "hidden"
                  : false
                  ? "block dark:hidden"
                  : "block dark:hidden"
              }`}
            />
            <Image
              src={"/images/logo/logo-dark.png"}
              alt="logo"
              width={500}
              height={100}
              unoptimized={true}
              className={`${
                false
                  ? false
                    ? "hidden dark:block"
                    : "block"
                  : false
                  ? "dark:block hidden"
                  : "dark:block hidden"
              }`}
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-10">
            <div>
              <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
                <Icon
                  icon="mdi:lightning-bolt"
                  className="text-2xl text-primary"
                />
                What is BlinkKaro
              </p>
              <h2 className="lg:text-52 text-40 font-medium text-dark dark:text-white">
                Redefining How You Discover & Book Services
              </h2>
              <div className="flex items-center gap-2.5">
                <Icon
                  icon="mdi:map-marker-path"
                  width={28}
                  height={26}
                  className="text-dark/50 dark:text-white/50"
                />
                <p className="text-dark/50 dark:text-white/50 text-base">
                  From beauty to wellness, from home care to events — all in one
                  app.
                </p>
              </div>
            </div>

            <p className="text-base text-dark/50 dark:text-white/50">
              BlinkKaro began with a vision to make trusted services available
              to everyone in seconds. We bring together trending services on a
              single platform so that 99% of users can instantly connect,
              compare, and book with ease. Secure payments, verified providers,
              and real-time availability — all designed to make your life
              simpler.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-10">
              <Feature icon="mdi:magnify" title="Search Services" />
              <Feature icon="mdi:calendar-check" title="Book Instantly" />
              <Feature icon="mdi:credit-card-outline" title="Secure Payments" />
              <Feature icon="mdi:account-check" title="Trusted Providers" />
            </div>

            {/* CTA */}
            <div className="flex gap-10 items-center">
              <Link
                href="/get-started"
                className="py-4 px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white"
              >
                Try BlinkKaro
              </Link>
              <div>
                <h4 className="text-3xl text-dark dark:text-white font-medium">
                  99% User Connect
                </h4>
                <p className="text-base text-dark/50">
                  Trending services in one platform
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="mb-28 text-center max-w-3xl mx-auto">
          <h3 className="text-4xl font-medium text-dark dark:text-white mb-6">
            Our Journey
          </h3>
          <p className="text-base text-dark/60 dark:text-white/60">
            BlinkKaro started in 2023 with 3 passionate individuals who believed
            that finding and booking services should be as easy as a single tap.
            From local salons to luxury homes, we expanded quickly and now serve
            thousands of users daily — growing with one mission: <br />
            <span className="font-semibold text-primary">
              “To simplify life through smart service discovery.”
            </span>
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h3 className="text-4xl font-medium text-dark dark:text-white text-center mb-14">
            Meet Our Team
          </h3>
          <div className="grid sm:grid-cols-3 gap-10">
            <TeamMember
              nickName="Mogambo"
              img="/images/team/ankit_dp.jpeg"
              name="Ankit Jha"
              role="Co-Founder"
              socials={["ph:linkedin-logo-bold", "ph:twitter-logo-bold"]}
            />
            <TeamMember
              nickName="Gabbar"
              img="/images/team/yash_dp.jpeg"
              name="Yash Soni"
              role="Co-Founder"
              socials={["ph:linkedin-logo-bold", "ph:instagram-logo-bold"]}
            />
            <TeamMember
              nickName="Shakaal"
              img="/images/team/gaurang_dp.jpeg"
              name="Gaurang Tyagi"
              role="Co-Founder"
              socials={["ph:linkedin-logo-bold", "ph:github-logo-bold"]}
            />
          </div>
        </div>
      </section>
    </>
  );
}

/* ----------------- Reusable Components ----------------- */
const Feature = ({ icon, title }: { icon: string; title: string }) => (
  <div className="flex items-center gap-4">
    <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
      <Icon icon={icon} className="text-xl text-primary" />
    </div>
    <h6 className="text-base text-dark dark:text-white">{title}</h6>
  </div>
);

const TeamMember = ({
  img,
  name,
  nickName,
  role,
  socials,
}: {
  img: string;
  name: string;
  nickName: string;
  role: string;
  socials: string[];
}) => (
  <div className="relative p-6 border border-black/10 dark:border-white/10 rounded-2xl shadow-xl dark:shadow-white/10 text-center bg-gradient-to-br from-yellow-50 via-white to-pink-50 dark:from-gray-900 dark:via-black dark:to-gray-800 transform hover:-rotate-1 hover:scale-105 transition-all duration-300">
    {/* Funny nickname badge */}
    {nickName && (
      <span className="absolute -top-3 right-3 bg-primary dark:bg-yellow-400 text-white dark:text-black text-sm font-bold px-3 py-1 rounded-full shadow-md rotate-6">
        {nickName}
      </span>
    )}

    {/* Profile image in funky frame */}
    <div className="w-[160px] h-[160px] mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/50 shadow-md hover:scale-110 transition-transform duration-300">
      <Image
        src={img}
        alt={name}
        width={160}
        height={160}
        className="w-full h-full object-contain bg-white p-2"
      />
    </div>

    {/* Name */}
    <h4 className="text-2xl font-extrabold text-black dark:text-white mb-1 tracking-wide">
      {name}
    </h4>

    {/* Role inside a speech bubble */}
    <p className="relative inline-block text-sm text-black/70 dark:text-white/70 mb-4 px-3 py-1 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
      {role}
      <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-gray-800"></span>
    </p>

    {/* Socials with hover bounce */}
    <div className="flex justify-center gap-5 mt-2">
      {socials.map((icon, i) => (
        <Icon
          key={i}
          icon={icon}
          width={24}
          height={24}
          className="text-black/60 dark:text-white/60 hover:text-primary hover:scale-125 transition-transform cursor-pointer"
        />
      ))}
    </div>
  </div>
);
