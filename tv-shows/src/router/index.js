import Vue from "vue";
import Router from "vue-router";
import ShowDetailsPage from "@/views/ShowDetailsPage.vue";
import HomePage from "@/views/HomePage.vue";
import PageNotFound from "@/views/PageNotFound.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "homePage",
      component: HomePage
    },
    {
      path: "/shows/:id",
      name: "showDetailsPage",
      component: ShowDetailsPage
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
});
