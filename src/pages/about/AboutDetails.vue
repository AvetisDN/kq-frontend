<script setup>
import { data } from "./details";
import { ref } from "vue";
import Modal from "./Modal.vue";

const modal = ref(false);
const modalContent = ref(null);
const modalIndex = ref(0);

const open = (value, i) => {
  modalContent.value = value;
  modalIndex.value = i;
  modal.value = true;
  document.body.style.overflowY = "hidden";
};
const close = () => {
  modalContent.value = null;
  modalIndex.value = 0;
  modal.value = false;
  document.body.style.overflowY = "auto";
};
</script>

<template>
  <div class="my-10 lg:mb-20 3xl:myb-40">
    <div
      v-for="(item, index) in data"
      class="flex flex-col lg:flex-row justify-between gap-8 items-center mb-8 md:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20 3xl:mb-24"
    >
      <div
        class="max-w-[750px] flex flex-col gap-4 md:gap-6 xl:gap-8 3xl:gap-12 items-start"
      >
        <h3
          class="font-bold text-xl lg:text-3xl 2xl:text-[40px] uppercase leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight"
        >
          {{ item.title }}
        </h3>
        <p class="text-lg lg:text-xl 2xl:text-2xl">{{ item.short }}</p>
        <a
          class="text-primary uppercase text-lg lg:text-xl 2xl:text-2xl font-bold"
          href="!#"
          @click.prevent="open(item, index)"
        >
          Подробнее
        </a>
      </div>
      <img
        :src="item.image"
        alt=""
        class="3xl:max-w-[900px] 2xl:max-w-[750px] xl:max-w-[640px] lg:max-w-[480px] -order-1 rounded xl:rounded-lg"
        :class="{
          'lg:order-1': index % 2 === 0,
        }"
      />
    </div>
    <Modal
      v-if="modal"
      :item="modalContent"
      :index="modalIndex"
      @closeModal="close"
      :key="item"
    />
  </div>
</template>
