<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";

const menuItems = [
  {
    group: 1,
    title: "ВОДОСНАБЖЕНИЕ И ПОВЫШЕНИЕ ДАВЛЕНИЯ",
    products: [
      {
        id: 1,
        title: "KQDP, KQDQ",
      },
      {
        id: 2,
        title: "KQL, KQW",
      },
      {
        id: 3,
        title: "KQDL, KQDW",
      },
      {
        id: 4,
        title: "KQSN",
      },
      {
        id: 5,
        title: "KQDS, KQHS",
      },
      {
        id: 7,
        title: "KQW-X",
      },
      {
        id: 8,
        title: "KQWS",
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
      },
      {
        id: 10,
        title: "WQ 30 кВт и выше",
      },
      {
        id: 11,
        title: "WQE, WQEC",
      },
      {
        id: 12,
        title: "WQS, WQES",
      },
      {
        id: 13,
        title: "WL, WLD",
      },
      {
        id: 14,
        title: "HQ, ZQ",
      },
    ],
  },
  {
    group: 3,
    title: "ОТОПЛЕНИЕ",
    products: [
      {
        id: 15,
        title: "KQDP",
      },
      {
        id: 16,
        title: "KQL, KQW",
      },
      {
        id: 17,
        title: "KQSN",
      },
      {
        id: 18,
        title: "KQW-X",
      },
      {
        id: 19,
        title: "KQDS, KQHS",
      },
      {
        id: 6,
        title: "KQH, KQWH",
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
      },
      {
        id: 21,
        title: "HD",
      },
      {
        id: 22,
        title: "HLB, ZLB",
      },
      {
        id: 23,
        title: "LCX",
      },
    ],
  },
];

const router = useRouter();

const handleClick = (group) => router.push(`/products/${group}`);
</script>

<template>
  <div class="news-types 3xl:grow 3xl:w-80 3xl:shrink-0 max-w-sm">
    <div v-for="item in menuItems" class="relative">
      <button
        class="flex items-center justify-between gap-6 w-full"
        :class="{
          active: router.currentRoute.value.params.group == item.group,
        }"
        @click="handleClick(item.group)"
      >
        <span class="whitespace-normal text-left">{{ item.title }}</span>
        <div
          :class="{
            'rotate-180': router.currentRoute.value.params.group == item.group,
          }"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 9L12 15L6 9"
              stroke="#1C1C1C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>
      <div
        v-if="+router.currentRoute.value.params.group === item.group"
        class="pt-3 lg:pt-4 2xl:pt-6 2xl:pl-10 flex 2xl:flex-col gap-2 lg:gap-3 2xl:gap-4 absolute 2xl:relative"
      >
        <button
          v-for="prod in item.products"
          @click="router.push(`/product/${prod.id}`)"
          class="active"
        >
          {{ prod.title }}
        </button>
      </div>
    </div>
  </div>
</template>
