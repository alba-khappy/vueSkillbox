<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#" @click.prevent="gotoPage('product', {id: product.id})">
      <img :src="productItem.image" alt="Название товара">
    </a>

    <h3 class="catalog__title">
      <a href="#">
        {{ productItem.title }}
      </a>
    </h3>

    <span class="catalog__price">
      {{ productItem.price }}
    </span>

    <ul class="colors colors--black">
      <li class="colors__item" v-for="color in productItem.colors">
        <label class="colors__label">
          <input class="colors__radio sr-only"
                 type="radio"
                 value="#73B6EA">
          <span class="colors__value" :style="{ 'background-color': color}">
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script>
  import eventBus from "@/eventBus";

  export default {
    data(){
        return {
        };
    },
    name: 'productsItem',
    methods: {
        gotoPage(pageName, pageParams){
            eventBus.$emit('gotoPage', pageName, pageParams)
        },
    },
    props: ['productItem', 'products'],
  };
</script>

<style scoped>

</style>
