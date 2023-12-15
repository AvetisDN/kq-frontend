import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createHead } from "@vueuse/head";
import { router } from "./routes/index.js";
import { createYmaps } from "vue-yandex-maps";
import VideoBackground from "vue-responsive-video-background-player";

const head = createHead();

createApp(App)
  .component("video-background", VideoBackground)
  .use(head)
  .use(router)
  .use(
    createYmaps({
      apikey: "1e8c4e00-cd38-4764-b126-066c30584a29",
    })
  )
  .mount("#app");
