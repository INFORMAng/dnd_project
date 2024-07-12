import React from 'react'
import { useNavigate } from 'react-router-dom'

const Characters = () => {
  const router = useNavigate()
  return (
    <div className='main__characters'>
      <div className="card__character">
        <div>
          <h2>Имя персонажа</h2>
          <div>Класс: Ассасин</div>
          <div>Здоровье: 5</div>
        </div>
        <button onClick={() => router('/character/1')}>ОПИСАНИЕ</button>
      </div>
      <div className="card__character">
        <div>
          <h2>Имя персонажа</h2>
          <div>Класс: Ассасин</div>
          <div>Здоровье: 5</div>
        </div>
        <button onClick={() => router('/character/1')}>ОПИСАНИЕ</button>
      </div>
      <div className="card__character">
        <div>
          <h2>Имя персонажа</h2>
          <div>Клfasfsafsfsfsfs</div>
          <div>Здоровье: 5</div>
        </div>
        <button onClick={() => router('/character/1')}>ОПИСАНИЕ</button>
      </div>
      <div className="card__character">
        <div>
          <h2>Имя персонажа</h2>
          <div>Класс: Ассасин</div>
          <div>Здоровье: 5</div>
        </div>
        <button onClick={() => router('/character/1')}>ОПИСАНИЕ</button>
      </div>
    </div>
  )
}

export default Characters