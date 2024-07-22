import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getChar } from '../store/selectors/charactersSelectors'

const CharacterPage = () => {
  const params = useParams()
  const {name, info: charInfo, stats, skills, personality, inventory, history} = useSelector((state) => getChar(state, params?.id))

  return (
    <div className='character__page'>

      <div className="character__img"/>

      <div className="character__body">
        <h1 style={{textAlign: 'center'}}>{name}</h1>

        <div className="character__about">
          {charInfo.map(info => <div key={info.name} className='about__item'>{info.name}: {info.count}</div>)}
        </div>
        <div className="character__main">

          <div className="character__stats">
            {stats.map(stat => (
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
                {skills.map((skill, index) => (
                  <div key={skill.title} className="skill__item">{index+1}. {skill.title}</div>
                ))}
              </div>

              <div className="character__description">
                {personality.map(item => (
                  <div key={item.title} className="description__item">
                    <h1>{item.title}</h1>
                    <div>{item.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="character__inventory">
              {inventory.map(item => (
                <div key={item} className="inventory__item">{item}</div>
              ))}
            </div>
          </div>
          </div>
        
        <div className="character__history">{history}</div>

      </div>
      
    </div>
  )
}

export default CharacterPage