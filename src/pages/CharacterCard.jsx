import React from 'react'
import { useNavigate } from 'react-router-dom'

const CharacterCard = ({char}) => {
  const router = useNavigate()
  return (
    <div className="card__character">
        <div>
          <h2>{char.name}</h2>
          <div>Класс: {char.info.class}</div>
          <div>Здоровье: {char.info.health}</div>
        </div>
        <button onClick={() => router(`/characters/${char.id}`)}>ОПИСАНИЕ</button>
      </div>
  )
}

export default CharacterCard