
Vue.addComponent({

});

var app = new Vue({
    el: '#app',
    data: {
        todos: [],
        task: ''
    },
    methods: {
        saveItem() {
            // adaugam valoarea din task in lista de todo
            this.todos.push(this.task);
            // resetam task-ul
            this.task = '';
        }
    }
});