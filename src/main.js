import Vue from 'vue';
import App from './App.vue';
// import HelloWorld from './components/HelloWorld.vue';
import productsItem from './components/productsItem.vue';

import { firstVariable, secondVariable } from './data/variablesTask2';
import messageAlert from './data/funcTask2';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

new Vue({
  render: (h) => h(productsItem),
}).$mount('#hello');

messageAlert(firstVariable);
messageAlert(secondVariable);
