<script setup>
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import { useHead } from "@vueuse/head";
import { product } from "./single/dummyProduct";
import ImageViewer from "./single/ImageViewer.vue";
import Info from "./single/Info.vue";
import Tabs from "./single/Tabs.vue";
import Description from "./single/Description.vue";
import Attributes from "./single/Attributes.vue";
import Docs from "./single/Docs.vue";
import NewsSection from "../home/NewsSection.vue";
import { ref } from "vue";
useHead({
  title: `KQ Pumps :: ${product.name}`,
  meta: [
    {
      name: `description`,
      content: "this is product page",
    },
  ],
});

const activeTab = ref(0);

const changeTab = (n) => (activeTab.value = n);
</script>

<template>
  <div class="2xl:px-10 xl:px-8 lg:px-6 px-4">
    <Breadcrumbs
      :current="[
        {
          title: 'Группы продукции',
          url: '/products',
        },
        {
          title: product.group.title,
          url: `/products/${product.group.id}`,
        },
        {
          title: product.name.split(' ').slice(0, 4).join(' ') + '...',
        },
      ]"
    />

    <h1>{{ product.name }}</h1>

    <div
      class="flex flex-col gap-4 xl:gap-6 mb-8 lg:mb-12 xl:mb-20 2xl:mb-24 3xl:mb-32"
    >
      <div class="flex flex-col lg:flex-row justify-between gap-4 grow">
        <ImageViewer :images="product.images" />
        <Info :short="product.short" :attrs="product.attributes.slice(0, 4)" />
      </div>
      <div class="mt-4 xl:mt-10">
        <Tabs :activeTab="activeTab" :changeTab="changeTab" />
      </div>
      <div class="max-w-[908px]">
        <Description :descr="product.full" v-if="activeTab === 0" />
        <Attributes :attrs="product.attributes" v-if="activeTab === 1" />
        <Docs :docs="product.docs" v-if="activeTab === 2" />
      </div>
    </div>
    <NewsSection title="Новости" />
  </div>
</template>
