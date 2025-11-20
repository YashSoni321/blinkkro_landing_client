"use client";
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { Icon } from '@iconify/react';
import { useState } from 'react';

interface LanguageSwitcherProps {
  isHomepage?: boolean;
  sticky?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isHomepage = false, sticky = false }) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' }
  ];

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    router.push(pathname, { locale: langCode });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 md:px-3 px-0 py-2 rounded-full transition-colors duration-200 ${
          isHomepage
            ? sticky
              ? "text-dark dark:text-white hover:text-primary"
              : "text-white hover:text-primary"
            : "text-dark dark:text-white hover:text-primary"
        }`}
        aria-label="Change language"
      > 
        <span className="text-sm font-medium">{currentLanguage.flag}</span>
        <span className="hidden sm:block text-sm font-medium">{currentLanguage.code.toUpperCase()}</span>
        <Icon icon="ph:caret-down" width={16} height={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-10" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-2 bg-white dark:bg-dark border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-20 min-w-[120px]">
            {languages.map((lang) => (
              <button
                aria-label='country-flag'
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  locale === lang.code ? 'bg-primary/10 text-primary' : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm font-medium">{lang.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;