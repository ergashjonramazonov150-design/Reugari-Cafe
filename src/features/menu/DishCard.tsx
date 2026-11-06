import React, { useState } from 'react';
import { Plus, Minus, ShoppingBag, Flame, Clock, Scale } from 'lucide-react';
import type { Dish } from '@/src/types';
import { useCart } from '@/src/hooks/useCart';
import { useI18n } from '@/src/i18n/context';
import { formatPrice } from '@/src/lib/utils';

export function DishCard({ dish }: { dish: Dish }) {
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const { locale, t } = useI18n();

  const handleAdd = () => {
    addToCart(dish, qty);
    setQty(1);
  };

  return (
    <article className="group bg-[#1c1c1a] border border-[#4d463a]/30 flex flex-col justify-between transition-all duration-300 hover:bg-[#20201e] hover:border-[#B99A63]/50">
      {/* Dish Image Frame */}
      <div className="relative overflow-hidden aspect-[16/10] bg-[#2a2a28]">
        {dish.imageUrl ? (
          <img
            src={dish.imageUrl}
            alt={dish.name[locale] || dish.name.uz}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#24221D] text-[#A99A81]">
            <span className="font-serif text-lg">{dish.name[locale]}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1a] via-transparent to-transparent opacity-80" />

        {/* Feature Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {dish.isChefSpecial && (
            <span className="px-2 py-0.5 bg-[#0e0e0c]/90 border border-[#B99A63]/30 text-[#e4c287] text-[10px] uppercase tracking-wider font-semibold">
              {t('common.chefSpecial', 'Oshpaz tavsiyasi')}
            </span>
          )}
          {dish.isHalalCertified && (
            <span className="px-2 py-0.5 bg-[#131311]/80 text-[#cbc6be] text-[10px] uppercase tracking-wide">
              Halol
            </span>
          )}
        </div>
      </div>

      {/* Dish Body */}
      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-serif text-xl text-[#e5e2de] group-hover:text-[#e4c287] transition-colors leading-snug">
              {dish.name[locale] || dish.name.uz}
            </h3>
            <span className="text-xs font-semibold text-[#e4c287] whitespace-nowrap font-mono">
              {formatPrice(dish.price, locale)}
            </span>
          </div>
          <p className="text-xs text-[#A99A81] line-clamp-3 leading-relaxed">
            {dish.description[locale] || dish.description.uz}
          </p>
        </div>

        {/* Metadata info */}
        <div className="flex items-center justify-between text-[#A99A81] text-[11px] pt-2 border-t border-[#4d463a]/25">
          {dish.weightGrams && (
            <span className="flex items-center gap-1">
              <Scale className="w-3.5 h-3.5 text-[#B99A63]" /> {dish.weightGrams} g
            </span>
          )}
          {dish.caloriesKcal && (
            <span className="flex items-center gap-1">
              <Flame className="w-3.5 h-3.5 text-[#B99A63]" /> {dish.caloriesKcal} kkal
            </span>
          )}
          {dish.prepTimeMinutes && (
            <span className="flex items-center gap-1 text-[#e4c287]">
              <Clock className="w-3.5 h-3.5" /> {dish.prepTimeMinutes} daqiqa
            </span>
          )}
        </div>

        {/* Quantity Controls & Add to Cart */}
        <div className="pt-3 flex items-center justify-between gap-3">
          <div className="flex items-center bg-[#2a2a28] border border-[#4d463a]/30">
            <button
              onClick={() => setQty((prev) => Math.max(1, prev - 1))}
              type="button"
              className="text-[#e5e2de] hover:text-[#e4c287] px-2.5 py-1.5 text-xs transition-colors"
              aria-label="Kamaytirish"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="px-3 text-xs text-[#e5e2de] font-mono font-medium">
              {qty}
            </span>
            <button
              onClick={() => setQty((prev) => prev + 1)}
              type="button"
              className="text-[#e5e2de] hover:text-[#e4c287] px-2.5 py-1.5 text-xs transition-colors"
              aria-label="Ko'paytirish"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>

          <button
            onClick={handleAdd}
            type="button"
            className="flex-1 bg-[#b99a63] text-[#412d01] hover:bg-[#e4c287] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{t('common.addToCart', 'Savatchaga qo‘shish')}</span>
          </button>
        </div>
      </div>
    </article>
  );
}
