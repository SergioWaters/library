export default {
  state: {
    isModalShown: false,
  },
  getters: {
    getIsModalShown(state) {
      return state.isModalShown
    }
  },
  mutations: {
    updateisModalShown(state) {
      state.isModalShown = !state.isModalShown
    },
  },
  actions: {

  },
}