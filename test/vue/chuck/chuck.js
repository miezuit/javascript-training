var app = new Vue({
    el: '#app',
    data: {
        fact: ''
    },
    methods: {
        loadFact() {
            axios
                .get('http://api.icndb.com/jokes/random')
                .then(response => (this.fact = response.data.value.joke))
                .catch(error => console.log(error));
        }
    },
    mounted() {
        this.loadFact();
    }
});