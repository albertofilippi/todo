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
  token: "",
  setToken: action((state, payload) => {
    state.token = payload;
  }),
  buttonBackground: "all-tasks",
  setButtonBackground: action((state, payload) => {
    state.buttonBackground = payload;
  }),
  tasks: [],
  setTasks: action((state, tasks) => {
    state.tasks = tasks;
  }),
  updateTask: action((state, id) => {
    state.tasks.forEach((task) => {
      if (task.id === id) {
        return task.status === "in-corso"
          ? (task.status = "completata")
          : (task.status = "in-corso");
      }

      return task;
    });
  }),
  removeTask: action((state, id) => {
    state.tasks = state.tasks.filter((task) => task.id !== id);
  }),
  addTask: action((state, task) => {
    state.tasks.push(task);
    state.tasks.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
  }),
});
