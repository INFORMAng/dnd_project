import React, { useState } from 'react'
import MyInput from './UI/MyInput/MyInput'
import { IMarkerState, markerColorOptions, markerSizeOptions } from '../helpers/constants/marker'
import MySelect from './UI/MySelect/MySelect'
import { v4 as uuidv4 } from 'uuid'
import MyButton from './UI/MyButton/MyButton'
import { BUTTON_THEME_TYPE, BUTTON_SIZE_TYPE } from '../components/UI/MyButton/MyButton'
import { useAppDispatch } from '../helpers/hooks/useAppDispatch/useAppDispatch'
import { closeModal } from '../store/slices/modalSlice'

const CharacterMarkerForm = () => {
  const dispatch = useAppDispatch()
  const emptyMarkerState = {name: "", color: "", size: ""}
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

    const newMarker = {
      ...markerState,
      id: uuidv4(),
    }

    setMarkerState(emptyMarkerState)
    dispatch(closeModal())
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
      >
        Создать маркер
      </MyButton>
    </form>
  )
}

export default CharacterMarkerForm