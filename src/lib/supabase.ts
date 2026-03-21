import { createClient } from '@supabase/supabase-js';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || "https://xxxxx.supabase.co";

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY || "ТВОЙ_ANON_KEY_СЮДА";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
