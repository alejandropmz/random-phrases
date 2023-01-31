import React, { useState } from 'react'
import quotes from '../json/quotes.json'
import '../styles.css'

export const Quotes = () => {

  const randomQuotes = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  const changePhrase = () => {
    setRandomPhrase(randomQuotes(quotes))
  }

  const [randomPhrase, setRandomPhrase] = useState(randomQuotes(quotes))

  return (
    <div className='container'>
      <div className='card-container'>
        <h1>"{randomPhrase.quote}"</h1>
        <hr className='hr' />
        <h4>{randomPhrase.author}</h4>
        <button className='btn btn-success' onClick={changePhrase}>Change phrase</button>
      </div>
    </div>
  )
}
