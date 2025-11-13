"use client";
import { Icon } from "@iconify/react";
import PropertyCard from "./Card/Card";
import { servicesTypes as staticServicesTypes } from "@/app/api/propertyhomes";
import { useTranslations } from "next-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PropertyHomes } from "@/types/properyHomes";

const Properties: React.FC = () => {
  const t = useTranslations("properties");

  const sliderSettings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          dots: true,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      }
    ],
  };
  const servicesTypes: PropertyHomes[] = staticServicesTypes.map(service => ({
    ...service,
    name: t(`serviceList.${service.slug}.name`),
    location: t(`serviceList.${service.slug}.location`),
    duration: t(`serviceList.${service.slug}.duration`),
    category: t(`serviceList.${service.slug}.category`),
  }));

  return (
    <section>
       <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0">
        <div className="mb-16 flex flex-col gap-3 ">
          <div className="flex gap-2.5 items-center justify-center">
            <span>
              <Icon
                icon={"ph:house-simple-fill"}
                width={20}
                height={20}
                className="text-primary"
              />
            </span>
            <p className="text-base font-semibold text-gray-600 dark:text-gray-300">
              {t("badge")}
            </p>
          </div>
          <h2 className="text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2">
            {t("title")} ✨
          </h2>
          <p className="text-xm font-normal text-gray-600 dark:text-gray-300 text-center">
            {t("description")}
          </p>
        </div>
        {/* Mobile Slider */}
        <div className="lg:hidden col-span-12">
          <Slider {...sliderSettings}>
            {servicesTypes.slice(0, 6).map((item, index) => (
              <div key={item.slug} className="px-2">
                <PropertyCard item={item} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesTypes.slice(0, 6).map((item, index) => (
            <div key={item.slug}>
              <PropertyCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
