import { Todo } from '../class/Todo.js';

export default new Vuex.Store({
  state: {
    todos: [
        new Todo('Something to do')
    ],
    task: '',
    showDone: true
  },
  getters: {
    count: state => state.increments - state.decrements
  },
  mutations: {
    increment: (state, n) => state.increments += n,
    decrement: (state, n) => state.decrements += n,
    changeMessage: (state, newMessage) => state.message = newMessage
  }
})