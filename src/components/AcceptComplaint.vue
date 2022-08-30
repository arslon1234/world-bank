<template>
        <div class="accept">
      <div class="accept_top">
        <span>{{ $t("accept_complaint") }}</span>
        <i @click="accept_dialog = false" class="fa-solid fa-xmark"></i>
      </div>
      <Form class="accept_items">
        <div class="accept_item">
          <span>{{ $t("meeting_date") }}</span>
          <div class="field_item">
            <Field
              rules="required"
              :modelValue="signing_date"
              v-slot="{ errors }"
              name="meeting_date"
            >
              <datepicker
                v-model="meeting_date"
                style="
                  width: 100%;
                  height: 36px;
                  outline: none;
                  border: 1px solid #e1eaed;
                  border-radius: 8px;
                  padding-left: 10px;
                "
              />
              <span v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
        </div>
        <div class="accept_item">
          <span>{{ $t("meeting_time") }}</span>
          <div class="field_item">
            <Field
              rules="required"
              :modelValue="signing_date"
              v-slot="{ errors }"
              name="meeting_date"
            >
              <input
                type="text"
                v-model="meeting_time"
                @input="changeTime($event)"
                v-maska="'##:##:##'"
              />
              <span v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
        </div>
        <div class="accept_item2">
          <span>{{ $t("online_offline") }}</span>
          <div class="input">
            <div class="field_item">
              <Field
                rules="required"
                :modelValue="is_online"
                v-slot="{ errors }"
                name="Passport_serial"
              >
                <input
                  type="radio"
                  v-model="is_online"
                  value="true"
                  id="html"
                  name="fav_language"
                />
                <label for="html">{{ $t("online") }}</label>
                <input
                  type="radio"
                  v-model="is_online"
                  value="false"
                  id="css"
                  name="fav_language"
                  style="margin-left: 30px"
                />
                <label for="css">{{ $t("offline") }}</label>
                <span v-if="errors && errors.length">
                  {{ errors[0] }}
                </span>
              </Field>
            </div>
            <div class="field_item">
              <Field
                rules="required"
                :modelValue="offline"
                v-slot="{ errors }"
                name="Passport_number"
              >
                <span v-if="errors && errors.length">
                  {{ errors[0] }}
                </span>
              </Field>
            </div>
          </div>
        </div>
        <div class="accept_item mt-4">
          <span>{{ $t("meeting_place") }}</span>
          <div class="field_item">
            <Field
              rules="required"
              :modelValue="meeting_address"
              v-slot="{ errors }"
              name="meeting_date"
            >
              <input type="text" v-model="meeting_address" />
              <span v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
        </div>
        <div class="accept_item2">
          <span>{{ $t("send") }}</span>
          <div class="input">
            <div class="field_item">
              <Field
                rules="required"
                :modelValue="for_check"
                v-slot="{ errors }"
                name="Passport_serial"
              >
                <input
                  type="radio"
                  v-model="for_check"
                  value="commission_chairman"
                  id="html"
                  name="fav_languages"
                />
                <label for="html">{{ $t("Chairman_of_commission") }}</label>
                <input
                  type="radio"
                  v-model="for_check"
                  value="deputy_commission_chairman"
                  id="css"
                  name="fav_languages"
                  style="margin-left: 30px"
                />
                <label for="css">{{
                  $t("deputy_chairman_of_comission")
                }}</label>
                <span v-if="errors && errors.length">
                  {{ errors[0] }}
                </span>
              </Field>
            </div>
            <div class="field_item">
              <Field
                rules="required"
                :modelValue="offline"
                v-slot="{ errors }"
                name="Passport_number"
              >
                <span v-if="errors && errors.length">
                  {{ errors[0] }}
                </span>
              </Field>
            </div>
          </div>
        </div>
        <div class="text">
          <textarea
            v-model="comment"
            rows="8"
            v-bind:placeholder="$t('comments')"
          ></textarea>
        </div>
        <div class="accept_center">
          <span>{{ $t("attach_file") }}</span>
          <div class="attach_file">
            <div class="download" @click="Open_next_dialog()">
              <i class="fa-solid fa-plus"></i>
              <span class="btn_download">
                {{ $t("download") }}
              </span>
            </div>
            <div class="file_name" v-show="file_name">
              <span>{{
                store.state.file_name ? store.state.file_name : store.state.img
              }}</span>
              <i @click="file_name = false" class="fa-solid fa-xmark"></i>
            </div>
          </div>
        </div>
        <div class="accept_bottom">
          <button type="submit" @click="AcceptComplaints($event)">
            {{ $t("save") }}
          </button>
        </div>
      </Form>
    </div>
</template>

<script setup>
import { Field, Form } from "vee-validate";
import { ref } from "vue";
import Datepicker from "vue3-datepicker";
import store from "@/store";
const file_name = ref(false);
const props = defineProps({
       for_check:{
              type: String
       },
       meeting_address:{
              type: String
       },
       meeting_time:{
              type: String
       },
       is_online:{
              type: null
       },
       meeting_date:{
              type: String
       },
       comment:{
              type: String
       },
       Open_next_dialog:{
              type: Function,
              default: false
       },
       accept_dialog:{
              type: Boolean,
              default: false
       },
       AcceptComplaints:{
              type: Function,
       },
})
</script>

<style scoped lang="scss">
.accept {
  width: 100%;
  display: flex;
  flex-direction: column;
  .accept_top {
    width: 100%;
    display: flex;
    justify-content: space-between;
    i {
      font-size: 22px;
      cursor: pointer;
    }
    span {
      font-family: "Roboto", sans-serif;
      color: #272a2c;
      font-size: 20px;
      font-weight: 600;
      margin-top: 10px;
    }
  }
  .accept_items {
    width: 100%;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    .accept_item {
      width: 100%;
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 3fr;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin: 10px 0px;
      @media (max-width: 668px) {
        grid-template-columns: 1fr;
      }
      span {
        font-weight: 500;
        font-size: 15px;
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
          height: 40px;
          background: #ffffff;
          border: 1px solid #e1eaed;
          border-radius: 8px;
          outline: none;
          padding-left: 10px;
          font-size: 14px;
        }
        textarea {
          width: 100%;
          background: #ffffff;
          border: 1px solid #e1eaed;
          border-radius: 8px;
          outline: none;
          padding: 10px;
          font-size: 14px;
        }
      }
    }
    .accept_item2 {
      width: 100%;
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 3fr;
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
        grid-template-columns: 3fr 1fr;
        gap: 5px;
        .field_item {
          width: 100%;
          display: flex;
          align-items: center;
          span {
            color: red;
            font-size: 12px;
            margin-top: 5px;
            font-weight: 500;
          }
          input {
            width: 13px;
            height: 13px;
            background: #ffffff;
            outline: none;
          }
          label {
            font-family: "Roboto", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            color: #000000;
            margin-left: 10px;
          }
        }
      }
    }
    .text {
      width: 100%;
      margin-top: 25px;
      textarea {
        width: 100%;
        background: #ffffff;
        border: 1px solid #e1eaed;
        border-radius: 8px;
        outline: none;
        padding: 15px;
        font-size: 14px;
      }
    }
    .accept_center {
      width: 100%;
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 3fr;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      margin: 15px 0px;
      span {
        font-size: 14px;
        font-weight: 500;
      }
      .attach_file {
        width: 100%;
        display: flex;
        align-items: center;
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
            cursor: pointer;
          }
        }
        .file_name {
          width: 100%;
          border-radius: 6px;
          box-shadow: 3px 4px 4px rgba(0, 0, 0, 0.04);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px;
          i {
            margin-right: 5px;
            cursor: pointer;
          }
        }
      }
      @media (max-width: 668px) {
        grid-template-columns: 1fr;
      }
    }
    .accept_bottom {
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
</style>