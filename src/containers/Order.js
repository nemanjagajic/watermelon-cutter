import React, { useState } from 'react'
import '../styles/Order.css'
import emailjs from 'emailjs-com';
import { userID, template, serviceId } from '../config/keys'

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

  const handleSubmit = e => {
    e.preventDefault()
    const data = {...userData, numberOfItems}

    emailjs.send(serviceId, template, data, userID)
      .then((result) => {
        console.log('Success!', result)
      }, (error) => {
        console.log(error.text);
      });
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
          onClick={handleSubmit}
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
