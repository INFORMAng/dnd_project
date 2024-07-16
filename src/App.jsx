import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/Navbar'
import { useFetching } from './hooks/useFetching'
import CharacterService from './API/CharacterService'
import { useDispatch } from 'react-redux'
import { setCharactersData } from './store/slices/charactersSlice'
import { getArrayToLocalStorage } from './helpers/string'

function App() {
  const dispatch = useDispatch()
  const isLocalCharsData = getArrayToLocalStorage('localCharsData')

  const [getChars, isLoading, error] = useFetching(async () => {
    const response = await CharacterService.getCharacter("characters")
    dispatch(setCharactersData(isLocalCharsData ? isLocalCharsData : response.data))
  })
  

  useEffect(() => {
      getChars()
  }, []) 

  return (
    <div className='App'>
        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
        </BrowserRouter>
    </div>
  )
}

export default App
