import React, { memo } from 'react'
import cl from "./MyCounter.module.css"
import { useUpdateCharacters } from '../../../store/services/characterApi'
import { ICharacter } from '../../../types/character';
import { useAppDispatch } from '../../../helpers/hooks/useAppDispatch/useAppDispatch';
import { setCharacterInfoData, setCharactersData } from '../../../store/slices/charactersSlice';

interface CounterProps {
  character: ICharacter;
  type: string
}

const Counter = (props: CounterProps) => {
  const {character, type} = props
  const [updateCharacter] = useUpdateCharacters()
  const dispatch = useAppDispatch()

  const handleInfoChange = (type: string, delta: number) => {
    const updatedInfo = character.info.map(item => {
      if (item.name === type) {
        const count = Number(item.count)
        return {...item, count: (count + delta).toString()}
      }
      return item
    })

    const newCharacter = {...character, info: updatedInfo}
    dispatch(setCharacterInfoData(newCharacter))
    updateCharacter(newCharacter)
  }

  return (
    <div className={cl.counterWrapper}>
      <button className={cl.counter} onClick={() => handleInfoChange(type, 1)}>+</button>
      <button className={cl.counter} onClick={() => handleInfoChange(type, -1)}>-</button>
    </div>
  )
}

export default memo(Counter)