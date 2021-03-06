export default {
    state: {
        cards: [],
    },
    mutations: {
        createCards(state){
            let k = 1
            for(let i = 1; i <= 36; i++){
                state.cards.push({
                    pairId: k,
                    visible: false,
                    finded: false,
                })
                if(i % 2 === 0)
                    k++
            }
        },
        shuffleCards(state){
            state.cards = _.shuffle(state.cards)
        },
        resetCards(state){
            state.cards = state.cards.map(card => {
                return {
                    ...card,
                    finded: false,
                    visible: false
                }
            })
        }
    },   
    actions: {

    },
    getters: {
        cards: state => {
            return state.cards
        },
        cardById: state => id => {
            return state.cards[id]
        },
    },
}
