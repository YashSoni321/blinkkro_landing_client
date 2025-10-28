"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const FloatingButton = () => {
  const pathname = usePathname();
  if (pathname === "/waitlist") {
    return null;
  }
  return (
    <Link
      href="/waitlist"
      className={`fixed bottom-10 right-10 z-[9999] bg-primary shadow-primary text-white p-4 rounded-full shadow-md font-bold text-lg hover:bg-red-600 transition-colors duration-300 cursor-pointer`}
    >
      Application Coming Soon...
    </Link>
  );
};

export default FloatingButton;
