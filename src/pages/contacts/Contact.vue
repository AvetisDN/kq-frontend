<script setup>
import Map from "./Map.vue";
import Feedback from "./Feedback.vue";
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import { useHead } from "@vueuse/head";

useHead({
  title: "KQ Pumps :: Контакты",
  meta: [
    {
      name: `description`,
      content: "this is contact page",
    },
  ],
});
</script>

<template>
  <div class="2xl:px-10 xl:px-8 lg:px-6 px-4">
    <Breadcrumbs current="Контакты" />

    <h1>Контакты</h1>
    <div class="flex flex-col lg:flex-row gap-4 xl:gap-6">
      <div
        class="bg-shade-100 p-4 md:p-5 lg:p-6 3xl:p-10 rounded xl:rounded-lg uppercase flex flex-col font-bold lg:text-lg xl:text-xl 3xl:text-2xl grow lg:basis-1/2"
      >
        <h4 class="text-sm font-normal mb-4">центральный офис</h4>
        <p>ООО “КЕЙ КЬЮ” 123592</p>
        <p>Москва, Кулакова, 20, корпус 1</p>
        <p>Технопарк “Орбита”, корпус “Альфа”</p>
      </div>
      <div
        class="bg-shade-100 p-4 md:p-5 lg:p-6 3xl:p-10 rounded xl:rounded-lg uppercase flex flex-col sm:flex-row font-bold lg:text-lg xl:text-xl 3xl:text-2xl grow lg:basis-1/2"
      >
        <div class="grow">
          <h4 class="text-sm font-normal mb-4">Телефон</h4>
          <p>
            <a href="tel:88003336666">8 800 333-66-66</a>
          </p>
          <p>
            <a href="tel:84951838883">8 495 183-88-83</a>
          </p>
        </div>
        <div class="grow mt-10 sm:mt-0">
          <h4 class="text-sm font-normal mb-4">EMAIL</h4>
          <p>
            <a href="mailto:russia@kaiquan.com.cn">russia@kaiquan.com.cn</a>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-4 xl:gap-6 mt-4 xl:mt-6">
      <div
        class="grow lg:basis-1/2 flex flex-col gap-4 lg:gap-6 xl:gap-10 2xl:gap-14 3xl:gap-20"
      >
        <div
          class="bg-shade-100 p-4 md:p-5 lg:p-6 3xl:p-10 rounded xl:rounded-lg uppercase flex flex-col font-bold lg:text-lg xl:text-xl 3xl:text-2xl"
        >
          <h4 class="text-sm font-normal mb-4">Режим работы</h4>
          <p>ПН - ПТ: с 09:00 до 18:00</p>
        </div>
        <h2 class="line mb-0">РЕКВИЗИТЫ</h2>
        <ul class="requisites">
          <li>
            <span>Полное наименование</span>
            <p>ООО "КЕЙ КЬЮ"</p>
          </li>
          <li>
            <span>юридический адрес</span>
            <p>123592, г.Москва, ул.Кулакова, д.20, стр. 1</p>
          </li>
          <li>
            <span>инн</span>
            <p>7734464841</p>
          </li>
          <li>
            <span>КПП</span>
            <p>773401001</p>
          </li>
          <li>
            <span>огрн</span>
            <p>1227700771715</p>
          </li>
          <li>
            <span>окпо</span>
            <p>78988225</p>
          </li>
          <li>
            <span>БАНК</span>
            <p>ПАО "Сбербанк" г.Москва</p>
          </li>
          <li>
            <span>р/с</span>
            <p>40702810238000217808</p>
          </li>
          <li>
            <span>к/с</span>
            <p>30101810400000000225</p>
          </li>
          <li>
            <span>БИК</span>
            <p>044525225</p>
          </li>
        </ul>
      </div>
      <div
        class="flex grow md:basis-1/2 bg-cover bg-center rounded xl:rounded-lg"
        style="background-image: url(/images/contact/img1.jpg)"
      ></div>
    </div>
    <div class="mt-40">
      <Map />
      <Feedback />
    </div>
  </div>
</template>
