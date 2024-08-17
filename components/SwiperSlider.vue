<template>
  <section class="slider">
    <div class="container">
      <div class="slider__block">
        <div class="slider__nav" v-if="windowWidth > 768">
          <div class="slider__nav-prev slider__nav-btn" ref="arrowPrev">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse opacity="0.9" cx="32" cy="32" rx="32" ry="32" transform="matrix(4.37114e-08 -1 -1 -4.37114e-08 64 64)" fill="white"/>
              <g clip-path="url(#clip0_387_52492)">
                <path d="M25.2929 32.7071C24.9024 32.3166 24.9024 31.6834 25.2929 31.2929L31.6568 24.9289C32.0474 24.5384 32.6805 24.5384 33.0711 24.9289C33.4616 25.3195 33.4616 25.9526 33.0711 26.3431L27.4142 32L33.0711 37.6569C33.4616 38.0474 33.4616 38.6805 33.071 39.0711C32.6805 39.4616 32.0474 39.4616 31.6568 39.0711L25.2929 32.7071ZM38.7279 31C39.2802 31 39.7279 31.4477 39.7279 32C39.7279 32.5523 39.2802 33 38.7279 33L38.7279 31ZM26 31L38.7279 31L38.7279 33L26 33L26 31Z" fill="#7C65BE"/>
              </g>
              <defs>
                <clipPath id="clip0_387_52492">
                  <rect width="16" height="16" fill="white" transform="matrix(1 8.74228e-08 8.74228e-08 -1 24 40)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="slider__nav-next slider__nav-btn" ref="arrowNext">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse opacity="0.9" cx="32" cy="32" rx="32" ry="32" transform="rotate(-90 32 32)" fill="white"/>
              <g clip-path="url(#clip0_387_52488)">
                <path d="M38.707 32.7071C39.0975 32.3166 39.0975 31.6834 38.707 31.2929L32.343 24.9289C31.9525 24.5384 31.3194 24.5384 30.9288 24.9289C30.5383 25.3195 30.5383 25.9526 30.9288 26.3431L36.5857 32L30.9288 37.6569C30.5383 38.0474 30.5383 38.6805 30.9288 39.0711C31.3194 39.4616 31.9525 39.4616 32.343 39.0711L38.707 32.7071ZM25.272 31C24.7197 31 24.272 31.4477 24.272 32C24.272 32.5523 24.7197 33 25.272 33L25.272 31ZM37.9999 31L25.272 31L25.272 33L37.9999 33L37.9999 31Z" fill="#7C65BE"/>
              </g>
              <defs>
                <clipPath id="clip0_387_52488">
                  <rect width="16" height="16" fill="white" transform="translate(40 40) rotate(180)"/>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div class="swiper slider__swiper" :class="{'slider-destroyed': windowWidth < 768}">
          <div class="swiper-wrapper">
            <div class="swiper-slide"
              v-for="prod in products"
              :key="prod.id"
              @click="clickSlide(prod)"
              :class="{ 'clicked': prod.active }"
            >
              <img :src="appConfig.app.baseURL + prod.img" alt="">
              <ProductCopyright :copyright="prod" :playlistPage="true" v-if="windowWidth < 768"/>
              <div class="gradient" v-if="windowWidth > 768">
            </div>
          </div>
        </div>
      </div>
    </div>
    <ProductCopyright class="copyright-on-playlist-page" id="copyright" :copyright="product" :playlistPage="true" v-if="windowWidth > 767"/>
    </div>
  </section>
</template>

<style lang="scss">
.slider {
  overflow: hidden;
}

.copyright-on-playlist-page {
  padding: 0 !important;
  margin-bottom: 100px;
}

.slider__nav {
  position: absolute;
  z-index: 3;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  &-btn {
    cursor: pointer;
    position: absolute;
    transform: translateY(-50%);
    transition: opacity .4s linear;
    &.swiper-button-disabled {
      opacity: 0;
    }
  }
  &-prev {
    left: -25px;
    right: auto;
  }
  &-next {
    left: auto;
    right: -15px;
  }
}

.slider__block {
  position: relative;
}

.slider__swiper {
  width: 100%;
  margin-left: -8px;
  margin-right: -8px;
  padding: 16px;
  margin-bottom: 105px;
  .gradient {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .swiper-slide {
    max-width: clamp(360px, 450px, 470px);
    position: relative;
    display: flex;

    &::after {
      content: '';
      padding-top: 100%;

      @media screen and (max-width: 767px) {
        display: none;
      }
    }

    img {
      position: absolute;
      z-index: 2;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;

      @media screen and (max-width: 767px) {
        position: static;
      }
    }
    &.clicked {
      z-index: 2;
      .gradient {
        background: linear-gradient(90deg, #F9DCBC 41.46%, #FEF9E9 76.87%, #FADEB9 129.54%, #F5D6AC 146.53%, #E6BA93 155.94%, #DCAF82 165.65%, #D2A47A 175.5%, #D9AD7A 180.65%, #EED6B5 204.25%, #FCEBD5 231.77%);
        top: -16px;
        left: -16px;
        right: -16px;
        bottom: -16px;
      }
    }
  }
}

@media (max-width: 1023px) {
  .slider__swiper {
    .swiper-slide {
      max-width: clamp(200px, 300px, 360px);
    }
  }
}

.slider__swiper.slider-destroyed {
  padding: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  height: auto;
  overflow: visible;
  .swiper-wrapper {
    flex-direction: column;
    gap: 56px 0;
  }
  .swiper-slide {
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    height: auto;
    img {
      margin-bottom: 48px;
    }
  }
}

.swiper-slide {
  .copyright {
    padding: 0 !important;
  }
  .copyright__img {
    display: none !important;
  }
}
</style>

<script setup>
import ProductCopyright from './ProductCopyright.vue';

const appConfig = useRuntimeConfig();
</script>

<script>
import Swiper from 'swiper';

import relax from '~/helpers/relax';
import womans from '~/helpers/womans';
import evening from '~/helpers/evening';
import meeting from '~/helpers/meeting';
import {Navigation} from "swiper/modules";
import triggerMetrika from "~/helpers/metrika";
import {getProductMetrikaTag} from "~/helpers/get-product-metrika-tag";

export default {
  name: 'SwiperSlider',
  data() {
    return {
      swiper: null,
      products: [],
      product: {},
      windowWidth: 0
    }
  },
  methods: {
    clickSlide(prod) {
      triggerMetrika(getProductMetrikaTag(this.$route.params.id, prod.name, 'click'));
      if (this.windowWidth > 767) {
        this.products.forEach(prod => prod.active = false);
        prod.active = true;
        this.product = prod;
        document.getElementById('copyright').scrollIntoView({ behavior: "smooth" });
      }
    },
    initSwiper() {
      this.swiper = new Swiper(".slider__swiper", {
        modules: [Navigation],
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        centeredSlidesBounds: true,
        spaceBetween: 8,
        navigation: {
          nextEl: this.$refs.arrowNext,
          prevEl: this.$refs.arrowPrev,
        },
        breakpoints: {
          1440: {
            slidesPerView: 4
          }
        }
      });
    }
  },
  watch: {
    windowWidth(v) {
      if (v < 768 && this.swiper && !this.swiper.destroyed) this.swiper.destroy();
      else if (v > 767 && this.swiper && this.swiper.destroyed) {
        this.initSwiper();
      }
    }
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener('resize', () => this.windowWidth = window.innerWidth);

    switch(this.$route.params.id) {
      case 'womans':
        this.products = womans;
        break;
      case 'evening':
        this.products = evening;
        break;
      case 'meeting':
        this.products = meeting;
        break;
      case 'relax':
        this.products = relax;
        break;
    }

    this.products.forEach((prod, i) => {
      if (i === 0) {
        prod.active = true;
        this.product = prod;
      } else {
        prod.active = false
      }
    });

    if (this.windowWidth > 767) {
      setTimeout(() => this.initSwiper())
    }
  },
}
</script>