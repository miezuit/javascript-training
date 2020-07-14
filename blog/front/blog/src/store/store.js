import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        email: null,
        token: null
    },
    mutations: {
        saveLoginData: (state, loginData) => {
            state.user = loginData.user
            state.token = loginData.token
            state.email = loginData.email
        }
    },
})