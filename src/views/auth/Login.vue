<template>
  <div class="login">
    <h2>{{ $t("EnterLogin") }}</h2>
    <div div class="login_item">
      <div class="item-top">
        <div v-for="tab in Tab_List" :key="tab.id">
          <p
            @click="onChangePage(), ERI()"
            :class="`${activeTab === tab.name && 'active-tab'}`"
          >
            {{ tab.label }}
          </p>
          <span></span>
        </div>
      </div>
      <Form
        @submit="Login"
        v-show="activeTab === Tabs.Login"
        class="item-centre2"
      >
        <div class="item-centre">
          <div class="centre_first">
            <label for="Логин">{{ $t("Login") }}</label>
            <Field
              rules="required"
              :modelValue="username"
              v-slot="{ errors }"
              name="Login"
            >
              <input
                type="text"
                placeholder="Ваш логин"
                v-model="username"
                class="form-control"
              />
              <span class="validPass1" v-if="errors && errors.length">
                {{ errors[0] }}
              </span>
            </Field>
          </div>
          <div class="centre_second">
            <label for="Пароль">{{ $t("Password") }}</label>
            <div class="input">
              <Field
                rules="required"
                :modelValue="password"
                v-slot="{ errors }"
                name="password"
              >
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="Пароль"
                  v-model="password"
                  placeholder="Введите пароль"
                />
                <span class="validPass" v-if="errors && errors.length">
                  {{ errors[0] }}
                </span>
              </Field>
              <img
                :src="parol"
                alt=""
                :class="showPassword ? 'yes' : 'no'"
                @click="hidePass"
              />
              <img
                :src="eye"
                alt=""
                :class="showPassword ? 'no' : 'yes'"
                @click="showPass"
              />
            </div>
          </div>
        </div>
        <div class="login_btn">
          <button type="submit" class="item-bottom">{{ $t("ComeIn") }}</button>
        </div>
      </Form>
      <div v-show="activeTab === Tabs.ЭЦП" class="e_imzo">
        <div  class="items" @click="imzo_dialog = !imzo_dialog">
          <div
            :class="imzo_dialog ? 'border_item' : 'item'"
            @click="sign(items_four)"
          >
            <div class="left">
              <div class="content1">
                <img :src="key" alt="" />
                <span>№ Sertificate: {{ items_four.serialNumber }}</span>
              </div>
              <div class="content1">
                <p>
                  <span style="font-weight: bold">INN:</span
                  ><span>{{ items_four.TIN }}</span>
                </p>
              </div>
              <div class="content1">
                <p style="font-weight: bold">
                  <span>F.I.O.:</span>{{ items_four.CN }}
                </p>
              </div>
            </div>
            <div class="right">
              <div class="item1_right">
                <span>{{ items_four.O }}</span>
                <div class="action">
                  <img :src="Polygon" alt="" />
                </div>
              </div>
              <div class="item2_right">
                <span>{{
                  moment(items_four.validFrom).format("DD.MM.YYYY")
                }}</span
                >-
                <span>{{
                  moment(items_four.validTo).format("DD.MM.YYYY")
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="four_items"
          style="transition: all 0.5s linear"
          v-show="imzo_dialog"
        >
          <div class="items" v-for="item in items" :key="item.id">
            <div class="item" @click="sign(item)">
              <div class="left">
                <div class="content1">
                  <img :src="key" alt="" />
                  <span>№ Sertificate: {{ item.serialNumber }}</span>
                </div>
                <div class="content1">
                  <p>
                    <span style="font-weight: bold">INN:</span
                    ><span>{{ item.TIN }}</span>
                  </p>
                </div>
                <div class="content1">
                  <p style="font-weight: bold">
                    <span>F.I.O.:</span>{{ item.CN }}
                  </p>
                </div>
              </div>
              <div class="right">
                <div class="item1_right">
                  <span>{{ item.O }}</span>
                  <div class="action">
                    <img :src="Polygon" alt="" />
                  </div>
                </div>
                <div class="item2_right">
                  <span>{{ moment(item.validFrom).format("DD.MM.YYYY") }}</span
                  >-
                  <span>{{ moment(item.validTo).format("DD.MM.YYYY") }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { initModuleEimzo } from "@oybekmavlonov/e-imzo";
import { Field, Form } from "vee-validate";
import parol from "@/assets/Vector (23).svg";
import eye from "@/assets/Vector (24).svg";
import key from "@/assets/key.svg";
import Polygon from "@/assets/Polygon1.svg";
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import moment from "moment";
import http from "@/plugins/axios";
import ErrorNotification from "@/service/Notifications/Notifications";
import { useI18n } from "vue-i18n";
const { t } = useI18n();
const showPassword = ref(false);
const username = ref("");
const password = ref("");
const eimzo = ref(null);
const imzo_dialog = ref(false);
const items = ref([]);
const items_four = ref({});
const hash = ref("");
const router = useRouter();
const text = ref("Логин или пароль не верны");
const Tabs = ref({
  Login: t("Login"),
  ЭЦП: t("ЭЦП"),
});
const activeTab = ref(Tabs.value.Login);
const Tab_List = ref([
  { label: t("Login"), name: Tabs.value.Login, id: 1 },
  { label: t("ЭЦП"), name: Tabs.value.ЭЦП, id: 2 },
]);

const onChangePage = () => {
  if (activeTab.value === Tabs.value.Login) {
    activeTab.value = Tabs.value.ЭЦП;
  } else if (activeTab.value === Tabs.value.ЭЦП) {
    activeTab.value = Tabs.value.Login;
  }
};
const hidePass = () => {
  showPassword.value = false;
};
const showPass = () => {
  showPassword.value = true;
};
const Login = () => {
  if (hash.value) {
    http
      .post("/auth/login-key", {
        hash: hash.value,
      })
      .then((res) => {
        console.log(res);
        if (res.data.data.access_token) {
          localStorage.setItem("token", res.data.data.access_token);
          if (res.data.data.role === "minfin") {
            router.push({ name: "commission" });
          } else if (
            res.data.data.role === "chairman" ||
            res.data.data.role === "deputyChairman"
          ) {
            router.push({ name: "complaints" });
          }
          else{
            router.push({ name: "accepted" });
          }
        }
      }).catch(err=>{
        ErrorNotification({ text: "nimadir xato" })
      });
  } else {
    http
      .post("/auth/login", {
        username: username.value,
        password: password.value,
      })
      .then((res) => {
        if (res.data.data.access_token) {
          localStorage.setItem("token", res.data.data.access_token);
          if (res.data.data.role === "minfin") {
            router.push({ name: "commission" });
          }
        }
      })
      .catch((err) => {
        ErrorNotification({ text: text.value });
      });
  }
};
const getList = () => {
  initModuleEimzo().then(async (res) => {
    eimzo.value = res;
    try {
      await res.default.checkVersion();
      items.value = await res.default.listAllUserKeys();
      items_four.value = items.value.shift();
      console.log(items.value, "items");
      console.log(items_four.value, "items_four");
    } catch (err) {
      console.log(err);
    }
  });
};
async function sign(val) {
  initModuleEimzo().then(async (res) => {
    try {
      const data = await res.default.getHashESign(val, val.TIN);
      hash.value = data.hash;
      await Login();
    } catch (err) {
      console.log(err);
    }
  });
}
getList();
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto";
  font-style: normal;
}
.login {
  width: 100%;
  background-color: #f3f7f9;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 75px;
}
.yes {
  display: block;
}
.no {
  display: none;
}
.login h2 {
  font-weight: 600;
  font-size: 30px;
  color: #272a2c;
  margin-bottom: 20px;
  margin-top: 135px;
}
.login .login_item {
  width: 65%;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.login .login_item .item-top {
  width: 100%;
  height: 50px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.login .login_item .item-top div {
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login .login_item .item-top div p {
  width: 90px;
  position: relative;
  display: flex;
  flex-direction: column;
  transition: 0.3s ease all;
  margin-top: 13px;
  cursor: pointer;
  font-weight: 400;
  font-family: "Roboto", sans-serif;
  color: #8da2ad;
}
.login .login_item .item-top div p::after {
  content: "";
  margin-top: 10px;
  background-color: #1778d0;
  height: 2px;
  width: 0;
  transition: 0.3s;
}
.login .login_item .item-top div .active-tab {
  color: #36363b;
  font-weight: 400;
  transition: none;
  width: 90px;
}
.login .login_item .item-top div .active-tab::after {
  content: "";
  margin-top: 10px;
  background-color: #1778d0;
  height: 2px;
  width: 90px;
  transition: 0.3s;
}
.login .login_item .item-top div span {
  height: 0;
  width: 100%;
  margin-top: -1.5px;
  border: 1px solid #e1eaed;
}
.login .login_item .item-centre2 {
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.login .login_item .item-centre {
  width: 100%;
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 80px;
}
.login .login_item .item-centre .centre_first {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 15px;
}
.login .login_item .item-centre label {
  font-weight: 400;
  font-size: 14px;
  color: #272a2c;
}
.login .login_item .item-centre .centre_first input {
  font-weight: 400;
  font-size: 14px;
  height: 40px;
  padding-left: 15px;
  margin-top: 10px;
  color: #272a2c;
  background: #edf2f7;
  border-radius: 8px;
  outline: none;
  margin-right: 5px;
  border: none;
}
.login .login_item .item-centre .centre_first .validPass1 {
  position: absolute;
  top: 85px;
  font-size: 12px;
  color: red;
  left: 10px;
}
.login .login_item .item-centre .centre_second {
  margin-top: 10px;
}
.login .login_item .item-centre .centre_second .input {
  position: relative;
  width: 100%;
  height: 40px;
  background: #edf2f7;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}
.login .login_item .item-centre .centre_second .input .validPass {
  position: absolute;
  top: 50px;
  font-size: 12px;
  color: red;
  left: 10px;
}
.login .login_item .item-centre .centre_second .input input {
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  height: 40px;
  padding-left: 15px;
  color: #272a2c;
  background: #edf2f7;
  border-radius: 8px;
  outline: none;
  border: none;
}
.login .login_item .item-centre .centre_second .input img {
  margin-right: 16px;
  cursor: pointer;
}
.login .login_item .item-centre2 .login_btn {
  width: 96%;
  display: flex;
  justify-content: start;
}
.login .login_item .item-centre2 .login_btn .item-bottom {
  width: 106px;
  height: 46px;
  background: #30be76;
  border-radius: 6px;
  font-weight: 600;
  border: none;
  font-size: 16px;
  color: #ffffff;
  margin: 30px 0px;
}
@media (max-width: 668px) {
  .login .login_item .item-centre2 .login_btn .item-bottom {
    width: 90px;
    height: 36px;
    background: #30be76;
    border-radius: 6px;
    font-weight: 600;
    border: none;
    font-size: 14px;
    color: #ffffff;
    margin: 20px 0px;
  }
  .login .login_item .item-centre .centre_second .input img {
    margin-right: 20px;
    cursor: pointer;
  }
}
@media (max-width: 855px) {
  .login h2 {
    font-size: 25px;
    margin-top: 20px;
  }
  .login .login_item .item-centre .centre_second .input {
    margin-left: 0px;
  }
}
@media (max-width: 1100px) {
  .login .login_item .item-centre {
    grid-template-columns: 1fr;
    width: 100%;
    margin-top: 80px;
  }
  .login .login_item .item-centre2 .login_btn {
    width: 96%;
    display: flex;
    justify-content: center;
  }
}
.login .login_item .e_imzo {
  width: 100%;
  height: 400;
  margin: 30px 0px 60px 0px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login .login_item .e_imzo .four_items {
  transition: 0.3s all;
  width: 100%;
  height: 540px !important;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.login .login_item .e_imzo .items {
  width: 96%;
  transition: all 0.5s linear;
}
.login .login_item .e_imzo .items .item {
  width: 96%;
  min-height: 130px;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  margin: 8px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.login .login_item .e_imzo .items .border_item {
  width: 96%;
  min-height: 130px;
  border: 1px solid #ffe0de;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  margin: 8px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.login .login_item .e_imzo .four_items .items .item:hover {
  background-color: #f3f7f9;
}
.login .login_item .e_imzo .items .item .left {
  margin-top: 6px;
}
.login .login_item .e_imzo .items .border_item .left {
  margin-top: 6px;
}
.login .login_item .e_imzo .items .item .left .content1 {
  margin: 3px 0px;
}
.login .login_item .e_imzo .items .border_item .left .content1 {
  margin: 3px 0px;
}
.login .login_item .e_imzo .items .item .left .content1 span {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
}
.login .login_item .e_imzo .items .border_item .left .content1 span {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
}
.login .login_item .e_imzo .items .item .left .content1 img {
  margin-right: 14px;
}
.login .login_item .e_imzo .items .border_item .left .content1 img {
  margin-right: 14px;
}
.login .login_item .e_imzo .items .item .left .content1 p {
  color: #353c47;
  font-size: 12px;
}
.login .login_item .e_imzo .items .border_item .left .content1 p {
  color: #353c47;
  font-size: 12px;
}
.login .login_item .e_imzo .items .item .right .item1_right {
  display: flex;
  align-items: center;
  margin-top: 6px;
}
.login .login_item .e_imzo .items .border_item .right .item1_right {
  display: flex;
  align-items: center;
  margin-top: 6px;
}
.login .login_item .e_imzo .items .item .right .item1_right span {
  margin-right: 20px;
  font-weight: 400;
  font-size: 14px;
  color: #8da2ad;
}
.login .login_item .e_imzo .items .border_item .right .item1_right span {
  margin-right: 20px;
  font-weight: 400;
  font-size: 14px;
  color: #8da2ad;
}
.login .login_item .e_imzo .items .item .right .item1_right .action {
  width: 18px;
  height: 18px;
  background: #eaf5fb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.login .login_item .e_imzo .items .border_item .right .item1_right .action {
  width: 18px;
  height: 18px;
  background: #eaf5fb;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  cursor: pointer;
}
.login .login_item .e_imzo .items .item .right .item1_right .action img {
  width: 8px;
  height: 6px;
  margin-top: 6px;
}
.login .login_item .e_imzo .items .border_item .right .item1_right .action img {
  width: 8px;
  height: 6px;
  margin-top: 6px;
}
.login .login_item .e_imzo .items .item .right .item2_right {
  margin-top: 6px;
  display: flex;
  justify-content: end;
  font-weight: 500;
  font-size: 12px;
  color: #30be76;
}
.login .login_item .e_imzo .items .border_item .right .item2_right {
  margin-top: 6px;
  display: flex;
  justify-content: end;
  font-weight: 500;
  font-size: 12px;
  color: #30be76;
}
</style>