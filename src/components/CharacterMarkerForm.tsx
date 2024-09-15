import React, { useState } from 'react'
import MyInput from './UI/MyInput/MyInput'
import MySelect from './UI/MySelect/MySelect'
import MyButton, { BUTTON_WIDTH_TYPE } from './UI/MyButton/MyButton'
import { IMarkerState, markerColorOptions, markerSizeOptions } from '../types/mapMarker'
import { v4 as uuidv4 } from 'uuid'
import { BUTTON_THEME_TYPE, BUTTON_SIZE_TYPE } from '../components/UI/MyButton/MyButton'
import { useAppDispatch } from '../helpers/hooks/useAppDispatch/useAppDispatch'
import { useAddMarker } from '../store/services/mapMarkersApi'
import { addMapMarker } from '../store/slices/mapMarkersSlice'

const CharacterMarkerForm = () => {
  const dispatch = useAppDispatch()
  const [addMarker] = useAddMarker()
  const emptyMarkerState = {id: "", name: "", color: "", size: ""}
  const [markerState, setMarkerState] = useState<IMarkerState>(emptyMarkerState)

  const changeMarkerName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarkerState(prevState => ({
      ...prevState, 
      name: event.target.value,
    }))
  }

  const changeMarkerColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMarkerState(prevState => ({
      ...prevState, 
      color: event.target.value,
    }))
  }

  const changeMarkerSize = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMarkerState(prevState => ({
      ...prevState, 
      size: event.target.value,
    }))
  }

  const addNewMarker = (event: React.FormEvent<HTMLButtonElement>) => {
    event.preventDefault()

    if (!markerState.name || !markerState.color || !markerState.size) {
      alert("Заполните поля!")
      return
    }

    const newMarker = {
      ...markerState,
      id: uuidv4(),
    }

    addMarker(newMarker)
    dispatch(addMapMarker(newMarker))
    setMarkerState(emptyMarkerState)
  }

  return (
    <form className='character_marker_form'>
      <div>
        <MyInput 
          value={markerState.name} 
          type='text'
          placeholder="Название маркера" 
          onChange={changeMarkerName}
        />
        <div className="character_marker_form_selects">
          <MySelect 
            value={markerState.color} 
            onChange={changeMarkerColor} 
            options={markerColorOptions} 
            defaultOption='Цвет'
          />
          <MySelect 
            value={markerState.size}
            onChange={changeMarkerSize}
            options={markerSizeOptions}
            defaultOption='Размер'
          />
        </div>
      </div>
      <MyButton 
        onClick={addNewMarker} 
        size={BUTTON_SIZE_TYPE.L}
        theme={BUTTON_THEME_TYPE.DEFAULT}
        width={BUTTON_WIDTH_TYPE.FULL}
      >
        Создать маркер
      </MyButton>
    </form>
  )
}

export default CharacterMarkerForm