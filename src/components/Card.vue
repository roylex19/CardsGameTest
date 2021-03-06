<template>
    <div class="card" :class="[flippedStyles, findedStyles]" @click="selectCard">
        <div class="card__icon card__icon_front" :class="iconStyles"/>
        <div class="card__icon card__icon_back"/>
    </div>
</template>

<script>
export default {
    props: {
        position: {
            type: Number,
            required: true
        },
        visible: {
            type: Boolean,
            default: false
        },
        pairId: {
            type: Number,
            required: true
        },
        finded: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        iconStyles(){
            return 'card__icon_' + this.pairId
        },
        flippedStyles(){
            if(this.visible)
                return 'card_flipped'
        },
        findedStyles(){
            if(this.finded)
                return 'card_finded'
        }
    },
    methods:{
        selectCard(){
            this.$emit('selectCard', {
                position: this.$props.position,
                pairId: this.$props.pairId
            })
        }
    }
}
</script>

<style lang="scss">
    @import '../styles/card-icons.scss';

    .card {
        position: relative;
        display: flex;
        justify-content: center;
        background: #eee;
        border: 1px solid #000;
        width: 68px;
        height: 72px;
        border-radius: 10px;
        transition: 0.5s transform;
        transform-style: preserve-3d;
        transition: all 0.3s ease-out;
        &__icon {
            position: absolute;
            width: 100%;
            height: 100%;
            &_front{
                transform: rotateY(180deg);
            }
            &_back{
                backface-visibility: hidden;       
                border-radius: 10px;
            }
        }
        &_flipped{
            transform: rotateY(180deg);
        }
        &_finded{
            opacity: 0;
        }
    }
</style>