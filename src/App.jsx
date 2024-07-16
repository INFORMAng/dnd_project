import {useEffect} from 'react'
import './App.css'
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/UI/navbar/Navbar'
import {useDispatch} from 'react-redux'
import {getArrayToLocalStorage} from './helpers/string'
import {useCharacters} from "./store/services/charactersApi.js";
import {setCharactersData} from "./store/slices/charactersSlice.js";

function App() {
  const dispatch = useDispatch()
  const isLocalCharsData = getArrayToLocalStorage('localCharsData')
  const {data, isLoading, error} = useCharacters(null, {
    pollInterval: 1000
  })

  console.log('isLoading', isLoading, 'error', error, 'data', data)

  useEffect(() => {
    if (!isLocalCharsData && data) {
      dispatch(setCharactersData(data))
    } else {
      dispatch(setCharactersData(isLocalCharsData))
    }
  }, [dispatch, data])

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
