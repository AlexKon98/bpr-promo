<template>
  <section class="kp">
    <div class="container">
      <h3 class="kp__heading">Выберите фильм</h3>
      <div class="swiper kp__swiper" :class="{ 'slider-destroyed': windowWidth > 768 }" ref="swiper">
        <div class="swiper-wrapper kp__list">
          <div class="swiper-slide kp__item" v-for="video in videos" :key="video.id">
            <a class="kp__link" :href="video.link" target="_blank" @click="triggerMetrika(video.yID)">
              <img :src="'/' + video.img" alt="">
            </a>
            <a :href="video.link" class="kp__buttons" target="_blank" @click="triggerMetrika(video.yID)">
              <img class="kp__play kp__play--inactive" src="@/assets/imgs/play-icon.svg" alt="">
              <img class="kp__play kp__play--active" src="@/assets/imgs/play_active-icon.svg" alt="">
            </a>
          </div>
        </div>
      </div>
      <div class="kp__progress"></div>
    </div>
  </section>
</template>

<script>
import Swiper from 'swiper';
import { Pagination } from "swiper/modules";
import triggerMetrika from "~/helpers/metrika";

export default {
  name: 'KinopoiskLinks',
  data() {
    return {
      swiper: null,
      windowWidth: 0
    }
  },
  props: {
    videos: {
      type: Object
    }
  },
  watch: {
    windowWidth(v) {
      if (v > 767 && this.swiper && !this.swiper.destroyed) this.swiper.destroy();
      else if (v < 768 && (this.swiper && this.swiper.destroyed)) this.initSwiper();
    }
  },
  methods: {
    triggerMetrika,
    initSwiper() {
      this.swiper = new Swiper(".kp__swiper", {
        modules: [Pagination],
        pagination: {
          el: '.kp__progress',
          type: "progressbar",
        },
        slidesPerView: 1.05,
        slidesPerGroup: 1,
        centeredSlidesBounds: true,
        spaceBetween: 8,
      });
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener('resize', () => this.windowWidth = window.innerWidth);

    if (this.windowWidth < 767) {
      setTimeout(() => {
        this.initSwiper();
        this.$refs.swiper.classList.add('inited');
      });
    } else {
      this.$refs.swiper.classList.remove('inited');
    }
  },
  beforeUnmount() {
    window.onresize = null;
  }
}
</script>

<style lang="scss" scoped>
.kp {
  margin-top: 15px;
  margin-bottom: 120px;

  &__progress {
    margin-top: 26px;
    height: 2px;
    position: relative;

    &:deep(.swiper-pagination-progressbar-fill) {
      background-color: #fff;
    }
  }

  &__swiper.inited {
    overflow: visible;
  }

  &__heading {
    color: #fff;
    font-size: 32px;
    line-height: 47px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media (max-width: 767px) {
      font-size: 18px;
      line-height: 1;
      margin-bottom: 24px;
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;

    @media (max-width: 767px) {
      gap: unset;
      flex-wrap: unset;
    }
  }

  &__item {
    position: relative;
    width: calc((100% / 3) - 24px);

    @media (max-width: 1599px) {
      width: calc((100% / 2) - 12px);
    }

    @media (max-width: 767px) {
      width: 100%;
    }
  }

  &__link {
    display: block;
    img {
      width: 100%;
      height: 298px;
      object-fit: cover;
      display: block;

      @media (max-width: 1250px) {
        height: 235px;
      }

      @media (max-width: 767px) {
        height: 167px;
      }
    }
  }

  &__buttons {
    position: absolute;
    left: 20px;
    bottom: 20px;

    @media (max-width: 767px) {
      left: 10px;
      bottom: 10px;
    }
  }

  &__play {
    transition: opacity .4s ease-in;

    &--active {
      opacity: 0;

      @media (max-width: 767px) {
        width: 60px;
        height: 60px;
      }
    }

    &--inactive {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);

      @media (max-width: 767px) {
        width: 41px;
        height: 41px;
      }
    }
  }

  &__item:hover {
    & .kp__play--inactive {
      opacity: 0;
    }

    & .kp__play--active {
      opacity: 1;
    }
  }
  
  &__item.swiper-slide-active {
    & .kp__play--inactive {
      opacity: 0;
    }

    & .kp__play--active {
      opacity: 1;
    }
  }
}
</style>