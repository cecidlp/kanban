<script setup>
import NavbarComponent from './components/NavbarComponent.vue';
</script>

<template>
  <div class="app">
    <NavbarComponent />
    <router-view />
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto");

:root {
  --button-color: #f2735b;
  --title-color: #050f43;
  --subtitle-landing: #255252;
  --text-color: #030303;

  /* Paletas de colores a usar en los ToDo components*/

  --component-one: #96d0c7;
  --component-two: #e8a695;
  --component-three: #f4cc7f;
  --component-four: #f2735b;
}

* {
  font-family: Roboto;
  margin: 0;
  color: var(--text-color)
}

h1 {
  color: var(--title-color);
  font-weight: 700;
  font-size: 24px;
}

span {
  color: var(--subtitle-landing);
  font-size: 15px;
  letter-spacing: 0px;
  line-height: 20px;
}
</style>
