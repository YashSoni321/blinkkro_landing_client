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
  const [, setApi] = React.useState<CarouselApi | undefined>(undefined);

  return (
    <section className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 overflow-hidden">
      {/* What is KartSquare */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
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
                    className="rounded-2xl w-full h-auto object-contain max-h-[400px] sm:max-h-[500px]"
                    priority={index === 0}
                    loading={index === 0 ? "eager" : "lazy"}
                    quality={75}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
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
              How KartSquare Works
            </p>
            <h2 className="lg:text-52 text-40 font-medium text-dark dark:text-white">
              <span className="text-primary">3 Simple Steps</span> to Get Any Service Done
            </h2>
            <div className="flex items-center gap-2.5">
              <Icon
                icon="mdi:map-marker-path"
                width={28}
                height={26}
                className="text-dark/50 dark:text-white/50"
              />
              <p className="text-dark/50 dark:text-white/50 text-base">
                No more calling multiple people, comparing prices, or worrying about quality. Just tell us what you need!
              </p>
            </div>
          </div>

          <p className="text-base text-dark/50 dark:text-white/50">
            Whether you need a plumber at midnight or a chef for tomorrow&apos;s party, KartSquare makes it happen. Our smart matching connects you with the perfect professional in your area, handles payments securely, and ensures quality every time.
          </p>

          {/* Steps Grid */}
          <div className="grid grid-cols-2 gap-10">
            <Step number="1" icon="mdi:magnify" title="Tell Us What You Need" />
            <Step number="2" icon="mdi:calendar-check" title="Pick Your Time Slot" />
            <Step number="3" icon="mdi:credit-card-outline" title="Pay After Service" />
            <Step number="4" icon="mdi:account-check" title="Rate Your Experience" />
          </div>

          {/* CTA */}
          <div className="flex gap-10 items-center">
            <Link
              href="/get-started"
              className="py-4 px-8 bg-primary hover:bg-dark duration-300 rounded-full text-white"
            >
Book Your First Service
            </Link>
            <div>
              <h4 className="text-3xl text-dark dark:text-white font-medium">
                4.8★ Rating
              </h4>
              <p className="text-base text-dark/50">
                From 1000+ happy customers
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ----------------- Reusable Components ----------------- */
const Step = ({ number, icon, title }: { number: string; icon: string; title: string }) => (
  <div className="flex items-center gap-4">
    <div className="relative bg-primary/10 p-3 rounded-full">
      <Icon icon={icon} className="text-xl text-primary" />
      <div className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
        {number}
      </div>
    </div>
    <h6 className="text-base text-dark dark:text-white font-medium">{title}</h6>
  </div>
);

// Unused components - keeping for potential future use
// const Feature = ({ icon, title }: { icon: string; title: string }) => (
//   <div className="flex items-center gap-4">
//     <div className="bg-dark/5 dark:bg-white/5 p-2.5 rounded-[6px]">
//       <Icon icon={icon} className="text-xl text-primary" />
//     </div>
//     <h6 className="text-base text-dark dark:text-white">{title}</h6>
//   </div>
// );

// const TeamMember = ({
//   img,
//   name,
//   role,
//   socials,
// }: {
//   img: string;
//   name: string;
//   role: string;
//   socials: string[];
// }) => (
//   <div className="p-6 border border-black/10 dark:border-white/10 rounded-2xl shadow-lg dark:shadow-white/10 text-center">
//     <Image
//       src={img}
//       alt={name}
//       width={180}
//       height={180}
//       className="rounded-full mx-auto mb-4 object-contain"
//     />
//     <h4 className="text-xl font-semibold text-black dark:text-white mb-1">
//       {name}
//     </h4>
//     <p className="text-sm text-black/60 dark:text-white/60 mb-4">{role}</p>
//     <div className="flex justify-center gap-4">
//       {socials.map((icon, i) => (
//         <Icon
//           key={i}
//           icon={icon}
//           width={22}
//           height={22}
//           className="text-black/60 dark:text-white/60 hover:text-primary cursor-pointer"
//         />
//       ))}
//     </div>
//   </div>
// );
