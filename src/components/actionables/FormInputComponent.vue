<template>
  <div class="input-wrapper">
    <label>{{ label }}</label>
    <input
      v-model="input"
      :type="type"
      :placeholder="placeholder"
    >
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: { type: String, default: '' },
  label: { type: String, default: '' },
  type: { type: String, default: 'text' },
  placeholder: { type: String, default: '' },
});

const emit = defineEmits(['update:modelValue']);

const input = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>

<style scoped>
.input-wrapper{
  width: 14rem;

  margin: 0.4rem 0
}
label {
  display: block;
  color: var(--text-color);
  font-size: 14px;
  letter-spacing: 0px;
  line-height: 16px;
  text-align: left;

  margin: 0.8rem 0;
}
input {
  width: 100%;
  padding: 0.4rem;
  box-sizing: border-box;

  border: 0;
  border-radius: 10px;
  box-shadow: 0px 0px 12px 1px rgb(3 3 3 / 10%);

  outline: none;
}
</style>
