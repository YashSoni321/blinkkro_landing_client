"use client";
import React, { memo } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export const SafetyFeaturesCard = memo(({ feature } : { feature: any }) => {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-3xl dark:hover:shadow-white/20 transition-all duration-300 border border-dark/10 dark:border-white/10 hover:border-primary/50 md:py-16 h-[24rem]">
      <div
        className={`bg-gradient-to-br ${feature.color} p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
      >
        <Icon
          icon={feature.icon}
          width={32}
          height={32}
          className="text-white"
        />
      </div>
      <h3 className="text-xl font-semibold text-dark dark:text-white mb-3 text-center">
        {feature.title}
      </h3>
      <p className="text-dark/60 dark:text-white/60 text-center leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
});