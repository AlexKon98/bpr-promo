<template>
  <main class="main">
    <PlaylistsHero :image="baseURL + pageInfo.bg" :h1="pageInfo.h1" :text="pageInfo.text" />
    <KinopoistLinks :videos="pageInfo.videos" />
    <PlaylistContent :h2="pageInfo.h2" :p="pageInfo.p" />
    <SwiperSlider />
    <PlaylistsBottomVideo :video-link="pageInfo.videoLink" :video-id="pageInfo.videoId" />
    <section class="false-footer">
      <div class="container">
        <div class="false-footer__wrap">
          <div class="false-footer__copyright">
            <p>&copy; ЧЕРНЫЙ ЖЕМЧУГ 2023, РОССИЯ.</p><p>RESORT – КУРОРТ. Место действия и персонажи вымышленные.</p>
          </div>
          <div class="container disclaimer" v-if="page === 'meeting' || page === 'relax'">
            [*] — в ассортименте ООО «Юнилевер Русь».
          </div>
        </div>
        <div class="false-footer__age">18+</div>
      </div>
    </section>
  </main>
</template>

<script setup>
import PlaylistsHero from '~/components/PlaylistsHero.vue';
import KinopoistLinks from '~/components/KinopoistLinks.vue';
import PlaylistContent from '~/components/PlaylistContent.vue'
import SwiperSlider from '~/components/SwiperSlider.vue';
import PlaylistsBottomVideo from '~/components/PlaylistsBottomVideo.vue';

definePageMeta({
  middleware: 'redirect'
});

const route = useRoute();
const title = playlistsPages[route.params.id].h1;

useSeoMeta({
  title: title.toUpperCase(),
});

definePageMeta({
  layout: 'custom',
});

const { baseURL } = useRuntimeConfig().app;
</script>

<script>
import playlistsPages from '~/helpers/playlistsPages';

export default {
  name: 'PlaylistsCategory',
  data() {
    return {
      pageInfo: playlistsPages[this.$route.params.id],
    }
  },
  computed: {
    page() {
      return this.$route.params.id;
    }
  }
}
</script>

<style lang="scss">
.main {
  background-color: #7C65BE;
}

.disclaimer {
  color: #FFF;
  font-size: 14px;
  font-style: normal;
  line-height: normal;
  margin-top: 32px;
  opacity: 0.5;
  padding: 0;
}

.false-footer {
  background-color: #3A3A3C;
  padding: 52px 0;
  position: relative;
  z-index: 8;
  margin-top: auto;
  .container {
    display: flex;
    justify-content: space-between;
  }
  &__wrap {
    display: flex;
    flex-direction: column;
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
  .false-footer {
    &__copyright {
      flex-direction: column;
    }
  }
}

@media (max-width: 767px) {
  .false-footer {
    padding: 32px 0;
    .container {
      flex-direction: column;
      gap: 24px 0;
    }
  }
  .disclaimer {
    margin-top: 16px;
  }
}

@media (max-width: 500px) {
  .false-footer__copyright {
    max-width: 285px;
  }
}
</style>
