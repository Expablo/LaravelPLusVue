<template>
  <div class="welcome">
    <h1>BEM-VINDO</h1>
  </div>
</template>

<script>
  export default {
    name: 'home',
    props: {
      data: {
        type: String,
        default: null,
      },
    },
  };
</script>
<style scoped>
  .welcome{
    background: #0e1726;
    margin: 50px auto;
    color: #eee;
    text-align: center;
    border-radius: 5px;
    width: 70%;
    padding: 30px;
  }
  h1{
    font-size: 30px;
  }
  h2{
    font-size: 22px;
  }
</style>