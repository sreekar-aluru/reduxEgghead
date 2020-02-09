import { v4 } from "uuid";

const fakeDb = {
  todos: [
    {
      id: v4(),
      text: "redux",
      completed: false
    },
    {
      id: v4(),
      text: "react",
      completed: false
    },
    {
      id: v4(),
      text: "C#",
      completed: true
    }
  ]
};

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = filter =>
  delay(500).then(() => {
    if (Math.random() > 0.5) {
      throw new Error("Ha ha ha!!!! failed");
    }
    switch (filter) {
      case "all":
        return fakeDb.todos;
      case "active":
        return fakeDb.todos.filter(t => !t.completed);
      case "completed":
        return fakeDb.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter ${filter}`);
    }
  });
