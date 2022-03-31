import VueRouter from "vue-router";
import mainNews from "./views/mainNews.vue";
import detailedNews from "./component/detailedNews.vue";
import bookmarks from "./views/bookmarks.vue";

const routes = [
  { path: "", component: mainNews },
  { path: "/DetailedNews/:id", component: detailedNews },
  { path: "/Bookmarks", component: bookmarks },
  { path: "/DetailedNews/:id", redirect: "/DetailedNews/:id" }
];

const router = new VueRouter({
  routes,
  base: "",
  mode: "history"
});
export default router;
