"use client";
import Image from "next/image";
import { Metadata } from "next";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found - KartSquare | 404 Error",
  description:
    "The page you're looking for doesn't exist. Return to KartSquare's homepage to discover trusted home services, events, and professional bookings.",
  robots: {
    index: false,
    follow: true,
  },
};

const ErrorPage = () => {
  return (
    <>
      <section className="flex justify-center pb-0!">
        <Image
          src="/images/404.png"
          alt="404"
          width={490}
          height={450}
          unoptimized={true}
        />
      </section>
      <section className="text-center bg-cover relative overflow-x-hidden">
        <div className="flex gap-2.5 items-center justify-center">
          <span>
            <Icon
              icon={"ph:wrench"}
              width={20}
              height={20}
              className="text-primary"
            />
          </span>
          <p className="text-base font-semibold text-dark/75 dark:text-white/75">
            Error 404
          </p>
        </div>
        <h2 className="text-dark text-52 relative font-bold dark:text-white ">
          Lost? Let&apos;s Help You Find Home.
        </h2>
        <p className="text-lg text-dark/50 dark:text-white/50 font-normal w-full mx-auto mb-8">
          Looks like you&apos;ve hit a dead end — but don&apos;t worry, we&apos;ll help you get
          back on track
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
        >
          <Icon icon="ph:house" width={20} height={20} />
          Go Home
        </Link>
      </section>
    </>
  );
};

export default ErrorPage;