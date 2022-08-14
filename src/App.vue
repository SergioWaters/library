<template>
  <List />
  <Modal v-if="getIsModalShown" />
  <Filter />
  <button @click="updateisModalShown"></button>
</template>

<script>
import List from "./components/list/ListComp.vue";
import Modal from "./components/ModalComp.vue";
import Filter from "./components/FilterComp.vue";

import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    List,
    Modal,
    Filter,
  },
  data() {
    return {
      isModalShown: false,
    };
  },
  provide() {
    return {
      isModalShown: this.isModalShown,
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["updateisModalShown"]),
  },
  computed: {
    ...mapGetters(["getIsModalShown"]),
  },
  created() {
    this.fetchData();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
