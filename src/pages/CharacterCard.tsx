import React, { memo, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { IChar } from '../interfaces/iChar'


interface CharacterCardProps {
  char: IChar;
}

const CharacterCard: FC<CharacterCardProps> = ({char}) => {
  if (!char || !char.info || !char.info[1] || !char.info[0]) {
    return <div>Invalid character data</div>
  }
  const router = useNavigate()
  return (
    <div className="card__character">
        <div>
          <h2>{char.name}</h2>
          <div>Класс: {char.info[1].count}</div>
          <div>Здоровье: {char.info[0].count}</div>
        </div>
        <button onClick={() => router(`/characters/${char.id}`)}>ОПИСАНИЕ</button>
      </div>
  )
}

export default memo(CharacterCard)