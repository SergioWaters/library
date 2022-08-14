export default {
  state: {
    tasksArr: [],
    sortedArr: [],
    filteredArr: [],
  },
  getters: {
    getTasks(state) {
      return state.tasksArr
    },
  },
  mutations: {
    updateTasks(state, arr) {
      state.tasksArr = arr
    },
    addTask(state, obj) {
      state.tasksArr = [...state.tasksArr, obj]
    },
    changeTask(state, indx) {
      !state.tasksArr[indx].isDone ?
        state.tasksArr[indx].isDone = true :
        state.tasksArr[indx].isDone = false;
    },
    sortBy(state, key) {
      state.sortedArr = state.tasksArr.sort((a, b) => {
        if (a[key] > b[key]) return 1;
        if (b[key] > a[key]) return -1;
        return 0
      })
    },
    filterBy(state, key) {
      state.filteredArr = state.tasksArr.filter((i) => Object.values(i).some((el) => el === key))
    }
  },
  actions: {
    fetchData(ctx) {
      const arr = [
        {
          isDone: false,
          date: Date.now(),
          title: "Add new tasks to do",
          id: 12345678901
        }
      ];
      ctx.commit('updateTasks', arr)
    },
  },
}