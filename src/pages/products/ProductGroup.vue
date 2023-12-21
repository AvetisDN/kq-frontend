<script setup>
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import MenuCatalog from "./MenuCatalog.vue";
import { useHead } from "@vueuse/head";
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

onMounted(() => {
  getGroupData();
  useHead({
    title: pageTitle,
    meta: [
      {
        name: `description`,
        content: "this is products groups page",
      },
    ],
  });
});

watch(route, () => {
  getGroupData();
});

const currentGroup = ref({
  loaded: false,
});

const pageTitle = ref(``);

const dummyGroups = [
  {
    group: 1,
    title: "ВОДОСНАБЖЕНИЕ И ПОВЫШЕНИЕ ДАВЛЕНИЯ",
    products: [
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
        image: "/images/products/1/product4/2.png",
      },
      {
        id: 5,
        title: "KQDS, KQHS",
        image: "/images/products/1/product5.png",
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
    ],
  },
  {
    group: 2,
    title: "ВОДООТВЕДЕНИЕ",
    products: [
      {
        id: 9,
        title: "WQ 11-22 кВт",
        image: "/images/products/2/product1.png",
      },
      {
        id: 10,
        title: "WQ 30 кВт и выше",
        image: "/images/products/2/product2.png",
      },
      {
        id: 11,
        title: "WQE, WQEC",
        image: "/images/products/2/product3.png",
      },
      {
        id: 12,
        title: "WQS, WQES",
        image: "/images/products/2/product4.png",
      },
      {
        id: 13,
        title: "WL, WLD",
        image: "/images/products/2/product5.png",
      },
      {
        id: 14,
        title: "HQ, ZQ",
        image: "/images/products/2/product6.png",
      },
    ],
  },
  {
    group: 3,
    title: "ОТОПЛЕНИЕ",
    products: [
      {
        id: 15,
        title: "KQDP, KQDQ",
        image: "/images/products/1/product1.png",
      },
      {
        id: 16,
        title: "KQL, KQW",
        image: "/images/products/1/product2.png",
      },
      {
        id: 17,
        title: "KQSN",
        image: "/images/products/3/product3/2.png",
      },
      {
        id: 18,
        title: "KQW-X",
        image: "/images/products/1/product7.png",
      },
      {
        id: 19,
        title: "KQDS, KQHS",
        image: "/images/products/1/product5.png",
      },
      {
        id: 6,
        title: "KQH, KQWH",
        image: "/images/products/1/product6.png",
      },
    ],
  },
  {
    group: 4,
    title: "ЭНЕРГЕТИКА",
    products: [
      {
        id: 20,
        title: "DG",
        image: "/images/products/4/product1.png",
      },
      {
        id: 21,
        title: "HD",
        image: "/images/products/4/product2.png",
      },
      {
        id: 22,
        title: "HLB, ZLB",
        image: "/images/products/4/product3.png",
      },
      {
        id: 23,
        title: "LCX",
        image: "/images/products/4/product4.png",
      },
    ],
  },
];

const getGroupData = () => {
  currentGroup.value = dummyGroups.find(
    (item) => +item.group === +route.params.group
  );
  pageTitle.value = `KQ Pumps :: ${currentGroup.value.title}`;
  currentGroup.value.loaded = true;
};
</script>

<template>
  <div v-if="currentGroup.loaded" class="2xl:px-10 xl:px-8 lg:px-6 px-4">
    <Breadcrumbs
      :current="[
        {
          title: 'Группы продукции',
          url: '/products',
        },
        {
          title: currentGroup.title.split(' ').slice(0, 4).join(' ') + '...',
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
            v-for="prod in currentGroup.products"
            :to="`/product/${prod.id}`"
            :key="prod.id"
            class="flex flex-col gap-4 lg:gap-6 items-center justify-center pb-6 hover:outline hover:outline-shade-300"
          >
            <img
              :src="prod.image"
              alt=""
              class="h-[320px] 3xl:h-[360px] w-full object-contain"
            />
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
