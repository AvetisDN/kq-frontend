<script setup>
const props = defineProps(["closeModal", "bigImage"]);
import { onMounted, onBeforeUnmount } from "vue";
onMounted(() => {
  document.body.style.overflowY = "hidden";
});
onBeforeUnmount(() => {
  document.body.style.overflowY = "auto";
});
</script>

<template>
  <div
    class="bg-black bg-opacity-60 top-0 left-0 fixed w-full h-screen flex items-center justify-center z-[999]"
  >
    <div class="absolute w-full h-screen" @click="closeModal"></div>
    <button @click="closeModal" class="absolute top-0 right-1 p-2 xl:p-4">
      <i class="icon-close text-white text-lg lg:text-xl 3xl:text-3xl"></i>
    </button>
    <img
      :src="bigImage"
      alt=""
      class="rounded-xl max-w-[95vw] max-h-[95vh] relative z-10 shadow-2xl"
    />
  </div>
</template>
