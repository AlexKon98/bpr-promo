<template>
  <main class="main playlist">
    <section class="playlists">
      <div class="container">
        <h1 class="playlists__title">
          Найдите идеальную <br>
          формулу прекрасных преображений
        </h1>
        <div class="playlists__text">Откройте дверь и получите  уникальную подборку фильмов для вечера красоты и заботы о себе с Черным Жемчугом.</div>
        <div class="swiper playlists__slider">
          <div class="swiper-wrapper playlists__wrapper">
            <PlaylistDoor
              v-for="(door, index) in slideList"
              :key="door.href"
              v-bind="door"
              :index="index + 1"
              :class="{ active: openedDoors.includes(door.href) }"
              @open="onDoorOpen(door, index)"
              @click:playlist="onPlaylistCLick(index)"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useSeoMeta } from 'nuxt/app';

useSeoMeta({
  title: `ПОЛУЧИТЕ ИСТИННОЕ УДОВОЛЬСТВИЕ ОТ УХОДА ЗА КОЖЕЙ!`,
});

definePageMeta({
  layout: 'pure'
});

const appConfig = useRuntimeConfig();
</script>

<script>
import Swiper from 'swiper';
import triggerMetrika from "~/helpers/metrika";

export default {
  name: 'PlaylistsPage',
  data() {
    return {
      slider: null,
      slideList: [
        {
          bg: 'imgs/playlists/door-evening.jpg',
          text: '<span>Вечеринка</span><span>красоты</span>',
          href: '/playlists/evening',
        },
        {
          bg: 'imgs/playlists/door-spa.jpg',
          text: '<span>Вечер</span><span>релакса</span>',
          href: '/playlists/relax',
        },
        {
          bg: 'imgs/playlists/door-morning.jpg',
          text: '<span>О великих</span><span>женщинах</span>',
          href: '/playlists/womans',
        },
        {
          bg: 'imgs/playlists/door-party.jpg',
          text: '<span>Кино-</span><span>свидание</span>',
          href: '/playlists/meeting',
        }
      ],
      openedDoors: [],
    }
  },
  methods: {
    onDoorOpen(door, index) {
      const metrikaTagMap = [
        'ifbdqrej',
        'dubvwyct',
        'mgaknbsq',
        'lopefzci'
      ];

      triggerMetrika(metrikaTagMap[index]);
      this.openedDoors.push(door.href);
    },
    onPlaylistCLick(index) {
      const metrikaTagMap = [
        'rhujxawv',
        'txnvmleo',
        'ipkzrjbf',
        'wsnbqpli'
      ];
      triggerMetrika(metrikaTagMap[index]);
    },
  },
  mounted() {
    this.slider = new Swiper('.swiper', {
      direction: 'horizontal',
      slidesPerView: 'auto',
      spaceBetween: 24,
      breakpoints: {
        1023: {
          slidesPerView: 4,
          centeredSlides: false,
        },
      }
    });
  }
}
</script>

<style lang="scss">
@use 'sass:math';

@keyframes rotate {
  from {
    transform: rotate(360deg);
  }
}

.main.playlist {
  max-width: 100svw;
  min-height: calc(100dvh - 94px);
  background-image: url(/imgs/playlists/playlists_bg.jpg);
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}

.playlists {
  flex-grow: 1;
  position: relative;
  z-index: 2;
  margin-top: 190px;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @media screen and (max-width: 767px) {
      padding: 0;
    }
  }
  &__title {
    color: #FFF;
    text-align: center;
    font-size: 56px;
    font-style: normal;
    line-height: 66px;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
  &__text {
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    line-height: 30px;
    margin-bottom: 48px;
  }
  &__slider {
    width: 90%;
    margin: 0 auto;
    margin-top: auto;
  }
  &__slide {
    position: relative;
    overflow: hidden;
    border-top-left-radius: 1000px;
    border-top-right-radius: 1000px;
    display: flex;
    cursor: url('/imgs/playlists/key.png'), auto;

    &::after {
      content: '';
      padding-top: percentage(math.div(560, 372));
    }

    &.active {
      cursor: auto;
    }

    @media (max-width: 1023px) {
      width: 255px;
    }
  }
  &__ark {
    pointer-events: none;
    position: absolute;
    z-index: 5;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  &__bg {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-top-left-radius: 1000px;
    border-top-right-radius: 1000px;
    z-index: 0;
    bottom: -10px;
    transform: scale(0.95);
    transform-origin: center;
  }
  &__door {
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 100%;
    transition: transform .4s linear;
    transform: scale(0.99);
    transform-origin: center bottom;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__lock {
    position: absolute;
    left: 50%;
    top: 70%;
    z-index: 2;
    transform: translate(-50%, -70%);
    object-fit: cover;
    width: 45% !important;
    height: auto !important;
    filter: drop-shadow(0px 0px 8px #9D4758) drop-shadow(0px 0px 50px #8F3446);
  }
  &__index {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    top: 134px;
    left: 50%;
    transform: translateX(-50%);
    background:linear-gradient(90deg, #F9DCBC 41.46%, #FEF9E9 76.87%, #FADEB9 129.54%, #F5D6AC 146.53%, #E6BA93 155.94%, #DCAF82 165.65%, #D2A47A 175.5%, #D9AD7A 180.65%, #EED6B5 204.25%, #FCEBD5 231.77%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 34.5px;
    letter-spacing: 3.8px;
    text-align: center;
    text-transform: uppercase;

    @media (max-width: 1599px) {
      top: 125px;
      font-size: 25px;
      line-height: 30px;
    }

    @media (max-width: 1399px) {
      top: 100px;
      font-size: 20px;
      line-height: 25px;
    }

    @media (max-width: 1299px) {
      top: 80px;
      font-size: 18px;
      line-height: 20px;
    }

    @media (max-width: 1199px) {
      top: 70px;
      font-size: 16px;
      line-height: 18px;
    }

    @media (max-width: 1023px) {
      top: 90px;
      font-size: 24px;
      line-height: 27px;
    }
  }
  &__caption {
    opacity: 0;
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    color: #FFF;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    line-height: 34px;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    transition: opacity .4s linear;
  }
  &__link {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 124px;
    height: 124px;
    z-index: 1;
    opacity: 0;
    &:hover .playlists__circle {
      background-color: #5A449A;
    }

    @at-root {
      .playlists__slide.active & {
        opacity: 1;
      }
    }
  }
  &__circle {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    background-color: #EAA6B4;
    transition: background-color .4s linear;
  }
  &__play-text {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    transition: all 0.5s ease;
    animation: rotate 6s linear infinite;
  }
  &__slide:hover &__caption {
    opacity: 1;
  }
  &__slide.active {
    .playlists__door {
      transform: translateX(100%);
    }
  }
}

@media (max-width: 1441px) {
  .playlists__title {
    font-size: 40px;
    line-height: 45px;
  }
  .playlists__text {
    font-size: 17px;
    line-height: 20px;
  }
}

@media (max-width: 1023px) {
  .main {
    min-height: calc(100svh - 76px);
    background-image: none;
    overflow: hidden;
  }
  .playlists {
    margin-top: 0;
    padding: 0 42px;
    &__title {
      font-size: 40px;
      line-height: 51px;
    }
    &__slider {
      overflow: visible;
    }
  }
  .main.playlist {
    background-image: none;
    min-height: calc(100svh - 76px) !important;
  }
}

@media (max-width: 767px) {
  .playlists {
    padding: 40px 24px 0;
    &__title {
      font-size: 32px;
      line-height: 32px;
      margin-bottom: 14px;
    }
    &__text {
      font-size: 14px;
      line-height: 22px;
    }
    &__lock {
      top: 65%;
      transform: translate(-50%, -65%);
    }
    &__index {
      top: 115px;
    }
    &__link {
      width: 85px;
      height: 85px;
    }
    &__play {
      width: 24px;
      height: 24px;
    }
    &__play-text {
      width: 100%;
      height: 100%;
    }
    &__slide {
      min-width: 340px;
      width: auto;
      min-height: 500px;
    }
    &__slider {
      width: 100%;
    }
  }
}
</style>
