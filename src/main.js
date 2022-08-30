import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/vee-validate";
import "bootstrap/dist/css/bootstrap.min.css";
import VueToast from "vue-toast-notification";
import Maska from 'maska'
import "vue-toast-notification/dist/theme-sugar.css";
import i18n from '@/plugins/i18n'
createApp(App).use(router).use(store).use(VueToast).use(Maska).use(i18n).mount("#app");