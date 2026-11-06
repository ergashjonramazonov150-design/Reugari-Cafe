import React from 'react';
import { Link } from 'react-router-dom';
import {
  Calendar as CalendarIcon,
  Download,
  RotateCw,
  TrendingUp,
  Receipt,
  CookingPot,
  Users,
  CreditCard,
  Flame,
  ArrowRight,
  MoreVertical,
} from 'lucide-react';
import { useI18n } from '@/src/i18n/context';
import { INITIAL_DISHES, INITIAL_ORDERS, INITIAL_RESERVATIONS } from '@/src/lib/constants';
import { formatPrice } from '@/src/lib/utils';
import { Badge } from '@/src/components/ui/badge';

export default function AdminOverviewPage() {
  const { locale } = useI18n();

  return (
    <div className="flex flex-col w-full p-6 md:p-8 gap-8">
      {/* Sarlavha va Filtrlash Paneli */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 pb-4 border-b border-[#4d463a]/30">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <h1 className="font-serif text-3xl md:text-4xl text-[#e4c287] tracking-normal">
              Umumiy ko‘rinish
            </h1>
            <span className="w-2 h-2 rounded-full bg-[#B99A63]/80" />
          </div>
          <p className="text-xs text-[#d0c5b6]">
            Bugungi tushum, faol buyurtmalar va mehmonlar oqimi hisoboti
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center bg-[#20201e] border border-[#4d463a]/30 px-3.5 py-2 text-xs text-[#e5e2de] gap-2">
            <CalendarIcon className="w-4 h-4 text-[#B99A63]" />
            <span className="uppercase tracking-wider">Bugun, 24-may 2025</span>
          </div>

          <button
            type="button"
            className="flex items-center gap-1.5 bg-[#20201e] hover:bg-[#2a2a28] border border-[#4d463a]/30 px-3.5 py-2 text-xs text-[#cbc6be] uppercase tracking-wider transition-colors"
          >
            <Download className="w-4 h-4 text-[#B99A63]" />
            <span>Eksport (Excel/PDF)</span>
          </button>

          <button
            type="button"
            className="flex items-center gap-1.5 bg-[#b99a63] text-[#412d01] hover:bg-[#e4c287] px-4 py-2 text-xs uppercase tracking-wider font-semibold transition-colors"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Yangilash</span>
          </button>
        </div>
      </div>

      {/* 4 KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {/* KPI 1: Bugungi Tushum */}
        <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col justify-between hover:bg-[#20201e] transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase text-[#998f81] tracking-widest font-semibold">
                Bugungi tushum
              </span>
              <span className="font-serif text-2xl md:text-3xl text-[#e5e2de] font-mono">
                48 650 000 <span className="text-xs text-[#998f81] font-sans">so‘m</span>
              </span>
            </div>
            <div className="w-10 h-10 bg-[#2a2a28] border border-[#4d463a]/30 flex items-center justify-center text-[#B99A63]">
              <CreditCard className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-[#4d463a]/25 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-[#e4c287] text-xs">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+18.4% kechagiga nisbatan</span>
            </div>
            <span className="text-[11px] text-[#A99A81]">
              O‘rtacha chek: <strong className="text-[#cbc6be]">685 000 so‘m</strong>
            </span>
          </div>
        </div>

        {/* KPI 2: Jami Buyurtmalar */}
        <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col justify-between hover:bg-[#20201e] transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase text-[#998f81] tracking-widest font-semibold">
                Jami buyurtmalar
              </span>
              <span className="font-serif text-2xl md:text-3xl text-[#e5e2de] font-mono">
                71 <span className="text-xs text-[#998f81] font-sans">ta</span>
              </span>
            </div>
            <div className="w-10 h-10 bg-[#2a2a28] border border-[#4d463a]/30 flex items-center justify-center text-[#B99A63]">
              <Receipt className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-[#4d463a]/25 flex flex-col gap-1">
            <div className="flex items-center gap-1.5 text-[#e4c287] text-xs">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>+8 ta kutilmoqda</span>
            </div>
            <span className="text-[11px] text-[#A99A81]">
              52 ta yetkazildi • 11 ta tayyorlanmoqda
            </span>
          </div>
        </div>

        {/* KPI 3: Kutilayotgan Buyurtmalar */}
        <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col justify-between hover:bg-[#20201e] transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase text-[#998f81] tracking-widest font-semibold">
                Kutilayotgan buyurtmalar
              </span>
              <span className="font-serif text-2xl md:text-3xl text-[#e4c287] font-mono">
                11 <span className="text-xs text-[#998f81] font-sans">ta</span>
              </span>
            </div>
            <div className="w-10 h-10 bg-[#2a2a28] border border-[#4d463a]/30 flex items-center justify-center text-[#B99A63]">
              <CookingPot className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-[#4d463a]/25 flex flex-col gap-1">
            <div className="flex items-center gap-1 text-[#e4c287] text-xs font-semibold">
              <span>Tezlashtirish talabi: 3 ta</span>
            </div>
            <span className="text-[11px] text-[#A99A81]">
              Oshxona ustuvor ro‘yxatida
            </span>
          </div>
        </div>

        {/* KPI 4: Faol Bronlar */}
        <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col justify-between hover:bg-[#20201e] transition-colors">
          <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase text-[#998f81] tracking-widest font-semibold">
                Faol bronlar (Zal)
              </span>
              <span className="font-serif text-2xl md:text-3xl text-[#e5e2de] font-mono">
                24 <span className="text-xs text-[#998f81] font-sans">stol</span>
              </span>
            </div>
            <div className="w-10 h-10 bg-[#2a2a28] border border-[#4d463a]/30 flex items-center justify-center text-[#B99A63]">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <div className="mt-5 pt-3 border-t border-[#4d463a]/25 flex flex-col gap-1">
            <div className="flex items-center justify-between text-xs text-[#e4c287]">
              <span>92% bandlik darajasi</span>
              <span className="w-2 h-2 rounded-full bg-[#B99A63] animate-pulse" />
            </div>
            <span className="text-[11px] text-[#A99A81]">
              Jami mehmonlar: <strong className="text-[#cbc6be]">148 kishi</strong>
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid: Left (8/12) & Right (4/12) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column (8 / 12) */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          {/* Revenue Dynamic Bar Chart */}
          <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#4d463a]/25">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#998f81] font-semibold">
                  Moliyaviy tahlil
                </span>
                <h3 className="font-serif text-xl text-[#e5e2de]">
                  Daromad va tushum dinamikasi
                </h3>
              </div>
              <div className="flex items-center gap-1 bg-[#20201e] border border-[#4d463a]/30 p-1">
                <button className="px-3 py-1 text-[10px] uppercase text-[#d0c5b6] hover:text-[#e5e2de]">
                  Kunlik
                </button>
                <button className="px-3 py-1 text-[10px] uppercase bg-[#2a2a28] text-[#e4c287] font-bold">
                  Haftalik
                </button>
                <button className="px-3 py-1 text-[10px] uppercase text-[#d0c5b6] hover:text-[#e5e2de]">
                  Oylik
                </button>
              </div>
            </div>

            <div className="flex items-baseline justify-between flex-wrap gap-4">
              <div>
                <span className="text-[10px] uppercase text-[#998f81] tracking-wider">Joriy hafta</span>
                <p className="font-serif text-2xl text-[#e4c287] font-mono">
                  312 400 000 <span className="text-xs text-[#998f81]">so‘m</span>
                </p>
              </div>
              <div className="hidden sm:block">
                <span className="text-[10px] uppercase text-[#998f81] tracking-wider">O‘tgan hafta</span>
                <p className="text-sm text-[#cbc6be] font-mono">274 150 000 so‘m</p>
              </div>
              <div className="flex items-center gap-4 text-[10px] text-[#A99A81] uppercase tracking-wider">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#B99A63]" /> Naqd & Click
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 bg-[#353532]" /> Korporativ & Payme
                </span>
              </div>
            </div>

            {/* SVG Weekly Dynamic Chart */}
            <div className="w-full pt-2">
              <svg viewBox="0 0 700 200" className="w-full h-44 select-none">
                <line x1="0" x1-alt="0" x2="700" y1="40" y2="40" stroke="#4d463a" strokeOpacity="0.3" strokeDasharray="3 3" />
                <line x1="0" x1-alt="0" x2="700" y1="90" y2="90" stroke="#4d463a" strokeOpacity="0.3" strokeDasharray="3 3" />
                <line x1="0" x1-alt="0" x2="700" y1="140" y2="140" stroke="#4d463a" strokeOpacity="0.3" strokeDasharray="3 3" />
                <line x1="0" x1-alt="0" x2="700" y1="180" y2="180" stroke="#4d463a" strokeOpacity="0.5" />

                {/* Monday */}
                <rect x="40" y="85" width="28" height="95" fill="#353532" />
                <rect x="40" y="105" width="28" height="75" fill="#B99A63" />
                {/* Tuesday */}
                <rect x="135" y="70" width="28" height="110" fill="#353532" />
                <rect x="135" y="95" width="28" height="85" fill="#B99A63" />
                {/* Wednesday */}
                <rect x="230" y="60" width="28" height="120" fill="#353532" />
                <rect x="230" y="80" width="28" height="100" fill="#B99A63" />
                {/* Thursday */}
                <rect x="325" y="50" width="28" height="130" fill="#353532" />
                <rect x="325" y="68" width="28" height="112" fill="#B99A63" />
                {/* Friday */}
                <rect x="420" y="25" width="28" height="155" fill="#353532" />
                <rect x="420" y="42" width="28" height="138" fill="#B99A63" />
                {/* Saturday (Today) */}
                <rect x="515" y="10" width="28" height="170" fill="#353532" />
                <rect x="515" y="22" width="28" height="158" fill="#e4c287" />
                {/* Sunday */}
                <rect x="610" y="45" width="28" height="135" fill="#353532" />
                <rect x="610" y="65" width="28" height="115" fill="#B99A63" opacity="0.6" />
              </svg>
              <div className="grid grid-cols-7 text-center text-[10px] text-[#A99A81] uppercase tracking-wider mt-2">
                <span>Dush</span>
                <span>Sesh</span>
                <span>Chor</span>
                <span>Pay</span>
                <span>Juma</span>
                <span className="text-[#e4c287] font-bold">Shan (Bugun)</span>
                <span>Yak</span>
              </div>
            </div>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#4d463a]/25">
              <div className="flex items-center gap-2">
                <Receipt className="w-5 h-5 text-[#B99A63]" />
                <h3 className="font-serif text-xl text-[#e5e2de]">So‘nggi buyurtmalar</h3>
              </div>
              <Link
                to="/admin/orders"
                className="text-[10px] text-[#e4c287] hover:underline uppercase tracking-wider flex items-center gap-1 font-semibold"
              >
                <span>Barcha buyurtmalarni ko‘rish</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="w-full overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="text-[10px] uppercase tracking-wider text-[#998f81] border-b border-[#4d463a]/30">
                    <th className="py-2.5 px-3">ID</th>
                    <th className="py-2.5 px-3">Mijoz</th>
                    <th className="py-2.5 px-3">Taomlar</th>
                    <th className="py-2.5 px-3">To‘lov</th>
                    <th className="py-2.5 px-3">Summa</th>
                    <th className="py-2.5 px-3">Holat</th>
                    <th className="py-2.5 px-3 text-right">Amal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#4d463a]/20 text-[#cbc6be]">
                  {INITIAL_ORDERS.map((ord) => (
                    <tr key={ord.id} className="hover:bg-[#20201e] transition-colors">
                      <td className="py-3 px-3 font-mono text-[#e4c287] font-medium whitespace-nowrap">
                        {ord.orderNumber}
                      </td>
                      <td className="py-3 px-3 text-[#e5e2de] font-medium">
                        {ord.customerName}
                      </td>
                      <td className="py-3 px-3 text-[#A99A81]">
                        {ord.items.length} ta taom
                      </td>
                      <td className="py-3 px-3 uppercase text-[10px] font-mono">
                        {ord.paymentMethod}
                      </td>
                      <td className="py-3 px-3 font-mono font-medium text-[#e5e2de]">
                        {formatPrice(ord.total, locale)}
                      </td>
                      <td className="py-3 px-3">
                        <Badge
                          variant={
                            ord.status === 'delivered'
                              ? 'default'
                              : ord.status === 'delivering'
                              ? 'warning'
                              : 'gold'
                          }
                        >
                          {ord.status === 'preparing'
                            ? 'Tayyorlanmoqda'
                            : ord.status === 'delivering'
                            ? 'Yetkazilmoqda'
                            : ord.status === 'confirmed'
                            ? 'Tasdiqlandi'
                            : 'Yetkazildi'}
                        </Badge>
                      </td>
                      <td className="py-3 px-3 text-right">
                        <Link
                          to="/admin/orders"
                          className="p-1 text-[#998f81] hover:text-[#e4c287]"
                        >
                          <MoreVertical className="w-4 h-4 inline" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column (4 / 12) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Upcoming Table Reservations */}
          <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#4d463a]/25">
              <div>
                <span className="text-[10px] uppercase text-[#998f81] tracking-wider font-semibold">
                  Kechki dasturxon
                </span>
                <h3 className="font-serif text-xl text-[#e5e2de]">Stol bronlari</h3>
              </div>
              <Link
                to="/admin/reservations"
                className="text-[10px] text-[#e4c287] hover:underline uppercase tracking-wider"
              >
                Barchasi
              </Link>
            </div>

            <div className="flex flex-col divide-y divide-[#4d463a]/20">
              {INITIAL_RESERVATIONS.map((res) => (
                <div key={res.id} className="py-3 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg text-[#e4c287] font-mono">
                      {res.time}
                    </span>
                    <Badge variant={res.status === 'confirmed' ? 'gold' : 'default'}>
                      {res.status === 'confirmed' ? 'Tasdiqlangan' : 'Kutilmoqda'}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#e5e2de]">
                    <span className="font-medium">{res.guestName}</span>
                    <span className="text-[#A99A81]">{res.guestsCount}</span>
                  </div>
                  <span className="text-[11px] text-[#A99A81]">
                    {res.tableArea === 'vip_room'
                      ? 'VIP Xosxona #2'
                      : res.tableArea === 'window'
                      ? 'Asosiy zal, Deraza oldi'
                      : 'Oilaviy ayvon'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Popular Dishes */}
          <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#4d463a]/25">
              <div>
                <span className="text-[10px] uppercase text-[#998f81] tracking-wider font-semibold">
                  Kun talabi
                </span>
                <h3 className="font-serif text-xl text-[#e5e2de]">Ommabop taomlar</h3>
              </div>
              <Flame className="w-5 h-5 text-[#B99A63]" />
            </div>

            <div className="flex flex-col gap-3">
              {[
                { name: '1. To‘y oshi (Toshkentcha)', count: 142, revenue: '13 490 000 so‘m' },
                { name: '2. G‘ijduvoncha qiyma', count: 98, revenue: '8 330 000 so‘m' },
                { name: '3. Qozon kabob', count: 76, revenue: '9 120 000 so‘m' },
                { name: '4. Achchiq-chuchuk va Non', count: 180, revenue: 'Salat va issiq nonlar' },
              ].map((top, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs p-2.5 bg-[#20201e] border border-[#4d463a]/25">
                  <div className="flex flex-col">
                    <span className="text-[#e5e2de] font-medium">{top.name}</span>
                    <span className="text-[10px] text-[#A99A81]">{top.revenue}</span>
                  </div>
                  <span className="text-[#e4c287] font-mono font-semibold">{top.count} ta</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kitchen Load Widget */}
          <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase text-[#998f81] tracking-wider font-semibold">
                Oshxona yuki
              </span>
              <Badge variant="gold">Yuqori faollik</Badge>
            </div>
            <div className="flex items-baseline justify-between mt-1">
              <span className="font-serif text-3xl text-[#e4c287] font-mono">78%</span>
              <span className="text-xs text-[#cbc6be]">4 nafar oshpaz navbatchilikda</span>
            </div>
            <div className="w-full bg-[#24221D] h-2 overflow-hidden border border-[#4d463a]/30">
              <div className="bg-[#B99A63] h-full" style={{ width: '78%' }} />
            </div>
            <p className="text-[11px] text-[#A99A81]">
              O‘rtacha tayyorlash vaqti: 22 daqiqa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
