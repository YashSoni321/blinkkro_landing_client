import { PropertyHomes } from "@/types/properyHomes";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

const ServiceCard: React.FC<{ item: PropertyHomes }> = ({ item }) => {
  const { name, location, duration, rate, category, slug, images } = item;
  const t = useTranslations("serviceCard");

  const mainImage = images[0]?.src;

  return (
    <div className="w-full">
      <div className="relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20 bg-white dark:bg-dark lg:h-[34rem] md:h-[30rem] h-[26rem]">
        {/* Image */}
        <div className="h-48 sm:h-64 lg:h-80 relative overflow-hidden rounded-t-2xl bg-gray-100">
          {/* <Link href={`/properties/${slug}`}> */}
          {mainImage && (
            <Image
              src={mainImage}
              alt={name}
              fill
              className="object-contain sm:object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              quality={75}
            />
          )}
          {/* </Link> */}

          {/* Hover Arrow */}
          <div className="absolute top-4 right-4 p-2 bg-white rounded-full shadow hidden group-hover:flex items-center justify-center">
            <Icon
              icon="solar:arrow-right-linear"
              width={20}
              height={20}
              className="text-black"
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6">
          {/* Title + Price */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <Link href={`/properties/${slug}`}>
                <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white duration-300 group-hover:text-primary line-clamp-1">
                  {name}
                </h3>
              </Link>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                {location}
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-block text-sm sm:text-base font-medium text-primary px-3 py-1 rounded-full bg-primary/10">
                {t("currency")} {rate}
              </span>
            </div>
          </div>

          {/* Info Row */}
          <div className="flex divide-x divide-black/10 dark:divide-white/20 text-xs sm:text-sm">
            {/* Duration */}
            <div className="flex flex-1 flex-col items-center gap-1 px-2 sm:px-4">
              <Icon icon="solar:clock-circle-linear" width={18} height={18} />
              <p className="text-xs sm:text-sm font-normal text-black dark:text-white text-center">
                {duration}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
                {t("infoLabels.duration")}
              </p>
            </div>

            {/* Price */}
            <div className="flex flex-1 flex-col items-center gap-1 px-2 sm:px-4">
              <Icon icon="tabler:currency-rupee" width={18} height={18} />
              <p className="text-xs sm:text-sm font-normal text-black dark:text-white text-center">
                {rate}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
                {t("infoLabels.price")}
              </p>
            </div>

            {/* Category */}
            <div className="flex flex-1 flex-col items-center gap-1 px-2 sm:px-4">
              <Icon icon="mdi:briefcase-outline" width={18} height={18} />
              <p className="text-xs sm:text-sm font-normal text-black dark:text-white text-center">
                {category}
              </p>
              <p className="text-xs text-gray-600 dark:text-gray-300 text-center">
                {t("infoLabels.category")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
