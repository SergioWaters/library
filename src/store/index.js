import tasks from './modules/tasks'
import modal from './modules/modal'

import { createStore } from 'vuex'

export const store = createStore({
  modules: {
    tasks,
    modal
  }
})