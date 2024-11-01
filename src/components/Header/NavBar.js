import React from 'react'
import SearchBar from './SearchBar'
import Cart from './Cart'
import ThemeButton from './ThemeButton'
import Logo from './Logo'

// Renders the Navbar and all of its components
const NavBar = () => {
  return (
    <div className='navbar navbar-shadow flex space gap-1 align-center page-margin bg-white '>
        <Logo/>
        <SearchBar/>
        <div className='flex gap-1'>
            <ThemeButton/>
            <Cart/>
        </div>   
    </div>
  )
}

export default NavBar