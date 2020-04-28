var app = new Vue({
    el: '#app',
    data: {
        isActive: true
    },
    methods: {
        toggleActive() {
            this.isActive = !this.isActive;
        }
    },
    computed: {
        randomColor() {
            return '#' + Math.floor(Math.random()*16777215).toString(16);
        }
    }
});