<script setup>
defineProps(["title", "toggleModal"]);
import { ref } from "vue";

const step = ref("form"); // 'success' | 'error'
</script>

<template>
  <div
    v-if="step === 'form'"
    class="fixed w-full h-screen top-0 left-0 z-50 flex items-center justify-center"
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-black opacity-50"
      @click="toggleModal"
    ></div>
    <div
      class="mx-auto w-full max-w-[860px] relative bg-shade-100 p-4 lg:p-6 3xl:p-10 max-h-screen overflow-auto"
    >
      <button @click="toggleModal" class="absolute top-0 right-1 p-2 xl:p-4">
        <i class="icon-close text-lg lg:text-xl 3xl:text-3xl"></i>
      </button>
      <h2 class="line">{{ title || "Связаться с нами" }}</h2>
      <form class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 modal-form">
        <div class="form-control required error">
          <label for="name">имя</label>
          <input type="text" id="name" />
          <span>Введите имя</span>
        </div>
        <div class="form-control required">
          <label for="phone">Телефон</label>
          <input type="tel" id="phone" />
          <span>Введите номер телефона</span>
        </div>
        <div class="form-control required">
          <label for="email">Email</label>
          <input type="email" id="email" />
          <span>Введите E-Mail</span>
        </div>
        <div class="form-control required">
          <label for="city">город</label>
          <input type="text" id="city" />
          <span>Введите название города</span>
        </div>
        <div class="form-control required lg:col-span-2">
          <label for="message">сообщение</label>
          <textarea id="message" rows="4"></textarea>
          <span>Введите ваше сообщение</span>
        </div>
        <div class="flex gap-6">
          <button
            class="btn bg-primary text-white hover:bg-secondary hover:border-secondary"
            type="submit"
            @click="step = 'success'"
          >
            Отправить
          </button>
          <button
            class="btn whitespace-nowrap"
            type="button"
            @click="step = 'error'"
          >
            Показать ошибку (тест)
          </button>
        </div>
      </form>
    </div>
  </div>
  <div
    v-if="step === 'success'"
    class="fixed w-full h-screen top-0 left-0 z-50 flex items-center justify-center"
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-black opacity-50"
      @click="toggleModal"
    ></div>
    <div
      class="mx-auto w-full max-w-[860px] max-h-[532px] relative bg-shade-100 p-4 lg:p-6 3xl:p-10 h-screen overflow-auto flex flex-col items-center justify-center gap-8"
    >
      <button @click="toggleModal" class="absolute top-0 right-1 p-2 xl:p-4">
        <i class="icon-close text-lg lg:text-xl 3xl:text-3xl"></i>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="120"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M25 58L51.25 85L95 40"
          stroke="#30D8A8"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h3
        class="text-lg lg:text-xl 2xl:text-2xl fon-bold text-center uppercase font-bold"
      >
        сообщение оправлено!
      </h3>
      <button
        class="btn bg-primary text-white hover:bg-secondary hover:border-secondary"
        type="submit"
        @click="toggleModal"
      >
        Вернуться
      </button>
    </div>
  </div>
  <div
    v-if="step === 'error'"
    class="fixed w-full h-screen top-0 left-0 z-50 flex items-center justify-center"
  >
    <div
      class="absolute top-0 left-0 w-full h-full bg-black opacity-50"
      @click="toggleModal"
    ></div>
    <div
      class="mx-auto w-full max-w-[860px] max-h-[532px] relative bg-shade-100 p-4 lg:p-6 3xl:p-10 h-screen overflow-auto flex flex-col items-center justify-center gap-8"
    >
      <button @click="toggleModal" class="absolute top-0 right-1 p-2 xl:p-4">
        <i class="icon-close text-lg lg:text-xl 3xl:text-3xl"></i>
      </button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <path
          d="M1 71L36 36M36 36L71 1.00007M36 36L1 1M36 36L71 70.9999"
          stroke="#FF0000"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <h3
        class="text-lg lg:text-xl 2xl:text-2xl fon-bold text-center uppercase font-bold"
      >
        сообщение оправлено!
      </h3>
      <button
        class="btn bg-primary text-white hover:bg-secondary hover:border-secondary"
        type="submit"
        @click="toggleModal"
      >
        Вернуться
      </button>
    </div>
  </div>
</template>
