import React, { useState } from 'react';
import { Calendar as CalendarIcon, Clock, Users, CheckCircle2 } from 'lucide-react';
import { useI18n } from '@/src/i18n/context';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';

export function ReservationBookingForm() {
  const { t } = useI18n();
  const [guestCount, setGuestCount] = useState('3-4');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    notes: '',
  });

  const guestOptions = [
    { id: '1-2', label: '1-2 kishi' },
    { id: '3-4', label: '3-4 kishi' },
    { id: '5-8', label: '5-8 kishi' },
    { id: 'large', label: 'Katta marosim' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="bg-[#1c1c1a] border border-[#B99A63]/30 p-8 md:p-12 shadow-2xl relative">
      {isSubmitted ? (
        <div className="py-12 flex flex-col items-center text-center gap-4 animate-in fade-in-0 duration-300">
          <div className="w-14 h-14 bg-[#B99A63]/20 border border-[#B99A63] text-[#e4c287] flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-[#B99A63]" />
          </div>
          <h3 className="font-serif text-3xl text-[#e4c287]">
            Rahmat, {formData.name || 'hurmatli mehmon'}!
          </h3>
          <p className="text-sm text-[#A99A81] max-w-md leading-relaxed">
            Stolni band qilish so‘rovingiz qabul qilindi. Restoran ma’muri 10 daqiqa ichida bronni tasdiqlash uchun bog‘lanadi.
          </p>
          <div className="p-4 bg-[#20201e] border border-[#4d463a]/40 text-xs text-[#cbc6be] font-mono mt-2">
            Bron raqami: #RES-{Math.floor(100 + Math.random() * 900)} • Sana: {formData.date} • {formData.time}
          </div>
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setIsSubmitted(false);
              setFormData({ ...formData, name: '', phone: '', notes: '' });
            }}
            className="mt-4"
          >
            Yana boshqa stol band qilish
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Ismingiz"
              placeholder="Ism-familiyangizni kiriting"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <Input
              label="Telefon raqamingiz"
              type="tel"
              placeholder="+998 90 123 45 67"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
            <Input
              label="Sana"
              type="date"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
            <Input
              label="Vaqt"
              placeholder="18:00, 19:30, 20:00..."
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              required
            />
          </div>

          {/* Guest Count Selection */}
          <div className="flex flex-col gap-2.5">
            <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A99A81]">
              Mehmonlar soni
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {guestOptions.map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setGuestCount(opt.id)}
                  className={`py-3 px-3 text-center text-xs uppercase tracking-wider transition-colors cursor-pointer border ${
                    guestCount === opt.id
                      ? 'bg-[#B99A63] text-[#171715] font-semibold border-[#B99A63]'
                      : 'bg-[#20201e] text-[#cbc6be] border-[#4d463a]/40 hover:bg-[#2a2a28]'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Special wishes */}
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A99A81]">
              Qo‘shimcha istaklar
            </label>
            <textarea
              rows={3}
              placeholder="Alohida xona (VIP), sokin burchak, bayramona bezak yoki maxsus menyu..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full bg-[#20201e] border border-[#4d463a]/30 p-3 text-xs text-[#E8DDC7] placeholder:text-[#998f81]/60 focus:border-[#B99A63] focus:outline-none resize-none transition-colors"
            />
          </div>

          <Button type="submit" variant="primary" size="lg" className="w-full mt-2">
            Band qilishni tasdiqlash
          </Button>

          <span className="text-[10px] text-[#A99A81] text-center tracking-wide">
            Buyurtmangiz kelib tushishi bilan ma’murimiz 10 daqiqa ichida telefon orqali tasdiqlaydi.
          </span>
        </form>
      )}
    </div>
  );
}
