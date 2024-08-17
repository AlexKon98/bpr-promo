<template>
  <section class="hero" :class="$route.params.id">
    <div class="container hero__container">
      <div class="hero__caption">Ваша подборка</div>
      <h1 class="hero__title">{{ h1 }}</h1>
      <div class="hero__wrap">
        <div class="hero__wrapper">
          <div class="hero__text">{{ text }}</div>
        </div>
        <NuxtLink class="hero__playlists" to="/playlists" @click="onDifferentPlaylistClick">Посмотреть другие киноподборки</NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
import triggerMetrika from "~/helpers/metrika";
import {getTagOnDifferentPlaylistClick} from "~/helpers/get-product-metrika-tag";

export default {
    props: {
        image: {
          type: String
        },
        h1: {
          type: String
        },
        text: {
          type: String
        }
    },
  methods: {
      onDifferentPlaylistClick() {
        triggerMetrika(getTagOnDifferentPlaylistClick(this.$route.params.id));
      }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: calc(100svh - 94px);
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  min-height: 700px;
  &::after {
    position: absolute;
    content: '';
    background: linear-gradient(180deg, rgba(124, 101, 190, 0.00) 0%, rgba(124, 101, 190, 0.95) 80.21%);
    left: 0;
    right: 0;
    bottom: 0;
    height: clamp(50%, 50%, 490px);
  }
  &.womans {
    background-image: url('/imgs/playlists/morning-bg.jpg');
  }
  &.evening {
    background-image: url('/imgs/playlists/evening-bg.jpg');
  }
  &.relax {
    background-image: url('/imgs/playlists/spa-bg.jpg');
  }
  &.meeting {
    background-image: url('/imgs/playlists/party-bg.jpg');
  }
  .container {
    position: relative;
    z-index: 5;
    margin-bottom: 90px;
    margin-top: auto;
    display: flex;
    flex-direction: column;
  }
  &__wrap {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 30px 24px;
  }
  &__caption {
    color: rgba(255, 255, 255, 0.70);
    font-size: 16px;
    font-style: normal;
    line-height: 18px;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  &__title {
    color: #FFF;
    font-size: 80px;
    font-style: normal;
    line-height: 88px;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-bottom: 32px;
  }
  &__text {
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    line-height: 30px;
    max-width: 800px;
  }
  &__playlists {
    color: #FFF;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    padding: 20px 32px;
    border-radius: 50px;
    background-color: rgba(255, 255, 255, 0.20);
    transition: color .4s linear, background-color .4s linear;
    min-width: 450px;
    &:hover {
      color: #7C65BE;
      background-color: #fff;
    }
  }
}

@media (max-width: 1146px) {
  .hero {
    justify-content: flex-end;
    padding-top: 120px;
    &__wrap {
      flex-direction: column;
      align-items: flex-start;
    }
    &__title {
      font-size: 50px;
      line-height: 55px;
    }
  }
}

@media (max-width: 1023px) {
  .hero {
    background-position: 40% center;
    min-height: calc(100svh - 75px);
    .container {
      margin-bottom: 60px;
    }
  }
}

@media (max-width: 767px) {
  .hero {
    padding-top: 0;
    background-position: 35% center;
    .container {
      margin-bottom: 40px;
    }
    &__title {
      font-size: 31px;
      line-height: 40px;
      margin-bottom: 16px;
    }
    &__wrap {
      gap: 24px 0;
    }
    &__caption {
      font-size: 14px;
      line-height: 14px;
      letter-spacing: 0.7px;
      margin-bottom: 8px;
    }
    &__text {
      font-size: 14px;
      line-height: 22px;
      margin-bottom: 0;
    }
    &__playlists {
      min-width: auto;
      width: 100%;
      padding: 20px 7px;
    }
  }
}
</style>
