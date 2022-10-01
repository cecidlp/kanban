<template>
  <div class="wrapper">
    <img src="@assets/images/logIn.png">
    <h1>I'm already a Task Lover!</h1>
    <InputComponent v-model="form.email" label="Email" type="email" placeholder="Enter your email" />
    <InputComponent v-model="form.password" label="Password" type="password" placeholder="Enter your password" />
    <ButtonComponent class="btn" text="Log in" @click="logIn" />
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

import ButtonComponent from './actionables/ButtonComponent.vue';
import InputComponent from './actionables/FormInputComponent.vue';

import { logInSupabase } from '../userAuth.jsx';

export default {
  components: {
    ButtonComponent,
    InputComponent,
  },
  setup() {
    const router = useRouter();

    const form = reactive({
      email: '',
      password: '',
    });

    async function logIn() {
      const { error } = await logInSupabase(form.email, form.password);

      if (error !== null) {
        // TODO: Better error handling
        alert(error.message);
        return false;
      }
      router.push({
        name: 'todos',
      });

      return true;
    }

    return {
      logIn,
      form,
    };
  },
};
</script>

<style scoped>
.wrapper {
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
