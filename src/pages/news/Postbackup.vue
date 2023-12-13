<script setup>
import Breadcrumbs from "../../components/Breadcrumbs.vue";
import NewsSection from "../home/NewsSection.vue";
import PostSlider from "./PostSlider.vue";
</script>

<template>
  <div class="2xl:px-10 xl:px-8 lg:px-6 px-4">
    <Breadcrumbs
      :current="[
        {
          title: 'Новости',
          url: '/news',
        },
        {
          title: '21-я Международная выставка...',
        },
      ]"
    />
    <div
      class="flex flex-col xl:flex-row gap-4 md:gap-6 xl:gap-10 2xl:gap-32 3xl:gap-60 items-start"
    >
      <router-link
        to="/news"
        class="flex gap-4 xl:gap-6 whitespace-nowrap items-center text-2xl font-bold"
      >
        <img src="../../assets/icons/left.png" alt="" />
        К НОВОСТЯМ
      </router-link>
      <h2 class="max-w-[908px]">
        21-я Международная выставка промышленных насосов, компрессоров и
        трубопроводной арматуры, приводов и двигателей
      </h2>
    </div>
    <div
      class="my-4 md:my-6 lg:my-8 xl:my-10 3xl:my-12 flex flex-col gap-4 md:gap-6 lg:gap-8 xl:gap-10 3xl:gap-12"
    >
      <img src="/images/news/post-full.jpg" class="w-full" alt="" />
      <div
        class="flex flex-col gap-3 lg:gap-4 2xl:gap-6 max-w-[908px] mx-auto lg:text-xl"
      >
        <p>
          PCVExpo - 2022 стала первой выставкой, на которой российская команда
          “КЕЙ КЬЮ” представила посетителям информацию о концерне KAIQUAN и
          продемонстрировала насосное оборудование. Данная международная
          выставка прошла в период с 25 по 27 октября 2022 в МВЦ «Крокус Экспо».
          Мероприятие привлекло огромное количество посетителей из различных
          отраслей промышленности и ЖКХ, которые после продолжительного
          ковидного периода проявляли большой интерес как к новым производителям
          на рынке насосного оборудования, так и к ранее известным.
        </p>
        <p>
          Кроме выставочных экспозиций, на PCVExpo состоялась обширная деловая
          программа с участием представителей крупных муниципальных организаций,
          Минпромторга, Российской ассоциации производителей насосов и других
          компаний.На стенде компании «КЕЙ КЬЮ» было продемонстрировано
          оборудование для водоснабжения и водоотведения, систем повышения
          давления и HVAC.
        </p>
        <p>
          Посетителям нашего стенда удалось “вживую” оценить качество
          оборудования концерна KAIQUAN, обсудить индивидуальные условия
          сотрудничества, а также получить консультации технических специалистов
          российского представительства по вопросам эксплуатации и гарантийного
          обслуживания.
        </p>
      </div>
      <img src="/images/news/banner.jpg" alt="" class="mx-auto" />
    </div>
    <PostSlider />
    <NewsSection title="Другие новости" />
  </div>
</template>
