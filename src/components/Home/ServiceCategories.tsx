"use client";
import { Icon } from "@iconify/react";
import { serviceCategories } from "@/app/api/serviceCategories";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ServiceCategories() {
  const t = useTranslations("serviceCategories");

  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="text-center mb-16">
          <div className="flex gap-2.5 items-center justify-center mb-3">
            <Icon
              icon={"ph:wrench"}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => (
            <Link
              key={index}
              href={`/services?category=${category.name
                .toLowerCase()
                .replace(" ", "-")}`}
              className="group"
            >
              <div className="p-8 border border-black/10 dark:border-white/10 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon
                      icon={category.icon}
                      width={24}
                      height={24}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-dark dark:text-white group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-dark/50 dark:text-white/50">
                      {category.serviceCount} {t("services")}
                    </p>
                  </div>
                </div>
                <p className="text-base text-dark/70 dark:text-white/70">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
