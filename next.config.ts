import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from 'next';
 
const withNextIntl = createNextIntlPlugin();
 
const nextConfig: NextConfig = {
  // Image Optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Compiler Optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Performance Optimizations
  swcMinify: true,
  poweredByHeader: false,
  compress: true,

  // Output Configuration for Standalone Deployment
  output: 'standalone',

  // Experimental Features for Better Performance
  experimental: {
    optimizePackageImports: ['@iconify/react', 'lucide-react'],
  },
} as NextConfig;
 
export default withNextIntl(nextConfig);