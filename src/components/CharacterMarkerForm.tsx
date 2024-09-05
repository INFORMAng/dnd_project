import React, { useState } from 'react'
import MyInput from './UI/MyInput/MyInput'
import { IMarkerState, markerColorOptions, markerSizeOptions } from '../helpers/constants/marker'
import MySelect from './UI/MySelect/MySelect'
import { v4 as uuidv4 } from 'uuid'
import MyButton from './UI/MyButton/MyButton'
import { BUTTON_COLOR_TYPE, BUTTON_SIZE_TYPE } from '../helpers/constants/button'

const CharacterMarkerForm = () => {
  const [markerState, setMarkerState] = useState<IMarkerState>({name: "", color: "", size: ""})

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
        buttonClasses={[BUTTON_SIZE_TYPE.L, BUTTON_COLOR_TYPE.DEFAULT]}
      >
        Создать маркер
      </MyButton>
    </form>
  )
}

export default CharacterMarkerForm