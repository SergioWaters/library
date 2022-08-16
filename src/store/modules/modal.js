import { vuexLocal } from './persist'

export const modalState = {
  state: {
    isModalShown: false,
  },
  getters: {
    getIsModalShown(state) {
      return state.isModalShown
    }
  },
  mutations: {
    updateIsModalShown(state) {
      state.isModalShown = !state.isModalShown
    },
  },
  actions: {

  },
  plugins: [
    vuexLocal.plugin,
  ]
}