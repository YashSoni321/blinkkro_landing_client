"use client";

import { ThemeProvider } from "next-themes";

export default function ThemeProviderComp({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme="light">
      {children}
    </ThemeProvider>
  );
}
