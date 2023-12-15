<script setup></script>

<template>
  <div class="mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
    <h2 class="line">ГЛАВНЫЕ ПРОДУКТЫ</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <router-link
        to="/product/10"
        class="relative hover:outline hover:outline-shade-300"
      >
        <img class="mx-auto" src="/images/about/top1.png" alt="" />
        <h4
          class="text-xl lg:text-2xl 2xl:text-[32px] font-bold absolute bottom-14 lg:bottom-2 xl:bottom-10 w-full text-center"
        >
          WQ
        </h4>
      </router-link>
      <router-link
        to="/product/12"
        class="relative hover:outline hover:outline-shade-300"
      >
        <img class="mx-auto" src="/images/about/top2.png" alt="" />
        <h4
          class="text-xl lg:text-2xl 2xl:text-[32px] font-bold absolute bottom-14 lg:bottom-2 xl:bottom-10 w-full text-center"
        >
          WQS
        </h4>
      </router-link>
      <router-link
        to="/product/17"
        class="relative hover:outline hover:outline-shade-300"
      >
        <img class="mx-auto" src="/images/about/top3.png" alt="" />
        <h4
          class="text-xl lg:text-2xl 2xl:text-[32px] font-bold absolute bottom-14 lg:bottom-2 xl:bottom-10 w-full text-center"
        >
          KQSN
        </h4>
      </router-link>
      <router-link
        to="/product/1"
        class="relative hover:outline hover:outline-shade-300"
      >
        <img class="mx-auto" src="/images/about/top4.png" alt="" />
        <h4
          class="text-xl lg:text-2xl 2xl:text-[32px] font-bold absolute bottom-14 lg:bottom-2 xl:bottom-10 w-full text-center"
        >
          KQDP
        </h4>
      </router-link>
    </div>
    <div class="flex justify-center">
      <router-link to="/products" class="btn-large mt-10 mx-auto">
        смотреть все продукты
      </router-link>
    </div>
  </div>
</template>
