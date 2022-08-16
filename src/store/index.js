import { tasksState } from './modules/tasks'
import { modalState } from './modules/modal'
import { vuexLocal } from './modules/persist'
import { createStore } from 'vuex'

export const store = createStore({
  modules: {
    tasksState,
    modalState,
  },
  plugins: [
    vuexLocal.plugin,
  ]
})