import React from 'react';
import { Search, Plus, Bell, ChevronRight, User } from 'lucide-react';
import { useI18n } from '@/src/i18n/context';
import type { Locale } from '@/src/types';

interface AdminHeaderProps {
  onNewOrder?: () => void;
}

export function AdminHeader({ onNewOrder }: AdminHeaderProps) {
  const { locale, setLocale } = useI18n();

  return (
    <header className="fixed top-0 left-72 right-0 h-16 bg-[#131311]/90 backdrop-blur-xl border-b border-[#4d463a]/30 z-40 flex items-center justify-between px-6">
      {/* Breadcrumb & Global Search */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#A99A81]">
          <span>Asosiy</span>
          <ChevronRight className="w-3.5 h-3.5 text-[#4d463a]" />
          <span className="text-[#e4c287] font-medium">Boshqaruv</span>
        </div>

        <div className="relative flex items-center bg-[#1c1c1a] border border-[#4d463a]/30 px-3 py-1.5 w-64 md:w-80">
          <Search className="w-4 h-4 text-[#998f81] mr-2 shrink-0" />
          <input
            type="text"
            placeholder="Tizim bo‘yicha qidiruv..."
            className="bg-transparent text-xs text-[#e5e2de] placeholder:text-[#998f81] focus:outline-none w-full"
          />
          <kbd className="text-[9px] px-1.5 py-0.5 bg-[#353532] text-[#d0c5b6] font-mono shrink-0">
            ⌘K
          </kbd>
        </div>
      </div>

      {/* Action Strip: New Order, Notifications, Language, Profile */}
      <div className="flex items-center gap-5">
        <button
          onClick={onNewOrder}
          type="button"
          className="flex items-center gap-1.5 bg-[#b99a63] text-[#412d01] hover:bg-[#e4c287] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-colors"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Yangi buyurtma</span>
        </button>

        {/* Notifications */}
        <div
          className="relative p-2 text-[#d0c5b6] hover:text-[#e4c287] hover:bg-[#20201e] cursor-pointer transition-colors"
          title="Xabarlar"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-[#B99A63] text-[#171715] text-[9px] font-bold flex items-center justify-center">
            3
          </span>
        </div>

        {/* Language switch */}
        <div className="flex items-center gap-1 bg-[#1c1c1a] border border-[#4d463a]/30 px-2 py-1 text-[10px] font-mono">
          {(['uz', 'en', 'ru'] as Locale[]).map((loc, idx) => (
            <React.Fragment key={loc}>
              <button
                type="button"
                onClick={() => setLocale(loc)}
                className={`uppercase tracking-wider transition-colors ${
                  locale === loc
                    ? 'text-[#e4c287] font-bold'
                    : 'text-[#998f81] hover:text-[#e5e2de]'
                }`}
              >
                {loc}
              </button>
              {idx < 2 && <span className="text-[#4d463a]">|</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Admin profile lockup */}
        <div className="flex items-center gap-2.5 pl-2 border-l border-[#4d463a]/30">
          <div className="relative">
            <div className="w-8 h-8 bg-[#b99a63] flex items-center justify-center text-[#171715]">
              <User className="w-4 h-4" />
            </div>
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#e4c287] border border-[#131311]" />
          </div>
          <div className="hidden sm:flex flex-col text-left">
            <span className="text-xs font-medium text-[#e5e2de] leading-tight">Jamshid R.</span>
            <span className="text-[9px] text-[#998f81] uppercase tracking-wider">
              Bosh administrator
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
