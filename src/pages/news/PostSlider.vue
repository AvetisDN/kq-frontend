<script setup>
import "vue3-carousel/dist/carousel.css";
import { onMounted, ref, watch } from "vue";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";

const props = defineProps({
    items: {
        type: Array,
    },
});

const glide2 = new Glide(".glide2", {
  focusAt: 0,
  type: "carousel",
  gap: 24,
  perView: 4,
  rewind: true,
  breakpoints: {
    640: {
      perView: 1,
    },
    1180: {
      perView: 2,
    },
  },
  1440: {
    perView: 3,
  },
});

const maxSlides = props.items.length;

onMounted(() => {
  glide2.mount();
});

const activeSlide = ref(0);

const nextSlide = () => {
  activeSlide.value++;
  if (activeSlide.value > maxSlides) activeSlide.value = 0;
};
const prevSlide = () => {
  activeSlide.value--;
  if (activeSlide.value < 0) activeSlide.value = maxSlides - 1;
};

watch(activeSlide, (newSlide, oldSlide) => {
  glide2.update({
    startAt: newSlide,
  });
});
</script>

<template>
  <div
    class="flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-10 relative mb-10 lg:mb-14 xl:mb-20 2xl:mb-32 3xl:mb-40"
  >
    <div class="news-header">
      <div class="news-filter"></div>
      <div class="news-buttons">
        <button @click="prevSlide()">
          <i class="icon-left text-lg"></i>
        </button>
        <button @click="nextSlide()">
          <i class="icon-right text-lg"></i>
        </button>
      </div>
    </div>
    <div class="glide2">
      <div class="glide__track" data-glide-el="track">
        <ul class="glide__slides">
          <li v-for="(item, index) in items" :key="index" class="glide__slide">
            <img :src="item" alt="" />
          </li>
<!--          <li class="glide__slide">
            <img src="/images/about/slider2.jpg" alt="" />
          </li>
          <li class="glide__slide">
            <img src="/images/about/slider3.jpg" alt="" />
          </li>
          <li class="glide__slide">
            <img src="/images/about/slider4.jpg" alt="" />
          </li>
          <li class="glide__slide">
            <img src="/images/about/slider1.jpg" alt="" />
          </li>
          <li class="glide__slide">
            <img src="/images/about/slider2.jpg" alt="" />
          </li>
          <li class="glide__slide">
            <img src="/images/about/slider3.jpg" alt="" />
          </li>
          <li class="glide__slide">
            <img src="/images/about/slider4.jpg" alt="" />
          </li>-->
        </ul>
      </div>
    </div>
  </div>
</template>

<style></style>
