var Vue = require('vue')
var _ = require('lodash')

import store from './store'

import App from './components/App.vue'

Vue.component('app', App)

new Vue({
    store,
    el: '#app',
})