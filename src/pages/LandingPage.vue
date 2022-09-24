<script setup>
import { useRouter } from 'vue-router';

import ButtonComponent from '../components/ButtonComponent.vue';

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
  h1 {
    color: rgb(5, 15, 67);
    font-weight: 700;
    font-size: 24px;
  }
  img {
    width: 100%;
    margin-bottom: 1rem;
  }
  span {
    display: block;
    color: rgb(37, 82, 82);
    font-family: Roboto;
    font-size: 15px;
    letter-spacing: 0px;
    line-height: 20px;
    text-align: center;
  }
  .btn {
    width: 14rem;

    margin: 2rem 0;
    text-align: center;
  }
</style>
