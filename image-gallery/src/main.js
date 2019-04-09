import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueInitialsImg from 'vue-initials-img';
import Vuetify from './plugins/vuetify'

Vue.config.productionTip = false


Vue.use(VueInitialsImg);  // image avatar for users


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.use(Vuetify);