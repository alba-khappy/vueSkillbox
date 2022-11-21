<template>
  <div>
    <div id="hello"></div>
    <section class="catalog">
      <ProductList :products="products"></ProductList>
      <app-pagination :page="page" :count="countProducts" :per-page="productsPerPage"></app-pagination>
    </section>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import products from "./data/products";
import AppPagination from "./components/AppPagination";

export default {
    name: 'App',
    components: { ProductList, AppPagination },
    data() {
        return {
            products,
            page: 1,
            productsPerPage: 3,
        }
    },
    computed: {
        products() {
            const offset = (this.page - 1) * this.productsPerPage;
            return products.slice(offset, offset + this.productsPerPage);
        },
        countProducts() {
            return products.length;
        }
    }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
