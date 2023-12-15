<script setup>
import FeedbackModal from "../../../components/FeedbackModal.vue";
defineProps(["short", "attrs"]);
import { ref } from "vue";
const modal = ref(false);

const toggleModal = () => (modal.value = !modal.value);
</script>

<template>
  <div
    class="flex flex-col gap-3 lg:gap-4 xl:gap-6 shrink 2xl:w-[600px] 3xl:w-[750px]"
  >
    {{ short }}
    <h3 class="text-lg lg:text-xl 2xl:text-2xl font-bold uppercase">
      Технические характеристики:
    </h3>
    <div class="flex flex-col gap-2 xl:gap-4">
      <div v-for="attr in attrs" class="flex justify-start">
        <div class="whitespace-nowrap grow-[2]">{{ attr.name }}</div>
        <div
          class="whitespace-nowrap sm:pr-10 lg:pr-14 xl:pr-20 3xl:pr-24 font-bold"
        >
          {{ attr.value }}
        </div>
      </div>
    </div>
    <div class="flex gap-4 xl:gap-6 mt-4 lg:mt-6 2xl:mt-8">
      <!-- <button
        class="btn bg-primary text-white hover:bg-secondary hover:border-secondary"
      >
        Заказать
      </button> -->
      <button class="btn" @click="toggleModal">Задать вопрос</button>
    </div>
  </div>
  <FeedbackModal
    v-if="modal"
    title="Задать вопрос"
    :toggleModal="toggleModal"
  />
</template>
