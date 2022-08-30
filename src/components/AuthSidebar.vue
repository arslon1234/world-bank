<template>
  <div :class="props.authShow ? 'sidebar2' : 'sidebar'">
    <div class="item_top">
      <img :src="bar" alt="" @click="props.AuthShowItem" />
    </div>
    <div class="item_centre">
      <router-link to="/login" active-class="item1" class="item2" @click="props.AuthShowItem2">
        <img :src="login" alt="#" style="margin-left: 20px" />
        <span v-show="!props.authShow">{{ $t("Login") }}</span>
      </router-link>
      <router-link to="/shikoyat" active-class="item1" class="item2" @click="props.AuthShowItem2">
        <img :src="login1" alt="#" style="margin-left: 20px" />
        <span v-show="!props.authShow">{{ $t("RegisterOfComplaints") }}</span>
      </router-link>
      <router-link to="/protokol" active-class="item1" class="item2" @click="props.AuthShowItem2">
        <img :src="login2" alt="#" style="margin-left: 20px" />
        <span v-show="!props.authShow">{{ $t("RegistryOfProtocols") }}</span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import bar from "@/assets/Vector (25).svg";
import login from "@/assets/Vector (20).svg";
import login1 from "@/assets/Vector (21).svg";
import login2 from "@/assets/Vector (22).svg";
const props = defineProps({
  authShow: {
    type: Boolean,
  },
  AuthShowItem: {
    type: Function,
  },
  AuthShowItem2: {
    type: Function,
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.sidebar {
  position: sticky;
  width: 260px;
  height: 100%;
  background-color: #1c609e;
  transition: all 0.4s ease-out;
}
.sidebar2 {
  width: 62px;
  height: 100vh;
  background-color: #1c609e;
  transition: all 0.4s ease-out;
}
@media (max-width: 668px) {
  .sidebar {
    width: 260px;
    position: absolute;
    height: 100%;
    background-color: #1c609e;
    transition: all 0.4s ease-out;
    z-index: 999;
  }
  .sidebar2 {
  width: 62px;
  height: 100%;
  background-color: #1c609e;
  transition: all 0.4s ease-out;
}
}
.item_top {
  width: 100%;
  display: flex;
  margin-top: 28px;
  margin-left: 15px;
}
.item_top img {
  cursor: pointer;
}
.item_centre {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 30px;
}
.item_centre .item1 {
  width: 100%;
  height: 48px;
  background: #2f6ca4;
  border-right: 2px solid #fcd203;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.item_centre .item2 {
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  text-decoration: none;
}
.item_centre .item1 span {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  margin-left: 20px;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
}
.item_centre .item2 span {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  margin-left: 20px;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
}
</style>