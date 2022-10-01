<template>
  <div class="wrapper">
    <h1>Get ready to be the best version of yourself!</h1>
    <InputComponent v-model="form.email" label="Email" type="email" placeholder="Enter your email" />
    <InputComponent v-model="form.password" label="Password" type="password" placeholder="Enter your password" />
    <InputComponent v-model="form.confirmPassword" label="Confirm your password" type="password" placeholder="Confirm your password" />
    <ButtonComponent class="btn" text="Register" @click="signUp" />
  </div>
</template>

<script>
import { reactive } from 'vue';

import { useRouter } from 'vue-router';

import ButtonComponent from './actionables/ButtonComponent.vue';
import InputComponent from './actionables/FormInputComponent.vue';

import { signUpSupabase } from '../userAuth.jsx';

export default {
  components: {
    ButtonComponent,
    InputComponent,
  },
  setup() {
    const router = useRouter();

    // TODO: Check that both password match
    const form = reactive({
      email: '',
      password: '',
      confirmPassword: '',
    });

    async function signUp() {
      const { error } = await signUpSupabase(form.email, form.password);

      if (error !== null) {
        // TODO: Better error handling
        alert(error.message);
        return false;
      }

      // TODO: Message to handle email validation

      router.push({
        name: 'todos',
      });
      return true;
    }

    return {
      signUp,
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
