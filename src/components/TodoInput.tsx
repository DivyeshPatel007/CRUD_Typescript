import React, { ChangeEvent, useState } from 'react'
import { useTodo } from '../providers/TodoProvider';

function TodoInput() {
    const [newTodoText,setNewTodoText]=useState<string>('');
    const {addTodo} = useTodo()

    const handleAddTodo = (e: React.FormEvent) => {
      e.preventDefault();
      if (newTodoText.trim()) {
        addTodo(newTodoText);
        setNewTodoText("");
      }
    };
  return (
    <form onSubmit={handleAddTodo} className="mb-4">
    <input
      type="text"
      value={newTodoText}
      onChange={(e) => setNewTodoText(e.target.value)}
      placeholder="Add a new todo"
      className="w-full p-2 border border-gray-300 rounded"
    />
    <button 
      type="submit"
      className="mt-2 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
      Add Todo
    </button>
  </form>
  )
}

export default TodoInput