import React, { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { Dialog } from '@/src/components/ui/dialog';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isNewOrderModalOpen, setIsNewOrderModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#131311] text-[#e5e2de] flex">
      {/* Fixed Sidebar */}
      <AdminSidebar />

      {/* Main Container offset by 72 (18rem) */}
      <div className="pl-72 flex-1 flex flex-col min-w-0">
        <AdminHeader onNewOrder={() => setIsNewOrderModalOpen(true)} />
        <main className="w-full pt-16 bg-[#131311] flex-1 min-h-[calc(100vh-4rem)]">
          {children}
        </main>
      </div>

      {/* Quick New Order Modal (Foundation Dialog) */}
      <Dialog
        isOpen={isNewOrderModalOpen}
        onClose={() => setIsNewOrderModalOpen(false)}
        title="Yangi buyurtma kiritish"
        description="Restoran zali yoki qo‘ng‘iroq orqali qabul qilingan tezkor buyurtma formasi"
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setIsNewOrderModalOpen(false);
          }}
          className="flex flex-col gap-4 mt-4"
        >
          <Input label="Mijoz ismi" placeholder="Sanjar Abdullayev" required />
          <Input label="Telefon raqami" placeholder="+998 90 123 45 67" required />
          <Input label="Yetkazish manzili yoki Stol raqami" placeholder="VIP xona 2 yoki Chilonzor 9-12" required />
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-[#4d463a]/30">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsNewOrderModalOpen(false)}
            >
              Bekor qilish
            </Button>
            <Button type="submit" variant="primary">
              Kiritish va oshxonaga uzatish
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
