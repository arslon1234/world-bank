<template>
  <div class="singleComplaints">
    <router-link to="/sendApplication" class="back">
      <i class="fa-solid fa-left-long"></i>
      <span>{{ $t("back") }}</span>
    </router-link>
    <div class="items">
      <p class="complaint">
        <span>{{ $t("complaint") }} № {{ singleComplaints.number }}</span>
      </p>
      <div class="items">
        <div class="item">
          <div class="left">
            <span>{{ $t("Applicant'sName") }}:</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.applicant_full_name }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{ $t("TIN_PINFL") }}:</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.tin }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{ $t("FaceShape(legal/physical)") }}:</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.form }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{ $t("ContactNumber") }}:</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.phone }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{ $t("Location") }}:</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.address }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{ $t("email_location") }}:</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.email }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{ $t("sip_name") }}:</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.sip }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{ $t("lotNumber") }}:</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.lot_number }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{ $t("couse_of-complaints") }}:</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.indication }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{ $t("data_signing") }}:</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.signing_date }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{ $t("meeting_date_time") }}</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.meeting_date }}, {{singleComplaints.meeting_time}}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{ $t("meeting_place") }}</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.meeting_address }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{ $t("send_to_person") }}</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.for_check_text }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{ $t("online_offline") }}</span>
          </div>
          <div class="right">
            <span>{{ singleComplaints.is_online === true ? 'online': 'ofline' }}</span>
          </div>
        </div>
      </div>
      <div class="content_text">
        <div class="text">
          <span class="essence">{{ $t("essence_of_complaints") }}</span>
          <span>{{ singleComplaints.complaint_text }}</span>
        </div>
        <div
          class="file_name"
          v-for="item in singleComplaints.files"
          :key="item.id"
        >
          <div class="file_text">
            <span>{{ $t("accepted_file") }}:</span>
          </div>
          <a class="name" target="_blank" :href="item.url">
            <span>{{ item.name }}</span>
            <i class="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
      <div
        class="content_text"
        style="background-color: #ffeaea"
        v-show="singleComplaints.status === 12"
        v-for="item in singleComplaints.comments"
        :key="item.id"
      >
        <div class="text">
          <p class="essence">
            <span class="essence">{{ $t("Working_body") }}</span>
            -
            <span class="essence" style="word-spacing: 0.5px">{{
              item.user_full_name
            }}</span>
          </p>
           <span class="essence">{{$t("comment")}}</span>
          <span>{{ item.comment }}</span>
        </div>
        <div class="file_name" v-for="file in item.files" :key="file.id">
          <div class="file_text">
            <span>{{ $t("accepted_file") }}:</span>
          </div>
          <a class="name" target="_blank" :href="file.url">
            <span>{{ file.name }}</span>
            <i class="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
      <div
        class="content_text"
        style="background-color: #e6f6ee"
        v-show="singleComplaints.status === 2"
        v-for="item in singleComplaints.comments"
        :key="item.id"
      >
        <div class="text">
          <p class="essence">
            <span class="essence">{{ $t("Working_body") }}</span>
            -
            <span class="essence" style="word-spacing: 0.5px">{{
              item.user_full_name
            }}</span>
          </p>
          <span class="essence">{{$t("comment")}}</span>
          <span>{{ item.comment }}</span>
        </div>
        <div class="file_name" v-for="file in item.files" :key="file.id">
          <div class="file_text">
            <span>{{ $t("accepted_file") }}:</span>
          </div>
          <a class="name" target="_blank" :href="file.url">
            <span>{{ file.name }}</span>
            <i class="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
      <div class="actions" v-show="singleComplaints.status === 2">
        <button
          style="background-color: #ff6157; margin-right: 10px"
          @click="dialog = true"
        >
          {{ $t("denied") }}
        </button>
        <button style="background-color: #30be76" @click="accept_dialog = true">
          {{ $t("accepted") }}
        </button>
      </div>
    </div>
  </div>
  <app-modal v-model="dialog" :width="'90%'">
    <div class="reject">
      <div class="reject_top">
        <span>{{ $t("cause_of_reject") }}</span>
        <i @click="dialog = false" class="fa-solid fa-xmark"></i>
      </div>
      <div class="text">
        <textarea
          v-model="comment"
          rows="8"
          v-bind:placeholder="$t('comments')"
        ></textarea>
      </div>
      <div class="reject_center">
        <span>{{ $t("attach_file") }}</span>
        <div class="attach_file">
          <div class="download" @click="next_dialog = true">
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
      <div class="reject_bottom">
        <button type="submit" @click="SaveReject($event)">
          {{ $t("save") }}
        </button>
      </div>
    </div>
  </app-modal>
  <app-modal v-model="accept_dialog" :width="'85%'">
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
              :modelValue="forms.signing_date"
              v-slot="{ errors }"
              name="meeting_date"
            >
              <datepicker
                v-model="forms.meeting_date"
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
              :modelValue="forms.signing_date"
              v-slot="{ errors }"
              name="meeting_date"
            >
              <input
                type="text"
                v-model="forms.meeting_time"
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
                :modelValue="forms.is_online"
                v-slot="{ errors }"
                name="Passport_serial"
              >
                <input
                  type="radio"
                  v-model="forms.is_online"
                  value="true"
                  id="html"
                  name="fav_language"
                />
                <label for="html">{{ $t("online") }}</label>
                <input
                  type="radio"
                  v-model="forms.is_online"
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
                :modelValue="forms.offline"
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
              :modelValue="forms.meeting_address"
              v-slot="{ errors }"
              name="meeting_date"
            >
              <input type="text" v-model="forms.meeting_address" />
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
                :modelValue="forms.for_check"
                v-slot="{ errors }"
                name="Passport_serial"
              >
                <input
                  type="radio"
                  v-model="forms.for_check"
                  value="commission_chairman"
                  id="html"
                  name="fav_languages"
                />
                <label for="html">{{ $t("Chairman_of_commission") }}</label>
                <input
                  type="radio"
                  v-model="forms.for_check"
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
                :modelValue="forms.offline"
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
            v-model="forms.comment"
            rows="8"
            v-bind:placeholder="$t('comments')"
          ></textarea>
        </div>
        <div class="accept_center">
          <span>{{ $t("attach_file") }}</span>
          <div class="attach_file">
            <div class="download" @click="next_dialog = true">
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
          <button type="submit" @click="AcceptComplaint($event)">
            {{ $t("save") }}
          </button>
        </div>
      </Form>
    </div>
  </app-modal>
  <app-modal v-model="next_dialog" :width="'380px'">
    <UploadImage
      :HideImgModal="HideImgModal"
      :HideFile_name="HideFile_name"
    ></UploadImage>
  </app-modal>
</template>
<script setup>
import http from "@/plugins/axios";
import { ref } from "vue";
import store from "@/store";
import moment from "moment";
import Datepicker from "vue3-datepicker";
import Notifications from "@/service/Notifications/Notifications";
import UploadImage from "@/components/ui/UploadImage";
import AppModal from "@/components/ui/AppModal";
import { Field, Form } from "vee-validate";
import AcceptComplaint from "@/components/AcceptComplaint.vue";
const url = window.location.href.split("/");
const singleComplaints = ref({});
const dialog = ref(false);
const file_name = ref(false);
const next_dialog = ref(false);
const accept_dialog = ref(false);
const forms = ref({
  for_check: "",
  is_online: null,
  meeting_address: "",
  meeting_time: "",
  meeting_date: new Date(),
  comment: "",
});
const Reject = ref({});
const reject = ref({});
const comment = ref("");
const HideImgModal = () => {
  next_dialog.value = false;
};
const Open_next_dialog =()=>{
  next_dialog.value = true
}
const HideFile_name = () => {
  file_name.value = true;
};
const AcceptComplaints = (event) => {
  // event.preventDefault();
  forms.value.meeting_date = moment(forms.value.meeting_date).format(
    "YYYY-MM-DD"
  );
  http
    .post(`/complaints/accept-minfin/${url[4]}`, {
      ...forms.value,
      files: [
        {
          name: store.state.file_name ? store.state.file_name : store.state.img,
          path: store.state.image_path,
        },
      ],
    })
    .then((res) => {
      if (res.data.success) {
        accept_dialog.value = false;
        location.reload();
      }
    });
};
function changeTime(event) {
  let a, b, c;
  const arr = event.target.value.split(":");
  let hour = arr[0];
  let minute = arr[1];
  let second = arr[2];
  // if(hour && +hour > 23) hour = 23
  // if(minute && +minute > 59) minute = 59
  // if(second && +second > 59) second = 59
  if (hour && parseInt(hour) > 23) hour = 23;
  if (minute && parseInt(minute) > 59) minute = 59;
  if (second && parseInt(second) > 59) second = 59;
  hour ? (a = hour) : (a = "");
  minute ? (b = minute) : (b = "");
  second ? (c = second) : (c = "");
  const time = `${a}:${b}:${c}`;
  forms.value.meeting_time = time;
}
const SaveReject = (event) => {
  event.preventDefault();
  http
    .post(`/complaints/minfin/${url[4]}`, {
      comment: comment.value,
      files: [
        {
          name: store.state.file_name ? store.state.file_name : store.state.img,
          path: store.state.image_path,
        },
      ],
    })
    .then((res) => {
      (Reject.value = res.data),
        (reject.value = res.data.data),
        getSingleComplaints();
    })
    .catch((err) => {
      Notifications({ text: "nimadir xato" });
    });
  dialog.value = false;
};
const getSingleComplaints = () => {
  http.get(`/complaints/view/${url[4]}`).then((res) => {
    singleComplaints.value = res.data.data;
  });
};
getSingleComplaints();
</script>
<style scoped lang="scss">
.singleComplaints {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f3f7f9;
  .back {
    width: 97px;
    height: 36px;
    padding: 8px;
    background: #1778d0;
    border-radius: 6px;
    margin: 15px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    i {
      margin: 0px 2px;
      display: block;
    }
    span {
      font-weight: 600;
      font-size: 14px;
      margin: 0px 3px;
    }
  }
  .items {
    width: 98%;
    margin-left: 1%;
    background-color: #fff;
    padding: 15px;
    border-radius: 7px;
    .complaint {
      font-family: "Roboto", sans-serif;
      font-style: normal;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      color: #272a2c;
    }
    .items {
      width: 100%;
      display: flex;
      flex-direction: column;
      .item {
        width: 65%;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        justify-content: space-between;
        .left {
          width: 250px;
          margin: 5px 0px;
          span {
            font-weight: 500;
            font-size: 15px;
            color: #272a39;
          }
        }
        .right {
          width: 370px;
          margin: 5px 0px;
          span {
            font-weight: 400;
            font-size: 14px;
            color: #272a2c;
          }
        }
      }
    }
    .content_text {
      width: 100%;
      padding: 25px 15px;
      background-color: #f5fafd;
      border-radius: 8px;
      display: flex;
      flex-direction: column;
      margin: 20px 0px;
      .text {
        display: flex;
        flex-direction: column;
        .essence {
          font-weight: 600;
          font-size: 16px;
          color: #272a39;
        }
        span {
          font-weight: 400;
          font-size: 14px;
          color: #272a2c;
          margin-top: 10px;
        }
      }
      .file_name {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 20px;
        .file_text {
          span {
            font-weight: 500;
            font-size: 15px;
            color: #272a39;
          }
        }
        .name {
          margin-left: 20px;
          padding: 4px 10px;
          background-color: #dfeef7;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          cursor: pointer;
          text-decoration: none;
          span {
            font-size: 14px;
            margin-right: 3px;
            color: #000;
          }
          i {
            color: #87d6b6;
            font-size: 12px;
            margin-left: 3px;
          }
        }
      }
    }
    .actions {
      width: 100%;
      margin-top: 20px;
      display: flex;
      align-items: center;
      justify-content: end;
      button {
        height: 36px;
        border: none;
        border-radius: 6px;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        padding: 0px 15px;
      }
    }
  }
}
.reject {
  width: 100%;
  display: flex;
  flex-direction: column;
  .reject_top {
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
  .reject_center {
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
  .reject_bottom {
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