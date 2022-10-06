<template>
  <div class="todo-list">
    <div class="todo-column">
      <h2 class="todo-column-title">
        To Do
      </h2>
      <div v-for="(todo, index) in todoList" :key="index">
        <ToDoComponent v-if="todo.status === 0" :data="todo" />
      </div>
      <ToDoComponent v-show="creatingTask" ref="newTaskRef" :data="taskTemplate" @new-task-done="createNewTask" />
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
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useTodoStore } from '../store/todo';
import ToDoComponent from './ToDoComponent.vue';

const todoStore = useTodoStore();

const { todoList } = storeToRefs(todoStore);
todoStore.updateList();

const creatingTask = ref(false);
const newTaskRef = ref(null);

const taskTemplate = ref({
  title: '',
  status: 0,
});

function newTask() {
  creatingTask.value = true;
  newTaskRef.value.handleClickTitle();
}
function createNewTask(title) {
  creatingTask.value = false;
  taskTemplate.value = {
    title: '',
    status: 0,
  };
  todoStore.newTodo(title);
}

defineExpose({
  newTask,
});
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
