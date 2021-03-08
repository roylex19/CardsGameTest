import Vue from 'vue'
import Vuex from 'vuex'

import cards from "./modules/cards"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentScene: 0,
        stats: []
    },
    mutations: {
        setCurrentScene(state, val){
            state.currentScene = val
        },
        addStats(state, val){
            state.stats.push(val)
        },
    },
    actions: {
        loadStatsFromStorage({state}){
            if(localStorage.getItem('stats')){
                state.stats = JSON.parse(localStorage.getItem('stats'))
            } else {
                localStorage.setItem('stats', [])
            }
        },
        addStatsInStorage({commit, state}, val){
            commit('addStats', val)
            localStorage.setItem('stats', JSON.stringify(state.stats))
        }
    },
    getters: {
        currentScene: state => {
            return state.currentScene
        },
        stats: state => {
            return state.stats.reverse()
        }
    },
    modules: {
        cards,
    },
})
