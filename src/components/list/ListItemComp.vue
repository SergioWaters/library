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
        @change="checkboxToggle(item.id)"
        class="list__item_checkbox"
        type="checkbox"
        name="checkbox"
        :id="item.id"
        :checked="item.isDone"
      />
      <button class="list__item_btn" @click="deleteItem(item.id)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path
            d="M 10 2 L 9 3 L 5 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 21.093063 5.9069372 22 7 22 L 17 22 C 18.093063 22 19 21.093063 19 20 L 19 5 L 20 5 L 20 3 L 19 3 L 18 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z"
          />
        </svg>
      </button>
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
  emits: ["checkboxToggle", "deleteItem"],
  methods: {
    getDate(d) {
      return new Intl.DateTimeFormat("ru-RU").format(new Date(d));
    },
    checkboxToggle(id) {
      this.$emit("checkboxToggle", id);
    },
    deleteItem(id) {
      this.$emit("deleteItem", id);
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
.list__item_checkbox-block {
  max-width: 80px;
  position: relative;
}
.list__item_btn {
  display: none;
  width: 20px;
  height: 20px;
  text-align: center;
  fill: #134ec1;
  background-color: transparent;
  border: none;
  position: absolute;
  right: 25px;
  top: 0;
}
.list__item_checkbox-block:hover .list__item_btn {
  display: block;
}
.not-done {
  color: #f89b11;
}
.done {
  color: #134ec1;
}
</style>