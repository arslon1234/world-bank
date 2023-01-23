<template>
  <div class="Shikoyat">
    <app-modal v-model="dialog" :width="'80%'">
      <div class="content_top">
        <p>{{ $t("NewComplaints") }}</p>
        <i
          style="cursor: pointer"
          class="fa-solid fa-xmark"
          @click="dialog = false"
        ></i>
      </div>
      <Form @submit="SendData" class="content_items">
        <div class="content_item">
          <span>{{ $t("Applicant'sName") }}</span>
          <div class="field_item">
            <Field
              rules="required"
              :modelValue="forms.applicant_full_name"
              v-slot="{ errors }"
              name="Full Name"
            >
              <input type="text" v-model="forms.applicant_full_name" />
              <span v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
        </div>
        <div class="content_item">
          <span>{{ $t("FaceShape(legal/physical)") }}</span>
          <div class="field_item">
            <Field
              rules="required"
              :modelValue="forms.form"
              v-slot="{ errors }"
              name="PersonalType"
            >
              <select v-model="forms.form">
                <option
                  v-for="type_person in store.state.typePerson"
                  :key="type_person.id"
                  :value="type_person.value"
                >
                  {{ type_person.name }}
                </option>
              </select>
              <span v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
        </div>
        <div class="content_item">
          <span>{{ $t("PINFL") }}</span>
          <div class="field_item">
            <Field
              rules="required"
              :modelValue="forms.tin"
              v-slot="{ errors }"
              name="PINFL"
            >
              <input
                type="text"
                v-maska="'##############'"
                v-model="forms.tin"
                maxlength="14"
                required
              />
              <span v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
        </div>
        <div class="content_item">
          <span>{{ $t("ContactNumber") }}</span>
          <div class="field_item">
            <Field
              rules="required"
              :modelValue="forms.phone"
              v-slot="{ errors }"
              name="Phone"
            >
              <input
                type="text"
                v-maska="'+998#########'"
                v-model="forms.phone"
              />
              <span v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
        </div>
        <div class="content_item">
          <span>{{ $t("Location") }}</span>
          <div class="field_item">
            <Field
              rules="required"
              :modelValue="forms.address"
              v-slot="{ errors }"
              name="Address"
            >
              <input type="text" v-model="forms.address" />
              <span v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
        </div>
        <div class="content_item">
          <span>{{ $t("email_location") }}</span>
          <div class="field_item">
            <Field
              rules="email"
              :modelValue="forms.email"
              v-slot="{ errors }"
              name="email"
            >
              <input type="email" v-model="forms.email" required />
              <span v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
        </div>
        <div class="content_item">
          <span>{{ $t("sip_name") }}</span>
          <div class="field_item">
            <Field
              rules="required"
              :modelValue="forms.sip_id"
              v-slot="{ errors }"
              name="sip"
            >
              <select v-model="forms.sip_id">
                <option
                  v-for="sip in store.state.sip"
                  :key="sip.id"
                  :value="sip.id"
                >
                  {{ sip.name }}
                </option>
              </select>
              <span v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
        </div>
        <div class="content_item">
          <span>{{ $t("lotNumber") }}</span>
          <div class="field_item">
            <Field
              rules="required"
              :modelValue="forms.lot_number"
              v-slot="{ errors }"
              name="Lot number"
            >
              <input type="text" v-model="forms.lot_number" />
              <span v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
        </div>
        <div class="content_item">
          <span>{{ $t("couse_of-complaints") }}</span>
          <div class="field_item">
            <Field
              rules="required"
              :modelValue="forms.indication_id"
              v-slot="{ errors }"
              name="Indications"
            >
              <select v-model="forms.indication_id">
                <option
                  v-for="indication in store.state.indications"
                  :key="indication.id"
                  :value="indication.id"
                >
                  {{ indication.name }}
                </option>
              </select>
              <span v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
        </div>
        <div class="content_item">
          <span>{{ $t("data_signing") }}</span>
          <div class="field_item">
            <Field
              rules="required"
              :modelValue="forms.signing_date"
              v-slot="{ errors }"
              name="signing_date"
            >
              <datepicker
                v-model="forms.signing_date"
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
        <div class="content_item">
          <span>{{ $t("essence_of_complaints") }}</span>
          <div class="field_item">
            <Field
              rules="required"
              :modelValue="forms.complaint_text"
              v-slot="{ errors }"
              name="Shikoyatning mohiyati"
            >
              <textarea rows="4" v-model="forms.complaint_text"></textarea>
              <span v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
        </div>
        <div class="content_item">
          <span>{{ $t("attach_file") }}</span>
          <div class="attach_file">
            <div class="download" @click="nextDialog = true">
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
        <div class="content_btn">
          <button type="submit" @click="AddComplaints($event)">
            {{ $t("save") }}
          </button>
        </div>
      </Form>
    </app-modal>
    <app-modal v-model="nextDialog" :width="'380px'">
      <UploadImage
        :HideImgModal="HideImgModal"
        :HideFile_name="HideFile_name"
      ></UploadImage>
    </app-modal>
    <span>{{ $t("NewComplaints") }}</span>
    <div class="tables">
      <div class="table_top">
        <div class="left">
          <input
            type="text"
            @input="changeInput($event)"
            v-model="params.text"
            v-bind:placeholder="$t('Keyword')"
          />
          <input
            type="number"
            @input="changeInput($event)"
            v-model="params.tin"
            v-bind:placeholder="$t('TIN_PINFL')"
          />
          <button
            type="submit"
            
            @click="getComplaints()"
          >
            {{ $t("Search") }}
          </button>
        </div>
        <div class="right" v-show="store.state.user_type === 'minfin'">
          <div class="add" @click="dialog = true">
            <i class="fa-solid fa-plus"></i>
            <span>{{ $t("Add") }}</span>
          </div>
        </div>
      </div>
      <app-table :headers="headers" :body="complaints">
        <template #index="index">
          {{ index }}
        </template>
        <template #body_number="{ item }">
          <router-link
            :to="{ name: 'singleComplaints', params: { id: item.id } }"
            >{{ item.number }}</router-link
          >
        </template>
      </app-table>
      <div class="pagination">
        <v-pagination
          v-model="params.page"
          :pages="params.last_page"
          :range-size="1"
          active-color="#EAF5FF"
          @update:modelValue="getComplaints"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import AppTable from "@/components/ui/AppTable";
import moment from "moment";
import { ref } from "vue";
import { Field, Form } from "vee-validate";
import http from "@/plugins/axios";
import AppModal from "@/components/ui/AppModal";
import store from "@/store";
import VPagination from "@hennge/vue3-pagination";
import UploadImage from "@/components/ui/UploadImage";
import Datepicker from "vue3-datepicker";
import Notifications from "@/service/Notifications/Notifications";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const complaints = ref([]);
const index = ref(0);
const keyword = ref("");
const pinfl = ref("");
let dialog = ref(false);
let nextDialog = ref(false);
const file_name = ref(false);
const params = ref({
  page: 1,
  per_page: 6,
  last_page: null,
  text: "",
  tin: "",
});
const HideImgModal = () => {
  nextDialog.value = false;
};
const HideFile_name = () => {
  file_name.value = true;
};
const changeInput = (event) => {
  if (event.target.value.length === 0) {
    getComplaints();
  }
};
const forms = ref({
  applicant_full_name: "",
  form: "",
  sip_id: "",
  email: "",
  tin: "",
  phone: "",
  address: "",
  indication_id: "",
  complaint_text: "",
  lot_number: "",
  signing_date: new Date(),
});
const headers = ref([
  { title: "t", value: "index" },
  { title: t("ComplaintNumber"), value: "number" },
  { title: t("Applicant'sName"), value: "applicant_full_name" },
  { title: t("FaceShape(legal/physical)"), value: "form" },
  { title: t("TIN_PINFL"), value: "tin" },
  { title: t("ContactNumber"), value: "phone" },
  { title: t("Date_of_Entry"), value: "date" },
]);
const AddComplaints = (event) => {
  event.preventDefault();
  forms.value.signing_date = moment(forms.value.signing_date).format(
    "YYYY:MM:DD"
  );
  http
    .post("/complaints", {
      ...forms.value,
      files: [
        {
          name: store.state.file_name ? store.state.file_name : store.state.img,
          path: store.state.image_path,
        },
      ],
    })
    .then((res) => {
      getComplaints();
      if (res.data.success) {
        dialog.value = false;
        nextDialog.value = false;
        location.reload();
      }
    })
    .catch((err) => {
      Notifications({ text: "nimadir xato" });
    });
};
const getComplaints = () => {
  http
    .get("/complaints", {
      params: {
        per_page: params.value.per_page,
        page: params.value.page,
        text: params.value.text,
        tin: params.value.tin,
      },
    })
    .then((res) => {
      complaints.value = res.data.data;
      complaints.value.forEach((item, index) => {
        item.index =
          res.data.links.current_page * res.data.links.per_page -
          (res.data.links.per_page - 1) +
          index;
      });
      params.value.last_page = res.data.links.last_page;
    });
};
getComplaints();
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.Shikoyat {
  width: 100%;
  height: 100vh;
  background-color: #f3f7f9;
  display: flex;
  align-self: center;
  justify-content: center;
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
          i {
            margin-right: 5px;
            cursor: pointer;
          }
        }
      }
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
  span {
    font-weight: 600;
    font-size: 26px;
    color: #272a2c;
    margin: 20px 0px 20px 15px;
  }
  .tables {
    width: 98%;
    height: 98%;
    background-color: #fff;
    margin-left: 1%;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    overflow: auto;
    margin-bottom: 30px;
    .table_top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .left {
        input,
        select {
          width: 250px;
          height: 36px;
          background: #ffffff;
          border: 1px solid #e1eaed;
          border-radius: 8px;
          outline: none;
          margin: 3px 6px;
          font-weight: 400;
          font-size: 14px;
          color: #8da2ad;
          padding-left: 10px;
        }
        button {
          width: 73px;
          height: 36px;
          background: #1778d0;
          border-radius: 6px;
          margin: 0px 6px;
          font-weight: 600;
          font-size: 14px;
          color: #ffffff;
          border: none;
        }
      }
      .right {
        .add {
          background: #30be76;
          border-radius: 6px;
          padding: 5px 15px;
          cursor: pointer;
          margin: 5px 0px;
          i {
            font-size: 15px;
            color: #fff;
            margin-right: 5px;
          }
          span {
            font-size: 15px;
            color: #ffffff;
            margin-left: 5px;
            letter-spacing: 0.2px;
          }
        }
      }
    }
    table {
      width: 100%;
      margin-top: 10px;
      font-weight: 400;
      font-size: 13px;
      color: #2a2c27;
      text-align: center;
    }
    .pagination {
      width: 98%;
      display: flex;
      align-items: center;
      justify-content: end;
      margin: 10px 0px;
    }
  }
}
@media (max-width: 765px) {
  .Shikoyat span {
    font-size: 20px;
  }
}
</style>