<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
    <Button @click="showModal" />
  </div>
  <Filter class="filter" @filter="filter" :keys="keys" />
  <List class="list" :itemsArr="itemsArr" @childEmit="emitHandler" />
  <transition name="fade">
    <Modal :title="title" v-if="getIsModalShown" />
  </transition>
</template>

<script>
import List from "@/components/list/ListComp.vue";
import Filter from "@/components/FilterComp.vue";
import Modal from "@/components/ModalComp.vue";
import Button from "@/components/ButtonComp.vue";

import { mapMutations, mapGetters } from "vuex";

export default {
  name: "LayoutView",
  components: {
    List,
    Filter,
    Modal,
    Button,
  },
  data() {
    return {
      itemsArr: [],
      title: "To Do List",
      keys: {
        date: "Дата",
        isDone: "Выполнено",
        title: "Описание",
        id: "ID",
      },
    };
  },
  methods: {
    emitHandler(id) {
      const find = this.getTasks.findIndex((i) => +i.id === +id);
      find >= 0
        ? this.changeTask(find)
        : { ...new Error(), message: "there is NO task with id" + id };
    },
    showModal() {
      this.updateIsModalShown();
      document.body.style.height = "100vw";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "20px";
    },
    filter(obj) {
      this.setFilter(obj.string);
      if (obj.action === "filter")
        return (this.itemsArr = this.getTasksFilteredBy);
      if (obj.action === "sort") return (this.itemsArr = this.getTasksSortedBy);
    },
    ...mapMutations(["updateIsModalShown", "setFilter", "changeTask"]),
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
    if (!this.getTasks) this.fetchData();
    this.itemsArr = this.getTasks;
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  margin: 0 0 30px 0;
}
.title {
  font-family: montserrat;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
}
.filter {
  margin: 0 0 30px 0;
}
</style>
