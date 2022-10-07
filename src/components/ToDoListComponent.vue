<template>
  <div class="todo-list" @mousedown="handleMouseDown()" @mouseup="handleMouseUp()">
    <div class="todo-column" @mouseenter="handleMouseOver(0)">
      <h2 class="todo-column-title">
        To Do
      </h2>
      <div v-for="(todo, index) in todoList" :key="index">
        <ToDoComponent v-if="todo.status === 0" :data="todo" @task-click="handleTaskClick" />
      </div>
      <ToDoComponent v-show="creatingTask" ref="newTaskRef" :data="taskTemplate" @new-task-done="createNewTask" />
    </div>
    <div class="todo-column" @mouseenter="handleMouseOver(1)">
      <h2 class="todo-column-title">
        In progress
      </h2>
      <div v-for="(todo, index) in todoList" :key="index">
        <ToDoComponent v-if="todo.status === 1" :data="todo" @task-click="handleTaskClick" />
      </div>
    </div>
    <div class="todo-column" @mouseenter="handleMouseOver(2)">
      <h2 class="todo-column-title">
        Done
      </h2>
      <div v-for="(todo, index) in todoList" :key="index">
        <ToDoComponent v-if="todo.status === 2" :data="todo" @task-click="handleTaskClick" />
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

let isMouseDown = false;
let currentMouseOverStatus = -1;
let currentDragableTask = -1;

function handleMouseDown() {
  isMouseDown = true;
}
function handleMouseUp() {
  isMouseDown = false;
  if (currentMouseOverStatus !== -1 && currentDragableTask !== -1) {
    todoStore.changeStatus(currentDragableTask, currentMouseOverStatus);
    currentMouseOverStatus = -1;
    currentDragableTask = -1;
  }
}

function handleMouseOver(id) {
  if (isMouseDown) {
    currentMouseOverStatus = id;
  }
}

function handleTaskClick(value) {
  currentDragableTask = value;
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

h2 {
  user-select: none;
}
</style>
