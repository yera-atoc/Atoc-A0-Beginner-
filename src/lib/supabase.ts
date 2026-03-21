import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ?? "https://xxxxx.supabase.co";

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ?? "eyJhbGciOi...";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase ENV missing");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
