import { Todo } from "@/app/types_Interfaces/types";

const storageName: string = "todo-storage";

// Get the todos from local storage
const getTodos = (): Todo[] => {
  const currTodo = localStorage.getItem(storageName);
  if (currTodo !== null) {
    const parsed = JSON.parse(currTodo);
    return parsed;
  } else {
    return [];
  }
};

// delete todos from the local storage
const deleteTodo = (todoId: number) => {
  const currTodo = getTodos();
  const newTodoList = currTodo.filter((item) => item.id !== todoId);
  localStorage.removeItem(storageName);
  localStorage.setItem(storageName, JSON.stringify(newTodoList));
};

// Store todos to local storage
const storeTodos = (todo: Todo) => {
  const currTodos = getTodos();
  const todosToStore = [...currTodos, todo];

  localStorage.setItem(storageName, JSON.stringify(todosToStore));
};

export { getTodos, deleteTodo, storeTodos };
