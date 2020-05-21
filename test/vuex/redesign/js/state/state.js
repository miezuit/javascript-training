import { Todo } from '../class/Todo.js';

export default new Vuex.Store({
  state: {
    todos: [
        new Todo('Something to do')
    ],
    showDone: true
  },
  getters: {
    filteredTodos: state => state.todos.filter(todo => state.showDone || !todo.isDone)
  },
  mutations: {
    saveTodo(state, task) {
        return state.todos.push(new Todo(task));
    },
    checkTodo(state, index) {
        return state.todos[index].switchDone();
    },
    deleteTodo(state, index) {
        return state.todos.splice(index, 1);
    },
    changeShowDone(state, showDone) {
        return state.showDone = showDone;
    }
  }
})