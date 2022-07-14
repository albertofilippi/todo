import { format } from "date-fns";

export const postTask = (
  task,
  onClose,
  setTitle,
  setDescription,
  setDate,
  setPriority
) => {
  fetch("http://192.168.1.210:8080/tasks/", {
    method: "POST",
    body: JSON.stringify({
      creationDate: format(new Date(), "yyyy-MM-dd"),
      title: task.title,
      description: task.description,
      date: task.date,
      priority: task.priority,
    }),
    headers: {
      Authorization: "Basic " + btoa("innovaLab:Innova.2022"),
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        onClose();
        setTitle("");
        setDescription("");
        setDate("");
        setPriority("bassa");
        return res.json();
      }
    })
    .catch((err) => alert(err));
};

export const getTasks = (setData) => {
  fetch("http://192.168.1.210:8080/tasks/", {
    method: "GET",

    headers: {
      Authorization: "Basic " + btoa("innovaLab:Innova.2022"),
    },
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => setData(data));
};
