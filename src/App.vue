<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  created() {
    this.$store.dispatch("getFilteredResult", {
      category: "",
      country: "",
      keyword: ""
    });
  }
};
</script>

<style>
body {
  background: hsl(0deg 0% 80%);
  font-family: "Open Sans", sans-serif;
}
h1 {
  margin: 0px;
}
</style>
