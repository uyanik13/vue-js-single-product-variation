import Vue from 'vue'
//import App from '@/App.vue'
import App from '@/MainAPP.vue'

import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css' //Material Icons
import 'vuesax/dist/vuesax.css' // Vuesax
Vue.use(Vuesax)


//import router from '@/router'

// Globally Registered Components
import '@/globalComponents.js'

// Styles: SCSS
import '@/assets/scss/main.scss'


// Tailwind
import '@/assets/css/main.css'
import '@/assets/scss/tailwind.scss'

// Feather font icon
require('@/assets/css/iconfont.css')


new Vue({

    render: h => h(App)
}).$mount('#app')