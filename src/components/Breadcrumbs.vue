<script setup>
defineProps(["current"]);
</script>

<template>
  <div
    class="flex gap-2 xl:gap-3 my-6 lg:my-8 2xl:my-10 items-center uppercase flex-wrap"
  >
    <router-link to="/"> Главная </router-link>
    <i class="icon-right text-[10px]"></i>
    <a href="!#" class="text-primary" v-if="!Array.isArray(current)">
      {{ current }}
    </a>
    <div v-else class="flex gap-2 xl:gap-3 items-center uppercase flex-wrap">
      <div
        v-for="(link, index) in current"
        class="flex gap-2 xl:gap-3 items-center uppercase"
      >
        <router-link :to="link.url" v-if="link.url">
          {{ link.title }}
        </router-link>
        <a href="!#" class="text-primary" v-else>
          {{ link.title }}
        </a>
        <i class="icon-right text-[10px]" v-if="index < current.length - 1"></i>
      </div>
    </div>
  </div>
</template>
