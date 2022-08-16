<template>
  <button @click="updateIsModalShown"></button>
  <Modal v-if="getIsModalShown" />
  <Filter />
  <List />
</template>

<script>
import List from "./components/list/ListComp.vue";
import Filter from "./components/FilterComp.vue";
import Modal from "./components/ModalComp.vue";

import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    List,
    Filter,
    Modal,
  },
  data() {
    return {
      isModalShown: false,
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
    ...mapMutations(["updateIsModalShown"]),
  },
  computed: {
    ...mapGetters(["getIsModalShown"]),
  },
  created() {
    // this.fetchData();
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
