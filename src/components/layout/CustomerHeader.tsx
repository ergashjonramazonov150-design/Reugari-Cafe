import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, ShieldCheck } from 'lucide-react';
import { useI18n } from '@/src/i18n/context';
import { useCart } from '@/src/hooks/useCart';
import type { Locale } from '@/src/types';

export function CustomerHeader() {
  const { pathname } = useLocation();
  const { locale, setLocale, t } = useI18n();
  const { totalCount } = useCart();

  const navLinks = [
    { to: '/', label: t('nav.home', 'Bosh sahifa') },
    { to: '/about', label: t('nav.about', 'Biz haqimizda') },
    { to: '/menu', label: t('nav.menu', 'Menyu') },
    { to: '/reservations', label: t('nav.reservations', 'Bron qilish') },
    { to: '/contact', label: t('nav.contact', 'Aloqa') },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#131311]/90 backdrop-blur-xl border-b border-[#B99A63]/15">
      <div className="h-20 w-full max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-6">
        {/* Brand Zone */}
        <Link to="/" className="flex flex-col items-start focus:outline-none group">
          <span className="font-serif text-2xl tracking-[0.2em] text-[#e4c287] group-hover:text-[#ffdea7] transition-colors uppercase">
            REUGARI
          </span>
          <span className="text-[10px] uppercase tracking-[0.25em] text-[#A99A81]">
            {t('brand.tagline', 'Gastronomik Restoran')}
          </span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-[11px] uppercase tracking-[0.18em] transition-colors py-1 whitespace-nowrap ${
                  isActive
                    ? 'text-[#e4c287] font-semibold border-b border-[#B99A63]'
                    : 'text-[#d0c5b6] hover:text-[#E8DDC7]'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#1c1c1a] border border-[#4d463a]/30 p-0.5">
            {(['uz', 'en', 'ru'] as Locale[]).map((loc) => (
              <button
                key={loc}
                onClick={() => setLocale(loc)}
                type="button"
                className={`px-2 py-1 text-[10px] font-semibold uppercase tracking-wider transition-colors ${
                  locale === loc
                    ? 'bg-[#353532] text-[#e4c287]'
                    : 'text-[#998f81] hover:text-[#e5e2de]'
                }`}
              >
                {loc}
              </button>
            ))}
          </div>

          {/* Cart Icon Link */}
          <Link
            to="/cart"
            className="relative p-2 text-[#d0c5b6] hover:text-[#e4c287] transition-colors flex items-center justify-center"
            title={t('nav.cart', 'Savatcha')}
          >
            <ShoppingBag className="w-5 h-5" />
            {totalCount > 0 && (
              <span className="absolute top-1 right-1 min-w-[16px] h-4 px-1 bg-[#B99A63] text-[#171715] text-[9px] font-bold flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </Link>

          {/* Table Booking CTA */}
          <Link
            to="/reservations"
            className="hidden sm:inline-flex items-center justify-center bg-[#b99a63] text-[#412d01] hover:bg-[#e4c287] px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] transition-colors whitespace-nowrap"
          >
            {t('nav.bookTable', 'Stolni band qilish')}
          </Link>

          {/* Admin Link shortcut */}
          <Link
            to="/admin"
            className="px-2.5 py-1.5 border border-[#4d463a]/40 bg-[#1c1c1a] hover:border-[#B99A63] text-[#A99A81] hover:text-[#e4c287] text-[10px] uppercase tracking-wider flex items-center gap-1 transition-colors"
            title="Admin paneli"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-[#B99A63]" />
            <span className="hidden md:inline">Admin</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
