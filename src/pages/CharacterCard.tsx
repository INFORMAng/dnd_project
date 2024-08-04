import React, { memo, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ICharacter } from '../types/character'

interface CharacterCardProps {
  key: number;
  char: ICharacter;
}

const CharacterCard = (props: CharacterCardProps) => {
  const router = useNavigate()
  const {name, info: charInfo, id} = props.char
  const [charClass, charHealth] = [charInfo[1].count, charInfo[0].count]
  
  if (!props.char) {
    return <div>Invalid character data</div>
  }

  return (
    <div className="card__character">
        <div>
          <h2>{name}</h2>
          <div>Класс: {charClass}</div>
          <div>Здоровье: {charHealth}</div>
        </div>
        <button onClick={() => router(`/characters/${id}`)}>ОПИСАНИЕ</button>
      </div>
  )
}

export default memo(CharacterCard)