<script setup>
const props = defineProps(["items", "type"]);

import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { onMounted, ref, watch } from "vue";
import NewsItem from "./NewsItem.vue";

const glideConfig = {
  focusAt: 0,
  type: "carousel",
  gap: 24,
  perView: 4,
  breakpoints: {
    640: {
      perView: 1,
    },
    1180: {
      perView: 2,
    },
    1440: {
      perView: 3,
    },
  },
};

const glide0 = new Glide(".glide-news", glideConfig);
onMounted(() => {
  glide0.mount();
});

const activeSlide = ref(0);

const nextSlide = () => {
  //if (activeSlide.value < newsData.length - 1) {
  activeSlide.value++;
  //}
  if (activeSlide.value === props.items.length - 1) activeSlide.value = 0;
};
const prevSlide = () => {
  //if (activeSlide.value > 0) {
  activeSlide.value--;
  // }
  if (activeSlide.value === -1) activeSlide.value = props.items.length - 1;
};

watch(activeSlide, (newSlide, oldSlide) => {
  console.log(activeSlide);
  glide0.update({
    startAt: newSlide,
  });
});
</script>

<template>
  <div
    class="news-buttons absolute top-16 left-0 lg:-top-5 lg:right-0 lg:left-auto"
  >
    <button @click="prevSlide()">
      <i class="icon-left text-lg"></i>
    </button>
    <button @click="nextSlide()">
      <i class="icon-right text-lg"></i>
    </button>
    <RouterLink to="/news">ВСЕ НОВОСТИ</RouterLink>
  </div>
  <div class="glide glide-news mt-16 lg:mt-0">
    <div class="glide__track" data-glide-el="track">
      <ul class="glide__slides">
        <NewsItem v-for="item in items" :item="item" :key="item.id" />
      </ul>
    </div>
  </div>
</template>
