
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import VueInitialsImg from 'vue-initials-img';
import Vuetify from './plugins/vuetify'
import VueFire from 'vuefire';




Vue.use(VueFire);
Vue.config.productionTip = false
Vue.prototype.username = "username"
Vue.use(VueInitialsImg);  // image avatar for users
Vue.use(router)
var SocialSharing = require('vue-social-sharing');

Vue.use(SocialSharing);


var vue = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.use(Vuetify);