<template>
  <transition name="fade">
    <div class="vue-modal" v-show="props.open">
      <transition name="drop-in">
        <div class="vue-modal-inner" v-show="props.open">
          <div class="vue-modal-content">
            <div v-for="user in props.users" :key="user.id">
              <div v-if="props.ID === user.id">
                <div class="content_top">
                  <span>{{$t("changeStatus")}}</span>
                  <i
                    style="cursor: pointer"
                    @click="props.HideModalStatus"
                    class="fa-solid fa-xmark"
                  ></i>
                </div>
                <div class="content_center">
                  <div class="img">
                    <img :src="user.path" alt="" />
                  </div>
                  <div class="text">
                    <p>{{ user.full_name }}</p>
                    <span>Член комиссии</span>
                    <span>{{ user.phone }}</span>
                  </div>
                </div>
                <div class="content_info">
                  <div class="content_info_item">
                    <span>{{$t("Passport_data")}}</span>
                    <p>
                      <span>{{ user.passport_serial }}</span
                      ><span>{{ user.passport_number }}</span>
                    </p>
                  </div>
                  <div class="content_info_item">
                    <span>{{$t("PINFL")}}:</span>
                    <p>
                      <span>{{ user.pinfl }}</span>
                    </p>
                  </div>
                  <div class="content_info_item">
                    <span>{{$t("Inn")}}:</span>
                    <p>
                      <span>{{ user.tin }}</span>
                    </p>
                  </div>
                  <div class="content_info_item">
                    <span>{{$t("Place_of_work")}}:</span>
                    <p>
                      <span>{{ user.work_place }}</span>
                    </p>
                  </div>
                  <div class="content_info_item">
                    <span>{{$t("position")}}:</span>
                    <p>
                      <span>{{ user.position }}</span>
                    </p>
                  </div>
                </div>
                <div class="content_bottom">
                  <div
                    v-if="user.status === 10"
                    class="active"
                    @click="ChangeStatus(user.id)"
                  >
                    <span style="color: #ff6157">{{$t("Deactivate")}}</span>
                  </div>
                  <div v-else class="noactive" @click="ChangeStatus(user.id)">
                    <span style="color: #30be76">{{$t("Activate")}}</span>
                  </div>
                  <button @click="props.HideModalStatus">{{$t("Cancel")}}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import photo from "@/assets/Vector (34).svg";
import http from "@/plugins/axios";
import store from "@/store";
const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  ID: {
    type: String,
    required: true,
  },
  users: {
    type: Array,
    required: true,
  },
  HideModalStatus: {
    type: Function,
    required: true,
  },
  getUser: {
    type: Function,
    required: true,
  },
});
const ChangeStatus = (id) => {
  http.put(`/user/change-status/${id}`).then(() => {
  props.HideModalStatus();
  props.getUser();
  });
};
</script>
<style scoped lang="scss">
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.vue-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  /* background-color: #e8eaec; */
  z-index: 50;
  .vue-modal-inner {
    max-width: 600px;
    max-height: 650px;
    margin: 2rem auto;
    overflow: auto;
    .vue-modal-content {
      position: relative;
      background-color: #fff;
      border: 1px solid #afadad4d;
      background-clip: padding-box;
      border-radius: 0.5rem;
      padding: 1rem;
      display: flex;
      flex-direction: column;
      .content_top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        span {
          font-weight: 600;
          font-size: 16px;
        }
      }
      .content_center {
        width: 100%;
        margin-top: 20px;
        display: flex;
        align-items: center;
        .img {
          width: 100px;
          height: 100px;
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 8px;
          }
        }
        .text {
          margin-left: 20px;
          display: flex;
          flex-direction: column;
          p {
            font-size: 16px;
            font-weight: 600;
          }
          span {
            font-size: 14px;
            margin: 5px 0px;
          }
        }
      }
      .content_info {
        margin-top: 20px;
        .content_info_item {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          margin: 7px 0px;
          span {
            font-size: 15px;
            font-weight: 600;
          }
          p {
            span {
              font-size: 14px;
              font-weight: 500;
              margin: 0px 2px;
            }
          }
        }
      }
      .content_bottom {
        width: 100%;
        margin-top: 20px;
        display: flex;
        align-self: center;
        justify-content: end;
        .active {
          padding: 5px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffe0de;
          border-radius: 6px;
          cursor: pointer;
          span {
            font-size: 13px;
            color: #ff6157;
          }
        }
        .noactive {
          padding: 5px 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #d1f3e2;
          border-radius: 6px;
          cursor: pointer;
          span {
            font-size: 13px;
            color: #30be76;
          }
        }
        button {
          width: 100px;
          height: 36px;
          background: #e9f3f9;
          border-radius: 6px;
          font-weight: 600;
          font-size: 14px;
          color: #272a2c;
          border: none;
          margin-left: 10px;
        }
      }
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter-from,
.fade-leave-from {
  opacity: 0;
}
.drop-in-enter-active,
.drop-in-leave-active {
  transition: all 0.2s ease-out;
}
.drop-in-enter-from,
.drop-in-leave-from {
  opacity: 0;
  transform: translateZ(-100px);
}
</style>