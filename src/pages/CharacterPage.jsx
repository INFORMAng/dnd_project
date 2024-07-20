import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getCharsData } from '../store/selectors/charactersSelectors'

const CharacterPage = () => {
  const params = useParams()
  const [char] = useSelector(getCharsData).filter(char => char.id === params.id) 

  return (
    <div className='character__page'>

      <div className="character__img"/>

      <div className="character__body">
        <h1 style={{textAlign: 'center'}}>{char.name}</h1>

        <div className="character__about">
          {char.info.map(info => <div key={info.name} className='about__item'>{info.name}: {info.count}</div>)}
        </div>
        <div className="character__main">

          <div className="character__stats">
            {char.stats.map(stat => (
              <div key={stat.name} className="character__stats__item">
                <div className="stats__name">{stat.name}</div>
                <div className="stats__count">{stat.count}</div>
              </div>
            ))}
          </div>

          <div className="character__items">
            <div className="character__personality">

              <div className="character__skills">
                <h1>Способности</h1>
                {char.skills.map((skill, index) => (
                  <div key={skill.title} className="skill__item">{index+1}. {skill.title}</div>
                ))}
              </div>

              <div className="character__description">
                {char.personality.map(item => (
                  <div key={item.title} className="description__item">
                    <h1>{item.title}</h1>
                    <div>{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="character__inventory">
              {char.inventory.map(item => (
                <div key={item} className="inventory__item">{item}</div>
              ))}
            </div>
          </div>
          </div>
        
        <div className="character__history">{char.history}</div>

      </div>
      
    </div>
  )
}

export default CharacterPage