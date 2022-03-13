import { useRef, useState, useEffect } from 'react'

function UseRefExample2() {
  const [name, setName] = useState('')
  const renders = useRef(1)
  const prevName = useRef('')

  useEffect(() => {
    renders.current = renders.current + 1
    prevName.current = name
  }, [name])

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <h2> Prev name state: {prevName.current} </h2>
      <input
        type="text"
        value={name} // this line is not required in this example
        onChange={(e) => setName(e.target.value)}
        className="form-control"
      />
    </div>
  )
}

export default UseRefExample2
