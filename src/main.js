import  Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'
import App from './App.vue'
import {routes} from './routes'
import store from './store/store'
Vue.prototype.$site_url="http://localhost:3000/"

Vue.use(VueResource);
Vue.use(VueRouter);
// Vue.use(Vuex);
export const eventBus =new Vue();


const router = new VueRouter({
  routes,
  mode:'history'
});


new Vue({
  el: '#app',
   store,
  router,
  render: h => h(App)
})
 

