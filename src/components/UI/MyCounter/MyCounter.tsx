import React, { memo } from 'react'
import cl from "./MyCounter.module.css"
import { useUpdateCharacters } from '../../../store/services/characterApi'
import { ICharacter } from '../../../types/character';

interface CounterProps {
  character: ICharacter;
  type: string
}

const Counter = (props: CounterProps) => {
  const {character, type} = props
  const [updateCharacter] = useUpdateCharacters()

  const handleInfoChange = (type: string, delta: number) => {
    const updatedInfo = character.info.map(item => {
      if(item.name === type) {
        return {...item, count: (+item.count+delta).toString()}
      }
      return item
    })

    updateCharacter({...character, info: updatedInfo})
  }

  return (
    <div className={cl.counterWrapper}>
      <button className={cl.counter} onClick={() => handleInfoChange(type, 1)}>+</button>
      <button className={cl.counter} onClick={() => handleInfoChange(type, -1)}>-</button>
    </div>
  )
}

export default memo(Counter)