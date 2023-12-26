script
<script setup>
import { onMounted, ref } from "vue";
const activeSlide = ref(0);

const sliderData = [
  {
    title: "ПРОИЗВОДСТВО",
    header: "крупнейший производитель насосного оборудования в китае",
    digits: [
      {
        title: "предприятий",
        number: "7",
      },
      {
        title: "индустриальных зон",
        number: "5",
      },
      {
        title: "суммарная площадь производства",
        number: "350000 м²",
      },
      {
        title: "единиц продукции в год",
        number: ">1000000",
      },
    ],
  },
  {
    title: "КОМПАНИЯ",
    header: "ПРИЗНАННЫЙ ЛИДЕР ОТРАСЛИ В КИТАЕ",
    digits: [
      {
        title: "сотрудников",
        number: "7000",
      },
      {
        title: "инженеров",
        number: "1200",
      },
    ],
  },
  {
    title: "НИОКР",
    header: "ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ И НАУЧНЫЕ РАЗРАБОТКИ",
    digits: [
      {
        title: "патентов",
        number: "600",
      },
      {
        title: "национальных и отраслевых стандартов",
        number: "56",
      },
    ],
  },
];
</script>

<template>
  <div
    class="aspect-video lg:aspect-auto bg-shade-900 flex justify-center items-center video-container lg:h-[calc(56vw-65px)] xl:h-[calc(56vw-73px)] 2xl:h-[calc(56vw-84px)] lg:max-h-[calc(100vh-65px)] xl:max-h-[calc(100vh-73px)] 2xl:max-h-[calc(100vh-84px)] min-h-[450px] lg:min-h-[475px] xl:min-h-[585px]"
  >
    <!-- max-h-[calc(100vh-65px)] xl:max-h-[calc(100vh-65px)] 2xl:max-h-[calc(100vh-85px)] -->
    <video-background src="/video/bg-crop.mp4" class="h-full relative">
      <div
        class="absolute w-full h-full bg-black bg-opacity-80 2xl:py-[72px] xl:py-14 lg:py-10 md:py-8 py-4 2xl:px-10 xl:px-8 lg:px-6 px-4 text-white"
      >
        <div class="absolute bottom-10 md:bottom-10 right-20 md:left-0">
          <img
            src="../../assets/images/lines-white.png"
            alt=""
            class="w-40 md:w-48 lg:w-80 3xl:w-auto"
          />
        </div>
        <div class="slider">
          <div
            v-for="(item, index) in sliderData"
            class="slide"
            :class="{ active: activeSlide === index }"
          >
            <button class="slider-btn" @click="activeSlide = index">
              <span>0{{ index + 1 }}</span>
              {{ item.title }}
            </button>
            <h2 v-if="activeSlide === index">{{ item.header }}</h2>
          </div>
          <div
            v-for="(item, index) in sliderData"
            class="hidden md:block"
            :class="{ active: activeSlide === index }"
          >
            <Transition name="fade">
              <div class="digits" v-if="activeSlide === index">
                <div class="digits-item" v-for="digitItem in item.digits">
                  <h3>{{ digitItem.number }}</h3>
                  <span>{{ digitItem.title }}</span>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </video-background>
  </div>
  <div v-for="(item, index) in sliderData">
    <div class="digits-mobile" v-if="activeSlide === index">
      <div class="digits-item" v-for="digitItem in item.digits">
        <h3>{{ digitItem.number }}</h3>
        <span>{{ digitItem.title }}</span>
      </div>
    </div>
  </div>
</template>
<style>
.slide-down-enter-active,
.slide-down-leave-active {
  height: auto;
  max-height: 600px;
  transition: all 1s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  height: 0;
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
