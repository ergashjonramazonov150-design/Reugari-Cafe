/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { I18nProvider } from '@/src/i18n/context';
import { CartProvider } from '@/src/hooks/useCart';

// Layouts
import { CustomerLayout } from '@/src/components/layout/CustomerLayout';
import { AdminLayout } from '@/src/components/layout/AdminLayout';

// Customer Pages
import HomePage from '@/src/app/(store)/page';
import MenuPage from '@/src/app/(store)/menu/page';
import CartPage from '@/src/app/(store)/cart/page';
import CheckoutPage from '@/src/app/(store)/checkout/page';
import ReservationsPage from '@/src/app/(store)/reservations/page';
import AboutPage from '@/src/app/(store)/about/page';
import ContactPage from '@/src/app/(store)/contact/page';

// Admin Pages
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
            {/* Customer Facing Routes (Store Layout) */}
            <Route
              path="/"
              element={
                <CustomerLayout>
                  <HomePage />
                </CustomerLayout>
              }
            />
            <Route
              path="/menu"
              element={
                <CustomerLayout>
                  <MenuPage />
                </CustomerLayout>
              }
            />
            <Route
              path="/cart"
              element={
                <CustomerLayout>
                  <CartPage />
                </CustomerLayout>
              }
            />
            <Route
              path="/checkout"
              element={
                <CustomerLayout>
                  <CheckoutPage />
                </CustomerLayout>
              }
            />
            <Route
              path="/reservations"
              element={
                <CustomerLayout>
                  <ReservationsPage />
                </CustomerLayout>
              }
            />
            <Route
              path="/about"
              element={
                <CustomerLayout>
                  <AboutPage />
                </CustomerLayout>
              }
            />
            <Route
              path="/contact"
              element={
                <CustomerLayout>
                  <ContactPage />
                </CustomerLayout>
              }
            />

            {/* Admin Dashboard Routes (Admin Layout) */}
            <Route
              path="/admin"
              element={
                <AdminLayout>
                  <AdminOverviewPage />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/orders"
              element={
                <AdminLayout>
                  <AdminOrdersPage />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/reservations"
              element={
                <AdminLayout>
                  <AdminReservationsPage />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/dishes"
              element={
                <AdminLayout>
                  <AdminDishesPage />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/categories"
              element={
                <AdminLayout>
                  <AdminCategoriesPage />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/customers"
              element={
                <AdminLayout>
                  <AdminCustomersPage />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/gallery"
              element={
                <AdminLayout>
                  <AdminGalleryPage />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/content"
              element={
                <AdminLayout>
                  <AdminContentPage />
                </AdminLayout>
              }
            />
            <Route
              path="/admin/settings"
              element={
                <AdminLayout>
                  <AdminSettingsPage />
                </AdminLayout>
              }
            />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </I18nProvider>
  );
}
