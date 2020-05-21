import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vuex/dist/vuex.js"
import './component/task.js';
import './component/todolist.js';
import store from './state/state.js';

var app = new Vue({
    el: '#app',
    store
});