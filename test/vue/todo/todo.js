import { TodoList, Task } from "./classes.js"
import "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"

Vue.component('task', {
    props: ['task', 'index'],
    data() {
        return {
            editable: false,
            newDescription: ''
        }
    },
    template: `
    <li>
        <input type="text" v-if="editable" v-model="newDescription" @keyup.enter="changeDescription">
        <span v-else
           @click="task.switchDone()" 
           :class="{ description: true, done: task.isDone() }">
           {{ task.getDescription() }}
        </span>
        <span @click="remove">🗑</span>
        <span @click="edit">✎</span>
    </li>`,
    methods: {
        remove() {
            this.$emit('remove')
        },
        edit() {
            this.newDescription = this.task.getDescription()
            this.editable = true
        },
        changeDescription() {
            this.task.changeDescription(this.newDescription)
            this.editable = false
        }
    },
})

Vue.component('todo-list', {
    data() {
        return {
            list: new TodoList('Today'),
            newTaskDescription: 'hello'
        }
    },
    template: `
    <div class="todolist">
        <h2> {{ list.getName() }} </h2>
        <ul>
            <task 
            v-for="(task, index) in list.getTasks()" 
            :key="index" 
            :task="task" 
            :index="index"
            @remove="remove(index)">
        </task>
        </ul>
        <input type="text" v-model="newTaskDescription" @keyup.enter="newTask">
    </div>`,
    methods: {
        newTask() {
            let task = new Task(this.newTaskDescription)
            this.list.add(task)
            this.newTaskDescription = ''
        },
        remove(index) {
            this.list.remove(index)
        }
    },
})

new Vue({
    el: '#app',
    template: `<todo-list></todo-list>`,
})