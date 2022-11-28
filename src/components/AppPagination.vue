<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow"
         aria-label="Предыдущая страница" @click.prevent="paginate(page - 1)" :class="{'disabled-link': btnDisabledLeft}">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-left"></use>
        </svg>
      </a>
    </li>

    <li class="pagination__item" v-for="pageNumber of pages" :key="pageNumber">
      <a href="#" class="pagination__link" :class="{'pagination__link--current': pageNumber === page}" @click.prevent="paginate(pageNumber)">
        {{pageNumber}}
      </a>
    </li>

    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow"
         href="#"
         aria-label="Следующая страница" @click.prevent="paginate(page + 1)" :class="{'disabled-link': btnDisabledRight}">
        <svg width="8" height="14" fill="currentColor">
          <use xlink:href="#icon-arrow-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
  export default {
      model: {
          prop: 'page',
          event: 'paginate',
      },
      props: ['page', 'count', 'perPage'],
      methods: {
          paginate(page){
              this.$emit('paginate', page);
              console.log(page);
          },
      },
      computed: {
          pages(){
              return Math.ceil(this.count / this.perPage);
          },
          btnDisabledLeft(){
              return this.page == 1;
          },
          btnDisabledRight(){
              return this.page == Math.ceil(this.count / this.perPage);
          },
  }
  }
</script>

<style lang="stylus">

  .disabled-link
    pointer-events: none;

</style>
