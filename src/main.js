import Vue from 'vue';
import App from './App.vue';


import { firstVariable, secondVariable } from './data/variablesTask2';
import messageAlert from './data/funcTask2';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

messageAlert(firstVariable);
messageAlert(secondVariable);
