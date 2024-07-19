import React, { createContext, ReactNode, useContext, useState } from "react";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  editTodo:(id:string,newText:string)=>void
}
interface TodoProviderProps {
  children: ReactNode;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

function TodoProvider({ children }: TodoProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "12dgfg-aaf", text: "this is an first tasks", completed: false },
  ]);

  const addTodo = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: String(Date.now()), text, completed: false },
    ]);
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };
  const editTodo = (id: string, newText: string) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };
console.log({todos});
  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo,editTodo }}>
      {children}
    </TodoContext.Provider>
  );
}

export function useTodo() {
  const context = useContext(TodoContext);
  if (context == undefined) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
}

export default TodoProvider;
