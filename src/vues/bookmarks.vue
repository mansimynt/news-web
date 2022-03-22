<template>
<div>
  <news-heading></news-heading>
    <div class="news-cards-container">
    <div
      class="news-container"
      v-for="(allNews, index) in getBookmarks"
      :key="index"
    >
      <img class="news-img" :src="allNews.urlToImage" />
      <div class="news-info">
        <p class="news-title">{{ allNews.title }}</p>
        <p class="news-author">{{ allNews.author }}</p>
        <router-link  class="goToBtn" 
         :to="{ path: '/DetailedNews/' + index }" >Go to page</router-link>
        <img class="bookmark" src="src/assets/fillBookmark.png" 
        @click="removeBookmark(allNews)" />

      </div>
       <p class="publish-date">
         Published:
          {{ allNews.publishedAt }}
        </p>
    </div>
    
  </div>
  <p class="no-bookmarks" v-if="getBookmarks.length == 0">
      No Bookmarks !!!
  </p>
</div>
</template>

<script>
import { mapGetters } from "vuex";
import newsHeading from "../component/newsHeading.vue";
import newsCard from "../component/newsCard.vue"
export default {
components:{newsHeading,newsCard },
computed:{
    ...mapGetters(["getBookmarks"]),
    
},
methods:{
    removeBookmark(news){
        console.log("this is removed",news);
        this.$store.dispatch("removeBookmark",news)
    }
}
}
</script>

<style scoped>
.no-bookmarks{
    text-align: center;
    font-size: x-large;
}
.news-container {
  height: fit-content;
  background: #ffffff;
  width: 400px;
    margin-left: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
}
.publish-date {
  height: 50px;
  background: #e7e6e6;
  color:rgb(92, 88, 88);
  margin-bottom: 0;
  text-align: start;
  display: flex;
   justify-content: flex-start;
   align-items: center;
}
.bookmark {
  height: 25px;
  width: 22px;
  float: right;
  
}
.news-author {
  color: rgb(168, 175, 182);
  font-size: 20px;
}
.news-title {
  font-size: 22px;
  font-weight: bold;
  height: 65px;
}
.news-img {
  height: 350px;
  width: 400px;

  object-fit: cover;
}
.goToBtn {
  height: 50px;
  width: 100px;
  background-color: hsl(210deg 10% 23%);
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;
}
.news-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-evenly;
      margin-top: 60px;
}
.news-info{
      padding: 15px;
}

.news-info div {
  color: rgb(168, 175, 182);
  font-size: 20px;
  height: 80px;
  overflow: hidden;
}
@media screen and (min-width: 350px) {
  .news-container {
    width: 400px;
   margin: 0;
  }
}
</style>