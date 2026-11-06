import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '@/src/hooks/useCart';
import { useI18n } from '@/src/i18n/context';
import { formatPrice } from '@/src/lib/utils';
import { Button } from '@/src/components/ui/button';

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, subtotal, serviceFee, total, totalCount } = useCart();
  const { locale, t } = useI18n();

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="flex items-center justify-between pb-6 border-b border-[#B99A63]/25 mb-8">
        <div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e4c287]">
            REUGARI Buyurtma
          </span>
          <h1 className="font-serif text-3xl md:text-5xl text-[#e5e2de] mt-1">
            Savatcha
          </h1>
        </div>
        <span className="text-xs text-[#A99A81] font-mono">
          Jami: {totalCount} ta taom
        </span>
      </div>

      {items.length === 0 ? (
        <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-12 text-center flex flex-col items-center gap-4">
          <ShoppingBag className="w-12 h-12 text-[#B99A63]" />
          <h2 className="font-serif text-2xl text-[#e5e2de]">Savatchangiz bo‘sh</h2>
          <p className="text-xs text-[#A99A81] max-w-sm">
            Menyudan o‘zingizga ma’qul bo‘lgan mazali milliy va mualliflik taomlarini tanlang.
          </p>
          <Link to="/menu" className="mt-2">
            <Button variant="primary">Menyuga o‘tish</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Items list */}
          <div className="lg:col-span-8 bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col divide-y divide-[#4d463a]/25">
            {items.map((item) => (
              <div key={item.dish.id} className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-[#2a2a28] overflow-hidden shrink-0">
                    {item.dish.imageUrl ? (
                      <img
                        src={item.dish.imageUrl}
                        alt={item.dish.name[locale]}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-xs text-[#A99A81]">
                        REUGARI
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-serif text-lg text-[#e5e2de]">
                      {item.dish.name[locale] || item.dish.name.uz}
                    </h3>
                    <span className="text-xs text-[#e4c287] font-mono">
                      {formatPrice(item.dish.price, locale)}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                  {/* Quantity */}
                  <div className="flex items-center bg-[#20201e] border border-[#4d463a]/30">
                    <button
                      onClick={() => updateQuantity(item.dish.id, item.quantity - 1)}
                      className="px-2.5 py-1 text-xs text-[#e5e2de] hover:text-[#e4c287]"
                      aria-label="Kamaytirish"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="px-3 text-xs font-mono font-medium text-[#e5e2de]">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.dish.id, item.quantity + 1)}
                      className="px-2.5 py-1 text-xs text-[#e5e2de] hover:text-[#e4c287]"
                      aria-label="Ko'paytirish"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Subtotal & Delete */}
                  <div className="flex items-center gap-4">
                    <span className="font-serif text-base text-[#e5e2de] font-mono">
                      {formatPrice(item.dish.price * item.quantity, locale)}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.dish.id)}
                      className="text-[#998f81] hover:text-[#ffb4ab] p-1 transition-colors"
                      title="O‘chirish"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-4 flex justify-between items-center">
              <button
                onClick={clearCart}
                className="text-xs uppercase text-[#A99A81] hover:text-[#ffb4ab] tracking-wider transition-colors"
              >
                Savatchani tozalash
              </button>
              <Link to="/menu" className="text-xs uppercase text-[#B99A63] hover:underline tracking-wider">
                + Yana taom qo‘shish
              </Link>
            </div>
          </div>

          {/* Checkout summary */}
          <div className="lg:col-span-4 bg-[#1c1c1a] border border-[#B99A63]/30 p-6 flex flex-col gap-4">
            <h2 className="font-serif text-xl text-[#e5e2de] pb-3 border-b border-[#4d463a]/30">
              To‘lov Hisobi
            </h2>

            <div className="space-y-2 text-xs text-[#A99A81]">
              <div className="flex justify-between">
                <span>{t('common.subtotal', 'Oraliq hisob')}:</span>
                <span className="font-mono text-[#e5e2de]">{formatPrice(subtotal, locale)}</span>
              </div>
              <div className="flex justify-between">
                <span>{t('common.serviceFee', 'Xizmat ko‘rsatish (10%)')}:</span>
                <span className="font-mono text-[#e5e2de]">{formatPrice(serviceFee, locale)}</span>
              </div>
              <div className="pt-3 border-t border-[#4d463a]/30 flex justify-between items-baseline">
                <span className="font-serif text-lg text-[#e5e2de]">{t('common.total', 'Jami to‘lov')}:</span>
                <span className="font-serif text-2xl text-[#e4c287] font-bold font-mono">
                  {formatPrice(total, locale)}
                </span>
              </div>
            </div>

            <Link to="/checkout" className="mt-2">
              <Button variant="primary" size="lg" className="w-full flex items-center justify-center gap-2">
                <span>Buyurtmani rasmiylashtirish</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
