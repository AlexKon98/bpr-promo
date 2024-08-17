<template>
  <div class="swiper-slide playlists__slide">
    <div class="playlists__slide-content">
      <img class="playlists__bg" :src="appConfig.app.baseURL + bg" alt="">
      <div class="playlists__door" @click="emit('open')">
        <div class="playlists__index" v-html="text"></div>
        <img src="@/assets/imgs/playlists/door.jpg" alt="">
        <img class="playlists__lock" src="@/assets/imgs/playlists/lock.png" alt="">
        <div class="playlists__caption">Открыть</div>
      </div>
      <img class="playlists__ark" src="@/assets/imgs/playlists/ark.svg" alt="">
      <NuxtLink class="playlists__link" :to="href" @click.stop="emit('click:playlist')">
        <div class="playlists__circle">
          <img class="playlists__play" src="@/assets/imgs/playlists/play.svg" alt="">
          <img class="playlists__play-text" src="@/assets/imgs/playlists/play-text.svg" alt="">
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface PlaylistDoorProps {
  index: number;
  bg: string;
  href: string;
  text: string
}

interface PlaylistDoorEmits {
  (e: 'open'): void;
  (e: 'click:playlist'): void;
}

defineProps<PlaylistDoorProps>();
const emit = defineEmits<PlaylistDoorEmits>();

const appConfig = useRuntimeConfig();
</script>
