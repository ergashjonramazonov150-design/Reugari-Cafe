import React, { useState } from 'react';
import { Settings, Save, CheckCircle2, Database, Shield } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { RESTAURANT_INFO } from '@/src/lib/constants';
import { isSupabaseConfigured, DB_TABLES } from '@/src/lib/supabase';

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false);
  const [phone, setPhone] = useState(RESTAURANT_INFO.phone);
  const [email, setEmail] = useState(RESTAURANT_INFO.email);
  const [address, setAddress] = useState(RESTAURANT_INFO.address.uz);
  const [serviceFeeRate, setServiceFeeRate] = useState('10');
  const [deliveryFee, setDeliveryFee] = useState('25000');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const hasSupabase = isSupabaseConfigured();

  return (
    <div className="flex flex-col w-full p-6 md:p-8 gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#4d463a]/30">
        <div>
          <span className="text-[10px] uppercase text-[#e4c287] tracking-wider font-semibold">
            Tizim Sozlamalari
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-[#e5e2de] tracking-tight">
            Restoran va Tizim Sozlamalari
          </h1>
          <p className="text-xs text-[#d0c5b6] mt-1">
            Restoran kontaktlari, xizmat ko‘rsatish stavkalari va ma’lumotlar bazasi integratsiyasi
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-1.5 text-xs text-[#e4c287]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Sozlamalar saqlandi!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="max-w-4xl flex flex-col gap-8">
        {/* Restaurant Contact Settings */}
        <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col gap-4">
          <h2 className="font-serif text-xl text-[#e4c287] pb-2 border-b border-[#4d463a]/25">
            Restoran Rekvizitlari
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Telefon raqami"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <Input
              label="Elektron pochta"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Input
            label="Manzil (Toshkent)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        {/* Financial Rules */}
        <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col gap-4">
          <h2 className="font-serif text-xl text-[#e4c287] pb-2 border-b border-[#4d463a]/25">
            Moliyaviy va Yetkazish Stavkalari
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="Xizmat haqi stavkasi (%)"
              type="number"
              value={serviceFeeRate}
              onChange={(e) => setServiceFeeRate(e.target.value)}
              required
            />
            <Input
              label="Standart yetkazish to‘lovi (so‘m)"
              type="number"
              value={deliveryFee}
              onChange={(e) => setDeliveryFee(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Supabase Integration Readiness Status */}
        <div className="bg-[#1c1c1a] border border-[#B99A63]/30 p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between pb-2 border-b border-[#4d463a]/25">
            <div className="flex items-center gap-2.5">
              <Database className="w-5 h-5 text-[#B99A63]" />
              <h2 className="font-serif text-xl text-[#e5e2de]">
                Supabase Integratsiyasi (2-bosqich)
              </h2>
            </div>
            <span
              className={`px-2.5 py-1 text-[10px] uppercase font-mono font-semibold border ${
                hasSupabase
                  ? 'bg-[#B99A63]/20 text-[#e4c287] border-[#B99A63]'
                  : 'bg-[#20201e] text-[#A99A81] border-[#4d463a]/40'
              }`}
            >
              {hasSupabase ? 'Ulangan' : 'Tayyorlangan (Keyingi bosqich)'}
            </span>
          </div>

          <p className="text-xs text-[#A99A81] leading-relaxed">
            REUGARI loyihasi arxitekturasi Supabase PostgreSQL, Authentication va Storage bilan to‘liq integratsiyalashishga tayyor holatda qurildi. Kalitlar (.env yoki secrets) kiritilishi bilan ma’lumotlar avtomatik tarzda bulutli bazaga ulanadi.
          </p>

          <div className="p-3 bg-[#20201e] border border-[#4d463a]/30 text-xs font-mono text-[#cbc6be]">
            <span className="text-[#A99A81] block mb-1">Mavjud jadvallar sxemasi:</span>
            <span>{Object.values(DB_TABLES).join(' · ')}</span>
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" variant="primary" className="flex items-center gap-2">
            <Save className="w-4 h-4" />
            <span>Sozlamalarni Saqlash</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
