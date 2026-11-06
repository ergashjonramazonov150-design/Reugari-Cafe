import React, { useState } from 'react';
import {
  Search,
  Filter,
  Plus,
  Calendar,
  CheckCircle2,
  Clock,
  Bike,
  Printer,
  XCircle,
  MapPin,
  Phone,
  MessageSquare,
} from 'lucide-react';
import { INITIAL_ORDERS } from '@/src/lib/constants';
import { useI18n } from '@/src/i18n/context';
import { formatPrice } from '@/src/lib/utils';
import { Badge } from '@/src/components/ui/badge';
import { Button } from '@/src/components/ui/button';
import type { Order, OrderStatus } from '@/src/types';

export default function AdminOrdersPage() {
  const { locale } = useI18n();
  const [orders, setOrders] = useState<Order[]>(INITIAL_ORDERS);
  const [selectedOrder, setSelectedOrder] = useState<Order>(INITIAL_ORDERS[0]);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    { id: 'all', label: 'Barchasi', count: 71 },
    { id: 'pending', label: 'Kutilmoqda', count: 4 },
    { id: 'confirmed', label: 'Tasdiqlandi', count: 6 },
    { id: 'preparing', label: 'Tayyorlanmoqda', count: 11 },
    { id: 'delivering', label: 'Yetkazilmoqda', count: 7 },
    { id: 'delivered', label: 'Yetkazildi', count: 39 },
    { id: 'cancelled', label: 'Bekor qilindi', count: 4 },
  ];

  const filteredOrders = orders.filter((ord) => {
    if (statusFilter !== 'all' && ord.status !== statusFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        ord.orderNumber.toLowerCase().includes(q) ||
        ord.customerName.toLowerCase().includes(q) ||
        ord.customerPhone.includes(q)
      );
    }
    return true;
  });

  const handleUpdateStatus = (newStatus: OrderStatus) => {
    setOrders((prev) =>
      prev.map((ord) => (ord.id === selectedOrder.id ? { ...ord, status: newStatus } : ord))
    );
    setSelectedOrder((prev) => ({ ...prev, status: newStatus }));
  };

  return (
    <div className="flex flex-col w-full p-6 md:p-8 gap-6">
      {/* Header & Metrics ribbon */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-[#4d463a]/30">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 bg-[#B99A63]" />
            <span className="text-[10px] uppercase text-[#e4c287] tracking-widest font-semibold">
              Reugari • Oshxona va Yetkazuv
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-[#e5e2de] tracking-tight">
            Buyurtmalar boshqaruvi
          </h1>
          <p className="text-xs text-[#d0c5b6] mt-1">
            Yetkazib berish, olib ketish va restorandagi barcha buyurtmalar monitoringi
          </p>
        </div>

        {/* Quick Metrics Ribbon */}
        <div className="flex items-center gap-3">
          <div className="bg-[#1c1c1a] border-l-2 border-[#B99A63] border-y border-r border-[#4d463a]/30 px-4 py-2.5 min-w-[120px]">
            <span className="text-[10px] uppercase text-[#998f81]">Kutilayotgan</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="font-serif text-xl text-[#e4c287] font-mono">4</span>
              <span className="text-[10px] text-[#A99A81]">dona</span>
            </div>
          </div>
          <div className="bg-[#1c1c1a] border-l-2 border-[#4d463a] border-y border-r border-[#4d463a]/30 px-4 py-2.5 min-w-[120px]">
            <span className="text-[10px] uppercase text-[#998f81]">Tayyorlanmoqda</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="font-serif text-xl text-[#e5e2de] font-mono">11</span>
              <span className="text-[10px] text-[#A99A81]">oshxonada</span>
            </div>
          </div>
          <div className="bg-[#1c1c1a] border-l-2 border-[#e4c287] border-y border-r border-[#4d463a]/30 px-4 py-2.5 min-w-[130px]">
            <span className="text-[10px] uppercase text-[#998f81]">Bugungi jami</span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="font-serif text-xl text-[#e4c287] font-mono">38.4M</span>
              <span className="text-[10px] text-[#998f81]">so‘m</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Tabs Ribbon */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setStatusFilter(tab.id)}
            type="button"
            className={`px-3.5 py-2 text-xs uppercase tracking-wider transition-all whitespace-nowrap flex items-center gap-2 border ${
              statusFilter === tab.id
                ? 'bg-[#B99A63] text-[#171715] font-semibold border-[#B99A63]'
                : 'bg-[#20201e] text-[#cbc6be] border-[#4d463a]/30 hover:bg-[#2a2a28]'
            }`}
          >
            <span>{tab.label}</span>
            <span className="px-1.5 py-0.2 bg-[#0e0e0c]/40 text-[10px] font-mono">
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Search and control bar */}
      <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-3 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="relative flex-1 w-full flex items-center bg-[#20201e] border border-[#4d463a]/30 px-3 py-2">
          <Search className="w-4 h-4 text-[#998f81] mr-2 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buyurtma ID, mijoz ismi yoki telefon raqami..."
            className="w-full bg-transparent text-xs text-[#e5e2de] placeholder:text-[#998f81] focus:outline-none"
          />
        </div>
        <div className="flex items-center gap-2 text-xs text-[#cbc6be]">
          <span className="text-[#998f81]">Avto-yangilanish: 15s</span>
          <span className="w-2 h-2 rounded-full bg-[#B99A63] animate-pulse" />
        </div>
      </div>

      {/* Master-Detail Split Workspace (Left ~65%, Right ~35%) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT: Orders Table List (8 of 12) */}
        <div className="lg:col-span-8 bg-[#1c1c1a] border border-[#4d463a]/30 overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-[#131311] text-[#998f81] text-[10px] uppercase tracking-wider border-b border-[#4d463a]/30">
                <th className="py-3 px-3">ID</th>
                <th className="py-3 px-3">Mijoz va Manzil</th>
                <th className="py-3 px-3">Tarkibi</th>
                <th className="py-3 px-3">Summa</th>
                <th className="py-3 px-3">Holat</th>
                <th className="py-3 px-3">Vaqt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#4d463a]/20 text-[#e5e2de]">
              {filteredOrders.map((ord) => {
                const isSelected = selectedOrder?.id === ord.id;
                return (
                  <tr
                    key={ord.id}
                    onClick={() => setSelectedOrder(ord)}
                    className={`cursor-pointer transition-colors ${
                      isSelected
                        ? 'bg-[#2a2a28] border-l-2 border-[#B99A63]'
                        : 'hover:bg-[#20201e]'
                    }`}
                  >
                    <td className="py-3 px-3 font-mono text-[#e4c287] font-semibold whitespace-nowrap">
                      {ord.orderNumber}
                    </td>
                    <td className="py-3 px-3">
                      <div className="flex flex-col">
                        <span className="font-medium text-[#e5e2de]">{ord.customerName}</span>
                        <span className="text-[10px] text-[#998f81] truncate max-w-[180px]">
                          {ord.deliveryAddress}
                        </span>
                      </div>
                    </td>
                    <td className="py-3 px-3 text-[#cbc6be]">
                      {ord.items.length} ta taom
                    </td>
                    <td className="py-3 px-3 font-mono font-medium text-[#e4c287] whitespace-nowrap">
                      {formatPrice(ord.total, locale)}
                    </td>
                    <td className="py-3 px-3 whitespace-nowrap">
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
                    <td className="py-3 px-3 text-[10px] font-mono text-[#998f81] whitespace-nowrap">
                      14:20
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* RIGHT: Active Order Details Drawer (4 of 12) */}
        {selectedOrder && (
          <div className="lg:col-span-4 bg-[#1c1c1a] border border-[#B99A63]/30 p-6 flex flex-col gap-5 shadow-2xl">
            {/* Detail Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#4d463a]/30">
              <div>
                <span className="text-[10px] uppercase text-[#998f81] tracking-wider block">
                  Tanlangan Buyurtma
                </span>
                <span className="font-serif text-2xl text-[#e4c287] font-mono">
                  {selectedOrder.orderNumber}
                </span>
              </div>
              <Badge variant="gold" className="capitalize">
                {selectedOrder.status}
              </Badge>
            </div>

            {/* Customer Details Card */}
            <div className="bg-[#20201e] border border-[#4d463a]/30 p-4 flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-wider text-[#998f81] font-semibold">
                Mijoz tafsilotlari
              </span>
              <div className="flex items-center justify-between">
                <span className="font-medium text-[#e5e2de] text-sm">{selectedOrder.customerName}</span>
                <span className="text-xs text-[#B99A63] font-mono">{selectedOrder.customerPhone}</span>
              </div>
              <div className="text-xs text-[#A99A81] pt-2 border-t border-[#4d463a]/25 flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B99A63] shrink-0 mt-0.5" />
                <span>{selectedOrder.deliveryAddress}</span>
              </div>
              {selectedOrder.specialInstructions && (
                <div className="p-2.5 bg-[#131311] border-l-2 border-[#B99A63] text-[11px] text-[#cbc6be] italic mt-1">
                  "{selectedOrder.specialInstructions}"
                </div>
              )}
            </div>

            {/* Dishes list */}
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase tracking-wider text-[#998f81] font-semibold">
                Buyurtma tarkibi ({selectedOrder.items.length})
              </span>
              <div className="divide-y divide-[#4d463a]/20 border border-[#4d463a]/30 bg-[#20201e]">
                {selectedOrder.items.map((item, idx) => (
                  <div key={idx} className="p-2.5 flex justify-between items-center text-xs">
                    <div>
                      <span className="text-[#e5e2de] font-medium block">{item.dishName}</span>
                      <span className="text-[10px] text-[#998f81]">
                        {item.quantity} dona × {formatPrice(item.unitPrice, locale)}
                      </span>
                    </div>
                    <span className="font-mono text-[#e4c287] font-semibold">
                      {formatPrice(item.quantity * item.unitPrice, locale)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Calculation summary */}
            <div className="bg-[#20201e] border border-[#4d463a]/30 p-3.5 space-y-1.5 text-xs text-[#A99A81]">
              <div className="flex justify-between">
                <span>Taomlar narxi:</span>
                <span className="font-mono text-[#e5e2de]">{formatPrice(selectedOrder.subtotal, locale)}</span>
              </div>
              <div className="flex justify-between">
                <span>Yetkazib berish:</span>
                <span className="font-mono text-[#e5e2de]">{formatPrice(selectedOrder.deliveryFee, locale)}</span>
              </div>
              <div className="flex justify-between">
                <span>Xizmat haqi (10%):</span>
                <span className="font-mono text-[#e5e2de]">{formatPrice(selectedOrder.serviceFee, locale)}</span>
              </div>
              <div className="pt-2 border-t border-[#4d463a]/30 flex justify-between items-baseline">
                <span className="font-serif text-sm uppercase text-[#e4c287] font-semibold">Jami to‘lov:</span>
                <span className="font-serif text-xl text-[#e4c287] font-bold font-mono">
                  {formatPrice(selectedOrder.total, locale)}
                </span>
              </div>
            </div>

            {/* Courier Section */}
            <div className="p-3 bg-[#2a2a28] border border-[#4d463a]/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Bike className="w-4 h-4 text-[#B99A63]" />
                <div>
                  <span className="text-[10px] uppercase text-[#998f81] block">Biriktirilgan Kuryer</span>
                  <span className="text-[#e5e2de] font-medium">
                    {selectedOrder.assignedCourier?.name || 'Bekzod Aliyev (+998 93 440 22 11)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Status Change & Action Buttons */}
            <div className="flex flex-col gap-2 pt-2">
              <Button
                variant="primary"
                onClick={() => handleUpdateStatus('delivering')}
                className="w-full"
              >
                Kuryerga topshirish
              </Button>
              <Button variant="secondary" className="w-full flex items-center justify-center gap-2">
                <Printer className="w-4 h-4" />
                <span>Chekni chop etish</span>
              </Button>
              <Button
                variant="danger"
                onClick={() => handleUpdateStatus('cancelled')}
                className="w-full text-xs"
              >
                Buyurtmani bekor qilish
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
