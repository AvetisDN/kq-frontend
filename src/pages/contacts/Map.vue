<script setup>
import {
  YandexMap,
  YandexMapControls,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapZoomControl,
  YandexMapMarker,
  YandexMapDefaultMarker,
} from "vue-yandex-maps";
import { cities } from "./citiesData";
import { computed, onMounted, shallowRef, ref } from "vue";
import { contactsStore } from "./contactsStore";

const store = contactsStore();
const contactData = computed(() => {
  return store.data;
});

const center = [55.450797, 52.909868];
const zoom = 5;

const mapSettings = {
  apiKey: "9fa90fbc-ce5f-4dc9-ae6d-433e0ec7338b",
  lang: "ru_RU",
  location: {
    center,
    zoom,
  },
  zoomRange: { min: 5, max: 15 },
};

const mapObj = shallowRef(null);
const openMarker = ref(null);
</script>

<template>
  <div class="mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
    <h2 class="line">ПРЕДСТАВИТЕЛЬСТВА В РФ И РБ</h2>
    <div class="-mx-4 lg:-mx-6 xl:-mx-8 2xl:-mx-10">
      <yandex-map
        v-model="mapObj"
        :settings="mapSettings"
        :height="'calc(100vh - 200px)'"
      >
        <yandex-map-default-scheme-layer :settings="{ theme: 'light' }" />
        <yandex-map-default-features-layer />
        <yandex-map-controls :settings="{ position: 'right' }">
          <yandex-map-zoom-control />
        </yandex-map-controls>
        <yandex-map-marker
          v-for="(location, index) in cities"
          :settings="{
            coordinates: [location.geo.lon, location.geo.lat],
            onClick: () => (openMarker = index),
            zIndex: openMarker === index ? 1 : 0,
          }"
          :key="index"
        >
          <div class="relative">
            <img
              alt=""
              :src="'/images/location.png'"
              :style="{
                minWidth: '50px',
                position: 'relative',
                boxSizing: 'border-box',
                transform: 'translate(-50%, calc(-50% - 24px))',
                cursor: 'pointer',
              }"
            />
            <div
              v-if="openMarker === index"
              class="absolute bg-white px-3 py-2 rounded-md shadow-md top-1 left-0 -translate-x-1/2 flex flex-col gap-0.5 whitespace-nowrap"
              @click.stop="openMarker = null"
            >
              <button
                @click.stop="openMarker = null"
                class="absolute top-1 right-2 text-2xl"
              >
                &times;
              </button>
              <div class="flex gap-2">
                <span class="">Город:</span>
                <span class="font-bold">{{ location.name }}</span>
              </div>
              <div class="flex gap-2">
                <span class="">Представитель:</span>
                <span class="font-bold">{{ location.person }}</span>
              </div>
              <div class="flex gap-2">
                <span class="">Телефон:</span>
                <span class="font-bold">{{ location.phone }}</span>
              </div>
              <div class="flex gap-2">
                <span class="">E-Mail:</span>
                <span class="font-bold">{{ location.email }}</span>
              </div>
            </div>
          </div>
        </yandex-map-marker>
      </yandex-map>
    </div>
    <!--		<div class="-mx-4 lg:-mx-6 xl:-mx-8 2xl:-mx-10">-->
    <!--			<img src="/images/contact/map.jpg" alt=""/>-->
    <!--		</div>-->
    <div class="my-8 lg:my-10 xl:my-12 3xl:my-14">
      <div v-for="item in contactData.agencies">
        <div
          class="flex 3xl:gap-32 2xl:gap-24 xl:gap-20 lg:gap-16 md:gap-12 gap-4 flex-col md:flex-row"
        >
          <h3 class="w-[340px] text-2xl lg:text-3xl uppercase font-bold">
            {{ item.city }}
          </h3>
          <div class="text-sm text-shade-300 font-medium flex gap-4">
            <img
              :src="item.photo"
              alt=""
              class="h-40 border-shade-200 border"
            />
            <div>
              <h4
                class="uppercase font-normal text-shade-900 text-base mb-2 lg:mb-3 2xl:mb-4"
              >
                {{ item.name }}
              </h4>
              <p>
                {{ item.phone }}
              </p>
              <p>
                {{ item.email }}
              </p>
            </div>
          </div>
        </div>
        <div class="h-px bg-shade-900 my-4 lg:my-6 2xl:my-8"></div>
      </div>
    </div>
  </div>
</template>
