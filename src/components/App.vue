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
        <button @click="restartGame">restartGame</button>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Card from './Card.vue'

export default {
    components:{
        Card
    },
    computed:{
        ...mapGetters([
            'cards',
            'cardById',
        ]),
    }, 
    data(){
        return{
            openedCards: [],
        }
    },
    methods:{
        ...mapMutations([
            'createCards',
            'shuffleCards',
            'resetCards'
        ]),
        selectCard(e){
            let card = this.cardById(e.position)

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
        }
    },
    mounted(){
        this.createCards()
        //this.shuffleCards()
    }
}
</script>

<style lang="scss">
    body{
        //background-image: ;
    }
    .game-board {
        display: grid;
        grid-template-columns: repeat(6, 70px);
        column-gap: 10px;
        row-gap: 10px;
        justify-content: center;
    }
</style>