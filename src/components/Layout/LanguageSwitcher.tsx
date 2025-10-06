"use client";
import { Icon } from "@iconify/react";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { useState, useRef, useEffect } from "react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "hi", name: "हिंदी", flag: "🇮🇳" },
];

interface LanguageSwitcherProps {
  isHomepage: boolean;
  sticky: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isHomepage, sticky }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (langCode: string) => {
    router.push(pathname, { locale: langCode });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
          isHomepage
            ? sticky
              ? "text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              : "text-white hover:bg-white/10"
            : "text-dark dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
        }`}
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="text-sm font-medium hidden sm:block">{currentLanguage?.code.toUpperCase()}</span>
        <Icon 
          icon="ph:caret-down" 
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} 
        />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 min-w-[140px] z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                locale === lang.code ? "bg-gray-50 dark:bg-gray-700" : ""
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                {lang.name}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;