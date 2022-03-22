<template>
  <div>
    <div class="news-cards-container">
      <div
        class="news-container"
        v-for="(allNews, index) in allNewsData"
        :key="index"
      >
        <img class="news-img" :src="allNews.urlToImage" />
        <div class="news-info">
          <p class="news-title">{{ allNews.title }}</p><br>
          <p class="news-author">{{ allNews.author }}</p>
        </div>
        <div>
          <router-link class="goToBtn" :to="{ path: '/DetailedNews/' + index }"
            >Go to page</router-link
          >
          <img v-if="!allNews.isBookmark"
            class="bookmark"
            src="src/assets/bookmark.png"
            @click="getBookmark(allNews)"
          />
          <img v-else
            class="fill-bookmark"
            src="src/assets/fillBookmark.png"
            @click="removeBookmark(allNews.title)"
          />
        </div>
        <p class="publish-date">
          Published:
          {{ allNews.publishedAt }}
        </p>
      </div>
    </div>
    <button class="lode-more" @click="lodeMore()">Lode More</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // allNewsData: this.$store.state.defaultNewsData,
     // isBookmark:this.$store.state.isBookmark
    };
  },
  computed: {
    allNewsData() {
      return this.$store.state.defaultNewsData
      
    },
    
  },
  methods: {
    getBookmark(news) {
      news.isBookmark=true;
      this.$store.dispatch("addToBookmark", news);
    },
    removeBookmark(news, index) {
      console.log("this is removed", news);
      this.$store.dispatch("removeBookmark", news);
    },
    lodeMore(){
      this.$store.state.pageSize+= 5;
   this.$store.dispatch("getFilteredResult", {
      category: this.$store.state.categorySearch,
      country: this.$store.state.countrySearch,
      keyword: this.$store.state.keywordSearch
    });
    }
  }
};
</script>

<style scoped>
.news-container {
  height: fit-content;
  margin: 34px;
  width: 300px;
  background: #ffffff;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
}

.lode-more{
  height: 50px;
  width: 100px;
  margin-left: 50%;
  background-color: hsl(210deg 10% 23%);
  border: none;
  font-size: 17px;
  border-radius: 5px;
  color: white;
}
.publish-date {
  height: 50px;
  background: #e7e6e6;
  margin-bottom: 0;
  text-align: start;
  color: rgb(92, 88, 88);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.fill-bookmark{
  width: 22px;
  float: right;
  margin-right: 16px;
}
.bookmark {
  height: 30px;              
  width: 30px;
  float: right;
  margin-right: 15px;
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
  height: 250px;
  width: 300px;

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
  margin-left: 15px;
}
.news-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.news-info {
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
    width: 350px;
  }
  .news-img{
    width: 350px;
  }
}
@media screen and (min-width: 600px) {
  .news-container {
    width: 460px;
  }
  .news-img {
    height: 300px;
    width: 460px;
  }
  .news-cards-container{
    padding: 50px;
  }
}
</style>
