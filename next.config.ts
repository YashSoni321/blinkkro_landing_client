import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  // Compiler Optimizations
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  // Performance Optimizations
  poweredByHeader: false,
  compress: true,

  // ✅ Standalone Output (Important!)
  output: "standalone",

  // Experimental Features
  experimental: {
    optimizePackageImports: ["@iconify/react", "lucide-react"],
  },
};

export default withNextIntl(nextConfig);
