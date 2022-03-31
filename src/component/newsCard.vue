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
          <p class="news-title">{{ allNews.title }}</p>
          <p class="news-author">{{ allNews.author }}</p>
        </div>
        <div>
          <router-link class="goToBtn" :to="{ path: '/DetailedNews/' + index }"
            >Go to page</router-link
          >
          <img
            v-if="!allNews.isBookmark"
            class="bookmark"
            src="src/assets/bookmark.png"
            @click="getBookmark(allNews)"
          />
          <img
            v-if="allNews.isBookmark"
            class="fill-bookmark"
            src="src/assets/fillBookmark.png"
            @click="removeBookmark(allNews)"
          />
        </div>
        <div class="publish-date">
          <p>Published:{{ allNews.publishedAt | formatDate }}</p>
        </div>
      </div>
    </div>
    <div v-if="!getLodeMoreStatus">
      <button class="lode-more" @click="loadMore()">
        Load More
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTotalResults", "getLodeMoreStatus"]),
    allNewsData() {
      this.$store.state.bookmarsArray.forEach(bookmark => {
        this.$store.state.defaultNewsData.forEach(defaultNews => {
          if (bookmark.title === defaultNews.title) {
            defaultNews.isBookmark = true;
          }
        });
      });
      return this.$store.state.defaultNewsData;
    }
  },
  methods: {
    getBookmark(news) {
      this.$store.dispatch("addToBookmark", news);
    },
    removeBookmark(news) {
      this.$store.dispatch("removeBookmark", news);
    },
    loadMore() {
      this.$store.dispatch("incrementPage");
      this.$store.dispatch("getFilteredResult");
    }
  }
};
</script>

<style scoped>
.news-container {
  height: fit-content;
  margin: 15px;
  width: 300px;
  background: #ffffff;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 15px;
}

.lode-more {
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
  margin-top: 15px;
  text-align: start;
  color: rgb(92, 88, 88);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 20px;
}
.fill-bookmark {
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
    padding-top: 0;
  }
}
@media screen and (min-width: 750px) {
  .news-cards-container {
    padding: 50px;
  }
}
@media screen and (min-width: 1300px) {
  .news-container {
    margin: 30px;
  }
}
</style>
