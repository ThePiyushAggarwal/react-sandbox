import { useState, useEffect, useRef, useMemo } from 'react'

function UseMemoExample() {
  const [number, setNumber] = useState(1)
  const [inc, setInc] = useState(0)

  // const sqrt = getSqrt(number)
  const sqrt = useMemo(() => getSqrt(number), [number])

  const renders = useRef(1)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const onClick = () => {
    setInc((prev) => {
      return prev + 1
    })
  }

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className="form-control w-25"
      />

      <h2 className="my-3">
        The sqrt of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className="btn btn-primary">
        Re Render
      </button>
      <p>
        Renders: {renders.current} {inc}
      </p>
    </div>
  )
}

function getSqrt(number) {
  for (let i = 0; i <= 5000; i++) {
    console.log(i)
  }
  console.log('Expensive function called!')
  return Math.sqrt(number)
}

export default UseMemoExample
