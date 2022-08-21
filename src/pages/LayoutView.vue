<template>
  <div class="header">
    <h1 class="title">{{ title }}</h1>
    <Button @click="showModal" />
  </div>
  <Filter
    class="filter"
    @filter="filter"
    @sort="sortTasksBy"
    :keys="keys"
    placeHolder="Поиск ID, Имени, статуса или даты"
    :defaultKey="keys.date"
  />
  <List
    class="list"
    :itemsArr="getArr"
    @checkboxToggle="changeTask"
    @deleteItem="deleteTask"
  />
  <transition name="fade">
    <Modal :title="title" v-if="getIsModalShown" />
  </transition>
</template>

<script>
import List from "@/components/list/ListComp.vue";
import Modal from "@/components/ModalComp.vue";
import Filter from "@/components/FilterComp.vue";
import Button from "@/components/ButtonComp.vue";

import { mapMutations, mapGetters, mapActions } from "vuex";

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
      title: "To Do List",
      filterString: "",
      keys: {
        date: "Дата",
        isDone: "Выполнено",
        title: "Описание",
        id: "ID",
      },
    };
  },
  methods: {
    filter(str) {
      this.setFilterString(str);
      this.filterTasksBy(str);
    },
    showModal() {
      this.updateIsModalShown();
      document.body.style.height = "100vw";
      document.body.style.overflow = "hidden";
      document.body.style.marginRight = "20px";
    },
    ...mapMutations([
      "updateIsModalShown",
      "filterTasksBy",
      "sortTasksBy",
      "changeTask",
      "deleteTask",
      "setFilterString",
    ]),
    ...mapActions(["fetchData"]),
  },
  computed: {
    ...mapGetters([
      "getIsModalShown",
      "getFilteredTasks",
      "getTasks",
      "getFilterString",
    ]),
    getArr() {
      return this.getFilterString ? this.getFilteredTasks : this.getTasks;
    },
  },
  created() {
    this.sortTasksBy("date");
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
