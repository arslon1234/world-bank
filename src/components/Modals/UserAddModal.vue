<template>
  <transition name="fade">
    <div class="vue-modal" v-show="props.open">
      <transition name="drop-in">
        <div class="vue-modal-inner" v-show="props.open">
          <div class="vue-modal-content">
            <div class="content_top">
              <p>{{$t("AddUser")}}</p>
              <i
                style="cursor: pointer"
                class="fa-solid fa-xmark"
                @click="props.HideModal"
              ></i>
            </div>
            <div class="content_img">
              <div class="img" @click="DeleleImg">
                <img
                  :src="image === null ? photo : image"
                  :class="image === null ? 'image1' : 'image'"
                  alt=""
                />
                <div class="icon">
                  <i class="fa-solid fa-xmark"></i>
                </div>
              </div>
              <div class="text">
                <p>{{$t("addimg")}}</p>
                <span>{{$t("limit_img_size")}}</span>
                <div class="download">
                  <i class="fa-solid fa-plus"></i>
                  <input
                    type="file"
                    ref="file"
                    style="display: none"
                    @change="InputChange($event)"
                  />
                  <button @click="$refs.file.click()" class="btn_download">
                    {{$t("download")}}
                  </button>
                </div>
              </div>
            </div>
            <Form @submit="SendData" class="content_items">
              <div class="content_item">
                <span>{{$t("full_name")}}</span>
                <div class="field_item">
                  <Field
                    rules="required"
                    :modelValue="form.full_name"
                    v-slot="{ errors }"
                    name="Full Name"
                  >
                    <input type="text" v-model="form.full_name" />
                    <span v-if="errors && errors.length">
                      {{ errors[0] }}
                    </span>
                  </Field>
                </div>
              </div>
              <div class="content_item">
                <span>{{$t("Purpose")}}</span>
                <div class="field_item">
                  <Field
                    rules="required"
                    :modelValue="form.appointment"
                    v-slot="{ errors }"
                    name="Appoinment"
                  >
                    <select v-model="form.appointment">
                      <option
                        v-for="appoinment in store.state.appoinments"
                        :key="appoinment.id"
                        :value="appoinment.value"
                      >
                        {{ appoinment.name }}
                      </option>
                    </select>
                    <span v-if="errors && errors.length">
                      {{ errors[0] }}
                    </span>
                  </Field>
                </div>
              </div>
              <div class="content_item2">
                <span>{{$t("Passport_data")}}</span>
                <div class="input">
                  <div class="field_item">
                    <Field
                      rules="required"
                      :modelValue="form.passport_serial"
                      v-slot="{ errors }"
                      name="Passport_serial"
                    >
                      <input
                        type="text"
                        style="text-transform: uppercase"
                        maxlength="2"
                        v-model="form.passport_serial"
                        required
                      />
                      <span v-if="errors && errors.length">
                        {{ errors[0] }}
                      </span>
                    </Field>
                  </div>
                  <div class="field_item">
                    <Field
                      rules="required"
                      :modelValue="form.passport_number"
                      v-slot="{ errors }"
                      name="Passport_number"
                    >
                      <input type="text" v-model="form.passport_number" maxlength="7" required/>
                      <span v-if="errors && errors.length">
                        {{ errors[0] }}
                      </span>
                    </Field>
                  </div>
                </div>
              </div>
              <div class="content_item">
                <span>{{$t("PINFL")}}</span>
                <div class="field_item">
                  <Field
                    rules="required"
                    :modelValue="form.pinfl"
                    v-slot="{ errors }"
                    name="PINFL"
                  >
                    <input type="text" v-model="form.pinfl" maxlength="14" required/>
                    <span v-if="errors && errors.length">
                      {{ errors[0] }}
                    </span>
                  </Field>
                </div>
              </div>
              <div class="content_item">
                <span>{{$t("Inn")}}</span>
                <div class="field_item">
                  <Field
                    rules="required"
                    :modelValue="form.inn"
                    v-slot="{ errors }"
                    name="INN"
                  >
                    <input type="text" v-model="form.inn" maxlength="9" required/>
                    <span v-if="errors && errors.length">
                      {{ errors[0] }}
                    </span>
                  </Field>
                </div>
              </div>
              <div class="content_item">
                <span>{{$t("Place_of_work")}}</span>
                <div class="field_item">
                  <Field
                    rules="required"
                    :modelValue="form.work_place"
                    v-slot="{ errors }"
                    name="Work place"
                  >
                    <input type="text" v-model="form.work_place" />
                    <span v-if="errors && errors.length">
                      {{ errors[0] }}
                    </span>
                  </Field>
                </div>
              </div>
              <div class="content_item">
                <span>{{$t("position_uz")}}</span>
                <div class="field_item">
                  <Field
                    rules="required"
                    :modelValue="form.position_uz"
                    v-slot="{ errors }"
                    name="Position_Uz"
                  >
                    <input type="text" v-model="form.position_uz" />
                    <span v-if="errors && errors.length">
                      {{ errors[0] }}
                    </span>
                  </Field>
                </div>
              </div>
              <div class="content_item">
                <span>{{$t("position_oz")}}</span>
                <div class="field_item">
                  <Field
                    rules="required"
                    :modelValue="form.position_oz"
                    v-slot="{ errors }"
                    name="Positon_Oz"
                  >
                    <input type="text" v-model="form.position_oz" />
                    <span v-if="errors && errors.length">
                      {{ errors[0] }}
                    </span>
                  </Field>
                </div>
              </div>
              <div class="content_item">
                <span>{{$t("position_ru")}}</span>
                <div class="field_item">
                  <Field
                    rules="required"
                    :modelValue="form.position_ru"
                    v-slot="{ errors }"
                    name="Position_Ru"
                  >
                    <input type="text" v-model="form.position_ru" />
                    <span v-if="errors && errors.length">
                      {{ errors[0] }}
                    </span>
                  </Field>
                </div>
              </div>
              <div class="content_item">
                <span>{{$t("ContactNumber")}}</span>
                <div class="field_item">
                  <Field
                    rules="required"
                    :modelValue="form.phone"
                    v-slot="{ errors }"
                    name="Phone"
                  >
                    <input type="text" v-model="form.phone" />
                    <span v-if="errors && errors.length">
                      {{ errors[0] }}
                    </span>
                  </Field>
                </div>
              </div>
              <div class="content_btn" @click="SendData">
                <button type="submit">{{$t("save")}}</button>
              </div>
            </Form>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>
<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import { Field, Form } from "vee-validate";
import photo from "@/assets/Vector (34).svg";
import http from "@/plugins/axios";
import ErrorNotification from '@/service/Notifications/Notifications'
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
  HideModal: {
    type: Function,
  },
  getUser: {
    type: Function,
  },
});
const InputChange = (event) => {
  img.value = event.target.files[0];
  image.value = URL.createObjectURL(event.target.files[0]);
  const formData = new FormData();
  formData.append("file", img.value);
  formData.append("path", "user-photo");
  http.post("/resources/upload", formData).then((res) => {
    form.value.image = res.data.data;
    console.log(form.value.image, "image");
  });
};
const DeleleImg = () => {
  image.value = null;
};
const SendData = () => {
  http
    .post("/user", {
      full_name: form.value.full_name,
      appointment: form.value.appointment,
      passport_serial: form.value.passport_serial,
      passport_number: form.value.passport_number,
      tin: form.value.inn,
      pinfl: form.value.pinfl,
      phone: form.value.phone,
      work_place: form.value.work_place,
      position_ru: form.value.position_ru,
      position_uz: form.value.position_uz,
      position_oz: form.value.position_oz,
      image: form.value.image,
    })
    .then(() => {
      props.getUser();
    }).catch(err=>{
      console.log(err)
      ErrorNotification({text: "nimadir xato"})
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
            margin-top: 5px;
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
          .field_item {
            width: 100%;
            display: flex;
            flex-direction: column;
            span {
              color: red;
              font-size: 12px;
              margin-top: 5px;
              font-weight: 500;
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
            .field_item {
              width: 100%;
              display: flex;
              flex-direction: column;
              span {
                color: red;
                font-size: 12px;
                margin-top: 5px;
                font-weight: 500;
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