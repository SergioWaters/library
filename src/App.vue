<template>
  <div class="container">
    <LayoutView />
  </div>
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
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: vela;
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  line-height: 18px;
  color: #16191d;
  outline: none;
}
#app {
  font-family: vela, montserrat, agavantgarde, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 100px 0;
  background-color: #fff;
}
.container {
  margin: 0 auto;
  max-width: 1300px;
}
</style>
