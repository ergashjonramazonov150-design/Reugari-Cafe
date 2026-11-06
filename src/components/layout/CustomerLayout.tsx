import React from 'react';
import { CustomerHeader } from './CustomerHeader';
import { CustomerFooter } from './CustomerFooter';

export function CustomerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#131311] text-[#e5e2de] selection:bg-[#b99a63]/30 selection:text-[#ffdea7]">
      <CustomerHeader />
      <main className="w-full pt-20 flex-1 bg-[#131311]">
        {children}
      </main>
      <CustomerFooter />
    </div>
  );
}
