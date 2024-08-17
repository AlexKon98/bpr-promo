<template>
  <div class="copyright" :class="{'products-page': !playlistPage}">
    <div class="container">
      <img class="copyright__img" :src="appConfig.app.baseURL + copyright.img" alt="">
      <div class="copyright__content">

        <div v-if="copyright.collection && !playlistPage" class="copyright__collection">
          Коллекция {{ copyright.collection.eng }}
        </div>

        <div class="copyright__number" v-if="playlistPage">
          0{{ copyright.id }}
        </div>

        <div class="copyright__name" v-html="copyright.name"></div>

        <div class="copyright__line"></div>

        <div class="copyright__text" v-html="copyright.html"></div>

        <div class="copyright__collection-translate" v-if="copyright.collection">{{ `${copyright.collection.eng} - ${copyright.collection.rus}` }}</div>

        <div class="copyright__links">
          <a :href="copyright.ozon" @click="onLinkClick('ozon')">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1C11 0.447715 10.5523 -3.74211e-07 10 4.72575e-08L1 -1.63477e-07C0.447715 -1.63477e-07 2.8711e-07 0.447715 2.8711e-07 1C2.8711e-07 1.55228 0.447715 2 1 2L9 2L9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10L11 1ZM0.292893 9.29289C-0.0976311 9.68342 -0.0976311 10.3166 0.292893 10.7071C0.683418 11.0976 1.31658 11.0976 1.70711 10.7071L0.292893 9.29289ZM9.29289 0.292893L0.292893 9.29289L1.70711 10.7071L10.7071 1.70711L9.29289 0.292893Z" fill="white"/>
            </svg>
            <span>Купить на Ozon</span>
          </a>
          <a :href="copyright.yandex" @click="onLinkClick('yandex')">
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 1C11 0.447715 10.5523 -3.74211e-07 10 4.72575e-08L1 -1.63477e-07C0.447715 -1.63477e-07 2.8711e-07 0.447715 2.8711e-07 1C2.8711e-07 1.55228 0.447715 2 1 2L9 2L9 10C9 10.5523 9.44772 11 10 11C10.5523 11 11 10.5523 11 10L11 1ZM0.292893 9.29289C-0.0976311 9.68342 -0.0976311 10.3166 0.292893 10.7071C0.683418 11.0976 1.31658 11.0976 1.70711 10.7071L0.292893 9.29289ZM9.29289 0.292893L0.292893 9.29289L1.70711 10.7071L10.7071 1.70711L9.29289 0.292893Z" fill="white"/>
            </svg>
            <span>Купить на Яндекс.Маркет</span>
          </a>
        </div>

      </div>
    </div>
  </div>
</template>

<style lang="scss">
.copyright__text p:nth-child(2) {
  opacity: .7;
}
</style>

<style lang="scss" scoped>
.copyright {
  padding: 104px 0;
  .container {
    display: flex;
    align-items: center;
  }
  &__number {
    font-size: 120px;
    font-style: normal;
    font-weight: 700;
    line-height: 120px;
    letter-spacing: 6px;
    background: linear-gradient(90deg, #F9DCBC 41.46%, #FEF9E9 76.87%, #FADEB9 129.54%, #F5D6AC 146.53%, #E6BA93 155.94%, #DCAF82 165.65%, #D2A47A 175.5%, #D9AD7A 180.65%, #EED6B5 204.25%, #FCEBD5 231.77%);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 25px;
  }
  &__collection {
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.6px;
    text-transform: uppercase;
    opacity: .5;
    margin-bottom: 16px;
    &-translate {
      color: rgba(255, 255, 255, 0.70);
      font-size: 14px;
      font-style: normal;
      line-height: 24px;
      margin-bottom: 56px;
    }
  }
  &__name {
    color: #FFF;
    font-size: 37px;
    font-style: normal;
    line-height: 47px;
    text-transform: uppercase;
    margin-bottom: 40px;
  }
  &__line {
    position: relative;
    width: 100%;
    height: 4px;
    margin-bottom: 56px;
    &::after {
      position: absolute;
      content: '';
      left: 0;
      top: 0;
      height: 4px;
      background: linear-gradient(90deg, #F9DCBC 41.46%, #FEF9E9 76.87%, #FADEB9 129.54%, #F5D6AC 146.53%, #E6BA93 155.94%, #DCAF82 165.65%, #D2A47A 175.5%, #D9AD7A 180.65%, #EED6B5 204.25%, #FCEBD5 231.77%);
      width: 100vw;
    }
  }
  &__text {
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px 0;
    margin-bottom: 40px;
    max-width: 685px;
  }
  &__img {
    width: clamp(202px, 40%, 804px);
    margin-right: 5%;
  }
  &__links {
    display: flex;
    align-items: center;
    gap: 0 40px;
    a {
      color: #FFF;
      font-size: 16px;
      font-style: normal;
      line-height: normal;
      letter-spacing: 1.6px;
      text-transform: uppercase;
      display: flex;
      align-items: center;
      gap: 0 12px;
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
          fill: #F2BFA4;;
        }
      }
    }
  }
}

@media (max-width: 1023px) {
  .copyright__links {
    gap: 32px 0;
    flex-direction: column;
    align-items: start;
  }
  .copyright__number {
    font-size: 60px;
    line-height: 60px;
    margin-bottom: 16px;
  }
}

@media (max-width: 767px) {
  .copyright {
    padding: 48px 26px 56px;
    & .container {
      padding: 0;
    }
    &.copyright-on-playlist-page .container {
      padding: 0;
    }
    &__img {
      display: none;
    }
    &__collection {
      font-size: 14px;
      letter-spacing: 0.7px;
      margin-bottom: 8px;
    }
    &__name {
      font-size: 24px;
      line-height: 32px;
    }
    &__line {
      margin-bottom: 40px;
    }
    &__text {
      gap: 15px 0;
    }
    &__text, &__collection-translate {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 40px;
    }
  }
}
</style>

<script setup>
const appConfig = useRuntimeConfig();
</script>

<script>
import triggerMetrika from "~/helpers/metrika";
import {getProductMetrikaTag} from "~/helpers/get-product-metrika-tag";

export default {
  props: {
    copyright: {
      type: Object
    },
    playlistPage: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    onLinkClick(linkType) {
      if (this.playlistPage) {
        triggerMetrika(getProductMetrikaTag(this.$route.params.id, this.copyright.name, linkType))
      }
      if (this.$route.path === '/products') {
        triggerMetrika(getProductMetrikaTag('products', this.copyright.name, linkType))
      }
    }
  },
}
</script>
