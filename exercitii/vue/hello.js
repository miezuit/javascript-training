Vue.component(
    'hello',
    {
        'template': "<div>Hello World!</div>"
    }
);

var app = new Vue({
    el: '#app', // elementul pe care il controleaza Vue
    data: {     // datele aplicatiei (model)
        message: "Hello Vue!",
        show: true,
        todos: [
            "Learn Java Script",
            "Learn Vue.JS",
            "Learn React",
            "Be free!"
        ],
        title: "This is a welcome message"
    },
    methods: {
        reverse: function() {
            this.message = this.message
                           .split('')
                           .reverse()
                           .join('');
        }
    }
});