import Vue from 'vue';
import App from './App.vue';

import productsList from './components/productsList.vue';

import { firstVariable, secondVariable } from './data/variablesTask2';
import messageAlert from './data/funcTask2';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  components: {
    'products-list': productsList
  },
}).$mount('#app');

messageAlert(firstVariable);
messageAlert(secondVariable);
