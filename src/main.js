import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import App from "./App.vue";
import router from "./routes";
import store from "./store/store";
import  formatDate  from "../src/dateFilter";
Vue.prototype.$site_url = "http://localhost:3000/";

Vue.use(VueResource);
Vue.use(VueRouter);
// Vue.use(Vuex);
export const eventBus = new Vue();

new Vue({
  store,
  router,
  formatDate,
  render: h => h(App)
}).$mount("#app");
