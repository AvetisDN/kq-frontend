<script setup>
import moment from "moment";

const props = defineProps({
  item: {
    type: Object,
  },
});
</script>

<template>
  <li class="list-none">
    <router-link :to="`/post/${item.id}`" class="news-item">
      <img v-if="item.category !== 'video'" :src="item.image" alt="image" />
      <div
        v-if="item.category === 'video'"
        v-html="item.video"
        class="w-full"
      ></div>
      <div class="date">
        {{ item.date }}
      </div>
      <h4>
        {{ item.title }}
      </h4>
    </router-link>
  </li>
</template>

<style>
.news-item {
  @apply flex flex-col gap-4 items-start xl:mb-8 2xl:mb-10 3xl:mb-14  max-h-[724px] overflow-hidden;
}

.news-item .date {
  @apply mt-2 bg-primary text-white p-2 text-xs font-medium;
}

.news-item h4 {
  @apply text-base lg:text-xl 3xl:text-2xl uppercase font-medium;
}

.news-item p {
  @apply text-sm lg:text-base uppercase font-medium text-shade-300 hidden;
}

.news-item.news-item.news-item--active {
  @apply mr-10 2xl:mr-20 !important;
}

.news-item img {
  @apply w-full object-cover h-[400px];
}

.news-item.news-item.news-item--active img {
  @apply h-[480px];
}

@media (max-width: 640px) {
  .news-item img {
    @apply w-full object-cover h-[200px];
  }

  .news-item.news-item--active img {
    @apply h-[260px];
  }
}

@media (max-width: 768px) {
  .news-item img {
    @apply w-full object-cover h-[260px];
  }

  .news-item.news-item--active img {
    @apply h-[320px];
  }
}

.news-item.news-item.news-item--active p {
  @apply block;
}
</style>
