import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import cadastrarEmail from "../views/cadastrarEmail.vue";
import admin from "../views/Dashboard/index.vue";
import post from "../views/post.vue";
import criaPost from "../views/criaPost.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/cadastrarEmail",
    name: "cadastrarEmail",
    component: cadastrarEmail,
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
    children: [
      {
        path: "/post",
        name: "post",
        component: post,
      },
      {
        path: "/criaPost",
        name: "criaPost",
        component: criaPost,
      },
    ],
  },
  /*
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about"  "../views/About.vue")
  }*/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
