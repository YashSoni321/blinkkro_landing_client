"use client";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";

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
          <div className="relative">
            <div className="relative z-10">
              {/* Main Phone Mockup */}
              <div className="bg-white dark:bg-gray-800 rounded-3xl p-4 sm:p-6 shadow-2xl mx-auto w-full max-w-80">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-white mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-lg">{t("app.title")}</h3>
                    <Icon icon={"ph:bell"} width={24} height={24} />
                  </div>
                  <p className="text-sm opacity-90">{t("app.subtitle")}</p>
                </div>

                {/* Service Cards */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon
                        icon={"ph:broom"}
                        width={20}
                        height={20}
                        className="text-primary"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-dark dark:text-white">
                        {t("app.services.houseCleaning.name")}
                      </p>
                      <p className="text-xs text-dark/60 dark:text-white/60">
                        {t("app.services.houseCleaning.status")}
                      </p>
                    </div>
                    <span className="text-primary font-bold text-sm">₹50</span>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-xl">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      <Icon
                        icon={"ph:wrench"}
                        width={20}
                        height={20}
                        className="text-primary"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm text-dark dark:text-white">
                        {t("app.services.plumbing.name")}
                      </p>
                      <p className="text-xs text-dark/60 dark:text-white/60">
                        {t("app.services.plumbing.status")}
                      </p>
                    </div>
                    <span className="text-primary font-bold text-sm">₹75</span>
                  </div>
                </div>

                <button className="w-full bg-primary text-white py-3 rounded-xl font-semibold mt-4">
                  {t("buttons.bookService")}
                </button>
              </div>
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

            <h2 className="text-4xl sm:text-52 font-bold tracking-tighter text-dark dark:text-white mb-6">
              {t("heading")}{" "}
              <span className="text-primary">{t("kartSquareText")}</span>
            </h2>

            <p className="text-xm text-dark/70 dark:text-white/70 mb-8 leading-relaxed">
              {t.rich("description1", {
                bold: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>

            <p className="text-xm text-dark/70 dark:text-white/70 mb-8 leading-relaxed">
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
                    <p className="text-sm text-dark/60 dark:text-white/60">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-dark transition-colors duration-300">
                {t("buttons.tryNow")}
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                {t("buttons.startEarning")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
