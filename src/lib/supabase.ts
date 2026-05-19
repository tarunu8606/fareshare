import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Browser-safe client — uses anon key, respects Row Level Security
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-only client — uses service role key, bypasses Row Level Security
// Only import this in server-side code (API routes, server actions)
export const supabaseAdmin = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
