import React, {useState} from 'react'

export const Error = () => {
  const [error, setError] = useState("")

  const addError = () => {
    setError("i'm one error")
  }

  let counter = 0
  const anotherError = () => {
    setError("again another error...")
    counter++
    console.log(counter)
    if (counter === 2){
      setError("pls don't try again... im dying")
    }
  }

  const success = () => {
    setError("")
  }

  return (
    <div>
      <h1>Error</h1>
      <button className='btn btn-warning' onClick={addError}>
        add error
      </button>
      <button className='btn btn-info' onClick={anotherError}>
        add other error
      </button>
      <button className='btn btn-success' onClick={success}>
        solvent error
      </button>
      {
        error &&
        <h2>{error}</h2>
      }
    </div>
  )
}
