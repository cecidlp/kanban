<template>
  <div :class="taskClass" @mouseover="handleMouseOver()" @mouseleave="handleMouseLeave()" @mousedown="handleMouseClick()" @click="handleClickTitle()">
    <span v-if="!inputFocus" class="task-title">{{ title }}</span>
    <input v-else v-model="title" class="task-title" @keyup.enter="changeTitle()" @keyup.escape="handleMouseLeave()">
    <RemoveIcon v-if="mouseOver && !inputFocus" class="task-icon" @blur="handleBlurTitle()" @click="deleteTask()" />
    <CheckIcon v-if="inputFocus" class="task-icon" @click="changeTitle()" />
    <CloseIcon v-if="inputFocus" class="task-icon" @click="handleMouseLeave()" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useTodoStore } from '../store/todo';
import RemoveIcon from './icons/RemoveIcon.vue';
import CheckIcon from './icons/CheckIcon.vue';
import CloseIcon from './icons/CloseIcon.vue';

const todoStore = useTodoStore();
const mouseOver = ref(false);
const inputFocus = ref(false);

const props = defineProps({
  data: { type: Object, required: true },
});

// Cool trick / Ñapa
// I need to have a reactive variable, but at the same time, I need to not be bounded to the prop data
// by using ref(prop.var) I copy the current value without bounding
const title = ref(props.data.title);

const taskClass = computed(() => {
  let classStr = 'task';

  if (mouseOver.value) {
    classStr += ' active';
  }

  // Set class to identify new task being created (to be deleted)
  if (props.data.id === undefined) {
    classStr += ' dummy';
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

function deleteTask() {
  todoStore.deleteTodo(props.data.id);
}

const emit = defineEmits(['newTaskDone', 'taskClick']);

function changeTitle() {
  // Check if its the case of a new task being created
  if (props.data.id !== undefined) {
    // If title is empty, just delete the task
    if (title.value === '') {
      deleteTask();
    }
    todoStore.changeTitle(props.data.id, title.value);
    inputFocus.value = false;
  } else {
    // If a new task was being created, emit event to parent to hide placeholder and save new task
    emit('newTaskDone', title.value);
  }
}

function handleMouseClick() {
  emit('taskClick', props.data.id);
}

function handleClickTitle() {
  inputFocus.value = true;
  // Input does not exists yet, by using SetTimeout we fix it
  setTimeout(() => { document.querySelector('input').focus(); }, 100);
}
function handleBlurTitle() {
  if (!mouseOver.value) {
    inputFocus.value = false;
  }
}

function handleMouseOver() {
  mouseOver.value = true;
}

function handleMouseLeave() {
  mouseOver.value = false;
  inputFocus.value = false;
  // If the element if focused, remove focused (if input exists)
  // by using `?.` we avoid accesing its values and functions if is null
  document.querySelector('input')?.blur();
  title.value = props.data.title;

  /* deleteTaskIfEmpty(); */
}

defineExpose({ handleClickTitle });

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
  background-color: inherit;
  font-size: 1rem;
  margin-left: 4%;
  user-select: none;
  border: none;
  outline: none;
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

.task-icon {
  width: 1.5rem;
  margin-right: 0.5rem;
  user-select: none;
}

.task-icon:hover {
  opacity: 0.5;
  transition: .5s;
}
</style>
