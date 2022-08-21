import { array } from './arr.js'
import { vuexLocal } from './persist'

export const tasksState = {
  state: {
    tasksArr: [],
    filteredArr: [],
    filterString: '',
  },
  getters: {
    getFilterString(state) {
      return state.filterString
    },
    getTasks(state) {
      return state.tasksArr
    },
    getFilteredTasks(state) {
      return state.filteredArr
    }
  },
  mutations: {
    setFilterString(state, str) {
      state.filterString = str
    },
    sortTasksBy(state, key) {
      state.tasksArr = [...state.tasksArr.sort(
        (a, b) => (a[key] < b[key]) ? 1 : -1)]
    },
    filterTasksBy(state, searchString) {
      const regExp = new RegExp(`${searchString}`, 'gi');
      state.filteredArr = state.tasksArr.filter(i => Object.values(i).some(el => regExp.test(el)));
    },
    updateTasks(state, arr) {
      state.tasksArr = arr;
    },
    addTask(state, obj) {
      state.tasksArr.unshift(obj);
    },
    changeTask(state, id) {
      let find = null;
      if (state.filterString) {
        find = state.filteredArr.findIndex((i) => i.id === id);
        state.filteredArr[find].isDone = !state.filteredArr[find].isDone;
      } else {
        find = state.tasksArr.findIndex((i) => i.id === id);
        state.tasksArr[find].isDone = !state.tasksArr[find].isDone;
      }
    },
    deleteTask(state, id) {
      state.filterString ?
        state.filteredArr = state.filteredArr.filter((i) => i.id != id) :
        state.tasksArr = state.tasksArr.filter((i) => i.id !== id);
    }
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