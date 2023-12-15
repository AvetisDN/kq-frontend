<script setup>
import { ref } from "vue";
const data = [
  {
    year: 1995,
    image: "/images/about/1995.jpg",
    title: "Основание компании",
  },
  {
    year: 1996,
    image: "/images/about/1996.jpg",
    title: "Разработка и выпуск насосов серии KQL",
  },
  {
    year: 1998,
    image: "/images/about/1998.jpg",
    title: "Ввод в эксплуатацию индустриального парка Шанхай",
  },
  {
    year: 2000,
    image: "/images/about/2000.jpg",
    title:
      "Индустриальный парк Шанхай получает государственную премию Китая за инновации",
  },
  {
    year: 2002,
    image: "/images/about/2001.jpg",
    title: "Ввод в эксплуатацию индустриального парка Чжецян",
  },
  {
    year: 2003,
    image: "/images/about/2003.jpg",
    title: "Продажи превысили 100 миллионов юаней в месяц",
  },
  {
    year: 2005,
    image: "/images/about/2005.jpg",
    title: "Основание компании Kaiquan Petrochemical Pump Co. Ltd.",
    title2: "Основание компании Shijiazhuang Impurity Pump Co. Ltd.",
  },
  {
    year: 2007,
    image: "/images/about/2007.jpg",
    title:
      "Насосы серии WQ получили китайскую национальную премию за научно-технический прогресс",
  },
  {
    year: 2008,
    image: "/images/about/2008.jpg",
    title: "Основание Hefei Kaiquan Electric Pump Co. Ltd.",
  },
  {
    year: 2011,
    image: "/images/about/2011.jpg",
    title:
      "Лицензия на проектирование и производство оборудования для ядерной энергетики",
    title2: "Первые поставки оборудования в РФ",
  },
  {
    year: 2013,
    image: "/images/about/2013.jpg",
    title: "Ввод в эксплуатацию цеха по производству тяжелой техники",
  },
  {
    year: 2014,
    image: "/images/about/2014.jpg",
    title: "Прохождение экспертизы циркулярного насоса для АЭС",
  },
  {
    year: 2017,
    image: "/images/about/2017.jpg",
    title: "Поставка оборудования на АЭС Хинкли-Поинт, Великобритания",
  },
  {
    year: 2020,
    image: "/images/about/2020.jpg",
    title: "Продажи превысили 800 миллионов юаней в месяц",
  },
  {
    year: 2021,
    image: "/images/about/2021.jpg",
    title: "Национальная премия лидера в строительной сфере в Китае",
  },
  {
    year: 2022,
    image: "/images/about/2022.jpg",
    title:
      "Открытие российского представительства концерна SHANGHAI KAIQUAN PUMP (GROUP)",
  },
];

const selected = ref(0);
</script>

<template>
  <div>
    <h2 class="line">История компании</h2>
    <div
      class="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-40 2xl:gap-32 3xl:gap-40 items-start"
    >
      <div class="grid grid-cols-4 gap-1 lg:gap-2 lg:shrink-0">
        <button
          v-for="(item, index) in data"
          class="py-2 px-2 md:py-3 md:px-4 xl:py-4 xl:px-5 3xl:py-5 3xl:px-10 font-bold text-xl md:text-2xl xl:text-3xl 3xl:text-[32px] rounded-lg"
          :class="{
            'text-white': index === selected,
            'bg-primary': index === selected,
            'bg-shade-100': index !== selected,
            'text-primary': index !== selected,
          }"
          @click="selected = index"
        >
          {{ item.year }}
        </button>
      </div>
      <div class="flex flex-col gap-6 lg:-translate-y-40">
        <img :src="data[selected].image" alt="" class="max-w-md w-full" />
        <div
          class="text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[96px] font-bold text-primary xl:leading-normal 2xl:leading-normal 3xl:leading-normal"
        >
          {{ data[selected].year }}
        </div>
        <div
          class="text-xl md:text-2xl xl:text-3xl xl:leading-normal 2xl:leading-normal 3xl:leading-normal"
        >
          {{ data[selected].title }}
        </div>
        <div
          class="text-xl md:text-2xl xl:text-3xl xl:leading-tight 2xl:leading-tight 3xl:leading-tight"
          v-if="data[selected].title2"
        >
          {{ data[selected].title2 }}
        </div>
      </div>
    </div>
  </div>
</template>
