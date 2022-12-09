<template>
  <div class="product__counter form__counter">
    <button type="button" aria-label="Убрать один товар" @click="amount--">
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-minus"></use>
      </svg>
    </button>

    <input type="text" v-model.number="amount" name="count">

    <button type="button" aria-label="Добавить один товар" @click="amount++">
      <svg width="10" height="10" fill="currentColor">
        <use xlink:href="#icon-plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
  import numberFormat from "@/helpers/numberFormat";

  export default {
      props: ['counter'],
      filters: {numberFormat},
      data(){
          return {
              amount: 1,
          }
      },
      watch: {
          amount(newValue, prevValue) {
              if (Number.isNaN(+this.amount || this.amount <=0){
                  this.amount = prevValue;
              } else {
                  this.$emit('update:counter', +this.amount);
              }
          }
      },
      created(){
          if(this.counter){
              this.amount = this.counter;
          }
      },
  }
</script>
