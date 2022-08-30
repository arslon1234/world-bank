<template>
  <div class="send_to_commission">
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
          <button type="submit" @click="getComplaints()">
            {{ $t("Search") }}
          </button>
        </div>
      </div>
      <app-table :headers="headers" :body="complaints">
        <template #index="index">
          {{ index }}
        </template>
        <template #body_number="{ item }">
          <router-link
            :to="{ name: 'send_application', params: { id: item.id } }"
            >{{ item.number }}</router-link
          >
        </template>
        <template #body_for_check_text="{ item }">
          <div class="send_to">
            <span>{{ item.for_check_text }}</span>
            <div
              class="img"
              style="background: #d1f3e2"
              @click="OpenModal(item.id)"
              v-show="
                item.for_check_text === 'Komissiya raisi' ||
                item.for_check_text === 'Председатель комиссии' ||
                item.for_check_text === 'Комиссия раиси'
              "
            >
              <img :src="vector2" alt="" />
            </div>
            <div
              class="img"
              style="background: #d4edfb"
              @click="OpenModal(item.id)"
              v-show="
                item.for_check_text === `Komissiya raisi o'rinbosari` ||
                item.for_check_text === 'Заместитель председателя комиссии' ||
                item.for_check_text === 'Комиссия раиси ўринбосари'
              "
            >
              <img :src="vector" alt="" />
            </div>
          </div>
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
    <app-modal v-model="dialog" :width="'70%'">
      <div class="forward">
        <div class="forward_top">
          <span>{{ $t("forward") }}</span>
          <i @click="dialog = false" class="fa-solid fa-xmark"></i>
        </div>
        <div class="forward_bottom">
          <button @click="ChangeForward_role" style="background-color: #30be76; color: #fff">
            {{ $t("yes") }}
          </button>
          <button @click="dialog = false" style="background-color: #e9f3f9; margin-left: 10px">
            {{ $t("no") }}
          </button>
        </div>
      </div>
    </app-modal>
  </div>
</template>
<script setup>
import AppTable from "@/components/ui/AppTable";
import { ref } from "vue";
import VPagination from "@hennge/vue3-pagination";
import "@hennge/vue3-pagination/dist/vue3-pagination.css";
import vector from "@/assets/Vector.svg";
import vector2 from "@/assets/Vector2.svg";
import http from "@/plugins/axios";
import AppModal from "@/components/ui/AppModal";
import store from "@/store";
import Notifications from "@/service/Notifications/Notifications";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const complaints = ref([]);
const index = ref(0);
const dialog = ref(false);
const keyword = ref("");
const pinfl = ref("");
const ID = ref("")
const params = ref({
  page: 1,
  per_page: 6,
  last_page: null,
  text: "",
  tin: "",
});
const OpenModal =(id)=>{
  dialog.value = true
  ID.value = id
}
const headers = ref([
  { title: "№", value: "index" },
  { title: t("ComplaintNumber"), value: "number" },
  { title: t("Applicant'sName"), value: "applicant_full_name" },
  { title: t("FaceShape(legal/physical)"), value: "form" },
  { title: t("TIN_PINFL"), value: "tin" },
  { title: t("send_to"), value: "for_check_text" },
  { title: t("Submission_date_for_review"), value: "date" },
]);
const getComplaints = () => {
  http
    .get("/complaints/minfin", {
      params: {
        per_page: params.value.per_page,
        page: params.value.page,
        text: params.value.text,
        tin: params.value.tin,
      },
    })
    .then((res) => {
      console.log(res.data, "data");
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
const changeInput = (event) => {
  if (event.target.value.length === 0) {
    getComplaints();
  }
};
const ChangeForward_role=()=>{
  http.post(`/complaints/change-role/${ID.value}`).then(res=>{
    console.log(res)
getComplaints();
  })
  dialog.value = false
}
getComplaints();
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.send_to_commission {
  width: 100%;
  height: 100vh;
  background-color: #f3f7f9;
  display: flex;
  align-self: center;
  justify-content: center;
  flex-direction: column;
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
    .send_to {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span {
        font-size: 13px;
        font-weight: 400;
        width: 100px;
        margin: 0px 5px;
      }
      .img {
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-left: 10px;
      }
    }
    .pagination {
      width: 98%;
      display: flex;
      align-items: center;
      justify-content: end;
      margin: 10px 0px;
    }
  }
  .forward {
    width: 100%;
    display: flex;
    flex-direction: column;
    .forward_top {
      display: flex;
      justify-content: space-between;
      span {
        font-weight: 600;
        font-size: 22px;
        color: #272a2c;
      }
      i {
        font-size: 22px;
        cursor: pointer;
      }
    }
    .forward_bottom {
      width: 100%;
      margin: 10px 0px;
      display: flex;
      align-items: center;
      justify-content: end;
      button {
        height: 36px;
        padding: 2px 20px;
        border: none;
        font-weight: 600;
        font-size: 14px;
        border-radius: 6px;
      }
    }
  }
}
@media (max-width: 765px) {
  .Shikoyat span {
    font-size: 20px;
  }
}
</style>