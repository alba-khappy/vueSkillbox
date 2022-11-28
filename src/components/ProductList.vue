<template>
  <ul class="catalog__list">
      <ProductItem v-for="product in products"
                     :product-item="product"
                     :key="product.id"></ProductItem>
  </ul>
</template>

<script>

import ProductItem from './ProductItem.vue';

export default {
  name: 'ProductList',
  components: { ProductItem },
  props: ['products'],
  data() {
    return {
    };
  },
};
</script>

<style scoped>
</style>
