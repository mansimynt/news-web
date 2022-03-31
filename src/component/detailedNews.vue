<template>
  <div class="detail-news">
    <news-heading></news-heading>
    {{ getCurrentNews }}
    <img class="cover-image" :src="currentNews.urlToImage" />
    <div class="news-information">
      <h1>{{ currentNews.title }}</h1>
      <h3>{{ currentNews.author }}</h3>
      <a>{{ currentNews.url }}</a>
      <p>{{ currentNews.description }}</p>
    </div>
    <router-link class="goToBtn" to="/">Go to home </router-link>
  </div>
</template>

<script>
import newsHeading from "../component/newsHeading.vue";
export default {
  components: { newsHeading },
  data() {
    return {
      currentNewsId: this.$route.params.id,
      isFromBookmark: this.$store.state.isFromBookmark,
      currentNews: [],
      allNewsData: []
    };
  },
  computed: {
    getCurrentNews() {
      if (!this.isFromBookmark) {
        //check if click from main page or bookmark page and set data
        (this.allNewsData = this.$store.state.defaultNewsData),
          (this.currentNews = this.allNewsData.find(
            (element, index) => index === parseInt(this.currentNewsId)
          ));
      } else {
        (this.allNewsData = this.$store.state.bookmarsArray),
          (this.currentNews = this.allNewsData.find(
            (element, index) => index === parseInt(this.currentNewsId)
          ));
      }
    }
  }
};
</script>

<style scoped>
.detail-news {
  display: flex;
  flex-direction: column;
}
.cover-image {
  width: 85vw;
  margin: 20px;
  align-self: center;
}
.news-information {
  margin: 20px;
  margin-left: 10px;
}
.goToBtn {
  margin-left: 10px;
  background-color: hsl(210deg 10% 23%);
  width: 100px;
  color: white;
  border-radius: 5px;
  padding: 10px 15px;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  text-decoration: none;
}
@media screen and (min-width: 400px) {
  .cover-image {
    width: 90vw;
    height: 500px;
  }
}
</style>
