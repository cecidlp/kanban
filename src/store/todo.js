import { defineStore } from 'pinia';
import { createClient } from '@supabase/supabase-js';
import { useUserStore } from './user';

const todosCollection = 'todos_list';

export const useTodoStore = defineStore('todo', () => {
  const client = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

  const userAuth = useUserStore();
  const userID = userAuth.getData().id;

  async function GetList() {
    const { data, error } = await client
      .from(todosCollection)
      .select('*')
      .eq('user_id', userID);
    return { data, error };
  }
  async function New(title, status = 0) {
    // 0 = todo  |  1 = in progress  |  2 = done
    const date = new Date();
    const { data, error } = await client
      .from(todosCollection)
      .insert([
        {
          user_id: userID, title, status, created_at: date.toJSON(), updated_at: date.toJSON(),
        },
      ]);
    return { data, error };
  }
  async function Delete(id) {
    const { error } = await client
      .from(todosCollection)
      .delete()
      .eq('user_id', userID)
      .eq('id', id);
    return error;
  }
  async function ChangeTitle(id, title) {
    const date = new Date();
    const { data, error } = await client
      .from(todosCollection)
      .update({ title })
      .update({ updated_at: date.toJSON() })
      .eq('user_id', userID)
      .eq('id', id);
    return { data, error };
  }
  async function ChangeStatus(id, status) {
    const date = new Date();
    const { data, error } = await client
      .from(todosCollection)
      .update({ status })
      .update({ updated_at: date.toJSON() })
      .eq('user_id', userID)
      .eq('id', id);
    return { data, error };
  }

  return {
    GetList, New, Delete, ChangeTitle, ChangeStatus,
  };
});
