<script setup>
import Map from "./Map.vue";
import Feedback from "./Feedback.vue";
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import { useHead } from "@vueuse/head";
import { onMounted, computed, ref } from "vue";
import axios from "axios";

import { contactsStore } from "./contactsStore";
import Persons from "./Persons.vue";

const store = contactsStore();

const contact = ref({});
const contactLoaded = ref(false);

useHead({
  title: "KQ Pumps :: Контакты",
  meta: [
    {
      name: `description`,
      content: "this is contact page",
    },
  ],
});

onMounted(async () => {
  const { data } = await axios.get("/api/contacts");
  store.data = data.data;
  contact.value = data.data.contacts;
  contactLoaded.value = true;
});
</script>

<template>
  <div class="2xl:px-10 xl:px-8 lg:px-6 px-4" v-if="contactLoaded">
    <Breadcrumbs current="Контакты" />

    <h1>Контакты</h1>
    <div class="flex flex-col lg:flex-row gap-4 xl:gap-6">
      <div
        class="bg-shade-100 p-4 md:p-5 lg:p-6 3xl:p-10 rounded xl:rounded-lg uppercase flex flex-col font-bold lg:text-lg xl:text-xl 3xl:text-2xl grow lg:basis-1/2"
      >
        <h4 class="text-sm font-normal mb-4">центральный офис</h4>
        <p v-html="contact.address.replace(/\n/g, '<br>')"></p>
      </div>
      <div
        class="bg-shade-100 p-4 md:p-5 lg:p-6 3xl:p-10 rounded xl:rounded-lg uppercase flex flex-col sm:flex-row font-bold lg:text-lg xl:text-xl 3xl:text-2xl grow lg:basis-1/2"
      >
        <div class="grow">
          <h4 class="text-sm font-normal mb-4">Телефон</h4>
          <p v-for="item in contact.phones">
            <a :href="'tel:' + item.phone">{{ item.phone }}</a>
          </p>
        </div>
        <div class="grow mt-10 sm:mt-0">
          <h4 class="text-sm font-normal mb-4">EMAIL</h4>
          <p v-for="item in contact.emails">
            <a :href="'mailto:' + item.email">{{ item.email }}</a>
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row gap-4 xl:gap-6 mt-6">
      <div
        class="bg-shade-100 p-4 md:p-5 lg:p-6 3xl:p-10 rounded xl:rounded-lg uppercase flex flex-col font-bold lg:text-lg xl:text-xl 3xl:text-2xl grow lg:basis-1/2"
      >
        <h4 class="text-sm font-normal mb-4">Режим работы</h4>
        <p>{{ contact.working_hours }}</p>
      </div>
      <div
        class="bg-shade-100 p-4 md:p-5 lg:p-6 3xl:p-10 rounded xl:rounded-lg uppercase flex flex-col sm:flex-row font-bold lg:text-lg xl:text-xl 3xl:text-2xl grow lg:basis-1/2"
      >
        <div class="grow">
          <h4 class="text-sm font-normal mb-4">Отел Технической Поддержки</h4>
          <p>
            <a href="mailto:ru_support@kaiquan.com.cn"
              >ru_support@kaiquan.com.cn</a
            >
          </p>
        </div>
        <div class="grow mt-10 sm:mt-0">
          <h4 class="text-sm font-normal mb-4">
            Отдел Логистики и Оформления Заказов
          </h4>
          <p>
            <a href="mailto:ru_logistics@kaiqua.com.cn"
              >ru_logistics@kaiqua.com.cn</a
            >
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row gap-4 xl:gap-6 mt-4 xl:mt-6">
      <div
        class="lg:basis-1/2 flex flex-col gap-4 lg:gap-6 xl:gap-10 2xl:gap-14 3xl:gap-20 basis-1/2"
      >
        <h2 class="line mb-0">РЕКВИЗИТЫ</h2>
        <ul class="requisites">
          <li>
            <span>Полное наименование</span>
            <p>{{ contact.requisite_name }}</p>
          </li>
          <li>
            <span>юридический адрес</span>
            <p>{{ contact.requisite_address }}</p>
          </li>
          <li>
            <span>инн</span>
            <p>{{ contact.requisite_inn }}</p>
          </li>
          <li>
            <span>КПП</span>
            <p>{{ contact.requisite_kpp }}</p>
          </li>
          <li>
            <span>огрн</span>
            <p>{{ contact.requisite_ogrn }}</p>
          </li>
          <li>
            <span>окпо</span>
            <p>{{ contact.requisite_okpo }}</p>
          </li>
          <li>
            <span>БАНК</span>
            <p>{{ contact.requisite_bank }}</p>
          </li>
          <li>
            <span>р/с</span>
            <p>{{ contact.requisite_rs }}</p>
          </li>
          <li>
            <span>к/с</span>
            <p>{{ contact.requisite_ks }}</p>
          </li>
          <li>
            <span>БИК</span>
            <p>044525225</p>
          </li>
        </ul>
      </div>
      <Map />
      <!-- <div
        class="flex grow md:basis-1/2 bg-cover bg-center rounded xl:rounded-lg"
        style="background-image: url(/images/contact/img1.jpg)"
      ></div> -->
    </div>
    <div class="mt-40">
      <Persons />
      <Feedback />
    </div>
  </div>
</template>
