import ImageCarousel from '../components/ImageCarousel'
import React, { useState } from 'react'
import '../styles/Product.css'

const PRICE_OLD = 1790;
const PRICE = 1390;

const Product = ({ numberOfItems, setNumberOfItems }) => {
  return (
    <div className='productPageContent'>
      <div className='carouselContainer'>
        <ImageCarousel/>
      </div>
      <div className='productInfo'>
        <div className='productTitle'>Sekač za lubenicu</div>
        <div className='productDescription'>Brzo i jednostavno, za samo par trenutaka do savršeno isečene lubenice</div>
        <div className='priceContainer'>
          <div className='priceOld'>{`Redovna cena: ${PRICE_OLD} rsd`}</div>
          <div className='newPriceContainer'>
            <div className='newPriceLabel'>Cena:</div>
            <div className='newPrice'>{`${PRICE} rsd`}</div>
          </div>
          <div className='quantity'>
            <div className='quantityText'>Količina:</div>
            <div onClick={() => setNumberOfItems(numberOfItems + 1)} className='addButton'>+</div>
            <div className='numberOfItems'>{numberOfItems}</div>
            <div onClick={() => {
              if (numberOfItems > 1) setNumberOfItems(numberOfItems - 1)
            }} className='removeButton'>-</div>
          </div>
          <div className='total'>
            <div className='totalText'>{`Ukupno: ${PRICE} x ${numberOfItems} = ${numberOfItems * PRICE} rsd + troškovi dostave`}</div>
          </div>
          <div className={'orderButton'}>Naruči</div>
        </div>
      </div>
    </div>
  )
}

export default Product
