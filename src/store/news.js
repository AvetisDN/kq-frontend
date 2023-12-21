import { defineStore } from "pinia";
import { ref } from "vue";

export const useNewsStore = defineStore("news", () => {
  const newsType = ref(0);
  return { newsType };
});
