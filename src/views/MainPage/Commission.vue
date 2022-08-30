<template>
  <div class="commission">
    <UserAddModal
      :open="isOpen"
      :HideModal="OpenModal"
      :getUser="getUser"
    ></UserAddModal>
    <UserUpdateModal :open="edituser" :getUser="getUser" :ID="ID" :users="users" :HideEditUser="HideEditUser"></UserUpdateModal>
    <UserChangeStatus
      :open="changeStatus"
      :ID="ID"
      :users="users"
      :HideModalStatus="HideModalStatus"
      :getUser="getUser"
    ></UserChangeStatus>
    <div class="head">
      <span>{{$t("CompositionCommission")}}</span>
      <div class="add" @click="OpenModal">
        <i class="fa-solid fa-plus"></i>
        <span>{{$t("Add")}}</span>
      </div>
    </div>
    <div class="commission_item" v-for="user in users" :key="user.id">
      <div class="first">
        <div class="img">
          <img :src="user.path === null ? MIT : user.path" alt="" />
        </div>
        <div class="text">
          <p>{{ user.full_name }}</p>
          <span>Член комиссии</span>
          <p>{{ user.phone }}</p>
        </div>
      </div>
      <div class="second">
        <div class="info">
       <div class="items">
         <div class="item">
          <div class="left">
            <span>{{$t("Inn")}}</span>
          </div>
          <div class="right">
            <span>{{ user.username }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
             <span>{{$t("PINFL")}}</span>
          </div>
          <div class="right">
             <span>{{ user.pinfl }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{$t("Place_of_work")}}</span>
          </div>
          <div class="right">
           <span>{{ user.work_place }}</span>
          </div>
        </div>
        <div class="item">
          <div class="left">
            <span>{{$t("position")}}</span>
          </div>
          <div class="right">
            <span>{{ user.position }}</span>
          </div>
        </div>
       </div>
        </div>
        <div class="actions">
          <div class="edit" @click="EditUser(user.id)">
            <img :src="edit" alt="" />
            <span>{{$t("edit")}}</span>
          </div>
          <div
            v-if="user.status === 10"
            class="active"
            @click="changeModalStatus(user.id)"
          >
            <span style="color: #ff6157">{{$t("Deactivate")}}</span>
          </div>
          <div v-else @click="changeModalStatus(user.id)" class="noactive">
            <span style="color: #30be76">{{$t("Activate")}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import edit from "@/assets/Vector (29).svg";
import MIT from "@/assets/MIT.jpg";
import http from "@/plugins/axios";
import UserAddModal from "@/components/Modals/UserAddModal";
import UserChangeStatus from "@/components/Modals/UserChangeStatus";
import UserUpdateModal from '@/components/Modals/UserUpdateModal'
import { ref } from "vue";
const users = ref([]);
const isOpen = ref(false);
const changeStatus = ref(false);
const edituser = ref(false)
const ID = ref("");
const OpenModal = () => {
  isOpen.value = !isOpen.value;
};
const changeModalStatus = (id) => {
  changeStatus.value = !changeStatus.value;
  ID.value = id;
};
const HideModalStatus = () => {
  changeStatus.value = !changeStatus.value;
};
const EditUser=(id)=>{
  edituser.value = !edituser.value
  ID.value = id
}
const HideEditUser =()=>{
  edituser.value = !edituser.value
}
const getUser = () => {
  http.get("/user").then((res) => {
    users.value = res.data.data;
  });
};
getUser();
</script>

<style scoped lang='scss'>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
  font-style: normal;
}
.commission {
  width: 100%;
  background-color: #f3f7f9;
  .head {
    width: 98%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0px;
    span {
      font-weight: 600;
      font-size: 25px;
      color: #272a2c;
      margin-left: 1%;
    }
    .add {
      background: #30be76;
      border-radius: 6px;
      padding: 5px 10px;
      cursor: pointer;
      margin-left: 1%;
      i {
        font-size: 15px;
        color: #fff;
        margin-right: 5px;
      }
      span {
        font-size: 15px;
        color: #ffffff;
        margin-left: 5px;
      }
    }
  }
  .commission_item {
    width: 98%;
    background-color: #fff;
    margin-left: 1%;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px;
    margin-top: 10px;
    .first {
      display: flex;
      align-items: center;
      .img {
        width: 120px;
        height: 120px;
        border: 1px solid #e1eaed;
        border-radius: 8px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 8px;
        }
      }
      .text {
        margin-left: 10px;
        p {
          font-size: 20px;
          color: #272a2c;
          font-weight: 500;
        }
        span {
          font-weight: 400;
          font-size: 14px;
          text-transform: uppercase;
          color: #272a2c;
        }
      }
    }
    .second {
      width: 80%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      margin: 10px;
      .info {
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        background-color: #f5fafd;
        padding: 20px 10px;
        border-radius: 8px;
        margin: 10px 0px;
        .items{
          width: 100%;
          display: flex;
          flex-direction: column;
          .item{
          width: 50%;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          margin: 4px 0px;
          @media (max-width: 668px) {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: start;
          }
           .left {
          display: flex;
          flex-direction: column;
          span {
            font-weight: 500;
            font-size: 14px;
            color: #272a2c;
          }
        }
        .right {
          display: flex;
          flex-direction: column;
          span {
            font-weight: 400;
            font-size: 14px;
            color: #272a2c;
          }
        }
        }
        }
      }
      .actions {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        .edit {
          width: 158px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #1778d0;
          border-radius: 6px;
          cursor: pointer;
          img {
            width: 10px;
            height: 10px;
            margin: 0px 2px;
          }
          span {
            font-size: 14px;
            color: #ffffff;
            margin: 0px 2px;
             font-weight: 600;
          }
        }
        .active {
          width: 158px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffe0de;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 5px;
          span {
             font-weight: 600;
            font-size: 14px;
            color: #ff6157;
          }
        }
        .noactive {
          width: 158px;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #d1f3e2;
          border-radius: 6px;
          cursor: pointer;
          margin-top: 5px;
          span {
            font-weight: 600;
            font-size: 14px;
            color: #30be76;
          }
        }
      }
    }
  }
}
</style>