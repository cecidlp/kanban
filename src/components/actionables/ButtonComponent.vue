<script>
export default {
  props: {
    text: { type: String, default: 'I\'m a button!' },
  },
};
</script>

<template>
  <button>{{ text }}</button>
</template>

<style scoped>
  button {
    padding: 0.4rem;

    color: white;
    font-family: Gelion, Helvetica, "Helvetica Neue", Arial;
    line-height: 1.5;
    font-size: 15px;

    background: #F2735B;

    border-radius: 5px;
    border-color: #F2735B;
  }
  button:hover {
      opacity: 0.7;
      transition: 0.5s;
  }
</style>
