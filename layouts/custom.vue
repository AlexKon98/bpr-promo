<template>
  <div class="app">
    <Header />
    <slot />
  </div>
</template>

<script setup>
import Header from '~/components/Header.vue';
</script>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}
</style>