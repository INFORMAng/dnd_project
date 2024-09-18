import React, { useEffect, useState } from 'react'
import { useAppDispatch } from '../helpers/hooks/useAppDispatch/useAppDispatch'
import { getArrayFromLocalStorage, LOCAL_STORAGE_KEYS } from '../helpers/lib/localStorage'
import { useGetCharacters } from '../store/services/characterApi'
import { setCharactersData } from '../store/slices/charactersSlice'
import MapCharacter from '../components/MapCharacter'
import { closeAllModals, closeModal, openModal } from '../store/slices/modalSlice'
import MyButton, { BUTTON_WIDTH_TYPE, BUTTON_THEME_TYPE, BUTTON_SIZE_TYPE, IButtonDisabledFlag  } from '../components/UI/MyButton/MyButton'
import MyModal, { MODAL_CONTENT_TYPE, MODAL_SIZE_TYPE } from '../components/UI/MyModal/MyModal'
import CharacterMarkerForm from '../components/CharacterMarkerForm'
import { useDeleteMarker, useGetMarkers } from '../store/services/mapMarkersApi'
import { deleteMapMarker, setMapMarkersData } from '../store/slices/mapMarkersSlice'
import MyMapMarker from '../components/UI/MyMapMarker/MyMapMarker'
import classNames from 'classnames'

const GameMap = () => {
  const dispatch = useAppDispatch()
  const [deleteMarker] = useDeleteMarker()
  const isLocalCharsData = getArrayFromLocalStorage(LOCAL_STORAGE_KEYS.CHARS)
  const isLocalMarkersData = getArrayFromLocalStorage(LOCAL_STORAGE_KEYS.MARKERS)
  const {data: characters} = useGetCharacters(null)
  const {data: markers} = useGetMarkers(null)
  const [locationNumber, setLocationNumber] = useState<number>(1)
  const [buttonDisabledFlag, setButtonDisabledFlag] = useState<IButtonDisabledFlag>({back: true, forward: false})

  const handleSwitchLocations = (delta: number) => {
    setLocationNumber(locationNumber + delta)
  }

  const addNewPlayerMarker = () => {
    dispatch(openModal({id: MODAL_CONTENT_TYPE.MARKER_FORM}))
  }

  const handleCloseAllModals = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation()
    dispatch(closeAllModals())
  }

  const deletePlayerMarker = (id: string) => {
    dispatch(deleteMapMarker(id))
    deleteMarker(id)

    dispatch(closeModal(MODAL_CONTENT_TYPE.MARKER_MENU))
  }
  useEffect(() => {
    setButtonDisabledFlag({back: locationNumber === 1, forward: locationNumber >= 3})
  }, [locationNumber])

  useEffect(() => {
    if (!isLocalCharsData && characters) {
      dispatch(setCharactersData(characters))
    } else {
      dispatch(setCharactersData(isLocalCharsData))
    }
  }, [dispatch, characters])

  useEffect(() => {
    if (!isLocalMarkersData && markers) {
      dispatch(setMapMarkersData(markers))
    } else {
      dispatch(setMapMarkersData(isLocalMarkersData))
    }
  }, [dispatch, markers])

  return (
    <div className='map__page'>
      <div className="map__page__characters">
        {characters?.map(character => (
          <MapCharacter key={character.id} character={character}/>
        ))}
      </div>
      <div className="map__page__buttons">
        <div className='map__page__buttons__switch'>
          <MyButton disabled={buttonDisabledFlag.back} size={BUTTON_SIZE_TYPE.M} theme={BUTTON_THEME_TYPE.DEFAULT} onClick={() => handleSwitchLocations(-1)} width={BUTTON_WIDTH_TYPE.FULL}>Назад</MyButton>
          <MyButton disabled={buttonDisabledFlag.forward} size={BUTTON_SIZE_TYPE.M} theme={BUTTON_THEME_TYPE.DEFAULT} onClick={() => handleSwitchLocations(1)} width={BUTTON_WIDTH_TYPE.FULL}>Вперёд</MyButton>
        </div>
        <MyButton size={BUTTON_SIZE_TYPE.M} theme={BUTTON_THEME_TYPE.DEFAULT} onClick={addNewPlayerMarker} width={BUTTON_WIDTH_TYPE.FULL}>Добавить Маркер</MyButton>
      </div>
      <div className={classNames("map__page__main", `location__${locationNumber}`)} onClick={handleCloseAllModals}>
        {markers?.map((marker, index) => (
          <MyMapMarker 
            key={marker.id}
            id={marker.id} 
            index={index+1}
            name={marker.name} 
            color={marker.color} 
            size={marker.size}
          />
        ))}
      </div>
      {markers?.map(marker => (
        <MyModal
          key={`markerMenu_${marker.id}`}
          size={MODAL_SIZE_TYPE.FLEX_SCREEN}
          id={`markerMenu_${marker.id}`}
        >
          <MyButton
            size={BUTTON_SIZE_TYPE.M}
            theme={BUTTON_THEME_TYPE.DEFAULT}
            width={BUTTON_WIDTH_TYPE.AUTO}
            onClick={() => deletePlayerMarker(marker.id)}
          >
            Удалить
          </MyButton>
        </MyModal>
      ))}
      <MyModal size={MODAL_SIZE_TYPE.FULL_SCREEN} id={MODAL_CONTENT_TYPE.MARKER_FORM}>
        <CharacterMarkerForm/>
      </MyModal>
    </div>
  )
}

export default GameMap