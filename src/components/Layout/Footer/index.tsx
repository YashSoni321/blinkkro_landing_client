import Link from "next/link";
import { Icon } from "@iconify/react";
import { useFooterLinks } from "@/app/api/footerlinks";
import { useTranslations } from "next-intl";
import Image from "next/image";

const Footer = () => {
  const t = useTranslations("footer");
  const FooterLinks = useFooterLinks();

  return (
    <footer className="bg-gradient-to-br from-dark via-dark to-dark/95 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto max-w-8xl px-4 sm:px-6 relative z-10">
        {/* Mobile Layout */}
        <div className="md:hidden py-6">
          <div className="text-center space-y-4">
            <div className="flex items-center align-center justify-center gap-3 mb-4">
              <Image
                loading="lazy"
                src="/images/logo/logo.png"
                alt="logo"
                width={40}
                height={40}
              />
              <h3 className="text-white text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                KartSquare
              </h3>
            </div>
            <p className="text-white/70 text-sm mb-6 leading-relaxed max-w-md mx-auto">
              {t("newsletter.description")}
            </p>
            <div className="flex justify-center gap-6">
              <Link
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-primary/20 transition-all duration-300"
              >
                <Icon
                  icon="ph:facebook-logo-bold"
                  width={18}
                  height={18}
                  className="text-white"
                />
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-primary/20 transition-all duration-300"
              >
                <Icon
                  icon="ph:instagram-logo-bold"
                  width={18}
                  height={18}
                  className="text-white"
                />
              </Link>
              <Link
                href="#"
                className="p-2 bg-white/10 rounded-full hover:bg-primary/20 transition-all duration-300"
              >
                <Icon
                  icon="ph:x-logo-bold"
                  width={18}
                  height={18}
                  className="text-white"
                />
              </Link>
            </div>
            <Link
              href="/contactus"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <Icon icon="ph:chat-circle-dots" width={16} height={16} />
              {t("contact.button")}
            </Link>
            <div className="pt-3 border-t border-white/10">
              <div className="flex justify-center gap-6 mb-3">
                <Link
                  href="/terms"
                  className="text-white/50 hover:text-primary text-xs transition-colors duration-300"
                >
                  {t("bottomBar.termsShort")}
                </Link>
                <Link
                  href="/privacy"
                  className="text-white/50 hover:text-primary text-xs transition-colors duration-300"
                >
                  {t("bottomBar.privacyShort")}
                </Link>
              </div>
              <p className="text-white/50 text-xs">
                {t("bottomBar.copyright")}
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block py-12">
          <div className="grid grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="col-span-2">
              <div className="flex items-center gap-3">
                <Image
                  loading="lazy"
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={40}
                  height={40}
                />
                <h3 className="text-white text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  KartSquare
                </h3>
              </div>
              <p className="text-white/70 text-sm mb-6 leading-relaxed max-w-md">
                {t("newsletter.description")}
              </p>
              <div className="flex gap-3">
                <Link
                  href="#"
                  className="p-3 bg-white/10 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                >
                  <Icon
                    icon="ph:facebook-logo-bold"
                    width={20}
                    height={20}
                    className="text-white"
                  />
                </Link>
                <Link
                  href="#"
                  className="p-3 bg-white/10 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                >
                  <Icon
                    icon="ph:instagram-logo-bold"
                    width={20}
                    height={20}
                    className="text-white"
                  />
                </Link>
                <Link
                  href="#"
                  className="p-3 bg-white/10 rounded-full hover:bg-primary/20 hover:scale-110 transition-all duration-300"
                >
                  <Icon
                    icon="ph:x-logo-bold"
                    width={20}
                    height={20}
                    className="text-white"
                  />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                {t("newsletter.quickLinks")}
              </h4>
              <div className="space-y-3">
                {FooterLinks.slice(0, 4).map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="block text-white/60 hover:text-primary text-sm transition-all duration-300 hover:translate-x-1"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="/terms"
                  className="block text-white/60 hover:text-primary text-sm transition-all duration-300 hover:translate-x-1"
                >
                  {t("bottomBar.terms")}
                </Link>
                <Link
                  href="/privacy"
                  className="block text-white/60 hover:text-primary text-sm transition-all duration-300 hover:translate-x-1"
                >
                  {t("bottomBar.privacy")}
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-6 text-lg">
                {t("contact.getInTouch")}
              </h4>
              <Link
                href="/contactus"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 hover:scale-105 transition-all duration-300"
              >
                <Icon icon="ph:chat-circle-dots" width={18} height={18} />
                {t("contact.button")}
              </Link>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex justify-between items-center pt-8 border-t border-white/10">
            <p className="text-gray-300 text-sm">{t("bottomBar.copyright")}</p>
            <div className="flex gap-8">
              <Link
                href="/terms"
                className="text-gray-300 hover:text-primary text-sm transition-colors duration-300"
              >
                {t("bottomBar.terms")}
              </Link>
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-primary text-sm transition-colors duration-300"
              >
                {t("bottomBar.privacy")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
