"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import HeroSub from "@/components/shared/HeroSub";

export default function AboutUs() {
  const pathname = usePathname();
  const [sticky, setSticky] = React.useState(false);
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);
  const isHomepage = pathname === "/";

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
                isHomepage
                  ? sticky
                    ? "block dark:hidden"
                    : "hidden"
                  : sticky
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
                isHomepage
                  ? sticky
                    ? "hidden dark:block"
                    : "block"
                  : sticky
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
              img="/images/team/member1.jpg"
              name="Ankit Jha"
              role="Co-Founder"
              socials={["ph:linkedin-logo-bold", "ph:twitter-logo-bold"]}
            />
            <TeamMember
              img="/images/team/member2.jpg"
              name="Yash Soni"
              role="Co-Founder"
              socials={["ph:linkedin-logo-bold", "ph:instagram-logo-bold"]}
            />
            <TeamMember
              img="/images/team/member3.jpg"
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
  role,
  socials,
}: {
  img: string;
  name: string;
  role: string;
  socials: string[];
}) => (
  <div className="p-6 border border-black/10 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-white/10 text-center">
    <Image
      src={img}
      alt={name}
      width={180}
      height={180}
      className="rounded-full mx-auto mb-4 object-cover"
    />
    <h4 className="text-xl font-semibold text-black dark:text-white mb-1">
      {name}
    </h4>
    <p className="text-sm text-black/60 dark:text-white/60 mb-4">{role}</p>
    <div className="flex justify-center gap-4">
      {socials.map((icon, i) => (
        <Icon
          key={i}
          icon={icon}
          width={22}
          height={22}
          className="text-black/60 dark:text-white/60 hover:text-primary cursor-pointer"
        />
      ))}
    </div>
  </div>
);
