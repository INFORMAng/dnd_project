import React, { useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { CharContext } from '../context/CharContext'

const Characters = () => {
  const router = useNavigate()
  const {Chars, setChars} = useContext(CharContext)
  return ( 
    <div className='main__characters'>
      {Chars.map(char => ( 
      <div key={char.id} className="card__character">
        <div>
          <h2>{char.name}</h2>
          <div>Класс: {char.info.class}</div>
          <div>Здоровье: {char.info.health}</div>
        </div>
        <button onClick={() => router('/character/1')}>ОПИСАНИЕ</button>
      </div>
      ))} 
    </div>
  )
}

export default Characters