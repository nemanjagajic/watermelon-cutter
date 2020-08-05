import React from 'react'
import './styles/Characteristics.css'
import watermelonGif from './assets/watermelonGif.gif'

const Characteristics = () => {
  return (
    <div className='characteristicsContainer'>
      <div className={'characteristicsTitle'}>Opis proizvoda</div>
      <div className={'greenBottom'} />
      <div className={'productDescription'}>
        Predstavljamo vam alatku koja će vam <b>ubrzati</b> i <b>olakšati</b> serviranje lubenice.
        Uz samo par poteza, imaćete isečenu lubenicu na kockice spremnu za serviranje ukućanima i prijateljima.
      </div>
      <img className={'watermelonGif'} src={watermelonGif} />
    </div>
  )
}

export default Characteristics
