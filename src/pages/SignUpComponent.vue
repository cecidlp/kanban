<template>
  <form id="signup" @submit.prevent="signUp">
    <h1>Get ready to be the best version of yourself!</h1>
    <InputComponent v-model="form.email" label="Email" type="email" placeholder="Enter your email" />
    <InputComponent v-model="form.password" label="Password" type="password" placeholder="Enter your password" />
    <InputComponent v-model="form.confirmPassword" label="Confirm your password" type="password" placeholder="Confirm your password" />
    <ButtonComponent class="btn" text="Register" />
  </form>
</template>

<script setup>
import { reactive } from 'vue';

import { useRouter } from 'vue-router';

import ButtonComponent from '../components/actionables/ButtonComponent.vue';
import InputComponent from '../components/actionables/FormInputComponent.vue';

import { useUserStore } from '../store/user.js';

const userAuth = useUserStore();
const router = useRouter();

// TODO: Check that both password match
const form = reactive({
  email: '',
  password: '',
  confirmPassword: '',
});

async function signUp() {
  const { error } = await userAuth.signIn(form.email, form.password);

  if (error !== null) {
    // TODO: Better error handling
    alert(error.message);
  }

  // TODO: Message to handle email validation

  router.push({
    name: 'todos',
  });
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  width: 16rem;
  margin: 3rem 0 0.4rem 0;

  text-align: center;
}
.btn {
  width: 14rem;

  margin: 2rem 0;
  text-align: center;
}
</style>
