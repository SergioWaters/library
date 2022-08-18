<template>
  <li>
    <div class="list__item_checkbox-block">
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
      <input
        @change="toggleChecked(item.id)"
        class="list__item_checkbox"
        type="checkbox"
        name="checkbox"
        :id="item.id"
        :checked="item.isDone"
      />
    </div>

    <span class="list__item_title">{{ item?.title }}</span>
    <span class="list__item_status not-done" v-if="!item.isDone">В работе</span>
    <span class="list__item_status done" v-if="item.isDone">Выполнено</span>
    <span class="list__item_date">{{
      item.date ? getDate(item.date) : "без даты"
    }}</span>
  </li>
</template>

<script>
export default {
  name: "ListItem",
  props: { item: Object },
  emits: ["checkboxToggle"],
  methods: {
    getDate(d) {
      return new Intl.DateTimeFormat("ru-RU").format(new Date(d));
    },
    toggleChecked(id) {
      this.$emit("checkboxToggle", id);
    },
  },
};
</script>
<style scoped>
.list__item_label {
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #16191d;
  border-radius: 50%;
}
.checked {
  text-align: center;
  border: 1px solid #134ec1;
  box-shadow: 0 4px 4px 0 rgba(19, 78, 193, 0.15);
  stroke: #134ec1;
  fill: #134ec1;
}
.not-done {
  color: #f89b11;
}
.done {
  color: #134ec1;
}
</style>