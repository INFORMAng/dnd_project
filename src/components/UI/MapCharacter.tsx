import React, { memo } from 'react'
import { ICharacter } from '../../types/character';
import { useNavigate, useParams } from 'react-router-dom';
import MyCounter from './MyCounter/MyCounter';

interface MapCharacterProps {
  key: number;
  character: ICharacter;
}

const MapCharacter = (props: MapCharacterProps) => {
  const router = useNavigate()
  const {id, name, info: charInfo} = props.character
  const [charHealth, charArmor] = [charInfo[0].count, charInfo[1].count]

  if(!props.character) {
    return <div>Character is not found</div>
  }

  return (
        <div className="map__character">
          <div className="map__character__stats">
            <div className="map__character__health__block">
              <div className="map__character__health">{charHealth}</div>
              <MyCounter/>
            </div>
            <div className="map__character__health__block">
              <MyCounter/>
              <div className="map__character__armor">{charArmor}</div>
            </div> 
          </div>
          <div 
            className="character__name"
            style={{cursor: "pointer"}}
            onClick={() => router(`/characters/${id}`)}
          >
            {name}
          </div>
        </div>
  )
}

export default memo(MapCharacter)