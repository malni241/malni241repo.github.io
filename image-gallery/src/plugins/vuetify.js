import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#009688',
    success: '#4CAF50',
    info: '#E91E63',
    error: '#F44336'
  }
})
