/**
 * Supabase Client Configuration & Types
 * 
 * Ready for the next phase: Supabase Integration (PostgreSQL, Auth, Storage).
 * When NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY (or VITE_SUPABASE_*)
 * environment variables are supplied, this connects directly to your Supabase project.
 */

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

export const getSupabaseConfig = (): SupabaseConfig => {
  const url =
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SUPABASE_URL) ||
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_SUPABASE_URL) ||
    '';
  const anonKey =
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_SUPABASE_ANON_KEY) ||
    (typeof import.meta !== 'undefined' && (import.meta as any).env?.VITE_SUPABASE_ANON_KEY) ||
    '';

  return { url, anonKey };
};

export const isSupabaseConfigured = (): boolean => {
  const { url, anonKey } = getSupabaseConfig();
  return Boolean(url && anonKey);
};

// Database Schema Table Names for Next Phase
export const DB_TABLES = {
  CATEGORIES: 'categories',
  DISHES: 'dishes',
  ORDERS: 'orders',
  ORDER_ITEMS: 'order_items',
  RESERVATIONS: 'reservations',
  CUSTOMERS: 'customers',
  CONTENT: 'content_blocks',
  GALLERY: 'gallery_items',
} as const;
