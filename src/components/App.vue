<template>
    <div class="container">
        <card v-for="(card, index) in Cards"
            :key="index"
            :id="index"
            :pairId="card.id"
        />
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Card from './Card.vue'

export default {
    components:{
        Card
    },
    computed:{
        ...mapGetters([
            'Cards'
        ])
    },
    data(){
        return{
            
        }
    },
    methods:{
        ...mapActions([
            'gameInitialize'
        ]),
    },
    mounted(){
        this.gameInitialize()
    }
}
</script>

<style lang="scss">
    @import '../styles/cards.scss';

    .container {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: center;
        align-items: flex-start;
        width: 50%;
        background: green;
    }
</style>