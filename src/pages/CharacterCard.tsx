import React, { memo, FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { ICharacter } from '../types/character'
import { useSelector } from 'react-redux';
import {getCharacterInfoCounts} from '../store/selectors/charactersSelectors';
import {StateSchema} from "../store/config/stateSchema";

interface CharacterCardProps {
  character: ICharacter;
  key: string
}

const CharacterCard = (props: CharacterCardProps) => {
    const {character} = props
    const router = useNavigate()
  const characterInfoCount = useSelector((state: StateSchema) => getCharacterInfoCounts(state, character.id))
  
  if (!characterInfoCount) {
    return <div>Invalid character data</div>
  }

  const {charHealth, charClass} = characterInfoCount

  return (
    <div className="card__character" key={character.id}>
        <div key={character.id}>
          <h2>{character.name}</h2>
          <div>Класс: {charClass}</div>
          <div>Здоровье: {charHealth}</div>
        </div>
        <button onClick={() => router(`/characters/${character.id}`)}>ОПИСАНИЕ</button>
      </div>
  )
}

export default memo(CharacterCard)