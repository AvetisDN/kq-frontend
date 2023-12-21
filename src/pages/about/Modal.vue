<script setup>
defineEmits(["closeModal"]);
defineProps(["item", "index"]);
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-70 z-[2000] flex flex-col items-center justify-center p-4"
    @click.self="$emit('closeModal')"
  >
    <div
      class="w-full max-w-5xl bg-white pt-12 py-8 relative shadow-xl rounded h-screen flex flex-col"
    >
      <button @click="$emit('closeModal')" class="absolute top-0 right-1 p-2">
        <i class="icon-close text-lg lg:text-xl 3xl:text-2xl"></i>
      </button>
      <img
        :src="item.image"
        alt=""
        class="w-full max-h-64 3xl:max-h-[240px] object-cover"
      />
      <div
        class="mt-4 xl:mt-6 px-4 xl:px-6 flex flex-col gap-3 lg:gap-4 3xl:gap-6 grow overflow-auto"
      >
        <h3
          class="font-bold text-xl lg:text-2xl 2xl:text-3xl uppercase leading-tight lg:leading-tight xl:leading-tight 2xl:leading-tight"
        >
          {{ item.title }}
        </h3>
        <p class="text-lg 2xl:text-xl font-bold" v-if="index !== 4">
          {{ item.short }}
        </p>
        <p class="text-base 2xl:text-xl">{{ item.full }}</p>
      </div>
      <div class="mt-4 xl:mt-6 px-4 xl:px-6">
        <button
          class="btn self-start bg-primary text-white"
          @click="$emit('closeModal')"
        >
          Закрыть
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.modal-content {
  max-height: calc(100vh - 540px);
}
</style>
