<template>
  <div class="accept_protocol">
    <div class="accept_protocol_top">
      <router-link to="/accepted" class="back">
        <i class="fa-solid fa-left-long"></i>
        <span>{{ $t("back") }}</span>
      </router-link>
      <p class="complaint">
        <span>{{ $t("complaint") }} № {{ accept_protocol.number }}</span>
      </p>
    </div>
    <div class="accept_data">
      <div class="data_item">
        <div class="item_top">
          <div class="top_item">
            <h3 style="margin: 8px 0px">{{ $t("approve") }}</h3>
            <span style="margin: 8px 0px"
              >Давлат харидлари соҳасидаги шикоятларни кўриб чиқиш бўйича
              комиссия раиси</span
            >
            <p style="margin: 8px 0px">
              <span style="color: #30be76; margin-right: 5px"
                >подпано с помощью ЭЦП</span
              >Азизов Азиз Азизович
            </p>
          </div>
        </div>
        <p class="commission_title">{{ $t("commission_title") }}</p>
        <div class="direction">
          <div class="direct_item">
            <p>город Ташкент:</p>
            <span style="margin-left: 10px">{{accept_protocol.created_at}}</span>
          </div>
          <div class="direct_item">
            <p>город Ташкент:</p>
            <span style="margin-left: 10px">{{accept_protocol.created_at}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import http from "@/plugins/axios";
const url = window.location.href.split("/");
const accept_protocol = ref({});
const getAccept_Protocol = () => {
  http.get(`/complaints/view/${url[4]}`).then((res) => {
    accept_protocol.value = res.data.data;
  });
};
getAccept_Protocol();
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.accept_protocol {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #f3f7f9;
  .accept_protocol_top {
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
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
  .complaint {
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-style: normal;
    font-weight: 600;
    font-size: 22px;
    color: #272a2c;
  }
}
.accept_data {
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #272a2c;
  .data_item {
    width: 98%;
    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    margin-bottom: 30px;
    border-radius: 8px;
    padding: 20px;
    .item_top {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: end;
      .top_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 10px 10px 52px 0px;
        color: #272a2c;
        h3 {
          font-weight: 600;
          font-size: 22px;
        }
        span {
          font-weight: 500;
          font-size: 18px;
        }
      }
    }
    .commission_title {
    font-weight: 500;
    font-size: 18px;
  }
  .direction{
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .direct_item{
      display: flex;
    }
  }
  }
  
}
</style>