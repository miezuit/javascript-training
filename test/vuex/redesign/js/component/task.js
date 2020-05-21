Vue.component('task', {
    template: `
        <li :class="{ done: task.isDone }" class="task" @click="$emit('checked')">  
            <div class="title_container">
                <div class="color" v-bind:style="{ backgroundColor: task.color }"></div>
                <div class="title">{{ task.title }}</div>
            </div>
            <div class="controls">
                <div class="delete" @click="$emit('deleted')"><i class="material-icons">delete</i></div>
            </div>
        </li>
    `,
    props: ['task']
});