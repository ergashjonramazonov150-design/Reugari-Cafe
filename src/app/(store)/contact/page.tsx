import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { useI18n } from '@/src/i18n/context';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';

export default function ContactPage() {
  const { t } = useI18n();
  const [isSent, setIsSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-3 mb-3">
          <span className="w-8 h-[1px] bg-[#B99A63]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#e4c287]">
            Bog‘lanish
          </span>
          <span className="w-8 h-[1px] bg-[#B99A63]" />
        </div>
        <h1 className="font-serif text-4xl md:text-6xl text-[#e5e2de]">
          Manzil va Aloqa
        </h1>
        <p className="text-xs md:text-sm text-[#A99A81] mt-2">
          Savollaringiz, takliflaringiz yoki maxsus tadbirlar bo‘yicha konsyerj xizmatimiz bilan bog‘laning.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Contact Details (5 of 12) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-8 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#20201e] border border-[#B99A63]/30 text-[#B99A63]">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#e5e2de]">Restoran Manzili</h3>
                <p className="text-xs text-[#A99A81] mt-1 leading-relaxed">
                  Toshkent shahri, Mirobod tumani,<br />
                  Afrosiyob ko‘chasi, 14-uy
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#20201e] border border-[#B99A63]/30 text-[#B99A63]">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#e5e2de]">Telefon va Bron</h3>
                <p className="text-xs text-[#A99A81] mt-1 font-mono">
                  +998 71 200 88 00
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#20201e] border border-[#B99A63]/30 text-[#B99A63]">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#e5e2de]">Elektron Pochta</h3>
                <p className="text-xs text-[#A99A81] mt-1">
                  concierge@reugari.uz
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#20201e] border border-[#B99A63]/30 text-[#B99A63]">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#e5e2de]">Ish Rejimi</h3>
                <p className="text-xs text-[#A99A81] mt-1">
                  Dushanba – Payshanba: 18:00 – 00:00<br />
                  Juma – Yakshanba: 17:00 – 01:00
                </p>
                <p className="text-[10px] text-[#B99A63] uppercase tracking-wider mt-2">
                  Dress-kod: Elegant Casual
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form (7 of 12) */}
        <div className="lg:col-span-7 bg-[#1c1c1a] border border-[#B99A63]/30 p-8 md:p-12 shadow-2xl">
          <h2 className="font-serif text-2xl text-[#e5e2de] mb-6 pb-3 border-b border-[#4d463a]/30">
            Xabar Yuborish
          </h2>

          {isSent ? (
            <div className="py-12 flex flex-col items-center text-center gap-3 animate-in fade-in-0">
              <div className="w-12 h-12 bg-[#B99A63]/20 border border-[#B99A63] text-[#e4c287] flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-[#B99A63]" />
              </div>
              <h3 className="font-serif text-2xl text-[#e4c287]">Xabaringiz Qabul Qilindi</h3>
              <p className="text-xs text-[#A99A81] max-w-sm">
                Konsyerj xizmatimiz tez orada ko‘rib chiqadi va sizga javob qaytaradi.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setIsSent(false);
                  setForm({ name: '', email: '', message: '' });
                }}
              >
                Yangi xabar yozish
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSend} className="flex flex-col gap-5">
              <Input
                label="Ismingiz"
                placeholder="Ismingizni kiriting"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
              />
              <Input
                label="Elektron pochta yoki telefon"
                placeholder="misol@reugari.uz yoki +998 90..."
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A99A81]">
                  Xabar matni
                </label>
                <textarea
                  rows={4}
                  placeholder="Xabaringiz, banket taklifi yoki savolingiz..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[#20201e] border border-[#4d463a]/30 p-3 text-xs text-[#E8DDC7] placeholder:text-[#998f81]/60 focus:border-[#B99A63] focus:outline-none resize-none transition-colors"
                  required
                />
              </div>

              <Button type="submit" variant="primary" size="lg" className="flex items-center justify-center gap-2 mt-2">
                <Send className="w-3.5 h-3.5" />
                <span>Xabarni Yuborish</span>
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
