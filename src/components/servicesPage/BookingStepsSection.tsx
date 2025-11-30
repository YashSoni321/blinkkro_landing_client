"use client";
import React from "react";
import { Icon } from "@iconify/react";

type BookingStepsSectionProps = {
  t: (key: string) => string;
  bookingSteps: any[];
};

export default function BookingStepsSection({ t, bookingSteps }: BookingStepsSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 bg-white dark:bg-gray-800">
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
        <div className="text-center mb-12">
          <p className="text-gray-600 dark:text-gray-300 text-base font-semibold flex gap-2.5 items-center justify-center mb-4">
            <Icon
              icon="ph:calendar-check-fill"
              className="text-2xl text-primary"
            />
            {t("booking.subtitle")}
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-52 font-medium text-dark dark:text-white mb-4">
            {t("booking.title")}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
            {t("booking.description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bookingSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <Icon
                    icon={step.icon}
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>
                <div className="absolute -top-2 lg:-right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
                  {step.step}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-dark dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {step.description}
              </p>
              <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-left">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
