<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import url(./assets/swiper.css);
@import url(./assets/style.scss);

.hover-links {
  transition: color .4s linear;
  &:hover {
    color: #F2BFA4 !important;
  }
}

::selection {
  background: #5A449A;
}

::-moz-selection {
  background: #5A449A;
}

@media (max-width: 1023px) {
  .container {
    padding: 0 24px;
  }
}
</style>