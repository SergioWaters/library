<template>
  <div class="modal">
    <label for="descr">{{ error || "Описание" }}</label>
    <input
      type="text"
      name="descr"
      id="descr"
      placeholder="Введите описание"
      v-model="title"
    />
    <button class="button-close" @click="hide()">X</button>
    <button class="button-submit" @click="submit()">Создать</button>
  </div>
</template>


<!--
@TODO:
сделать метод hide
-->

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "ModalWindow",
  data() {
    return {
      title: "",
      error: "",
    };
  },
  inject: ["isModalShown"],
  props: {
    name: String,
    settings: Object,
  },
  methods: {
    ...mapMutations(["addTask", "updateisModalShown"]),
    submit() {
      this.error = "";
      const task = {
        title: this.title,
        date: Date.now(),
        id: Math.floor(Date.now() * Math.random()),
        isDone: false,
      };
      this.title
        ? this.addTask(task)
        : (this.error = "У задачи должно быть описание!");
      this.title = "";
    },
    hide() {
      this.error = "";
      this.title = "";
      this.updateisModalShown();
    },
  },
  computed: {
    ...mapGetters(["getIsModalShown"]),
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 30vh;
  left: 20vw;
  background: #f8f8f8;
  padding: 20px;
}
.expenceEdit {
  display: flex;
  position: absolute;
}
.button-close {
  position: absolute;
  top: 0;
  right: 0;
}
</style>