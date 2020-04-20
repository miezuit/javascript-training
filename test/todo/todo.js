class Task {
    constructor(title) {
        this.title = title;
        this.isChecked = false;
    }
    switch() {
        this.isChecked = !this.isChecked;
    }
}

Vue.component("todo-item", {
    // template
    template: `<li class="todo-item">
                <div class="title" v-bind:class="{ checked: isChecked }">{{ title }}</div>
                <div class="controls">
                    <div class="check" @click="$emit('checked')">✓</div>
                    <div class="remove" @click="$emit('deleted')">✕</div>
                </div>
            </li>`,
    // proprietati
    props: ["title", "isChecked"],
});


Vue.component("todo-list", {
    template: `
      <div class="todo-list">
        <h1>To do:</h1>
        <div class="options">
            <label for="chow-checked">Show checked:</label>
            <input class="show-checked" type="checkbox" v-model="showChecked" />
        </div>
        <ul>
            <todo-item
            v-if="showChecked || !task.isChecked"
            v-for="(task, index) in todos"
            :key="index"
            :title="task.title"
            :is-checked="task.isChecked"
            @checked="switchTask(index)"
            @deleted="deleteTask(index)"
            >
            </todo-item>
        </ul>
        <div class="new_task">
            Task:
            <input type="text" v-model="task" @keyup.enter="saveTask" />
            <div class="save_task">
            <button @click="saveTask">Save item</button>
            </div>
        </div>
      </div>
    `,
    data() {
        return {
            todos: [new Task("Something to do")],
            task: "",
            showChecked: true
        }
    },
    methods: {
        saveTask() {
            // adaugam valoarea din task in lista de todo
            this.todos.push(new Task(this.task));
            // resetam task-ul
            this.task = "";
        },
        switchTask(index) {
            this.todos[index].switch();
        },
        deleteTask(index) {
            this.todos.splice(index, 1);
        },
        switchShowChecked() {
            this.showChecked = !this.showChecked;
        }
    },
})

var app = new Vue({
    el: "#app",
});
