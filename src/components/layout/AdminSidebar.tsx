import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutGrid,
  ShoppingBag,
  Calendar,
  UtensilsCrossed,
  Tag,
  Users,
  Image,
  Settings,
  LogOut,
  ExternalLink,
} from 'lucide-react';
import { useI18n } from '@/src/i18n/context';

interface AdminSidebarProps {
  ordersCount?: number;
  reservationsCount?: number;
}

export function AdminSidebar({ ordersCount = 14, reservationsCount = 5 }: AdminSidebarProps) {
  const { pathname } = useLocation();
  const { t } = useI18n();

  const navItems = [
    {
      to: '/admin',
      label: t('adminNav.overview', 'Umumiy ko‘rinish'),
      icon: LayoutGrid,
      exact: true,
    },
    {
      to: '/admin/orders',
      label: t('adminNav.orders', 'Buyurtmalar'),
      icon: ShoppingBag,
      count: ordersCount,
    },
    {
      to: '/admin/reservations',
      label: t('adminNav.reservations', 'Bronlar'),
      icon: Calendar,
      count: reservationsCount,
    },
    {
      to: '/admin/dishes',
      label: t('adminNav.dishes', 'Taomlar menyusi'),
      icon: UtensilsCrossed,
    },
    {
      to: '/admin/categories',
      label: t('adminNav.categories', 'Kategoriyalar'),
      icon: Tag,
    },
    {
      to: '/admin/customers',
      label: t('adminNav.customers', 'Mijozlar'),
      icon: Users,
    },
    {
      to: '/admin/gallery',
      label: t('adminNav.gallery', 'Galereya va kontent'),
      icon: Image,
    },
    {
      to: '/admin/settings',
      label: t('adminNav.settings', 'Sozlamalar'),
      icon: Settings,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-72 bg-[#1c1c1a] border-r border-[#4d463a]/30 z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col">
        {/* Brand header */}
        <div className="px-6 pt-6 pb-4 flex flex-col border-b border-[#4d463a]/25">
          <Link to="/admin" className="flex items-center gap-2">
            <span className="text-[#e4c287] font-serif text-2xl tracking-wider uppercase font-normal">
              REUGARI
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B99A63]" />
          </Link>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d0c5b6] mt-0.5">
            {t('brand.subtitle', 'Boshqaruv Paneli • Toshkent')}
          </span>
        </div>

        {/* Navigation list */}
        <nav className="flex flex-col gap-1 px-3 mt-4">
          {navItems.map((item) => {
            const isActive = item.exact
              ? pathname === item.to
              : pathname.startsWith(item.to);
            const Icon = item.icon;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center justify-between px-3.5 py-2.5 transition-all text-xs uppercase tracking-wider ${
                  isActive
                    ? 'bg-[#2a2a28] text-[#e4c287] font-semibold border-l-2 border-[#B99A63]'
                    : 'text-[#d0c5b6] hover:bg-[#20201e] hover:text-[#e5e2de]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-4 h-4 text-[#B99A63]" />
                  <span>{item.label}</span>
                </div>
                {typeof item.count === 'number' && (
                  <span className="px-1.5 py-0.5 bg-[#353532] text-[#e4c287] text-[10px] font-mono font-medium">
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer Status & Website Link */}
      <div className="p-5 flex flex-col gap-3 border-t border-[#4d463a]/25">
        <div className="p-3 bg-[#20201e] border border-[#4d463a]/30 flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#e4c287] animate-pulse" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#e4c287]">
              {t('brand.openStatus', 'Dasturxon ochiq')}
            </span>
          </div>
          <span className="text-xs text-[#A99A81] font-mono">11:00 — 23:00</span>
        </div>

        <Link
          to="/"
          className="flex items-center justify-between px-3 py-2 text-xs text-[#d0c5b6] hover:bg-[#2a2a28] hover:text-[#e4c287] transition-colors uppercase tracking-wider"
        >
          <div className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-[#B99A63]" />
            <span>Mijoz saytiga o‘tish</span>
          </div>
        </Link>
      </div>
    </aside>
  );
}
