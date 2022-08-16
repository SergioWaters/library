import { array } from './arr.js'
import { vuexLocal } from './persist'

export const tasksState = {
  state: {
    tasksArr: [],
    sortBy: '',
    filterBy: '',
  },
  getters: {
    getTasks(state) {
      return state.tasksArr
    },
    getSortBy(state) {
      return state.tasksArr.sort(
        (a = a[state.sortBy], b = b[state.sortBy]) => {
          if (a > b) return 1;
          if (b > a) return -1;
          return 0
        })
    },
    getFilterBy(state) {
      const regExp = new RegExp(`${state.filterBy}`, 'gi');
      return state.tasksArr.filter(i => Object.values(i).some(el => regExp.test(el)))
    }
  },
  mutations: {
    setFilter(state, str) {
      state.filterBy = str
    },
    setSort(state, str) {
      state.sortBy = str
    },
    updateTasks(state, arr) {
      state.tasksArr = arr
    },
    addTask(state, obj) {
      state.tasksArr = [...state.tasksArr, obj]
    },
    changeTask(state, indx) {
      state.tasksArr[indx].isDone = !state.tasksArr[indx].isDone;
    },
  },
  actions: {
    fetchData(ctx) {
      const arr = array
      ctx.commit('updateTasks', arr)
    },
  },
  plugins: [
    vuexLocal.plugin,
  ]
}