<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: { },
  name: "app",
  props: ["name"],
  data: function() {
    return {
      msg: "Welcome to Your Vue.js App",
      display: true
    };
  }
};
</script>

<style>
body {
 background: hsl(0deg 0% 80%);
 font-family: 'Open Sans', sans-serif;
}
h1 {
  margin: 0px;
}
</style>
