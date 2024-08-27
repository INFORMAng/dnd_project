import React, { memo } from 'react'
import { ICharacter } from '../../types/characterTypes';
import { useNavigate} from 'react-router-dom';
import MyInfoCounter from './MyCounter/MyInfoCounter';
import { useSelector } from 'react-redux';
import {getCharacterInfoCounts} from "../../store/selectors/charactersSelectors";
import { StateSchema } from '../../store/config/stateSchema';
import { CHARACTER_INFO_TYPE } from '../../helpers/constants/character';

interface MapCharacterProps {
  character: ICharacter;
}

const MapCharacter = (props: MapCharacterProps) => {
  const router = useNavigate()
  const characterInfo = useSelector((state: StateSchema) => getCharacterInfoCounts(state, props.character.id))
  const {charHealth, charArmor} = characterInfo
  const {id, name} = props.character
  
  if (!characterInfo) {
    return <div>Invalid character data</div>
  }

  return (
        <div className="map__character">
          <div className="map__character__stats">
            <div className="map__character__health__block">
              <div className="map__character__health">{charHealth}</div>
              <MyInfoCounter character={props.character} type={CHARACTER_INFO_TYPE.HEALTH}/>
            </div>
            <div className="map__character__health__block">
              <MyInfoCounter character={props.character} type={CHARACTER_INFO_TYPE.ARMOR}/>
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