<template>
  <section class="content">
    <img class="content__decor" src="@/assets/imgs/svg-line-logo.svg" alt="">
    <div class="container">
      <h2 v-html="h2" class="content__title"></h2>
      <div class="content__text">{{ p }}</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.content {
  padding-top: 220px;
  margin-bottom: 80px;
  position: relative;
  &__decor {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: block;
    width: 100%;
    height: 160px;
    object-fit: cover;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  &__title {
    color: #FFF;
    text-align: center;
    font-size: 80px;
    font-style: normal;
    line-height: 90px;
    letter-spacing: 4px;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
  &__text {
    color: #FFF;
    font-size: 20px;
    font-style: normal;
    line-height: 30px;
    max-width: 800px;
  }
}

@media (max-width: 1023px) {
  .content {
    padding-top: 185px;
    &__title {
      font-size: 60px;
      line-height: 66px;
    }
  }
}

@media (max-width: 767px) {
  .content {
    padding-top: 150px;
    margin-bottom: 27px;
    &__decor {
      height: 115px;
    }
    &__title {
      font-size: 32px;
      line-height: 40px;
      margin-bottom: 16px;
    }
    &__text {
      font-size: 14px;
      line-height: 24px;
    }
  }
}
</style>

<script>
export default {
  props: {
    p: {
      type: String
    },
    h2: {
      type: String
    }
  }
}
</script>