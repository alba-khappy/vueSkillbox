import Vue from 'vue';
import App from './App.vue';

import {firstVariable} from ".variablesTask2";
import {secondVariable} from ".variablesTask2";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// alert(data.message);
