"use client";
import React from "react";
import Slider from "react-slick";
import { Icon } from "@iconify/react";
import { CategoriesCard } from "@/components/servicesPage/CategoriesCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CategoriesSectionProps = {
  t: (key: string) => string;
  serviceCategories: any[];
};

const sliderSettings = {
  infinite: true,
  speed: 600,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: false,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
    { breakpoint: 425, settings: { slidesToShow: 1 } },
  ],
};

export default function CategoriesSection({
  t,
  serviceCategories,
}: CategoriesSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 bg-gray-50 dark:bg-gray-900">
      {/* <div className="absolute left-0 top-0">
        <Image
          loading="lazy"
          src="/images/categories/Vector.svg"
          alt={"categories vectorAlt"}
          width={800}
          height={1050}
          className="dark:hidden opacity-30"
        />
        <Image
          loading="lazy"
          src="/images/categories/Vector-dark.svg"
          alt={t("categories.vectorAlt")}
          width={800}
          height={1050}
          className="hidden dark:block opacity-30"
        />
      </div> */}
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="text-center mb-12">
          <p className="text-gray-600 dark:text-gray-300 text-base font-semibold flex gap-2.5 items-center justify-center mb-4">
            <Icon icon="ph:grid-four" className="text-2xl text-primary" />
            {t("categories.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
            {t("categories.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t("categories.description")}
          </p>
        </div>
        <div className="lg:hidden">
          <Slider {...sliderSettings}>
            {serviceCategories.map((service, index) => (
              <div key={index} className="px-3">
                <CategoriesCard service={service} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-8">
          {serviceCategories.map((service, index) => (
            <CategoriesCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
