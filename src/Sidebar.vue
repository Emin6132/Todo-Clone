<template>
  <div class="sidebar">
    <div class="sidebar-top">
      <div class="profile">
        <img
          src="https://media.istockphoto.com/id/1300972574/tr/foto%C4%9Fraf/milenyum-erkek-ekip-lideri-%C3%A7al%C4%B1%C5%9Fanlarla-%C3%A7evrimi%C3%A7i-sanal-at%C3%B6lye-%C3%A7al%C4%B1%C5%9Fmas%C4%B1-d%C3%BCzenliyor.jpg?s=170667a&w=0&k=20&c=rVD43jb6oz61c-6vLOato9vsfoPrkmT0wx5AoK-rPdM="
          class="profile-img"
        />
        <span class="premium-icon-span">
          <div class="premium-icon-cirle">
            <i class="fa-solid fa-crown premium-icon"></i>
          </div>
        </span>
      </div>
      <router-link :to="{ name: 'Tasks' }" class="tasks"
        ><i class="fa-solid fa-square-check icon"></i
      ></router-link>
      <router-link :to="{ name: 'Calender' }" class="calender-view">
        <i class="fa-solid fa-calendar-days icon"></i>
      </router-link>
      <div class="search">
        <i class="fa-solid fa-magnifying-glass icon"></i>
      </div>
    </div>
    <div class="sidebar-bottom">
      <div class="notifications"><i class="fa-solid fa-bell icon"></i></div>
      <div class="more">
        <i class="fa-solid fa-circle-question question-icon"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidebar {
  border-right: 1px solid rgba(158, 178, 190, 0.301);
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgba(157, 219, 247, 0.151);
  width: 50px;
}
.sidebar-top {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.sidebar-bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.profile-img {
  padding: 6px;
  width: 34px;
  height: 34px;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.premium-icon-span {
  margin-top: 12px;
  margin-left: -14px;
  position: absolute;
}
.premium-icon-cirle {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  width: 13px;
  height: 13px;
}
.premium-icon {
  color: white;
  font-size: 7px;
}
.icon {
  cursor: pointer;
  padding: 10px;
  font-size: 22px;
  color: rgba(128, 128, 128, 0.719);
}
.question-icon {
  padding: 10px;
  font-size: 22px;
  color: rgba(128, 128, 128, 0.719);
  margin-bottom: 14px;
}
a.router-link-active .icon {
  color: rgba(0, 60, 255, 0.644);
}
</style>
