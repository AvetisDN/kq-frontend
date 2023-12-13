<script setup>
defineProps(["attrs"]);
</script>

<template>
  <div class="flex flex-col gap-2 xl:gap-4 max-w-[700px]">
    <div v-for="attr in attrs" class="flex justify-start items-center">
      <div class="whitespace-nowrap grow">{{ attr.name }}</div>
      <div
        class="whitespace-nowrap sm:pr-10 lg:pr-14 xl:pr-20 3xl:pr-24 font-bold text-right"
        v-html="attr.value"
      ></div>
    </div>
  </div>
</template>
