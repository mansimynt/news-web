//import { component } from "vue/types/umd"
import VueRouter from 'vue-router';
import mainNews  from './vues/mainNews.vue'
import detailedNews from './component/detailedNews.vue'
import bookmarks from './vues/bookmarks.vue'

 const routes =[
    { path : '', component: mainNews},
    { path:'/DetailedNews/:id' , component:detailedNews },
    {path : '/Bookmarks', component:bookmarks}, 
];

 const router = new VueRouter({
    routes,
    base:"",
    mode:'history'
  });
  export  default  router;