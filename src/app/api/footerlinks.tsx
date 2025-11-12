import { footerlinks } from "@/types/footerlinks";
import { useTranslations } from "next-intl";

// Hook to get translated footer links
export const useFooterLinks = () => {
  const t = useTranslations("footerLinksData");

  const FooterLinks: footerlinks[] = [
    { label: t("homeServices"), href: "/" },
    // { label: t("eventPlanning"), href: "/event-planning" },
    // { label: t("professionalServices"), href: "/professional-services" },
    { label: t("contactUs"), href: "/contactus" },
    // { label: t("blog"), href: "/blogs" },
    // { label: t("becomeProvider"), href: "/provider-signup" },
    // { label: t("helpCenter"), href: "/help" },
  ];

  return FooterLinks;
};

// Rename static export to avoid conflict
export const staticFooterLinks: footerlinks[] = [
  { label: "Home Services", href: "/home-services" },
  { label: "Event Planning", href: "/event-planning" },
  { label: "Professional Services", href: "/professional-services" },
  { label: "Contact Us", href: "/contactus" },
  { label: "Blog", href: "/blogs" },
  { label: "Become a Provider", href: "/provider-signup" },
  { label: "Help Center", href: "/help" },
];
