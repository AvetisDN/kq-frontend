<script setup>
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import MenuCatalog from "./MenuCatalog.vue";
import { useHead } from "@vueuse/head";
useHead({
  title: "KQ Pumps :: ВОДОСНАБЖЕНИЕ И ПОВЫШЕНИЕ ДАВЛЕНИЯ",
  meta: [
    {
      name: `description`,
      content: "this is products groups page",
    },
  ],
});

const dummyProducts = [
  {
    id: 1,
    title: "KQDP, KQDQ",
    image: "/images/products/1/product1.png",
  },
  {
    id: 2,
    title: "KQL, KQW",
    image: "/images/products/1/product2.png",
  },
  {
    id: 3,
    title: "KQDL, KQDW",
    image: "/images/products/1/product3.png",
  },
  {
    id: 4,
    title: "KQSN",
    image: "/images/products/1/product4.png",
  },
  {
    id: 5,
    title: "KQDS, KQHS",
    image: "/images/products/1/product5.png",
  },
  {
    id: 6,
    title: "KQH, KQHW",
    image: "/images/products/1/product6.png",
  },
  {
    id: 7,
    title: "KQW-X",
    image: "/images/products/1/product7.png",
  },
  {
    id: 8,
    title: "KQWS",
    image: "/images/products/1/product8.png",
  },
];

const dummyTitle = "ВОДОСНАБЖЕНИЕ И ПОВЫШЕНИЕ ДАВЛЕНИЯ";
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
          title: dummyTitle.split(' ').slice(0, 4).join(' ') + '...',
        },
      ]"
    />

    <h1>{{ dummyTitle }}</h1>
    <div
      class="flex flex-col 2xl:flex-row gap-4 xl:gap-6 mb-4 lg:mb-6 xl:mb-10 2xl:mb-16 3xl:mb-20"
    >
      <div
        class="flex flex-col 2xl:flex-row gap-4 md:gap-6 xl:gap-10 2xl:gap-14 3xl:gap-24 w-full items-start"
      >
        <MenuCatalog />
        <div class="grid grid-cols-1 lg:grid-cols-3 w-full">
          <router-link
            v-for="prod in dummyProducts"
            :to="`/product/${prod.id}`"
            class="flex flex-col gap-4 lg:gap-6 items-center justify-center pb-6 hover:outline hover:outline-shade-300"
          >
            <img :src="prod.image" alt="" />
            <h4
              class="font-bold uppercase text-base lg:text-xl 2xl:text-2xl text-center"
            >
              {{ prod.title }}
            </h4>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
