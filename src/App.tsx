/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { I18nProvider } from '@/src/i18n/context';
import { CartProvider } from '@/src/hooks/useCart';

// Independent Layouts
import { CustomerLayout } from '@/src/components/layout/CustomerLayout';
import { AdminLayout } from '@/src/components/layout/AdminLayout';

// Customer Pages (Store Route Group)
import HomePage from '@/src/app/(store)/page';
import MenuPage from '@/src/app/(store)/menu/page';
import CartPage from '@/src/app/(store)/cart/page';
import CheckoutPage from '@/src/app/(store)/checkout/page';
import ReservationsPage from '@/src/app/(store)/reservations/page';
import AboutPage from '@/src/app/(store)/about/page';
import ContactPage from '@/src/app/(store)/contact/page';

// Admin Dashboard Pages (Admin Route Group)
import AdminOverviewPage from '@/src/app/admin/page';
import AdminOrdersPage from '@/src/app/admin/orders/page';
import AdminReservationsPage from '@/src/app/admin/reservations/page';
import AdminDishesPage from '@/src/app/admin/dishes/page';
import AdminCategoriesPage from '@/src/app/admin/categories/page';
import AdminCustomersPage from '@/src/app/admin/customers/page';
import AdminGalleryPage from '@/src/app/admin/gallery/page';
import AdminContentPage from '@/src/app/admin/content/page';
import AdminSettingsPage from '@/src/app/admin/settings/page';

export default function App() {
  return (
    <I18nProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            {/* 1. CUSTOMER WEBSITE ROUTE GROUP */}
            {/* Dedicated CustomerLayout with public navbar & footer, strictly zero admin controls */}
            <Route element={<CustomerLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/reservations" element={<ReservationsPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Route>

            {/* 2. ADMIN DASHBOARD ROUTE GROUP */}
            {/* Dedicated AdminLayout with management sidebar & topbar, strictly zero customer navbar/footer */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminOverviewPage />} />
              <Route path="orders" element={<AdminOrdersPage />} />
              <Route path="reservations" element={<AdminReservationsPage />} />
              <Route path="dishes" element={<AdminDishesPage />} />
              <Route path="categories" element={<AdminCategoriesPage />} />
              <Route path="customers" element={<AdminCustomersPage />} />
              <Route path="gallery" element={<AdminGalleryPage />} />
              <Route path="content" element={<AdminContentPage />} />
              <Route path="settings" element={<AdminSettingsPage />} />
            </Route>

            {/* Fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </I18nProvider>
  );
}
