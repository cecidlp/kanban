<template>
  <div class="navBar">
    <div>
      <img class="logo" src="/src/assets/ironhack-logo.svg" alt="Ironhack logo" @click="goToLanding">
      <font-awesome-icon class="user" icon="fa-solid fa-user" @click="goToLogIn" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

function goToLanding() {
  router.push({
    name: 'index',
  });
}

function goToLogIn() {
  router.push({
    name: 'login',
  });
}
</script>

<style>
  .navBar {
    box-shadow: 0 2px 20px -3px rgb(0 0 0 / 10%);
  }
  .navBar > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo {
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    filter: hue-rotate(36deg);
  }
  .user {
    color: #f2735b;
    height: 1.3rem;
    width: 2rem;
    margin: 1rem;
  }
  .user:hover {
    opacity: 0.7;
    transition: 0.5s;
  }

 @media only screen and (min-width: 600px) {
  .navBar > div {
    width: 90rem;
  }
  .navBar {
    display: flex;
    justify-content: center;
  }
}
</style>
