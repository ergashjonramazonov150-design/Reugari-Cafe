import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { useCart } from '@/src/hooks/useCart';
import { useI18n } from '@/src/i18n/context';
import { formatPrice } from '@/src/lib/utils';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import type { PaymentMethod } from '@/src/types';

export default function CheckoutPage() {
  const { items, subtotal, serviceFee, total, clearCart } = useCart();
  const { locale, t } = useI18n();

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('payme');
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    landmark: '',
    instructions: '',
  });

  const deliveryFee = 25000;
  const grandTotal = total + deliveryFee;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newOrdNum = `#ORD-${Math.floor(8825 + Math.random() * 500)}`;
    setOrderNumber(newOrdNum);
    setIsSuccess(true);
    clearCart();
  };

  if (isSuccess) {
    return (
      <div className="w-full max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="bg-[#1c1c1a] border border-[#B99A63]/40 p-8 md:p-12 shadow-2xl flex flex-col items-center gap-4">
          <div className="w-16 h-16 bg-[#B99A63]/20 border border-[#B99A63] text-[#e4c287] flex items-center justify-center">
            <CheckCircle2 className="w-10 h-10 text-[#B99A63]" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e4c287]">
            Buyurtma Qabul Qilindi
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-[#e5e2de]">
            Rahmat, {formData.name || 'Hurmatli Mehmon'}!
          </h1>
          <p className="text-xs text-[#A99A81] leading-relaxed max-w-md">
            Buyurtmangiz oshxonaga qabul qilindi va tayyorlash jarayoni boshlandi. Kuryerimiz tez orada bog‘lanadi.
          </p>

          <div className="w-full bg-[#20201e] border border-[#4d463a]/30 p-4 my-2 text-left text-xs font-mono text-[#cbc6be] space-y-1">
            <div className="flex justify-between">
              <span className="text-[#A99A81]">Buyurtma raqami:</span>
              <span className="text-[#e4c287] font-bold">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A99A81]">Yetkazish manzili:</span>
              <span>{formData.address}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[#A99A81]">To‘lov usuli:</span>
              <span className="uppercase">{paymentMethod}</span>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <Link to="/menu">
              <Button variant="outline">Menyuga qaytish</Button>
            </Link>
            <Link to="/">
              <Button variant="primary">Bosh sahifa</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16">
      <div className="mb-8">
        <Link to="/cart" className="text-xs uppercase text-[#A99A81] hover:text-[#e4c287] flex items-center gap-1.5 mb-2">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Savatchaga qaytish</span>
        </Link>
        <h1 className="font-serif text-3xl md:text-5xl text-[#e5e2de]">
          Buyurtmani Rasmiylashtirish
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Form (7 of 12) */}
        <div className="lg:col-span-7 flex flex-col gap-6 bg-[#1c1c1a] border border-[#4d463a]/30 p-6 md:p-8">
          <h2 className="font-serif text-2xl text-[#e4c287] pb-3 border-b border-[#4d463a]/30">
            Yetkazib Berish Ma’lumotlari
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Ism va Familiya"
              placeholder="Sanjar Abdullayev"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              label="Telefon raqami"
              type="tel"
              placeholder="+998 90 123 45 67"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <Input
            label="Yetkazib berish manzili"
            placeholder="Tuman, ko‘cha, uy, xonadon raqami"
            value={formData.address}
            onChange={(e) => setFormData({ ...formData, address: e.target.value })}
            required
          />

          <Input
            label="Mo‘ljal (Landmark)"
            placeholder="Masalan: Darkhan Business Center ro‘parasida"
            value={formData.landmark}
            onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
          />

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A99A81]">
              Kuryer yoki oshxona uchun maxsus izoh
            </label>
            <textarea
              rows={2}
              placeholder="Masalan: Domofon kodi 45, piyozini alohida solib bering..."
              value={formData.instructions}
              onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
              className="w-full bg-[#20201e] border border-[#4d463a]/30 p-3 text-xs text-[#E8DDC7] placeholder:text-[#998f81]/60 focus:border-[#B99A63] focus:outline-none resize-none transition-colors"
            />
          </div>

          {/* Payment Method Selector */}
          <div className="pt-4 border-t border-[#4d463a]/30">
            <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A99A81] block mb-3">
              To‘lov Usuli
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { id: 'payme', label: 'Payme' },
                { id: 'click', label: 'Click' },
                { id: 'terminal', label: 'Uzcard / Humo' },
                { id: 'cash', label: 'Naqd pul' },
              ].map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setPaymentMethod(m.id as PaymentMethod)}
                  className={`py-3 px-3 text-center text-xs uppercase tracking-wider transition-all border ${
                    paymentMethod === m.id
                      ? 'bg-[#B99A63] text-[#171715] font-semibold border-[#B99A63]'
                      : 'bg-[#20201e] text-[#cbc6be] border-[#4d463a]/40 hover:bg-[#2a2a28]'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Summary (5 of 12) */}
        <div className="lg:col-span-5 bg-[#1c1c1a] border border-[#B99A63]/30 p-6 md:p-8 flex flex-col gap-4">
          <h2 className="font-serif text-2xl text-[#e5e2de] pb-3 border-b border-[#4d463a]/30">
            Buyurtma Xulosasi
          </h2>

          <div className="divide-y divide-[#4d463a]/25 max-h-60 overflow-y-auto">
            {items.map((item) => (
              <div key={item.dish.id} className="py-3 flex justify-between items-center text-xs">
                <div>
                  <span className="text-[#e5e2de] font-medium block">
                    {item.dish.name[locale] || item.dish.name.uz}
                  </span>
                  <span className="text-[10px] text-[#A99A81]">
                    {item.quantity} dona × {formatPrice(item.dish.price, locale)}
                  </span>
                </div>
                <span className="font-mono text-[#e4c287] font-semibold">
                  {formatPrice(item.dish.price * item.quantity, locale)}
                </span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#4d463a]/30 space-y-2 text-xs text-[#A99A81]">
            <div className="flex justify-between">
              <span>Oraliq hisob:</span>
              <span className="font-mono text-[#e5e2de]">{formatPrice(subtotal, locale)}</span>
            </div>
            <div className="flex justify-between">
              <span>Xizmat ko‘rsatish (10%):</span>
              <span className="font-mono text-[#e5e2de]">{formatPrice(serviceFee, locale)}</span>
            </div>
            <div className="flex justify-between">
              <span>Yetkazib berish xizmati:</span>
              <span className="font-mono text-[#e5e2de]">{formatPrice(deliveryFee, locale)}</span>
            </div>
            <div className="pt-3 border-t border-[#4d463a]/30 flex justify-between items-baseline">
              <span className="font-serif text-lg text-[#e5e2de]">Jami to‘lov:</span>
              <span className="font-serif text-2xl text-[#e4c287] font-bold font-mono">
                {formatPrice(grandTotal, locale)}
              </span>
            </div>
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full mt-4 flex items-center justify-center gap-2">
            <span>Buyurtmani Tasdiqlash</span>
            <ArrowRight className="w-4 h-4" />
          </Button>

          <div className="mt-2 text-center text-[10px] text-[#A99A81] flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#B99A63]" />
            <span>Xavfsiz va shifrlangan to‘lov tizimi</span>
          </div>
        </div>
      </form>
    </div>
  );
}
