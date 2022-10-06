<!-- eslint-disable no-console -->
<template>
  <div class="todo-page">
    <div>
      <h1>Your projects</h1>
    </div>
    <ToDoListComponent />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import ToDoListComponent from '../components/ToDoListComponent.vue';

// TODO: Move this to TodoPage
import { useUserStore } from '../store/user';

const router = useRouter();
const userStore = useUserStore();
if (!userStore.isSignedIn) {
  router.push({
    name: 'index',
  });
}
</script>

<style scoped>
.todo-page {
  max-width: 1000px;
  margin: auto;
  margin-top: 60px;
}

h1 {
  color: #050f43;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
</style>
