import { createStore } from 'vuex'
const store = createStore({
    state() {
        return {
            quantity : 0,
            quantityUpdatted : 0
        }
    },
    mutations: {
        INCREMENT_COUNT(state) {
            state.quantity++
        },
        DECREMENT_COUNT(state) {
            state.quantity--
        },
        UPDATE_QUANTITY(state) {
            state.quantityUpdatted += state.quantity
        },
        DELETE_QUANTITY_UPDATED(state){
            state.quantityUpdatted = 0
        }
    }
})

export default store