<script setup>
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import MenuCatalog from "./MenuCatalog.vue";
import { useHead } from "@vueuse/head";
useHead({
  title: "KQ Pumps :: Группы продукции",
  meta: [
    {
      name: `description`,
      content: "this is products groups page",
    },
  ],
});
</script>

<template>
  <div class="2xl:px-10 xl:px-8 lg:px-6 px-4">
    <Breadcrumbs current="Группы продукции" />

    <h1>Группы продукции</h1>
    <div
      class="flex flex-col 2xl:flex-row gap-4 xl:gap-6 mb-4 lg:mb-6 xl:mb-10 2xl:mb-16 3xl:mb-20"
    >
      <div
        class="flex flex-col 2xl:flex-row gap-4 md:gap-6 xl:gap-10 2xl:gap-14 3xl:gap-24 w-full"
      >
        <MenuCatalog />
        <div class="grid grid-cols-1 lg:grid-cols-2 w-full">
          <router-link
            to="/products/1"
            class="flex flex-col gap-4 lg:gap-6 items-center justify-center pb-6 hover:outline hover:outline-shade-300"
          >
            <img
              src="/images/home/prod-1.png"
              alt=""
              class="h-[360px] w-full object-contain"
            />
            <h4
              class="font-bold uppercase text-xl lg:text-2xl xl:text-3xl text-center"
            >
              ВОДОСНАБЖЕНИЕ И ПОВЫШЕНИЕ ДАВЛЕНИЯ
            </h4>
          </router-link>
          <router-link
            to="/products/2"
            class="flex flex-col gap-4 lg:gap-6 items-center justify-center pb-6 hover:outline hover:outline-shade-300"
          >
            <img
              src="/images/home/prod-2.png"
              alt=""
              class="h-[360px] w-full object-contain"
            />
            <h4
              class="font-bold uppercase text-xl lg:text-2xl xl:text-3xl text-center"
            >
              ВОДООТВЕДЕНИЕ
            </h4>
          </router-link>
          <router-link
            to="/products/3"
            class="flex flex-col gap-4 lg:gap-6 items-center justify-center pb-6 hover:outline hover:outline-shade-300"
          >
            <img
              src="/images/home/prod-3.png"
              alt=""
              class="h-[360px] w-full object-contain"
            />
            <h4
              class="font-bold uppercase text-xl lg:text-2xl xl:text-3xl text-center"
            >
              Отопление
            </h4>
          </router-link>
          <router-link
            to="/products/4"
            class="flex flex-col gap-4 lg:gap-6 items-center justify-center pb-6 hover:outline hover:outline-shade-300"
          >
            <img
              src="/images/home/prod-4.png"
              alt=""
              class="h-[360px] w-full object-contain"
            />
            <h4
              class="font-bold uppercase text-xl lg:text-2xl xl:text-3xl text-center"
            >
              Энергетика
            </h4>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
