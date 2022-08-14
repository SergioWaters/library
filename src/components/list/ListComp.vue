<template>
  <ul class="list">
    <li class="list__item">
      <span class="list__item_checkbox"></span>
      <span class="list__item_title">Описание</span>
      <span class="list__item_status">Статус</span>
      <span class="list__item_date">Дата</span>
    </li>
    <li class="list__item" v-for="item in itemsArr || getTasks" :key="item?.id">
      <input
        @change="toggleChecked(item.id)"
        class="list__item_checkbox"
        type="checkbox"
        name="checkbox"
        id="chk"
      />
      <label class="list__item_label-unchecked" for="chk" v-if="!item.isDone"
        >empty box</label
      >
      <label class="list__item_label-checked" for="chk" v-if="item.isDone"
        >filled box</label
      >

      <span class="list__item_title">{{ item?.title }}</span>
      <span class="list__item_status">{{
        item.isDone ? "Выполнено" : "В работе"
      }}</span>
      <span class="list__item_date">{{ getDate(item?.date) }}</span>
    </li>
  </ul>
</template>

<!--
@TODO:
Вынести листайтем в отдельный компонент
добавить иконки чекбоксов
добавить стили
-->

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  props: {
    itemsArr: Array,
  },

  components: {},

  methods: {
    ...mapMutations(["changeTask"]),
    getDate(d) {
      return new Intl.DateTimeFormat("ru-RU").format(new Date(d));
    },
    toggleChecked(id) {
      const find = this.getTasks.findIndex((i) => +i.id === +id);
      find >= 0
        ? this.changeTask(find)
        : console.log("there is NO task with id" + id);
    },
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
}
</style>
