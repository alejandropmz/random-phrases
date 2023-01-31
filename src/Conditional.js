import React, { useState } from 'react'

export const Conditional = () => {
  const [conditional, setConditional] = useState(true)
  return (
    <div>
      <h1>Conditional</h1>
      <button onClick={()=> setConditional(!conditional)}>
        Conditional button
      </button>
      {
        conditional ? 
        <h1>Now i'm true</h1> :
        null
      }
    </div>
  )
}
