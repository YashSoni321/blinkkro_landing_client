"use client";
import { CalendarDays, Headset, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import WaitlistModal from "../WaitlistModal";

const Hero: React.FC = () => {
  const t = useTranslations("hero");
  const [modalMode, setModalMode] = useState<"waitlist" | "provider" | null>(
    null
  );

  return (
    <section className="!py-0">
      <WaitlistModal
        isOpen={!!modalMode}
        onClose={() => setModalMode(null)}
        mode={modalMode || "waitlist"}
      />
      <div className="bg-gradient-to-b from-primary2 via-lightskyblue dark:via-[#15acda] to-white/10 dark:to-black/10 overflow-x-hidden relative">
        {/* Floating Icons Background (Mobile/Desktop) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 left-10 opacity-10 animate-blob">
            <CalendarDays className="w-16 h-16 text-white" />
          </div>
          <div className="absolute top-40 right-10 opacity-10 animate-blob animation-delay-2000">
            <ShieldCheck className="w-20 h-20 text-white" />
          </div>
          <div className="absolute bottom-1/3 left-1/4 opacity-10 animate-blob animation-delay-4000">
            <Users className="w-14 h-14 text-white" />
          </div>
        </div>

        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68 relative z-10">
          <div className="flex flex-col md:block">
            <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0 animate-in slide-in-from-bottom-5 duration-700 fade-in">
              <h1 className="text-4xl md:text-6xl font-extrabold text-white dark:text-gray-100 leading-tight mb-6">
                {t("title")}
              </h1>
              <p className="text-lg md:text-xl text-white/90 dark:text-gray-300 mb-8 max-w-lg mx-auto md:mx-0">
                {t("description")}
              </p>

              {/* Mobile Image (Visible on mobile, hidden on desktop) */}
              <div className="block md:hidden relative w-full h-64 mb-8 animate-in zoom-in-95 duration-1000 delay-300 fade-in fill-mode-both">
                <Image
                  priority={true}
                  src="/images/hero/heroImage.png"
                  alt="hero booking illustration"
                  fill
                  className="object-contain"
                />
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-in slide-in-from-bottom-4 duration-700 delay-500 fill-mode-both fade-in">
                <Link
                  href="/waitlist"
                  className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform active:scale-95"
                >
                  {t("buttons.earlyAccess")}
                </Link>
                <Link
                  href="/"
                  className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-colors active:scale-95"
                >
                  {t("buttons.earn")}
                </Link>
              </div> */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  aria-label={t("buttons.tryNow")}
                  onClick={() => setModalMode("waitlist")}
                  className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-dark transition-colors duration-300 hover:cursor-pointer"
                >
                  {t("buttons.earlyAccess")}
                </button>
                <button
                  aria-label={t("buttons.startEarning")}
                  onClick={() => setModalMode("provider")}
                  className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all duration-300 hover:cursor-pointer"
                >
                  {t("buttons.earn")}
                </button>
              </div>
            </div>

            {/* Desktop Image (Hidden on mobile, visible on desktop) */}
            <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2 overflow-hidden animate-in slide-in-from-right-10 duration-1000 fade-in">
              <Image
                priority={true}
                src="/images/hero/heroImage.png"
                alt="hero booking illustration"
                width={600}
                height={180}
              />
            </div>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="md:absolute bottom-0 md:-right-68 xl:right-0 bg-white dark:bg-black py-8 md:py-12 px-4 sm:px-8 mobile:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-8 md:mt-24 mx-4 md:mx-0 shadow-lg md:shadow-none animate-in slide-in-from-bottom-10 duration-1000 delay-700 fill-mode-both fade-in">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:flex gap-8 sm:gap-16 md:gap-24 sm:text-center dark:text-white text-black">
            <div className="flex flex-col sm:items-center gap-3">
              <CalendarDays className="w-8 h-8 text-sky-600 dark:text-sky-400" />
              <p className="text-sm sm:text-base font-normal text-inherit">
                {t("highlights.instantBooking")}
              </p>
            </div>

            <div className="flex flex-col sm:items-center gap-3">
              <Headset className="w-8 h-8 text-sky-600 dark:text-sky-400" />
              <p className="text-sm sm:text-base font-normal text-inherit">
                {t("highlights.support")}
              </p>
            </div>

            <div className="flex flex-col sm:items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-sky-600 dark:text-sky-400" />
              <p className="text-sm sm:text-base font-normal text-inherit">
                {t("highlights.trustedProviders")}
              </p>
            </div>

            <div className="flex flex-col sm:items-center gap-3">
              <Users className="w-8 h-8 text-sky-600 dark:text-sky-400" />
              <p className="text-sm md:text-2xl font-semibold text-inherit">
                {t("highlights.users")}
              </p>
              <p className="text-sm sm:text-base font-normal text-gray-600 dark:text-gray-300">
                {t("highlights.usersSubtext")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
