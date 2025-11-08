"use client";

import { Link, usePathname } from "@/i18n/routing";
import { Icon } from "@iconify/react";
import { useTranslations } from "next-intl";
import React from "react";

const FloatingButton = () => {
  const pathname = usePathname();
  const t = useTranslations("waitlistPage.form.submit");

  if (pathname === "/waitlist") {
    return null;
  }

  return (
    <Link
      href="/waitlist"
      className="fixed bottom-8 right-8 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/50"
    >
      <Icon icon="ph:rocket-launch-bold" width={20} height={20} />
      <span>{t("default")}</span>
    </Link>
  );
};

export default FloatingButton;
