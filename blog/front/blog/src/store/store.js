import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: null,
        email: null,
        token: null
    },
    mutations: {
        saveLoginData: (state, loginData) => {
            state.name = loginData.name
            state.token = loginData.token
            state.email = loginData.email
        },
        clearLoginData: (state) => {
            state.name = null
            state.token = null
            state.email = null
        }
    },
})