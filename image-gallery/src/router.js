import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import Playground from "./views/Playground.vue";
import NewImages from "./views/NewImages.vue";
import TopImages from "./views/TopImages.vue";
import Help from "./views/Help.vue";
import AddImage from "./views/AddImage.vue";
import Users from "./views/Users.vue";
import SignIn from "./views/SignIn.vue";
import SignUp from "./views/SignUp";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard
    },
    {
      path: "/playground",
      name: "playground",
      component: Playground
    },
    {
      path: "/newimages",
      name: "newimages",
      component: NewImages
    },
    {
      path: "/topimages",
      name: "TopImages",
      component: TopImages
    },
    {
      path: "/help",
      name: "Help",
      component: Help
    },
    {
      path: "/addimage",
      name: "AddImage",
      component: AddImage
    },
    {
      path: "/users",
      name: "Users",
      component: Users
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn
    }
  ]
});
