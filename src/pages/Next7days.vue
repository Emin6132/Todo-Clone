<template>
  <div class="Next7Days">
    <div class="Next7DaysIn" :class="{ Next7DaysFullWindow: openOptions }">
      <div class="Header">
        <div class="Header-in">
          <div class="Header-left">
            <div
              @click="openOptions = false"
              class="openCloseContainer"
              v-show="openOptions"
            >
              <router-link
                :to="{ name: 'Next7days' }"
                class="openButton openCloseButton"
                ><i
                  class="fa-solid fa-arrow-right-to-bracket open-icon openCloseIcon"
                ></i
              ></router-link>
            </div>
            <div
              @click="openOptions = true"
              class="openCloseContainer"
              v-show="!openOptions"
            >
              <router-link
                :to="{ name: 'OnlyNext7days' }"
                class="closebutton openCloseButton"
                ><i
                  class="fa-solid fa-arrow-right-to-bracket close-icon openCloseIcon"
                ></i
              ></router-link>
            </div>
            <span class="title">Next 7 Days</span>
          </div>
          <div class="Header-right">
            <i class="fa-solid fa-arrow-up-wide-short icon"></i>
            <i class="fa-solid fa-ellipsis icon"></i>
          </div>
        </div>
      </div>
      <div class="footer">
        <div class="footer-in">
          <form class="form" @submit="addTodo">
            <input
              type="text"
              class="input"
              v-model="inputVal"
              placeholder='+ Add task to "Inbox" on "Today"'
            />
          </form>
          <div class="footer-bg" v-show="restBgshow">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR76n9pV6HgwGb28pByJXkUKDRDNqBHxjYRuw&usqp=CAU"
              class="rest-img"
            />
            <div class="rest-text-container">
              <div class="rest-title">No tasks for today.</div>
              <div class="rest-text">Rest is as imortant as working hard.</div>
            </div>
          </div>

          <div class="todo-list">
            <div
              class="todo-list-item"
              :key="index"
              v-for="(todo, index) in filteredTodos"
            >
              <input
                type="checkbox"
                class="todo-list-item-checkbox"
                @click="toggleTodo(todo)"
              />
              <div class="border-bottom">
                <div
                  @click="editTask(index)"
                  :class="[
                    todo.complete ? 'completed' : 'todo-list-item-content',
                  ]"
                >
                  {{ todo.text }}
                </div>
                <button class="task-button" @click="deleteTodo(index)">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="click-task-explanation">
      <img
        src="https://i.pinimg.com/474x/61/62/5b/61625b91c47e4a58d0b1d338a8fd0596.jpg"
        class="click-img"
      />
      <span class="img-explanation">Click task title to view the detail</span>
    </div>
    <div class="Welcome-message-modal" :class="{ modalActive: modalActive }">
      <div>
        <div class="Wm-modal-header">
          <div class="modal-header-left">
            <div class="modal-checkbox-span">
              <input type="checkbox" class="modal-checkbox" />
            </div>
            <div class="calender">
              <i class="fa-regular fa-calendar-days calender-icon"></i>
              <span class="calender-text">Due Date</span>
            </div>
          </div>
          <div>
            <i class="fa-solid fa-flag"></i>
            <i
              class="fa-solid fa-times modal-times-icon"
              @click="modalActive = false"
            ></i>
          </div>
        </div>
      </div>
      <div class="modal-section">
        <div class="modal-section-top">
          <form @submit="editTodo">
            <input type="text" v-model="editInput" class="editInput" />
          </form>
          <i class="fa-solid fa-bars wm-modal-bar-icon"></i>
        </div>
        <input
          type="text"
          v-model="descripton"
          placeholder="Descripton"
          class="descriptonInput"
        />
      </div>
      <div class="modal-footer">
        <div class="modal-footer-left">
          <i class="fa-solid fa-arrow-right modal-footer-arrow-icon"></i>
          <div class="Inbox-Button">Inbox</div>
        </div>
        <div class="modal-footer-right">
          <i class="fa-solid fa-font modal-footer-icon"></i>
          <i class="fa-solid fa-pen modal-footer-icon"></i>
          <i class="fa-solid fa-ellipsis modal-footer-icon"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var filters = {
  all(todos) {
    return todos;
  },
  complete(todos) {
    return todos.filter(function (todo) {
      return todo.complete;
    });
  },
  incomplete(todos) {
    return todos.filter(function (todo) {
      return !todo.complete;
    });
  },
};

var STORAGE_KEY = "vue-js-todo-P7oZi9sL";
var todoStorage = {
  fetch() {
    var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return todos;
  },
  save(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  },
};
export default {
  data() {
    return {
      inputVal: "",
      editInput: "",
      todos: todoStorage.fetch(),
      visibility: "all",
      openOptions: false,
      modalActive: false,
      show: false,
      editedTask: null,
    };
  },
  watch: {
    todos: {
      handler(todos) {
        todoStorage.save(todos);
      },
    },
  },
  computed: {
    filteredTodos() {
      return filters[this.visibility](this.todos);
    },
  },
  methods: {
    addTodo(e) {
      e.preventDefault();
      if (this.inputVal) {
        this.todos.push({
          text: this.inputVal,
          complete: false,
        });
      }
      this.inputVal = "";
    },
    editTodo(e) {
      e.preventDefault();
      if (this.editedTask != null) {
        this.todos[this.editedTask].text = this.editInput;
        this.editedTask = null;
      }

      this.editInput = "";
      this.modalActive = false;
    },
    toggleTodo(todo) {
      todo.complete = !todo.complete;
    },
    filterTodos(filter) {
      this.visibility = filter;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    editTask(index) {
      this.editInput = this.todos[index].text;
      this.editedTask = index;

      this.modalActive = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.Next7Days {
  width: 100%;
  display: flex;
}
.Next7DaysIn {
  height: 100%;
  border-right: 0.3px solid rgba(179, 179, 179, 0.466);
  width: 71%;
}
.Next7DaysFullWindow {
  height: 100%;
  border-right: 0.3px solid rgba(179, 179, 179, 0.466);
  width: 75.3%;
}
.Header {
  width: 99.2%;
}
.Header-in {
  padding: 20px 20px 10px 24px;
  display: flex;
  justify-content: space-between;
}
.Header-left {
  align-items: center;
  display: flex;
}
.Header-right {
  align-items: center;
  display: flex;
}
.close-icon {
  rotate: 180deg;
}
.openCloseIcon {
  font-size: 20px;
  color: rgb(94, 94, 94);
  text-decoration: none;
}
.title {
  font-size: 23px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.openCloseContainer {
  margin-right: 4px;
  width: 22px;
}
.icon {
  margin-left: 10px;
  color: rgb(94, 94, 94);
}
.footer {
  width: 100%;
}
.footer-in {
  padding: 0px 0px 0px 20px;
}
.input {
  outline: none;
  padding: 0px 0px 0px 20px;
  border-radius: 5px;
  height: 40px;
  width: 97.2%;
  background-color: rgba(211, 211, 211, 0.308);
  border: none;
}
::placeholder {
  font-size: 15px;
  color: lightgray;
}
.footer-bg {
  user-select: none;
  height: 440px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.rest-img {
  margin: 10px;
  width: 140px;
}
.rest-text-container {
  line-height: 30px;
  text-align: center;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.rest-title {
  color: rgba(0, 0, 0, 0.534);
}
.rest-text {
  color: rgb(165, 165, 165);
  font-size: 13px;
}
.click-task-explanation {
  user-select: none;
  flex-direction: column;
  margin: 0px 0px 0px 0px;
  width: 28%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.click-img {
  margin-bottom: 10px;
  width: 140px;
}
.img-explanation {
  color: gray;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.Welcome-message-modal {
  background-color: white;
  height: 100%;
  position: absolute;
  right: -24%;
  width: 24%;
  display: none;
  flex-direction: column;
  justify-content: space-between;
}
.modalActive {
  background-color: white;
  position: absolute;
  right: 0%;
  width: 24%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.Wm-modal-header {
  color: gray;
  height: 30px;
  align-items: center;
  padding: 14px 30px 14px 14px;
  display: flex;
  justify-content: space-between;
}
.modal-times-icon {
  color: rgb(238, 112, 112);
  cursor: pointer;
  padding: 0px 0px 0px 10px;
  font-size: 19px;
}
.loading-bar {
  height: 0.3px;
  background-color: lightgray;
  transition: 1s;
  width: 400px;
  border-radius: 15px;
}
.percentage {
  background-color: rgb(66, 141, 190);
  transition: 300ms;
  height: 100%;
  border-radius: 15px;
  border: 0.3px solid rgb(66, 141, 190);
}
.modal-header-left {
  display: flex;
}
.modal-section {
  height: 100%;
}
.modal-section-top {
  display: flex;
  justify-content: space-between;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 20px 30px 20px 20px;
}
.wm-modal-bar-icon {
  cursor: pointer;
  color: gray;
}
.modal-footer {
  display: flex;
}
.calender {
  padding: 0px 6px 0px 6px;
  align-items: center;
  height: 24px;
  cursor: pointer;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
}
.calender:hover {
  background-color: rgba(211, 211, 211, 0.363);
}
.calender-icon {
  padding: 3px 6px 3px 4px;
}
.modal-checkbox-span {
  padding: 0px 0px 0px 4px;
  display: flex;
  align-items: center;
  margin-right: 6px;
  width: 30px;
  border-right: 1px solid rgba(211, 211, 211, 0.548);
}
.modal-footer {
  border-top: 1px solid rgba(211, 211, 211, 0.473);
  height: 50px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}
.modal-footer-right {
  display: flex;
  margin-right: 10px;
}
.modal-footer-icon {
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  cursor: pointer;
  font-size: 12px;
  color: gray;
  padding: 6px;
  margin: 4px;
}
.modal-footer-icon:hover {
  background-color: rgba(211, 211, 211, 0.575);
}
.modal-footer-arrow-icon {
  padding: 1px 3px 1px 3px;
  border: 1px solid gray;
  font-size: 8px;
  margin: 0px 6px 0px 0px;
  color: gray;
}
.modal-footer-left {
  border-radius: 2px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 22px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  display: flex;
  height: 28px;
  align-items: center;
  width: 80px;
  justify-content: center;
}
.modal-footer-left:hover {
  background-color: rgba(211, 211, 211, 0.575);
}
.Inbox-Button {
  margin-left: 5px;
}
.checkboxs-container {
  margin-top: 40px;
}
.checkbox-container {
  justify-content: space-between;
  padding: 0px 0px 14px 0px;
  width: 90%;
  border-bottom: 0.3px solid rgba(211, 211, 211, 0.527);
  margin-left: 20px;
  margin-top: 14px;
  display: flex;
}
.checkbox-container-left {
  width: 70%;
  display: flex;
}
.checkbox-container-right .icon {
  cursor: pointer;
  margin: 0px 8px 0px 8px;
  color: gray;
}
.wcyd-input {
  height: auto;
  border: none;
  outline: none;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.74);
  width: 100%;
  padding: 0px 5px 0px 5px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  resize: none;
}
.wcyd-checkbox {
  -webkit-appearance: none; /* Remove default appearance */
  -moz-appearance: none;
  appearance: none;
  width: 17px;
  height: 17px;
  border: 1.5px solid #999;
  border-radius: 2px;
  outline: none;
  transition: background-color 0.3s ease-in-out;
}
.wcyd-checkbox:checked::before {
  justify-content: center;
  align-items: center;
  content: "\2714"; /* check mark symbol Unicode */
  display: flex;
  text-align: center;
  font-size: 13px;
  line-height: 18px;
  color: white;
}

.wcyd-checkbox:checked {
  background-color: gray; /* Change background color when checked */
}
.todo-list-item {
  position: relative;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin-top: 12px;
  padding: 0px 0px 0px 10px;
  height: 30px;
  display: flex;
  align-items: center;
  width: 97%;
  display: flex;
}
.todo-list-item:hover {
  background-color: rgba(201, 230, 243, 0.336);
  .task-button {
    align-items: center;
    display: flex;
  }
}

.todo-list-item-checkbox {
  margin: 0px 8px 0px 0px;
  -webkit-appearance: none; /* Remove default appearance */
  -moz-appearance: none;
  appearance: none;
  width: 18.3px;
  height: 18.3px;
  border: 1.5px solid lightgray;
  border-radius: 2px;
  outline: none;
  transition: background-color 0.3s ease-in-out;
}
.todo-list-item-checkbox:checked::before {
  justify-content: center;
  align-items: center;
  content: "\2714"; /* check mark symbol Unicode */
  display: flex;
  text-align: center;
  font-size: 13px;
  line-height: 18px;
  color: white;
}

.todo-list-item-checkbox:checked {
  background-color: lightgray; /* Change background color when checked */
}

.todo-list-item-content {
  font-size: 14px;
  display: flex;
  height: 30px;
  align-items: center;
  padding: 0px 10px 0px 4px;
  width: 100%;
  border-bottom: 0.3px solid rgba(179, 179, 179, 0.329);
}
.completed {
  font-size: 14px;
  color: rgba(179, 179, 179, 0.63);
  display: flex;
  height: 30px;
  align-items: center;
  padding: 0px 10px 0px 4px;
  width: 100%;
  border-bottom: 0.3px solid rgba(179, 179, 179, 0.233);
}
.todo-list {
  height: 746px;
  overflow-y: scroll;
}
.border-bottom {
  align-items: center;
  width: 100%;
  border-bottom: 0.3px solid rgba(179, 179, 179, 0.329);
  display: flex;
}
.task-button {
  font-size: 11px;
  color: rgba(255, 0, 0, 0.527);
  cursor: pointer;
  border: none;
  background: none;
  display: none;
  height: 20px;
}
.editInput {
  outline: none;
  width: 170%;
  font-size: 16px;
  color: rgb(0, 0, 0);
  border: none;
  box-sizing: border-box;
  background-color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
}
.descriptonInput {
  outline: none;
  width: 94%;
  margin-left: 20px;
  font-size: 16px;
  color: rgb(0, 0, 0);
  border: none;
  box-sizing: border-box;
  background-color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: inherit;
}
</style>
