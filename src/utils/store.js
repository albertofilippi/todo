import { createStore, action } from "easy-peasy";

export default createStore({
  email: "",
  setEmail: action((state, payload) => {
    state.email = payload;
  }),
  password: "",
  setPassword: action((state, payload) => {
    state.password = payload;
  }),
  name: "",
  setName: action((state, payload) => {
    state.name = payload;
  }),
  isLoggedIn: {
    status: false,
    email: "",
  },
  setIsLoggedIn: action((state, payload) => {
    state.isLoggedIn = payload;
  }),
  task: {
    title: "",
    description: "",
    date: "",
    priority: "bassa",
  },
  setTitle: action((state, payload) => {
    state.task.title = payload;
  }),
  setDescription: action((state, payload) => {
    state.task.description = payload;
  }),
  setDate: action((state, payload) => {
    state.task.date = payload;
  }),
  setPriority: action((state, payload) => {
    state.task.priority = payload;
  }),
  buttonBackground: "all-tasks",
  setButtonBackground: action((state, payload) => {
    state.buttonBackground = payload;
  }),
  data: {},
  setData: action((state, payload) => {
    state.data = payload;
  }),
});
