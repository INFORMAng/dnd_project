import React from 'react'
import { useSelector } from 'react-redux'
import { getCharsData } from '../store/selectors/charactersSelectors'
import Character from './Character'


const Characters = () => {
  const chars = useSelector(getCharsData)

  return ( 
    <div className='main__characters'>

      {chars?.map(char => ( 
        <Character key={char.id} char={char}/>
      ))} 
      
    </div>
  )
}

export default Characters