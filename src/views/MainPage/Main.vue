<template>
  <div class="main">
    <MainSidebar :showSide="showSide" :ShowBar="ShowBar" />
    <div :class="showSide ? 'main_items2' : 'main_items'">
      <MainNavbar :showSide="showSide" />
      <router-view></router-view>
    </div>
  </div>
</template>
<script setup>
import MainSidebar from "@/components/MainSidebar";
import MainNavbar from "@/components/MainNavbar";
import { ref } from "vue";
import store from "@/store";
import {onMounted } from 'vue'
const showSide = ref(false);
const ShowBar = () => {
  showSide.value = !showSide.value;
};
onMounted(() => {
  store.dispatch("getMe")
  store.dispatch("getAppoinment")
  store.dispatch("getPersonType")
  store.dispatch("getSipName")
  store.dispatch("getIndications")
})
</script>
<style scoped lang="scss">
.main {
  width: 100%;
  height: 100vh;
  display: flex;
  .main_items {
    width: calc(100% - 260px);
    // height: 100vh;
    display: flex;
    flex-direction: column;
    transition: all 0.4s ease-out;
    overflow-y: auto;
    overflow-x: auto;
  }
  .main_items2 {
    width: calc(100% - 62px);
    // height: 100vh;
    display: flex;
    flex-direction: column;
    transition: all 0.4s ease-out;
    overflow-y: auto;
     overflow-x: auto;
  }
@media (max-width: 668px) {
  .main_items {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: all 0.45s ease-out;
}
.main_items2 {
  width: calc(100% - 62px);
  height: 100vh;
  display: flex;
  flex-direction: column;
  transition: all 0.45s ease-out;
}
}
}
</style>