<template>
  <section class="video">
    <video class="video__movie" :src="videoLink" ref="video" @pause="paused">
      <source :src="videoLink" type="video/mp4">
    </video>
    <img class="video__bg" src="/imgs/playlists/video-bg.jpg" alt="" v-if="active">
    <div class="container" ref="play">
      <div class="video__play" @click="clicked">
        <img src="@/assets/imgs/watch-video.svg" alt="">
      </div>
    </div>
  </section>
</template>

<script setup>
import {ref} from 'vue';
import triggerMetrika from "~/helpers/metrika";

const props = defineProps({
  videoId: String,
  videoLink: String
});

const active = ref(true);
const video = ref(null);
const play = ref(null);

const clicked = () => {
  play.value.classList.add('inactive');
  active.value = false;
  video.value.setAttribute('controls', true);
  video.value.play();
  triggerMetrika(props.videoId);
};

const paused = () => {
  play.value.classList.remove('inactive');
  active.value = true;
  video.value.removeAttribute('controls');
};
</script>

<script>
export default {
  name: 'PlaylistsBottomVideo'
}
</script>

<style lang="scss" scoped>
:deep(.inactive) {
  display: none;
}

.video {
  position: relative;
  padding: 4px 0;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 4px;
    background: linear-gradient(90deg, #F9DCBC 41.46%, #FEF9E9 76.87%, #FADEB9 129.54%, #F5D6AC 146.53%, #E6BA93 155.94%, #DCAF82 165.65%, #D2A47A 175.5%, #D9AD7A 180.65%, #EED6B5 204.25%, #FCEBD5 231.77%);
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 4px;
    background: linear-gradient(90deg, #F9DCBC 41.46%, #FEF9E9 76.87%, #FADEB9 129.54%, #F5D6AC 146.53%, #E6BA93 155.94%, #DCAF82 165.65%, #D2A47A 175.5%, #D9AD7A 180.65%, #EED6B5 204.25%, #FCEBD5 231.77%);
  }

  &__bg {
    position: absolute;
    object-fit: cover;
    left: 0;
    right: 0;
    top: 4px;
    bottom: 4px;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
  }

  &__movie {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100svh;
    object-fit: cover;
    display: block;
  }

  &__play {
    position: absolute;  
    bottom: 80px;
    cursor: pointer;

    img {
      display: block;
    }

    @media (max-width: 1599px) {
      bottom: 40px;

      img {
        width: 82px;
        height: 82px;
      }
    }

    @media (max-width: 767px) {
      bottom: 20px;

      img {
        width: 59px;
        height: 59px;
      }
    }
  }
}
</style>
