<script setup>
const props = defineProps(["current", "total", "changePage"]);
const totalPages = Math.ceil(props.total / 15);
</script>

<template>
  <div class="flex gap-3 lg:gap-4 2xl:gap-5 3xl:gap-6 pagination">
    <router-link to="/news">
      <img src="../../assets/icons/left-left.png" alt="" />
    </router-link>
    <router-link :to="`/news/${current - 1}`">
      <img src="../../assets/icons/left.png" alt="" />
    </router-link>
    <!--  -->
    <router-link
      v-for="n in totalPages"
      class="numbers"
      :to="`/news${n === 1 ? '' : `/${n}`}`"
    >
      {{ n }}
    </router-link>
    <!--  -->
    <router-link :to="`/news/${current + 1}`">
      <img src="../../assets/icons/right.png" alt="" />
    </router-link>
    <router-link :to="`/news/${total}`">
      <img src="../../assets/icons/right-right.png" alt="" />
    </router-link>
  </div>
</template>

<style>
.pagination a {
  @apply flex w-8 h-8 lg:w-10 lg:h-10 items-center justify-center text-xl leading-none;
}
.pagination a.numbers.router-link-exact-active {
  @apply bg-primary text-white;
}
</style>
