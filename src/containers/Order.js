import React, { useState } from 'react'
import '../styles/Order.css'

const PRICE = 1390;

const Order = ({ numberOfItems, setNumberOfItems }) => {
  const [userData, setUserData] = useState({ email: '', phoneNumber: '' })

  const onChange = e => {
    const { name, value } = e.target
    if (name === 'numOfItems' && value > 0) {
      setNumberOfItems(parseInt(value))
      return
    }
    setUserData({ ...userData, [name]: value })
  }

  return (
    <div className={'orderContainer'}>
      <div className='orderTitle'>Naruči</div>
      <div className='orderGreenBottom' />
      <form className={'content'}>
        <input
          type={'email'}
          className={'input'}
          onChange={onChange}
          name={'email'}
          placeholder={'Email'}
          value={userData.email}
        />
        <input
          className={'input'}
          onChange={onChange}
          name={'phoneNumber'}
          placeholder={'Broj telefona'}
          value={userData.phoneNumber}
        />
        <input
          type={'number'}
          className={'input'}
          onChange={onChange}
          name={'numOfItems'}
          placeholder={'Količina'}
          value={numberOfItems}
        />
        <input
          type={'submit'}
          value={'Naruči'}
          className={'button centered'}
        />
      </form>
      <div className='totalOrder'>
        <div className='totalOrderText'>
          {`Ukupno: ${numberOfItems * PRICE} rsd + troškovi dostave`}
        </div>
      </div>
    </div>
  )
}

export default Order
