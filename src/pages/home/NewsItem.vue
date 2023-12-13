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
      <p>{{ item.description }}</p>
    </router-link>
  </li>
</template>

<style>
.glide__slide {
  @apply flex flex-col gap-4 items-start;
}

.glide__slide .date {
  @apply mt-2 bg-primary text-white p-2 text-xs font-medium;
}
.glide__slide h4 {
  @apply text-base lg:text-xl 3xl:text-2xl uppercase font-medium;
}
.glide__slide p {
  @apply text-sm lg:text-base uppercase font-medium text-shade-300 hidden;
}
.glide__slide.news-item.glide__slide--active {
  @apply mr-10 2xl:mr-20 !important;
}
.glide__slide img {
  @apply w-full object-cover h-[400px];
}
.glide__slide.news-item.glide__slide--active img {
  @apply h-[480px];
}
@media (max-width: 640px) {
  .glide__slide img {
    @apply w-full object-cover h-[200px];
  }
  .glide__slide.glide__slide--active img {
    @apply h-[260px];
  }
}
@media (max-width: 768px) {
  .glide__slide img {
    @apply w-full object-cover h-[260px];
  }
  .glide__slide.glide__slide--active img {
    @apply h-[320px];
  }
}
.glide__slide.news-item.glide__slide--active p {
  @apply block;
}
</style>
