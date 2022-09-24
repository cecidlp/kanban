<template>
  <div>
    <h1>Log In</h1>
  </div>
</template>

<!-- eslint-disable no-console -->
<script setup>
// eslint-disable-next-line no-unused-vars
import { mounted, ref } from 'vue';
import { supabase } from '../supabase';

// eslint-disable-next-line no-undef
const data = { task };
const res = supabase.from('todos_list').insert(data.task);

mounted(() => {
  console.log(res);
});
</script>
