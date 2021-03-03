<template>
    <div class="card" @click="IsOpened = !IsOpened">
        <div class="card__body">
            <div class="card__icon" v-if="IsOpened">
                Иконка
            </div>
            <div class="card__icon" v-else>
                Рубашка
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    props: [
        'id',
        'pairId',
    ],
    computed: {
        ...mapGetters([
            'Card'
        ]),
        IsOpened: {
            get(){
                return this.Card(this.id).isOpened
            },
            set(val){
                this.changeCardOpenState({
                    id: this.id,
                    isOpened: val
                })
            }
        }
    },
    data(){
        return{
            
        }
    },
    methods:{
        ...mapActions([
            'changeCardOpenState'
        ])
    }
}
</script>

<style lang="scss">
    .card {
        display: flex;
        justify-content: center;
        width: calc(16% - 5 * 2px);
        height: 100px;
        background: #ccc;
        margin: 5px;
        &__body {
            
        }
        &__icon {
            background: white;
        }
    }
</style>