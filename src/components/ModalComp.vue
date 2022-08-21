<template>
  <div class="background" @keyup.esc="hide">
    <div class="modal">
      <div class="modal__header">
        <h1 class="modal__title">Создать новую задачу</h1>
        <button class="button-close" @click="hide">
          <svg
            width="8"
            height="8"
            viewBox="0 0 8 8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L4 4M7 7L4 4M4 4L7 1M4 4L1 7" stroke-linecap="round" />
          </svg>
        </button>
      </div>
      <label class="modal__label" for="descr">
        <ul class="modal__label_secret" v-if="title">
          <li>*Напечатайте 'demo'</li>
          <li>*Нажмите Enter для добавления задачи</li>
          <li>*Нажмите ESC, чтобы закрыть окно</li>
        </ul>
        {{ error || "Описание" }}</label
      >
      <input
        class="modal__input"
        ref="input"
        type="text"
        name="descr"
        id="descr"
        placeholder="Введите описание"
        v-model="title"
        @keyup.enter="submit"
      />
      <button class="button-submit" @click="submit">Создать</button>
      <button
        class="button-submit demo"
        @click="submitDemo"
        v-if="title === 'demo'"
      >
        DEMO
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from "vuex";
export default {
  name: "ModalWindow",
  data() {
    return {
      title: "",
      error: "",
    };
  },
  methods: {
    ...mapMutations(["addTask", "updateIsModalShown"]),
    ...mapActions(["fetchData"]),
    submit() {
      this.error = "";
      if (!this.title) return (this.error = "У задачи должно быть описание!");
      if (this.title === "DEMO") return this.submitDemo();
      const task = {
        title: this.title,
        date: Date.now(),
        id: Math.floor(Date.now() * Math.random()),
        isDone: false,
      };
      this.addTask(task);
      this.hide();
    },
    hide() {
      this.error = this.title = "";
      this.updateIsModalShown();
      document.body.style.height = "auto";
      document.body.style.overflow = "auto";
    },
    submitDemo() {
      this.fetchData();
      this.hide();
    },
  },
  computed: {
    ...mapGetters(["getIsModalShown"]),
  },
  mounted() {
    this.$refs.input.focus();
  },
};
</script>

<style scoped>
.background {
  backdrop-filter: blur(4px);
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal {
  display: flex;
  flex-direction: column;
  padding: 40px 40px 50px 40px;
  min-width: 400px;
  min-height: 280px;
  background: #ffffff;
  border: 1px solid #dde2e4;
  box-shadow: 0px 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
}
.modal__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}
.modal__title {
  font-family: montserrat;
  font-weight: bold;
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
}
.modal__label {
  font-family: agavantgarde;
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 5px;
  max-width: 300px;
}
.modal__label_secret {
  list-style: none;
  margin: 0 0 20px 10px;
}
.modal__input {
  padding: 11px 16px;
  margin-bottom: 30px;
  background: #ffffff;
  border: 1px solid #dde2e4;
  border-radius: 8px;
}
.modal__input::placeholder {
  color: #00000080;
}
.button-submit,
.button-submit:active {
  width: 153px;
  height: 48px;
  background-color: #f0f5ff;
  border-radius: 8px;
  color: #314b99;
  border: none;
  align-self: center;
  font-family: vela;
  font-weight: normal;
  font-style: normal;
  font-size: 18px;
  line-height: 24px;
  transition: 0.5s;
}
.button-submit:hover {
  color: #f0f5ff;
  background-color: #314b99;
  transition: 0.5s;
}
.demo {
  margin-top: 20px;
}
.button-close,
.button-close:active {
  background-color: #314b99;
  stroke: #fff;
  border-radius: 5px;
  border: none;
  width: 22px;
  height: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
}
.button-close:hover {
  background-color: #fff;
  stroke: #314b99;
  border: 1px solid #314b99;
  transition: 0.5s;
}
</style>