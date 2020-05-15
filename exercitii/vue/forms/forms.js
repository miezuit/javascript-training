import 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'

let app = new Vue({
    el: '#app',
    data: {
        name: null,
        age: null,
        framework: null,
        errors: []
    },
    methods: {
        validate() {
            this.errors = [
                'Name must not be null'
            ]
        },
        hasErrors() {
            return this.errors.length > 0
        }
    }
})