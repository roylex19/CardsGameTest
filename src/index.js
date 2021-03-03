window.Vue = require('vue')

import store from './store'

import App from './components/App.vue'

Vue.component('app', App)

new Vue({
    store,
    el: '#app',
})