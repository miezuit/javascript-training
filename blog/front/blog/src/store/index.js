
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: null,
        token: null
    },
    mutations: {
        login: (state, user, token) => {
            state.user = user
            state.token = token
        }
    },
})