import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/book6.png"

const Header = () => {
  return (
    <header>
      <Link to="/" className='logo'>
        <img src={logo} alt='book' width="35" height="35" />Book Store
      </Link>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
      </nav>
    </header>
  )
}

export default Header;