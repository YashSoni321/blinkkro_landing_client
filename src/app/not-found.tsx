"use client";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark dark:to-dark/95 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold text-primary/20 dark:text-primary/30">
            404
          </h1>
        </div>

        {/* Icon */}
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full">
            <Icon
              icon="ph:magnifying-glass"
              width={40}
              height={40}
              className="text-primary"
            />
          </div>
        </div>

        {/* Content */}
        <h2 className="text-2xl md:text-3xl font-semibold text-dark dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have
          been moved, deleted, or you entered the wrong URL.
        </p>

        {/* Actions */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300"
          >
            <Icon icon="ph:house" width={18} height={18} />
            Go Home
          </Link>

          <div className="text-sm text-gray-600 dark:text-gray-300">
            or{" "}
            <button aria-label="go-back"
              onClick={() => window.history.back()}
              className="text-primary hover:underline"
            >
              go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
