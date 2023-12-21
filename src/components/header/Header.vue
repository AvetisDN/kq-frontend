<script setup>
import Logo from "./Logo.vue";
import CatalogButton from "./CatalogButton.vue";
import SearchButton from "./SearchButton.vue";
import SearchField from "./SearchField.vue";
import Menu from "./Menu.vue";
import CitySelector from "./CitySelector.vue";
import Phones from "@/components/header/Phones.vue";
import { ref } from "vue";
import MenuButton from "./MenuButton.vue";
import { storeToRefs } from "pinia";
import { useMenuStore } from "../../store/menu";

const store = useMenuStore();
const { showMenu } = storeToRefs(store);
const { toggleMenu } = store;

const showSearch = ref(false);
// const showMenu = ref(false);
const toggleSearch = () => (showSearch.value = !showSearch.value);
// const toggleMenu = () => (showMenu.value = !showMenu.value);
</script>

<template>
  <div
    class="fixed w-full h-full top-0 left-0 z-10"
    v-if="showMenu"
    @click="toggleMenu"
  ></div>
  <div
    class="flex px-3 md:px-4 lg:px-6 3xl:px-10 relative border-b border-shade-900"
  >
    <Logo />
    <CatalogButton />
    <SearchButton @toggle="toggleSearch" />
    <MenuButton @toggle="toggleMenu" />
    <div class="header-menu-container" :class="{ open: showMenu }">
      <Menu />
      <Phones />
      <CitySelector />
    </div>
    <Transition name="slide-fade">
      <SearchField v-if="showSearch" @toggle="toggleSearch" />
    </Transition>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.4s ease;
}

.slide-fade-leave-active {
  transition: all 0.4s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
