<template>
    <div class="container">
        <h1 class="container__title">Игра "Память"</h1>
        <div class="container__buttons">
            <button @click="startGame">Начать игру</button>
            <button @click="openStats">Статистика</button>
        </div>
        <div class="container_blur"></div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
    computed:{
        ...mapGetters([

        ]),
    }, 
    data(){
        return{
            
        }
    },
    methods:{
        startGame(){
            this.$store.state.currentScene = 1
        },
        openStats(){
            this.$store.state.currentScene = 2
        }
    },
    mounted(){

    }
}
</script>

<style lang="scss">
    .container{
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        background: url('../assets/atlas.png') 111%;
        border-radius: 10px;
        &__title{
            color: #eee;
            text-align: center;
            cursor: context-menu;
        }
        &_blur{
            position: absolute;
            z-index: -1;
            top: 0;
            left: 0;
            backdrop-filter: blur(8px);
            height: 100%;
            width: 100%;
        }
        &__buttons{
            text-align: center;
            button{
                font-family: Comic Sans MS, Comic Sans, cursive;
                border-radius: 10px;
                border: none;
                padding: 5px 10px;
                font-size: 15px;
                cursor: pointer;
            }
        }
    }
</style>