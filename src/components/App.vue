<template>
    <div class="game-container">
        <main-menu v-if="currentScene === 0"/>
        <game-board v-else-if="currentScene === 1"/>
        <stats v-else/>
        <div class="game-container_blur"/>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import MainMenu from './MainMenu.vue'
import GameBoard from './GameBoard.vue'
import Stats from './Stats.vue'

export default {
    components:{
        MainMenu,
        GameBoard,
        Stats
    },
    computed:{
        ...mapGetters([
            'currentScene'
        ]),
    }, 
    methods:{
        ...mapActions([
            'loadStatsFromStorage'
        ]),
    },
    mounted(){
        this.loadStatsFromStorage()
    }
}
</script>

<style lang="scss">
    body{
        background: rgb(65, 151, 84);
        font-family: Comic Sans MS, Comic Sans, cursive;
    }

    .game-container{
        width: 500px;
        height: 494px;
        margin: 0 auto;
    }
</style>