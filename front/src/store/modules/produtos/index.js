import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import consts from './consts'

const state = {
  data: null
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations,
}
