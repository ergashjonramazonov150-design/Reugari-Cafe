import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Locale } from '@/src/types';
import uzMessages from '@/src/messages/uz.json';
import enMessages from '@/src/messages/en.json';
import ruMessages from '@/src/messages/ru.json';

const dictionaries: Record<Locale, any> = {
  uz: uzMessages,
  en: enMessages,
  ru: ruMessages,
};

interface I18nContextType {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  t: (keyPath: string, fallback?: string) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Default to Uzbek as required
  const [locale, setLocaleState] = useState<Locale>('uz');

  useEffect(() => {
    const saved = localStorage.getItem('reugari_locale') as Locale;
    if (saved && (saved === 'uz' || saved === 'en' || saved === 'ru')) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('reugari_locale', newLocale);
    document.documentElement.lang = newLocale;
  };

  const t = (keyPath: string, fallback?: string): string => {
    const dict = dictionaries[locale] || dictionaries.uz;
    const parts = keyPath.split('.');
    let cur: any = dict;

    for (const part of parts) {
      if (cur && typeof cur === 'object' && part in cur) {
        cur = cur[part];
      } else {
        return fallback || keyPath;
      }
    }

    return typeof cur === 'string' ? cur : fallback || keyPath;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
