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
            task: '',
        }
    },
    methods: {
        saveTodo() {
            // adaugam valoarea din task in lista de todo
            this.$store.commit('saveTodo', this.task);
            this.task = '';
        },
        checkTodo(index) {
            this.$store.commit('checkTodo', index);
        },
        deleteTodo(index) {
            this.$store.commit('deleteTodo', index);
        }
    },
    computed: {
        filteredTodos() {
            return this.$store.getters.filteredTodos
        },
        showDone: {
            get () {
                return this.$store.state.showDone
            },
            set () {
                this.$store.commit('changeShowDone', value)
            }
        }
    },
});