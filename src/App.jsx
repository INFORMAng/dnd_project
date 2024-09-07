import './styles/App.scss'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import Navbar from './components/Navbar'
import MyModal from './components/UI/MyModal/MyModal'


function App() {

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
