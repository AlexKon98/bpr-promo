<template>
  <div class="app">
    <Header />
      <main class="main">
        <section class="not-found">
          <div class="container">
            <h1 class="not-found__title">404</h1>
            <div class="not-found__text">К сожалению, запрашиваемая вами страница не найдена</div>
            <div class="not-found__wrap">
              <NuxtLink class="not-found__link" to="/">На главную</NuxtLink>
            </div>
          </div>
          <img class="not-found__decor" src="@/assets/imgs/svg-not-found.svg" alt="">
        </section>
        <section class="false-footer">
          <div class="container">
            <div class="false-footer__copyright"><p>&copy; ЧЕРНЫЙ ЖЕМЧУГ 2023, РОССИЯ.</p><p>RESORT – КУРОРТ. Место действия и персонажи вымышленные.</p></div>
            <div class="false-footer__age">16+</div>
          </div>
        </section>
      </main>
  </div>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: calc(100svh - 94px);
  background: linear-gradient(180deg, #5B4795 0%, #7C65BE 50.62%);
  color: #fff;
}
.not-found {
  padding-top: 260px;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  &__decor {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: .5;
  }
  &__title {
    color: #FFF;
    text-align: center;
    font-size: 300px;
    font-style: normal;
    line-height: 300px;
    text-transform: uppercase;
    margin-bottom: 16px;
  }
  &__text {
    color: #FFF;
    font-size: 24px;
    text-align: center;
    font-style: normal;
    line-height: normal;
    margin-bottom: 56px;
  }
  &__wrap {
    display: flex;
    justify-content: center;
  }
  &__link {
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    padding: 23px 32px;
    border-radius: 50px;
    background: rgba(255, 255, 255, 0.20);
    transition: color .4s linear, background-color .4s linear;
    &:hover {
      color: #7C65BE;
      background-color: #fff;
    }
  }
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

@media (max-width: 1023px) {
  .main {
    min-height: calc(100svh - 76px);
  }
  .not-found {
    padding-top: 96px;
    &__title {
      font-size: 120px;
      line-height: 120px;
      margin-bottom: 0;
    }
    &__text {
      font-size: 18px;
      line-height: 26px;
      margin-bottom: 40px;
    }
    &__link {
      font-size: 14px;
      line-height: normal;
    }
    &__decor {
      top: 176px;
      left: -45px;
    }
  }
  .false-footer__copyright {
    flex-direction: column;
  }
}

@media (max-width: 767px) {
  .not-found__link {
    width: 100%;
  }
  .false-footer {
    padding: 32px 0;
    .container {
      flex-direction: column;
      gap: 24px 0;
    }
  } 
}
</style>

<script setup>
import Header from '~/components/Header.vue';
import { useSeoMeta } from 'nuxt/app';

useSeoMeta({
  title: `К сожалению, запрашиваемая вами страница не найдена`,
});
</script>

<script>
export default {
  name: 'NotFoundPage'
}
</script>