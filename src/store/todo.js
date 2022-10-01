import { defineStore } from 'pinia';
import { createClient } from '@supabase/supabase-js';

export const useUserStore = defineStore('user', () => {
  const client = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

  async function signUp(email, password) {
    return client.auth.signUp({
      email,
      password,
    });
  }
  async function signIn(email, password) {
    return client.auth.signIn({
      email,
      password,
    });
  }
  function getData() {
    return client.auth.user();
  }
  function signOut() {
    return client.auth.signOut();
  }

  return {
    signUp, signIn, getData, signOut,
  };
});
