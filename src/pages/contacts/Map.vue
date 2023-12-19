<script setup>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import { cities } from "./citiesData";
import { shallowRef, ref } from "vue";

const center = [55.450797, 52.909868];
const zoom = 4;

const mapSettings = {
  apiKey: import.meta.env.VITE_MAP_KEY,
  lang: "ru_RU",
  coords: center,
  zoom: zoom,
  zoomRange: { min: 5, max: 15 },
  enterprise: false,
  version: "2.1",
};

const mapObj = shallowRef(null);
const openMarker = ref(null);
const openMarkerFn = (index) => {
  openMarker.value = index;
  let location = cities[openMarker.value];
};
const baloonTemplate = (location) => {
  return `<div class="relative">
            <img
              alt=""
              src="/images/location.png"
              style="
              min-width: 50px;
              position: relative;
              box-sizing: border-box;

              cursor: pointer;"
            />
            <div>
              <div class="flex gap-2">
                <span class="">Город:</span>
                <span class="font-bold">${location.name}</span>
              </div>
              <div class="flex gap-2">
                <span class="">Представитель:</span>
                <span class="font-bold">${
                  Array.isArray(location.person)
                    ? location.person[0]
                    : location.person
                }</span>
              </div>
              <div class="flex gap-2">
                <span class="">Телефон:</span>
                <span class="font-bold">${
                  Array.isArray(location.phone)
                    ? location.phone[0]
                    : location.phone
                }></span>
              </div>
              <div class="flex gap-2">
                <span class="">E-Mail:</span>
                <span class="font-bold">${
                  Array.isArray(location.email)
                    ? location.email[0]
                    : location.email
                }></span>
              </div>
              
              ${
                Array.isArray(location.person)
                  ? `<div class="w-full h-0.5 my-2 bg-shade-300"></div>
              <div class="flex gap-2">
                <span class="">Представитель:</span>
                <span class="font-bold">${
                  Array.isArray(location.person) && location.person[1]
                }</span>
              </div>
              <div class="flex gap-2">
                <span class="">Телефон:</span>
                <span class="font-bold">${
                  Array.isArray(location.phone) && location.phone[1]
                }></span>
              </div>
              <div class="flex gap-2">
                <span class="">E-Mail:</span>
                <span class="font-bold">${
                  Array.isArray(location.email) && location.email[1]
                }></span>
              </div>`
                  : ""
              }
            </div>
          </div>`;
};
</script>

<template>
  <div class="lg:basis-1/2 mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
    <div class="-mx-4 lg:-mx-6 xl:-mx-8 2xl:-mx-10">
      <yandex-map
        v-model="mapObj"
        :settings="mapSettings"
        :coords="center"
        :zoom="zoom"
        :scroll-zoom="false"
        style="height: 600px"
      >
        <ymap-marker
          v-for="(location, index) in cities"
          :coords="[location.geo.lat, location.geo.lon]"
          @click="openMarkerFn(index)"
          :key="index"
          :marker-id="index"
          :balloon-template="baloonTemplate(location)"
        >
        </ymap-marker>
      </yandex-map>
    </div>
    <!--		<div class="-mx-4 lg:-mx-6 xl:-mx-8 2xl:-mx-10">-->
    <!--			<img src="/images/contact/map.jpg" alt=""/>-->
    <!--		</div>-->
  </div>
</template>
