import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vuex/dist/vuex.js"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    increments: 0,
    decrements: 0,
    message: 'hello'
  },
  getters: {
    count: state => state.increments - state.decrements
  },
  mutations: {
    increment: (state, n) => state.increments += n,
    decrement: (state, n) => state.decrements += n,
    changeMessage: (state, newMessage) => state.message = newMessage
  }
})

const Counter = {
    template: `<div>{{ count }}</div>`,
    computed: {
        count () {
            return this.$store.getters.count
        }
    }
}

const NiceInput = {
    template: `<input type="text" v-model="message">`,
    computed: {
        message: {
            get () {
              return this.$store.state.message
            },
            set (value) {
              this.$store.commit('changeMessage', value)
            }
          }
    }
}

new Vue({
    el: '#app',
    store: store,
    components: {Counter, NiceInput},
    methods: {
        increment: event => store.commit('increment', 10),
        decrement: event => store.commit('decrement', 10)
    }
})