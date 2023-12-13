<script setup>
defineProps(["activeTab", "changeTab"]);
</script>

<template>
  <div
    class="flex flex-wrap gap-4 md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 3xl:gap-24"
  >
    <button
      class="btn-tabs"
      @click="changeTab(0)"
      :class="{ active: activeTab === 0 }"
    >
      Описание
    </button>
    <button
      class="btn-tabs"
      @click="changeTab(1)"
      :class="{ active: activeTab === 1 }"
    >
      Характеристики
    </button>
    <button
      class="btn-tabs"
      @click="changeTab(2)"
      :class="{ active: activeTab === 2 }"
    >
      Документы
    </button>
  </div>
</template>
