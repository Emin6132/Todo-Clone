<template>
  <div class="tasks">
    <div class="options">
      <router-link class="Today Button" :to="{ name: 'Today' }"
        ><div class="calender-icon-container">
          <i class="fa-solid fa-calendar icon"></i>
          <span class="day-count">31</span>
        </div>
        Today</router-link
      >
      <router-link class="Next7days Button" :to="{ name: 'Next7days' }"
        ><div class="week-icon-container">
          <i class="fa-solid fa-calendar icon"></i>
          <span class="week">w</span>
        </div>
        Next 7 Days</router-link
      >
      <router-link class="Inbox Button" :to="{ name: 'Inbox' }"
        ><span class="inbox-button-in"
          ><i class="fa-solid fa-inbox icon"></i> Inbox</span
        >
        <span class="Inbox-notifications-count">{{
          InboxNotificationsCount
        }}</span></router-link
      >
      <span class="hr"></span>

      <div class="informations">
        <div class="information">
          <span
            class="information-title lists-title"
            @click="listsOpen = !listsOpen"
            @mouseover="listsIconShow = true"
            @mouseleave="listsIconShow = false"
          >
            <span
              class="information-title-left"
              :class="{ closedIcon: listsIconShow }"
            >
              <div
                v-show="listsIconShow"
                v-if="listsOpen"
                class="openCloseIconContainer"
              >
                <i class="fa-solid fa-arrow-right fa-xs"></i>
              </div>
              <div
                v-show="listsIconShow"
                v-if="!listsOpen"
                class="openCloseIconContainer"
              >
                <i class="fa-solid fa-arrow-down fa-xs"></i>
              </div>
              Lists
            </span>
          </span>
          <span class="information-text" v-show="!listsOpen"
            >Use lists to categorize and <br />
            manage your tasks and notes</span
          >
        </div>
        <div class="information">
          <span
            class="information-title Tags-title"
            @click="tagsOpen = !tagsOpen"
            @mouseover="tagsIconShow = true"
            @mouseleave="tagsIconShow = false"
          >
            <span
              class="information-title-left"
              :class="{ closedIcon: tagsIconShow }"
            >
              <div
                v-show="tagsIconShow"
                v-if="tagsOpen"
                class="openCloseIconContainer"
              >
                <i class="fa-solid fa-arrow-right fa-xs"></i>
              </div>
              <div
                v-show="tagsIconShow"
                v-if="!tagsOpen"
                class="openCloseIconContainer"
              >
                <i class="fa-solid fa-arrow-down fa-xs"></i>
              </div>
              Tags
            </span>
          </span>
          <span class="information-text" v-show="!tagsOpen"
            >Categroize your tasks with <br />
            tags.Quickly select a tag by <br />
            typing "#" when a adding task</span
          >
        </div>
        <div class="information">
          <span
            class="information-title Filters-title"
            @click="filtersOpen = !filtersOpen"
            @mouseover="filtersIconShow = true"
            @mouseleave="filtersIconShow = false"
          >
            <span
              class="information-title-left"
              :class="{ closedIcon: filtersIconShow }"
            >
              <div
                v-show="filtersIconShow"
                v-if="filtersOpen"
                class="openCloseIconContainer"
              >
                <i class="fa-solid fa-arrow-right fa-xs"></i>
              </div>
              <div
                v-show="filtersIconShow"
                v-if="!filtersOpen"
                class="openCloseIconContainer"
              >
                <i class="fa-solid fa-arrow-down fa-xs"></i>
              </div>
              Filters
            </span>
          </span>
          <span class="information-text" v-show="!filtersOpen"
            >Display tasks filtered by list, date, priotiry, tag, and more</span
          >
        </div>
      </div>

      <span class="hr"></span>

      <router-link class="Completed Button" :to="{ name: 'Completed' }"
        ><i class="fa-solid fa-square-check icon"></i> Completed</router-link
      >
      <router-link class="Trash Button" :to="{ name: 'Trash' }"
        ><i class="fa-solid fa-trash icon"></i> Trash</router-link
      >
    </div>
    <router-link :to="{ name: 'PremiumBuyPage' }" class="upgrade-prem-button">
      <i class="fa-solid fa-crown fa-beat prem-icon"></i> Upgrade to Premium
      <i class="fa-solid fa-arrow-right prem-arrow-icon"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      InboxNotificationsCount: 2,
      listsOpen: false,
      tagsOpen: false,
      filtersOpen: false,
      listsIconShow: false,
      tagsIconShow: false,
      filtersIconShow: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.tasks {
  border-right: 0.1px solid rgba(216, 216, 216, 0.637);
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.options {
  align-items: center;
  display: flex;
  flex-direction: column;
}
.Today {
  margin-top: 14px;
}
.Button {
  font-size: 14px;
  height: 40px;
  display: flex;
  align-items: center;
  width: 90%;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: black;
  text-decoration: none;
}
.inbox-button-in {
  height: 100%;
  align-items: center;
  display: flex;
}
.Inbox-notifications-count {
  margin-right: 11px;
  font-size: 11.5px;
  color: gray;
}
.Inbox {
  display: flex;
  justify-content: space-between;
}
.icon {
  font-size: 15px;
  padding: 10px 6px 10px 10px;
  color: rgba(128, 128, 128, 0.719);
}
.hr {
  margin: 3px;
  width: 95%;
  border: 0.1px solid rgba(216, 216, 216, 0.26);
}
.informations {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.information {
  line-height: 16px;
  letter-spacing: 0.7px;
  font-size: 11px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  padding: 0px 10px 10px 10px;
  display: flex;
  flex-direction: column;
  width: 91%;
}
.information-title {
  width: 210px;
  user-select: none;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: space-between;
  color: gray;
  padding: 0px 0px 6px 0px;
}
.information-title-left {
  margin-left: 4px;
  font-size: 12px;
  display: flex;
}
.closedIcon {
  margin-left: -8px;
  font-size: 12px;
  display: flex;
}
.lists-title {
  margin-top: 14px;
}
.openCloseIconContainer {
  margin-right: 4px;
}
.information-text {
  user-select: none;
  border-radius: 6px;
  padding: 10px;
  color: rgba(128, 128, 128, 0.548);
  background-color: rgba(236, 236, 236, 0.493);
}
.add-new-icon {
  cursor: pointer;
  font-size: 10px;
}
.prem-icon {
  color: rgba(128, 128, 128, 0.349);
}
.upgrade-prem-button {
  text-decoration: none;
  font-size: 12px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
  height: 30px;
  color: rgba(128, 128, 128, 0.493);
  background-color: rgba(211, 211, 211, 0.438);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.prem-arrow-icon {
  opacity: 0.3;
}
.day-count {
  margin-top: 14.4px;
  color: white;
  font-size: 8.7px;
  margin-left: -17.55px;
  position: absolute;
}
.week {
  margin-top: 12px;
  color: white;
  font-size: 11.5px;
  margin-left: -17px;
  position: absolute;
}
a.router-link-active {
  border-radius: 2px;
  background-color: rgba(201, 230, 243, 0.336);
}
</style>
