<script setup>
defineProps(["item"]);
</script>

<template>
  <li class="glide__slide news-item">
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
      <h4>{{ item.title }}</h4>
      <textarea
        class="resize-none w-full overflow-hidden cursor-pointer pointer-events-none text-sm lg:text-base uppercase font-medium text-shade-300"
        rows="4"
        >{{ item.description }}</textarea
      >
    </router-link>
  </li>
</template>

<style>
.glide__slide.news-item {
  @apply flex flex-col gap-4 items-start mb-0;
}

.glide__slide .date {
  @apply mt-2 bg-primary text-white p-2 text-xs font-medium;
}
.glide__slide h4 {
  @apply text-base lg:text-xl 3xl:text-2xl uppercase font-medium;
}
.glide__slide.news-item p {
  @apply text-sm lg:text-base uppercase font-medium text-shade-300 block;
}
/* .glide__slide.news-item.glide__slide--active {
  @apply mr-10 2xl:mr-20 !important;
} */
.glide__slide.news-item img {
  @apply w-full object-cover h-[320px] !important;
}
/* .glide__slide.news-item.glide__slide--active img {
  @apply h-[380px] !important;
} */
@media (max-width: 640px) {
  .glide__slide img {
    @apply w-full object-cover h-[200px];
  }
  /* .glide__slide.glide__slide--active img {
    @apply h-[260px];
  } */
}
@media (max-width: 768px) {
  .glide__slide img {
    @apply w-full object-cover h-[260px];
  }
  /* .glide__slide.glide__slide--active img {
    @apply h-[320px];
  } */
}
</style>
