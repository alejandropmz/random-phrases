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
        <div className='quote'>
          <h3>"<strong>{randomPhrase.quote}</strong>"</h3>
        </div>
        <hr className='hr' />
        <div className='author-container'>
          <div className='author'>
            <p>{randomPhrase.author}</p>
          </div>
          <div className='button-container'>
            <button className='button-container'>
              <svg className='change-button' onClick={changePhrase} xmlns="http://www.w3.org/2000/svg" width="55" height="55" fill="green" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
