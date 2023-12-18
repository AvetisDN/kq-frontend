import {createApp} from "vue";
import "./style.css";
import App from "./App.vue";
import {createHead} from "@vueuse/head";
import {router} from "./routes/index.js";
import {createYmaps} from "vue-yandex-maps";
import { createPinia } from 'pinia'
import VideoBackground from "vue-responsive-video-background-player";

const head = createHead();

import axios from 'axios'
import VueAxios from 'vue-axios'
const pinia = createPinia()

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

axios.defaults.baseURL = import.meta.env.VITE_API_DOMAIN;

if(import.meta.env.VITE_BASIC_AUTH === 'true') {
	axios.defaults.auth = {
		username: import.meta.env.VITE_BASIC_LOGIN,
		password: import.meta.env.VITE_BASIC_PASSWORD
	}
}

createApp(App)
	.component("video-background", VideoBackground)
	.use(head)
	.use(router)
	.use(VueAxios, axios)
	.use(Toast, {
		hideProgressBar : true
	})
	.use(pinia)
	.provide('axios', axios)
	.use(
		createYmaps({
			apikey: "1e8c4e00-cd38-4764-b126-066c30584a29",
		})
	)
	.mount("#app");
