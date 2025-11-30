"use client";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutKartSquare() {
  const t = useTranslations("aboutKartSquareQuestions");

  const features = [
    {
      icon: "ph:clock-clockwise",
      title: t("features.bookSeconds.title"),
      description: t("features.bookSeconds.description"),
    },
    {
      icon: "ph:shield-check",
      title: t("features.verifiedProviders.title"),
      description: t("features.verifiedProviders.description"),
    },
    {
      icon: "ph:money",
      title: t("features.transparentPricing.title"),
      description: t("features.transparentPricing.description"),
    },
    {
      icon: "ph:headset",
      title: t("features.support.title"),
      description: t("features.support.description"),
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              {/* Main Phone Mockup */}
              <Image
                src="/images/logo/ks_logo.png"
                alt="KartSquare logo"
                width={150}
                height={150}
                className="object-contain w-150 h-150"
              />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center animate-bounce">
              <Icon
                icon={"ph:star-fill"}
                width={32}
                height={32}
                className="text-primary"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-400/20 rounded-full flex items-center justify-center animate-pulse">
              <Icon
                icon={"ph:lightning-fill"}
                width={24}
                height={24}
                className="text-yellow-500"
              />
            </div>

            <div className="absolute top-1/2 -right-12 w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center animate-ping">
              <Icon
                icon={"ph:check-circle-fill"}
                width={20}
                height={20}
                className="text-green-500"
              />
            </div>
          </div>

          {/* Left Content */}
          <div>
            <div className="flex gap-2.5 items-center mb-6">
              <Icon
                icon={"ph:lightning"}
                width={24}
                height={24}
                className="text-primary"
              />
              <p className="text-base font-semibold text-primary">
                {t("title")}
              </p>
            </div>

            <h2 className="text-4xl sm:text-52 font-bold tracking-tighter text-dark dark:text-white ">
              {t("heading")}{" "}
              <span className="text-primary">{t("kartSquareText")}</span>
            </h2>

            <p className="text-xm text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t.rich("description1", {
                bold: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>

            <p className="text-xm text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {t.rich("description2", {
                bold: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon
                      icon={feature.icon}
                      width={24}
                      height={24}
                      className="text-primary"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-dark dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="md:text-sm text-gray-600 dark:text-gray-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                aria-label={t("buttons.tryNow")}
                className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-dark transition-colors duration-300"
              >
                {t("buttons.tryNow")}
              </button>
              <button
                aria-label={t("buttons.startEarning")}
                className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                {t("buttons.startEarning")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
