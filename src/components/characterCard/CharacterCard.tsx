import React, { memo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {StateSchema} from "../../store/config/stateSchema";
import {getCharacterInfoCounts} from '../../store/selectors/charactersSelectors'
import { ICharacter } from '../../types/characterTypes';

interface CharacterCardProps {
  character: ICharacter;
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