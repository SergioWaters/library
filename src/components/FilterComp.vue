<template>
  <div class="sort-filter">
    <label for="filter">searchicon</label>
    <input
      type="text"
      name="filter"
      id="filter"
      placeholder="Поиск ID, Имени, статуса или даты"
      v-model="searchString"
    />
  </div>
</template>

<script>
//@TODO:
//search icon

import { mapMutations } from "vuex";
export default {
  name: "SortFilter",
  data() {
    return {
      searchString: "",
      task: {
        title: "",
        date: new Date(),
        id: Math.floor(Date.now() * Math.random()),
        isDone: false,
      },
    };
  },
  props: {
    name: String,
    settings: Object,
  },
  methods: {
    ...mapMutations(["addTask"]),
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 30vh;
  left: 20vw;
  background: #f8f8f8;
  padding: 20px;
}
.expenceEdit {
  display: flex;
  position: absolute;
}
.button-close {
  position: absolute;
  top: 0;
  right: 0;
}
</style>