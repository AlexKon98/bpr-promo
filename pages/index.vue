<template>
  <main class="main">
    <section class="hero">
      <div class="hero__container container">
        <div class="hero__content">
          <div class="hero__care">Ритуалы красоты + кино</div>
          <h1 class="hero__title">
            <div class="hero__title-music">Киноподборки</div>
            <div class="hero__title-black">от Черного жемчуга</div>
          </h1>
          <div class="hero__text">
            Весна — традиционно время перемен. Как же разнообразить ежедневную бьюти-рутину? Специально для вас Черный Жемчуг и Кинопоиск подобрали яркие и вдохновляющие фильмы, которые поднимут настроение и отлично дополнят процедуру ухода за кожей.
          </div>
          <div class="hero__links">
            <NuxtLink class="hero__link hero__purple" to="/playlists" @click="triggerMetrika('zbkjgdhv')">Посмотреть киноподборки</NuxtLink>
            <NuxtLink class="hero__link hero__transparent" to="/products" @click="triggerMetrika('oaqnxjlm')">Наши продукты</NuxtLink>
          </div>
        </div>
      </div>
      <picture class="hero__bg">
        <source :srcset="appConfig.app.baseURL + 'imgs/main/main-page_hero-mob.jpg'" media="(max-width: 767px)" />
        <source :srcset="appConfig.app.baseURL + 'imgs/main/main-page_hero.jpg'" media="(min-width: 768px)" />
        <img :src="appConfig.app.baseURL + 'imgs/main/main-page_hero.jpg'" alt="">
      </picture>
    </section>
    <section class="false-footer">
      <div class="container">
        <div class="false-footer__copyright"><p>&copy; ЧЕРНЫЙ ЖЕМЧУГ 2023, РОССИЯ.</p><p>RESORT – КУРОРТ. Место действия и персонажи вымышленные.</p></div>
        <div class="false-footer__age">18+</div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useSeoMeta } from 'nuxt/app';
import triggerMetrika from "@/helpers/metrika.ts";

useSeoMeta({
  title: `МУЗЫКАЛЬНЫЙ ЧЕРНЫЙ ЖЕМЧУГ`,
});

definePageMeta({
  layout: 'pure',
});

const appConfig = useRuntimeConfig();
</script>

<script>
export default {
  name: 'MainPage',
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  min-height: calc(100svh - 94px);
  display: flex;
  overflow: hidden;
  flex-direction: column;
}
.false-footer {
  padding: 52px 0;
  position: relative;
  z-index: 8;
  background-color: transparent;
  margin-top: auto;
  .container {
    display: flex;
    justify-content: space-between;
  }
  &__copyright {
    display: flex;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.7px;
  }
  &__age {
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.4px;
    text-transform: uppercase;
  }
}
.hero {
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &__purple, &__transparent {
    transition: color .4s linear, background-color .4s linear;
  }
  &__purple:hover {
    background-color: #5A449A;
  }
  &__transparent:hover {
    color: #7C65BE;
    background-color: #fff;
  }
  &__container {
    padding: 0 130px;
  }
  &__content {
    padding-top: 135px;
    position: relative;
    z-index: 2;
  }
  &__links {
    display: flex;
    align-items: center;
    gap: 0 24px;
  }
  &__link {
    padding: 20px 32px;
    border-radius: 50px;
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.4px;
    text-transform: uppercase;

    @media (max-width: 1600px) {
      padding: 20px;
    }
  }
  &__transparent {
    background: rgba(255, 255, 255, 0.20);
  }
  &__purple  {
    background: #7C65BE;
  }
  &__care {
    color: #FFF;
    font-size: 32px;
    font-weight: 400;
    line-height: 56px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  &__title {
    color: #FFF;
    font-size: 80px;
    font-style: normal;
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: 24px;

    @media (max-width: 1720px) {
      font-size: 60px;
    }

    @media (max-width: 1600px) {
      font-size: 45px;
    }
  }
  &__text {
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    line-height: 1.5;
    max-width: 759px;
    margin-bottom: 56px;

    @media (max-width: 1750px) {
      max-width: 600px;
    }

    @media (max-width: 1600px) {
      font-size: 16px;
      margin-bottom: 32px;
    }
  }
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    img {
      pointer-events: none;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 75% bottom;
    }

    @media screen and (min-width: 1601px) {
      right: -80px;
    }
  }
}

@media (max-width: 1441px) {
  .hero__text {
    font-size: 13px;
    max-width: 400px;
  }
  .hero__links {
    gap: 0 16px;
  }
  .hero__link {
    padding: 15px 10px;
    letter-spacing: 1px;
    font-size: 13px;
  }
}

@media (max-width: 1023px) {
  .hero__container {
    padding: 0 24px;
    margin-bottom: 24px;
  }
  .hero__content {
    padding-top: 42px;
  }
  .hero__care {
    font-size: 26px;
    line-height: 28px;
  }
  .hero__title {
    font-size: 60px;
    line-height: 60px;
    margin-bottom: 16px;
  }
  .hero__text {
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 36px;
  }
  .main {
    min-height: calc(100dvh - 76px);
  }
  .false-footer {
    background-color: #3A3A3C;
    &__copyright {
      flex-direction: column;
    }
  }
}

@media (max-width: 767px) {
  .hero {
    position: relative;
  }
  .hero__care {
    font-size: 14px;
    line-height: 14px;
  }
  .hero__title {
    font-size: 32px;
    line-height: 32px;
  }
  .hero__text {
    font-size: 14px;
    line-height: 22px;
    margin-bottom: 24px;
  }
  .hero__links {
    gap: 8px 0;
    flex-direction: column;
  }
  .hero__link {
    width: 100%;
  }
  .hero__container {
    margin-bottom: 100vw;
  }
  .false-footer {
    padding: 32px 0;
    .container {
      flex-direction: column;
      gap: 24px 0;
    }
  }
}

@media (max-width: 500px) {
  .false-footer__copyright {
    max-width: 285px;
  }
}

@media (min-width: 1719px) and (max-width: 1919px) {
  .hero__title {
    font-size: 60px;
  }
}

@media (min-width: 1400px) and (max-width: 1600px) {
  .hero__link {
    font-size: 12px;
    padding: 15px 10px;
    &s {
      gap: 0 12px;
    }
  }
}
</style>
