import React from 'react'

const Character = () => {
  return (
    <div className='character__page'>

      <div className="character__img"/>

      <div className="character__body">
          <h1 style={{textAlign: 'center'}}>Имя персонажа</h1>
        <div className="character__about">
          <div className='about__item'>Здоровье: 5</div>
          <div className='about__item'>Класс: мечник</div>
          <div className='about__item'>Раса: огр</div>
        </div>
        <div className="character__main">

          <div className="character__stats">
            <div className="character__stats__item">
              <div className="stats__name">Сила</div>
              <div className="stats__count">+1</div>
            </div>
            <div className="character__stats__item">
              <div className="stats__name">Ловкость</div>
              <div className="stats__count">-2</div>
            </div>
            <div className="character__stats__item">
              <div className="stats__name">Выносл.</div>
              <div className="stats__count">+1</div>
            </div>
            <div className="character__stats__item">
              <div className="stats__name">Интелект</div>
              <div className="stats__count">-1</div>
            </div>
            <div className="character__stats__item">
              <div className="stats__name">Мудрость</div>
              <div className="stats__count">+3</div>
            </div>
            <div className="character__stats__item">
              <div className="stats__name">Харизма</div>
              <div className="stats__count">+0</div>
            </div>
          </div>

          <div className="character__items">
            <div className="character__personality">
              <div className="character__skills">
                <h1>Способности</h1>
                <div className="skill__item">1. Бессмертие</div>
                <div className="skill__item">2. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis, et! Eaque dicta voluptates maiores voluptas?</div>
                <div className="skill__item">3. Lorem ipsum dolor sit, amet consectetur adipisicing.</div>
                <div className="skill__item">4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, suscipit rerum. Error, reprehenderit?</div>
              </div>
              <div className="character__description">
                <div className="description__item">
                  <h1>Черты характера</h1>
                  <div>Спокойный, сдержанный, алтруист</div>
                </div>
                <div className="description__item">
                  <h1>Привязанности</h1>
                  <div>дочка</div>
                </div>
                <div className="description__item">
                  <h1>Слабость</h1>
                  <div>грех</div>
                </div>
                <div className="description__item">
                  <h1>Цели</h1>
                  <div>Мир и спокойствие</div>
                </div>
              </div>
            </div>
            <div className="character__inventory">
              <div className="inventory__item">Туалетка</div>
              <div className="inventory__item">ФАЛЛОС</div>
              <div className="inventory__item">ДИЛДО</div>
              <div className="inventory__item">МАШИНА</div>
              <div className="inventory__item">БАЗУКА</div>
            </div>
          </div>
          </div>
        
        <div className="character__history">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda pariatur tenetur exercitationem excepturi ad perferendis dolorem deleniti nobis, voluptates, ipsa sapiente beatae dolorum sed sint aliquid magnam possimus sit eveniet necessitatibus blanditiis? Similique, eum. Tempora labore enim, sunt quaerat dolore eius rerum vitae velit sequi ipsam doloremque veniam pariatur ex recusandae laudantium asperiores, omnis assumenda. Quod sint exercitationem asperiores dolores ut vero molestiae? Eligendi, ab fugiat nobis iusto delectus animi reiciendis repellat placeat natus architecto nostrum? Aut odio repellat voluptatibus nam, exercitationem voluptates? Explicabo consequatur saepe, labore, dolorem odio vero doloremque, aperiam officiis illo quod neque possimus natus repellendus earum?</div>

      </div>
      
    </div>
  )
}

export default Character