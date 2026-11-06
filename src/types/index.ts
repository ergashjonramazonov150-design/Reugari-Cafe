export type Locale = 'uz' | 'en' | 'ru';

export type CategorySlug = 'milliy' | 'shorva' | 'kabob' | 'salat' | 'shirinlik' | 'ichimlik';

export interface Category {
  id: string;
  slug: CategorySlug;
  name: Record<Locale, string>;
  count?: number;
}

export interface Dish {
  id: string;
  code: string;
  name: Record<Locale, string>;
  description: Record<Locale, string>;
  category: CategorySlug;
  price: number;
  weightGrams?: number;
  volumeMl?: number;
  caloriesKcal?: number;
  prepTimeMinutes?: number;
  imageUrl?: string;
  isAvailable: boolean;
  isChefSpecial?: boolean;
  isNew?: boolean;
  isHalalCertified?: boolean;
  ingredients?: string[];
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export type OrderStatus =
  | 'pending'
  | 'confirmed'
  | 'preparing'
  | 'delivering'
  | 'delivered'
  | 'cancelled';

export type PaymentMethod = 'payme' | 'click' | 'cash' | 'terminal';

export interface OrderItem {
  dishId: string;
  dishName: string;
  quantity: number;
  unitPrice: number;
  note?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  deliveryAddress: string;
  addressLandmark?: string;
  items: OrderItem[];
  subtotal: number;
  deliveryFee: number;
  serviceFee: number;
  total: number;
  paymentMethod: PaymentMethod;
  paymentStatus: 'paid' | 'pending' | 'refunded';
  status: OrderStatus;
  createdAt: string;
  specialInstructions?: string;
  assignedCourier?: {
    name: string;
    phone: string;
  };
}

export type ReservationStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface Reservation {
  id: string;
  reservationNumber: string;
  guestName: string;
  guestPhone: string;
  guestEmail?: string;
  date: string;
  time: string;
  guestsCount: string;
  tableArea: 'vip_room' | 'main_hall' | 'patio' | 'window';
  specialWishes?: string;
  status: ReservationStatus;
  createdAt: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email?: string;
  totalOrders: number;
  totalSpent: number;
  isVip: boolean;
  lastVisit: string;
}
