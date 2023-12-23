<script setup></script>

<template>
  <div class="mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
    <h2 class="line">ГЛАВНЫЕ ПРОДУКТЫ</h2>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      <router-link
        to="/product/10"
        class="relative border-2 border-white hover:border-shade-300 pb-6"
      >
        <img
          class="mx-auto h-[320px] w-full object-contain"
          src="/images/top-products/WQ.png"
          alt=""
        />
        <h4
          class="text-xl lg:text-2xl 2xl:text-[32px] font-bold mt-4 w-full text-center"
        >
          WQ
        </h4>
      </router-link>
      <router-link
        to="/product/12"
        class="relative border-2 border-white hover:border-shade-300 pb-6"
      >
        <img
          class="mx-auto h-[320px] w-full object-contain"
          src="/images/top-products/WQS.png"
          alt=""
        />
        <h4
          class="text-xl lg:text-2xl 2xl:text-[32px] font-bold mt-4 w-full text-center"
        >
          WQS
        </h4>
      </router-link>
      <router-link
        to="/product/17"
        class="relative border-2 border-white hover:border-shade-300 pb-6"
      >
        <img
          class="mx-auto h-[320px] w-full object-contain"
          src="/images/top-products/KQSN.png"
          alt=""
        />
        <h4
          class="text-xl lg:text-2xl 2xl:text-[32px] font-bold mt-4 w-full text-center"
        >
          KQSN
        </h4>
      </router-link>
      <router-link
        to="/product/1"
        class="relative border-2 border-white hover:border-shade-300 pb-6"
      >
        <img
          class="mx-auto h-[320px] w-full object-contain"
          src="/images/top-products/KQDP.png"
          alt=""
        />
        <h4
          class="text-xl lg:text-2xl 2xl:text-[32px] font-bold mt-4 w-full text-center"
        >
          KQDP
        </h4>
      </router-link>
    </div>
    <div class="flex justify-center">
      <router-link to="/products" class="btn-large mt-10 mx-auto pb-6">
        смотреть все продукты
      </router-link>
    </div>
  </div>
</template>
