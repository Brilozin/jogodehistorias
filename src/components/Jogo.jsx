import React, { useState } from 'react'
import './Jogo.css'

function Jogo() {
  const [emoji, setEmoji] = useState('😂')

  let emojis = ['😂', '😎', '😍', '🤔', '😢', '😡', '🤯', '🥳', '😴', '🤮']

  function sortear() {
    let i = Math.floor(Math.random() * emojis.length)
    setEmoji(emojis[i])
  }

  return (
    <div className='Jogo'>
      <button className="btn-emoji" onClick={sortear}>{emoji}</button>
      <p className="p-emoji">{}</p>
    </div>
  )
}

export default Jogo
