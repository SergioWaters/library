<template>
  <div class="modal">
    <label for="descr">{{ error || "Описание" }}</label>
    <input
      type="text"
      name="descr"
      id="descr"
      placeholder="Введите описание"
      v-model="title"
      @keydown.esc="hide()"
      @keyup.enter="submit()"
    />
    <button class="button-close" @click="hide()">X</button>
    <button class="button-submit" @click="submit()">Создать</button>
  </div>
</template>


<!--
@TODO:
сделать подложку
добавить стили
добавить закрытие по клику esc
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
  props: {
    name: String,
    settings: Object,
  },
  methods: {
    ...mapMutations(["addTask", "updateIsModalShown"]),
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
      this.updateIsModalShown();
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
  display: flex;
  flex-direction: column;
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