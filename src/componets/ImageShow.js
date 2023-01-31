import React, { useState } from 'react'

export const ImageShow = () => {

  const [showImage, setshowImage] = useState(true)

  const showHideImage = () => {
    setshowImage(!showImage)
  }

  return (
    <div>
      <button className='btn btn-success' onClick={showHideImage}>Show/hide images</button>
      <div>
        {
          showImage ?
            <img src='https://media4.giphy.com/media/3oEjHP8ELRNNlnlLGM/200w.webp?cid=ecf05e47qggxuw3r3o7503vaan1buia61u85frriivkniv1i&rid=200w.webp&ct=g' />
            :
            <h1>image doesn't exists</h1>
        }
      </div>
    </div>
  )
}
