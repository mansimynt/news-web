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
    <router-link class="goToBtn" to="/">Go To Home </router-link>
  </div>
</template>

<script>
import newsHeading from "../component/newsHeading.vue";
export default {
  components: { newsHeading },
  data() {
    return {
      currentNewsId: this.$route.params.id,
      currentNews: [],
      allNewsData: this.$store.state.defaultNewsData
    };
  },
  computed: {
    getCurrentNews() {
      this.currentNews = this.allNewsData.find(
        (element, index) => index === parseInt(this.currentNewsId)
      );
    }
  }
};
</script>

<style>
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
}
.goToBtn {
  background-color: hsl(210deg 10% 23%);
  width: fit-content;
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
