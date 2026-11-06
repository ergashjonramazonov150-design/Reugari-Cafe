import React from 'react';
import { Phone, Wine, Users, Sparkles, Clock, MapPin } from 'lucide-react';
import { useI18n } from '@/src/i18n/context';
import { ReservationBookingForm } from '@/src/features/reservations/ReservationBookingForm';

export default function ReservationsPage() {
  const { t } = useI18n();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Information (5 of 12) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#B99A63]" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e4c287]">
              Eksklyuziv Xizmat
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl text-[#e5e2de] tracking-tight">
            Stolni Band Qilish
          </h1>

          <p className="text-sm text-[#A99A81] leading-relaxed">
            Oila a’zolaringiz va qadrdonlaringiz bilan unutilmas oqshomni oldindan rejalashtiring. Har bir mehmonimiz uchun maxsus samimiyat va oliy darajadagi e’zoz kafolatlanadi.
          </p>

          <div className="space-y-4 pt-4 border-t border-[#4d463a]/30">
            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-[#1c1c1a] border border-[#4d463a]/40 text-[#B99A63]">
                <Wine className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#e5e2de]">Shaxsiy Somelye va Konsyerj</h3>
                <p className="text-xs text-[#A99A81] mt-0.5">
                  Taomingizga mos sarxil tog‘ giyohlari, meva sharbatlari va an’anaviy choylar taqdim etiladi.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-[#1c1c1a] border border-[#4d463a]/40 text-[#B99A63]">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#e5e2de]">Alohida Xosxonalar (VIP)</h3>
                <p className="text-xs text-[#A99A81] mt-0.5">
                  Sharqona yog‘och o‘ymakorligi va shohona gilamlar bilan bezatilgan alohida xonalar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2.5 bg-[#1c1c1a] border border-[#4d463a]/40 text-[#B99A63]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#e5e2de]">Dasturxon Vaqti</h3>
                <p className="text-xs text-[#A99A81] mt-0.5">
                  Tushlik va kechki dasturxon soat 11:00 dan 23:00 gacha xizmatingizda.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Call Box */}
          <div className="p-5 bg-[#1c1c1a] border border-[#B99A63]/30 flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#B99A63]" />
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#A99A81] block">Tezkor aloqa</span>
                <span className="font-mono text-sm text-[#e5e2de] font-semibold">+998 71 200 88 00</span>
              </div>
            </div>
            <a
              href="tel:+998712008800"
              className="text-[10px] uppercase tracking-wider text-[#B99A63] hover:underline"
            >
              Qo‘ng‘iroq qilish
            </a>
          </div>
        </div>

        {/* Right Form (7 of 12) */}
        <div className="lg:col-span-7">
          <ReservationBookingForm />
        </div>
      </div>
    </div>
  );
}
