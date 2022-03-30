import Vue from "vue";
import Vuex from "vuex";

const axios = require("axios").default;
Vue.use(Vuex);
const site_url = "http://localhost:3000/";
const store = new Vuex.Store({
  state: {
    isFromBookmark: false,
    isLodeMore: false,
    pageSize: 10,
    pageNumber: 1,
    newsIndex: "",
    input: "",
    totalResults: "",
    countrySearch: "",
    countryName: "",
    categorySearch: "",
    keywordSearch: "",
    filterNewsList: [],
    bookmarsArray: [],
    defaultNewsData: []
  },
  getters: {
    getBookmarks: state => {
      return state.bookmarsArray;
    },
    getTotalResults: state => {
      return state.totalResults;
    },
    getPageNumber: state => {
      return state.pageNumber;
    },
    getSearchData: state => {
      return {
        country: state.countrySearch,
        category: state.categorySearch,
        keyword: state.keywordSearch
      };
    },
    getLodeMoreStatus: state => {
      const totalPage = Math.floor(state.totalResults / state.pageSize);
      if (totalPage >= state.pageNumber) {
        return false;
      } else {
        return true;
      }
    }
  },
  mutations: {
    setDefaultNewsData(state, newsData) {
      console.log(newsData);
      if (newsData.totalResults == 0) {
        alert("no more results");
      } else {
        state.totalResults = newsData.totalResults;
        newsData.articles.map(value => {
          value.isBookmark = false;
        });
        newsData.articles.forEach(element => {
          state.defaultNewsData.push(element);
        });
      }
    },
    setBookmark(state, bookmark) {
      let allBookmarks = [];
      allBookmarks.push(bookmark);
      allBookmarks.forEach(element => {
        state.bookmarsArray.push(element);
      });
    },
    setFilterNews(state, filterNews) {
      state.totalResults = filterNews.totalResults;
      if (state.totalResults == 0) {
        state.defaultNewsData = [];
      } else {
        state.filterNewsList = [];
        state.defaultNewsData = [];
        filterNews.articles.forEach(element => {
          state.filterNewsList.push(element);
          state.defaultNewsData = state.filterNewsList;
        });
      }
    },
    incrementPageNumber(state) {
      state.pageNumber += 1;
    }
  },
  actions: {
    getFilteredResult({ commit, state }) {
      const category_url = `https://newsapi.org/v2/top-headlines?q=${state.keywordSearch}&country=${state.countrySearch}&category=${state.categorySearch}&pageSize=${state.pageSize}&page=${state.pageNumber}&apiKey=22ce948f90ca4201b251f6ed104adf3b`;

      const query_url = `https://newsapi.org/v2/everything?q=technology&page=${state.pageNumber}&pageSize=${state.pageSize}&apiKey=22ce948f90ca4201b251f6ed104adf3b`;

      let selected_url;
      if (state.categorySearch || state.countrySearch) {
        selected_url = category_url;
      } else {
        selected_url = query_url;
      }
      fetch(selected_url)
        .then(responce => responce.json())
        .then(data => {
          commit("setDefaultNewsData", data);
        });
    },
    addToBookmark({ commit }, news) {
      news.isBookmark = true; //adding to bookmarks
      commit("setBookmark", news);
    },
    removeBookmark({ state }, paylod) {
      paylod.isBookmark = false; //removing bookmark
      state.bookmarsArray.forEach((element, index) => {
        if (element.title === paylod.title) {
          state.bookmarsArray.splice(index, 1);
        }
      });
    },
    getFilteredNews({ commit, state }) {
      const url = `https://newsapi.org/v2/top-headlines?q=${state.keywordSearch}&country=${state.countrySearch}&category=${state.categorySearch}&pageSize=${state.pageSize}&page=${state.pageNumber}&apiKey=22ce948f90ca4201b251f6ed104adf3b`;
      fetch(url)
        .then(responce => responce.json())
        .then(data => {
          commit("setFilterNews", data);
        });
    },
    incrementPage({ commit }) {
      commit("incrementPageNumber");
    }
  }
});

export default store;
