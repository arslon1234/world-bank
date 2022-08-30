<template>
  <div class="mainNavbar">
    <div class="left">
      <img :src="gerb" alt="" />
      <span>{{ $t("complaints") }}</span>
    </div>
    <div :class="showSide ? 'right_bar' : 'right_bar2'" @click="showFunc">
      <img :src="bar" alt="" />
    </div>
    <div :class="show ? 'right2' : 'right'">
      <div class="select">
        <i class="fa-solid fa-globe"></i>
        <select v-model="lang" @change="change($event)">
          <option value="uz">Uz</option>
          <option value="oz">Уз</option>
          <option value="ru">Ру</option>
        </select>
      </div>
      <div class="role" @click="Show_LogOut">
        <div class="role_icon">
          <i class="fa-solid fa-user"></i>
        </div>
        <span>{{ store.state.me }}</span>
        <div :class="logOut ? 'logOut1' : 'logOut'" @click="LogOut">
          <span>{{$t("goOut")}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import gerb from "@/assets/gerb.svg";
import bar from "@/assets/Vector (25).svg";
import { onMounted, ref } from "vue";
import store from "@/store";
import { useRouter } from "vue-router";
import i18n from "@/plugins/i18n";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const router = useRouter();
const show = ref(false);
const logOut = ref(false);
const lang = ref()
const props = defineProps({
  showSide: {
    type: Boolean,
  },
});
const showFunc = () => {
  show.value = !show.value;
  logOut.value = false;
};
const Show_LogOut = () => {
  logOut.value = !logOut.value;
};
onMounted(() => {
  store.dispatch("getMe");
  if (!localStorage.getItem("lang")) {
    localStorage.setItem("lang", "uz");
    lang.value = localStorage.getItem("lang")
  }
  i18n.global.locale = localStorage.getItem("lang");
});
const change=(event)=>{
  localStorage.setItem("lang", event.target.value);
  i18n.global.locale = event.target.value;
  location.reload();
  show.value = false
}
lang.value = localStorage.getItem("lang");
const LogOut = () => {
  localStorage.removeItem("token");
  router.push({ name: "login" });
};
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.mainNavbar {
  position: sticky;
  top: 0;
  width: 100%;
  padding: 10px 0px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .left {
    display: flex;
    align-items: center;
    img {
      margin-left: 10px;
    }
    span {
      margin-left: 7px;
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 26px;
      color: #272a2c;
    }
  }
  .right_bar {
    position: relative;
    width: 55px;
    height: 35px;
    background: #1c609e;
    border-radius: 8px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  .right_bar2 {
    width: 55px;
    height: 35px;
    background: #1c609e;
    border-radius: 8px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
  }
  .right {
    position: absolute;
    top: -130px;
    right: 20px;
    width: 260px;
    height: 120px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px #cccccc;
    transition: all 0.3s ease-out;
    .select {
      width: 89px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0px 5px;
      background: #ffffff;
      border: 1px solid #e1eaed;
      border-radius: 8px;
      i {
        color: #8da2ad;
      }
      select {
        width: 50px;
        margin-left: 5px;
        text-align: center;
        outline: none;
        border: none;
      }
    }
    .role {
      display: flex;
      align-items: center;
      margin-right: 10px;
      .role_icon {
        width: 36px;
        height: 36px;
        background: #ff7b51;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0px 5px;
        i {
          color: #fff;
        }
      }
      span {
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        color: #272a2c;
      }
    }
  }
  .right2 {
    position: absolute;
    top: 85px;
    right: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 260px;
    height: 120px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 2px 2px 2px 1px #cccccc;
    transition: all 0.4s ease-in-out;
    .select {
      width: 89px;
      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 15px;
      background: #ffffff;
      border: 1px solid #e1eaed;
      border-radius: 8px;
      i {
        color: #8da2ad;
      }
      select {
        width: 50px;
        text-align: center;
        outline: none;
        border: none;
      }
    }
    .role {
      display: flex;
      align-items: center;
      margin-left: 15px;
      cursor: pointer;
      overflow: hidden;
      .role_icon {
        width: 36px;
        height: 36px;
        background: #ff7b51;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
        i {
          color: #fff;
        }
      }
      span {
        font-family: "Roboto", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 13px;
        line-height: 16px;
        color: #272a2c;
      }
      .logOut {
        position: absolute;
        top: -130px;
        left: 0;
      }
      .logOut1 {
        position: absolute;
        top: 110px;
        left: 15px;
        width: 150px;
        height: 40px;
        border-radius: 8px;
        background-color: #fff;
        border: 1px solid #cccc;
        display: flex;
        align-items: center;
        padding-left: 10px;
        cursor: pointer;
        span {
          color: rgb(126, 126, 126);
        }
      }
    }
  }
}
</style>