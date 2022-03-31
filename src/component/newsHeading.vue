<template>
  <div class="news-header">
    <p class="news-main-title">React News Search & Bookmarks</p>
    <div class="top-news-title">
      <router-link to="/"> Top News</router-link>
      <router-link to="/Bookmarks">Bookmarks</router-link>
    </div>
  </div>
</template>
<style scoped>
.news-header {
  background-color: hsl(210deg 10% 23%);
  color: rgb(255, 255, 255);
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
}
* {
  margin: 0;
  padding: 0;
}
a {
  color: rgb(172, 169, 169);
  text-decoration: none;
}
.top-news-title {
  font-size: 17px;
}
.news-main-title {
  font-size: 17px;
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
    font-size: 27px;
  }
 
  .top-news-title {
    font-size: 22px;
  }
}
@media screen and (min-width: 800px) {
  .news-main-title {
    font-size: 25px;
  }
}
@media screen and (min-width: 1300px){
   .news-header {
    padding: 0px 70px 0px 175px;
  }
}
</style>
