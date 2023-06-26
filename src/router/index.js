import Vue from "vue";
import VueRouter from "vue-router";
import Tasks from "../pages/Tasks";
import Trash from "../pages/Trash";
import Completed from "../pages/Completed";
import Calender from "../pages/CalenderView";
import Inbox from "../pages/Inbox";
import Today from "../pages/Today";
import Next7days from "../pages/Next7days";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainPage",
    components: {
      default: Tasks,
      page: Today,
    },
  },
  {
    path: "/Tasks",
    name: "Tasks",
    components: {
      default: Tasks,
      page: Today,
    },
  },
  {
    path: "/Calender",
    name: "Calender",
    component: Calender,
  },
  {
    path: "/Tasks/Today",
    name: "Today",
    components: {
      default: Tasks,
      page: Today,
    },
  },
  {
    path: "/Tasks/Next7days",
    name: "Next7days",
    components: {
      default: Tasks,
      page: Next7days,
    },
  },
  {
    path: "/Tasks/Inbox",
    name: "Inbox",
    components: {
      default: Tasks,
      page: Inbox,
    },
  },
  {
    path: "/Tasks/Completed",
    name: "Completed",
    components: {
      default: Tasks,
      page: Completed,
    },
  },
  {
    path: "/Tasks/Trash",
    name: "Trash",
    components: {
      default: Tasks,
      page: Trash,
    },
  },
  {
    path: "/Tasks/Today",
    name: "OnlyToday",
    component: Today,
  },
  {
    path: "/Tasks/Next7days",
    name: "OnlyNext7days",
    component: Next7days,
  },
  {
    path: "/Tasks/Inbox",
    name: "OnlyInbox",
    component: Inbox,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
