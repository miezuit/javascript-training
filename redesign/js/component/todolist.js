import { Todo } from '../class/Todo.js';

Vue.component('todo-list', {
    template: `
    <div class="todo-list">
        <h1>{{ list_name }}</h1>
        <div class="filters">
        <label>Show done:</label>
        <input type="checkbox" v-model="showDone" />
        </div>
        <ul>
        <task
            v-for="(todo, index) in filteredTodos"
            :key="index"
            :task="todo"
            @checked="checkTodo(index)"
            @deleted="deleteTodo(index)"
        ></task>
        </ul>
        <div class="new_task">
        New:
        <input type="text" class="task_input" v-model="task" @keyup.enter="saveTodo" />
        <div class="save_task">
            <button @click="saveTodo">+</button>
        </div>
        </div>
    </div>
    `,
    props: [ 'list_name' ],
    data() {
        return {
            todos: [
                new Todo('Something to do')
            ],
            task: '',
            showDone: true
        }
    },
    methods: {
        saveTodo() {
            // adaugam valoarea din task in lista de todo
            this.todos.push(new Todo(this.task));
            // resetam task-ul
            this.task = '';
        },
        checkTodo(index) {
            this.todos[index].switchDone();
        },
        deleteTodo(index) {
            this.todos.splice(index, 1);
        }
    },
    computed: {
        filteredTodos() {
            return this.todos.filter(todo => this.showDone || !todo.isDone)
        }
    },
});