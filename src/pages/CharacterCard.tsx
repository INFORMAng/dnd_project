import React, { memo, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ICharacter } from '../types/character'
import { useSelector } from 'react-redux';
import { getCharInfoById } from '../store/selectors/charactersSelectors';

interface CharacterCardProps {
  key: number;
  character: ICharacter;
}

const CharacterCard = (props: CharacterCardProps) => {
  const router = useNavigate()
  const characterInfo = useSelector(() => getCharInfoById(props.character))
  
  if (!characterInfo) {
    return <div>Invalid character data</div>
  }
  
  const {id, name, charClass, charHealth} = characterInfo

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