import React, { useEffect } from 'react'
import CharacterCard from './CharacterCard'
import { useCharacters } from '../store/services/characterApi'
import { setCharactersData } from '../store/slices/charactersSlice'
import { getArrayFromLocalStorage } from '../helpers/lib/localStorage'
import {useAppDispatch} from "../helpers/hooks/useAppDispatch/useAppDispatch";


const Characters = () => {
  const dispatch = useAppDispatch()
  const isLocalCharsData = getArrayFromLocalStorage('localCharsData')

  const {data: chars} = useCharacters(null, {
    pollingInterval: 1000 // запросы каждые 1 сек
  })

  useEffect(() => {
    if (!isLocalCharsData && chars) {
      dispatch(setCharactersData(chars))
    } else {
      dispatch(setCharactersData(isLocalCharsData))
    }
  }, [dispatch, chars])

  return ( 
    <div className='main__characters'>
      
      {chars?.map(char => (
        <CharacterCard key={char.id} char={char}/>
      ))} 
      
    </div>
  )
}

export default Characters