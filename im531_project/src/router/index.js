import Vue from 'vue'
import Router from 'vue-router'
import Firstpage from "../components/Firstpage";
import Startpage from "../components/Startpage";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/fp',
      name: 'Firstpage',
      component: Firstpage
    },
    {
      path: '/',
      name: 'Startpage',
      component: Startpage
    }
  ]
})
