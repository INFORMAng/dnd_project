import React, { useEffect } from 'react'
import { useAppDispatch } from '../helpers/hooks/useAppDispatch/useAppDispatch'
import { getArrayFromLocalStorage } from '../helpers/lib/localStorage'
import { useGetCharacters } from '../store/services/characterApi'
import { setCharactersData } from '../store/slices/charactersSlice'
import MapCharacter from '../components/MapCharacter'
import MyPlayer from '../components/UI/MyPlayer/MyPlayer'
import { openModal } from '../store/slices/modalSlice'
import PlayerMarkerForm from '../components/PlayerMarkerForm'

const GameMap = () => {
  const dispatch = useAppDispatch()
  const isLocalCharsData = getArrayFromLocalStorage('localCharsData')
  const {data: characters} = useGetCharacters(null)

  const AddNewPlayerMakrer = () => {
    dispatch(openModal(<PlayerMarkerForm/>))
  }

  useEffect(() => {1
    if (!isLocalCharsData && characters) {
      dispatch(setCharactersData(characters))
    } else {
      dispatch(setCharactersData(isLocalCharsData))
    }
  }, [dispatch, characters])

  return (
    <div className='map__page'>
      <div className="map__page__characters">
        {characters?.map(character => (
          <MapCharacter key={character.id} character={character}/>
        ))}
      </div>
      <button onClick={AddNewPlayerMakrer}>Добавить Маркер</button>
      <div className="map__page__main">
        <MyPlayer key='firstPlayer' name='P1'/>
        <MyPlayer key='secondPlayer' name='P2'/>
        <MyPlayer key='thirdPlayer' name='P3'/>
        <MyPlayer key='fourthPlayer' name='P4'/>
      </div>
    </div>
  )
}

export default GameMap