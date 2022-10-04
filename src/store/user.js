import { ref } from 'vue';
import { defineStore } from 'pinia';
import { createClient } from '@supabase/supabase-js';

export const useUserStore = defineStore('user', () => {
  const client = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);
  const isSignedIn = ref(!!client.auth.user());

  async function signUp(email, password) {
    isSignedIn.value = true;
    return client.auth.signUp({
      email,
      password,
    });
  }
  async function signIn(email, password) {
    isSignedIn.value = true;
    return client.auth.signIn({
      email,
      password,
    });
  }
  function getData() {
    isSignedIn.value = !!client.auth.user();
    return client.auth.user();
  }
  function signOut() {
    isSignedIn.value = false;
    return client.auth.signOut();
  }

  return {
    signUp, signIn, getData, signOut, isSignedIn,
  };
});
