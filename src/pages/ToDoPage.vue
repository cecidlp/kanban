<!-- eslint-disable no-console -->
<template>
  <div class="todo-page">
    <div class="heading">
      <h1>Your projects</h1>
      <ButtonComponent text="New task" @click="newTaskInChild()" />
    </div>
    <ToDoListComponent ref="childRef" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import ToDoListComponent from '../components/ToDoListComponent.vue';
// TODO: Move this to TodoPage
import { useUserStore } from '../store/user';
import ButtonComponent from '../components/actionables/ButtonComponent.vue';

const childRef = ref(null);

const router = useRouter();
const userStore = useUserStore();
if (!userStore.isSignedIn) {
  router.push({
    name: 'index',
  });
}
function newTaskInChild() {
  childRef.value.newTask();
}

</script>

<style scoped>
.todo-page {
  max-width: 1000px;
  margin: auto;
  margin-top: 60px;
}

.heading {
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  align-items: center;
}

h1 {
  color: #050f43;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
</style>
