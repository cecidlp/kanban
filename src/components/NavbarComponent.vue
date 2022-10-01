<template>
  <div class="navBar">
    <div>
      <IronhackIcon class="icon ironhack-icon" @click="goToLanding" />
      <UserIcon v-if="!logOut" class="icon account-icon" @click="goToLogIn" />
      <LogOutIcon v-else class="icon account-icon" @click="goToLanding" />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

import IronhackIcon from './icons/IronhackIcon.vue';
import UserIcon from './icons/UserIcon.vue';
import LogOutIcon from './icons/LogOutIcon.vue';

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

<script>
export default {
  props: {
    logOut: { type: Boolean, default: false },
  },
};
</script>

<style scoped>
  .navBar {
    box-shadow: 0 2px 20px -3px rgb(0 0 0 / 10%);
  }
  .navBar > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .ironhack-icon {
    width: 2rem;
    height: 2rem;
    margin: 1rem;
    filter: hue-rotate(36deg);
  }
  .account-icon {
    color: #f2735b;
    /* height: 1.3rem; */
    width: 2rem;
    margin: 1rem;
  }
  .icon:hover {
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
