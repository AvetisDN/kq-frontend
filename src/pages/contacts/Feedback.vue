<script setup></script>

<template>
  <div
    class="-mx-4 lg:-mx-6 xl:-mx-8 2xl:-mx-10 mt-6 lg:mt-14 xl:mt-20 2xl:mt-32 3xl:mt-40 2xl:px-10 xl:px-8 lg:px-6 px-4 bg-shade-100 py-10 md:py-16 xl:py-20 3xl:py-[90px]"
  >
    <div class="mx-auto max-w-[1440px]">
      <h2 class="line">Связаться с нами</h2>
      <form class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 2xl:gap-6">
        <div class="form-control required">
          <label for="name">имя</label>
          <input type="text" id="name" />
          <span>Введите имя</span>
        </div>
        <div class="form-control required">
          <label for="phone">Телефон</label>
          <input type="tel" id="phone" />
          <span>Введите номер телефона</span>
        </div>
        <div class="form-control required">
          <label for="email">Email</label>
          <input type="email" id="email" />
          <span>Введите E-Mail</span>
        </div>
        <div class="form-control required">
          <label for="city">город</label>
          <input type="text" id="city" />
          <span>Введите название города</span>
        </div>
        <div class="form-control required lg:col-span-2">
          <label for="message">сообщение</label>
          <textarea id="message" rows="6"></textarea>
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
