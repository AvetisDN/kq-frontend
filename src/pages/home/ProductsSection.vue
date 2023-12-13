<script setup></script>

<template>
  <div class="flex flex-col gap-6 md:gap-8 lg:gap-10 xl:gap-12">
    <router-link class="big-link" to="/about">
      продукция
      <i class="icon-maximize"></i>
    </router-link>
    <div class="grid grid-cols-1 lg:grid-cols-2">
      <router-link
        to="/products/1"
        class="flex flex-col gap-4 lg:gap-6 items-center justify-center pb-6 hover:outline hover:outline-shade-300"
      >
        <img src="/images/home/prod-1.png" alt="" />
        <h4 class="font-bold uppercase text-xl lg:text-2xl xl:text-3xl">
          ВОДОСНАБЖЕНИЕ И ПОВЫШЕНИЕ ДАВЛЕНИЯ
        </h4>
      </router-link>
      <router-link
        to="/products/2"
        class="flex flex-col gap-4 lg:gap-6 items-center justify-center pb-6 hover:outline hover:outline-shade-300"
      >
        <img src="/images/home/prod-2.png" alt="" />
        <h4 class="font-bold uppercase text-xl lg:text-2xl xl:text-3xl">
          ВОДООТВЕДЕНИЕ
        </h4>
      </router-link>
      <router-link
        to="/products/3"
        class="flex flex-col gap-4 lg:gap-6 items-center justify-center pb-6 hover:outline hover:outline-shade-300"
      >
        <img src="/images/home/prod-3.png" alt="" />
        <h4 class="font-bold uppercase text-xl lg:text-2xl xl:text-3xl">
          Отопление
        </h4>
      </router-link>
      <router-link
        to="/products/4"
        class="flex flex-col gap-4 lg:gap-6 items-center justify-center pb-6 hover:outline hover:outline-shade-300"
      >
        <img src="/images/home/prod-4.png" alt="" />
        <h4 class="font-bold uppercase text-xl lg:text-2xl xl:text-3xl">
          Энергетика
        </h4>
      </router-link>
    </div>
  </div>
</template>
