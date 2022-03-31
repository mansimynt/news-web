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
          <br />
          <p class="news-author">{{ allNews.author }}</p>
        </div>
        <div>
          <button class="goToBtn" @click="goToFromBookmark(index)">
            Go to page
          </button>
          <img
            class="bookmark"
            src="src/assets/fillBookmark.png"
            @click="removeBookmark(allNews)"
          />
        </div>
        <p class="publish-date">
          Published:{{ allNews.publishedAt | formatDate }}
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
export default {
  components: { newsHeading},
  computed: {
    ...mapGetters(["getBookmarks"])
  },
  methods: {
    removeBookmark(news) {
      this.$store.dispatch("removeBookmark", news);
    },
    goToFromBookmark(index) {
      (this.$store.state.isFromBookmark = true),
        this.$router.push("/DetailedNews/" + index);
    }
  }
};
</script>

<style scoped>
.no-bookmarks {
  text-align: center;
  font-size: x-large;
}
.news-container {
  height: fit-content;
  background: #ffffff;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
  margin: 34px;
}
.publish-date {
  height: 50px;
  margin-top: 15px;
  background: #e7e6e6;
  color: rgb(92, 88, 88);
  margin-bottom: 0;
  text-align: start;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
}
.bookmark {
  height: 25px;
  width: 22px;
  float: right;
  margin-right: 15px;
}
.news-author {
  color: rgb(168, 175, 182);
  font-size: 20px;
}
.news-title {
  margin-top: 0;
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
  font-size: 16px;
  color: white;
  font-weight: bold;
  margin-top: 20px;
  cursor: pointer;
  margin-left: 15px;
  text-decoration: none;
}
.news-cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 60px;
  padding-top: 0;
}
.news-info {
  padding: 15px;
  height: 175px;
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
  .news-img {
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
  .news-cards-container {
    padding: 50px;
  }
}
</style>
