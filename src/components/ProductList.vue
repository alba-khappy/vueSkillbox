<template>
  <ul class="catalog__list">
      <ProductItem v-for="(product, i) in products"
                     :product-item="product"
                     :key="i"></ProductItem>
  </ul>
</template>

<script>

import ProductItem from './ProductItem.vue';
import products from '../data/products';

export default {
  name: 'ProductList',
  components: { ProductItem },
  data() {
    return {
      products,
      // page: 1,
      // productsPerPage: 3,
    };
  },
    // computed: {
    //     products() {
    //         const offset = (this.page - 1) * this.productsPerPage;
    //         return products.slice(offset, offset + this.productsPerPage);
    //     }
    // }
};
</script>

<style scoped>
</style>
