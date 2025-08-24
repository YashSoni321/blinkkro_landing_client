import { PropertyHomes } from "@/types/properyHomes";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

const ServiceCard: React.FC<{ item: PropertyHomes }> = ({ item }) => {
  const { name, location, duration, rate, category, slug, images } = item;

  const mainImage = images[0]?.src;

  return (
    <div>
      <div className="relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20">
        <div className="overflow-hidden rounded-t-2xl">
          <div className="h-80 relative overflow-hidden rounded-t-2xl bg-gray-100 group">
            <Link href={`/properties/${slug}`}>
              {mainImage && (
                <Image
                  src={mainImage}
                  alt={name}
                  fill
                  className="object-contain w-full h-full transition-transform duration-300 delay-75 group-hover:scale-105"
                  unoptimized={true}
                />
              )}
            </Link>
          </div>
          <div className="absolute top-6 right-6 p-4 bg-white rounded-full hidden group-hover:block">
            <Icon
              icon={"solar:arrow-right-linear"}
              width={24}
              height={24}
              className="text-black"
            />
          </div>
        </div>
        <div className="p-6 h-56">
          <div className="flex flex-col mobile:flex-row gap-5 mobile:gap-0 justify-between mb-6">
            <div>
              <Link href={`/properties/${slug}`}>
                <h3 className="text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary">
                  {name}
                </h3>
              </Link>
              <p className="text-base font-normal text-black/50 dark:text-white/50">
                {location}
              </p>
            </div>
            <div>
              <button className="text-base font-normal text-primary d-flex px-2  rounded-full bg-primary/10">
                <p className="flex items-center gap-1 font-normal text-primary px-2 py-2 rounded-full ">
                  <span className="font-bold text-base">₹ {rate}</span>
                  {/* <span className="text-sm text-primary">onwards</span> */}
                </p>
              </button>
            </div>
          </div>
          <div className="flex divide-x divide-black/10 dark:divide-white/20">
            {/* Duration */}
            <div className="flex flex-1 flex-col items-center gap-2 px-4">
              <Icon icon="solar:clock-circle-linear" width={20} height={20} />
              <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                {duration}
              </p>
            </div>

            {/* Price */}
            <div className="flex flex-1 flex-col items-center gap-2 px-4">
              <Icon icon="tabler:currency-rupee" width={20} height={20} />
              <p className="text-sm mobile:text-base font-normal text-black dark:text-white">
                {rate}
              </p>
            </div>

            {/* Category */}
            <div className="flex flex-1 flex-col items-center gap-2 px-4">
              <Icon icon="mdi:briefcase-outline" width={20} height={20} />
              <p className="text-sm mobile:text-base text-center font-normal text-black dark:text-white">
                {category}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
