<script setup>
defineProps(["title"]);

import GlideInstance from "./GlideInstance.vue";
import { newsData } from "./newsDummyData";
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";

const activeSlide = ref(0);

const nextSlide = () => {
  //if (activeSlide.value < newsData.length - 1) {
  activeSlide.value++;
  //}
  if (activeSlide.value === newsData.length - 1) activeSlide.value = 0;
};
const prevSlide = () => {
  //if (activeSlide.value > 0) {
  activeSlide.value--;
  // }
  if (activeSlide.value === -1) activeSlide.value = newsData.length - 1;
};

const activeType = ref(0);
const filteredNewsData = computed((type) => {
  switch (activeType.value) {
    case 0:
      return newsData;
    case 1:
      return newsData.filter((item) => item.category === "news");
    case 2:
      return newsData.filter((item) => item.category === "article");
    case 3:
      return newsData.filter((item) => item.category === "video");
  }
});
</script>

<template>
  <div class="flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-10 relative">
    <h2 class="line" v-if="title">{{ title }}</h2>
    <router-link
      v-else
      class="big-link mb-6 lg:mb-8 xl:mb-10 3xl:mb-12"
      to="/news"
    >
      Новости
      <i class="icon-maximize"></i>
    </router-link>
    <div class="news-header flex-wrap relative">
      <div class="news-filter">
        <button :class="{ active: activeType === 0 }" @click="activeType = 0">
          ВСЕ
        </button>
        <button :class="{ active: activeType === 1 }" @click="activeType = 1">
          НОВОСТИ
        </button>
        <button :class="{ active: activeType === 2 }" @click="activeType = 2">
          ПУБЛИКАЦИИ
        </button>
        <button :class="{ active: activeType === 3 }" @click="activeType = 3">
          ВИДЕО
        </button>
      </div>
      <div class="w-full"></div>
      <GlideInstance :items="filteredNewsData" :key="activeType" />
    </div>
  </div>
</template>

<style></style>
