import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav__links'>
        <Link className="navbar__links" to={'about'}>Об игре</Link>
        <Link className="navbar__links" to={'characters'}>Персонажи</Link>
        <Link className="navbar__links" to={'map'}>Карта</Link>
        <Link className="navbar__links" to={'characters'}>Помощь</Link>
        <Link className="navbar__links" to={'characters'}>Авторы</Link>
      </div>
    </div>
  )
}

export default Navbar