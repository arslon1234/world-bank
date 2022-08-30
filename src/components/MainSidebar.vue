<template>
  <div :class="props.showSide ? 'mainSidebar2' : 'mainSidebar'">
    <div class="img">
      <img :src="bar" alt="" @click="props.ShowBar" />
    </div>
    <div class="item_centre">
      <router-link
        v-show="store.state.user_type === 'minfin'"
        to="/commission"
        active-class="item1"
        class="item2"
      >
        <img :src="commission" alt="#" style="margin-left: 20px" />
        <span>{{ $t("CompositionCommission") }}</span>
      </router-link>
      <router-link
        v-show="
          store.state.user_type === 'minfin' ||
          store.state.user_type === 'deputy_commission_chairman' ||
          store.state.user_type === 'commission_chairman'
        "
        to="/complaints"
        active-class="item1"
        class="item2"
        :class="{ item1: $route.meta.child === 'complaints-child' }"
      >
        <img :src="complaints" alt="#" style="margin-left: 20px" />
        <span>{{ $t("NewComplaints") }}</span>
      </router-link>
      <router-link
        v-show="
          store.state.user_type === 'minfin' ||
          store.state.user_type === 'deputy_commission_chairman' ||
          store.state.user_type === 'commission_chairman'
        "
        to="/sendApplication"
        active-class="item1"
        class="item2"
        :class="{ item1: $route.meta.child === 'send_app_child' }"
      >
        <img :src="send" alt="#" style="margin-left: 20px" />
        <span>{{ $t("SendToCommission") }}</span>
      </router-link>
      <router-link
        to="/accepted"
        active-class="item1"
        class="item2"
        :class="{ item1: $route.meta.child === 'accept_protocol_child' }"
      >
        <img :src="Accepted" alt="#" style="margin-left: 20px" />
        <span>{{ $t("Accepted") }}</span>
      </router-link>
      <router-link
        to="/denied"
        v-show="
          store.state.user_type === 'minfin' ||
          store.state.user_type === 'deputy_commission_chairman' ||
          store.state.user_type === 'commission_chairman'
        "
        active-class="item1"
        class="item2"
      >
        <img :src="Denied" alt="#" style="margin-left: 20px" />
        <span>{{ $t("Denied") }}</span>
      </router-link>
      <router-link to="/decision" active-class="item1" class="item2">
        <img :src="decision" alt="#" style="margin-left: 20px" />
        <span>{{ $t("CommissionDecision") }}</span>
      </router-link>
      <router-link to="/message" active-class="item1" class="item2">
        <img :src="message" alt="#" style="margin-left: 20px" />
        <span>{{ $t("Message") }}</span>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import bar from "@/assets/Vector (25).svg";
import commission from "@/assets/Vector (26).svg";
import complaints from "@/assets/Vector (27).svg";
import send from "@/assets/Vector (28).svg";
import Accepted from "@/assets/Vector (30).svg";
import Denied from "@/assets/Vector (31).svg";
import decision from "@/assets/Vector (32).svg";
import message from "@/assets/Vector (33).svg";
import i18n from "@/plugins/i18n";
import { useI18n } from "vue-i18n";
import store from "@/store";
const { t, locale } = useI18n();
const type = ref(localStorage.getItem("type"));
console.log(type.value);
const props = defineProps({
  showSide: {
    type: Boolean,
    required: true,
  },
  ShowBar: {
    type: Function,
  },
});
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.mainSidebar {
  width: 260px;
  height: 100%;
  background-color: #1c609e;
  transition: all 0.4s ease-out;
  .img {
    margin: 34px 0 34px 22px;
    img {
      cursor: pointer;
    }
  }
  .item_centre {
    width: 100%;
    display: flex;
    flex-direction: column;
    .item1 {
      width: 100%;
      height: 48px;
      background: #2f6ca4;
      border-right: 2px solid #fcd203;
      display: flex;
      align-items: center;
      text-decoration: none;
      span {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        margin-left: 20px;
        font-size: 14px;
        line-height: 16px;
        color: #ffffff;
      }
    }
    .item2 {
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      text-decoration: none;
      span {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        margin-left: 20px;
        font-size: 14px;
        line-height: 16px;
        color: #ffffff;
      }
    }
  }
}
.mainSidebar2 {
  width: 62px;
  height: 100%;
  background-color: #1c609e;
  transition: all 0.4s ease-out;
  .img {
    margin: 34px 0 20px 22px;
    img {
      cursor: pointer;
    }
  }
  .item_centre {
    width: 100%;
    display: flex;
    flex-direction: column;
    .item1 {
      width: 100%;
      height: 48px;
      background: #2f6ca4;
      border-right: 2px solid #fcd203;
      display: flex;
      align-items: center;
      text-decoration: none;
      span {
        display: none;
      }
    }
    .item2 {
      width: 100%;
      height: 48px;
      display: flex;
      align-items: center;
      text-decoration: none;
      span {
        display: none;
      }
    }
  }
}
@media (max-width: 668px) {
  .mainSidebar {
    width: 260px;
    position: absolute;
    height: 100%;
    background-color: #1c609e;
    transition: all 0.4s ease-out;
    z-index: 999;
  }
  .mainSidebar2 {
    width: 62px;
    height: 100%;
    background-color: #1c609e;
    transition: all 0.4s ease-out;
  }
}
</style>