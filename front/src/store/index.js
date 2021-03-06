import Vue from 'vue'
import Vuex from 'vuex'
import produtos from './modules/produtos'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    produtos,
  }
})

export default store
