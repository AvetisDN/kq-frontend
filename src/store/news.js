import { defineStore } from "pinia";
import { ref } from "vue";

export const useNewsStore = defineStore("alerts", () => {
  const newsType = ref(0);
  return { newsType };
});
