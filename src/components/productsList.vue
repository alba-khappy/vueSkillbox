<template>
  <ul class="catalog__list">
      <products-item v-for="(product, i) in products"
                     :product-item="product"
                     :key="i"></products-item>
  </ul>
</template>

<script>

import productsItem from './productsItem.vue';
import products from '../data/products';

export default {
  name: 'productsList',
  components: { productsItem },
  data() {
    return {
      products,
    };
  },
};
</script>

<style scoped>
</style>
