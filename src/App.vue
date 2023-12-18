<script setup>
import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";
import CallToAction from "./components/footer/CallToAction.vue";
import { computed, reactive } from "vue";
import { useHead } from "@vueuse/head";
import { useRouter } from "vue-router";

const metaData = reactive({
  title: "KQ Pumps",
  description: "KQ Pumps description",
});

useHead({
  title: computed(() => metaData.title),
  meta: [
    {
      name: "description",
      content: computed(() => metaData.description),
    },
  ],
});
const router = useRouter();
router.afterEach(() => {
  window.scrollTo(0, 0);
});
</script>

<template>
  <div class="container text-shade-900 relative">
    <div class="sticky top-0 z-50 bg-white">
      <Header />
    </div>
    <div
      class="lg:min-h-[calc(100vh-65px)] xl:min-h-[calc(100vh-73px)] 2xl:min-h-[calc(100vh-84px)]"
    >
      <router-view></router-view>
    </div>
    <CallToAction />
    <Footer />
  </div>
</template>
