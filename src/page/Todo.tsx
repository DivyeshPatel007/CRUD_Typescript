import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoLists from '../components/TodoLists'

function Todo() {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <TodoInput/>
        <TodoLists/>
    </div>
  )
}

export default Todo