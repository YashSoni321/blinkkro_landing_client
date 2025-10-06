import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

const Categories = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-0 top-0">
        <Image
          src="/images/categories/Vector.svg"
          alt="vector"
          width={800}
          height={1050}
          className="dark:hidden"
          unoptimized={true}
        />
        <Image
          src="/images/categories/Vector-dark.svg"
          alt="vector"
          width={800}
          height={1050}
          className="hidden dark:block"
          unoptimized={true}
        />
      </div>
      <div className="container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10">
        <div className="grid grid-cols-12 items-start gap-4 sm:gap-6 lg:gap-10">
          <div className="lg:col-span-6 col-span-12 mb-6 lg:mb-0">
            <p className="text-dark/75 dark:text-white/75 text-base font-semibold flex gap-2.5">
              <Icon
                icon="ph:calendar-check-fill"
                className="text-2xl text-primary"
              />
              Categories
            </p>
            <h2 className="lg:text-52 text-40 mt-4 mb-2 lg:max-w-full font-medium leading-[1.2] text-dark dark:text-white">
              Every Service You Need,{" "}
              <span className="text-primary">Right Here</span>
            </h2>
            <p className="text-dark/50 dark:text-white/50 text-lg lg:max-w-full leading-[1.3] md:max-w-3/4">
              From fixing your morning coffee machine to planning your dream
              wedding — we&apos;ve curated the most trusted professionals across
              every category. No more hunting through contacts or taking chances
              with strangers.
            </p>
            <Link
              href="/categories"
              className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full font-semibold mt-8 hover:bg-dark duration-300"
            >
              Explore All Services
            </Link>
          </div>

          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group h-64 sm:h-80 lg:h-96">
              <Link href="/house_services">
                <Image
                  src="/images/kartsquare_main_categories/house_cleaning.png"
                  alt="house_services"
                  width={320}
                  height={380}
                  className="w-full h-full object-cover"
                  unoptimized={false}
                />
              </Link>
              <Link
                href="/house_services"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-2 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl font-bold">
                    Wellness & Personal Care
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Salon at home, spa, massage, fitness trainers - all at your
                    fingertips.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group h-64 sm:h-80 lg:h-96">
              <Link href="/wellness">
                <Image
                  src="/images/kartsquare_main_categories/home_services.png"
                  alt="wellness"
                  width={320}
                  height={380}
                  className="w-full h-full object-cover"
                  unoptimized={false}
                />
              </Link>
              <Link
                href="/wellness"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-2 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl font-bold">
                    Cleaning Services
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Deep cleaning, sofa cleaning, kitchen cleaning, pest control
                    and more — all at your fingertips.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group h-64 sm:h-80 lg:h-96">
              <Link href="/events">
                <Image
                  src="/images/blinkkaro_main_categories/event.png"
                  alt="events222"
                  width={320}
                  height={386}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                />
              </Link>
              <Link
                href="/events"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-2 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl font-bold">
                    Events & Celebrations
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Birthday planners, catering, photography, DJ & decorators
                    and more — all at your fingertips.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group h-64 sm:h-80 lg:h-96">
              <Link href="/entertainment">
                <Image
                  src="/images/kartsquare_main_categories/astro.png"
                  alt="Astrology & Consultation"
                  width={320}
                  height={386}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                />
              </Link>
              <Link
                href="/entertainment"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-2 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl font-bold">
                    Astrology & Consultation
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Astrologers, tarot readers, vastu experts, numerology and
                    more — all at your fingertips.
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group h-64 sm:h-80 lg:h-96">
              <Link href="/home-services">
                <Image
                  src="/images/kartsquare_main_categories/chef.png"
                  alt="home services"
                  width={320}
                  height={380}
                  className="w-full h-full object-cover"
                  unoptimized={false}
                />
              </Link>
              <Link
                href="/home-services"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-2 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white font-bold text-2xl">
                    Personal Chefs
                  </h3>
                  <p className="text-white/80 text-base leading-6">
                    Hire chefs and catering for private dining and special
                    occasions.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-3 col-span-6">
            <div className="relative rounded-2xl overflow-hidden group h-64 sm:h-80 lg:h-96">
              <Link href="/personal-chefs">
                <Image
                  src="/images/kartsquare_main_categories/tutor.png"
                  alt="tutor"
                  width={320}
                  height={386}
                  className="w-full h-full object-cover"
                  unoptimized={true}
                />
              </Link>
              <Link
                href="/personal-chefs"
                className="absolute w-full h-full bg-gradient-to-b from-black/0 to-black/80 top-full flex flex-col justify-between pl-2 pb-10 group-hover:top-0 duration-500"
              >
                <div className="flex justify-end mt-6 mr-6">
                  <div className="bg-white text-dark rounded-full w-fit p-4">
                    <Icon icon="ph:arrow-right" width={24} height={24} />
                  </div>
                </div>
                <div className="flex flex-col gap-2.5">
                  <h3 className="text-white text-2xl font-bold">
                    Tutors & Learning
                  </h3>
                  <p className="text-white/80 text-center leading-6">
                    Music, coding, language tutors, exam prep and more — all at
                    your fingertips.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
