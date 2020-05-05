<template>
    <div class="todo-list">
        <h1> {{list_name}} </h1>
        <div class="filters">
            <label>Show done:</label>
            <input type="checkbox" v-model="showDone">
        </div>
        <ul>
            <Task
                v-for="todo in filteredTodos"
                :key="todo.id"
                :task="todo"
                @checked="checkTodo(todo)"
                @deleted="deleteTodo(todo.id)">
            </Task>
        </ul>
        <div class="new_task">
                Task:
                <input type="text" v-model="task" @keyup.enter="saveTodo">
            <div class="save_task"><button @click="saveTodo">+</button></div>
        </div>
    </div>
</template>

<script>
import Task from './Task.vue'
import Todo from '../classes/Todo.js'

export default {
    name: 'ToDoList',
    props: {
        list_name: String
    },
    components: {
        Task
    },
    data() {
        return {
            todos: [
                new Todo('Something to do')
            ],
            task: '',
            showDone: true
        }
    },
    computed: {
        filteredTodos() {
            return this.todos.filter(todo => this.showDone || !todo.isDone);
        }
    },
    methods: {
        saveTodo() {
            // adaugam valoarea din task in lista de todo
            this.todos.push(new Todo(this.task));
            // resetam task-ul
            this.task = '';
        },
        checkTodo(todo) {
            todo.switchDone();
        },
        deleteTodo(id) {
            let index = this.todos.findIndex(todo => todo.id == id);
            this.todos.splice(index, 1);
        }
    }
};
</script>

<style scoped>
h1 {
    margin-top: 0;
    margin-bottom: 0.5em;
    padding-bottom: 0.2em;
    font-size: 1.5em;
    text-align: center;
    border-bottom: 1px solid #e0e0e0;;
}

.new_task {
    margin-top: 1em;
    text-align: right;
}

.save_task {
    display: flex;
    justify-content: center;
    margin-top: 0.5em;
}

button {
    font-size: 1.2em;
    width: 2em;
    height: 2em;
    border: 0;
    background-color: rgb(105, 185,	200);
    color: white;
    padding: 0.2em;
    border-radius: 50%;
    outline-style: none;
}

button:focus {
    outline-style: none;
}

input[type="text"] {
    font-size: 1em;
    background-color: #f5f5f5;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    padding: 0.5em;
    width: 85%;
    color: #888;
}

input[type=text]:focus {
    outline-style: none;
    border-bottom: 1px solid #e0e0e0;
}

.filters {
    padding-right: 0.4em;
    text-align: right;
    margin-bottom: 0.5em;
}

</style>

