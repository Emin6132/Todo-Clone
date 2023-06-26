<template>
  <div class="Todo">
    <Sidebar></Sidebar>
    <router-view></router-view>
    <router-view name="page"></router-view>
  </div>
</template>
<script>
import Sidebar from "./Sidebar.vue";
export default {
  components: { Sidebar },
};
</script>
<style lang="scss">
body {
  margin: 0;
  padding: 0;
  width: 100%;
}
.Todo {
  display: flex;
}
</style>
