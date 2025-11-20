"use client";
import { navLinks } from "@/app/api/navlink";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useRef, useState, useCallback } from "react";
import NavLink from "./Navigation/NavLink";
import { useTheme } from "next-themes";
import { usePathname } from "@/i18n/routing";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../LanguageSwitcher";

const Header: React.FC = () => {
  const t = useTranslations();
  const [sticky, setSticky] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();

  const sideMenuRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sideMenuRef.current &&
      !sideMenuRef.current.contains(event.target as Node)
    ) {
      setNavbarOpen(false);
    }
  };

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleScroll]);

  const isHomepage = pathname === "/";

  return (
    <header
      className={`fixed h-24 py-1 z-50 w-full bg-transparent transition-all duration-300  px-4 ${
        sticky ? "top-3" : "top-0"
      }`}
    >
      <nav
        className={`container mx-auto max-w-screen-xl flex items-center justify-between py-3 px-2 sm:px-6 duration-300
    ${
      sticky
        ? "shadow-lg bg-white dark:bg-dark rounded-full top-5 px-6 border-1 border-black/30 dark:border-white/20 backdrop-blur-md"
        : "shadow-none top-0 px-4"
    }`}
      >
        <div>
          <div className="flex items-center justify-center">
            <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide inline-flex items-center gap-3">
              <Image
                src="/images/logo/kartsquare.png"
                alt="KartSquare logo"
                width={40}
                height={40}
                className="object-contain w-10 h-10"
              />
              KartSquare
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-6">
          {/* Desktop Navigation Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className={`text-base font-medium transition-colors duration-200
            ${
              isHomepage
                ? sticky
                  ? "text-dark dark:text-white hover:text-primary"
                  : "text-white hover:text-primary"
                : "dark:text-white hover:text-primary"
            }`}
                >
                  {t(`navigation.${item.label.toLowerCase()}`)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Language Switcher */}
          <LanguageSwitcher isHomepage={isHomepage} sticky={sticky} />

          {/* Phone Number (still only on md+ screens) */}
          {/* <div className="hidden md:block">
            <Link
              href="#"
              className={`text-base text-inherit flex items-center gap-2 border-r pr-6 ${
                isHomepage
                  ? sticky
                    ? "text-dark dark:text-white hover:text-primary border-dark dark:border-white"
                    : "text-white hover:text-primary"
                  : "text-dark hover:text-primary"
              }`}
            >
              <Icon icon={"ph:phone-bold"} width={24} height={24} />
              +1-212-456-789
            </Link>
          </div> */}
          <button
            className="hover:cursor-pointer"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Icon
              icon={"solar:sun-bold"}
              width={32}
              height={32}
              className={`dark:hidden block ${
                isHomepage ? (sticky ? "text-dark" : "text-white") : "text-dark"
              }`}
            />
            <Icon
              icon={"solar:moon-bold"}
              width={32}
              height={32}
              className="dark:block hidden text-white"
            />
          </button>

          {/* Menu Button → show on all screens */}
          <div>
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className={`flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-5 sm:py-3 rounded-full font-semibold hover:cursor-pointer border transition-all duration-300 ${
                isHomepage
                  ? sticky
                    ? "text-white bg-dark dark:bg-white dark:text-dark dark:hover:text-white dark:hover:bg-dark hover:text-dark hover:bg-white border-dark dark:border-white"
                    : "text-dark bg-white dark:text-dark hover:bg-transparent hover:text-white border-white"
                  : "bg-dark text-white hover:bg-transparent hover:text-dark dark:bg-white dark:text-dark dark:hover:bg-transparent dark:hover:text-white"
              } `}
              aria-label="Toggle menu"
            >
              <span>
                <Icon
                  icon={"ph:list"}
                  width={20}
                  height={20}
                  className="sm:w-6 sm:h-6"
                />
              </span>
              <span className="hidden sm:block text-sm sm:text-base">
                {t("common.menu")}
              </span>
            </button>
          </div>
        </div>
      </nav>

      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
      )}

      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full bg-dark shadow-lg transition-transform duration-300 
    ${navbarOpen ? "translate-x-0" : "translate-x-full"}
    z-50 px-4 sm:px-6 lg:px-8 overflow-y-auto
    w-full xs:w-4/5 sm:w-96 md:w-[400px] max-w-md`}
      >
        <div className="flex flex-col h-full justify-between">
          <div className="">
            <div className="flex items-center justify-start py-6 sm:py-8 lg:py-10">
              <button
                onClick={() => setNavbarOpen(false)}
                aria-label="Close mobile menu"
                className="bg-white p-2 sm:p-3 rounded-full hover:cursor-pointer transition-transform hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="sm:w-6 sm:h-6"
                >
                  <path
                    fill="none"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col items-start gap-2 sm:gap-4">
              <ul className="w-full space-y-1">
                {navLinks.map((item, index) => (
                  <NavLink
                    key={index}
                    item={item}
                    onClick={() => setNavbarOpen(false)}
                  />
                ))}
                <li className="flex flex-col xs:flex-row items-start xs:items-center gap-3 xs:gap-4 pt-4">
                  <Link
                    href="/signin"
                    className="py-3 px-6 sm:py-4 sm:px-8 bg-primary text-sm sm:text-base leading-4 block w-full xs:w-fit text-center text-white rounded-full border border-primary font-semibold hover:bg-transparent hover:text-primary duration-300"
                  >
                    {t("navigation.signin")}
                  </Link>
                  <Link
                    href="/"
                    className="py-3 px-6 sm:py-4 sm:px-8 bg-transparent border border-primary text-sm sm:text-base leading-4 block w-full xs:w-fit text-center text-primary rounded-full font-semibold hover:bg-primary hover:text-white duration-300"
                  >
                    {t("navigation.signup")}
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col gap-1 sm:gap-2 my-8 sm:my-12 lg:my-16 text-white">
            <p className="text-sm sm:text-base font-normal text-white/40">
              {t("common.contact")}
            </p>
            <Link
              href="#"
              className="text-sm sm:text-base font-medium text-inherit hover:text-primary transition-colors duration-200 break-all"
            >
              {t("common.email")}
            </Link>
            <Link
              href="#"
              className="text-sm sm:text-base font-medium text-inherit hover:text-primary transition-colors duration-200"
            >
              {t("common.phone")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
