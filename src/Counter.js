import React, { useState } from 'react'

export const Counter = () => {

  const [counter, setCounter] = useState(0)

  const sumCounter = () => {
    setCounter(firstCounter => firstCounter+5)
  }
  return (
    <div>
      <h1>Counter {counter}</h1>
      <button onClick={sumCounter}>
        Click to increment number
      </button>
    </div>
  )
}
