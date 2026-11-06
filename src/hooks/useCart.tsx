import React, { createContext, useContext, useState, useEffect } from 'react';
import type { CartItem, Dish } from '@/src/types';
import { INITIAL_DISHES } from '@/src/lib/constants';

interface CartContextType {
  items: CartItem[];
  addToCart: (dish: Dish, quantity?: number) => void;
  removeFromCart: (dishId: string) => void;
  updateQuantity: (dishId: string, quantity: number) => void;
  clearCart: () => void;
  subtotal: number;
  serviceFee: number;
  total: number;
  totalCount: number;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Initialize with the sample dishes from Stitch reference export
  const [items, setItems] = useState<CartItem[]>(() => {
    return [
      { dish: INITIAL_DISHES[0], quantity: 2 },
      { dish: INITIAL_DISHES[6], quantity: 1 },
    ];
  });

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (dish: Dish, quantity: number = 1) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.dish.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.dish.id === dish.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { dish, quantity }];
    });
    showToast(`"${dish.name.uz}" savatchaga qo‘shildi`);
  };

  const removeFromCart = (dishId: string) => {
    setItems((prev) => prev.filter((item) => item.dish.id !== dishId));
    showToast('Taom savatchadan olib tashlandi');
  };

  const updateQuantity = (dishId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(dishId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.dish.id === dishId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    showToast('Savatcha tozalandi');
  };

  const subtotal = items.reduce(
    (sum, item) => sum + item.dish.price * item.quantity,
    0
  );
  const serviceFee = Math.round(subtotal * 0.1);
  const total = subtotal + serviceFee;
  const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        serviceFee,
        total,
        totalCount,
        toastMessage,
        showToast,
      }}
    >
      {children}
      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#24221D] border border-[#B99A63]/40 text-[#E8DDC7] px-5 py-3 shadow-2xl flex items-center gap-3 animate-in fade-in-0 slide-in-from-bottom-5 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#B99A63]" />
          <span className="text-[13px] font-sans">{toastMessage}</span>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
