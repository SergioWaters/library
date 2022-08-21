<template>
  <button class="button"></button>
</template>

<script>
export default {
  name: "ButtonComp",
  props: {},
};
</script>

<style scoped>
.button:hover {
  background-color: #314b99;
  transition: 0.5s;
}
.button,
.button:active {
  background-color: #d6dbeb;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  position: relative;
  border: none;
  transition: 0.5s;
}
.button:hover::before,
.button:hover::after {
  background-color: #d6dbeb;
  transition: 0.5s;
}
.button::before,
.button::after,
.button:active::before,
.button:active::after {
  position: absolute;
  content: "";
  width: 20px;
  height: 2px;
  top: 49%;
  left: 25%;
  background-color: #314b99;
  transition: 0.5s;
}
.button::after {
  transform: rotate(90deg);
}
</style>
