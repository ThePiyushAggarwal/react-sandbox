import { useState } from 'react'
import Todo from './Todo'

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true)

  return (
    <div>
      <button
        className="btn btn-primary"
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
      {showTodo && <Todo />}
    </div>
  )
}

export default UseRefExample3
