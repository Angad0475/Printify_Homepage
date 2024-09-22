import React from 'react'
import './Navbar.scss';
import logo from '../../Assets/logo.jpg';
import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
function Navbar() {
  return (
  
    <header className='navbar'>
      <div className='toggle-btn'>
      <IoReorderThreeOutline className='toggle'/>
      </div>
      <div className='nav_logo'>
        <img className='logo' src={logo} alt=''/>
      </div>
      <div>
        <p className='logo_name'>Printify</p>
      </div>

      <div className='nav-menu'>
          <li>Catalog</li>
          <li>How it works<IoMdArrowDropdown/></li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>Services<IoMdArrowDropdown/></li>
          <li>Use-Cases<IoMdArrowDropdown/></li>
          <li>Need help?<IoMdArrowDropdown/></li>
      </div>

      <div className='logIn'>
        <p className='log'>Log in</p>
      </div>
      <div className='signIn'>
        <p className='sign'>Sign up</p>
      </div>
                 
    </header>

    
  )
}
export default Navbar;