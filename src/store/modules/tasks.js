import { array } from './arr.js'
import { vuexLocal } from './persist'

export const tasksState = {
  state: {
    tasksArr: [],
    searchString: '',
  },
  getters: {
    getTasks(state) {
      return state.tasksArr
    },
    getTasksSortedBy(state) {
      const sortedArr = state.tasksArr;
      const key = state.searchString
      return sortedArr.sort(
        (a, b) => (a[key] < b[key]) ? 1 : -1);
    },
    getTasksFilteredBy(state) {
      const regExp = new RegExp(`${state.searchString}`, 'gi');
      return state.tasksArr.filter(i => Object.values(i).some(el => regExp.test(el)))
    }
  },
  mutations: {
    setFilter(state, str) {
      state.searchString = str;
    },
    updateTasks(state, arr) {
      state.tasksArr = arr;
    },
    addTask(state, obj) {
      state.tasksArr.unshift(obj);
    },
    changeTask(state, indx) {
      state.tasksArr[indx].isDone = !state.tasksArr[indx].isDone
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