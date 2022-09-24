<template>
  <div class="navBar">
    <img class="logo" src="/src/assets/pngwing.com.png" alt="Ironhack logo">
    <a class="buttonUser" href="/login">
      <font-awesome-icon class="userIcon" icon="fa-solid fa-user" />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
@media only screen and (max-width: 600px) {
  body {
    margin: 0%;
  }
  .navBar {
    display: flex;
    justify-content: space-between;
    box-shadow: 0 2px 20px -3px rgb(0 0 0 / 10%)
  }
  .logo {
    width: 10%;
    margin: 5%;
  }
  .buttonUser {
    width: 10%;
    margin: 5%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .userIcon {
    color: #f2735b;
    height: 50%;

  }
}
</style>
