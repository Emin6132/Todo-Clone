<template>
  <div class="Inbox">
    <div class="Inbox-in" :class="{ InboxinFullWindow: openOptions }">
      <div class="Header">
        <div class="Header-in">
          <div class="Header-left">
            <div
              @click="openOptions = false"
              class="openCloseContainer"
              v-show="openOptions"
            >
              <router-link
                :to="{ name: 'Inbox' }"
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
                :to="{ name: 'OnlyInbox' }"
                class="closebutton openCloseButton"
                ><i
                  class="fa-solid fa-arrow-right-to-bracket close-icon openCloseIcon"
                ></i
              ></router-link>
            </div>
            <span class="title">Inbox</span>
          </div>
          <div class="Header-right">
            <i class="fa-solid fa-arrow-up-wide-short icon"></i>
            <i class="fa-solid fa-ellipsis icon"></i>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-in">
          <input
            type="text"
            class="input"
            placeholder='+ Add task to "Inbox" on "Today"'
          />
          
          <div class="radio-container">
            <div class="checkbox-div">
              <span class="checkbox-span" @click="vmModalActive">
                <input type="checkbox" class="checkbox" />
                <input
                  type="text"
                  class="section-text-checkbox"
                  v-model="wmInputValue"
                />
              </span>
              <i class="fa-solid fa-file-lines small-section-icon"></i>
            </div>
            <div class="checkbox-div" @click="ModalActive">
              <i class="fa-solid fa-file-lines section-icon"></i>
              <input
                type="text"
                class="section-text"
                v-model="wmInputWhatCan"
              />
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

    <div class="Welcome-message-modal" :class="{ modalActive: vmmodalActive }">
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
          <i class="fa-solid fa-flag"></i>
        </div>
        <div class="modal-section">
          <div class="modal-section-top">
            <input
              type="text"
              class="modal-section-title"
              v-model="wmInputValue"
            />
            <i class="fa-solid fa-bars wm-modal-bar-icon"></i>
          </div>
          <textarea class="modal-section-explanation">
            You have joined the hundreds of thousands 
            of others who are using TickTick to make
            life easier. TickTick lets you keep track of
            your tasks, draw up a schedule, and share
            projects with anyone around you.
            TickTick currently supports a number of
            operating system platforms including
            iPhone, iPad, Mac App, Windows, Apple
            Watch, Android phone, Android Wear, Web,
            Chrome Extension, Chrome App, and
            Firefox Extension. With these 10 platforms,
            we believe TickTick can always help you
            achieve more everyday!
          </textarea>
        </div>
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
          <i class="fa-solid fa-flag"></i>
        </div>
        <div class="loading-bar">
          <div class="percentage" :style="{ width: percentage + '%' }"></div>
        </div>
        <div class="modal-section">
          <div class="modal-section-top">
            <input
              type="text"
              class="modal-section-title"
              v-model="wmInputWhatCan"
            />
            <i class="fa-solid fa-bars wm-modal-bar-icon"></i>
          </div>

          <div class="checkboxs-container">
            <div
              class="checkbox-container"
              @mouseover="wcydIconShowone = true"
              @mouseleave="wcydIconShowone = false"
            >
              <div class="checkbox-container-left">
                <input
                  type="checkbox"
                  class="wcyd-checkbox"
                  @click="checkbox"
                />
                <textarea class="wcyd-input">
Add tasks and reminder. Never lose track of your to-do list. </textarea
                >
              </div>
              <div class="checkbox-container-right" v-show="wcydIconShowone">
                <i class="fa-solid fa-clock icon"></i>
                <i class="fa-solid fa-trash icon"></i>
              </div>
            </div>
            <div
              class="checkbox-container"
              @mouseover="wcydIconShowtwo = true"
              @mouseleave="wcydIconShowtwo = false"
            >
              <div class="checkbox-container-left">
                <input
                  type="checkbox"
                  class="wcyd-checkbox"
                  @click="checkbox1"
                />
                <textarea class="wcyd-input">
Set flexible repeating intervals for recurring tasks.  </textarea
                >
              </div>
              <div class="checkbox-container-right" v-show="wcydIconShowtwo">
                <i class="fa-solid fa-clock icon"></i>
                <i class="fa-solid fa-trash icon"></i>
              </div>
            </div>
            <div
              class="checkbox-container"
              @mouseover="wcydIconShowthree = true"
              @mouseleave="wcydIconShowthree = false"
            >
              <div class="checkbox-container-left">
                <input
                  type="checkbox"
                  class="wcyd-checkbox"
                  @click="checkbox2"
                />
                <textarea class="wcyd-input">
Subscribe third-party calendars. </textarea
                >
              </div>
              <div class="checkbox-container-right" v-show="wcydIconShowthree">
                <i class="fa-solid fa-clock icon"></i>
                <i class="fa-solid fa-trash icon"></i>
              </div>
            </div>
            <div
              class="checkbox-container"
              @mouseover="wcydIconShowfour = true"
              @mouseleave="wcydIconShowfour = false"
            >
              <div class="checkbox-container-left">
                <input
                  type="checkbox"
                  class="wcyd-checkbox"
                  @click="checkbox3"
                />
                <textarea class="wcyd-input">
Use folder, list, priority, and tag to make tasks more organized.  </textarea
                >
              </div>
              <div class="checkbox-container-right" v-show="wcydIconShowfour">
                <i class="fa-solid fa-clock icon"></i>
                <i class="fa-solid fa-trash icon"></i>
              </div>
            </div>
            <div
              class="checkbox-container"
              @mouseover="wcydIconShowfive = true"
              @mouseleave="wcydIconShowfive = false"
            >
              <div class="checkbox-container-left">
                <input
                  type="checkbox"
                  class="wcyd-checkbox"
                  @click="checkbox4"
                />
                <textarea class="wcyd-input">
Make check items within tasks. </textarea
                >
              </div>
              <div class="checkbox-container-right" v-show="wcydIconShowfive">
                <i class="fa-solid fa-clock icon"></i>
                <i class="fa-solid fa-trash icon"></i>
              </div>
            </div>
            <div
              class="checkbox-container"
              @mouseover="wcydIconShowsix = true"
              @mouseleave="wcydIconShowsix = false"
            >
              <div class="checkbox-container-left">
                <input
                  type="checkbox"
                  class="wcyd-checkbox"
                  @click="checkbox5"
                />
                <textarea class="wcyd-input">
Collaborate on shared lists with your family, friends, and colleagues.  </textarea
                >
              </div>
              <div class="checkbox-container-right" v-show="wcydIconShowsix">
                <i class="fa-solid fa-clock icon"></i>
                <i class="fa-solid fa-trash icon"></i>
              </div>
            </div>
          </div>
        </div>
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
export default {
  data() {
    return {
      openOptions: false,
      vmmodalActive: false,
      modalActive: false,
      wmInputValue: "Welcome to TickTick",
      wmInputWhatCan: "What can you do with TickTick",
      wcydIconShowone: false,
      wcydIconShowtwo: false,
      wcydIconShowthree: false,
      wcydIconShowfour: false,
      wcydIconShowfive: false,
      wcydIconShowsix: false,
      percentage: 0,
      deincrease: false,
      deincrease1: false,
      deincrease2: false,
      deincrease3: false,
      deincrease4: false,
      deincrease5: false,
    };
  },
  methods: {
    vmModalActive() {
      this.vmmodalActive = !this.vmmodalActive;
      this.modalActive = false;
    },
    ModalActive() {
      this.vmmodalActive = false;
      this.modalActive = !this.modalActive;
    },
    checkbox() {
      this.deincrease = !this.deincrease;
      if (this.deincrease == true) {
        this.percentage += 17;
      } else if (this.deincrease == false) {
        this.percentage -= 17;
      }
    },
    checkbox1() {
      this.deincrease1 = !this.deincrease1;
      if (this.deincrease1 == true) {
        this.percentage += 17;
      } else if (this.deincrease1 == false) {
        this.percentage -= 17;
      }
    },
    checkbox2() {
      this.deincrease2 = !this.deincrease2;
      if (this.deincrease2 == true) {
        this.percentage += 17;
      } else if (this.deincrease2 == false) {
        this.percentage -= 17;
      }
    },
    checkbox3() {
      this.deincrease3 = !this.deincrease3;
      if (this.deincrease3 == true) {
        this.percentage += 17;
      } else if (this.deincrease3 == false) {
        this.percentage -= 17;
      }
    },
    checkbox4() {
      this.deincrease4 = !this.deincrease4;
      if (this.deincrease4 == true) {
        this.percentage += 17;
      } else if (this.deincrease4 == false) {
        this.percentage -= 17;
      }
    },
    checkbox5() {
      this.deincrease5 = !this.deincrease5;
      if (this.deincrease5 == true) {
        this.percentage += 15;
      } else if (this.deincrease5 == false) {
        this.percentage -= 15;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.text {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.Inbox {
  width: 100%;
  display: flex;
}
.Inbox-in {
  height: 100%;
  border-right: 0.3px solid rgba(179, 179, 179, 0.466);
  width: 71%;
}
.InboxinFullWindow {
  height: 100%;
  border-right: 0.3px solid rgba(179, 179, 179, 0.466);
  width: 85%;
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
.section {
  width: 100%;
}
.section-in {
  padding: 0px 0px 0px 20px;
}
.input {
  padding: 0px 0px 0px 20px;
  border-radius: 5px;
  height: 40px;
  width: 97%;
  background-color: rgba(211, 211, 211, 0.308);
  border: none;
}
.input::placeholder {
  font-size: 15px;
  color: lightgray;
}
.section-bg {
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
.section-icon {
  color: rgba(128, 128, 128, 0.589);
  margin-right: 10px;
}
.radio-container {
  display: flex;
  flex-direction: column;
}
.section-text {
  outline: none;
  height: 22px;
  display: flex;
  align-items: center;
  width: 98%;
  font-size: 14px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: none;
  font-size: 16px;
  color: rgb(0, 0, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.checkbox-div:hover {
  background-color: lightgray;
  .section-text {
    background-color: lightgray;
  }
}
.section-text-checkbox {
  outline: none;
  height: 22px;
  display: flex;
  align-items: center;
  width: 98%;
  font-size: 14px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  border: none;
  font-size: 16px;
  color: rgb(0, 0, 0);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

.checkbox-div {
  border-bottom: 0.3px solid rgba(179, 179, 179, 0.466);
  margin-top: 12px;
  padding: 0px 0px 0px 10px;
  height: 30px;
  display: flex;
  align-items: center;
}
.checkbox-div:hover {
  background-color: lightgray;
  .section-text-checkbox {
    background-color: lightgray;
  }
}
.checkbox {
  margin-left: 0px;
  margin-right: 10px;
}
.checkbox-span {
  align-items: center;
  height: 34px;
  width: 100%;
  display: flex;
}
.small-section-icon { 
  width: 20px;
  display: flex;
  align-items: center;
  height: 34px;
  margin-right: 10px;
  color: rgba(128, 128, 128, 0.589);
  font-size: 12px;
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
// Modal CSS
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
.modal-section-top {
  display: flex;
  justify-content: space-between;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 20px 30px 20px 20px;
}
.wm-modal-bar-icon {
  color: gray;
}
.modal-section-title {
  outline: none;
  width: 70%;
  font-size: 16px;
  color: rgb(0, 0, 0);
  border: none;
  box-sizing: border-box;
  background-color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: bold;
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
.modal-section-explanation {
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 23px;
  color: rgba(0, 0, 0, 0.74);
  width: 100%;
  height: 360px;
  padding: 0px 23px 0px 20px;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  resize: none;
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
</style>
