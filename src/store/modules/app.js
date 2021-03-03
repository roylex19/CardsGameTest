export default {
    state: {
        cards: [{
            pairId: 0,
            isOpened: false
        }]
    },
    mutations: {
        CREATE_CARDS_ARRAY(state, count = 36){
            var k = 0
            for(var i = 0; i < count - 1; i++){
                state.cards.push({
                    pairId: k,
                    isOpened: false
                })
                if(i % 2 == 0)
                    k++
            }
        },
        SHUFFLE_CARDS_ARRAY(state){
            var currentIndex = state.cards.length, tempValue, randomIndex
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex)
                currentIndex -= 1
                tempValue = state.cards[currentIndex]
                state.cards[currentIndex] = state.cards[randomIndex]
                state.cards[randomIndex] = tempValue
            }
        },
        CHANGE_CARD_OPEN_STATE(state, data){
            state.cards[data.id].isOpened = data.isOpened
        }
    },   
    actions: {
        gameInitialize({commit}){
            commit('CREATE_CARDS_ARRAY')
            commit('SHUFFLE_CARDS_ARRAY')
        },
        changeCardOpenState({commit}, data){
            commit('CHANGE_CARD_OPEN_STATE', data)
        }
    },
    getters: {
        Cards: state => {
            return state.cards
        },
        Card: state => id => {
            return state.cards[id]
        }
    },
}
