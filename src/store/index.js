import { createStore } from "vuex";

export default createStore({
    state: {
        user: null, 
        products: [],
        orders: [],
    },

    mutations: {
        setUser(state, payload) {
            state.user = payload;
        }
    },

    actions:{
        setUser(store, payload) {
            store.commit('setUser', payload.user);
        }
    }
    
});