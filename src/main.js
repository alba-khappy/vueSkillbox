import Vue from 'vue';
import App from './App.vue';

import {firstVariable} from "./data/variablesTask2";


Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

alert(firstVariable);
