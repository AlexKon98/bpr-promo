<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__copyright"><p>&copy; ЧЕРНЫЙ ЖЕМЧУГ 2023, РОССИЯ.</p><p>RESORT – КУРОРТ. Место действия и персонажи вымышленные.</p></div>
      <div class="footer__age">18+</div>
    </div>
  </footer>
</template>

<script>
export default {
  props: {
    text: {
      type: String
    }
  },
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 64px 0;
  background-color: #3A3A3C;
  margin-top: auto;
  .container {
    display: flex;
    justify-content: space-between;
    &--second {
      opacity: .5;
      color: #FFF;
      font-size: 14px;
      font-style: normal;
      line-height: normal;
      margin-top: 32px;
    }
  }
  &__copyright {
    display: flex;
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 0.7px;
    margin-right: 20px;
  }
  &__age {
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    line-height: normal;
    letter-spacing: 1.4px;
  }
}

@media (max-width: 1023px) {
  .footer {
    position: static;
    padding: 32px 0;
    .container--second {
      display: none;
    }
    &__copyright {
      flex-direction: column;
    }
  }
}

@media (max-width: 767px) {
  .footer {
    .container {
      flex-direction: column;
    }
    &__copyright {
      flex-direction: column;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 0.6px;
      margin-bottom: 24px;
      max-width: 250px;
    }
    &__age {
      font-size: 12px;
      letter-spacing: 1.2px;
    }
  }
}

@media (max-width: 500px) {
  .footer__copyright {
    max-width: 250px;
  }
}
</style>