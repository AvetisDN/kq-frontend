<script setup>
import {
	YandexMap,
	YandexMapControls,
	YandexMapDefaultSchemeLayer,
	YandexMapZoomControl,
} from "vue-yandex-maps";

import {contactsStore} from "./contactsStore";

const store = contactsStore();
const contactData = computed(() => {
	return store.data
})
import {computed, onMounted} from "vue";


const center = [55.450797, 51.909868];
const zoom = 5;

const mapSettings = {
	apiKey: '',
	lang: 'ru_RU',
	coordorder: 'latlong',
	enterprise: false,
	location: {
		center,
		zoom,
	},
}
</script>

<template>
	<div class="mb-8 lg:mb-10 xl:mb-12 2xl:mb-14">
		<h2 class="line">ПРЕДСТАВИТЕЛЬСТВА В РФ И РБ</h2>
		<div class="-mx-4 lg:-mx-6 xl:-mx-8 2xl:-mx-10">
			<yandex-map
				:settings="mapSettings"
			>
			</yandex-map>
		</div>
<!--		<div class="-mx-4 lg:-mx-6 xl:-mx-8 2xl:-mx-10">-->
<!--			<img src="/images/contact/map.jpg" alt=""/>-->
<!--		</div>-->
		<div class="my-8 lg:my-10 xl:my-12 3xl:my-14">
			<div v-for="item in contactData.agencies">
				<div
					class="flex 3xl:gap-32 2xl:gap-24 xl:gap-20 lg:gap-16 md:gap-12 gap-4 flex-col md:flex-row"
				>
					<h3 class="w-[340px] text-2xl lg:text-3xl uppercase font-bold">
						{{ item.city }}
					</h3>
					<div class="text-sm text-shade-300 font-medium flex gap-4">
						<img
							:src="item.photo"
							alt=""
							class="h-40 border-shade-200 border"
						/>
						<div>
							<h4
								class="uppercase font-normal text-shade-900 text-base mb-2 lg:mb-3 2xl:mb-4"
							>
								{{ item.name }}
							</h4>
							<p>
								{{ item.phone }}
							</p>
							<p>
								{{ item.email }}
							</p>
						</div>
					</div>
				</div>
				<div class="h-px bg-shade-900 my-4 lg:my-6 2xl:my-8"></div>
			</div>
		</div>
	</div>
</template>
