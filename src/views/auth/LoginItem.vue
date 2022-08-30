<template>
  <div class="loginItem">
    <AuthSidebar
      :authShow="authShow"
      :AuthShowItem="AuthShowItem"
      :AuthShowItem2="AuthShowItem2"
    />
    <div :class="authShow ? 'login_items2' : 'login_items'">
      <AuthNavbar />
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import AuthSidebar from "@/components/AuthSidebar";
import AuthNavbar from "@/components/AuthNavbar";
const authShow = ref(false);
const AuthShowItem = () => {
  authShow.value = !authShow.value;
};
const AuthShowItem2 = () => {
  authShow.value = true;
};
</script>
<style scoped>
.loginItem {
  width: 100%;
  display: flex;
  height: 100vh;
}
.login_items {
  width: calc(100% - 260px);
  display: flex;
  flex-direction: column;
  transition: all 0.4s ease-out;
  overflow-y: auto;
  overflow-x: auto;
}
.login_items2 {
  width: calc(100% - 62px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: auto;
}
@media (max-width: 668px) {
  .login_items {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    transition: all 0.45s ease-out;
  }
  .login_items2 {
    width: calc(100% - 62px);
    height: 100vh;
    display: flex;
    flex-direction: column;
    transition: all 0.45s ease-out;
  }
}
</style>