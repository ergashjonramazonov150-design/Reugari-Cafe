import React, { useState } from 'react';
import { FileText, Save, CheckCircle2 } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';

export default function AdminContentPage() {
  const [saved, setSaved] = useState(false);
  const [heroHeading, setHeroHeading] = useState('Sharqona Mehmondo‘stlik va Zamonaviy Nafosat');
  const [heroSubtitle, setHeroSubtitle] = useState('Ipak yo‘lining qadimiy pazandachilik sirlari va zamonaviy gastronomik san’at uyg‘unligi. Bosh oshpazimiz tomonidan tayyorlangan betakror milliy taomlar.');
  const [chefQuote, setChefQuote] = useState('Haqiqiy taom — bu qalb bilan berilgan mehmondo‘stlik in’omidir.');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="flex flex-col w-full p-6 md:p-8 gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#4d463a]/30">
        <div>
          <span className="text-[10px] uppercase text-[#e4c287] tracking-wider font-semibold">
            Sayt Matnlari & Tahrir
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-[#e5e2de] tracking-tight">
            Kontent Boshqaruvi
          </h1>
          <p className="text-xs text-[#d0c5b6] mt-1">
            Bosh sahifa shiorlari, oshpaz sharhi va sahifalar matnlarini tahrirlash
          </p>
        </div>

        {saved && (
          <div className="flex items-center gap-1.5 text-xs text-[#e4c287]">
            <CheckCircle2 className="w-4 h-4" />
            <span>O‘zgarishlar saqlandi!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="max-w-4xl flex flex-col gap-6">
        <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col gap-4">
          <h2 className="font-serif text-xl text-[#e4c287] pb-2 border-b border-[#4d463a]/25">
            Bosh Sahifa Hero Bloki
          </h2>
          <Input
            label="Bosh sarlavha (H1)"
            value={heroHeading}
            onChange={(e) => setHeroHeading(e.target.value)}
            required
          />
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A99A81]">
              Ta’rif matni
            </label>
            <textarea
              rows={3}
              value={heroSubtitle}
              onChange={(e) => setHeroSubtitle(e.target.value)}
              className="w-full bg-[#20201e] border border-[#4d463a]/30 p-3 text-xs text-[#e5e2de] focus:border-[#B99A63] focus:outline-none resize-none"
            />
          </div>
        </div>

        <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col gap-4">
          <h2 className="font-serif text-xl text-[#e4c287] pb-2 border-b border-[#4d463a]/25">
            Bosh Oshpaz Sharhi
          </h2>
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A99A81]">
              Oshpaz iqtibosi (Quote)
            </label>
            <textarea
              rows={2}
              value={chefQuote}
              onChange={(e) => setChefQuote(e.target.value)}
              className="w-full bg-[#20201e] border border-[#4d463a]/30 p-3 text-xs text-[#e5e2de] focus:border-[#B99A63] focus:outline-none resize-none"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit" variant="primary" className="flex items-center gap-2">
            <Save className="w-4 h-4" />
            <span>O‘zgarishlarni Saqlash</span>
          </Button>
        </div>
      </form>
    </div>
  );
}
