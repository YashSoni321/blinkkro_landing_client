"use client";
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
import { featuredProprty } from "@/app/api/featuredproperty";

export default function AboutUs() {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined);

  return (
    <section className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28">
      {/* What is BlinkKaro */}
      <div className="grid lg:grid-cols-2 gap-10 items-center mb-28">
        {/* Carousel */}
        <div className="relative order-1 lg:order-2">
          <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
              {featuredProprty.map((item, index) => (
                <CarouselItem key={index}>
                  <Image
                    src={item.scr}
                    alt={item.alt}
                    width={680}
                    height={530}
                    className="rounded-2xl w-full object-contain h-540"
                    unoptimized={true}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-10">
          <div>
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2">
              <Icon
                icon="mdi:lightning-bolt"
                className="text-2xl text-primary"
              />
              How to book services on Blinkkaro ?
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
            BlinkKaro began with a vision to make trusted services available to
            everyone in seconds. We bring together trending services on a single
            platform so that 99% of users can instantly connect, compare, and
            book with ease. Secure payments, verified providers, and real-time
            availability — all designed to make your life simpler.
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
    </section>
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
