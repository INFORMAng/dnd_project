import React, { useEffect } from 'react'
import { useAppDispatch } from '../helpers/hooks/useAppDispatch/useAppDispatch'
import { getArrayFromLocalStorage } from '../helpers/lib/localStorage'
import { useGetCharacters } from '../store/services/characterApi'
import { setCharactersData } from '../store/slices/charactersSlice'
import MapCharacter from '../components/UI/MapCharacter'
import MyPlayer from '../components/UI/MyPlayer/MyPlayer'

const GameMap = () => {
  const dispatch = useAppDispatch()
  const isLocalCharsData = getArrayFromLocalStorage('localCharsData')
  const {data: characters} = useGetCharacters(null)

  useEffect(() => {
    if (!isLocalCharsData && characters) {
      dispatch(setCharactersData(characters))
    } else {
      dispatch(setCharactersData(isLocalCharsData))
    }
  }, [dispatch, characters])


  return (
    <div className='map__page'>
      <div className="map__characters">
        {characters?.map(character => (
          <MapCharacter key={character.id} character={character}/>
        ))}
      </div>
      <div className="map__main">
        <MyPlayer key='firstPlayer' name='P1'/>
        <MyPlayer key='secondPlayer' name='P2'/>
        <MyPlayer key='thirdPlayer' name='P3'/>
        <MyPlayer key='fourthPlayer' name='P4'/>
      </div>
    </div>
  )
}

export default GameMap