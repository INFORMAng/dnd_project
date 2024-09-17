import React, { useEffect } from 'react'
import CharacterCard from '../components/CharacterCard'
import { useGetCharacters } from '../store/services/characterApi'
import { setCharactersData } from '../store/slices/charactersSlice'
import { getArrayFromLocalStorage, LOCAL_STORAGE_KEYS } from '../helpers/lib/localStorage'
import {useAppDispatch} from "../helpers/hooks/useAppDispatch/useAppDispatch";

const Characters = () => {
  const dispatch = useAppDispatch()
  const isLocalCharsData = getArrayFromLocalStorage(LOCAL_STORAGE_KEYS.CHARS)
  const {data: characters} = useGetCharacters(null)

  useEffect(() => {
    if (!isLocalCharsData && characters) {
      dispatch(setCharactersData(characters))
    } else {
      dispatch(setCharactersData(isLocalCharsData))
    }
  }, [dispatch, characters])

  return ( 
    <div className='main__characters'>
      {characters?.map(character => (
        <CharacterCard key={character.id} character={character}/>
      ))} 
    </div>
  )
}

export default Characters