<script setup>
//defines & imports---
import { newsData } from "./newsDummyData";
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import NewsSection from "../home/NewsSection.vue";
import PostSlider from "./PostSlider.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
//refs & vars---
const postData = ref({
  loaded: false,
});

//hooks---
onMounted(() => {
  getPostData();
});

//methods---
const getPostData = () => {
  postData.value = newsData.find((item) => +item.id === +route.params.id);
  // console.log(postData.value);
  postData.value.loaded = true;
};
</script>

<template>
  <div v-if="postData.loaded" class="2xl:px-10 xl:px-8 lg:px-6 px-4">
    <Breadcrumbs
      :current="[
        {
          title: 'Новости',
          url: '/news',
        },
        {
          title: postData.title.split(' ').slice(0, 4).join(' ') + '...',
        },
      ]"
    />
    <div
      class="flex flex-col xl:flex-row gap-4 md:gap-6 xl:gap-10 2xl:gap-32 3xl:gap-60 items-start"
    >
      <router-link
        to="/news"
        class="flex gap-4 xl:gap-6 whitespace-nowrap items-center text-2xl font-bold"
      >
        <img src="/src/assets/icons/left.png" alt="" />
        К НОВОСТЯМ
      </router-link>
      <h2 class="max-w-[908px]">{{ postData.title }}</h2>
    </div>
    <div
      class="my-4 md:my-6 lg:my-8 xl:my-10 3xl:my-12 flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 3xl:gap-12"
    >
      <img
        v-if="postData.category !== 'video'"
        :src="postData.image"
        class="w-full max-w-[908px] mx-auto"
        alt="image"
      />
      <div
        v-if="postData.category === 'video'"
        v-html="postData.video"
        class="w-full max-w-[908px] mx-auto"
      ></div>
      <div
        class="flex flex-col gap-3 lg:gap-4 2xl:gap-6 max-w-[908px] mx-auto lg:text-xl"
        v-html="postData.text"
      ></div>
      <!--            <img src="/images/news/banner.jpg" alt="" class="mx-auto" />-->
    </div>
    <PostSlider
      v-if="
        postData.loaded &&
        postData.sliderImages?.length &&
        postData.category !== 'video'
      "
      :items="postData.sliderImages"
    />
    <!-- <NewsSection title="Другие новости" /> -->
  </div>
</template>

<style scoped lang="scss"></style>
