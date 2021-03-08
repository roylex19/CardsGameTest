<template>
    <div class="game-board">
        <card v-for="(card, index) in cards"
            :key="index"
            :position="index"
            :visible="card.visible"
            :pairId="card.pairId"
            :finded="card.finded"
            @selectCard="selectCard"
        />
        <div class="game-board__time" v-if="!allCardsFinded">
            Текущее время:&nbsp;{{time}}
        </div>
        <div class="game-board__result" v-else>
            <p>Вы выиграли!</p>
            <p>Ваше время: {{time}}</p>
            <div class="game-board__result__buttons">
                <button @click="restartGame">Играть еще раз</button>
                <button @click="setCurrentScene(2)">Статистика</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import moment from 'moment'

import Card from './Card.vue'

export default {
    components:{
        Card,
    },
    computed:{
        ...mapGetters([
            'cards',
            'cardById',
            'allCardsFinded'
        ]),
    }, 
    data(){
        return{
            openedCards: [],
            time: '00:00',
            timerInterval: null,
        }
    },
    methods:{
        ...mapMutations([
            'createCards',
            'shuffleCards',
            'resetCards',
            'setCurrentScene'
        ]),
        ...mapActions([
            'addStatsInStorage'
        ]),
        selectCard(e){
            let card = this.cardById(e.position)
            card.position = e.position

            card.visible = true

            if(this.openedCards[0]){
                if((this.openedCards[0].position === e.position) && 
                   (this.openedCards[0].pairId === e.pairId)){
                    return
                } else {
                    this.openedCards[1] = card
                }
            } else {
                this.openedCards[0] = card
            }

            let cardOne = this.openedCards[0]
            let cardTwo = this.openedCards[1]

            if(this.openedCards.length === 2){
                if(cardOne.pairId === cardTwo.pairId){
                    setTimeout(() => {
                        cardOne.finded = true
                        cardTwo.finded = true
                    }, 500)
                }
                else {
                    setTimeout(() => {
                        cardOne.visible = false
                        cardTwo.visible = false
                    }, 500)
                }
                    
                this.openedCards.length = 0
            }
        },
        restartGame(){
            this.resetCards()
            this.shuffleCards()
            this.startTimer()
        },
        startTimer(){
            this.time = '00:00'
            this.timerInterval = setInterval(() => {
                if(this.allCardsFinded){
                    this.addStatsInStorage(this.time)
                    this.stopTimer()
                    return
                }
                this.time = moment(this.time, 'mm:ss').add(1, 'seconds').format('mm:ss')
            }, 1000)
        },
        stopTimer(){
            clearInterval(this.timerInterval)
        }
    },
    mounted(){
        this.createCards()
        this.shuffleCards()
        this.startTimer()
    }
}
</script>

<style lang="scss">
    .game-board {
        position: relative;
        display: grid;
        grid-template-columns: repeat(6, 70px);
        column-gap: 10px;
        row-gap: 10px;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        &__time {
            display: flex;
            justify-content: center;
            width: 470px;
        }
        &__result {
            position: absolute;
            text-align: center;
            width: 100%;
            &__buttons{
                font-family: Comic Sans MS, Comic Sans, cursive;
                button{
                    border-radius: 10px;
                    border: none;
                    padding: 5px 10px;
                    font-size: 15px;
                    cursor: pointer;
                }
            }
        }
    }
</style>