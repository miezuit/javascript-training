import 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js'

let app = new Vue({
    el: '#app',
    data: {
        show: true,
        isOn: true,
        numbers: [1, 2, 3, 4, 5, 6, 7]
    },
    methods: {
        add() {
            this.numbers.push(Math.floor(Math.random() * 10));
        },
        remove() {
            this.numbers.pop();
        }
    },
})