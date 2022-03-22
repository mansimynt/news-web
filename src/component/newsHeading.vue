<template>
  <div class="news-header">
    <p class="news-main-title">React News Search & Bookmarks</p>
    <div class="top-news-title">
      <router-link to="/"> Top News</router-link>
      <router-link to="/Bookmarks">Bookmarks</router-link>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    // this.$store.dispatch("getDefaultNewsData");
    this.$store.dispatch("getFilteredResult", {
      category: "",
      country: "",
      keyword: ""
    });
  }
};
</script>

<style scoped>
.news-header {
  background-color: hsl(210deg 10% 23%);
  color: rgb(255, 255, 255);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px

}
*{
  margin: 0;
  padding: 0;
  
}
a{
 color: rgb(172, 169, 169);
  text-decoration: none;
}
.top-news-title{
  font-size: 17px;
}
/* .news-header {
 
  justify-content: space-between;
  height: 70px;
  display: flex;
 
  font-size: 16px;
  font-weight: lighter;
  padding: 5px;
} */
.news-main-title {
  
  font-size: 19px;
}
h2 a {
  color: rgb(168, 175, 182);
  text-decoration: none;
}

.router-link-exact-active {
  color: white;
  text-decoration: none;
  border-bottom: 5px solid darkgray;
 
}
@media screen and (min-width: 1070px) {
  .news-main-title {
    font-size: 25px;
  }
  .news-header {
    padding: 0px 50px 0px 80px;
  }
  .top-news-title{
  font-size: 21px;
}
}
</style>
