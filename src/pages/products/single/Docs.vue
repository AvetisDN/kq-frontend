<script setup>
const props = defineProps({
    docs: {
        type: Array,
    }
});

</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 max-w-[832px] gap-4 lg:gap-6 3xl:gap-8"
  >
    <a
      :href="doc.file"
      target="_blank"
      :download="doc.name"
      v-for="(doc, index) in docs"
      :key="index"
      class="border border-shade-300 rounded p-6 xl:p-8 h-[215px] flex flex-col justify-between"
    >
      <h3 class="col-span-2 text-lg lg:text-xl 2xl:text-2xl uppercase">
        {{ doc.name }}
      </h3>
      <div class="flex justify-between items-end">
        <p class="text-shade-300">{{ doc.size }}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
        >
          <path
            d="M25 12.2222V10C25 8.15905 23.5076 6.66667 21.6667 6.66667H8.33333C6.49238 6.66667 5 8.15905 5 10V20C5 21.8409 6.49238 23.3333 8.33333 23.3333H10M31.6667 16.6667H18.3333C16.4924 16.6667 15 18.1591 15 20V30C15 31.8409 16.4924 33.3333 18.3333 33.3333H31.6667C33.5076 33.3333 35 31.8409 35 30V20C35 18.1591 33.5076 16.6667 31.6667 16.6667Z"
            stroke="#404040"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </a>
  </div>
</template>
