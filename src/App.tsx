import Todo from "./page/Todo"
import TodoProvider from "./providers/TodoProvider"


function App() {
  return (
    <TodoProvider>
      <Todo/>
    </TodoProvider>
  )
}

export default App