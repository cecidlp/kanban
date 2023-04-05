<script setup>
import { useRouter } from 'vue-router';
import { useUserStore } from '../store/user.js';

import Button from '../components/actionables/ButtonComponent.vue';

const router = useRouter();
const userStore = useUserStore();

if (userStore.isSignedIn) {
  router.push({
    name: 'todos',
  });
}

function goToSignUp() {
  router.push({
    name: 'signup',
  });
}
</script>

<template>
  <div>
    <h1>Get your life together with Task Lovers!</h1>
    <img src="@assets/images/landingPage.jpg">
    <span>
      Suck at keeping an organized life?
    </span>
    <span>
      Let us help you!
    </span>
    <Button class="btn" text="Get Started" @click="goToSignUp" />
  </div>
</template>

<style scoped>
div {
  margin: 4rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  width: 100%;
  margin-bottom: 1rem;
}
span {
  display: block;
  text-align: center;
}
.btn {
  width: 14rem;

  margin: 2rem 0;
  text-align: center;
}
@media only screen and (min-width: 700px) {
  img {
    width: 50rem;
  }
}
</style>
