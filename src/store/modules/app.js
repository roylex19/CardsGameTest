export default {
    state: {
        cards: [],
        firstCardId: null,
    },
    mutations: {
        CREATE_CARDS_ARRAY(state, count = 36){
            state.cards = []
            var k = 1
            for(var i = 1; i < count + 1; i++){
                state.cards.push({
                    id: i,
                    pairId: k,
                    isOpened: false,
                    isHidden: false,
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
            state.cards.find(card => card.id == data.id).isOpened = data.isOpened
        },
        SET_FIRST_CARD_ID(state, id){
            state.firstCardId = id
        },
        HIDE_CARD(state, id){
            state.cards.find(card => card.id == id).isHidden = true
        },
    },   
    actions: {
        gameInitialize({commit}){
            commit('CREATE_CARDS_ARRAY')
            //commit('SHUFFLE_CARDS_ARRAY')
        },
        changeCardOpenState({commit}, data){
            commit('CHANGE_CARD_OPEN_STATE', data)
        },
        setFirstCardId({commit}, id){
            commit('SET_FIRST_CARD_ID', id)
        },
        hideCard({commit}, id){
            commit('HIDE_CARD', id)
        }
    },
    getters: {
        cards: state => {
            return state.cards
        },
        card: state => id => {
            return state.cards.find(card => card.id == id)
        },
        firstCardId: state => {
            return state.firstCardId
        }
    },
}
