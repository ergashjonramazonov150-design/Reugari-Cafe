import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Utensils, Compass, Sparkles } from 'lucide-react';
import { useI18n } from '@/src/i18n/context';

export default function AboutPage() {
  const { t } = useI18n();

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col gap-16">
      {/* Intro */}
      <section className="text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-[1px] bg-[#B99A63]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e4c287]">
            Tarix va Falsafa
          </span>
          <span className="w-8 h-[1px] bg-[#B99A63]" />
        </div>
        <h1 className="font-serif text-4xl md:text-6xl text-[#e5e2de] mb-6">
          REUGARI — Qadimiy Ipak Yo‘lining Zamonaviy Nafosati
        </h1>
        <p className="text-sm md:text-base text-[#d0c5b6] font-light leading-relaxed">
          Biz O‘zbekistonning boy mehmondo‘stlik an’analarini yangi bosqichga olib chiqib, Buxoro va Samarqand me’morchiligi, o‘yma yong‘oq daraxti va zarhal mis jilolarini zamonaviy gastronomiya bilan uyg‘unlashtirdik.
        </p>
      </section>

      {/* Grid of 3 pillars */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-8 flex flex-col gap-4">
          <div className="w-12 h-12 bg-[#20201e] border border-[#B99A63]/30 text-[#B99A63] flex items-center justify-center">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-[#e5e2de]">An’anaviy Retseptlar</h3>
          <p className="text-xs text-[#A99A81] leading-relaxed">
            Har bir osh, shashlik va sho‘rva asrlar davomida sayqallangan uslubda, faqat tabiiy ziravorlar va sarxil mahsulotlar bilan tayyorlanadi.
          </p>
        </div>

        <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-8 flex flex-col gap-4">
          <div className="w-12 h-12 bg-[#20201e] border border-[#B99A63]/30 text-[#B99A63] flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-[#e5e2de]">Mukammal Muhit</h3>
          <p className="text-xs text-[#A99A81] leading-relaxed">
            Sokin sham yorug‘i, mayin sharqona ohanglar va samimiy e’tibor har bir tashrifingizni unutilmas taassurotga aylantiradi.
          </p>
        </div>

        <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-8 flex flex-col gap-4">
          <div className="w-12 h-12 bg-[#20201e] border border-[#B99A63]/30 text-[#B99A63] flex items-center justify-center">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-2xl text-[#e5e2de]">100% Halol Kafolati</h3>
          <p className="text-xs text-[#A99A81] leading-relaxed">
            Barcha go‘sht va parhez mahsulotlari qat’iy halol mezonlari bo‘yicha tanlab olinadi va tekshiriladi.
          </p>
        </div>
      </section>

      {/* Chef Profile Section */}
      <section className="bg-[#1c1c1a] border border-[#B99A63]/30 p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">
        <div className="w-32 h-32 md:w-44 md:h-44 bg-[#2a2a28] border border-[#B99A63]/40 flex items-center justify-center text-[#B99A63] shrink-0 font-serif text-4xl">
          JR
        </div>
        <div className="flex flex-col gap-3 text-left">
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#e4c287] font-semibold">
            Bosh Oshpaz
          </span>
          <h2 className="font-serif text-3xl text-[#e5e2de]">Jamshid Rahimov</h2>
          <p className="text-xs text-[#A99A81] leading-relaxed">
            20 yildan ortiq tajribaga ega usta oshpaz, Xalqaro Gastronomiya jamiyati a’zosi. Jamshid o‘zbek oshxonasining qadimiy an’analarini zamonaviy tushunchalar bilan boyitib, har bir taomda betakror lazzat uyg‘unligini yaratadi.
          </p>
          <div className="pt-2">
            <Link
              to="/menu"
              className="text-xs uppercase tracking-wider text-[#B99A63] hover:underline"
            >
              Uning mualliflik menyusini ko‘rish →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
