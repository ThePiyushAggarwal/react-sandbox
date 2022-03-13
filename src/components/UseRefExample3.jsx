import { useState } from 'react'
import Todo from './Todo'

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(false)

  return (
    <div className="container">
      <button
        className="btn btn-primary"
        onClick={() => setShowTodo(!showTodo)}
      >
        {showTodo ? 'Hide' : 'Show'}
      </button>
      {showTodo && <Todo />}
    </div>
  )
}

export default UseRefExample3
