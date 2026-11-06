import React, { useState } from 'react';
import { Calendar, Clock, Users, Phone, CheckCircle2, XCircle, Search, Filter } from 'lucide-react';
import { INITIAL_RESERVATIONS } from '@/src/lib/constants';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/src/components/ui/table';
import type { Reservation, ReservationStatus } from '@/src/types';

export default function AdminReservationsPage() {
  const [reservations, setReservations] = useState<Reservation[]>(INITIAL_RESERVATIONS);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const handleStatusChange = (id: string, newStatus: ReservationStatus) => {
    setReservations((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: newStatus } : r))
    );
  };

  const filtered = reservations.filter((r) => {
    if (statusFilter !== 'all' && r.status !== statusFilter) return false;
    if (search.trim()) {
      const q = search.toLowerCase();
      return r.guestName.toLowerCase().includes(q) || r.guestPhone.includes(q) || r.reservationNumber.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <div className="flex flex-col w-full p-6 md:p-8 gap-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#4d463a]/30">
        <div>
          <span className="text-[10px] uppercase text-[#e4c287] tracking-wider font-semibold">
            Kechki & Tushlik Dasturxoni
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-[#e5e2de] tracking-tight">
            Stol Bronlari Boshqaruvi
          </h1>
          <p className="text-xs text-[#d0c5b6] mt-1">
            Mehmonlar tashrifi, stol joylashuvi va tasdiqlangan vaqt monitoringi
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-[#1c1c1a] border border-[#4d463a]/30 px-3 py-1.5 text-xs text-[#e5e2de] flex items-center gap-2">
            <Users className="w-4 h-4 text-[#B99A63]" />
            <span>Bandlik: <strong>92%</strong></span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-3 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="relative flex-1 w-full flex items-center bg-[#20201e] border border-[#4d463a]/30 px-3 py-2">
          <Search className="w-4 h-4 text-[#998f81] mr-2 shrink-0" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Mehmon ismi, telefon yoki bron raqami..."
            className="w-full bg-transparent text-xs text-[#e5e2de] placeholder:text-[#998f81] focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2">
          {['all', 'confirmed', 'pending', 'cancelled'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 text-xs uppercase tracking-wider border ${
                statusFilter === st
                  ? 'bg-[#B99A63] text-[#171715] font-semibold border-[#B99A63]'
                  : 'bg-[#20201e] text-[#cbc6be] border-[#4d463a]/30 hover:bg-[#2a2a28]'
              }`}
            >
              {st === 'all'
                ? 'Barchasi'
                : st === 'confirmed'
                ? 'Tasdiqlangan'
                : st === 'pending'
                ? 'Kutilmoqda'
                : 'Bekor qilingan'}
            </button>
          ))}
        </div>
      </div>

      {/* Reservations Table */}
      <div className="bg-[#1c1c1a] border border-[#4d463a]/30">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Bron ID</TableHead>
              <TableHead>Mehmon Ismi</TableHead>
              <TableHead>Telefon</TableHead>
              <TableHead>Sana & Vaqt</TableHead>
              <TableHead>Mehmonlar Soni</TableHead>
              <TableHead>Zal / Joy</TableHead>
              <TableHead>Holat</TableHead>
              <TableHead className="text-right">Amallar</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((res) => (
              <TableRow key={res.id}>
                <TableCell className="font-mono text-[#e4c287] font-semibold">
                  {res.reservationNumber}
                </TableCell>
                <TableCell className="font-medium text-[#e5e2de]">
                  {res.guestName}
                </TableCell>
                <TableCell className="font-mono text-xs text-[#A99A81]">
                  {res.guestPhone}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1.5 text-xs text-[#cbc6be]">
                    <Clock className="w-3.5 h-3.5 text-[#B99A63]" />
                    <span>{res.date} · {res.time}</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-[#e5e2de]">
                  {res.guestsCount}
                </TableCell>
                <TableCell className="text-xs text-[#A99A81]">
                  {res.tableArea === 'vip_room'
                    ? 'VIP Xosxona #2'
                    : res.tableArea === 'window'
                    ? 'Asosiy zal (Deraza)'
                    : 'Oilaviy ayvon'}
                </TableCell>
                <TableCell>
                  <Badge variant={res.status === 'confirmed' ? 'gold' : res.status === 'pending' ? 'default' : 'danger'}>
                    {res.status === 'confirmed' ? 'Tasdiqlangan' : res.status === 'pending' ? 'Kutilmoqda' : 'Bekor qilingan'}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    {res.status !== 'confirmed' && (
                      <button
                        onClick={() => handleStatusChange(res.id, 'confirmed')}
                        className="p-1 text-[#e4c287] hover:bg-[#20201e]"
                        title="Tasdiqlash"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    )}
                    {res.status !== 'cancelled' && (
                      <button
                        onClick={() => handleStatusChange(res.id, 'cancelled')}
                        className="p-1 text-[#ffb4ab] hover:bg-[#20201e]"
                        title="Bekor qilish"
                      >
                        <XCircle className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
