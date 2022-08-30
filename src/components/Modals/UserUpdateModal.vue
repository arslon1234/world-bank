<template>
  <transition name="fade">
    <div class="vue-modal" v-show="props.open">
      <transition name="drop-in">
        <div class="vue-modal-inner" v-show="props.open">
          <div class="vue-modal-content">
            <div v-for="user in props.users" :key="user.id">
              <div v-if="props.ID === user.id">
                <div class="content_top">
                  <p>{{$t("AddUser")}}</p>
                  <i
                    style="cursor: pointer"
                    class="fa-solid fa-xmark"
                    @click="props.HideEditUser"
                  ></i>
                </div>
                <div class="content_img">
                  <div class="img" @click="DeleleImg">
                    <img
                      :src="user.path === null ? MIT : user.path"
                      class="image"
                      alt=""
                    />
                    <div class="icon">
                      <i class="fa-solid fa-xmark"></i>
                    </div>
                  </div>
                  <div class="text">
                    <p>{{$t("addimg")}}</p>
                    <span>{{$t("limit_img_size")}}</span>
                    <div class="download" style="opacity: 0.5; margin-top: 7px">
                      <i class="fa-solid fa-plus"></i>
                      <input
                        type="file"
                        ref="file"
                        style="display: none"
                        @change="InputChange($event)"
                      />
                      <button @click="$refs.file.click()"  class="btn_download">
                         {{$t("download")}}
                      </button>
                    </div>
                  </div>
                </div>
                <div class="content_items">
                  <div class="content_item">
                    <span>{{$t("full_name")}}</span>
                    <input type="text" v-model="user.full_name" />
                  </div>
                  <div class="content_item">
                    <span>{{$t("Purpose")}}</span>
                    <select v-model="user.appointment">
                      <option disabled selected hidden value="">
                        Председатель комиссии
                      </option>
                      <option
                        v-for="appoinment in store.state.appoinments"
                        :key="appoinment.id"
                        :value="appoinment.value"
                      >
                        {{ appoinment.name }}
                      </option>
                    </select>
                  </div>
                  <div class="content_item2">
                    <span>{{$t("Passport_data")}}</span>
                    <div class="input">
                      <input
                        type="text"
                        style="text-transform: uppercase"
                        maxlength="2"
                        v-model="user.passport_serial"
                      />
                      <input type="text" v-model="user.passport_number" />
                    </div>
                  </div>
                  <div class="content_item">
                    <span>{{$t("PINFL")}}</span>
                    <input type="text" v-model="user.pinfl" />
                  </div>
                  <div class="content_item">
                    <span>{{$t("Inn")}}</span>
                    <input type="text" v-model="user.tin" />
                  </div>
                  <div class="content_item">
                    <span>{{$t("Place_of_work")}}</span>
                    <input type="text" v-model="user.work_place" />
                  </div>
                  <div class="content_item">
                    <span>{{$t("position_uz")}}</span>
                    <input type="text" v-model="user.position_uz" />
                  </div>
                  <div class="content_item">
                    <span>{{$t("position_oz")}}</span>
                    <input type="text" v-model="user.position_oz" />
                  </div>
                  <div class="content_item">
                    <span>{{$t("position_ru")}}</span>
                    <input type="text" v-model="user.position_ru" />
                  </div>
                  <div class="content_item">
                    <span>{{$t("ContactNumber")}}</span>
                    <input type="text" v-model="user.phone" />
                  </div>
                  <div class="content_btn" @click="EditUser(user)">
                    <button>{{$t("save")}}</button>
                  </div>
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
import MIT from "@/assets/MIT.jpg";
import store from "@/store";
const image = ref(null);
const img = ref(null);
const form = ref({
  full_name: "",
  appointment: "",
  passport_serial: "",
  passport_number: "",
  inn: "",
  pinfl: "",
  phone: "",
  work_place: "",
  position_ru: "",
  position_uz: "",
  position_oz: "",
  image: "",
});
const props = defineProps({
  open: {
    type: Boolean,
    required: true,
  },
  HideEditUser: {
    type: Function,
  },
  getUser: {
    type: Function,
  },
  ID: {
    type: String,
  },
  users: {
    type: Array,
  },
});
const DeleleImg = () => {
  image.value = null;
};
const EditUser = (user) => {
  http
    .put(`/user/${user.id}`, {
      full_name: user.full_name,
      appointment: user.appointment,
      passport_serial: user.passport_serial,
      passport_number: user.passport_number,
      tin: user.tin,
      pinfl: user.pinfl,
      phone: user.phone,
      work_place: user.work_place,
      position_ru: user.position_ru,
      position_uz: user.position_uz,
      position_oz: user.position_oz,
    })
    .then(() => {
      props.getUser();
      props.HideEditUser()
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
    max-width: 690px;
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
        p {
          font-weight: 600;
          font-size: 20px;
          color: #272a2c;
        }
      }
      .content_img {
        width: 100%;
        margin-top: 10px;
        display: flex;
        align-items: center;
        .img {
          position: relative;
          width: 120px;
          height: 120px;
          border: 1px solid #e1eaed;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          .icon {
            position: absolute;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-color: rgb(134, 10, 10);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 22;
            opacity: 0;
            transition: all 0.3s linear;
            i {
              font-size: 11px;
              color: #fff;
            }
          }
          .image {
            object-fit: cover;
            width: 100%;
            height: 100%;
            border-radius: 6px;
          }
          .image1 {
            object-fit: cover;
            width: 50%;
            height: 50%;
            border-radius: 6px;
          }
        }
        :hover .icon {
          position: absolute;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: rgb(134, 10, 10);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 22;
          opacity: 1;
          transition: all 0.3s linear;
          i {
            font-size: 11px;
            color: #fff;
          }
        }
        .text {
          margin-left: 30px;
          display: flex;
          flex-direction: column;
          p {
            font-size: 14px;
            font-weight: 500;
            color: #272a2c;
          }
          span {
            font-weight: 400;
            font-size: 12px;
            color: #272a2c;
          }
          .download {
            display: flex;
            align-items: center;
            width: 123px;
            height: 36px;
            background: #30be76;
            border-radius: 6px;
            justify-content: center;
            i {
              color: #fff;
              font-size: 12px;
              margin-right: 2px;
            }
            .btn_download {
              border: none;
              background-color: transparent;
              font-weight: 600;
              font-size: 14px;
              color: #ffffff;
              margin-left: 5px;
            }
          }
        }
      }
      .content_items {
        width: 100%;
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        .content_item {
          width: 100%;
          display: grid;
          gap: 10px;
          grid-template-columns: 1fr 2fr;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin: 10px 0px;
          @media (max-width: 668px) {
            grid-template-columns: 1fr;
          }
          span {
            font-weight: 600;
            font-size: 14px;
            color: #272a2c;
          }
          input {
            width: 100%;
            height: 36px;
            background: #ffffff;
            border: 1px solid #e1eaed;
            border-radius: 8px;
            outline: none;
            padding-left: 10px;
            font-size: 14px;
          }
          select {
            width: 100%;
            height: 36px;
            background: #ffffff;
            border: 1px solid #e1eaed;
            border-radius: 8px;
            outline: none;
            padding-left: 10px;
            font-size: 14px;
          }
        }
        .content_item2 {
          width: 100%;
          display: grid;
          gap: 10px;
          grid-template-columns: 1fr 2fr;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          margin: 10px 0px;
          @media (max-width: 668px) {
            grid-template-columns: 1fr;
          }
          span {
            font-weight: 600;
            font-size: 14px;
            color: #272a2c;
          }
          .input {
            width: 100%;
            display: flex;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 5px;
            /* justify-content: space-between;
            align-items: center; */
            input {
              width: 100%;
              height: 36px;
              background: #ffffff;
              border: 1px solid #e1eaed;
              border-radius: 8px;
              outline: none;
              padding-left: 10px;
              font-size: 14px;
            }
          }
        }
        .content_btn {
          width: 100%;
          margin: 10px 0px;
          display: flex;
          justify-content: end;
          button {
            width: 111px;
            height: 36px;
            background: #1778d0;
            border-radius: 6px;
            color: #fff;
            border: none;
          }
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
  transition: all 0.3s ease-out;
}
.drop-in-enter-from,
.drop-in-leave-from {
  opacity: 0;
  transform: translateY(-100px);
}
</style>