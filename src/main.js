import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createHead } from "@vueuse/head";
import { router } from "./routes/index.js";
import { createPinia } from "pinia";
import VideoBackground from "vue-responsive-video-background-player";
import YmapPlugin from 'vue-yandex-maps'
const head = createHead();
const center = [55.450797, 52.909868];
const zoom = 5;
const mapSettings = {
  apiKey: '',
  lang: "ru_RU",
  location: {
    center,
    zoom,
  },
  zoomRange: { min: 5, max: 15 },
  enterprise: false,
  version: '2.1'
};
import axios from "axios";
import VueAxios from "vue-axios";
const pinia = createPinia();

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

axios.defaults.baseURL = import.meta.env.VITE_API_DOMAIN;

if (import.meta.env.VITE_BASIC_AUTH === "true") {
  axios.defaults.auth = {
    username: import.meta.env.VITE_BASIC_LOGIN,
    password: import.meta.env.VITE_BASIC_PASSWORD,
  };
}

createApp(App)
  .component("video-background", VideoBackground)
  .use(head)
  .use(router)
  .use(VueAxios, axios)
  .use(Toast, {
    hideProgressBar: true,
  })
    .use(YmapPlugin, mapSettings)
  .use(pinia)
  .provide("axios", axios)
  .mount("#app");
