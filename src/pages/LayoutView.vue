<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <button @click="updateIsModalShown">+</button>
    <Filter @filter="subscribe" :keys="keys" />
    <List :itemsArr="itemsArr" />
    <Modal :title="title" v-if="getIsModalShown" />
  </div>
</template>

<script>
import List from "@/components/list/ListComp.vue";
import Filter from "@/components/FilterComp.vue";
import Modal from "@/components/ModalComp.vue";

import { mapMutations, mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "LayoutView",
  components: {
    List,
    Filter,
    Modal,
  },
  data() {
    return {
      title: "To Do List",
      itemsArr: this.getTasks,
      keys: {
        isDone: "Выполнено",
        id: "ID",
        title: "Описание",
        date: "Дата",
      },
    };
  },
  methods: {
    subscribe(obj) {
      this.setFilter(obj.string);
      if (obj.action === "filter")
        return (this.itemsArr = this.getTasksFilteredBy);
      if (obj.action === "sort") return (this.itemsArr = this.getTasksSortedBy);
    },
    ...mapActions(["fetchData"]),
    ...mapMutations(["updateIsModalShown", "setFilter"]),
  },
  computed: {
    ...mapGetters([
      "getIsModalShown",
      "getTasksSortedBy",
      "getTasksFilteredBy",
      "getTasks",
    ]),
  },
  created() {
    // this.fetchData();
  },
};
</script>

<style>
.container {
  margin: 0, auto;
  max-width: 1600px;
}
</style>
