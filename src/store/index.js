import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: { id: "abc123", name: "Adam Jahr" },
    categories: [
      "sustainability",
      "nature",
      "animal welfare",
      "housing",
      "education",
      "food",
      "community"
    ],
    todos: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
      { id: 3, text: "...", done: true },
      { id: 4, text: "...", done: false }
    ],
    events: [
      { id: 1, text: "...", done: true },
      { id: 2, text: "...", done: false },
      { id: 3, text: "...", done: true },
      { id: 4, text: "...", done: false }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
  getters: {
    catLength: state => {
      return state.categories.length;
    },
    getEventById: state => id => {
      return state.events.find(event => event.id === id);
    }
    // doneTodos: state => {
    //   return state.todos.filter(todo => todo.done).length;
    // },
    // activeTodos: state => {
    //   return state.todos.filter(todo => !todo.done).length;
    // }
  }
});
