import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mypiqbkyiwcxhznclbcl.supabase.co';
const supabaseAnonKey = 'YOUR_SUPABASE_ANON_KEY'; // Ganti dengan key kamu

export const supabase = createClient(supabaseUrl, supabaseAnonKey);