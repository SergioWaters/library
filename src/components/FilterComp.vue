<template>
  <div class="sort-filter container">
    <label class="search_input-label" for="filter"
      ><svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.8645 11.3208H12.0515L11.7633 11.0429C12.7719 9.86964 13.3791 8.34648 13.3791 6.68954C13.3791 2.99485 10.3842 0 6.68954 0C2.99485 0 0 2.99485 0 6.68954C0 10.3842 2.99485 13.3791 6.68954 13.3791C8.34648 13.3791 9.86964 12.7719 11.0429 11.7633L11.3208 12.0515V12.8645L16.4666 18L18 16.4666L12.8645 11.3208ZM6.68954 11.3208C4.12693 11.3208 2.05832 9.25214 2.05832 6.68954C2.05832 4.12693 4.12693 2.05832 6.68954 2.05832C9.25214 2.05832 11.3208 4.12693 11.3208 6.68954C11.3208 9.25214 9.25214 11.3208 6.68954 11.3208Z"
          fill="#59BBA6"
        />
      </svg>
      <input
        class="search_input"
        type="text"
        name="filter"
        id="filter"
        :placeholder="placeHolder"
        v-model="searchString"
        @input="filter"
      />
    </label>

    <label for="select"
      >Сортировать по:
      <select
        class="select"
        name="select"
        id="select"
        @change="sort"
        v-model="sortString"
      >
        <option disabled hidden selected value="">{{ defaultKey }}</option>
        <option :value="key" v-for="(value, key) of keys" :key="key">
          {{ value }}
        </option>
      </select>
    </label>
  </div>
</template>

<script>
//@TODO:

export default {
  name: "SortFilter",
  emits: ["filter", "sort"],
  props: {
    keys: Object,
    defaultKey: String,
    placeHolder: String,
  },
  data() {
    return {
      searchString: "",
      sortString: "",
    };
  },
  methods: {
    filter() {
      this.$emit("filter", this.searchString);
    },
    sort() {
      this.$emit("sort", this.sortString);
    },
  },
};
</script>

<style scoped>
.sort-filter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
}
select {
  border: none;
  margin-left: 15px;
  background-color: transparent;
}
input {
  border: none;
  border-bottom: 1px solid transparent;
  margin-left: 15px;
  min-width: 230px;
  background-color: transparent;
}
input:hover {
  border-bottom: 1px solid #c4c4c4;
}
.search_input::placeholder {
  color: #c4c4c4;
  line-height: 18px;
}
</style>