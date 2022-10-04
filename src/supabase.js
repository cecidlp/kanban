import { createTask } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const key = import.meta.env.VITE_SUPABASE_KEY;

// eslint-disable-next-line import/prefer-default-export
export const supabase = createTask(url, key);
