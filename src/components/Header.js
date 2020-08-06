import React from 'react'
import logo from '../assets/logo.png'
import '../styles/Header.css'

function Header({ orderRef, characteristicsRef, scrollTo }) {
  return (
    <div className='container'>
      <div onClick={() => scrollTo(characteristicsRef)} className='headerItem'>Proizvod</div>
      <img alt={'logo'} className='logo' src={logo} />
      <div onClick={() => scrollTo(orderRef)} className='headerItem'>Naruči</div>
    </div>
  );
}

export default Header
