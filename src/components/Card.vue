<template>
    <div class="card" @click="open" v-show="!thisCard.isHidden">
        <div class="card__body">
            <div class="card__icon" :class="cardClass" v-if="thisCard.isOpened"></div>
            <div class="card__icon" v-else></div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    props: [
        'id',
    ],
    computed: {
        ...mapGetters([
            'card',
            'firstCardId'
        ]),
        cardClass(){
            return 'icon__' + this.thisCard.pairId
        },
        thisCard(){
            return this.card(this.id)
        },
        FirstCardId: {
            get(){
                return this.firstCardId
            },
            set(val){
                this.setFirstCardId(val)
            }
        },
        firstCard(){
            return this.card(this.FirstCardId)
        }
    },
    data(){
        return{
            handleDelay: 500
        }
    },
    methods:{
        ...mapActions([
            'changeCardOpenState',
            'setFirstCardId',
            'closeCard'
        ]),
        open(){
            this.thisCard.isOpened = true

            if(!this.FirstCardId){
                this.FirstCardId = this.id
            } else if(this.FirstCardId && this.thisCard.id != this.FirstCardId){
                if(this.firstCard.pairId == this.thisCard.pairId){
                    setTimeout(this.hide, this.handleDelay)
                } else {
                    setTimeout(this.close, this.handleDelay)
                }
                
            }
        },
        hide(){
            this.thisCard.isHidden = true
            this.firstCard.isHidden = true
            this.FirstCardId = null
        },
        close(){
            this.thisCard.isOpened = false
            this.firstCard.isOpened = false
            this.FirstCardId = null
        }
    }
}
</script>

<style lang="scss">
    @import '../styles/card-icons.scss';

    .card {
        display: flex;
        justify-content: center;
        width: 75px;
        height: 80px;
        background: #ccc;
        margin: 5px;
        &__body {
            display: flex;
            align-items: center;
        }
        &__icon {
            width: 68px;
            height: 72px;
        }
    }
</style>