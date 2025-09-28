import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact KartSquare - Get Help & Support | Customer Service India",
  description:
    "Need help with KartSquare services? Contact our 24/7 support team. Get instant assistance for bookings, payments, or service queries. We're here to help!",
  keywords: [
    "KartSquare contact",
    "customer support",
    "help center",
    "service support",
    "24/7 assistance",
    "KartSquare help",
  ],
  openGraph: {
    title: "Contact KartSquare - Get Help & Support",
    description:
      "Reach out to KartSquare's support team for any assistance. Quick response guaranteed for all your service booking needs.",
    url: "https://kartsquare.com/contactus",
  },
  alternates: {
    canonical: "https://kartsquare.com/contactus",
  },
};

export default function ContactUs() {
  return (
    <div className="container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-44 pb-14 md:pb-28">
      <div className="mb-16">
        <div className="flex gap-2.5 items-center justify-center mb-3">
          <span>
            <Icon
              icon={"ph:chat-circle-dots-fill"}
              width={20}
              height={20}
              className="text-primary"
            />
          </span>
          <p className="text-base font-semibold text-badge dark:text-white/90">
            Contact us
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-4xl sm:text-52 font-medium tracking-tighter text-black dark:text-white mb-3 leading-10 sm:leading-14">
            Have questions? We’re here to help.
          </h3>
          <p className="text-xm font-normal tracking-tight text-black/50 dark:text-white/50 leading-6">
            KartSquare is built to be easy, safe, and valuable for everyone.
            Reach out to us anytime — whether it’s about our services, your
            account, or how we can make your experience even better.
          </p>
        </div>
      </div>
      {/* form */}
      <div className="border border-black/10 dark:border-white/10 rounded-2xl p-4 shadow-xl dark:shadow-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12">
          <div className="relative w-fit">
            <Image
              src={"/images/contactUs/contactUs.jpg"}
              alt="contact illustration"
              width={497}
              height={535}
              className="rounded-2xl brightness-50 h-full"
              unoptimized={true}
            />
            <div className="absolute top-6 left-6 lg:top-12 lg:left-12 flex flex-col gap-2">
              <h5 className="text-xl xs:text-2xl mobile:text-3xl font-medium tracking-tight text-white">
                Contact information
              </h5>
              <p className="text-sm xs:text-base mobile:text-xm font-normal text-white/80">
                Have a question or need support? We’ll respond quickly and guide
                you with care.
              </p>
            </div>
            <div className="absolute bottom-6 left-6 lg:bottom-12 lg:left-12 flex flex-col gap-4 text-white">
              <Link href={"tel:+1023903101122"} className="w-fit">
                <div className="flex items-center gap-4 group w-fit">
                  <Icon icon={"ph:phone"} width={32} height={32} />
                  <p className="text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary">
                    +1 0239 0310 1122
                  </p>
                </div>
              </Link>
              <Link href={"mailto:support@blinkkaro.com"} className="w-fit">
                <div className="flex items-center gap-4 group w-fit">
                  <Icon icon={"ph:envelope-simple"} width={32} height={32} />
                  <p className="text-sm xs:text-base mobile:text-xm font-normal group-hover:text-primary">
                    support@kartsquare.com
                  </p>
                </div>
              </Link>
              <div className="flex items-center gap-4">
                <Icon icon={"ph:map-pin"} width={32} height={32} />
                <p className="text-sm xs:text-base mobile:text-xm font-normal">
                  KartSquare HQ, Bangalore, India
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1/2">
            <form>
              <div className="flex flex-col gap-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    placeholder="Name*"
                    required
                    className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                  />
                  <input
                    type="number"
                    name="mobile"
                    id="mobile"
                    autoComplete="mobile"
                    placeholder="Phone number*"
                    required
                    className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline w-full"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Email address*"
                  required
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-full outline-primary focus:outline"
                />
                <textarea
                  rows={8}
                  cols={50}
                  name="message"
                  id="message"
                  placeholder="Write your message here..."
                  required
                  className="px-6 py-3.5 border border-black/10 dark:border-white/10 rounded-2xl outline-primary focus:outline"
                ></textarea>
                <button className="px-8 py-4 rounded-full bg-primary text-white text-base font-semibold w-full mobile:w-fit hover:cursor-pointer hover:bg-dark duration-300">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
