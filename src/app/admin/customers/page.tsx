import React, { useState } from 'react';
import { Users, Search, Phone, Mail, Award, ArrowUpRight } from 'lucide-react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/src/components/ui/table';
import { Badge } from '@/src/components/ui/badge';
import { formatPrice } from '@/src/lib/utils';
import type { Customer } from '@/src/types';

const INITIAL_CUSTOMERS: Customer[] = [
  { id: 'c-1', name: 'Abdullayev Sanjar', phone: '+998 90 123 45 67', email: 'sanjar@example.com', totalOrders: 14, totalSpent: 9480000, isVip: true, lastVisit: 'Bugun' },
  { id: 'c-2', name: 'Karimova Nilufar', phone: '+998 91 987 65 43', email: 'nilufar@example.com', totalOrders: 8, totalSpent: 4250000, isVip: false, lastVisit: 'Kechagi' },
  { id: 'c-3', name: 'Otabek Rahimov', phone: '+998 97 777 00 11', email: 'otabek@vip.uz', totalOrders: 28, totalSpent: 26800000, isVip: true, lastVisit: 'Bugun' },
  { id: 'c-4', name: 'Jasur Temirov', phone: '+998 94 333 44 55', email: 'jasur@temirov.uz', totalOrders: 5, totalSpent: 2950000, isVip: false, lastVisit: '2 kun oldin' },
  { id: 'c-5', name: 'Malika Ergasheva', phone: '+998 93 555 77 99', totalOrders: 12, totalSpent: 8700000, isVip: true, lastVisit: '1 hafta oldin' },
];

export default function AdminCustomersPage() {
  const [search, setSearch] = useState('');
  const [customers] = useState<Customer[]>(INITIAL_CUSTOMERS);

  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.phone.includes(search)
  );

  return (
    <div className="flex flex-col w-full p-6 md:p-8 gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#4d463a]/30">
        <div>
          <span className="text-[10px] uppercase text-[#e4c287] tracking-wider font-semibold">
            Mijozlar Bazasi & VIP Mehmonlar
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-[#e5e2de] tracking-tight">
            Mijozlar Boshqaruvi
          </h1>
          <p className="text-xs text-[#d0c5b6] mt-1">
            Doimiy mehmonlar tarixi, buyurtmalar statistikasi va sodiqlik dasturi
          </p>
        </div>

        <div className="bg-[#1c1c1a] border border-[#4d463a]/30 px-4 py-2 text-xs text-[#e5e2de]">
          Jami mijozlar: <strong className="text-[#e4c287]">1 240 nafar</strong>
        </div>
      </div>

      <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-3 flex items-center bg-[#20201e]">
        <Search className="w-4 h-4 text-[#998f81] mr-2 shrink-0" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Mijoz ismi yoki telefon raqami bo‘yicha qidiruv..."
          className="w-full bg-transparent text-xs text-[#e5e2de] placeholder:text-[#998f81] focus:outline-none"
        />
      </div>

      <div className="bg-[#1c1c1a] border border-[#4d463a]/30">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Mijoz</TableHead>
              <TableHead>Telefon</TableHead>
              <TableHead>Buyurtmalar Soni</TableHead>
              <TableHead>Jami Xarid</TableHead>
              <TableHead>Daraja</TableHead>
              <TableHead>Oxirgi Tashrif</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((c) => (
              <TableRow key={c.id}>
                <TableCell className="font-medium text-[#e5e2de]">
                  {c.name}
                </TableCell>
                <TableCell className="font-mono text-xs text-[#A99A81]">
                  {c.phone}
                </TableCell>
                <TableCell className="font-mono text-xs text-[#cbc6be]">
                  {c.totalOrders} ta
                </TableCell>
                <TableCell className="font-mono text-xs text-[#e4c287] font-semibold">
                  {formatPrice(c.totalSpent)}
                </TableCell>
                <TableCell>
                  {c.isVip ? (
                    <Badge variant="gold">VIP Mehmon</Badge>
                  ) : (
                    <Badge variant="default">Doimiy</Badge>
                  )}
                </TableCell>
                <TableCell className="text-xs text-[#998f81]">
                  {c.lastVisit}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
