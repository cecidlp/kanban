import { ref } from 'vue';
import { defineStore } from 'pinia';
import { createClient } from '@supabase/supabase-js';

export const useUserStore = defineStore('user', () => {
  const client = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

  const isSignedIn = ref(!!client.auth.user());

  async function signUp(email, password) {
    const { user, error } = client.auth.signUp({
      email,
      password,
    });

    if (!error) {
      isSignedIn.value = true;
    }

    return { user, error };
  }
  async function signIn(email, password) {
    const { user, error } = client.auth.signIn({
      email,
      password,
    });

    if (!error) {
      isSignedIn.value = true;
    }

    return { user, error };
  }
  function getData() {
    const { user } = client.auth.user();
    isSignedIn.value = !!user;
    return user;
  }
  function signOut() {
    const { error } = client.auth.signOut();

    if (!error) {
      isSignedIn.value = false;
    }

    return error;
  }

  return {
    signUp, signIn, getData, signOut, isSignedIn,
  };
});
