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
            // validate name not empty
            // validate age not empty
            // validate framework not empty
        }
    },
    computed: {
        hasErrors() {
            return errors.length > 0
        }
    }
})