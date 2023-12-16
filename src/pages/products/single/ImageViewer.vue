<script setup>
defineProps(["images"]);
import { ref } from "vue";

const current = ref(0);
</script>

<template>
  <div
    class="flex flex-col-reverse xl:flex-row gap-4 xl:gap-6 grow shrink-0 2xl:w-[800px]"
  >
    <div
      class="flex flex-row xl:flex-col gap-4 max-h-[580px] overflow-auto pr-4"
    >
      <img
        v-for="(image, index) in images"
        :src="image"
        alt=""
        @click="current = index"
        :class="{
          'border-shade-900': current === index,
          'border-white': current !== index,
        }"
        class="border-2 transition rounded hover:border-shade-300 max-w-[132px] aspect-square cursor-pointer object-contain"
      />
    </div>
    <div class="relative grow max-w-[732px]">
      <img
        :src="images[current]"
        alt=""
        class="transition rounded cursor-pointer w-full max-h-[580px] object-contain object-center"
      />
      <button
        class="absolute top-1/2 -translate-y-1/2 left-0"
        @click="
          () => {
            if (current === 0) current = images.length;
            current--;
          }
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M25 30L15 20L25 10"
            stroke="#1C1C1C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <button
        class="absolute top-1/2 -translate-y-1/2 right-0"
        @click="
          () => {
            current++;
            if (current >= images.length) current = 0;
          }
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M15 10L25 20L15 30"
            stroke="#1C1C1C"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
