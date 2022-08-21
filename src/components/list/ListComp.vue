<template>
  <ul class="list">
    <li class="list__item">
      <span class="list__item_checkbox-block"></span>
      <span class="list__item_title title-divider">Описание</span>
      <span class="list__item_status title-divider">Статус</span>
      <span class="list__item_date title-divider">Дата</span>
    </li>
    <ListItemComp
      class="list__item"
      v-for="item in itemsArr"
      :key="item?.id"
      :item="item"
      @checkboxToggle="checkboxToggle"
      @deleteItem="deleteItem"
    />
  </ul>
</template>
<script>
import ListItemComp from "./ListItemComp.vue";

export default {
  name: "ListComp",
  emits: ["checkboxToggle", "deleteItem"],
  props: {
    itemsArr: Array,
  },
  components: {
    ListItemComp,
  },
  methods: {
    checkboxToggle(i) {
      console.log(i);
      this.$emit("checkboxToggle", i);
    },
    deleteItem(i) {
      console.log(i);
      this.$emit("deleteItem", i);
    },
  },
};
</script>
<style>
.list {
  display: flex;
  flex-direction: column;
}
.list__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 58px;
  border-bottom: 1px solid #eeebe9;
  padding: 0px 30px 0px 40px;
}
.list__item:hover {
  background-color: #f6f9ff;
}
.list__item_checkbox {
  display: none;
}
.list__item_checkbox-block {
  width: 80px;
}
.list__item_title {
  min-width: 300px;
  flex-grow: 1;
}
.list__item .title-divider {
  position: relative;
}
.list__item .title-divider::before {
  position: absolute;
  content: "";
  height: 32px;
  width: 1px;
  background-color: #c4c4c4;
  left: -20px;
  top: -8px;
}
.list__item_status {
  width: 150px;
}
.list__item_date {
  width: 100px;
}
</style>
