<template>
  <div class="wrapper">
    <img src="../assets/logIn.png">
    <h1>I'm already a Task Lover!</h1>
    <Input v-model="form.email" label="Email" type="email" placeholder="Enter your email" />
    <Input v-model="form.password" label="Password" type="password" placeholder="Enter your password" />
    <Button class="btn" text="Log in" @click="logIn" />
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import Button from './actionables/ButtonComponent.vue';
import Input from './actionables/FormInputComponent.vue';

export default {
  components: {
    Button,
    Input,
  },
  setup() {
    const router = useRouter();

    function logIn() {
      router.push({
        name: 'todos',
      });
    }

    const form = ref({
      email: '',
      password: '',
    });

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
