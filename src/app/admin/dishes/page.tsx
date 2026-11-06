import React, { useState } from 'react';
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Upload,
  CheckCircle,
  BookOpen,
  Scale,
  Flame,
  Clock,
} from 'lucide-react';
import { INITIAL_DISHES, INITIAL_CATEGORIES } from '@/src/lib/constants';
import { useI18n } from '@/src/i18n/context';
import { formatPrice } from '@/src/lib/utils';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Badge } from '@/src/components/ui/badge';
import type { Dish, Locale } from '@/src/types';

export default function AdminDishesPage() {
  const { locale } = useI18n();
  const [dishes, setDishes] = useState<Dish[]>(INITIAL_DISHES);
  const [selectedDish, setSelectedDish] = useState<Dish>(INITIAL_DISHES[0]);
  const [editingLang, setEditingLang] = useState<Locale>('uz');
  const [activeTab, setActiveTab] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleToggleAvailability = (dishId: string) => {
    setDishes((prev) =>
      prev.map((d) => (d.id === dishId ? { ...d, isAvailable: !d.isAvailable } : d))
    );
    if (selectedDish.id === dishId) {
      setSelectedDish((prev) => ({ ...prev, isAvailable: !prev.isAvailable }));
    }
    showNotification('Mavjudlik holati yangilandi');
  };

  const handleSaveDish = (e: React.FormEvent) => {
    e.preventDefault();
    setDishes((prev) =>
      prev.map((d) => (d.id === selectedDish.id ? selectedDish : d))
    );
    showNotification('Taom ma’lumotlari muvaffaqiyatli saqlandi');
  };

  const filteredDishes = dishes.filter((dish) => {
    if (activeTab !== 'all' && dish.category !== activeTab) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        dish.name.uz.toLowerCase().includes(q) ||
        dish.code.toLowerCase().includes(q) ||
        dish.ingredients?.some((ing) => ing.toLowerCase().includes(q))
      );
    }
    return true;
  });

  return (
    <div className="flex flex-col w-full p-6 md:p-8 gap-6">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed top-20 right-8 z-50 bg-[#24221D] border border-[#B99A63] text-[#e4c287] px-5 py-3 text-xs shadow-2xl flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#B99A63]" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 bg-[#1c1c1a] border border-[#4d463a]/30 p-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] uppercase text-[#e4c287] tracking-wider font-semibold">
              Gastronomiya kolleksiyasi
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#B99A63]/60" />
            <span className="text-[10px] text-[#A99A81] uppercase tracking-wider">
              Toshkent filiali
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl text-[#e5e2de] tracking-tight">
            Taomlar menyusi boshqaruvi
          </h1>
          <p className="text-xs text-[#d0c5b6] max-w-2xl mt-1">
            Restoran menyusidagi taomlar, narxlar, tarkib va mavjudlik holatini sozlash hamda mehmonlar uchun muqobil tarjimalarni yuritish.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 bg-[#20201e] border border-[#4d463a]/30 text-xs text-[#d0c5b6]">
            Jami: <strong className="text-[#e5e2de]">{dishes.length} taom</strong>
          </div>
          <Button
            variant="primary"
            onClick={() => {
              const newDish: Dish = {
                id: `dish-${Date.now()}`,
                code: `#REU-${Math.floor(120 + Math.random() * 50)}`,
                name: { uz: 'Yangi Taom', en: 'New Dish', ru: 'Новое блюдо' },
                description: { uz: 'Tavsif...', en: 'Description...', ru: 'Описание...' },
                category: 'milliy',
                price: 80000,
                weightGrams: 350,
                caloriesKcal: 450,
                prepTimeMinutes: 20,
                isAvailable: true,
                ingredients: ['Sarxil go‘sht', 'Ziravorlar'],
              };
              setDishes([newDish, ...dishes]);
              setSelectedDish(newDish);
              showNotification('Yangi taom qatori yaratildi');
            }}
            className="flex items-center gap-1.5"
          >
            <Plus className="w-4 h-4" />
            <span>Yangi taom qo‘shish</span>
          </Button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-colors border ${
            activeTab === 'all'
              ? 'bg-[#B99A63] text-[#171715] font-semibold border-[#B99A63]'
              : 'bg-[#1c1c1a] text-[#cbc6be] border-[#4d463a]/30 hover:bg-[#2a2a28]'
          }`}
        >
          Barchasi ({dishes.length})
        </button>
        {INITIAL_CATEGORIES.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveTab(cat.slug)}
            className={`px-4 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-colors border ${
              activeTab === cat.slug
                ? 'bg-[#B99A63] text-[#171715] font-semibold border-[#B99A63]'
                : 'bg-[#1c1c1a] text-[#cbc6be] border-[#4d463a]/30 hover:bg-[#2a2a28]'
            }`}
          >
            {cat.name.uz} ({cat.count})
          </button>
        ))}
      </div>

      {/* Main Grid: Left Catalog List (7/12) & Right Edit Form (5/12) */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-start">
        {/* Left: Dishes list */}
        <div className="xl:col-span-7 flex flex-col gap-4">
          {/* Search bar */}
          <div className="bg-[#1c1c1a] border border-[#4d463a]/30 p-3 flex items-center gap-3">
            <Search className="w-4 h-4 text-[#998f81] shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Taom nomi, masalliqlar bo‘yicha qidiruv..."
              className="bg-transparent text-xs text-[#e5e2de] placeholder:text-[#998f81] focus:outline-none w-full"
            />
          </div>

          <div className="flex flex-col gap-3">
            {filteredDishes.map((dish) => {
              const isSelected = selectedDish.id === dish.id;
              return (
                <div
                  key={dish.id}
                  onClick={() => setSelectedDish(dish)}
                  className={`p-4 bg-[#1c1c1a] border transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 cursor-pointer ${
                    isSelected
                      ? 'border-[#B99A63] bg-[#24221D]'
                      : 'border-[#4d463a]/30 hover:bg-[#20201e]'
                  } ${!dish.isAvailable ? 'opacity-60' : ''}`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-16 h-16 bg-[#2a2a28] overflow-hidden shrink-0">
                      {dish.imageUrl ? (
                        <img
                          src={dish.imageUrl}
                          alt={dish.name.uz}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-[#A99A81]">
                          REUGARI
                        </div>
                      )}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-serif text-lg text-[#e5e2de] truncate">
                          {dish.name.uz}
                        </span>
                        <Badge variant="gold" className="text-[9px]">
                          {dish.category}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-3 text-[#A99A81] text-[11px] mt-1">
                        {dish.weightGrams && <span>{dish.weightGrams} g</span>}
                        {dish.caloriesKcal && <span>· {dish.caloriesKcal} kkal</span>}
                        {!dish.isAvailable && (
                          <span className="text-[#ffb4ab] font-bold">· Tugagan</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-5">
                    <div className="flex flex-col text-left sm:text-right">
                      <span className="font-serif text-base text-[#e4c287] font-mono">
                        {formatPrice(dish.price, locale)}
                      </span>
                      <span className="text-[9px] text-[#998f81] uppercase">so‘m / porsiya</span>
                    </div>

                    {/* Availability toggle */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleToggleAvailability(dish.id);
                        }}
                        className={`w-9 h-5 flex items-center px-0.5 transition-colors border ${
                          dish.isAvailable
                            ? 'bg-[#B99A63] border-[#B99A63] justify-end'
                            : 'bg-[#2a2a28] border-[#4d463a] justify-start'
                        }`}
                        title="Mavjudlikni o'zgartirish"
                      >
                        <span className="w-3.5 h-3.5 bg-[#171715]" />
                      </button>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedDish(dish);
                        }}
                        className="p-1.5 text-[#A99A81] hover:text-[#e4c287]"
                        title="Tahrirlash"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Catalog Edit Card (5/12) */}
        {selectedDish && (
          <div className="xl:col-span-5 bg-[#1c1c1a] border border-[#B99A63]/30 p-6 flex flex-col gap-5 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-[#4d463a]/30">
              <div>
                <span className="text-[10px] uppercase text-[#e4c287] tracking-widest block font-semibold">
                  Katalog kartochkasi
                </span>
                <h2 className="font-serif text-2xl text-[#e5e2de]">Taomni tahrirlash</h2>
              </div>
              <span className="px-2 py-0.5 bg-[#20201e] border border-[#4d463a]/30 text-xs font-mono text-[#A99A81]">
                ID: {selectedDish.code}
              </span>
            </div>

            {/* Language Tabs */}
            <div className="flex items-center bg-[#20201e] border border-[#4d463a]/30 p-1 gap-1">
              {(['uz', 'en', 'ru'] as Locale[]).map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setEditingLang(lang)}
                  className={`flex-1 py-1.5 text-center text-xs uppercase tracking-wider transition-colors ${
                    editingLang === lang
                      ? 'bg-[#B99A63] text-[#171715] font-semibold'
                      : 'text-[#d0c5b6] hover:text-[#e5e2de]'
                  }`}
                >
                  {lang === 'uz' ? 'O‘zbekcha (UZ)' : lang === 'en' ? 'Inglizcha (EN)' : 'Ruscha (RU)'}
                </button>
              ))}
            </div>

            <form onSubmit={handleSaveDish} className="flex flex-col gap-4">
              <Input
                label={`Taom nomi (${editingLang.toUpperCase()})`}
                value={selectedDish.name[editingLang] || ''}
                onChange={(e) =>
                  setSelectedDish({
                    ...selectedDish,
                    name: { ...selectedDish.name, [editingLang]: e.target.value },
                  })
                }
                required
              />

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A99A81]">
                    Kategoriya
                  </label>
                  <select
                    value={selectedDish.category}
                    onChange={(e) =>
                      setSelectedDish({
                        ...selectedDish,
                        category: e.target.value as any,
                      })
                    }
                    className="w-full bg-[#20201e] border border-[#4d463a]/30 text-[#e5e2de] text-xs px-3 py-2.5 focus:outline-none focus:border-[#B99A63]"
                  >
                    {INITIAL_CATEGORIES.map((cat) => (
                      <option key={cat.slug} value={cat.slug}>
                        {cat.name.uz}
                      </option>
                    ))}
                  </select>
                </div>

                <Input
                  label="Narxi (so‘m)"
                  type="number"
                  value={selectedDish.price}
                  onChange={(e) =>
                    setSelectedDish({
                      ...selectedDish,
                      price: parseInt(e.target.value) || 0,
                    })
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Input
                  label="Grammaj (g)"
                  value={selectedDish.weightGrams || ''}
                  onChange={(e) =>
                    setSelectedDish({
                      ...selectedDish,
                      weightGrams: parseInt(e.target.value) || undefined,
                    })
                  }
                />
                <Input
                  label="Kaloriya"
                  value={selectedDish.caloriesKcal || ''}
                  onChange={(e) =>
                    setSelectedDish({
                      ...selectedDish,
                      caloriesKcal: parseInt(e.target.value) || undefined,
                    })
                  }
                />
                <Input
                  label="Vaqti (daq)"
                  value={selectedDish.prepTimeMinutes || ''}
                  onChange={(e) =>
                    setSelectedDish({
                      ...selectedDish,
                      prepTimeMinutes: parseInt(e.target.value) || undefined,
                    })
                  }
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A99A81]">
                  Ta’rif ({editingLang.toUpperCase()})
                </label>
                <textarea
                  rows={3}
                  value={selectedDish.description[editingLang] || ''}
                  onChange={(e) =>
                    setSelectedDish({
                      ...selectedDish,
                      description: {
                        ...selectedDish.description,
                        [editingLang]: e.target.value,
                      },
                    })
                  }
                  className="w-full bg-[#20201e] border border-[#4d463a]/30 p-3 text-xs text-[#e5e2de] placeholder:text-[#998f81] focus:outline-none focus:border-[#B99A63] resize-none"
                />
              </div>

              {/* Ingredients Tags */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A99A81]">
                  Masalliqlar teglari
                </label>
                <div className="flex flex-wrap gap-1.5 bg-[#20201e] border border-[#4d463a]/30 p-2.5">
                  {selectedDish.ingredients?.map((ing, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 bg-[#2a2a28] border border-[#4d463a]/30 text-[11px] text-[#e5e2de] flex items-center gap-1.5"
                    >
                      {ing}
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedDish({
                            ...selectedDish,
                            ingredients: selectedDish.ingredients?.filter((_, idx) => idx !== i),
                          })
                        }
                        className="text-[#998f81] hover:text-[#ffb4ab]"
                      >
                        ✕
                      </button>
                    </span>
                  ))}
                  <button
                    type="button"
                    onClick={() => {
                      const newIng = prompt('Yangi masalliq nomini kiriting:');
                      if (newIng?.trim()) {
                        setSelectedDish({
                          ...selectedDish,
                          ingredients: [...(selectedDish.ingredients || []), newIng.trim()],
                        });
                      }
                    }}
                    className="text-[10px] text-[#e4c287] uppercase tracking-wider px-2 py-0.5 hover:underline"
                  >
                    + Qo‘shish
                  </button>
                </div>
              </div>

              {/* Image upload preview */}
              <div className="p-4 bg-[#20201e] border border-dashed border-[#4d463a] flex flex-col items-center justify-center text-center gap-2 cursor-pointer hover:border-[#B99A63]">
                <Upload className="w-5 h-5 text-[#B99A63]" />
                <span className="text-xs text-[#e5e2de]">Suratni yuklash yoki yangilash</span>
                <span className="text-[10px] text-[#998f81]">JPG, WEBP, PNG (Maksimal 5MB)</span>
              </div>

              <div className="flex items-center gap-3 pt-3">
                <Button type="submit" variant="primary" className="flex-1">
                  Saqlash va chop etish
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => showNotification('O‘zgarishlar bekor qilindi')}
                >
                  Bekor qilish
                </Button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
