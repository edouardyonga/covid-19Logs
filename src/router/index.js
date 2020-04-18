import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      name: "home",
      path: "/home",
      component: () => import("@/views/Home"),
      
    },
    {
      name: "news",
      path: "/news",
      component: () => import("@/views/News")
    },
    // {
    //   name: "world",
    //   path: "/world",
    //   component: () => import("@/views/World")
    // },
    // {
    //   name: "countries",
    //   path: "/countries",
    //   component: () => import("@/views/Countries")
    // },


  ]
});