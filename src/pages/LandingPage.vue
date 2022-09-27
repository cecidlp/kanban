<script setup>
import { useRouter } from 'vue-router';

import ButtonComponent from '../components/actionables/ButtonComponent.vue';

const router = useRouter();

function goToSignIn() {
  router.push({
    name: 'signin',
  });
}

</script>

<template>
  <div>
    <h1>Get your life together with Task Lovers!</h1>
    <img src="../assets/landingPage.jpg">
    <span>
      Suck at keeping an organized life?
    </span>
    <span>
      Let us help you!
    </span>
    <ButtonComponent class="btn" button-text="Get Started" @click="goToSignIn" />
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
