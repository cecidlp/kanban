<template>
  <div class="wrapper">
    <h1>Get ready to be the best version of yourself!</h1>
    <Input v-model="form.email" label="Email" type="email" placeholder="Enter your email" />
    <Input v-model="form.password" label="Password" type="password" placeholder="Enter your password" />
    <Input v-model="form.password" label="Confirm your password" type="password" placeholder="Confirm your password" />
    <Button class="btn" text="Register" @click="signIn" />
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

    function signIn() {
      router.push({
        name: 'todos',
      });
    }

    const form = ref({
      email: '',
      password: '',
    });

    return {
      signIn,
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
