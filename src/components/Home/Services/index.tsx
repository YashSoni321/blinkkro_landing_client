"use client";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Categories = () => {
  const t = useTranslations("categories");

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
      },
    ],
  };

  const categoryItems = [
    {
      href: "/house_services",
      image: "/images/kartsquare_main_categories/house_cleaning.png",
      alt: "house_services",
      title: t("categoriesList.wellness.title") + " 121",
      description: t("categoriesList.wellness.description") + " 121",
    },
    {
      href: "/wellness",
      image: "/images/kartsquare_main_categories/home_services.png",
      alt: "wellness",
      title: t("categoriesList.cleaning.title"),
      description: t("categoriesList.cleaning.description"),
    },
    {
      href: "/events",
      image: "/images/kartsquare_main_categories/event.png",
      alt: "events222",
      title: t("categoriesList.events.title"),
      description: t("categoriesList.events.description"),
    },
    {
      href: "/entertainment",
      image: "/images/kartsquare_main_categories/astro.png",
      alt: "Astrology & Consultation",
      title: t("categoriesList.astrology.title"),
      description: t("categoriesList.astrology.description"),
    },
    {
      href: "/home-services",
      image: "/images/kartsquare_main_categories/chef.png",
      alt: "home services",
      title: t("categoriesList.chefs.title"),
      description: t("categoriesList.chefs.description"),
    },
    {
      href: "/personal-chefs",
      image: "/images/kartsquare_main_categories/tutor.png",
      alt: "tutor",
      title: t("categoriesList.tutors.title"),
      description: t("categoriesList.tutors.description"),
    },
  ];

  const CategoryCard = ({ item }: { item: (typeof categoryItems)[0] }) => (
    <div className="relative rounded-2xl overflow-hidden group h-96">
      <Link href={item.href}>
        <Image
          loading="lazy"
          src={item.image}
          alt={item.alt}
          width={320}
          height={380}
          className="w-full h-full object-cover bg-gray-100 rounded-xl"
          unoptimized={
            item.image.includes("event") ||
            item.image.includes("astro") ||
            item.image.includes("tutor")
          }
        />
      </Link>
      <Link
        href={item.href}
        className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between p-4 sm:p-6 lg:p-8 pb-10 group-hover:top-0 duration-500"
      >
        <div className="flex justify-end mt-6 mr-6">
          <div className="bg-white text-dark rounded-full w-fit p-4">
            <Icon icon="ph:arrow-right" width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <h3 className="text-white text-2xl font-bold">{item.title}</h3>
          <p className="text-gray-300 text-base leading-6">
            {item.description}
          </p>
        </div>
      </Link>
    </div>
  );

  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0">
        <Image
          loading="lazy"
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
        />
        <Image
          loading="lazy"
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-start gap-4 sm:gap-6 lg:gap-10">
          <div className="lg:col-span-6 col-span-12 mb-6 lg:mb-0">
            <p className="text-gray-600 dark:text-gray-300 text-base font-semibold flex gap-2.5">
              <Icon
                icon="ph:calendar-check-fill"
                className="text-2xl text-primary"
              />
              {t("badge")}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-medium leading-[1.2] text-dark dark:text-white">
              {t("title")}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg lg:max-w-full leading-[1.3] md:max-w-3/4">
              {t("description")}
            </p>
            <Link
              href="/categories"
              className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300"
            >
              {t("ctaButton")}
            </Link>
          </div>

          {/* Mobile Slider */}
          <div className="lg:hidden col-span-12">
            <Slider {...sliderSettings}>
              {categoryItems.map((item, index) => (
                <div key={index} className="px-2">
                  <CategoryCard item={item} />
                </div>
              ))}
            </Slider>
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:contents">
            {categoryItems.map((item, index) => (
              <div key={index} className="lg:col-span-3 col-span-6 ">
                <CategoryCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
