import { useState } from "react"


const initialValue = {
  title: "titulo",
  description: "descripción"
}

export const Product = (props) => {

  const [counter, setCounter] = useState(0)

  const handleSum = () => {
    if (counter <= 9){
    setCounter(counter + 1)
  }
  }

  const handleRest = () => {
    if (counter > 0){
    setCounter(counter - 1)
}
}

  const handleReset = () => {
    setCounter(0)
  }

  return (
    <div>
      <div className="left-counter">
        <h1>{props.name} counter</h1>
        <h1>{counter}</h1>
        <div>
          <button className="btn btn-warning" onClick={handleRest}>-1</button>
          <button className="btn btn-success" onClick={handleSum}>+1</button>
        </div>
        <button className="btn btn-info" onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}
