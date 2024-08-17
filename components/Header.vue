<template>
  <header class="header">
    <nav class="container">
      <a href="https://www.myblackpearl.ru/resort?utm_source=YandexMusic_initiative&utm_medium=Display&utm_campaign=Unilever-BP-YandexMusic-SP-Face-Dec23&utm_term=2_Socdem_2pd_AW_Logo&utm_content=Production" class="header__mobile-logo" @click="onIndexClick">
        <img src="@/assets/imgs/header/header_logo.svg" alt="">
      </a>
      <ul class="header__list">
        <li>
          <NuxtLink class="hover-links" to="/playlists" @click="triggerMetrika('xswealrf')">Посмотреть киноподборки</NuxtLink>
        </li>
        <li>
          <NuxtLink class="hover-links" to="/products" @click="triggerMetrika('vcmryntp')">Наши продукты</NuxtLink>
        </li>
      </ul>
      <a class="header__main-logo" :class="{ 'sm': isMacOs }" href="https://www.myblackpearl.ru/resort?utm_source=YandexMusic_initiative&utm_medium=Display&utm_campaign=Unilever-BP-YandexMusic-SP-Face-Dec23&utm_term=2_Socdem_2pd_AW_Logo&utm_content=Production" @click="onIndexClick">
        <img src="@/assets/imgs/header/header_main_logo.svg" alt="">
      </a>
      <div class="header__mobile-menu">
        <button class="header__menu-btn" @click="toggleMenu" :class="{ 'active': menuVisible }">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="top" d="M0 4H24" stroke="#F2BFA4" stroke-width="2"/>
            <path class="middle" d="M0 12H16" stroke="#F2BFA4" stroke-width="2"/>
            <path class="bottom" d="M0 20H24" stroke="#F2BFA4" stroke-width="2"/>
          </svg>
        </button>
        <div class="header__mob-menu-list" :class="{ 'active': menuVisible }">
          <ul>
            <li>
              <NuxtLink class="hover-links" to="/playlists">Посмотреть киноподборки</NuxtLink>
            </li>
            <li>
              <NuxtLink class="hover-links" to="/products">Наши продукты</NuxtLink>
            </li>
          </ul>
          <NuxtLink class="header__mob-menu-logo" to="/" @click="onIndexClick">
            <img src="@/assets/imgs/header/mob_meny_logo.svg" alt="">
          </NuxtLink>
          <img class="header__mob-menu-lines" src="@/assets/imgs/header/menu_lines.svg" alt="">
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import triggerMetrika from "~/helpers/metrika";

export default {
  name: 'Header',
  data() {
    return {
      menuVisible: false,
      isMacOs: false,
    }
  },
  mounted() {
    this.menuVisible = false;
    document.querySelector('html').style = null;
    this.isMacOs = navigator.userAgent.includes('Mac');
  },
  watch: {
    $route() {
      this.menuVisible = false;
    },
  },
  methods: {
    triggerMetrika,
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
      if (this.menuVisible) document.querySelector('html').style.overflow = 'hidden';
      else {
        document.querySelector('html').style = null;
      }
    },
    onIndexClick() {
      if (this.$route.path === '/products') {
        triggerMetrika('qpyuklwn')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 40px 0;
  position: relative;
  z-index: 10;
  background-color: #7C65BE;
  &::after {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    bottom: -4px;
    height: 4px;
    background: linear-gradient(90deg, #F9DCBC 41.46%, #FEF9E9 76.87%, #FADEB9 129.54%, #F5D6AC 146.53%, #E6BA93 155.94%, #DCAF82 165.65%, #D2A47A 175.5%, #D9AD7A 180.65%, #EED6B5 204.25%, #FCEBD5 231.77%);
  }
  &__mob-menu-logo {
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
  }
  &__mob-menu-lines {
    position: absolute;
    right: 0;
    width: 100%;
    bottom: 0;
    z-index: 8;
  }
  &__mobile-logo, &__mobile-menu {
    display: none;
  }
  &__line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  &__list, &__menu-list {
    display: flex;
    justify-content: space-between;
    li {
      a {
        color: #FFF;
      }
      font-size: 14px;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.7px;
      text-transform: uppercase;
    }
  }
  &__main-logo {
    position: absolute;
    z-index: 10;
    top: 2px;
    left: 50%;
    transform: translateX(-50%);

    &.sm {
      top: 1px;
    }
  }
}

@media (max-width: 1023px) {
  .header {
    padding: 24px 0;
    .container {
      display: flex;
      justify-content: space-between;
    }
    &__list, &__main-logo {
      display: none;
    }
    &__mobile-logo, &__mobile-menu {
      display: block;
    }
    &__mobile-menu {
      button {
        padding: 0;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
    &__mob-menu-list {
      overflow: hidden;
      position: fixed;
      padding: 155px 30px 0;
      top: 78.5px;
      bottom: 0;
      right: 0;
      left: 0;
      background-color: #7C65BE;
      transform: translateX(100%);
      transition: transform .4s linear;
      ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 64px 0;
      }
      li {
        text-align: center;
        a {
          color: #FFF;
          text-align: center;
          font-size: 20px;
          font-style: normal;
          line-height: normal;
          letter-spacing: 1px;
          text-transform: uppercase;
        }
      }
    }
    &__mob-menu-list.active {
      transform: none;
    }
    &__menu-btn {
      svg path {
        transition: transform .4s linear;
      }
      &.active {
        .middle {
          display: none;
        }
        .top {
          transform: rotate(45deg) translate(6px, -1px);
        }
        .bottom {
          transform: rotate(-45deg) translate(-15px, -2px);
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .header__mob-menu-list {
    width: 100%;
  }
}
</style>
