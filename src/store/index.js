import {createStore} from 'vuex'

export default createStore({
    state: {
        token: '',
    },
    getters: {},
    mutations: {
        logIn(state){
            state.token = 'some token'
        }
    },
    actions: {},
    modules: {}
})
