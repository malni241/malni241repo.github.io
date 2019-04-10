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
import SignUp from "./views/SignUp.vue";
import firebase from 'firebase';

Vue.use(Router);

const router =  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path:'*',
      redirect: '/signin'
    },
    {
      path: "/",
      redirect: '/signin',
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: "/playground",
      name: "playground",
      component: Playground,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: "/newimages",
      name: "newimages",
      component: NewImages,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: "/topimages",
      name: "TopImages",
      component: TopImages,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: "/help",
      name: "Help",
      component: Help
    },
    {
      path: "/addimage",
      name: "AddImage",
      component: AddImage,
      meta:{
        requiresAuth: true
      }
    },
    {
      path: "/users",
      name: "Users",
      component: Users,
      meta:{
        requiresAuth: true
      }
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

router.beforeEach((to, from, next) =>{
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('signin');
  //else if(!requiresAuth && !currentUser) next('');
  else next();
});

export default router;
