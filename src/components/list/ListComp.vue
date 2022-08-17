<template>
  <ul class="list">
    <li class="list__item">
      <span class="list__item_checkbox"></span>
      <span class="list__item_title">Описание</span>
      <span class="list__item_status">Статус</span>
      <span class="list__item_date">Дата</span>
    </li>
    <ListItemComp
      class="list__item"
      v-for="item in itemsArr || getTasks"
      :key="item?.id"
      :item="item"
    />
  </ul>
</template>

<!--
@TODO:
Вынести листайтем в отдельный компонент
добавить стили
-->

<script>
import ListItemComp from "./ListItemComp.vue";
import { mapGetters } from "vuex";

export default {
  name: "ListComp",
  data() {
    return {};
  },
  props: {
    itemsArr: Array,
  },

  components: {
    ListItemComp,
  },
  computed: {
    ...mapGetters(["getTasks"]),
  },
};
</script>

<style scoped>
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
}
</style>
