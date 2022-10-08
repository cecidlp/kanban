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

const userStore = useUserStore();
const router = useRouter();

if (userStore.isSignedIn) {
  router.push({
    name: 'todos',
  });
}

// TODO: Check that both password match
const form = reactive({
  email: '',
  password: '',
  confirmPassword: '',
});

async function signUp() {
  if (!form.email) {
    alert('Email missing');
    return;
  }
  if (!form.password) {
    alert('Password missing');
    return;
  }
  if (!form.confirmPassword) {
    alert('Confirm password missing');
    return;
  }
  if (form.password !== form.confirmPassword) {
    alert('Password doesn\'t match');
    return;
  }

  const { error } = await userStore.signUp(form.email, form.password);

  if (error) {
    alert(error);
    return;
  }

  setTimeout(() => {
    if (userStore.getData()) {
      router.push({
        name: 'todos',
      });
    } else {
      alert('Account creation failed!');
    }
  }, 1000);
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
