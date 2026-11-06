import React, { useState } from 'react';
import { Image, Upload, Trash2, Eye } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { INITIAL_DISHES } from '@/src/lib/constants';

export default function AdminGalleryPage() {
  const [images] = useState([
    {
      id: 'g-1',
      title: 'To‘y oshi (Toshkentcha) — Nafis dasturxon',
      url: INITIAL_DISHES[0].imageUrl,
      category: 'Milliy taomlar',
      dimensions: '1920 × 1080',
    },
    {
      id: 'g-2',
      title: 'G‘ijduvoncha qiyma kabob tandir nonida',
      url: INITIAL_DISHES[1].imageUrl,
      category: 'Kaboblar',
      dimensions: '1920 × 1080',
    },
    {
      id: 'g-3',
      title: 'Qozon kabob — Yosh qo‘zichoq go‘shti',
      url: INITIAL_DISHES[2].imageUrl,
      category: 'Milliy taomlar',
      dimensions: '1920 × 1080',
    },
    {
      id: 'g-4',
      title: 'Xon mantisi mayin xamirda',
      url: INITIAL_DISHES[3].imageUrl,
      category: 'Milliy taomlar',
      dimensions: '1920 × 1080',
    },
    {
      id: 'g-5',
      title: 'Achchiq-chuchuk yangi uzilgan pomidorlar',
      url: INITIAL_DISHES[6].imageUrl,
      category: 'Salatlar',
      dimensions: '1920 × 1080',
    },
    {
      id: 'g-6',
      title: 'Chak-chak va Samarqand holvasi',
      url: INITIAL_DISHES[7].imageUrl,
      category: 'Shirinliklar',
      dimensions: '1920 × 1080',
    },
  ]);

  return (
    <div className="flex flex-col w-full p-6 md:p-8 gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#4d463a]/30">
        <div>
          <span className="text-[10px] uppercase text-[#e4c287] tracking-wider font-semibold">
            Media Kutubxonasi
          </span>
          <h1 className="font-serif text-3xl md:text-4xl text-[#e5e2de] tracking-tight">
            Galereya va Kontent
          </h1>
          <p className="text-xs text-[#d0c5b6] mt-1">
            Restoran interyeri, taomlar va fotoko‘rgazma suratlari ombori
          </p>
        </div>

        <Button variant="primary" className="flex items-center gap-1.5">
          <Upload className="w-4 h-4" />
          <span>Surat yuklash</span>
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="group bg-[#1c1c1a] border border-[#4d463a]/30 overflow-hidden flex flex-col hover:border-[#B99A63]/50 transition-colors"
          >
            <div className="aspect-[16/10] bg-[#2a2a28] relative overflow-hidden">
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button type="button" className="p-1.5 bg-[#0e0e0c]/80 text-[#e5e2de] hover:text-[#e4c287]" title="Ko'rish">
                  <Eye className="w-4 h-4" />
                </button>
                <button type="button" className="p-1.5 bg-[#0e0e0c]/80 text-[#e5e2de] hover:text-[#ffb4ab]" title="O'chirish">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
            <div className="p-4 flex flex-col gap-1">
              <h3 className="font-medium text-xs text-[#e5e2de] truncate">{img.title}</h3>
              <div className="flex items-center justify-between text-[10px] text-[#A99A81] pt-2 border-t border-[#4d463a]/25">
                <span>{img.category}</span>
                <span className="font-mono">{img.dimensions}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
