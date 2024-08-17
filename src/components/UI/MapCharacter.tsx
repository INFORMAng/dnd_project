import React, { memo } from 'react'
import { ICharacter } from '../../types/character';
import { useNavigate, useParams } from 'react-router-dom';
import MyCounter from './MyCounter/MyCounter';
import { useSelector } from 'react-redux';
import { getCharInfoById } from '../../store/selectors/charactersSelectors';

interface MapCharacterProps {
  key: number;
  character: ICharacter;
}

const MapCharacter = (props: MapCharacterProps) => {
  const router = useNavigate()
  const characterInfo = useSelector(() => getCharInfoById(props.character))
  
  if (!characterInfo) {
    return <div>Invalid character data</div>
  }
  
  const {id, name, charArmor, charHealth} = characterInfo

  return (
        <div className="map__character">
          <div className="map__character__stats">
            <div className="map__character__health__block">
              <div className="map__character__health">{charHealth}</div>
              <MyCounter character={props.character} type={'Здоровье'}/>
            </div>
            <div className="map__character__health__block">
              <MyCounter character={props.character} type={'Броня'}/>
              <div className="map__character__armor">{charArmor}</div>
            </div> 
          </div>
          <div 
            className="character__name pointer"
            onClick={() => router(`/characters/${id}`)}
          >
            {name}
          </div>
        </div>
  )
}

export default memo(MapCharacter)