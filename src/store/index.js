import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'
import message from './message.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: user,
    message: message
  }
})
