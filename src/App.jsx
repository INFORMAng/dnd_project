import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/Navbar'
import { CharContext } from './context/CharContext'
import { useFetching } from './hooks/useFetching'
import CharacterService from './API/CharacterService'

function App() {
  const [Chars, setChars] = useState({})
  const [getChars, isLoading, error] = useFetching(async () => {
    const response = await CharacterService.getCharacter("characters")
    setChars(response.data)
    console.log(Chars)
  })
  useEffect(() => {
    getChars()
  }, []) 
  return (
    <div className='App'>
      <CharContext.Provider value={{
        Chars,
        setChars,
      }}>
        <BrowserRouter>
          <Navbar/>
          <AppRouter/>
        </BrowserRouter>
      </CharContext.Provider>
    </div>
  )
}

export default App
