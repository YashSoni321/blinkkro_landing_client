"use client";
import React from "react";
import { Icon } from "@iconify/react";

type ProviderStepsSectionProps = {
  t: (key: string) => string;
  providerSteps: any[];
};

export default function ProviderStepsSection({ t, providerSteps }: ProviderStepsSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-primary/10 to-primary/5 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="text-center mb-12">
          <p className="text-gray-600 dark:text-gray-300 text-base font-semibold flex gap-2.5 items-center justify-center mb-4">
            <Icon icon="ph:rocket-launch" className="text-2xl text-primary" />
            {t("provider.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
            {t("provider.title")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {t("provider.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {providerSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <div className="bg-white dark:bg-gray-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-primary text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shadow-lg group-hover:scale-110">
                  <Icon icon={step.icon} width={24} height={24} />
                </div>
                <div className="absolute -top-2 lg:-right-2 bg-primary text-white rounded-full w-7 h-7 flex items-center justify-center text-xs font-bold shadow-lg">
                  {step.step}
                </div>
              </div>
              <h3 className="text-base font-semibold text-dark dark:text-white mb-2">
                {step.title}
              </h3>
              <p className=" text-gray-600 dark:text-gray-300 mb-2">
                {step.description}
              </p>
              <div className="mt-3 p-2 bg-white/50 dark:bg-gray-700/50 rounded-lg text-left">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button aria-label={t("provider.button")} className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-dark transition-colors duration-300 shadow-lg">
            {t("provider.button")}
          </button>
        </div>
      </div>
    </section>
  );
}
