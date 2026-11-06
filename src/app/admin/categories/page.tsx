import React, { useState } from 'react';
import { Tag, Plus, Edit2, Trash2 } from 'lucide-react';
import { INITIAL_CATEGORIES } from '@/src/lib/constants';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Dialog } from '@/src/components/ui/dialog';
import type { Category } from '@/src/types';

export default function AdminCategoriesPage() {
  const [categories, setCategories] = useState<Category[]>(INITIAL_CATEGORIES);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newCatName, setNewCatName] = useState({ uz: '', en: '', ru: '' });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newCat: Category = {
      id: `cat-${Date.now()}`,
      slug: (newCatName.uz.toLowerCase().replace(/\s+/g, '-') as any) || 'yangi',
      name: newCatName,
      count: 0,
    };
    setCategories([...categories, newCat]);
    setIsDialogOpen(false);
    setNewCatName({ uz: '', en: '', ru: '' });
  };

  return (
    <div className="flex flex-col w-full p-6 md:p-8 gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#4d463a]/30">
        <div>
          <span className="text-[10px] uppercase text-[#e4c287] tracking-wider font-semibold">
            Menyu tuzilishi
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-[#e5e2de] tracking-tight">
            Kategoriyalar Boshqaruvi
          </h1>
          <p className="text-xs text-[#d0c5b6] mt-1">
            Restoran menyusidagi taom bo‘limlari va ularning saralanishi
          </p>
        </div>

        <Button variant="primary" onClick={() => setIsDialogOpen(true)} className="flex items-center gap-1.5">
          <Plus className="w-4 h-4" />
          <span>Yangi Kategoriya</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="bg-[#1c1c1a] border border-[#4d463a]/30 p-6 flex flex-col justify-between hover:border-[#B99A63]/50 transition-colors"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-[#20201e] border border-[#4d463a]/30 text-[#B99A63]">
                  <Tag className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-[#e5e2de]">{cat.name.uz}</h3>
                  <span className="text-[11px] text-[#A99A81] font-mono">slug: {cat.slug}</span>
                </div>
              </div>
              <span className="px-2 py-0.5 bg-[#20201e] text-[#e4c287] text-xs font-mono">
                {cat.count || 0} taom
              </span>
            </div>

            <div className="pt-4 mt-4 border-t border-[#4d463a]/25 flex items-center justify-between text-xs text-[#A99A81]">
              <div className="flex flex-col">
                <span>EN: {cat.name.en}</span>
                <span>RU: {cat.name.ru}</span>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" className="p-1 hover:text-[#e4c287]">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setCategories(categories.filter((c) => c.id !== cat.id))}
                  className="p-1 hover:text-[#ffb4ab]"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        title="Yangi Kategoriya Qo‘shish"
      >
        <form onSubmit={handleAdd} className="flex flex-col gap-4 mt-2">
          <Input
            label="Kategoriya nomi (O‘zbekcha)"
            value={newCatName.uz}
            onChange={(e) => setNewCatName({ ...newCatName, uz: e.target.value })}
            required
          />
          <Input
            label="Kategoriya nomi (English)"
            value={newCatName.en}
            onChange={(e) => setNewCatName({ ...newCatName, en: e.target.value })}
            required
          />
          <Input
            label="Kategoriya nomi (Русский)"
            value={newCatName.ru}
            onChange={(e) => setNewCatName({ ...newCatName, ru: e.target.value })}
            required
          />
          <div className="flex justify-end gap-3 pt-3 border-t border-[#4d463a]/30">
            <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
              Bekor qilish
            </Button>
            <Button type="submit" variant="primary">
              Qo‘shish
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
}
