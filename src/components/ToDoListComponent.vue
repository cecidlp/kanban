<template>
  <div class="todo-list">
    <div class="todo-column">
      <h2 class="todo-column-title">
        To Do
      </h2>
      <div v-for="(todo, index) in todoList" :key="index">
        <ToDoComponent v-if="todo.status === 0" :data="todo" />
      </div>
    </div>
    <div class="todo-column">
      <h2 class="todo-column-title">
        In progress
      </h2>
      <div v-for="(todo, index) in todoList" :key="index">
        <ToDoComponent v-if="todo.status === 1" :data="todo" />
      </div>
    </div>
    <div class="todo-column">
      <h2 class="todo-column-title">
        Done
      </h2>
      <div v-for="(todo, index) in todoList" :key="index">
        <ToDoComponent v-if="todo.status === 2" :data="todo" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';
import { useTodoStore } from '../store/todo';

// TODO: Move this to TodoPage
import { useUserStore } from '../store/user';
import ToDoComponent from './ToDoComponent.vue';

const router = useRouter();
const userStore = useUserStore();
if (!userStore.isSignedIn) {
  router.push({
    name: 'index',
  });
}

const todoStore = useTodoStore();

const { todoList } = storeToRefs(todoStore);
todoStore.updateList();

/* console.log(todoList.value); */
</script>

<style scoped>
.todo-list {
  max-width: 1000px;
  margin: auto;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-evenly;
  align-items: flex-start;

  margin-top: 60px;
}

.todo-column {
  width: 30%;
}
</style>
