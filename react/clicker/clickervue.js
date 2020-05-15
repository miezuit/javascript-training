import 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'

Vue.component('Clicker', {
    template: `
        <button @click="handleClick">
            You clicked me {{ clicks }} times
        </button>
    `,
    data() {
        return {
            clicks: 0
        }
    },
    methods: {
        handleClick() {
            this.clicks++;
        }
    }
})

new Vue({
    el: '#app',
    components: [ 'Clicker' ]
})