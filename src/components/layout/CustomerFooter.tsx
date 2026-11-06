import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
import { useI18n } from '@/src/i18n/context';

export function CustomerFooter() {
  const { t } = useI18n();

  return (
    <footer className="w-full bg-[#0e0e0c] border-t border-[#B99A63]/15">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-[0.2em] text-[#e4c287] uppercase">
                REUGARI
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#A99A81]">
                {t('brand.tagline', 'Gastronomik Restoran')}
              </span>
            </div>
            <p className="text-xs text-[#A99A81] leading-relaxed">
              Ipak yo‘lining qadimiy me’moriy an’analari va zamonaviy o‘zbek pazandachiligining oliy uyg‘unligi.
            </p>
            <div className="flex items-center gap-4 pt-2 text-[#A99A81]">
              <span className="hover:text-[#e4c287] cursor-pointer transition-colors" title="Manzil">
                <MapPin className="w-4 h-4" />
              </span>
              <a href="tel:+998712008800" className="hover:text-[#e4c287] transition-colors" title="Telefon">
                <Phone className="w-4 h-4" />
              </a>
              <a href="mailto:concierge@reugari.uz" className="hover:text-[#e4c287] transition-colors" title="Pochta">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Address & Contact */}
          <div className="flex flex-col space-y-2">
            <span className="text-[11px] font-semibold text-[#e4c287] uppercase tracking-[0.2em] mb-2">
              Manzil va Aloqa
            </span>
            <p className="text-xs text-[#A99A81] leading-relaxed">
              {t('contact.address', 'Toshkent shahri, Mirobod tumani, Afrosiyob ko‘chasi, 14-uy')}
            </p>
            <p className="text-xs text-[#A99A81] pt-1 font-mono">
              {t('contact.phone', '+998 71 200 88 00')}
            </p>
            <p className="text-xs text-[#A99A81]">
              {t('contact.email', 'concierge@reugari.uz')}
            </p>
          </div>

          {/* Column 3: Working Hours */}
          <div className="flex flex-col space-y-2">
            <span className="text-[11px] font-semibold text-[#e4c287] uppercase tracking-[0.2em] mb-2">
              Ish Vaqti
            </span>
            <p className="text-xs text-[#A99A81]">
              <strong className="text-[#e5e2de] font-medium block">Dushanba – Payshanba:</strong>
              18:00 – 00:00
            </p>
            <p className="text-xs text-[#A99A81] pt-1">
              <strong className="text-[#e5e2de] font-medium block">Juma – Yakshanba:</strong>
              17:00 – 01:00
            </p>
            <p className="text-[10px] text-[#A99A81] uppercase tracking-wider pt-2">
              Dress-kod: Elegant Casual
            </p>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col space-y-3">
            <span className="text-[11px] font-semibold text-[#e4c287] uppercase tracking-[0.2em]">
              Xabarnoma
            </span>
            <p className="text-xs text-[#A99A81] leading-relaxed">
              Mavsumiy degustatsiya menyulari va maxsus oqshomlardan xabardor bo‘ling.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
              <div className="bg-[#1c1c1a] border border-[#4d463a]/40 px-3 py-2 flex items-center justify-between">
                <input
                  type="email"
                  placeholder="Elektron manzilingiz"
                  className="bg-transparent w-full text-xs text-[#e5e2de] placeholder:text-[#998f81] focus:outline-none"
                />
                <button
                  type="submit"
                  className="text-[#B99A63] hover:text-[#e4c287] transition-colors p-1"
                  aria-label="Obuna bo'lish"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <span className="text-[9px] text-[#A99A81]">
                Maxfiylik siyosati kafolatlanadi.
              </span>
            </form>
          </div>
        </div>

        {/* Footer Bottom Line */}
        <div className="pt-8 border-t border-[#4d463a]/25 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] uppercase tracking-[0.15em] text-[#998f81]">
            © 2025 REUGARI. Barcha huquqlar himoyalangan.
          </span>
          <div className="flex items-center gap-6">
            <Link
              to="/about"
              className="text-[10px] uppercase tracking-[0.15em] text-[#998f81] hover:text-[#e4c287] transition-colors"
            >
              Biz haqimizda
            </Link>
            <Link
              to="/contact"
              className="text-[10px] uppercase tracking-[0.15em] text-[#998f81] hover:text-[#e4c287] transition-colors"
            >
              Aloqa
            </Link>
            <Link
              to="/admin"
              className="text-[10px] uppercase tracking-[0.15em] text-[#B99A63] hover:underline"
            >
              Admin Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
