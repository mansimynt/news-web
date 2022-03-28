import Vue from "vue";
import Vuex from "vuex";

const axios = require("axios").default;
Vue.use(Vuex);
const site_url = "http://localhost:3000/";
const store = new Vuex.Store({
  state: {
    defaultNewsData: [],
    newsIndex: "",
    pageSize: 10,
    pageNumber: 1,
    input: "",
    filterNewsList: [],
    bookmarsArray: [],
    totalResults: "",
    countrySearch: "",
    categorySearch: "",
    keywordSearch: "",
    isFromBookmark: false,
    isLodeMore:false
  },
  getters: {
    getBookmarks: state => {
      return state.bookmarsArray;
    },
    getTotalResults: state => {
      return state.totalResults;
    },
    getPageNumber: state =>{
      return state.pageNumber;
    },
    getSearchData:state =>{
   return {"country":state.countrySearch ,"category": state.categorySearch};
  
    },

    getLodeMoreStatus: state =>{
      const totalPage = Math.floor(state.totalResults/ state.pageSize);
      if(totalPage>=state.pageNumber){
        return false;
      }
      else{
        return true;
      }
    }
  }, 
  mutations: {
    setDefaultNewsData(state, newsData) {
      newsData.articles.map(value => {
        value.isBookmark = false;
      });
      newsData.articles.forEach(element => {
        state.defaultNewsData.push(element);
      });
      state.totalResults = newsData.totalResults;
    },
    setBookmark(state, bookmark) {
      let allBookmarks = [];
      allBookmarks.push(bookmark);
      allBookmarks.forEach(element => {
        state.bookmarsArray.push(element);
      });
    },
    setFilterNews(state, filterNews) {
      state.filterNewsList = [];
      filterNews.articles.forEach(element => {
        state.filterNewsList.push(element);
        state.defaultNewsData = state.filterNewsList;
        state.totalResults = filterNews.totalResults;
      });
    },
    incrementPageNumber(state){
      state.pageNumber += 1;
    }
  },
  actions: {
    getFilteredResult({ commit, state }, searchFilter) {
      const category_url = `https://newsapi.org/v2/top-headlines?country=${searchFilter &&
        searchFilter.country}&category=${searchFilter &&
        searchFilter.category}&pageSize=${state.pageSize}&page=${
        state.pageNumber
      }&apiKey=4f45fca2b05142488c4b7504ee84ff2b`;

      const query_url = `https://newsapi.org/v2/everything?q=${(searchFilter &&
        searchFilter.keyword) ||
        "technology"}&page=${state.pageNumber}&pageSize=${
        state.pageSize
      }&apiKey=4f45fca2b05142488c4b7504ee84ff2b`;

      let selected_url;
      if (searchFilter.category || searchFilter.country) {
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
      news.isBookmark = true;
      commit("setBookmark", news);
    },
    removeBookmark({ state }, paylod) {
      paylod.isBookmark = false;
      state.bookmarsArray.forEach((element, index) => {
        if (element.title === paylod.title) {
          state.bookmarsArray.splice(index, 1);
        }
      });
    },
    getFilteredNews({ commit, state }, searchFilter) {
      const URL = `https://newsapi.org/v2/top-headlines?country=${searchFilter &&
        searchFilter.country}&category=${searchFilter &&
        searchFilter.category}&pageSize=${state.pageSize}&page=${
        state.pageNumber
      }&apiKey=4f45fca2b05142488c4b7504ee84ff2b`;
      fetch(URL)
        .then(responce => responce.json())
        .then(data => {
          commit("setFilterNews", data);
        });
    }, 
    incrementPage({commit}){
      commit("incrementPageNumber");
    }
  }
});

export default store;
