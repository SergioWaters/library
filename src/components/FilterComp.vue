<template>
  <div class="sort-filter">
    <label for="filter">searchicon</label>
    <input
      type="text"
      name="filter"
      id="filter"
      placeholder="Поиск ID, Имени, статуса или даты"
      v-model="searchString"
      @keyup.stop.enter="filter()"
    />
    <input
      type="text"
      name="sort"
      id="sort"
      placeholder="Сортировать по..."
      v-model="sortString"
      @keyup.prevent.enter="sort()"
    />
  </div>
</template>

<script>
//@TODO:
//search icon

import { mapMutations, mapGetters } from "vuex";
export default {
  name: "SortFilter",
  data() {
    return {
      searchString: "",
      sortString: "",
    };
  },
  props: {
    name: String,
    settings: Object,
  },
  methods: {
    ...mapMutations(["sortBy", "filterBy", "setFilter", "setSort"]),
    filter() {
      this.setFilter(this.searchString);
    },
    sort() {
      this.setSort(this.sortString);
      console.log(this.getSortBy);
    },
  },
  computed: {
    ...mapGetters(["getSortBy", "getFilterBy"]),
  },
};
</script>

<style scoped>
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