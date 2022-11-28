<template>
  <div>
    <main class="content container">
      <div class="content__top content__top--catalog">
        <h1 class="content__title">
          Каталог
        </h1>
        <span class="content__info">
        152 товара
      </span>
      </div>

      <div class="content__catalog">
        <product-filter :price-from.sync="filterPriceFrom" :price-to.sync="filterPriceTo" :category-id.sync="filterCategoryId"></product-filter>

        <section class="catalog">
          <ProductList :products="products"></ProductList>
          <app-pagination v-model="page" :count="countProducts" :per-page="productsPerPage"></app-pagination>
        </section>
      </div>
    </main>



  </div>
</template>

<script>
import ProductList from './components/ProductList.vue';
import products from "./data/products";
import AppPagination from "./components/AppPagination";
import ProductFilter from "./components/ProductFilter";

export default {
    name: 'App',
    components: { ProductList, AppPagination, ProductFilter },
    data() {
        return {
            page: 1,
            productsPerPage: 3,
            filterPriceFrom: 0,
            filterPriceTo: 0,
            filterCategoryId: 0,
        }
    },
    computed: {
        filtredProducts(){
            let filterProducts = products;

            if(this.filterPriceFrom > 0){
                filterProducts = filterProducts.filter(product => product.price > this.filterPriceFrom)
            }

            if(this.filterPriceTo > 0){
                filterProducts = filterProducts.filter(product => product.price < this.filterPriceTo)
            }

            if(this.filterCategoryId > 0){
                filterProducts = filterProducts.filter(product => product.categoryId === this.filterCategoryId)
            }

            return filterProducts;
        },
        products() {
            const offset = (this.page - 1) * this.productsPerPage;
            return this.filtredProducts.slice(offset, offset + this.productsPerPage);
        },
        countProducts() {
            return this.filtredProducts.length;
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
