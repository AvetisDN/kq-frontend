<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
defineEmits(["toggle"]);

const search = ref(null);

onMounted(() => {
  if (search.value) search.value.focus();
});

onBeforeUnmount(() => {
  search.value.blur();
});
</script>

<template>
  <div
    class="absolute z-50 left-0 w-full h-full bg-white border-b border-shade-900"
  >
    <div class="w-full h-full max-w-[1200px] mx-auto flex">
      <form class="w-full flex gap-4 items-center">
        <label for="search" class="flex gap-4 grow items-center">
          <i class="icon-search"></i>
          <input
            autocomplete="off"
            type="text"
            id="search"
            ref="search"
            class="focus:outline-none min-w-[50%] max-w-[100%] xl:text-lg font-600 focus:bg-gray-50 p-4 font-medium"
          />
        </label>
        <button
          type="submit"
          class="btn gap-2 lg:gap-3 rounded-none bg-primary text-white border-none hover:bg-secondary self-stretch ml-auto"
        >
          Искать
        </button>
        <button type="button" @click="$emit('toggle')">
          <i class="icon-close px-2 md:px-3 lg:px-4"></i>
        </button>
      </form>
    </div>
  </div>
</template>
