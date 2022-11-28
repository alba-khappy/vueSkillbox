<template>
  <li class="catalog__item">
    <a class="catalog__pic" href="#">
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

    <ul class="colors colors--black" v-for="color in productItem.colors">
      <li class="colors__item">
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
export default {
  data(){
      return {
      };
  },
  name: 'productsItem',
  props: ['productItem', 'products'],
};
</script>

<style scoped>

</style>
