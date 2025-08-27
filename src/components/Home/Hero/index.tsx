import { CalendarDays, Headset, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <section className="!py-0">
      <div className="bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-x-hidden relative">
        <div className="container max-w-8xl mx-auto px-4 sm:px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68">
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white dark:text-gray-100 leading-tight mb-6">
              <span className="text-primary">BlinkKaro</span>: Your One-Stop
              Service Booking Hub
            </h1>
            <p className="text-lg md:text-xl text-white/90 dark:text-gray-300 mb-8">
              Choose your provider, pick your time—plumbing, AC repair,
              tutoring, events, and more—all in a blink.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/contactus"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:scale-105 transition-transform"
              >
                Join Waitlist
              </Link>
              <Link
                href="/"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-colors"
              >
                <span className="font-bold text-black">
                  {" "}
                  Become a Provider{" "}
                </span>
                (Opening Sooon...)
              </Link>
            </div>
          </div>
          <div className="hidden md:block absolute top-1/2 right-0 transform -translate-y-1/2">
            <Image
              src="/images/hero/pair_hero_image.png"
              alt="hero booking illustration"
              width={600}
              height={600}
              priority={false}
              unoptimized={true}
            />
          </div>
        </div>

        {/* Service Highlights */}
        <div className="md:absolute bottom-0 md:-right-68 xl:right-0 bg-white dark:bg-black py-8 md:py-12 px-4 sm:px-8 mobile:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-16 md:mt-24 mx-4 md:mx-0">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:flex gap-8 sm:gap-16 md:gap-24 sm:text-center dark:text-white text-black">
            <div className="flex flex-col sm:items-center gap-3">
              <CalendarDays className="w-8 h-8 text-sky-600 dark:text-sky-400" />
              <p className="text-sm sm:text-base font-normal text-inherit">
                Instant Booking
              </p>
            </div>

            <div className="flex flex-col sm:items-center gap-3">
              <Headset className="w-8 h-8 text-sky-600 dark:text-sky-400" />
              <p className="text-sm sm:text-base font-normal text-inherit">
                24/7 Support
              </p>
            </div>

            <div className="flex flex-col sm:items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-sky-600 dark:text-sky-400" />
              <p className="text-sm sm:text-base font-normal text-inherit">
                Trusted Providers
              </p>
            </div>

            {/* <div className="flex flex-col sm:items-center gap-3">
              {/* <Users className="w-8 h-8 text-sky-600 dark:text-sky-400" /> 
              <p className="text-2xl sm:text-3xl font-medium text-inherit">
                5000+ Bookings
              </p>
              <p className="text-sm sm:text-base font-normal text-black/50 dark:text-white/50">
                And growing daily
              </p>
            </div> */}
            <div className="flex flex-col sm:items-center gap-3">
              {/* Icon */}
              <Users className="w-8 h-8 text-sky-600 dark:text-sky-400" />

              {/* Main Stat */}
              <p className="text-2xl sm:text-3xl font-semibold text-inherit">
                500+ Users
              </p>

              {/* Subtext */}
              <p className="text-sm sm:text-base font-normal text-black/50 dark:text-white/50">
                Have already joined the waitlist 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
