<template>
  <div>
    <input
      @change="toggleChecked(item.id)"
      class="list__item_checkbox"
      type="checkbox"
      name="checkbox"
      :id="item.id"
      :checked="item.isDone"
    />
    <label
      class="list__item_label unchecked"
      :for="item.id"
      v-if="!item.isDone"
    ></label>
    <label class="list__item_label checked" :for="item.id" v-if="item.isDone"
      ><svg
        width="10"
        height="11"
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 5L5 10.5L9.5 1"
          stroke="#134EC1"
          stroke-linecap="round"
          stroke-linejoin="round"
        /></svg
    ></label>

    <span class="list__item_title">{{ item?.title }}</span>
    <span class="list__item_status">{{
      item.isDone ? "Выполнено" : "В работе"
    }}</span>
    <span class="list__item_date">{{
      item.date ? getDate(item.date) : "без даты"
    }}</span>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "ListItem",
  props: { item: {} },
  methods: {
    getDate(d) {
      return new Intl.DateTimeFormat("ru-RU").format(new Date(d));
    },
    ...mapMutations(["changeTask"]),
    toggleChecked(id) {
      const find = this.getTasks.findIndex((i) => +i.id === +id);
      find >= 0
        ? this.changeTask(find)
        : { ...new Error(), message: "there is NO task with id" + id };
    },
  },
  computed: {
    ...mapGetters(["getTasks"]),
  },
};
</script>

<style scoped>
.list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 58px;
}
.list__item_checkbox {
  display: none;
}
.list__item_label {
  width: 20px;
  height: 20px;
  border: 1px solid #16191d;
  border-radius: 50%;
}
.checked {
  border: 1px solid #134ec1;
  box-shadow: 0 4px 4px 0 rgba(19, 78, 193, 0.15);
  stroke: "#134EC1";
  fill: "#134EC1";
}
.list__item_title {
  min-width: 300px;
}
.list__item_status {
  width: 150px;
}
</style>