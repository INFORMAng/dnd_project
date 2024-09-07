import React, { useEffect } from 'react'
import { useAppDispatch } from '../helpers/hooks/useAppDispatch/useAppDispatch'
import { getArrayFromLocalStorage } from '../helpers/lib/localStorage'
import { useGetCharacters } from '../store/services/characterApi'
import { setCharactersData } from '../store/slices/charactersSlice'
import MapCharacter from '../components/MapCharacter'
import MyPlayer from '../components/UI/MyPlayer/MyPlayer'
import { openModal } from '../store/slices/modalSlice'
import { MODAL_CONTENT_TYPE } from '../types/modalTypes'
import MyButton from '../components/UI/MyButton/MyButton'
import { BUTTON_THEME_TYPE, BUTTON_SIZE_TYPE } from '../components/UI/MyButton/MyButton'
import MyModal from '../components/UI/MyModal/MyModal'
import CharacterMarkerForm from '../components/CharacterMarkerForm'

const GameMap = () => {
  const dispatch = useAppDispatch()
  const isLocalCharsData = getArrayFromLocalStorage('localCharsData')
  const {data: characters} = useGetCharacters(null)

  const AddNewPlayerMarker = () => {
    dispatch(openModal())
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
      <MyButton size={BUTTON_SIZE_TYPE.M} theme={BUTTON_THEME_TYPE.DEFAULT} onClick={AddNewPlayerMarker}>Добавить Маркер</MyButton>
      <div className="map__page__main">
        <MyPlayer key='firstPlayer' name='P1'/>
        <MyPlayer key='secondPlayer' name='P2'/>
        <MyPlayer key='thirdPlayer' name='P3'/>
        <MyPlayer key='fourthPlayer' name='P4'/>
      </div>
      <MyModal>
        <CharacterMarkerForm/>
      </MyModal>
    </div>
  )
}

export default GameMap