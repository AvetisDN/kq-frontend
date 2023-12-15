<script setup>
import {useToast} from "vue-toastification";
import {ref, computed} from "vue";
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
	}catch (e){
		formSaving.value = false;
	}
}

</script>

<template>
  <div
    class="-mx-4 lg:-mx-6 xl:-mx-8 2xl:-mx-10 mt-6 lg:mt-14 xl:mt-20 2xl:mt-32 3xl:mt-40 2xl:px-10 xl:px-8 lg:px-6 px-4 bg-shade-100 py-10 md:py-16 xl:py-20 3xl:py-[90px]"
  >
    <div class="mx-auto max-w-[1440px]">
      <h2 class="line">Связаться с нами</h2>
      <form class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 2xl:gap-6" @submit.prevent="sendForm">
        <div class="form-control required" :class="{
			'error': v$.name.$error && v$.name.$dirty
        }">
          <label for="name">имя</label>
          <input type="text" id="name"  v-model="formData.name" />
          <span>Введите имя</span>
        </div>
        <div class="form-control required" :class="{
        'error': v$.phone.$error && v$.phone.$dirty
        }">
          <label for="phone">Телефон</label>
          <input type="tel" id="phone" v-model="formData.phone" />
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
          <textarea id="message" rows="6" v-model="formData.message"></textarea>
          <span>Введите ваше сообщение</span>
        </div>
        <div>
          <button
            class="btn bg-primary text-white hover:bg-secondary hover:border-secondary"
            type="submit"
          >
            Отправить
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
