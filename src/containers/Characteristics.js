import React from 'react'
import '../styles/Characteristics.css'
import watermelonGif from '../assets/watermelonGif.gif'
import cleaningImg from '../assets/cleaning.png'
import dimensionsImg from '../assets/dimensions.jpg'

const Characteristics = ({ characteristicsRef }) => {
  return (
    <div
      className='characteristicsContainer'
      ref={characteristicsRef}
    >
      <div className={'characteristicsTitle'}>Opis proizvoda</div>
      <div className={'greenBottom'} />
      <div className={'productDescription'}>
        Predstavljamo vam alatku koja će vam <b>ubrzati</b> i <b>olakšati</b> serviranje lubenice.
        Uz samo par poteza, imaćete isečenu lubenicu na kockice spremnu za serviranje ukućanima i prijateljima.
      </div>
      <img alt={'watermelonGif'} className={'watermelonGif'} src={watermelonGif} />

      <div className={'productDescription'}>
        Ova alatka je <b>veoma jednostavna za održavanje</b>, lako se ispira običnom vodom u samo par sekundi.
        Napravljena je od <b>nerđajućeg metala</b> i moći ćete dugo da je koristite.
      </div>
      <div className={'imagesWrapper'}>
        <img alt={'characteristicsImg'} className={'characteristicsImg'} src={cleaningImg} />
        <img alt={'characteristicsImg'} className={'characteristicsImg'} src={dimensionsImg} />
      </div>
    </div>
  )
}

export default Characteristics
