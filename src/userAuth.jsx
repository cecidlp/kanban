import { createClient } from '@supabase/supabase-js';

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

export async function signUpSupabase(email, password) {
  return supabase.auth.signUp({
    email,
    password,
  });
}

export async function logInSupabase(email, password) {
  return supabase.auth.signIn({
    email,
    password,
  });
}
