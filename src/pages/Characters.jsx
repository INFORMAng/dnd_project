import React, { useContext} from 'react'
import { CharContext } from '../context/CharContext'
import Character from './Character'

const Characters = () => {
  
  const {chars, setChars} = useContext(CharContext)
  return ( 
    <div className='main__characters'>
      {chars.map(char => ( 
        <Character key={char.id} char={char}/>
      ))} 
    </div>
  )
}

export default Characters