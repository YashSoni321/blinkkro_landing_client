import HeroSub from "@/components/shared/HeroSub";
import { Metadata } from "next";
import { useTranslations } from "next-intl"; // or your i18n library

export const metadata: Metadata = {
  title: "eventsPage.metadata.title",
  description: "eventsPage.metadata.description",
  keywords: "eventsPage.metadata.keywords",
  openGraph: {
    title: "Upcoming Events - Kartsquare Community & Service Events",
    description: "eventsPage.metadata.description",
    url: "https://kartsquare.com/events",
  },
  alternates: {
    canonical: "https://kartsquare.com/events",
  },
};

const Events = () => {
  const t = useTranslations();

  return (
    <>
      <HeroSub
        title={t("eventsPage.hero.title")}
        description={t("eventsPage.hero.description")}
        badge={t("eventsPage.hero.badge")}
      />

      <section className="flex flex-col items-center justify-center text-center">
        <div className="">
          <button aria-label={t("eventsPage.content.notifyButton")} className="px-8 py-4 rounded-full bg-primary text-white font-semibold hover:bg-primary/80 transition">
            {t("eventsPage.content.notifyButton")}
          </button>
        </div>
      </section>
    </>
  );
};

export default Events;
