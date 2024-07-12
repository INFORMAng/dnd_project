import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='nav__links'>
        <Link className="navbar__links" to={'about'}>О игре</Link>
        <Link className="navbar__links" to={'characters'}>Персонажи</Link>
        <Link className="navbar__links" to={'characters'}>Карта</Link>
        <Link className="navbar__links" to={'characters'}>Помощь</Link>
        <Link className="navbar__links" to={'characters'}>Персонажи</Link>
      </div>
    </div>
  )
}

export default Navbar