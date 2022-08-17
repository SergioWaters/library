<template>
  <LayoutView />
</template>

<script>
import LayoutView from "./pages/LayoutView.vue";

export default {
  name: "App",
  components: {
    LayoutView,
  },
  data() {
    return {
      isModalShown: false,
    };
  },
  methods: {},
  computed: {},
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
