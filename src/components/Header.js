import React from 'react'
import logo from '../assets/logo.png'
import '../styles/Header.css'

function Header() {
  return (
    <div className='container'>
      <div className='headerItem'>Proizvod</div>
      <img className='logo' src={logo} />
      <div className='headerItem'>Kontakt</div>
    </div>
  );
}

export default Header
