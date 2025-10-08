"use client";
import { Icon } from "@iconify/react";
import { services } from "@/app/api/services";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function PopularServices() {
  const popularServices = services.slice(0, 4);
  const t = useTranslations("popularServices");

  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="text-center mb-16">
          <div className="flex gap-2.5 items-center justify-center mb-3">
            <Icon
              icon={"ph:star"}
              width={20}
              height={20}
              className="text-primary"
            />
            <p className="text-base font-semibold text-dark/75 dark:text-white/75">
              {t("title")}
            </p>
          </div>
          <h2 className="text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3">
            {t("heading")}
          </h2>
          <p className="text-xm font-normal text-black/50 dark:text-white/50">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularServices.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="group"
            >
              <div className="bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.images[0]?.src || "/images/placeholder.jpg"}
                    alt={service.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                  <div className="absolute top-4 right-4 bg-white/90 dark:bg-black/90 px-2 py-1 rounded-full">
                    <span className="text-sm font-semibold text-primary">
                      ${service.price}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      <Icon
                        icon={"ph:star-fill"}
                        width={16}
                        height={16}
                        className="text-yellow-400"
                      />
                      <span className="text-sm font-medium text-dark dark:text-white">
                        {service.rating}
                      </span>
                    </div>
                    <span className="text-sm text-dark/50 dark:text-white/50">
                      ({service.reviews} {t("reviews")})
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-dark dark:text-white mb-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-sm text-dark/70 dark:text-white/70 mb-3">
                    {t("by")} {service.provider}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm text-dark/50 dark:text-white/50">
                      {service.duration}
                    </span>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:bg-dark transition-colors duration-300"
          >
            {t("viewAll")}
            <Icon icon={"ph:arrow-right"} width={20} height={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
