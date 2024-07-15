import React from 'react'
import { useNavigate } from 'react-router-dom'

const Character = ({char}) => {
  const router = useNavigate()
  return (
    <div className="card__character">
        <div>
          <h2>{char.name}</h2>
          <div>Класс: {char.info.class}</div>
          <div>Здоровье: {char.info.health}</div>
        </div>
        <button onClick={() => router('/character/1')}>ОПИСАНИЕ</button>
      </div>
  )
}

export default Character