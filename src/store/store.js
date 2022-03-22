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
    totalResults:"",
    isBookmark:false,
    countrySearch:"",
    categorySearch:"",
    keywordSearch:""
  },
  getters: {
    getBookmarks: state => {
      return state.bookmarsArray;
    },
    getTotalResults: state=>{
      return state.totalResults;
    }
  },
  mutations: {
    setDefaultNewsData(state, newsData) {
      newsData.articles.map((value)=>{
        value.isBookmark=false;
      })
      console.log(newsData.articles);
      state.defaultNewsData=newsData.articles;
      state.totalResults=newsData.totalResults
    },
    setBookmark(state, bookmark) {
      let allBookmarks=[]
      allBookmarks.push(bookmark)
     allBookmarks.forEach(element=>{
       state.bookmarsArray.push(element)
       state.isBookmark=true;
     })

      console.log(state.bookmarsArray);
    }
  },
  actions: {
    getFilteredResult({ commit,state }, searchFilter) {
  
      const category_url = `https://newsapi.org/v2/top-headlines?country=${searchFilter &&
        searchFilter.country}&category=${searchFilter &&
        searchFilter.category}&pageSize=${state.pageSize}&page=1&apiKey=52558bd4559b49a8be19c436e85c750f`;

      const query_url = `https://newsapi.org/v2/everything?q=${(searchFilter &&
        searchFilter.keyword) ||
        "tesla"}&page=1&pageSize=${state.pageSize}&apiKey=52558bd4559b49a8be19c436e85c750f`;

      let selected_url;
      if (searchFilter.category && searchFilter.country) {
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
      commit("setBookmark", news);
    },
    removeBookmark({state},paylod){
      state.bookmarsArray.forEach((element)=>{
        if(element.title === paylod.title){
          state.bookmarsArray.splice(element,1)
          state.isBookmark=false
        }
        
      })

    }
  }
});

export default store;
