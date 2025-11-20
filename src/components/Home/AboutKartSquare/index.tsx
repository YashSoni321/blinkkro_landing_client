import { Icon } from "@iconify/react";
import { servicesTypes } from "@/app/api/propertyhomes";
import PropertyCard from "../Properties/Card/Card";
import { useTranslations } from "next-intl";

const AboutKartSquare: React.FC = () => {
  const t = useTranslations("aboutKartSquare");

  return (
    <section>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0">
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
            <p className="text-base font-semibold text-gray-600 dark:text-gray-300">
              {t("badge")}
            </p>
          </div>
          <h2 className="text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2">
            {t("title")}
          </h2>
          <p className="text-xm font-normal text-gray-600 dark:text-gray-300 text-center">
            {t("description")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
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

export default AboutKartSquare;
