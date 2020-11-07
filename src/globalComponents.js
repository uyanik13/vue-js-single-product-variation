/*=========================================================================================
  File Name: globalComponents.js
  Description: Here you can register components globally
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: dijitalreklam.org
  Author URL: https://www.dijitalreklam.org
==========================================================================================*/


import Vue from 'vue'
import VxTooltip from './components/vx-tooltip/VxTooltip.vue'
import VxCard from './components/vx-card/VxCard.vue'


Vue.component(VxTooltip.name, VxTooltip)
Vue.component(VxCard.name, VxCard)