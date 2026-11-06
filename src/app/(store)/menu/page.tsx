import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, Trash2, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useI18n } from '@/src/i18n/context';
import { useCart } from '@/src/hooks/useCart';
import { INITIAL_DISHES, INITIAL_CATEGORIES } from '@/src/lib/constants';
import { DishCard } from '@/src/features/menu/DishCard';
import { formatPrice } from '@/src/lib/utils';
import type { CategorySlug } from '@/src/types';

export default function MenuPage() {
  const { locale, t } = useI18n();
  const { items, removeFromCart, clearCart, subtotal, serviceFee, total, totalCount } = useCart();

  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyHalal, setOnlyHalal] = useState(false);
  const [onlyChef, setOnlyChef] = useState(false);

  const filteredDishes = useMemo(() => {
    return INITIAL_DISHES.filter((dish) => {
      if (activeCategory !== 'all' && dish.category !== activeCategory) {
        return false;
      }
      if (onlyHalal && !dish.isHalalCertified) {
        return false;
      }
      if (onlyChef && !dish.isChefSpecial) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const nameMatch = (dish.name[locale] || dish.name.uz).toLowerCase().includes(q);
        const descMatch = (dish.description[locale] || dish.description.uz).toLowerCase().includes(q);
        const ingMatch = dish.ingredients?.some((ing) => ing.toLowerCase().includes(q));
        if (!nameMatch && !descMatch && !ingMatch) return false;
      }
      return true;
    });
  }, [activeCategory, searchQuery, onlyHalal, onlyChef, locale]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-16">
      {/* Editorial Intro Banner */}
      <section className="mb-10 pb-8 border-b border-[#4d463a]/30">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#B99A63]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e4c287]">
                REUGARI Oliy Gastronomiyasi
              </span>
              <span className="px-2 py-0.5 bg-[#20201e] border border-[#4d463a]/30 text-[#e4c287] text-[9px] uppercase tracking-wider">
                Toshkent
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-[#e5e2de] tracking-tight">
              Taomlar Menyusi
            </h1>
            <p className="text-xs md:text-sm text-[#A99A81] max-w-2xl mt-2 leading-relaxed">
              Sharqona mehmondo‘stlik va zamonaviy gastronomiya uyg‘unligi — saralangan milliy hamda mualliflik taomlari.
            </p>
          </div>

          {/* Quick Search */}
          <div className="w-full lg:w-96 flex flex-col gap-2">
            <div className="relative bg-[#1c1c1a] border border-[#4d463a]/30 px-3.5 py-2.5 flex items-center gap-3">
              <Search className="w-4 h-4 text-[#B99A63] shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Taom yoki masalliq qidirish..."
                className="w-full bg-transparent text-xs text-[#e5e2de] placeholder:text-[#998f81] focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-[11px] text-[#A99A81] hover:text-[#e4c287]"
                >
                  ✕
                </button>
              )}
            </div>
            <div className="flex items-center justify-between text-[10px] text-[#A99A81]">
              <span>Mavsumiy menyu 2025</span>
              <span className="text-[#e4c287]">100% Halol ingredientlar</span>
            </div>
          </div>
        </div>

        {/* Dietary toggle chips */}
        <div className="flex flex-wrap items-center gap-2 mt-6">
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setOnlyHalal(false);
              setOnlyChef(false);
            }}
            className={`px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all cursor-pointer border ${
              activeCategory === 'all' && !onlyHalal && !onlyChef
                ? 'bg-[#B99A63] text-[#171715] border-[#B99A63]'
                : 'bg-[#1c1c1a] text-[#A99A81] border-[#4d463a]/30 hover:border-[#B99A63]'
            }`}
          >
            Barchasi ({INITIAL_DISHES.length})
          </button>
          <button
            type="button"
            onClick={() => setOnlyChef(!onlyChef)}
            className={`px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all cursor-pointer border ${
              onlyChef
                ? 'bg-[#B99A63] text-[#171715] border-[#B99A63]'
                : 'bg-[#1c1c1a] text-[#A99A81] border-[#4d463a]/30 hover:border-[#B99A63]'
            }`}
          >
            Oshpaz tavsiyasi
          </button>
          <button
            type="button"
            onClick={() => setOnlyHalal(!onlyHalal)}
            className={`px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition-all cursor-pointer border ${
              onlyHalal
                ? 'bg-[#B99A63] text-[#171715] border-[#B99A63]'
                : 'bg-[#1c1c1a] text-[#A99A81] border-[#4d463a]/30 hover:border-[#B99A63]'
            }`}
          >
            Halol sertifikatlangan
          </button>
        </div>
      </section>

      {/* Category Navigation Strip */}
      <section className="mb-10 overflow-x-auto pb-2 border-b border-[#4d463a]/25">
        <div className="flex items-center gap-2">
          {INITIAL_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.slug;
            return (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                type="button"
                className={`px-4 py-2.5 text-xs uppercase tracking-[0.18em] transition-all whitespace-nowrap cursor-pointer border ${
                  isActive
                    ? 'bg-[#20201e] text-[#e4c287] font-semibold border-[#B99A63]'
                    : 'bg-[#1c1c1a] text-[#A99A81] border-transparent hover:bg-[#20201e] hover:text-[#e5e2de]'
                }`}
              >
                {cat.name[locale] || cat.name.uz} ({cat.count})
              </button>
            );
          })}
        </div>
      </section>

      {/* Catalog & Sticky Savatcha Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Dishes Column (8 of 12) */}
        <div className="xl:col-span-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-[#A99A81]">
              Topilgan taomlar: <strong className="text-[#e4c287]">{filteredDishes.length} ta</strong>
            </span>
          </div>

          {filteredDishes.length === 0 ? (
            <div className="py-16 text-center bg-[#1c1c1a] border border-[#4d463a]/30 p-8">
              <p className="text-sm text-[#A99A81]">
                Berilgan parametrlar bo‘yicha hech qanday taom topilmadi.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                  setOnlyHalal(false);
                  setOnlyChef(false);
                }}
                className="mt-4 text-xs uppercase text-[#B99A63] hover:underline tracking-wider"
              >
                Filtrlarni tozalash
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredDishes.map((dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </div>
          )}
        </div>

        {/* Sticky Savatcha Drawer / Order Panel (4 of 12) */}
        <aside className="xl:col-span-4 sticky top-28">
          <div className="bg-[#1c1c1a] border border-[#B99A63]/30 p-6 md:p-8 flex flex-col shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#4d463a]/30">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-[#B99A63]" />
                <h2 className="font-serif text-2xl text-[#e5e2de] tracking-wide">
                  Savatcha
                </h2>
              </div>
              <span className="px-2 py-0.5 bg-[#24221D] text-[#e4c287] text-[10px] font-mono font-medium">
                {totalCount} ta taom
              </span>
            </div>

            {/* Cart Items List */}
            <div className="flex flex-col divide-y divide-[#4d463a]/25 py-2 max-h-[340px] overflow-y-auto">
              {items.length === 0 ? (
                <div className="py-8 text-center text-xs text-[#A99A81]">
                  Savatchangiz bo‘sh. Ro‘yxatdan lazzatli taomlarni tanlang.
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.dish.id} className="py-3.5 flex items-center justify-between gap-3">
                    <div className="flex flex-col flex-1 min-w-0">
                      <span className="text-xs text-[#e5e2de] font-medium truncate">
                        {item.dish.name[locale] || item.dish.name.uz}
                      </span>
                      <span className="text-[10px] text-[#A99A81] mt-0.5 font-mono">
                        {formatPrice(item.dish.price, locale)} × {item.quantity}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-xs font-semibold text-[#e4c287] font-mono">
                        {formatPrice(item.dish.price * item.quantity, locale)}
                      </span>
                      <button
                        onClick={() => removeFromCart(item.dish.id)}
                        type="button"
                        className="text-[#998f81] hover:text-[#ffb4ab] transition-colors p-1"
                        title="O‘chirish"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Calculation summary */}
            <div className="pt-4 border-t border-[#4d463a]/30 space-y-2 text-xs text-[#A99A81]">
              <div className="flex justify-between items-center">
                <span>{t('common.subtotal', 'Oraliq hisob')}:</span>
                <span className="text-[#e5e2de] font-mono">{formatPrice(subtotal, locale)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>{t('common.serviceFee', 'Xizmat ko‘rsatish (10%)')}:</span>
                <span className="text-[#e5e2de] font-mono">{formatPrice(serviceFee, locale)}</span>
              </div>
              <div className="pt-3 border-t border-[#4d463a]/30 flex justify-between items-baseline">
                <span className="font-serif text-lg text-[#e5e2de]">{t('common.total', 'Jami to‘lov')}:</span>
                <span className="font-serif text-2xl text-[#e4c287] font-bold font-mono">
                  {formatPrice(total, locale)}
                </span>
              </div>
            </div>

            {/* Order Action Buttons */}
            <div className="pt-6 flex flex-col gap-2.5">
              <Link
                to="/checkout"
                className={`w-full py-3.5 px-6 text-center text-xs font-semibold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 ${
                  items.length === 0
                    ? 'bg-[#353532] text-[#998f81] pointer-events-none'
                    : 'bg-[#B99A63] text-[#171715] hover:bg-[#e4c287]'
                }`}
              >
                <span>Buyurtmani rasmiylashtirish</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {items.length > 0 && (
                <button
                  onClick={clearCart}
                  type="button"
                  className="w-full py-2 text-[10px] text-[#A99A81] hover:text-[#e4c287] uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Savatchani tozalash</span>
                </button>
              )}
            </div>

            <div className="mt-4 pt-3 border-t border-[#4d463a]/25 text-center flex items-center justify-center gap-1.5 text-[10px] text-[#A99A81]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#B99A63]" />
              <span>Barcha taomlar Halol talablarga muvofiq</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
