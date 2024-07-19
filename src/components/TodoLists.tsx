import { useState } from "react";
import { useTodo } from "../providers/TodoProvider";
import TodoEditInput from "./TodoEditInput";

function TodoLists() {
  const { todos,  removeTodo } = useTodo();
  const [editingId, setEditingId] = useState<string | null>(null);

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-2 border-b"
        >
           {editingId !== todo.id ? (
            <span
              className={`flex-grow ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
              onClick={() => setEditingId(todo.id)}
            >
              {todo.text}
            </span>
          ) : (
            <TodoEditInput 
              todo={todo} 
              handleEditMode={() => setEditingId(null)} 
            />
          )}
          <button
            onClick={() => removeTodo(todo.id)}
            className="ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoLists;
