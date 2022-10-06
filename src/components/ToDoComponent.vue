<template>
  <div :class="taskClass" @mouseover="handleMouseOver()" @mouseleave="handleMouseLeave()">
    <span class="task-title">{{ data.title }}</span>
    <RemoveIcon v-if="mouseOver" class="task-delete" @click="deleteTodo()" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useTodoStore } from '../store/todo';
import RemoveIcon from './icons/RemoveIcon.vue';

const todoStore = useTodoStore();
const mouseOver = ref(false);

const props = defineProps({
  data: { type: Object, required: true },
});

const taskClass = computed(() => {
  let classStr = 'task';

  if (mouseOver.value) {
    classStr += ' active';
  }

  if (props.data.status === 2) {
    classStr += ' task-done';
  } else if (props.data.status === 1) {
    classStr += ' task-in-progress';
  } else {
    classStr += ' task-todo';
  }
  return classStr;
});

function deleteTodo() {
  todoStore.deleteTodo(props.data.id);
  /* todoStore.getList(); */
}

function handleMouseOver() {
  mouseOver.value = true;
}

function handleMouseLeave() {
  mouseOver.value = false;
}

</script>

<style scoped>
.task {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  height: 6rem;
  margin: 4%;
  margin-left: 0;
  border-radius: 1rem;
  padding-left: 2%;
  border-bottom: 1px solid grey;
}
.task.active {
  justify-content: space-between;
  font-weight: bold;
}

.task-title {
  margin-left: 10px;
  color: var(--title-color);
  font-size: 1rem;
  margin-left: 4%;
  user-select: none;
}

.task-todo {
  background-color: var(--component-one);
}
.task-in-progress {
  background-color: var(--component-two);
}
.task-done {
  background-color: var(--component-three);
}

.task-delete {
  width: 1.5rem;
  margin-right: 0.5rem;
}

.task-delete:hover {
  opacity: 0.5;
  transition: .5s;
}
</style>
