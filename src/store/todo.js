import { defineStore } from 'pinia';
import { createClient } from '@supabase/supabase-js';
import { ref } from 'vue';
import { useUserStore } from './user';

const todosCollection = 'todos_list';

export const useTodoStore = defineStore('todo', () => {
  const client = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_KEY);

  const userAuth = useUserStore();
  const userID = userAuth.getData().id;

  const todoList = ref({});

  async function updateList() {
    const { data, error } = await client
      .from(todosCollection)
      .select('*')
      .eq('user_id', userID);
    todoList.value = data;
    return { error };
  }

  async function newTodo(title, status = 0) {
    // 0 = todo  |  1 = in progress  |  2 = done
    const date = new Date();
    const { error } = await client
      .from(todosCollection)
      .insert([
        {
          user_id: userID, title, status, created_at: date.toJSON(), updated_at: date.toJSON(),
        },
      ]);

    updateList();

    return { error };
  }
  async function deleteTodo(id) {
    const { error } = await client
      .from(todosCollection)
      .delete()
      .eq('user_id', userID)
      .eq('id', id);

    updateList();

    return error;
  }
  async function changeTitle(id, title) {
    const date = new Date();
    const { error } = await client
      .from(todosCollection)
      .update({ title, updated_at: date.toJSON() })
      .eq('user_id', userID)
      .eq('id', id);

    updateList();

    return { error };
  }
  async function changeStatus(id, status) {
    const date = new Date();
    const { error } = await client
      .from(todosCollection)
      .update({ status, updated_at: date.toJSON() })
      .eq('user_id', userID)
      .eq('id', id);

    updateList();

    return { error };
  }

  return {
    todoList, updateList, newTodo, deleteTodo, changeTitle, changeStatus,
  };
});
