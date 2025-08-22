import { Icon } from "@iconify/react";
// import PropertyCard from "./Card/Card";
import { servicesTypes } from "@/app/api/propertyhomes";
import PropertyCard from "../Properties/Card/Card";

const AboutBlinkkaro: React.FC = () => {
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
            <p className="text-base font-semibold text-dark/75 dark:text-white/75">
              BlinkKaro Services
            </p>
          </div>
          <h2 className="text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2">
            Everyday services, just a blink away.
          </h2>
          <p className="text-xm font-normal text-black/50 dark:text-white/50 text-center">
            From beauty & wellness to home care and events — BlinkKaro makes it
            easy to book trusted professionals anytime, anywhere.
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

export default AboutBlinkkaro;
