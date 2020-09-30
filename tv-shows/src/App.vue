<template>
  <div id="app" class="container-fluid bg-color">
    <router-view> </router-view>
  </div>
</template>
<script>
export default {
  name: "app"
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.common-height {
  margin-top: 60px;
}
</style>
