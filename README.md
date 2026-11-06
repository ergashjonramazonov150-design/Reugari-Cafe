# REUGARI — Modern Uzbek Heritage Luxury Platform

> **REUGARI** is a premium gastronomic restaurant platform in Tashkent, Uzbekistan. This unified application houses both the immersive customer-facing dining & ordering website and the comprehensive administrative management dashboard.

---

## 🏛️ Project Foundation Overview

The application is structured to honor the refined aesthetic of Central Asian architecture (Bukhara, Samarkand, carved walnut, glazed majolica, beaten brass, and raw silk) while providing a high-performance modern web experience.

### Brand Identity & Design Tokens
- **Base Neutral (Deep Charcoal):** `#171715` — Nocturnal atmospheric background.
- **Secondary Surface (Dark Espresso / Smoked Basalt):** `#24221D` — Structural panels, drawers, cards.
- **Primary Accent (Antique Gold):** `#B99A63` / `#e4c287` — Elevated CTAs, key pricing, active states.
- **Primary Ink (Warm Ivory):** `#E8DDC7` / `#e5e2de` — Clean typography, titles.
- **Secondary Ink (Desert Dust):** `#A99A81` — Ingredients, captions, secondary cues.
- **Typography:**
  - Headings & Display: **EB Garamond** (Humanist display serif)
  - Body & UI: **Inter** (Clean, rationalist grotesque)
- **Geometry:** Crisp, non-rounded geometry (`rounded-none` / `rounded-[1px]`) inspired by traditional brickwork and geometric girih patterns.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── (store)/                 # Customer-facing storefront routes
│   │   ├── page.tsx             # Home: Hero, philosophy, chef's specials, reservation CTA
│   │   ├── menu/page.tsx        # Menu: Catalog, category filtering, search, sticky cart
│   │   ├── cart/page.tsx        # Cart: Items review, quantities, fees calculation
│   │   ├── checkout/page.tsx    # Checkout: Delivery details, payment method, order confirmation
│   │   ├── reservations/page.tsx# Reservations: VIP rooms, seating areas, booking form
│   │   ├── about/page.tsx       # About: Restaurant history, chef Jamshid Rahimov
│   │   └── contact/page.tsx     # Contact: Authentic address, phone, working hours, inquiries
│   ├── admin/                   # Administrative dashboard routes
│   │   ├── page.tsx             # Overview: KPIs, weekly revenue charts, live orders, top dishes
│   │   ├── orders/page.tsx      # Orders: Master-detail split, status transitions, courier dispatch
│   │   ├── reservations/page.tsx# Reservations: Table management, approval status, seating
│   │   ├── dishes/page.tsx      # Dishes: Catalog editor, multi-language tabs (UZ/EN/RU)
│   │   ├── categories/page.tsx  # Categories: Menu hierarchy, multilingual slugs
│   │   ├── customers/page.tsx   # Customers: VIP guest lists, spending histories
│   │   ├── gallery/page.tsx     # Gallery: Media library, photography assets
│   │   ├── content/page.tsx     # Content: Slogans, chef quotes, editorial prose
│   │   └── settings/page.tsx    # Settings: Business parameters, Supabase integration status
│   └── api/                     # Backend API handlers and route definitions
├── components/
│   ├── ui/                      # Reusable brand primitives (Button, Input, Dialog, Table, Badge)
│   ├── layout/                  # CustomerLayout, AdminLayout, CustomerHeader, AdminSidebar, etc.
│   ├── customer/                # Customer-specific shared elements
│   └── admin/                   # Admin-specific widgets and drawer panels
├── features/
│   ├── menu/                    # DishCard, category filters, catalog store
│   ├── orders/                  # Order status pills, order summary, courier widgets
│   ├── reservations/            # ReservationBookingForm with guest count & area selector
│   └── customers/               # Customer profiling components
├── hooks/
│   └── useCart.tsx              # Cart state management (items, subtotal, 10% service fee, total)
├── i18n/
│   └── context.tsx              # Multilingual context (UZ default, EN, RU switchable)
├── messages/
│   ├── uz.json                  # Uzbek translation dictionary (Primary)
│   ├── en.json                  # English translation dictionary
│   └── ru.json                  # Russian translation dictionary
├── types/
│   └── index.ts                 # TypeScript domain entities (Dish, Category, Order, Reservation, etc.)
└── lib/
    ├── utils.ts                 # Classname merge (cn), currency formatters (so‘m / UZS)
    ├── constants.ts             # Authentic restaurant info, menu items, sample orders & bookings
    └── supabase.ts              # Supabase readiness client & database table schemas
```

---

## 🌐 Routing Map

### Customer Storefront
- `/` — Restaurant home, ambiance, chef's specials, and booking preview.
- `/menu` — Interactive digital catalog, real-time search, category filters, and live cart drawer.
- `/cart` — Dedicated basket view for managing item quantities and viewing calculations.
- `/checkout` — Order finalization with delivery address and Payme / Click / Terminal options.
- `/reservations` — Table reservation system with seating options (VIP Room, Main Hall, Patio).
- `/about` — The story of REUGARI and master chef Jamshid Rahimov.
- `/contact` — Location in Mirobod district, phone lines, operating hours, and inquiry form.

### Administrative Management Dashboard
- `/admin` — High-level KPI overview (Today's revenue, active orders, kitchen load).
- `/admin/orders` — Live order management with master-detail status updates and courier dispatch.
- `/admin/reservations` — Daily table bookings with confirmation toggles and VIP room assignment.
- `/admin/dishes` — Dish catalog editor with multi-language tabs (UZ / EN / RU), calories, and ingredients.
- `/admin/categories` — Menu categories management.
- `/admin/customers` — Guest database with VIP tiers and lifetime spending.
- `/admin/gallery` — Media assets repository with high-resolution photography.
- `/admin/content` — Homepage slogans, chef quotes, and editorial prose.
- `/admin/settings` — Restaurant parameters, service fee rates, and database status.

---

## 🌍 Multilingual Localization (i18n)

- **Default Locale:** **Uzbek (`uz`)** — Strictly honored across all customer and administrative views.
- **Secondary Locales:** **English (`en`)** and **Russian (`ru`)**.
- **Interactive Switcher:** Accessible in both top headers with instant dictionary loading and persistence in `localStorage`.

---

## 🚀 Getting Started

### Installation
Dependencies are already configured:
```bash
npm install
```

### Development
Start the development server:
```bash
npm run dev
```
The application will be served on port `3000`.

### Type Checking & Build
```bash
npm run lint
npm run build
```

---

## ⚡ Next Phase: Supabase Integration

The foundation has been prepared for direct integration with **Supabase**:
1. `src/lib/supabase.ts` contains the client bootstrap and schema definitions (`DB_TABLES`).
2. Supply environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL` or `VITE_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY` or `VITE_SUPABASE_ANON_KEY`
3. The database tables mapped to the domain models:
   - `categories`
   - `dishes`
   - `orders` & `order_items`
   - `reservations`
   - `customers`
   - `gallery_items`
   - `content_blocks`
