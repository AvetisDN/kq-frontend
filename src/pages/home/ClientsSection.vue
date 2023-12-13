<script setup></script>

<template>
  <div class="flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12 mt-10 relative">
    <img
      src="../../assets/images/lines-black.png"
      alt=""
      class="absolute right-0 -top-0 sm:-top-3 md:-top-7 lg:-top-10 max-w-[30%]"
    />
    <router-link class="big-link" to="/about">
      клиенты
      <i class="icon-maximize"></i>
    </router-link>
    <div
      class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border border-shade-900"
    >
      <div
        class="bg-white aspect-square flex items-center justify-center border border-shade-900"
        v-for="n in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
      >
        <img :src="`/images/home/logo-${n}.png`" alt="" />
      </div>
    </div>
  </div>
</template>
