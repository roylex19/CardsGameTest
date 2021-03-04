<template>
    <div class="container">
        <card v-for="(card, index) in cards"
            :key="index"
            :id="card.id"
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
            'cards',
        ]),
    },
    data(){
        return{
            
        }
    },
    methods:{
        ...mapActions([
            'gameInitialize',
        ]),
    },
    mounted(){
        this.gameInitialize()
    }
}
</script>

<style lang="scss">
    .container {
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;
        justify-content: center;
        align-items: flex-start;
        width: 550px;
        background: green;
    }
</style>