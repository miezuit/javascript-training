import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            name: null,
            email: null,
            token: null
        }
    },
    mutations: {
        login: (state, loginUser) => {
            state.user = loginUser
            localStorage.setItem('blog_user', JSON.stringify(state.user))
        },
        logout: (state) => {
            state.user = {
                name: null,
                email: null,
                token: null
            }
            localStorage.removeItem('blog_user')
        },
        init: (state) => {
            if(localStorage.getItem('blog_user')) {
                state.user = JSON.parse(localStorage.getItem('blog_user'))
            }
        }
     }
})

