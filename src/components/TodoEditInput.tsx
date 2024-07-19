import React, { Dispatch, SetStateAction, useState } from "react";

import { Todo, useTodo } from "../providers/TodoProvider";
interface ITodoEditInput{
    handleEditMode:()=>void;
    todo:Todo
}

function TodoEditInput({ todo,handleEditMode}: ITodoEditInput) {
  console.log({ todo });
  const [changedTodo, setChangedTodo] = useState<string>(todo.text);
  const { editTodo } = useTodo();

  const handleEdit = () => {
    editTodo(todo.id, changedTodo);
    handleEditMode()
  };
  return (
    <div>
      <input
        className="border-2 border-black"
        type="text"
        value={changedTodo}
        onChange={(e) => setChangedTodo(e.target.value)}
      />
      <button onClick={handleEdit}>Add</button>
    </div>
  );
}

export default TodoEditInput;
