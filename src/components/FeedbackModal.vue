<script setup>
defineProps(["title", "toggleModal"]);
import { ref, computed } from "vue";

const step = ref("form"); // 'success' | 'error'

import {useToast} from "vue-toastification";
import axios from "axios"

const toast = useToast();

import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

const formDataTemplate = {
	name: '',
	phone: '',
	email: '',
	city: '',
	message: '',
}

const formData = ref(Object.assign({}, formDataTemplate));

const formSaving = ref(false);

const rules = computed(() => {
	return {
		name: { required }, // Matches state.firstName
		phone: { required }, // Matches state.lastName
		city: { required }, // Matches state.lastName
		message: { required }, // Matches state.lastName
		email: { required, email } // Matches state.contact.email

	}
});

const v$ = useVuelidate(rules, formData)


const sendForm = async () => {
	if (formSaving.value) return;
	await v$.value.$validate();
	await v$.value.$touch();
	if (v$.value.$error) return;
	formSaving.value = true;
	try {
		const {data, status} = await axios.post('/api/feedback', formData.value);
		if(status === 200){
			toast.success("Ваше сообщение успешно отправлено");
			formData.value = Object.assign({}, formDataTemplate);
			v$.value.$reset();
		}
		formSaving.value = false;
		step.value = 'success';
	}catch (e){
		formSaving.value = false;
	}
}
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
      <form class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 modal-form" @submit.prevent="sendForm">
        <div class="form-control required" :class="{
			'error': v$.name.$error && v$.name.$dirty
        }">
          <label for="name">имя</label>
          <input type="text" id="name" v-model="formData.name"  />
          <span>Введите имя</span>
        </div>
        <div class="form-control required" :class="{
			'error': v$.phone.$error && v$.phone.$dirty
        }">
          <label for="phone">Телефон</label>
          <input type="tel" id="phone" v-model="formData.phone"  />
          <span>Введите номер телефона</span>
        </div>
        <div class="form-control required" :class="{
			'error': v$.email.$error && v$.email.$dirty
        }">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="formData.email"  />
          <span>Введите E-Mail</span>
        </div>
        <div class="form-control required" :class="{
			'error': v$.city.$error && v$.city.$dirty
        }">
          <label for="city">город</label>
          <input type="text" id="city" v-model="formData.city"  />
          <span>Введите название города</span>
        </div>
        <div class="form-control required lg:col-span-2" :class="{
			'error': v$.message.$error && v$.message.$dirty
        }">
          <label for="message">сообщение</label>
          <textarea id="message" v-model="formData.message" rows="4"></textarea>
          <span>Введите ваше сообщение</span>
        </div>
        <div class="flex gap-6">
          <button
            class="btn bg-primary text-white hover:bg-secondary hover:border-secondary"
            type="submit"
          >
            Отправить
          </button>
<!--          <button-->
<!--            class="btn whitespace-nowrap"-->
<!--            type="button"-->
<!--            @click="step = 'error'"-->
<!--          >-->
<!--            Показать ошибку (тест)-->
<!--          </button>-->
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
