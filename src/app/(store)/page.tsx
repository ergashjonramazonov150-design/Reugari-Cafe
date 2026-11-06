import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Calendar, Sparkles, MapPin, Award, ArrowRight } from 'lucide-react';
import { useI18n } from '@/src/i18n/context';
import { INITIAL_DISHES } from '@/src/lib/constants';
import { DishCard } from '@/src/features/menu/DishCard';
import { ReservationBookingForm } from '@/src/features/reservations/ReservationBookingForm';

export default function HomePage() {
  const { t } = useI18n();
  const featuredDishes = INITIAL_DISHES.slice(0, 4);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 md:px-8 border-b border-[#B99A63]/20">
        {/* Subtle background glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#B99A63]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center py-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-[#B99A63]" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#e4c287]">
              Toshkent • Oliy Gastronomiya
            </span>
            <span className="w-8 h-[1px] bg-[#B99A63]" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#e5e2de] tracking-tight leading-[1.08] mb-6">
            Sharqona Mehmondo‘stlik va Zamonaviy Nafosat
          </h1>

          <p className="text-base md:text-lg text-[#d0c5b6] max-w-2xl font-light leading-relaxed mb-10">
            Ipak yo‘lining qadimiy pazandachilik sirlari va zamonaviy gastronomik san’at uyg‘unligi. Bosh oshpazimiz tomonidan tayyorlangan betakror milliy taomlar.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/menu"
              className="bg-[#b99a63] text-[#412d01] hover:bg-[#e4c287] px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all flex items-center gap-2"
            >
              <Utensils className="w-4 h-4" />
              <span>Taomlar Menyusini Ko‘rish</span>
            </Link>
            <Link
              to="/reservations"
              className="bg-transparent text-[#e5e2de] border border-[#B99A63]/50 hover:border-[#B99A63] hover:bg-[#B99A63]/10 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#B99A63]" />
              <span>Stolni Band Qilish</span>
            </Link>
          </div>

          {/* Quick Metrics Bar below hero */}
          <div className="mt-16 pt-8 border-t border-[#4d463a]/30 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl text-center">
            <div className="flex flex-col">
              <span className="font-serif text-2xl text-[#e4c287]">100%</span>
              <span className="text-[10px] text-[#A99A81] uppercase tracking-widest mt-1">
                Halol Masalliqlar
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl text-[#e4c287]">Zarafshon</span>
              <span className="text-[10px] text-[#A99A81] uppercase tracking-widest mt-1">
                Tog‘ Ziravorlari
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl text-[#e4c287]">VIP</span>
              <span className="text-[10px] text-[#A99A81] uppercase tracking-widest mt-1">
                Xosxonalar & Ayvon
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl text-[#e4c287]">11:00 — 23:00</span>
              <span className="text-[10px] text-[#A99A81] uppercase tracking-widest mt-1">
                Har Kuni Ochiq
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#B99A63] mb-2 font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Saralangan Kolleksiya</span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#e5e2de] tracking-tight">
              Oshpazimiz Tavsiya Etadi
            </h2>
          </div>
          <Link
            to="/menu"
            className="text-xs uppercase tracking-[0.18em] text-[#e4c287] hover:underline flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>Barcha taomlarni ko‘rish</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      </section>

      {/* Culinary Narrative / Vignette Section */}
      <section className="w-full bg-[#0e0e0c] border-y border-[#B99A63]/20 py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#B99A63]" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e4c287]">
                Gastronomik Falsafa
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-[#e5e2de] leading-tight">
              Toshkentning Asil Dasturxoni
            </h2>
            <p className="text-sm text-[#A99A81] leading-relaxed">
              REUGARI — bu shunchaki restoran emas, balki asrlar davomida shakllangan o‘zbek mehmondo‘stligining oliy ko‘rinishidir. Buxoro va Samarqandning qadimiy me’moriy ohanglaridan ilhomlangan interyer, mayin sham yorug‘i va Zarafshon tog‘larining sarxil giyohlari bilan boyitilgan taomlar har bir oqshomni tantanaga aylantiradi.
            </p>
            <div className="p-4 bg-[#1c1c1a] border-l-2 border-[#B99A63] flex flex-col gap-1">
              <p className="font-serif text-base italic text-[#e4c287]">
                "Haqiqiy taom — bu qalb bilan berilgan mehmondo‘stlik in’omidir."
              </p>
              <span className="text-[10px] uppercase tracking-wider text-[#A99A81] mt-1">
                Bosh oshpaz Jamshid Rahimov
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 bg-[#1c1c1a] border border-[#B99A63]/30 p-8 flex flex-col gap-6">
            <h3 className="font-serif text-2xl text-[#e4c287]">
              Bizning Qadriyatlarimiz
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#20201e] border border-[#4d463a]/40 text-[#B99A63]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#e5e2de] uppercase tracking-wider">
                    Faqat Tabiiy Masalliqlar
                  </h4>
                  <p className="text-xs text-[#A99A81] mt-1">
                    Muzlatilmagan tog‘ qo‘zichog‘i go‘shti, haqiqiy sariq sabzi va toza zaytun yog‘i.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#20201e] border border-[#4d463a]/40 text-[#B99A63]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#e5e2de] uppercase tracking-wider">
                    Toshkentning Markazida
                  </h4>
                  <p className="text-xs text-[#A99A81] mt-1">
                    Afrosiyob ko‘chasidagi sokin va nufuzli maskan, qulay avtoturargoh bilan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Reservation Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto w-full" id="bron">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e4c287]">
            Eksklyuziv Oqshom
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#e5e2de] mt-2 mb-4">
            Stolni Band Qilish
          </h2>
          <p className="text-xs text-[#A99A81] leading-relaxed">
            Qadrdonlaringiz davrasidagi samimiy uchrashuv yoki rasmiy kechki ovqat uchun oldindan stol buyurtma qiling.
          </p>
        </div>

        <ReservationBookingForm />
      </section>
    </div>
  );
}
