import Vue from "vue";
import Vuex from "vuex";

const axios = require("axios").default;
Vue.use(Vuex);
const site_url = "http://localhost:3000/";
const store = new Vuex.Store({
  state: {
    userId: null,
    loggedUser: [],
    jsonUserData: [],
    users: [],
    totalServices: []
  },
  mutations: {
    getUsers(state, getAllUsers) {
      state.jsonUserData = getAllUsers; //storing all json data
      state.users = state.jsonUserData.data;
      console.log("all Users",state.users);
    },
    currentUserCheck: (state, currentUserDetails) => {
     // console.log("alluserarrray", state.users);
      for (let key in state.users) {
        if (
          state.users[key].email == currentUserDetails[0] &&
          state.users[key].password == currentUserDetails[1]
        ) {
          state.loggedUser = state.users[key]; //initialise current logged user
          console.log("we get current user data");
           window.location.replace("http://localhost:8080/dashboard");
        } else {
          console.log("u dont have account");
        }
      }
    },
    calculateUserServices:(state)=>{
      console.log(state.loggedUser);
    },
    getTotalServices:(state,allservices)=>{
      state.totalServices = allservices.data;
      console.log(state.totalServices,"all services fetch api");
    }
  }
  ,
  actions: {
    getAllUsers({ commit }) {
      axios.get(site_url + "users").then(users => {
        commit("getUsers", users); //Get all users data api
      });
    },
    matchCurrentUserDetails({ commit }, currentUserDetails) {
      // curent user details email & password check
      commit("currentUserCheck", currentUserDetails);
    },
    getTotalServices({ commit }) {
      axios.get(site_url + "allservices").then(allservices => {
      commit("getTotalServices",allservices); //Get all service data
      });
    },
    calculateUserServices({  commit }) {
      commit("calculateUserServices");
    }
  }
  });

export default store;
