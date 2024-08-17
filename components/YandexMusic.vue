<template>
  <section class="yandex-music">
    <div class="container">
      <ClientOnly>
        <iframe class="yandex-music__player" frameborder="0" :src="src"></iframe>
      </ClientOnly>
    </div>
  </section>
</template>

<script>
export default {
  name: 'YandexMusic',
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style lang="scss">
.yandex-music {
  width: 100%;
  margin: 0 0 80px;
  &__player {
    border-radius: 20px !important;
    overflow: hidden;
    border: none;
    width: 100%;
    height: 768px;
  }
}

@media (max-width: 767px) {
  .yandex-music {
    margin: 0 0 40px;
    &__player {
      height: 640px;
    }
  }
}
</style>