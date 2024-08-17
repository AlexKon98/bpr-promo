<template>
  <ul class="products__list">
    <template v-for="(chunk, i) in chunks" :key="i">
      <li class="products__item">
        <div class="products__item-wrapper"
          :class="{'active': prod.active}"
          v-for="prod in chunk"
          :key="prod.id"
          @click="changeChunk(prod, i)"
        >
          <img :src="prod.img" alt="">
        </div>
      </li>
      <ProductCopyright :id="'copyright_' + i" v-if="chunk.some(prod => prod.active)" :copyright="chunk.find(prod => prod.active)"/>
    </template>
  </ul>
</template>

<style lang="scss" scoped>
.products {
  &__list {
    margin-top: -16px;
    padding-top: 16px;
    overflow: hidden;
    display: flex;
    gap: 8px 0;
    flex-direction: column;
    margin-bottom: 8px;
  }
  &__item {
    display: flex;
    gap: 0 8px;
    padding-left: 8px;
    &-wrapper {
      cursor: pointer;
      position: relative;
      width: calc(25% - 8px);
      overflow: hidden;
      transition: transform .3s linear;
      img {
        position: relative;
        z-index: 2;
        max-width: 100%;
        display: block;
        width: 100%;
      }
      &::after {
        z-index: 1;
        position: absolute;
        content: '';
        top: -16px;
        left: -16px;
        right: -16px;
        bottom: -16px;
      }
      &.active {
        overflow: visible;
        z-index: 3;
        &:first-child {
          transform: translateX(8px);
        }
        &:last-child {
          transform: translateX(-8px);
        }
        &::after {
          background: linear-gradient(90deg, #F9DCBC 41.46%, #FEF9E9 76.87%, #FADEB9 129.54%, #F5D6AC 146.53%, #E6BA93 155.94%, #DCAF82 165.65%, #D2A47A 175.5%, #D9AD7A 180.65%, #EED6B5 204.25%, #FCEBD5 231.77%);
        }
      }
    }
  }
}

@media (max-width: 1023px) {
  .products__item-wrapper {
    width: calc((100% / 3) - 8px);
  }
  .products__list {
    padding-top: 12px;
    margin-top: -12px;
  }
  .products__item-wrapper.active {
    &:first-child {
      transform: translateX(5px);
    }
    &:last-child {
      transform: translateX(-5px);
    }
    &::after {
      top: -12px;
      left: -12px;
      right: -12px;
      bottom: -12px;
    }
  }
}

@media (max-width: 767px) {
  .products__item-wrapper {
    width: 100%;
    &.active {
      &:first-child {
        transform: none;
      }
      &:last-child {
        transform: none;
      }
      &::after {
        top: -8px;
        left: -8px;
        right: -8px;
        bottom: -8px;
      }
    }
  }
  .products__item {
    padding-right: 8px;
  }
}
</style>

<script setup>
import ProductCopyright from './ProductCopyright.vue';
</script>

<script>
import products from '@/helpers/products';
import chunkArray from '@/helpers/chunkArray';
import triggerMetrika from "~/helpers/metrika";
import {getProductMetrikaTag} from "~/helpers/get-product-metrika-tag";

export default {
  name: 'ProductsList',
  data() {
    return {
      chunks: [],
      products: products
    }
  },
  methods: {
    onProductClick({ name }) {
      triggerMetrika(getProductMetrikaTag('products', name, 'click'));
    },
    chunkArray(array, chunkSize) {
      return array.reduce((total, _, index) => {
        if (index % chunkSize !== 0) {
          return total;
        }
        return [...total, array.slice(index, index + chunkSize)];
      }, []);
    },
    chunkingArray() {
      if (window.innerWidth > 1023) this.chunks = chunkArray(this.products, 4);
      if (window.innerWidth < 1024 && window.innerWidth > 767) this.chunks = chunkArray(this.products, 3);
      if (window.innerWidth < 768) this.chunks = chunkArray(this.products, 1);
    },
    changeChunk(prod, i) {
      this.onProductClick(prod);
      if (!prod.active) {
        this.chunks.forEach(chunk => chunk.forEach(prod => prod.active = false));
        prod.active = true;
        setTimeout(() => {
          document.getElementById(`copyright_${i}`).scrollIntoView({ behavior: "smooth", block: "start" });
        }, 20);
      } else {
        prod.active = false;
      }
    }
  },
  mounted() {
    this.products.forEach(prod => prod.active = false);
    this.chunkingArray();
    window.onresize = this.chunkingArray;
  },
  beforeUnmount() {
    window.onresize = null;
  }
}
</script>
