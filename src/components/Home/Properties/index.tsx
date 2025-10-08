import { Icon } from "@iconify/react";
import PropertyCard from "./Card/Card";
import { servicesTypes } from "@/app/api/propertyhomes";
import { useTranslations } from "next-intl";

const Properties: React.FC = () => {
  const t = useTranslations("properties");

  return (
    <section>
      <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 overflow-hidden">
        <div className="mb-16 flex flex-col gap-3 ">
          <div className="flex gap-2.5 items-center justify-center">
            <span>
              <Icon
                icon={"ph:house-simple-fill"}
                width={20}
                height={20}
                className="text-primary"
              />
            </span>
            <p className="text-base font-semibold text-dark/75 dark:text-white/75">
              {t("badge")}
            </p>
          </div>
          <h2 className="text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2">
            {t("title")} ✨
          </h2>
          <p className="text-xm font-normal text-black/50 dark:text-white/50 text-center">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesTypes.slice(0, 6).map((item, index) => (
            <div key={index} className="">
              <PropertyCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Properties;
