"use client";
import React, { memo } from "react";
import Image from "next/image"
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

function CategoriesCardComponent({ service }: { service: any }) {
  const t = useTranslations("servicesPage");

  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-3xl dark:hover:shadow-white/20 transition-all duration-300 border border-dark/10 dark:border-white/10 hover:border-primary/50 h-[36rem]">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          loading="lazy"
          src={service.image}
          alt={service.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      {/* Content */}
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div
            className={`bg-gradient-to-br ${service.color} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
          >
            <Icon
              icon={service.icon}
              width={24}
              height={24}
              className="text-white"
            />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-dark dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {service.description}
        </p>
        <div className="space-y-2 mb-4">
          {service.features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 text-sm font-medium"
            >
              <Icon
                icon="ph:check"
                width={16}
                height={16}
                className="text-primary flex-shrink-0"
              />
              <span className="text-gray-600 dark:text-gray-300">{feature}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span>{t("categories.learnMore")}</span>
          <Icon icon="ph:arrow-right" width={16} height={16} />
        </div>
      </div>
    </div>
  );
};
export const CategoriesCard = memo(CategoriesCardComponent);
