<template>
  <form id="signin" @submit.prevent="signIn">
    <img src="@assets/images/SignIn.png">
    <h1>I'm already a Task Lover!</h1>
    <InputComponent v-model="form.email" label="Email" type="email" placeholder="Enter your email" autocomplete="username" />
    <InputComponent v-model="form.password" label="Password" type="password" placeholder="Enter your password" autocomplete="current-password" />
    <ButtonComponent class="btn" text="Sign in" />
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

const form = reactive({
  email: '',
  password: '',
});

async function signIn() {
  if (!form.email) {
    alert('Email missing');
    return;
  }
  if (!form.password) {
    alert('Password missing');
    return;
  }

  const { error } = await userStore.signIn(form.email, form.password);

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
      alert('Given credentials are invalid!');
    }
  }, 500);
}
</script>

<style scoped>
form {
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
.btn {
  width: 14rem;

  margin: 2rem 0;
  text-align: center;
}
</style>
