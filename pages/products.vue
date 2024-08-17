<template>
  <main class="main">
    <section class="hero">
      <img class="hero__bg-img hero__bg-img--left" :src="appConfig.app.baseURL +  'imgs/products/products_left.png'" alt="">
      <img class="hero__bg-img hero__bg-img--right" :src="appConfig.app.baseURL +  'imgs/products/products_right.png'" alt="">
      <div class="container hero__container">
        <div class="hero__link">
          <NuxtLink class="hero__link-to-main" to="/" @click="triggerMetrika('utrnpekl')">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1.29251 7.29289C0.901985 7.68342 0.901985 8.31658 1.29251 8.70711L7.65647 15.0711C8.047 15.4616 8.68016 15.4616 9.07068 15.0711C9.46121 14.6805 9.46121 14.0474 9.07068 13.6569L3.41383 8L9.07068 2.34315C9.46121 1.95262 9.46121 1.31946 9.07068 0.928932C8.68016 0.538408 8.047 0.538408 7.65647 0.928932L1.29251 7.29289ZM14.7275 9C15.2798 9 15.7275 8.55228 15.7275 8C15.7275 7.44772 15.2798 7 14.7275 7L14.7275 9ZM1.99962 9L14.7275 9L14.7275 7L1.99962 7L1.99962 9Z" fill="white"/>
            </svg>
            <span>На главную</span>
          </NuxtLink>
        </div>
        <h1 class="hero__title">
          <p>Откройте</p>
          <p>секреты эффектных</p>
          <p>преображений</p>
          <p>с Черным жемчугом</p>
        </h1>
      </div>
      <div class="hero__scroll" @click="scrollToList">
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.29289 14.7071C7.68342 15.0976 8.31658 15.0976 8.70711 14.7071L15.0711 8.34316C15.4616 7.95264 15.4616 7.31947 15.0711 6.92895C14.6805 6.53842 14.0474 6.53842 13.6569 6.92895L8 12.5858L2.34315 6.92895C1.95262 6.53842 1.31946 6.53842 0.928933 6.92895C0.538408 7.31947 0.538408 7.95264 0.928933 8.34316L7.29289 14.7071ZM9 1.27209C9 0.719809 8.55228 0.272094 8 0.272094C7.44772 0.272094 7 0.71981 7 1.27209L9 1.27209ZM9 14L9 1.27209L7 1.27209L7 14L9 14Z" fill="white"/>
        </svg>
      </div>
    </section>
    <section class="products__list-section">
      <ProductsList id="list" />
    </section>
  </main>
</template>

<script setup>
import { useSeoMeta } from 'nuxt/app';
import ProductsList from '~/components/ProductsList.vue';
import triggerMetrika from "~/helpers/metrika";

useSeoMeta({
  title: `ОТКРОЙТЕ СЕКРЕТЫ ЭФФЕКТНЫХ ПРЕОБРАЖЕНИЙ С ЧЕРНЫМ ЖЕМЧУГОМ`
});

const appConfig = useRuntimeConfig();
</script>

<script>
import triggerMetrika from "~/helpers/metrika";

export default {
  name: 'ProductsPage',
  methods: {
    triggerMetrika,
    scrollToList() {
      document.getElementById('list').scrollIntoView({ behavior: "smooth" });
      triggerMetrika('jdmoznwv');
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  background-color: #7C65BE;
}

.hero__link-to-main {
  span {
    transition: color .4s linear;
  }
  svg path {
    transition: fill .4s linear;
  }
  &:hover {
    span {
      color: #F2BFA4;
    }
    svg path {
      fill: #F2BFA4;
    }
  }
}

.hero {
  position: relative;
  min-height: calc(100svh - 94px);
  width: 100%;
  overflow: hidden;
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    text-align: center;
    padding-top: 220px;
    z-index: 5;
  }
  &__title {
    max-width: 740px;
    color: #FFF;
    text-align: center;
    font-size: 56px;
    font-style: normal;
    line-height: 1.178;
    letter-spacing: 2.8px;
    text-transform: uppercase;
    margin-bottom: 40px;

    @media (max-width: 1600px) {
      font-size: 40px;
    }
  }
  &__link {
    display: flex;
    justify-content: center;
    margin-bottom: 69px;
    a {
      gap: 0 8px;
      display: flex;
      align-items: center;
      color: #FFF;
      font-size: 16px;
      font-style: normal;
      line-height: normal;
      letter-spacing: 1.6px;
      text-transform: uppercase;
    }
  }
  &__bg-img {
    position: absolute;
    z-index: 1;
    bottom: 0;
    display: block;
    object-fit: cover;
    height: 100%;
    width: auto;
    &--left {
      left: 0;
    }
    &--right {
      right: 0;
    }
  }
  &__scroll {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 56px;
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.20);
    border-radius: 50%;
    transition: background-color .4s linear;
    svg path {
      transition: fill .4s linear;
    }
    &:hover {
      background-color: #fff;
      svg path {
        fill: #7C65BE;
      }
    }
  }
}

@media (max-width: 1441px) {
  .hero__bg-img {
    &--left {
      left: -2.5%;
    }
    &--right {
      right: -2.5%;
    }
  }
  .hero__title {
    font-size: 35px;
  }
}

@media (max-width: 1194px) {
  .hero__container {
    padding-top: 200px;
  }
  .hero__title {
    font-size: 25px;
    line-height: 30px;
  }
  .hero__link {
    margin-bottom: 25px;
  }
  .hero__bg-img {
    &--left {
      left: -17%;
    }
    &--right {
      right: -17%;
    }
  }
}

@media (max-width: 1100px) {
    .hero__bg-img {
    &--left {
      left: -25%;
    }
    &--right {
      right: -25%;
    }
  }
}

@media (max-width: 1023px) {
  .hero {
    display: flex;
    flex-direction: column;
    min-height: calc(100svh - 75px);
  }
}

@media (max-width: 901px) {
  .hero {
    &__bg-img {
      display: none;
    }
    &__scroll {
      width: 56px;
      height: 56px;
    }
    &__title {
      max-width: 312px;
      font-size: 32px;
      line-height: 32px;
    }
    &__link {
      margin-bottom: 42px;
    }
    &__container {
      padding-top: 44px;
    }
  }
}
</style>
