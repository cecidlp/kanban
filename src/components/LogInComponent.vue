<template>
  <div class="page-wrapper">
    <img src="../assets/logIn.png">
    <h1>I'm already a Task Lover!</h1>
    <FormInputComponent v-model="form.email" label="Email" type="email" placeholder="Enter your email" />
    <FormInputComponent v-model="form.password" label="Password" type="password" placeholder="Enter your password" />
  </div>
</template>

<script>
import { ref } from 'vue';

import FormInputComponent from './actionables/FormInputComponent.vue';

export default {
  components: {
    FormInputComponent,
  },
  setup() {
    const form = ref({
      email: '',
      password: '',
      confirmPassword: '',
    });

    return {
      form,
    };
  },
};
</script>

<style scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 12rem;
  margin: 3rem 0 1rem 0;
}
h1 {
  margin-bottom: 2rem;
}
</style>
